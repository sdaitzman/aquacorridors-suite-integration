import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built site works from any sub-path (GitHub Pages, Cloudflare,
// or an iframe on the Landscape Partnership portal) without configuration.
export default defineConfig({
  plugins: [react()],
  base: './',
  assetsInclude: ['**/*.md'],
  build: { outDir: 'dist', emptyOutDir: true },
})
