# AquaCorridors Tool Suite — Planner + Handbook + Report generator

A frontend-only web app that brings the **AquaCorridors Planner**, the **AquaCorridors Handbook**
(Working Lands for Wildlife · Aquatics) and the **Southern Waters report generator** together under
one roof. The Planner and Handbook are styled as siblings of the report generator; the report
generator itself is served unchanged as its own page.

- **Planner** — pick the resource concerns on your land and see which NRCS conservation practices
  address them, scored with USDA CPPE data. The concern → practice logic and the data are ported
  unchanged from the original landowner tool; the top few practices (by the same combined score the
  graph is sorted by) are called out first, and every practice and concern links to its Handbook page.
- **Handbook** — the Obsidian vault's markdown, rendered as authored (wikilinks, embeds, tables,
  videos). Every page has its own URL and can be iframed into another site.
- **Report generator** — draw or pick an area in the Southeast and get a report on at-risk aquatic
  species, the SECAS Blueprint, impaired waters, aquatic barriers, partner organizations and more.
  Mirrored verbatim from [`SWF_RG2`](https://github.com/SageGrey/SWF_RG2) (`prototype/`); see
  [Report generator](#report-generator) below.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static bundle in dist/  (any static host; no server config needed)
npm run preview
```

## URLs

| Route | What |
|---|---|
| `#/` | Suite overview |
| `#/planner` | Step 1 · About you (Name, State*, County*, Organization*, Role — same required fields and validation as the original) |
| `#/planner/concerns` | Step 2 · Resource concerns (redirects to step 1 if the form is incomplete) |
| `#/planner/results?concerns=…` | Step 3 · Practices for those concerns. All steps carry state in the query string: `name, state, county, organization, role, concerns=a:b:c` |
| `#/handbook` | Handbook home |
| `#/handbook/<slug>` | One Handbook page, e.g. `#/handbook/cp-391-riparian-forest-buffer` |
| `…?embed=page` | That page alone — no site chrome, no sidebar (for iframes) |
| `…?embed=1` | Handbook with its sidebar, no site chrome |
| `report/` | The report generator (its own static page, not a hash route). Its own query string carries a report: `report/?huc8=…`, `?county=…`, `?poly=…`, `?demo`; `?embed=1` hides the suite tool bar |
| `#/report?…` | Convenience redirect to `report/?…` with the same query string |

Hash routing means the built site works from any sub-path or inside an iframe.

## Embedding (the intended use)

Like the current AquaCorridors pages on the Landscape Partnership portal, this app is meant to be
framed into a host page that supplies the real site header, navigation and footer. The app's own
chrome is therefore a single slim tool bar (tool name + Planner/Handbook/Overview links) and a
one-line credit; `?embed=1` removes even those, and `?embed=page` also removes the Handbook sidebar.

When framed, the app posts its document height to the parent on every change, so the host can size
the iframe instead of showing a scrollbar inside a scrollbar:

```html
<iframe id="aquacorridors" src="https://HOST/PATH/#/planner" width="100%" height="900" style="border:0"></iframe>
<script>
  addEventListener('message', e => {
    if (e.data && e.data.type === 'aquacorridors:height')
      document.getElementById('aquacorridors').style.height = e.data.height + 'px'
  })
</script>
```

The message is `{ type: 'aquacorridors:height', height, hash }`. Every Handbook page's **Embed**
button generates this snippet for that page. Use `#/planner` for a Planner-only page and
`#/handbook` for a Handbook-only page, mirroring the portal's current separate pages.

The Data Layer Library and Mapper are not part of this prototype; the overview shows them as
muted placeholders linking to the portal.

## Report generator

The Southern Waters report generator (`SWF_RG2/prototype`) is a build-less HTML/CSS/JS app with its
own palette, class names and two-step flow (intake → report deck). It is **not** bundled into the
React app or restyled — doing so would change how it looks and behaves. Instead `npm run sync:report`
mirrors its runtime files (`index.html`, `app.js`, `styles.css`, `assets/`, `data/*.json`, `vendor/`)
verbatim into `public/report/`, which Vite copies as-is, so the generator is served at `./report/`
next to the suite. The commit it was taken from is recorded in `public/report/source.json`.

What the suite adds, and nothing else:

- **The suite tool bar** above the generator's own header (`public/suite/bar.html` + `bar.css`,
  injected into `public/report/index.html` by the sync script). It is scoped to `.suite-bar`, picks up
  the generator's palette, is hidden in print and with `?embed=…`, and links back to the Planner,
  Handbook and overview.
- **Cross-links** from the suite: the tool bar's *Report generator* link, a card on the overview, and
  the `#/report` redirect.

Not included: `server.py` (the headless-Chrome PDF renderer and the SARP / image proxies). On static
hosting the generator detects their absence and falls back exactly as it does on its own GitHub Pages
deployment: *Print / save as PDF* opens the browser print dialog, dam network-gain text and proxied
logos are simply absent. Run `python3 …/SWF_RG2/prototype/server.py` separately if you need them.

To pick up new work from `SWF_RG2`: check out the branch you want there, then `npm run sync:report`
and commit the result here. Never hand-edit `public/report/`.

## Where the content comes from (and how to update it)

Nothing in `content/`, `public/data/`, `public/report/` or `src/data/` is hand-edited. Four scripts
copy from the canonical sources; re-run them when the sources change:

| Script | Source | Output |
|---|---|---|
| `npm run sync:handbook` | `…/FergusonLynchCollaborativeVault/Aquatics` (Obsidian vault, read-only) | `content/handbook/**/*.md` (verbatim), `public/handbook/images/` (web-sized copies of referenced images), `src/data/handbook-manifest.json` |
| `npm run sync:planner` | `fl_wlfw/landowner-tool/public/data` | `public/data/*.csv|json` (verbatim) |
| `npm run sync:art` | Erick Ingraham's illustrations (shared design-assets drive) | `public/art/` (web-sized copies) |
| `npm run sync:report` | `SWF_RG2/prototype` (whatever branch is checked out there) | `public/report/` (verbatim + the injected suite bar), `public/report/source.json` |
| `npm run check` | the first two | `src/data/crosswalk.json` — Planner names → Handbook slugs. **Fails** if any concern or practice has no Handbook page. |

Source paths are defaults inside each script; override with `HANDBOOK_SRC`, `PLANNER_SRC`, `ART_SRC`,
`REPORT_SRC`.

Current state of the crosswalk: all 47 planner concerns and all 37 planner practices map to a
Handbook page. The Handbook has three practices the Planner does not (CP 378 Pond, CP 533 Pumping
Plant, CP 642 Water Well).

## What was deliberately kept the same as the original Planner

- Data files, the CPPE values and the practice/concern names (`public/data/`).
- "Relevant practice" = any non-zero effect on any chosen concern; rows ordered by the sum of effect
  scores across chosen concerns; the colour scale, legend and label text of the heatmap; the CSV export.
- The "How to Interpret This Graph" text.

What changed: the flow is a three-step stepper (About you → Resource concerns → Practices) instead of
one long page; the form fields, required rules and validation messages are the originals. There is no
backend, so the form is kept only in the link and in `sessionStorage` (the original logged it to
DynamoDB). The top three practices are highlighted, and names are clickable links into the Handbook.

A completed run (valid form + at least one concern) is remembered for the browser session: the tool
bar's **Planner results** link, Handbook threat pages ("Add to my Planner results") and practice pages
("CP 391 ranks #4 of 33 practices for your concerns") all point back at it, and revisiting any step
shows the saved answers. **Reset** on step 1 clears everything.

## Layout

```
scripts/            sync + check scripts (node, macOS `sips` for images)
content/handbook/   verbatim markdown from the vault
public/data/        verbatim planner data
public/art/         illustrations, logos
public/report/      verbatim mirror of the report generator (SWF_RG2/prototype), served at ./report/
public/suite/       the suite tool bar injected into that page
src/lib/            router (hash), handbook renderer, planner logic
src/components/     Home, Planner, PlannerResults (+Heatmap), Handbook (+HandbookContent), Shell
```
