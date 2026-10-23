/**
 * Builds src/data/crosswalk.json: the mapping from Planner names (concerns and
 * conservation practices, exactly as spelled in the planner CSVs) to Handbook
 * page slugs. Fails loudly if anything in the planner has no handbook page, so
 * a vault or data change can't silently break the cross-links.
 *     npm run check
 */
import fs from 'node:fs'
import path from 'node:path'
import { ROOT, normName } from './lib.mjs'

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/handbook-manifest.json'), 'utf8'))
const dataDir = path.join(ROOT, 'public/data')

// --- tiny CSV reader (quoted fields, no embedded newlines in these files) ----
function parseCsv(text) {
  const rows = []
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) continue
    const cells = []; let cur = ''; let q = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (q) { if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (c === '"') q = false; else cur += c }
      else if (c === '"') q = true
      else if (c === ',') { cells.push(cur); cur = '' }
      else cur += c
    }
    cells.push(cur); rows.push(cells)
  }
  return rows
}

const threatPages = manifest.pages.filter(p => p.folder[0] === 'Explore by Threats + Resource Concerns')
const cpPages = manifest.pages.filter(p => p.folder[0] === 'Explore by Conservation Practices')
const cpByNumber = new Map(cpPages.map(p => [/^CP (\d+)/.exec(p.basename)[1], p]))

// --- concerns -------------------------------------------------------------------
// A few concern names are spelled differently in the planner and the handbook;
// everything else matches after loose normalisation.
const CONCERN_ALIASES = {
  'emissions of greenhouse gasses ghgs': 'emissions of greenhouse gasses ghgs',
  'soil organism habitat loss or degradation': 'soil organism habitat degradation',
}
const threatByNorm = new Map(threatPages.map(p => [normName(p.basename), p]))
const concernRows = parseCsv(fs.readFileSync(path.join(dataDir, 'concerns_by_category.csv'), 'utf8')).slice(1)
const concerns = {}
const unmappedConcerns = []
for (const [concern] of concernRows) {
  const key = normName(concern)
  const page = threatByNorm.get(CONCERN_ALIASES[key] || key)
  if (page) concerns[concern] = page.slug; else unmappedConcerns.push(concern)
}

// --- practices -------------------------------------------------------------------
// Planner practice names → CP number via conservation_practice_descriptions.csv
// ("CP #391 | Riparian Forest Buffer (IRA) | (Acres)") → handbook page by number.
const descRows = parseCsv(fs.readFileSync(path.join(dataDir, 'conservation_practice_descriptions.csv'), 'utf8')).slice(1)
const numberByNorm = new Map()
const practiceDefinitions = {}
for (const [label, definition] of descRows) {
  const m = /^CP #(\d+)\s*\|\s*(.+?)\s*\|/.exec(label || '')
  if (!m) continue
  numberByNorm.set(normName(m[2]), m[1])
  if (definition) practiceDefinitions[m[1]] = definition
}
const longRows = parseCsv(fs.readFileSync(path.join(dataDir, 'conservation_practices_long.csv'), 'utf8')).slice(1)
const plannerPractices = [...new Set(longRows.map(r => r[0]))]
const practices = {}
const unmappedPractices = []
for (const name of plannerPractices) {
  const number = numberByNorm.get(normName(name))
  const page = number && cpByNumber.get(number)
  if (page) practices[name] = { slug: page.slug, cp: number, definition: practiceDefinitions[number] || '' }
  else unmappedPractices.push(name)
}

if (unmappedConcerns.length || unmappedPractices.length) {
  console.error('Unmapped concerns:', unmappedConcerns)
  console.error('Unmapped practices:', unmappedPractices)
  process.exit(1)
}
const handbookOnlyPractices = cpPages.filter(p => !Object.values(practices).some(v => v.slug === p.slug)).map(p => p.basename)

fs.writeFileSync(path.join(ROOT, 'src/data/crosswalk.json'), JSON.stringify({ concerns, practices, handbookOnlyPractices }, null, 2))
console.log(`concerns: ${Object.keys(concerns).length}/${concernRows.length} mapped · practices: ${Object.keys(practices).length}/${plannerPractices.length} mapped`)
console.log('handbook practices not in the planner:', handbookOnlyPractices.join('; '))
