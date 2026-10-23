// The AquaCorridors Handbook: sidebar navigation mirroring the vault folders,
// one page rendered from its markdown, cross-links to the Planner, and an embed helper.
import { useEffect, useMemo, useState } from 'react'
import { href, navigate, absoluteUrl, useMediaQuery } from '../lib/router.js'
import { pages, pageBySlug, navTree, searchPages, isPractice, isThreat, circleArt, cpNumber } from '../lib/handbook.js'
import { crosswalk, savePlannerState, getPlannerRun, plannerQuery, loadPlannerData, computeResults, isFormValid } from '../lib/planner.js'
import HandbookContent from './HandbookContent.jsx'
import { Toast, useToast, copyText } from './Shell.jsx'

const concernByThreatSlug = Object.fromEntries(Object.entries(crosswalk.concerns).map(([c, s]) => [s, c]))
const practiceBySlug = Object.fromEntries(Object.entries(crosswalk.practices).map(([n, v]) => [v.slug, n]))

export default function Handbook({ route, slug }) {
  const page = pageBySlug[slug || 'home'] || null
  const embed = route.embed
  const tree = useMemo(() => navTree(), [])
  const pageOnly = embed === 'page'

  if (!page) {
    return (
      <section className="section">
        <div className="panel sand"><div className="ptitle">Page not found</div><p className="small">There is no Handbook page at <code>{slug}</code>.</p><div><a className="pill river" href={href('/handbook')}>Handbook home</a></div></div>
      </section>
    )
  }
  return (
    <section className="section" style={{ paddingTop: embed ? 0 : 16 }}>
      <div className="hb" style={pageOnly ? { gridTemplateColumns: '1fr' } : undefined}>
        {!pageOnly && <Nav tree={tree} current={page.slug} />}
        <Page page={page} embed={embed} />
      </div>
    </section>
  )
}

function Nav({ tree, current }) {
  const [q, setQ] = useState('')
  const hits = searchPages(q)
  const ancestors = pageBySlug[current]?.folder || []
  const narrow = useMediaQuery('(max-width: 900px)')
  const body = (
    <>
      <div className="search"><input type="search" placeholder="Search page titles…" value={q} onChange={e => setQ(e.target.value)} aria-label="Search the Handbook" /></div>
      {q.trim() ? (
        <>
          <div className="grp-label">{hits.length} result{hits.length === 1 ? '' : 's'}</div>
          {hits.map(p => <a key={p.slug} className={p.slug === current ? 'active' : ''} href={href('/handbook/' + p.slug)} onClick={() => setQ('')}>{p.title}<span className="cnt">{p.folder[0] ? p.folder[p.folder.length - 1] : ''}</span></a>)}
          {!hits.length && <div className="small muted" style={{ padding: '4px 10px' }}>No page titles match.</div>}
        </>
      ) : (
        <>
          {tree.pages.map(p => <a key={p.slug} className={p.slug === current ? 'active' : ''} href={href('/handbook/' + p.slug)}>{p.title}</a>)}
          {tree.folders.map(f => <Folder key={f.name} node={f} current={current} ancestors={ancestors} depth={0} />)}
        </>
      )}
    </>
  )
  if (narrow) {
    return (
      <details className="nav navbox" key={current}>
        <summary><span>Handbook contents</span><span className="cnt">{pages.length} pages</span></summary>
        <nav aria-label="Handbook contents" style={{ marginTop: 8 }}>{body}</nav>
      </details>
    )
  }
  return <nav className="nav" aria-label="Handbook contents">{body}</nav>
}

function countPages(node) { return node.pages.length + node.folders.reduce((s, f) => s + countPages(f), 0) }

function Folder({ node, current, ancestors, depth }) {
  const open = ancestors[depth] === node.name
  return (
    <details open={open}>
      <summary>{node.name}<span className="cnt">{countPages(node)}</span></summary>
      <div className="in">
        {node.pages.map(p => <a key={p.slug} className={p.slug === current ? 'active' : ''} href={href('/handbook/' + p.slug)}>{p.title}</a>)}
        {node.folders.map(f => <Folder key={f.name} node={f} current={current} ancestors={ancestors} depth={depth + 1} />)}
      </div>
    </details>
  )
}

