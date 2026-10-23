import { useEffect, useState } from 'react'
import { href, BASE } from '../lib/router.js'

export function TopBar({ route }) {
  const top = route.parts[0] || ''
  const cls = k => (k === top ? 'active' : '')
  return (
    <header className="topbar">
      <a className="brand" href={href('/')}>
        <img src={`${BASE}art/wlfw-logo-black.png`} alt="Working Lands for Wildlife" />
        <span className="wm"><b>AquaCorridors</b><span>Working Lands for Wildlife · Tool Suite</span></span>
      </a>
      <span className="spacer" />
      <nav aria-label="Tools">
        <a className={cls('')} href={href('/')}>Overview</a>
        <a className={cls('planner')} href={href('/planner')}>Planner</a>
        <a className={cls('handbook')} href={href('/handbook')}>Handbook</a>
        <a href="https://archive.landscapepartnership.org/networks/working-lands-for-wildlife/landscapes-wildlife/landscapes/aquatics/maps-and-data/aquacorridors-tool-suite/aquacorridors-data-layer-library/aquacorridor-data-library" target="_blank" rel="noopener">Data Layer Library ↗</a>
        <a href="https://archive.landscapepartnership.org/networks/working-lands-for-wildlife/landscapes-wildlife/landscapes/aquatics/maps-and-data/aquacorridors-tool-suite/aquacorridors-mapper/aquacorridors-mapper" target="_blank" rel="noopener">Mapper ↗</a>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <img src={`${BASE}art/wlfw-logo-white.png`} alt="" />
        <div>
          <div><b>AquaCorridors Tool Suite</b> · Working Lands for Wildlife</div>
          <div style={{ opacity: .75 }}>Planner data: USDA NRCS Conservation Practice Physical Effects (CPPE). Handbook content: the AquaCorridors Handbook (Ferguson Lynch).</div>
        </div>
      </div>
      <div className="credit">
        <span>Illustrations by</span>
        <img src={`${BASE}art/erick-signature.png`} alt="Erick Ingraham" />
      </div>
      <div><a href="https://www.landscapepartnership.org/networks/working-lands-for-wildlife/landscapes-wildlife/landscapes/aquatics" target="_blank" rel="noopener">Landscape Partnership · Aquatics ↗</a></div>
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
