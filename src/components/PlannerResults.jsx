// Planner step 2: practices that address the chosen concerns (port of
// ConservationPracticeExplorer.vue) with the top matches called out and the
// Handbook integrated inline.
import { useCallback, useEffect, useMemo, useState } from 'react'
import { href, navigate, absoluteUrl, BASE } from '../lib/router.js'
import { loadPlannerData, readPlannerState, computeResults, topPractices, displayName, downloadCsv, savePlannerState, crosswalk, colorScale, valueToTextColor, plannerQuery } from '../lib/planner.js'
import { pageBySlug, definitionOf, circleArtForCp } from '../lib/handbook.js'
import Heatmap from './Heatmap.jsx'
import HandbookContent from './HandbookContent.jsx'
import Stepper from './Stepper.jsx'
import { Toast, useToast, copyText } from './Shell.jsx'

const HANDBOOK_LANDING = '/handbook'

export default function PlannerResults({ route }) {
  const [data, setData] = useState(null)
  const [drawer, setDrawer] = useState(null) // handbook page slug
  const [toast, setToast] = useToast()
  const { concerns: chosen, form } = useMemo(() => readPlannerState(route.query), [route.query])

  useEffect(() => { loadPlannerData().then(setData) }, [])
  useEffect(() => { savePlannerState({ concerns: chosen, form }) }, [chosen, form])

  const results = useMemo(() => (data ? computeResults(data, chosen) : null), [data, chosen])
  const top = useMemo(() => (results ? topPractices(results, 3) : []), [results])
  const highlighted = useMemo(() => top.map(t => t.name), [top])

  const openPractice = useCallback(name => { const s = crosswalk.practices[name]?.slug; if (s) setDrawer(s) }, [])
  const openConcern = useCallback(name => { const s = crosswalk.concerns[name]; if (s) setDrawer(s) }, [])

  useEffect(() => {
    if (!drawer) return
    const onKey = e => { if (e.key === 'Escape') setDrawer(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [drawer])

  if (!chosen.length) {
    return (
      <section className="section">
        <Stepper current={3} query={plannerQuery(form, chosen)} reachable={() => true} />
        <div className="panel sand"><div className="ptitle">No concerns selected</div><p className="small">Pick at least one resource concern to see conservation practices.</p><div><a className="pill river" href={href('/planner/concerns', plannerQuery(form, chosen))}>← Choose resource concerns</a></div></div>
      </section>
    )
  }
  if (!data) return <div className="loading"><span className="spinner" />Loading planner data…</div>

  const unknown = chosen.filter(c => !crosswalk.concerns[c])
  const editHref = href('/planner/concerns', plannerQuery(form, chosen))
  const copyLink = async () => setToast((await copyText(absoluteUrl('/planner/results', plannerQuery(form, chosen)))) ? 'Link copied' : 'Could not copy — use the address bar')
  const practiceInfo = name => {
    const x = crosswalk.practices[name]
    const page = x && pageBySlug[x.slug]
    const def = x?.definition || definitionOf(page)
    return { cp: x?.cp, slug: x?.slug, page, definition: def, fromHandbook: !x?.definition && !!def }
  }

  return (
    <>
      <section className="section" style={{ paddingTop: 6 }}>
        <Stepper current={3} query={plannerQuery(form, chosen)} reachable={() => true} />
        <div className="between">
          <div className="cluster">
            <a className="pill sand" href={editHref}>← Back: resource concerns</a>
            <button className="pill" type="button" onClick={copyLink}>Copy link</button>
            <button className="pill" type="button" onClick={() => downloadCsv(results.pairs)}><span className="ico">⤓</span> Download (CSV)</button>
          </div>
          <a className="pill river" style={{ whiteSpace: 'normal', textAlign: 'center' }} href={href(HANDBOOK_LANDING)}>Learn about these practices and concerns in the AquaCorridors Handbook →</a>
        </div>

        <div className="result-head">
          <div className="stack" style={{ gap: 10, flex: '1 1 460px' }}>
            <div className="eyebrow">AquaCorridors Planner · step 3 of 3{form.name ? ` · for ${form.name}` : ''}{form.state && form.state !== 'NONE' ? ` · ${form.county ? form.county + ' County, ' : ''}${form.state}` : ''}</div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,44px)' }}>NRCS Conservation Practices that Address Your Resource Concerns</h1>
            <div className="cluster" aria-label="Selected concerns">
              {chosen.map(c => crosswalk.concerns[c]
                ? <a key={c} className="chip" href={href('/handbook/' + crosswalk.concerns[c])} onClick={e => { e.preventDefault(); setDrawer(crosswalk.concerns[c]) }} title="Open in the Handbook">{c} ↗</a>
                : <span key={c} className="chip paper">{c}</span>)}
            </div>
            {unknown.length > 0 && <div className="notice">Some concerns in this link are not in the current planner data and were ignored: {unknown.join('; ')}.</div>}
          </div>
          <div className="kv panel sand" style={{ padding: '16px 20px', borderRadius: 20, minWidth: 220 }}>
            <span className="k">Concerns</span><b>{results.concerns.length}</b>
            <span className="k">Practices with an effect</span><b>{results.practices.length}</b>
            <span className="k">Scored by</span><span className="small">USDA NRCS CPPE</span>
          </div>
        </div>
      </section>

      {top.length > 0 && (
        <section className="section" style={{ paddingTop: 34 }}>
          <div className="section-head"><span className="arch" /><span className="title">Start here · highest combined effect</span></div>
          <p className="small muted" style={{ maxWidth: '78ch', marginTop: 10 }}>
            The same ranking as the graph below: practices are ordered by the sum of their CPPE effect scores across the {results.concerns.length} concern{results.concerns.length > 1 ? 's' : ''} you selected. These are the top {top.length}. The full list follows.
          </p>
          <div className="start-grid">
            {top.map((t, i) => {
              const info = practiceInfo(t.name)
              const art = info.cp && circleArtForCp(info.cp)
              return (
                <div className={`start ${i === 0 ? 'top' : ''}`} key={t.name}>
                  {art && <img className="circle" src={art} alt="" />}
                  <div className="rank">#{i + 1} · combined score {t.score}{info.cp ? ` · CP ${info.cp}` : ''}</div>
                  <div className="t">{displayName(t.name)}</div>
                  {info.definition && <div className="d">{info.definition}</div>}
                  <div className="scores">
                    {results.concerns.map(c => {
                      const v = results.byPractice[t.name]?.[c] ?? 0
                      return <div className="sc" key={c}><span className="v" style={{ background: colorScale(v), color: valueToTextColor(v) }}>{v}</span><span className="c">{c}</span></div>
                    })}
                  </div>
                  <div className="foot">
                    {info.slug && <button className="pill sm river" type="button" onClick={() => setDrawer(info.slug)}>Read in the Handbook</button>}
                    {info.slug && <a className="pill sm" href={href('/handbook/' + info.slug)}>Open page ↗</a>}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 34 }}>
        <div className="section-head"><span className="arch" style={{ background: 'var(--moss)' }} /><span className="title">All practices with an effect on your concerns</span></div>
        <div className="howto">
          <b>How to Interpret This Graph:</b> This graph visualizes overlap and patterns in the effectiveness of certain conservation practices. The vertical left-hand column lists out conservation practices used by NRCS EQIP program and the top horizontal row lists resource concerns you selected on the previous page. The numbers in the graph indicate the severity of the impact as shown in the effect score key above the graph. This data comes from USDA's Conservation Practice Physical Effects (CPPE) scores.
          <div className="small muted" style={{ marginTop: 8 }}>Click a practice or concern name to read its Handbook page. Rows are ordered by combined score; the top {top.length} are shown in bold.</div>
        </div>
        <Heatmap results={results} highlighted={highlighted} onPractice={openPractice} onConcern={openConcern} />
        <div className="between">
          <button className="pill sand" type="button" onClick={() => downloadCsv(results.pairs)}><span className="ico">⤓</span> Download (CSV)</button>
          <a className="pill" href={editHref}>← Back: resource concerns</a>
        </div>
      </section>

      {drawer && pageBySlug[drawer] && (
        <div className="drawer-bg" onClick={() => setDrawer(null)}>
          <aside className="drawer" role="dialog" aria-label="Handbook page" onClick={e => e.stopPropagation()}>
            <div className="bar">
              <div><div className="eyebrow" style={{ opacity: .75 }}>AquaCorridors Handbook</div><div className="t">{pageBySlug[drawer].title}</div></div>
              <div className="cluster">
                <a className="pill xs sand" href={href('/handbook/' + drawer)}>Open full page ↗</a>
                <button className="pill xs ghost light" type="button" onClick={() => setDrawer(null)}>Close ✕</button>
              </div>
            </div>
            <div className="body">
              <HandbookContent page={pageBySlug[drawer]} onNavigate={setDrawer} />
            </div>
          </aside>
        </div>
      )}
      <Toast msg={toast} />
    </>
  )
}