function Page({ page, embed }) {
  const [showEmbed, setShowEmbed] = useState(false)
  const [toast, setToast] = useToast()
  const hideTitle = page.cssclasses?.includes('hide-title')
  const art = circleArt(page)
  const concern = isThreat(page) ? concernByThreatSlug[page.slug] : null
  const plannerPractice = isPractice(page) ? practiceBySlug[page.slug] : null
  const cp = cpNumber(page)

  const run = getPlannerRun()
  const inSelection = !!concern && run.concerns.includes(concern)
  // Add this concern to the saved selection. If the form was already completed,
  // go straight to the results; otherwise open the picker with it pre-checked.
  const addToPlanner = () => {
    const concerns = inSelection ? run.concerns : [...run.concerns, concern]
    savePlannerState({ form: run.form, concerns })
    navigate(run.complete ? '/planner/results' : isFormValid(run.form) ? '/planner/concerns' : '/planner', plannerQuery(run.form, concerns))
  }
  const rank = usePracticeRank(plannerPractice, run)
  const pageUrl = absoluteUrl('/handbook/' + page.slug)
  const embedUrl = absoluteUrl('/handbook/' + page.slug, { embed: 'page' })
  const embedNavUrl = absoluteUrl('/handbook/' + page.slug, { embed: '1' })
  const snippet = u => `<iframe id="aquacorridors" src="${u}" title="AquaCorridors Handbook — ${page.plainTitle}" width="100%" height="800" style="border:0;border-radius:16px" loading="lazy"></iframe>\n<script>addEventListener('message',e=>{if(e.data&&e.data.type==='aquacorridors:height')document.getElementById('aquacorridors').style.height=e.data.height+'px'})</script>`
  const copy = async (t, what) => setToast((await copyText(t)) ? `${what} copied` : 'Could not copy')

  return (
    <article className="page" style={{ position: 'relative' }}>
      <div className="crumbs">
        <a href={href('/handbook')}>Handbook</a>
        {page.folder.map((f, i) => <span key={i}>/ {f}</span>)}
      </div>
      {(!hideTitle || art) && (
        <div className="between" style={{ alignItems: 'flex-start', marginBottom: 18, flexWrap: 'nowrap' }}>
          {!hideTitle ? <h1 className="title" style={{ marginBottom: 0 }}>{page.title}</h1> : <span />}
          {art && <img src={art} alt="" style={{ flex: 'none', width: 120, height: 120, borderRadius: 999 }} />}
        </div>
      )}

      {!embed && (
        <div className="toolrow">
          {isPractice(page) && <a className="pill sm sand" href={href('/planner')}>Find practices for your concerns in the Planner →</a>}
          <span className="spacer" />
          <button className="pill sm" type="button" onClick={() => copy(pageUrl, 'Link')}>Copy link</button>
          <button className="pill sm" type="button" aria-expanded={showEmbed} onClick={() => setShowEmbed(v => !v)}>Embed</button>
        </div>
      )}
      {showEmbed && !embed && (
        <div className="embed-box">
          <div className="between"><b className="small">Embed this page in another site</b><button className="pill xs" type="button" onClick={() => setShowEmbed(false)}>Close</button></div>
          <div className="small muted">The script line lets the frame grow to fit the page; drop it for a fixed 800px frame. Page only (no sidebar):</div>
          <textarea readOnly rows={4} value={snippet(embedUrl)} onFocus={e => e.target.select()} />
          <div className="small muted">Whole Handbook with navigation:</div>
          <textarea readOnly rows={4} value={snippet(embedNavUrl)} onFocus={e => e.target.select()} />
          <div className="cluster">
            <button className="pill xs river" type="button" onClick={() => copy(snippet(embedUrl), 'Snippet')}>Copy page-only snippet</button>
            <button className="pill xs" type="button" onClick={() => copy(snippet(embedNavUrl), 'Snippet')}>Copy with-navigation snippet</button>
            <a className="pill xs" href={embedUrl} target="_blank" rel="noopener">Preview ↗</a>
          </div>
        </div>
      )}

      {concern && (
        <div className="planner-link">
          {inSelection ? (
            <>
              <div className="msg"><b>This concern is in your Planner selection</b> ({run.concerns.length} concern{run.concerns.length === 1 ? '' : 's'} chosen).</div>
              <a className="pill river" href={href(run.complete ? '/planner/results' : '/planner', run.query)}>{run.complete ? 'View my Planner results →' : 'Back to the Planner →'}</a>
            </>
          ) : (
            <>
              <div className="msg"><b>This is one of the resource concerns in the AquaCorridors Planner.</b> {run.complete ? `Add it to your ${run.concerns.length} selected concern${run.concerns.length === 1 ? '' : 's'} and see the updated results.` : 'Add it to your selection to see every practice that addresses it alongside your other concerns, scored with CPPE data.'}</div>
              <button className="pill river" type="button" onClick={addToPlanner}>{run.complete ? 'Add to my Planner results →' : `Add “${concern}” to my Planner →`}</button>
            </>
          )}
        </div>
      )}
      {plannerPractice && (
        <div className="planner-link">
          {run.complete ? (
            <div className="msg">
              <b>In your Planner results</b>{rank === null ? ' (loading…)' : rank
                ? `, CP ${cp} ranks #${rank.position} of ${rank.total} practices for your ${run.concerns.length} concern${run.concerns.length === 1 ? '' : 's'} (combined score ${rank.score}).`
                : `, CP ${cp} does not appear: the CPPE data gives it no effect on the ${run.concerns.length} concern${run.concerns.length === 1 ? '' : 's'} you selected.`}
            </div>
          ) : (
            <div className="msg"><b>CP {cp} appears in the AquaCorridors Planner.</b> Choose the resource concerns on your land and the Planner shows where this practice ranks among the others that address them.</div>
          )}
          <a className="pill river" href={href(run.complete ? '/planner/results' : '/planner', run.query)}>{run.complete ? 'View my Planner results →' : 'Open the Planner →'}</a>
        </div>
      )}

      <HandbookContent page={page} />
      <Toast msg={toast} />
    </article>
  )
}

/** Where a planner practice lands in the saved run's results (null while loading, false if absent). */
function usePracticeRank(practiceName, run) {
  const [rank, setRank] = useState(null)
  useEffect(() => {
    if (!practiceName || !run.complete) return
    let live = true
    loadPlannerData().then(data => {
      if (!live) return
      const r = computeResults(data, run.concerns)
      const i = r.practices.indexOf(practiceName)
      setRank(i < 0 ? false : { position: i + 1, total: r.practices.length, score: r.scores[practiceName] })
    })
    return () => { live = false }
  }, [practiceName, run.complete, run.concerns.join(':')])
  return rank
}
