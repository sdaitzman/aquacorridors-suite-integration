/**
 * Copies the AquaCorridors Handbook (an Obsidian vault folder) into this repo.
 *
 *  - Markdown is copied VERBATIM into content/handbook/ (same folder structure).
 *  - Images referenced with ![[...]] are resolved anywhere in the vault, re-encoded
 *    for the web into public/handbook/images/, and listed in the manifest.
 *  - src/data/handbook-manifest.json describes every page (slug, title, folder) so
 *    the app can build navigation and resolve [[wikilinks]].
 *
 * The source vault is never written to. Re-run after the vault changes:
 *     npm run sync:handbook
 * Override the source with HANDBOOK_SRC=/path/to/Vault/Aquatics
 */
import fs from 'node:fs'
import path from 'node:path'
import { ROOT, slugify, stripEmoji, walk, rmrf, mkdirp, sipsConvert, fileSize } from './lib.mjs'

const SRC = process.env.HANDBOOK_SRC || '/Users/sam/Downloads/FergusonLynchCollaborativeVault/Aquatics'
const VAULT = path.dirname(SRC) // images may live in the vault-level Images/ folder
const CONTENT = path.join(ROOT, 'content/handbook')
const IMG_OUT = path.join(ROOT, 'public/handbook/images')
const MANIFEST = path.join(ROOT, 'src/data/handbook-manifest.json')

if (!fs.existsSync(SRC)) { console.error(`Handbook source not found: ${SRC}`); process.exit(1) }

rmrf(CONTENT); mkdirp(CONTENT)
rmrf(IMG_OUT); mkdirp(IMG_OUT)

// ---- 1. copy markdown verbatim -------------------------------------------
const mdFiles = walk(SRC).filter(f => f.endsWith('.md')).sort((a, b) => a.localeCompare(b, 'en'))
const pages = []
const bySlug = new Map()
for (const abs of mdFiles) {
  const rel = path.relative(SRC, abs)
  const dest = path.join(CONTENT, rel)
  mkdirp(path.dirname(dest))
  fs.copyFileSync(abs, dest) // byte-for-byte copy
  const basename = path.basename(rel, '.md')
  // Slug from the note name; if two notes share a plain-text name (e.g. the
  // "🦪 Water Quality" benefit and the "Water Quality" similar-tools page) the
  // later one (in sorted path order) is prefixed with its top-level folder.
  let slug = slugify(basename)
  if (bySlug.has(slug)) slug = `${slugify(rel.split(path.sep)[0])}-${slug}`
  if (bySlug.has(slug)) { console.error(`Slug collision: ${slug} (${rel} vs ${bySlug.get(slug)})`); process.exit(1) }
  bySlug.set(slug, rel)
  const text = fs.readFileSync(abs, 'utf8')
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(text)
  const cssclasses = fm ? [...fm[1].matchAll(/^\s*-\s*(.+)$/gm)].map(m => m[1].trim()) : []
  pages.push({
    slug,
    basename,                 // exact Obsidian note name (what [[wikilinks]] point at)
    title: basename,          // displayed title (kept identical to the note name)
    plainTitle: stripEmoji(basename),
    folder: path.dirname(rel) === '.' ? [] : path.dirname(rel).split(path.sep),
    file: rel,
    cssclasses,
  })
}

// ---- 2. resolve + re-encode images -----------------------------------------
const allVaultFiles = walk(VAULT).filter(f => !f.includes('/.obsidian/'))
const byBase = new Map()
for (const f of allVaultFiles) byBase.set(path.basename(f).toLowerCase(), f)
const noteBase = new Set(pages.map(p => p.basename.toLowerCase()))

const images = {}
const missing = new Set()
for (const p of pages) {
  const text = fs.readFileSync(path.join(CONTENT, p.file), 'utf8')
  for (const m of text.matchAll(/!\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)) {
    const ref = m[1].trim()
    const base = path.basename(ref)
    if (noteBase.has(base.toLowerCase())) continue // note transclusion, not an image
    if (images[base]) continue
    const src = byBase.get(base.toLowerCase())
    if (!src) { missing.add(ref); continue }
    const ext = path.extname(base).toLowerCase()
    const stem = slugify(path.basename(base, ext)) || 'image'
    let outName, outPath
    if (fileSize(src) > 250_000 && ['.png', '.jpg', '.jpeg'].includes(ext)) {
      outName = `${stem}.jpg`; outPath = path.join(IMG_OUT, outName)
      sipsConvert(src, outPath, { maxPx: 1400, format: 'jpeg', quality: 82 })
    } else {
      outName = `${stem}${ext}`; outPath = path.join(IMG_OUT, outName)
      fs.copyFileSync(src, outPath)
    }
    images[base] = `handbook/images/${outName}`
  }
}
if (missing.size) console.warn('Unresolved image embeds (left as-is):', [...missing])

// ---- 3. manifest --------------------------------------------------------------
const manifest = {
  source: SRC,
  syncedAt: new Date().toISOString(),
  pages,
  images,
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2))
const total = Object.values(images).reduce((s, rel) => s + fileSize(path.join(ROOT, 'public', rel)), 0)
console.log(`Synced ${pages.length} pages, ${Object.keys(images).length} images (${(total / 1e6).toFixed(1)} MB) from ${SRC}`)
