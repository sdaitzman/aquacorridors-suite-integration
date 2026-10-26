import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built site works from any sub-path (GitHub Pages, Cloudflare,
// or an iframe on the Landscape Partnership portal) without configuration.
export default defineConfig({
  plugins: [react(), reportDirIndex()],
  base: './',
  assetsInclude: ['**/*.md'],
  build: { outDir: 'dist', emptyOutDir: true },
})

/**
 * The report generator lives in public/report/ as its own static page. Make the dev
 * and preview servers behave like the static host it is built for:
 *  - serve `report/` as `report/index.html` instead of the SPA fallback (query kept);
 *  - answer 404 for the generator's optional server endpoints (/pdf, /sarp, /img —
 *    provided by SWF_RG2's server.py, not by this site). The SPA fallback would
 *    answer 200 HTML, which the generator reads as "PDF renderer available".
 */
function reportDirIndex() {
  const use = (server) => {
    server.middlewares.use((req, res, next) => {
      if (/^\/report\/(\?|$)/.test(req.url)) req.url = req.url.replace('/report/', '/report/index.html')
      else if (/^\/(pdf|sarp|img)(\/|\?|$)/.test(req.url)) { res.statusCode = 404; res.end(); return }
      next()
    })
  }
  return { name: 'report-static-host', configureServer: use, configurePreviewServer: use }
}
