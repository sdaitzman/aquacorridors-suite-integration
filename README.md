# AquaCorridors Tool Suite — Planner + Handbook

A frontend-only web app that brings the **AquaCorridors Planner** and the **AquaCorridors Handbook**
(Working Lands for Wildlife · Aquatics) together under one roof, styled as a sibling of the
Southern Waters report generator.

- **Planner** — pick the resource concerns on your land and see which NRCS conservation practices
  address them, scored with USDA CPPE data. The concern → practice logic and the data are ported
  unchanged from the original landowner tool; the top few practices (by the same combined score the
  graph is sorted by) are called out first, and every practice and concern links to its Handbook page.
- **Handbook** — the Obsidian vault's markdown, rendered as authored (wikilinks, embeds, tables,
  videos). Every page has its own URL and can be iframed into another site.

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

## Where the content comes from (and how to update it)

Nothing in `content/`, `public/data/` or `src/data/` is hand-edited. Three scripts copy from the
canonical sources; re-run them when the sources change:

| Script | Source | Output |
|---|---|---|
| `npm run sync:handbook` | `…/FergusonLynchCollaborativeVault/Aquatics` (Obsidian vault, read-only) | `content/handbook/**/*.md` (verbatim), `public/handbook/images/` (web-sized copies of referenced images), `src/data/handbook-manifest.json` |
| `npm run sync:planner` | `fl_wlfw/landowner-tool/public/data` | `public/data/*.csv|json` (verbatim) |
| `npm run sync:art` | Erick Ingraham's illustrations (shared design-assets drive) | `public/art/` (web-sized copies) |
| `npm run check` | the two above | `src/data/crosswalk.json` — Planner names → Handbook slugs. **Fails** if any concern or practice has no Handbook page. |

Source paths are defaults inside each script; override with `HANDBOOK_SRC`, `PLANNER_SRC`, `ART_SRC`.

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
src/lib/            router (hash), handbook renderer, planner logic
src/components/     Home, Planner, PlannerResults (+Heatmap), Handbook (+HandbookContent), Shell
```
