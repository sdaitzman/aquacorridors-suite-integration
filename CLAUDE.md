# CLAUDE.md

Frontend-only Vite + React app: the AquaCorridors **Planner** and **Handbook** in one site, styled like
the Southern Waters report generator (`SWF_RG2`): Poppins + DM Mono, pill buttons, 32px-radius panels,
mono eyebrows, illustration "deco" art; palette shifted to river/moss (see `src/styles/app.css` `:root`).

## Commands
- `npm run dev` / `npm run build` / `npm run preview`
- `npm run sync` — re-copy handbook markdown, planner data and illustrations from their sources
  (paths at the top of each script in `scripts/`; macOS `sips` is used for image resizing)
- `npm run check` — rebuild `src/data/crosswalk.json`; fails if a planner concern/practice has no handbook page

## Hard rules
- **Never edit** `content/handbook/**`, `public/data/**`, `src/data/handbook-manifest.json`,
  `src/data/crosswalk.json` by hand — they are generated. Never write to the source vault.
- The Handbook must display the markdown **as authored** (no rewording, no "fixes"). Rendering quirks are
  handled in `src/lib/handbook.js` preprocess(), not in the content.
- The Planner's concern → practice mapping (`src/lib/planner.js`) is a verbatim port of
  `fl_wlfw/landowner-tool` (`findRelevantConservationPractices`, filter, cumulative-score sort, colour
  scale, CSV export). Do not change the scoring; only presentation.
- No invented copy about NRCS programs, practices or scores. Facts on screen come from the data files,
  the handbook, or the original tool's text.

## Planner flow
Three-step stepper: `#/planner` (About you) → `#/planner/concerns` → `#/planner/results`. State rides in the
query string and `sessionStorage` (`getPlannerRun()` in `src/lib/planner.js`); `savePlannerState` fires the
`aquacorridors:planner` event so the tool bar updates. Form rules are the original tool's — don't loosen them.

## Routing
Hash router (`src/lib/router.js`). `?embed=page` renders a handbook page with no chrome/sidebar;
`?embed=1` keeps the sidebar. `href()` carries the embed flag through internal links.
