import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')

/** Remove emoji / variation selectors / pictographs from a string. */
export function stripEmoji(s) {
  return s
    .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu, '')
    .trim()
}

/** URL-safe slug from a note basename ("CP 391 - Riparian Forest buffer" → "cp-391-riparian-forest-buffer"). */
export function slugify(s) {
  return stripEmoji(s)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Loose key for matching names across the planner data and the handbook. */
export function normName(s) {
  return stripEmoji(s)
    .toLowerCase()
    .replace(/\(ira\)/g, '')
    .replace(/[\/&]/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

export function rmrf(p) { fs.rmSync(p, { recursive: true, force: true }) }
export function mkdirp(p) { fs.mkdirSync(p, { recursive: true }) }

/** Resize/convert an image with macOS `sips`. maxPx bounds the longer side. */
export function sipsConvert(src, dest, { maxPx = 1400, format = 'jpeg', quality = 80 } = {}) {
  mkdirp(path.dirname(dest))
  const args = ['-s', 'format', format]
  if (format === 'jpeg') args.push('-s', 'formatOptions', String(quality))
  args.push('-Z', String(maxPx), src, '--out', dest)
  execFileSync('sips', args, { stdio: 'ignore' })
}

export function fileSize(p) { return fs.statSync(p).size }
