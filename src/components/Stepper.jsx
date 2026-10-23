// Three-step progress indicator for the Planner. Completed steps are links
// (state is carried in the query string); the current step is marked with
// aria-current; steps ahead are inert until their prerequisites are met.
import { href } from '../lib/router.js'

export const STEPS = [
  { n: 1, path: '/planner', label: 'About you' },
  { n: 2, path: '/planner/concerns', label: 'Resource concerns' },
  { n: 3, path: '/planner/results', label: 'Conservation practices' },
]

export default function Stepper({ current, query, reachable }) {
  return (
    <ol className="stepper" aria-label="Planner steps">
      {STEPS.map(s => {
        const state = s.n === current ? 'current' : s.n < current ? 'done' : 'todo'
        const canGo = s.n !== current && reachable(s.n)
        const inner = <><span className="dot">{state === 'done' ? '✓' : s.n}</span><span className="lbl"><span className="k">Step {s.n}</span>{s.label}</span></>
        return (
          <li key={s.n} className={state} aria-current={state === 'current' ? 'step' : undefined}>
            {canGo ? <a href={href(s.path, query)}>{inner}</a> : <span className="static">{inner}</span>}
          </li>
        )
      })}
    </ol>
  )
}
