import { useEffect } from 'react'
import { useRoute } from './lib/router.js'
import { ToolBar, Footer } from './components/Shell.jsx'
import Home from './components/Home.jsx'
import Planner from './components/Planner.jsx'
import PlannerResults from './components/PlannerResults.jsx'
import Handbook from './components/Handbook.jsx'

export default function App() {
  const route = useRoute()
  const embed = route.embed
  useEffect(() => {
    document.body.classList.toggle('embed-mode', !!embed)
    window.scrollTo(0, 0)
  }, [route.path, embed])
  useIframeHeightReporting()

  let view
  const [top, second] = route.parts
  if (top === 'planner' && second === 'results') view = <PlannerResults route={route} />
  else if (top === 'planner' && second === 'concerns') view = <Planner route={route} step={2} />
  else if (top === 'planner') view = <Planner route={route} step={1} />
  else if (top === 'handbook') view = <Handbook route={route} slug={second} />
  else view = <Home />

  return (
    <>
      {!embed && <ToolBar route={route} />}
      <div className="wrap">
        {view}
        {!embed && <Footer />}
      </div>
    </>
  )
}

/**
 * When framed by another site, tell the parent how tall the document is so it
 * can size the iframe (see README "Embedding"). Harmless when not framed.
 */
function useIframeHeightReporting() {
  useEffect(() => {
    if (window.parent === window) return
    const post = () => window.parent.postMessage({ type: 'aquacorridors:height', height: document.documentElement.scrollHeight, hash: window.location.hash }, '*')
    const ro = new ResizeObserver(post)
    ro.observe(document.body)
    window.addEventListener('hashchange', post)
    post()
    return () => { ro.disconnect(); window.removeEventListener('hashchange', post) }
  }, [])
}
