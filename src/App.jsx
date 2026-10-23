import { useEffect } from 'react'
import { useRoute } from './lib/router.js'
import { TopBar, Footer } from './components/Shell.jsx'
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

  let view
  const [top, second] = route.parts
  if (top === 'planner' && second === 'results') view = <PlannerResults route={route} />
  else if (top === 'planner') view = <Planner route={route} />
  else if (top === 'handbook') view = <Handbook route={route} slug={second} />
  else view = <Home />

  return (
    <>
      {!embed && <TopBar route={route} />}
      <div className="wrap">
        {view}
        {!embed && <Footer />}
      </div>
    </>
  )
}
