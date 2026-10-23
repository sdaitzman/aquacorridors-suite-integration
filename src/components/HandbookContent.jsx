// Renders one handbook page's markdown (as authored) and lets a host intercept
// wikilink clicks (the planner's drawer uses this to stay in place).
import { useMemo } from 'react'
import { renderPage } from '../lib/handbook.js'

export default function HandbookContent({ page, onNavigate }) {
  const html = useMemo(() => renderPage(page), [page])
  const onClick = e => {
    if (!onNavigate) return
    const a = e.target.closest('a.wikilink')
    if (!a) return
    const m = /#\/handbook\/([^?]+)/.exec(a.getAttribute('href') || '')
    if (m) { e.preventDefault(); onNavigate(decodeURIComponent(m[1])) }
  }
  return <div className="md" onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
