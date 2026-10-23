// The AquaCorridors Handbook: Obsidian markdown rendered as-authored.
// Markdown lives in content/handbook/ (verbatim copies made by scripts/sync-handbook.mjs);
// this module resolves [[wikilinks]], ![[embeds]] and #tags and hands the rest to marked.
import { marked } from 'marked'
import manifest from '../data/handbook-manifest.json'
import { href, BASE } from './router.js'

const rawFiles = import.meta.glob('../../content/handbook/**/*.md', { query: '?raw', import: 'default', eager: true })
const rawByFile = {}
for (const [k, v] of Object.entries(rawFiles)) rawByFile[k.replace(/^\.\.\/\.\.\/content\/handbook\//, '')] = v

export const pages = manifest.pages.map(p => ({ ...p, raw: rawByFile[p.file] ?? '' }))
export const pageBySlug = Object.fromEntries(pages.map(p => [p.slug, p]))
const pageByBasename = Object.fromEntries(pages.map(p => [p.basename.toLowerCase(), p]))
const imageByBasename = Object.fromEntries(Object.entries(manifest.images).map(([k, v]) => [k.toLowerCase(), v]))

export const TOP_ORDER = [
  'Home',
  'How To Use This Tool',
  'Explore by Benefits',
  'Explore by Threats + Resource Concerns',
  'Explore by Conservation Practices',
  'Funding Assistance',
  'Similar Tools',
  'Common Acronyms and Vocabulary',
]

export function findPage(name) {
  if (!name) return null
  const key = name.trim().toLowerCase()
  return pageByBasename[key] || pageByBasename[key.replace(/\.md$/, '')] || null
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function stripFrontmatter(md) {
  return md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

/** Translate Obsidian-only syntax into HTML/markdown that marked understands. */
function preprocess(md, depth) {
  md = stripFrontmatter(md)

  // Note transclusions that stand alone on a line (optionally inside a heading, as in
  // "#### ![[Climate Change]]") become an embedded block of that note.
  md = md.replace(/^[ \t]*#{0,6}[ \t]*!\[\[([^\]|#]+)\]\][ \t]*$/gm, (m, target) => {
    const page = findPage(target)
    if (!page) return m
    if (depth >= 2) return `<div class="transclude"><div class="tt"><a href="${href('/handbook/' + page.slug)}">${esc(page.title)}</a></div></div>`
    return `\n<div class="transclude"><div class="tt"><a href="${href('/handbook/' + page.slug)}">${esc(page.title)}</a></div><div class="md">${renderMarkdown(page.raw, depth + 1)}</div></div>\n`
  })

  // Image embeds: ![[file.png]] or ![[file.png|300]]
  md = md.replace(/!\[\[([^\]]+?)\]\]/g, (m, inner) => {
    const [targetRaw, ...rest] = inner.split('|')
    const target = targetRaw.trim()
    const base = target.split('/').pop()
    const img = imageByBasename[base.toLowerCase()]
    if (img) {
      const w = parseInt(rest.join('|'), 10)
      return `<img src="${BASE}${img}" alt="${esc(base)}"${Number.isFinite(w) ? ` width="${w}"` : ''}>`
    }
    const page = findPage(target)
    if (page) return `<a class="wikilink" href="${href('/handbook/' + page.slug)}">${esc(page.title)}</a>`
    return `<span class="wikilink missing" title="Attachment not found">${esc(target)}</span>`
  })

  // Wikilinks: [[Note]], [[Note|Alias]], [[Note#Heading]]
  md = md.replace(/\[\[([^\]]+?)\]\]/g, (m, inner) => {
    const [targetRaw, alias] = inner.split('|')
    const target = targetRaw.split('#')[0].trim()
    const label = (alias ?? targetRaw).trim()
    const page = findPage(target)
    if (page) return `<a class="wikilink" href="${href('/handbook/' + page.slug)}">${esc(label)}</a>`
    return `<span class="wikilink missing" title="No page named “${esc(target)}”">${esc(label)}</span>`
  })

  // Obsidian tags (#Wildlifebenefits). Headings need "# " so they never match.
  md = md.replace(/(^|[\s(])#([A-Za-z][\w-]*)/gm, '$1<span class="tag">#$2</span>')

  return md
}

export function renderMarkdown(raw, depth = 0) {
  return marked.parse(preprocess(raw, depth), { gfm: true, breaks: true, async: false })
}

export function renderPage(page) {
  return renderMarkdown(page.raw, 0)
}

/** Short definition text for tooltips: the handbook's own "Definition" line. */
export function definitionOf(page) {
  if (!page) return ''
  const md = stripFrontmatter(page.raw)
  // CP pages: "### **Practice Definition**" then "##### <definition>"
  let m = /Practice Definition[^\n]*\n+#{1,6}\s*([^\n]+)/i.exec(md)
  if (m) return m[1].replace(/\*\*/g, '').trim()
  // Threat / benefit pages: "##### Definition" then a paragraph
  m = /#{1,6}\s*\**Definition:?\**\s*\n+([^\n]+)/i.exec(md)
  if (m) return m[1].replace(/\*\*/g, '').trim()
  return ''
}

/** Group pages into the sidebar tree. */
export function navTree() {
  const root = { name: '', pages: [], folders: new Map() }
  for (const p of pages) {
    let node = root
    for (const seg of p.folder) {
      if (!node.folders.has(seg)) node.folders.set(seg, { name: seg, pages: [], folders: new Map() })
      node = node.folders.get(seg)
    }
    node.pages.push(p)
  }
  const cmp = (a, b) => a.plainTitle.localeCompare(b.plainTitle, 'en', { numeric: true })
  const finish = node => ({
    name: node.name,
    pages: node.pages.sort(cmp),
    folders: [...node.folders.values()].map(finish).sort((a, b) => a.name.localeCompare(b.name, 'en')),
  })
  const tree = finish(root)
  const order = n => { const i = TOP_ORDER.indexOf(n); return i < 0 ? 99 : i }
  tree.pages.sort((a, b) => order(a.basename) - order(b.basename))
  tree.folders.sort((a, b) => order(a.name) - order(b.name))
  return tree
}

export function searchPages(q) {
  const s = q.trim().toLowerCase()
  if (!s) return []
  return pages.filter(p => p.plainTitle.toLowerCase().includes(s)).slice(0, 40)
}

export const sectionOf = page => page?.folder?.[0] || ''
export const isPractice = page => sectionOf(page) === 'Explore by Conservation Practices'
export const isThreat = page => sectionOf(page) === 'Explore by Threats + Resource Concerns'
export const isBenefit = page => sectionOf(page) === 'Explore by Benefits'
export const cpNumber = page => (isPractice(page) && /^CP (\d+)/.exec(page.basename)?.[1]) || null

/** Erick Ingraham's circle illustrations, keyed by CP number / page slug. */
const CIRCLE_BY_CP = {
  396: 'circle-aquatic-organism-passage.png',
  327: 'circle-conservation-cover.png',
  382: 'circle-fence.png',
  329: 'circle-low-till.png',
  345: 'circle-low-till.png',
  391: 'circle-riparian-buffer.png',
  580: 'circle-streambank-protection.png',
  657: 'circle-wetland-restoration.png',
}
const CIRCLE_BY_SLUG = { 'acep-easements': 'circle-wetland-reserve-easement.png' }
export function circleArt(page) {
  const cp = cpNumber(page)
  const f = (cp && CIRCLE_BY_CP[cp]) || CIRCLE_BY_SLUG[page?.slug]
  return f ? `${BASE}art/${f}` : null
}
export function circleArtForCp(cp) { const f = CIRCLE_BY_CP[cp]; return f ? `${BASE}art/${f}` : null }
