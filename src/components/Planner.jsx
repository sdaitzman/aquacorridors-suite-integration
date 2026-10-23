// Planner steps 1 and 2 (port of ConcernPicker.vue as a stepper).
// Step 1 — About you: Name (optional), State*, County*, Organization*, Role (optional).
//   Same rule as the original: the three starred fields are required; fields validate
//   on blur/change; "Please fill in all required fields to continue." while invalid.
// Step 2 — Resource concerns: category cards with toggle-all checkboxes, then the single
//   "Explore conservation practices" action.
// State lives in the query string (shareable, survives Back/Forward) and in
// sessionStorage (so trips to the Handbook never lose it).
import { useEffect, useMemo, useRef, useState } from 'react'
import { href, navigate, BASE } from '../lib/router.js'
import { loadPlannerData, readPlannerState, plannerQuery, savePlannerState, loadPlannerState, isFormValid, FORM_KEYS, crosswalk, US_STATES } from '../lib/planner.js'
import { pageBySlug, definitionOf } from '../lib/handbook.js'
import Stepper from './Stepper.jsx'

const REQUIRED = ['state', 'county', 'organization']
const REQUIRED_MSG = { state: 'State is required.', county: 'County is required.', organization: 'Organization is required.' }

export default function Planner({ route, step }) {
  const [data, setData] = useState(null)
  // URL wins; otherwise restore the session's saved answers.
  const initial = useMemo(() => {
    const fromUrl = readPlannerState(route.query)
    if (fromUrl.concerns.length || Object.values(fromUrl.form).some(Boolean)) return fromUrl
    return loadPlannerState() || fromUrl
  }, [route.query])
  const [checked, setChecked] = useState(initial.concerns)
  const [form, setForm] = useState(initial.form)
  const [errors, setErrors] = useState({})
  const [openInfo, setOpenInfo] = useState(null)
  const headingRef = useRef(null)

  useEffect(() => { loadPlannerData().then(setData) }, [])
  useEffect(() => { savePlannerState({ concerns: checked, form }) }, [checked, form])
  // Keep local state in sync when the URL changes (Back/Forward, stepper links).
  useEffect(() => { setChecked(initial.concerns); setForm(initial.form) }, [initial])

  const isValid = isFormValid(form)
  // Step 2 needs a valid step 1. If someone lands on step 2 without it, send them back.
  useEffect(() => {
    if (step === 2 && !isValid) navigate('/planner', plannerQuery(form, checked))
  }, [step]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { headingRef.current?.focus({ preventScroll: true }) }, [step])
  // A tapped-open popover closes on any click outside it or on Escape.
  useEffect(() => {
    if (!openInfo) return
    const onDoc = e => { if (!e.target.closest('.info-wrap')) setOpenInfo(null) }
    const onKey = e => { if (e.key === 'Escape') setOpenInfo(null) }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey) }
  }, [openInfo])

  if (!data) return <div className="loading"><span className="spinner" />Loading planner data…</div>

  const query = plannerQuery(form, checked)
  const reachable = n => n === 1 || (n === 2 && isValid) || (n === 3 && isValid && checked.length > 0)

  const validateField = field => setErrors(e => ({ ...e, [field]: !form[field] }))
  const setF = k => e => {
    const v = e.target.value
    setForm(f => ({ ...f, [k]: v }))
    if (REQUIRED.includes(k)) setErrors(er => ({ ...er, [k]: !v }))
  }
  const fieldClass = k => (errors[k] ? 'is-invalid' : !errors[k] && form[k] && REQUIRED.includes(k) ? 'is-valid' : '')
  const next = () => {
    if (!isValid) { setErrors(Object.fromEntries(REQUIRED.map(k => [k, !form[k]]))); document.querySelector('.field .is-invalid')?.focus(); return }
    navigate('/planner/concerns', query)
  }
  const resetAll = () => { setForm(Object.fromEntries(FORM_KEYS.map(k => [k, '']))); setChecked([]); setErrors({}); setOpenInfo(null); navigate('/planner') }

  const toggle = c => setChecked(cs => (cs.includes(c) ? cs.filter(x => x !== c) : [...cs, c]))
  const toggleAll = cat => {
    const list = data.concernsByCategory[cat]
    const allOn = list.every(c => checked.includes(c))
    setChecked(cs => (allOn ? cs.filter(c => !list.includes(c)) : [...cs, ...list.filter(c => !cs.includes(c))]))
  }
  const exploreHref = isValid ? href('/planner/results', query) : '#'

  return (
    <>
      <section className="section" style={{ paddingTop: 6 }}>
        <div className="hero sand" style={{ minHeight: 170 }}>
          <div className="deco" style={{ right: -40, top: -40, width: 240, height: 120, background: 'var(--lmoss)', borderRadius: '0 0 240px 240px' }} />
          <img className="deco art" src={`${BASE}art/bog-turtle.jpg`} alt="Bog Turtle" style={{ right: '-3%', top: '-8%', width: 'min(36%,380px)', transform: 'rotate(8deg)' }} />
          <div className="copy" style={{ gap: 10 }}>
            <div className="eyebrow">AquaCorridors Planner</div>
            <h1 ref={headingRef} tabIndex={-1} style={{ fontSize: 'clamp(26px,4vw,42px)', outline: 'none' }}>
              {step === 1 ? 'Tell us about your conservation interests' : 'Which resource concerns apply to your land?'}
            </h1>
          </div>
        </div>
        <Stepper current={step} query={query} reachable={reachable} />
      </section>

      {step === 1 && (
        <form className="section" style={{ paddingTop: 20 }} onSubmit={e => { e.preventDefault(); next() }} noValidate>
          <div className="panel lmoss" style={{ maxWidth: 760 }}>
            <div className="ptitle">About you</div>
            <div className="form-grid">
              <label className="field"><span className="label">Name</span>
                <input value={form.name} onChange={setF('name')} autoComplete="name" id="name" /></label>
              <label className="field"><span className="label">State <span className="req" aria-hidden="true">*</span></span>
                <select id="state" value={form.state} onChange={setF('state')} onBlur={() => validateField('state')} className={fieldClass('state')} required aria-required="true" aria-invalid={!!errors.state}>
                  <option value="" disabled>Select your state</option>
                  {US_STATES.map(([v, n]) => <option key={v} value={v}>{n}</option>)}
                </select>
                {errors.state && <span className="invalid-feedback" role="alert">{REQUIRED_MSG.state}</span>}
              </label>
              <label className="field"><span className="label">County <span className="req" aria-hidden="true">*</span></span>
                <input id="county" value={form.county} onChange={setF('county')} onBlur={() => validateField('county')} className={fieldClass('county')} required aria-required="true" aria-invalid={!!errors.county} />
                {errors.county && <span className="invalid-feedback" role="alert">{REQUIRED_MSG.county}</span>}
              </label>
              <label className="field"><span className="label">Organization <span className="req" aria-hidden="true">*</span></span>
                <input id="organization" value={form.organization} onChange={setF('organization')} onBlur={() => validateField('organization')} className={fieldClass('organization')} required aria-required="true" aria-invalid={!!errors.organization} autoComplete="organization" />
                {errors.organization && <span className="invalid-feedback" role="alert">{REQUIRED_MSG.organization}</span>}
              </label>
              <label className="field"><span className="label">Role</span>
                <select id="role" value={form.role} onChange={setF('role')} aria-label="role">
                  <option value="" disabled>Select your role</option>
                  <option value="landowner">Landowner</option>
                  <option value="biologist">Biologist</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div className="between" style={{ marginTop: 6 }}>
              <span className="small muted"><span className="req">*</span> required{!isValid ? ' · Please fill in all required fields to continue.' : ''}</span>
              <div className="cluster">
                {(checked.length > 0 || Object.values(form).some(Boolean)) && <button className="pill sm" type="button" onClick={resetAll}>Reset</button>}
                <button className="pill river" type="submit" aria-disabled={!isValid}>Next: resource concerns →</button>
              </div>
            </div>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="section" style={{ paddingTop: 20 }} onSubmit={e => e.preventDefault()} noValidate>
          <div className="between" style={{ marginBottom: 12 }}>
            <div>
              <div className="ptitle" style={{ color: 'var(--deep)', fontSize: 20, fontWeight: 600, letterSpacing: '-.02em' }}>Your resource concerns</div>
              <div className="small muted">{checked.length} selected · tick a category heading to select all of it · tap <span className="chip mono" style={{ padding: '0 7px' }}>i</span> for a definition and the Handbook page</div>
            </div>
            <div className="cluster">
              <button className="pill sm" type="button" onClick={() => setChecked([])} disabled={!checked.length}>Clear selection</button>
              <a className={`pill river ${isValid ? '' : 'disabled'}`} aria-disabled={!isValid} href={exploreHref}>Explore conservation practices →</a>
            </div>
          </div>
          <div className="masonry">
            {Object.entries(data.concernsByCategory).map(([cat, list]) => {
              const on = list.filter(c => checked.includes(c)).length
              return (
                <div className="cat" key={cat}>
                  <label className="head">
                    <IndeterminateBox id={cat + '-checkbox'} checked={on === list.length} indeterminate={on > 0 && on < list.length} onChange={() => toggleAll(cat)} />
                    <b>{cat}</b>
                    <span className="n chip mono" style={{ padding: '2px 8px' }}>{on}/{list.length}</span>
                  </label>
                  {list.map(c => {
                    const slug = crosswalk.concerns[c]
                    const isOn = checked.includes(c)
                    const open = openInfo === c
                    const popId = `pop-${slug || c.replace(/\W+/g, '-')}`
                    return (
                      <div className={`check-row ${isOn ? 'on' : ''}`} key={c}>
                        <label className="check">
                          <input type="checkbox" checked={isOn} onChange={() => toggle(c)} value={c} />
                          <span className="txt">{c}</span>
                        </label>
                        {/* The info button lives outside the label so it never toggles the checkbox. */}
                        <div className={`info-wrap ${open ? 'open' : ''}`} onMouseLeave={() => { if (open) setOpenInfo(null) }}>
                          <button type="button" className="info" aria-expanded={open} aria-controls={popId} aria-label={`About ${c}`}
                            onClick={() => setOpenInfo(open ? null : c)}
                            onKeyDown={e => { if (e.key === 'Escape') { setOpenInfo(null); e.currentTarget.blur() } }}>i</button>
                          <div className="pop" id={popId} role="tooltip">
                            <div>{data.concernDescriptions[c] || definitionOf(pageBySlug[slug]) || 'No definition available.'}</div>
                            <div className="between">
                              <span className="src">{data.concernDescriptions[c] ? 'NRCS resource concern definition' : 'From the Handbook'}</span>
                              {slug && <a className="pill xs sand" href={href('/handbook/' + slug)}>Read in the Handbook →</a>}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div className="between" style={{ marginTop: 10 }}>
            <a className="pill sand" href={href('/planner', query)}>← Back: about you</a>
            <div className="stack" style={{ gap: 6, alignItems: 'flex-end' }}>
              <a className={`pill river ${isValid ? '' : 'disabled'}`} aria-disabled={!isValid} href={exploreHref}>Explore conservation practices →</a>
              {!isValid && <span className="small muted">Please fill in all required fields to continue.</span>}
              {isValid && !checked.length && <span className="small muted">No concerns selected yet — the results will be empty.</span>}
            </div>
          </div>
        </form>
      )}
    </>
  )
}

function IndeterminateBox({ indeterminate, ...props }) {
  const ref = useRef(null)
  useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate }, [indeterminate])
  return <input ref={ref} type="checkbox" {...props} />
}
