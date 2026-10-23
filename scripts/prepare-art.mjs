/**
 * Prepares Erick Ingraham's illustrations for the web (downscaled copies only;
 * originals are untouched). Source: the "Illustrations" folder from the shared
 * USDA design-assets drive. Override with ART_SRC=/path/to/Illustrations
 *     npm run sync:art
 */
import fs from 'node:fs'
import path from 'node:path'
import { ROOT, mkdirp, sipsConvert } from './lib.mjs'

const SRC = process.env.ART_SRC || '/private/tmp/claude-501/-Users-sam-Documents-GitHub-aquacorridors-suite-integration/f3e37285-6dea-4db6-80d5-232fed262073/scratchpad/illus/Illustrations'
const OUT = path.join(ROOT, 'public/art')
if (!fs.existsSync(SRC)) { console.error(`Art source not found: ${SRC}`); process.exit(1) }
mkdirp(OUT)

const JOBS = [
  // [source file, output name, options]
  ['EasternHellbender.jpg', 'hellbender.jpg', { maxPx: 1400 }],
  ['BogTurtle 300.jpg', 'bog-turtle.jpg', { maxPx: 1200 }],
  ['CandyDarter 300.jpg', 'candy-darter.jpg', { maxPx: 1200 }],
  ['JustBackground_Floating.png', 'watershed.jpg', { maxPx: 1800 }],
  ['Circle_AquaticOrganismPassage.png', 'circle-aquatic-organism-passage.png', { copy: true }],
  ['Circle_Conservation Cover.png', 'circle-conservation-cover.png', { copy: true }],
  ['Circle_Fence.png', 'circle-fence.png', { copy: true }],
  ['Circle_LowTill.png', 'circle-low-till.png', { copy: true }],
  ['Circle_RiparianBuffer_Circle_Illustration.png', 'circle-riparian-buffer.png', { copy: true }],
  ['Circle_StreambankProtection_Circle_Illustration.png', 'circle-streambank-protection.png', { copy: true }],
  ['Circle_WetlandReserveEasement_Circle_Illustration.png', 'circle-wetland-reserve-easement.png', { copy: true }],
  ['Circle_WetlandRestoration_Circle_Illustration.png', 'circle-wetland-restoration.png', { copy: true }],
  ['ErickSignature_ClearBackground.png', 'erick-signature.png', { maxPx: 450, format: 'png' }],
]
for (const [src, out, opts] of JOBS) {
  const s = path.join(SRC, src)
  if (!fs.existsSync(s)) { console.warn(`skip (missing): ${src}`); continue }
  if (opts.copy) fs.copyFileSync(s, path.join(OUT, out))
  else sipsConvert(s, path.join(OUT, out), { format: 'jpeg', quality: 84, ...opts })
  console.log(`art: ${out} (${(fs.statSync(path.join(OUT, out)).size / 1e3).toFixed(0)} kB)`)
}
