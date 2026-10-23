// Hash router. Every view lives at #/path?query so the built site works from any
// static host or inside an iframe without server configuration.
import { useEffect, useState } from 'react'

export function parseHash(hash = window.location.hash) {
  const raw = hash.replace(/^#/, '') || '/'
  const [pathPart, queryPart = ''] = raw.split('?')
  const path = '/' + pathPart.replace(/^\/+|\/+$/g, '')
  const query = new URLSearchParams(queryPart)
  const embed = query.get('embed') // null | '1' | 'page'
  return { path, parts: path.split('/').filter(Boolean), query, embed }
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash())
  useEffect(() => {
    const on = () => setRoute(parseHash())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

/** Build an in-app href, carrying the embed flag forward so iframed pages stay chromeless. */
export function href(path, query) {
  const q = new URLSearchParams(query || {})
  const cur = parseHash()
  if (cur.embed && !q.has('embed')) q.set('embed', cur.embed)
  const qs = q.toString()
  return `#${path}${qs ? `?${qs}` : ''}`
}

export function navigate(path, query) {
  window.location.hash = href(path, query).slice(1)
}

/** Absolute URL for a route (used for "copy link" and embed snippets). */
export function absoluteUrl(path, query) {
  const u = new URL(window.location.href)
  u.hash = href(path, query)
  return u.toString()
}

export const BASE = import.meta.env.BASE_URL // './' in production builds

/** True while the viewport matches a CSS media query (updates live). */
export function useMediaQuery(q) {
  const get = () => typeof window !== 'undefined' && window.matchMedia(q).matches
  const [m, setM] = useState(get)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const on = () => setM(mq.matches)
    mq.addEventListener('change', on)
    on()
    return () => mq.removeEventListener('change', on)
  }, [q])
  return m
}
