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
| `#/planner` | Concern picker (state in the query string: `name, state, county, organization, role, concerns=a:b:c`) |
| `#/planner/results?concerns=…` | Practices for those concerns |
| `#/handbook` | Handbook home |
| `#/handbook/<slug>` | One Handbook page, e.g. `#/handbook/cp-391-riparian-forest-buffer` |
| `…?embed=page` | That page alone — no site chrome, no sidebar (for iframes) |
| `…?embed=1` | Handbook with its sidebar, no site chrome |

Hash routing means the built site works from any sub-path or inside an iframe.

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

What changed: the "About you" form is optional (there is no backend to log it to), the top three
practices are highlighted, and names are clickable links into the Handbook.

## Layout

```
scripts/            sync + check scripts (node, macOS `sips` for images)
content/handbook/   verbatim markdown from the vault
public/data/        verbatim planner data
public/art/         illustrations, logos
src/lib/            router (hash), handbook renderer, planner logic
src/components/     Home, Planner, PlannerResults (+Heatmap), Handbook (+HandbookContent), Shell
```
