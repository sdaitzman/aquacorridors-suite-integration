import { useEffect, useState } from 'react'
import { href, BASE } from '../lib/router.js'
import { getPlannerRun, PLANNER_EVENT } from '../lib/planner.js'

// Slim tool bar: the host page (Landscape Partnership portal) supplies the site
// header, navigation and footer, so this only names the tool and cross-links.
export function ToolBar({ route }) {
  const top = route.parts[0] || ''
  const name = top === 'planner' ? 'Planner' : top === 'handbook' ? 'Handbook' : 'Tool Suite'
  const cls = k => (k === top ? 'active' : '')
  const run = usePlannerRun()
  const plannerHref = run.complete ? href('/planner/results', run.query) : href('/planner')
  return (
    <div className="toolbar">
      <a className="brand" href={href('/')}>
        <img src={`${BASE}art/wlfw-logo-black.png`} alt="Working Lands for Wildlife" />
        <span><b>AquaCorridors</b> {name}</span>
      </a>
      <span className="spacer" />
      <nav aria-label="AquaCorridors tools">
        <a className={cls('planner')} href={plannerHref} title={run.complete ? 'Your Planner results' : 'Open the Planner'}>{run.complete ? 'Planner results' : 'Planner'}</a>
        <a className={cls('handbook')} href={href('/handbook')}>Handbook</a>
        <a className={cls('')} href={href('/')}>Overview</a>
      </nav>
    </div>
  )
}

/** Re-renders whenever the saved planner run changes (same tab). */
function usePlannerRun() {
  const [run, setRun] = useState(getPlannerRun)
  useEffect(() => {
    const on = () => setRun(getPlannerRun())
    window.addEventListener(PLANNER_EVENT, on)
    window.addEventListener('hashchange', on)
    return () => { window.removeEventListener(PLANNER_EVENT, on); window.removeEventListener('hashchange', on) }
  }, [])
  return run
}

export function Footer() {
  return (
    <footer className="footer">
      <span>Planner data: USDA NRCS Conservation Practice Physical Effects (CPPE) · Handbook: the AquaCorridors Handbook</span>
      <span className="credit">Illustrations by <img src={`${BASE}art/erick-signature.png`} alt="Erick Ingraham" /></span>
    </footer>
  )
}

export function Toast({ msg }) {
  if (!msg) return null
  return <div className="toast" role="status">{msg}</div>
}

export function useToast() {
  const [msg, setMsg] = useState('')
  useEffect(() => {
    if (!msg) return
    const t = setTimeout(() => setMsg(''), 2200)
    return () => clearTimeout(t)
  }, [msg])
  return [msg, setMsg]
}

export async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true } catch { return false }
}
