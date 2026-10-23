/**
 * Copies the AquaCorridors Planner data files VERBATIM from the landowner-tool
 * repo into public/data/. These drive the concern → practice mapping and must
 * not be edited by hand; change them upstream and re-run:
 *     npm run sync:planner
 */
import fs from 'node:fs'
import path from 'node:path'
import { ROOT, mkdirp } from './lib.mjs'

const SRC = process.env.PLANNER_SRC || '/Users/sam/Documents/GitHub/fl_wlfw/landowner-tool/public/data'
const OUT = path.join(ROOT, 'public/data')
const FILES = [
  'conservation_practices_long.csv',      // practice × concern CPPE effect scores (long format)
  'concerns_by_category.csv',             // concern → category grouping for the picker
  'concern_descriptions_map.json',        // concern definitions (tooltips)
  'conservation_practice_descriptions.csv', // "CP #391 | name | (unit)" → definition
]
mkdirp(OUT)
for (const f of FILES) {
  const src = path.join(SRC, f)
  if (!fs.existsSync(src)) { console.error(`Missing ${src}`); process.exit(1) }
  fs.copyFileSync(src, path.join(OUT, f))
  console.log(`copied ${f}`)
}
