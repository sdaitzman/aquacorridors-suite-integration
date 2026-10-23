// Planner step 1: the concern picker (port of ConcernPicker.vue).
import { useEffect, useMemo, useRef, useState } from 'react'
import { href, navigate, BASE } from '../lib/router.js'
import { loadPlannerData, readPlannerState, plannerQuery, savePlannerState, loadPlannerState, crosswalk, US_STATES } from '../lib/planner.js'
import { pageBySlug, definitionOf } from '../lib/handbook.js'

export default function Planner({ route }) {
  const [data, setData] = useState(null)
  const initial = useMemo(() => {
    const fromUrl = readPlannerState(route.query)
    if (fromUrl.concerns.length || Object.values(fromUrl.form).some(Boolean)) return fromUrl
    return loadPlannerState() || fromUrl
  }, [route.query])
  const [checked, setChecked] = useState(initial.concerns)
  const [form, setForm] = useState(initial.form)
  const [openInfo, setOpenInfo] = useState(null)

  useEffect(() => { loadPlannerData().then(setData) }, [])
  useEffect(() => { savePlannerState({ concerns: checked, form }) }, [checked, form])

  if (!data) return <div className="loading"><span className="spinner" />Loading planner data…</div>

  const allConcerns = Object.values(data.concernsByCategory).flat()
  const valid = checked.length > 0
  const toggle = c => setChecked(cs => (cs.includes(c) ? cs.filter(x => x !== c) : [...cs, c]))
  const toggleAll = cat => {
    const list = data.concernsByCategory[cat]
    const allOn = list.every(c => checked.includes(c))
    setChecked(cs => (allOn ? cs.filter(c => !list.includes(c)) : [...cs, ...list.filter(c => !cs.includes(c))]))
  }
  const go = () => {
    if (!valid) return
    navigate('/planner/results', plannerQuery(form, checked))
  }
  const setF = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="hero sand" style={{ minHeight: 240 }}>
          <div className="deco" style={{ right: -40, top: -40, width: 240, height: 120, background: 'var(--lmoss)', borderRadius: '0 0 240px 240px' }} />
          <div className="deco" style={{ right: '24%', bottom: -70, width: 170, height: 170, background: 'var(--river)', borderRadius: 999, opacity: .25 }} />
          <img className="deco art" src={`${BASE}art/bog-turtle.jpg`} alt="Bog Turtle" style={{ right: '-3%', top: '-6%', width: 'min(40%,420px)', transform: 'rotate(8deg)' }} />
          <div className="copy">
            <div className="eyebrow">AquaCorridors Planner · step 1 of 2</div>
            <h1 style={{ fontSize: 'clamp(30px,4.6vw,50px)' }}>Tell us about your conservation interests</h1>
            <p className="lede">Check every resource concern that applies to your land. Next, we'll show the NRCS conservation practices that address them and link each one to the Handbook.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 22 }}>
        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div className="panel lmoss" style={{ flex: '1 1 300px', maxWidth: 420 }}>
            <div className="ptitle">About you <span className="label" style={{ marginLeft: 8 }}>optional</span></div>
            <label className="field"><span className="label">Name</span><input value={form.name} onChange={setF('name')} autoComplete="name" /></label>
            <label className="field"><span className="label">State</span>
              <select value={form.state} onChange={setF('state')}>
                <option value="">Select your state</option>
                {US_STATES.map(([v, n]) => <option key={v} value={v}>{n}</option>)}
              </select>
            </label>
            <label className="field"><span className="label">County</span><input value={form.county} onChange={setF('county')} /></label>
            <label className="field"><span className="label">Organization</span><input value={form.organization} onChange={setF('organization')} autoComplete="organization" /></label>
            <label className="field"><span className="label">Role</span>
              <select value={form.role} onChange={setF('role')}>
                <option value="">Select your role</option>
                <option value="landowner">Landowner</option>
                <option value="biologist">Biologist</option>
                <option value="other">Other</option>
              </select>
            </label>
            <p className="small muted">These details are kept in the page link so you can share or bookmark your results. Nothing is sent anywhere.</p>
          </div>

          <div className="stack" style={{ flex: '2 1 520px' }}>
            <div className="between">
              <div>
                <div className="ptitle" style={{ color: 'var(--deep)', fontSize: 20, fontWeight: 600, letterSpacing: '-.02em' }}>Your resource concerns</div>
                <div className="small muted">{checked.length} of {allConcerns.length} selected · tap <span className="chip mono" style={{ padding: '0 7px' }}>i</span> for a definition and the Handbook page</div>
              </div>
              <div className="cluster">
                <button className="pill sm" type="button" onClick={() => setChecked([])} disabled={!checked.length}>Clear</button>
                <button className="pill river" type="button" onClick={go} disabled={!valid}>Explore conservation practices →</button>
              </div>
            </div>
            <div className="masonry">
              {Object.entries(data.concernsByCategory).map(([cat, list]) => {
                const on = list.filter(c => checked.includes(c)).length
                return (
                  <div className="cat" key={cat}>
                    <label className="head">
                      <IndeterminateBox checked={on === list.length} indeterminate={on > 0 && on < list.length} onChange={() => toggleAll(cat)} />
                      <b>{cat}</b>
                      <span className="n chip mono" style={{ padding: '2px 8px' }}>{on}/{list.length}</span>
                    </label>
                    {list.map(c => {
                      const slug = crosswalk.concerns[c]
                      const isOn = checked.includes(c)
                      const open = openInfo === c
                      return (
                        <div key={c}>
                          <label className={`check ${isOn ? 'on' : ''}`}>
                            <input type="checkbox" checked={isOn} onChange={() => toggle(c)} />
                            <span className="txt">{c}</span>
                            <button type="button" className="info" aria-expanded={open} aria-label={`About ${c}`} onClick={e => { e.preventDefault(); setOpenInfo(open ? null : c) }}>i</button>
                          </label>
                          {open && (
                            <div className="defn">
                              <div>{data.concernDescriptions[c] || definitionOf(pageBySlug[slug]) || 'No definition available.'}</div>
                              <div className="between">
                                <span className="src">{data.concernDescriptions[c] ? 'NRCS resource concern definition' : 'From the Handbook'}</span>
                                {slug && <a className="pill xs sand" href={href('/handbook/' + slug)}>Read in the Handbook →</a>}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
            <div className="between">
              <span className="small muted">{valid ? `${checked.length} concern${checked.length > 1 ? 's' : ''} selected.` : 'Select at least one concern to continue.'}</span>
              <button className="pill river" type="button" onClick={go} disabled={!valid}>Explore conservation practices →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function IndeterminateBox({ indeterminate, ...props }) {
  const ref = useRef(null)
  useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate }, [indeterminate])
  return <input ref={ref} type="checkbox" {...props} />
}
