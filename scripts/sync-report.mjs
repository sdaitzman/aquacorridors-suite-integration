/**
 * Mirrors the Southern Waters report generator (SWF_RG2, `prototype/`) into
 * public/report/ so the suite serves it as its own static page at ./report/.
 *
 * The generator is a build-less HTML/CSS/JS app with its own palette and class
 * names, so it is NOT bundled into the React app — that would change its look.
 * Every runtime file is copied VERBATIM; the only edits are two injected lines in
 * index.html (the suite tool bar's stylesheet and markup, see public/suite/).
 * Do not edit public/report/ by hand; change SWF_RG2 and re-run:
 *     npm run sync:report
 *
 * Source: the SWF_RG2 checkout (override with REPORT_SRC). Check out the branch
 * you want mirrored first; the script records the commit in public/report/source.json.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { ROOT, mkdirp, rmrf, walk } from './lib.mjs'

const SRC = process.env.REPORT_SRC || '/Users/sam/Documents/GitHub/SWF_RG2/prototype'
const OUT = path.join(ROOT, 'public/report')

// Runtime files only. Not copied: README.md, server.py (PDF renderer / proxies; the
// static site falls back to the browser print dialog), tools/, deploy/, data/qa/.
const FILES = ['index.html', 'app.js', 'styles.css']
const DIRS = ['assets', 'vendor']
const DATA_EXT = /\.json$/

if (!fs.existsSync(path.join(SRC, 'index.html'))) { console.error(`Missing ${SRC}/index.html`); process.exit(1) }

rmrf(OUT); mkdirp(OUT)
let n = 0
const copy = (rel) => { const d = path.join(OUT, rel); mkdirp(path.dirname(d)); fs.copyFileSync(path.join(SRC, rel), d); n++ }
for (const f of FILES) copy(f)
for (const dir of DIRS) for (const p of walk(path.join(SRC, dir))) copy(path.relative(SRC, p))
for (const f of fs.readdirSync(path.join(SRC, 'data'))) if (DATA_EXT.test(f)) copy(path.join('data', f))

// --- inject the suite bar into index.html (the only non-verbatim content) ---
const BAR_CSS = '<link rel="stylesheet" href="../suite/bar.css">'
const BAR_HTML = fs.readFileSync(path.join(ROOT, 'public/suite/bar.html'), 'utf8').trim()
const idx = path.join(OUT, 'index.html')
let html = fs.readFileSync(idx, 'utf8')
const before = html
html = html.replace(/(<link rel="stylesheet" href="styles\.css[^"]*">)/, `$1\n${BAR_CSS}`)
html = html.replace(/(<a class="skip-link"[^>]*>[^<]*<\/a>)/, `$1\n${BAR_HTML}`)
if (html === before || !html.includes(BAR_CSS) || !html.includes('class="suite-bar"')) {
  console.error('Could not inject the suite bar: index.html markup changed upstream — update scripts/sync-report.mjs'); process.exit(1)
}
fs.writeFileSync(idx, html)

// --- provenance ---
const git = (args) => { try { return execFileSync('git', args, { cwd: SRC, encoding: 'utf8' }).trim() } catch { return null } }
const source = {
  repo: git(['remote', 'get-url', 'origin']), branch: git(['rev-parse', '--abbrev-ref', 'HEAD']),
  commit: git(['rev-parse', 'HEAD']), committed: git(['log', '-1', '--format=%cI']), synced: new Date().toISOString(),
}
fs.writeFileSync(path.join(OUT, 'source.json'), JSON.stringify(source, null, 2) + '\n')
console.log(`copied ${n} files from ${SRC} (${source.branch} @ ${(source.commit || '').slice(0, 7)}) → public/report/`)
