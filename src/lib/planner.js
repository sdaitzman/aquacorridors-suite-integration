// AquaCorridors Planner data + logic.
// The concern → practice mapping is ported unchanged from the original landowner
// tool (fl_wlfw/landowner-tool, src/App.vue + ConservationPracticeExplorer.vue).
// The data files in public/data/ are verbatim copies of that tool's data.
import Papa from 'papaparse'
import { scaleLinear } from 'd3-scale'
import crosswalk from '../data/crosswalk.json'
import { BASE } from './router.js'

export { crosswalk }

function strip(str) {
  return str.replace(/["]+/g, '').trim()
}

// Creates a dictionary from the CSV associating concerns and category
// {category: "Soil & Land", concern: "Wind Erosion"} → {"Soil & Land": ["Wind Erosion"]}
function concernsByCategoryFromCsvObj(jsonObj) {
  const concernsByCategory = {}
  for (const line of jsonObj) {
    if (!line.category) continue
    if (concernsByCategory[line.category]) concernsByCategory[line.category].push(strip(line.concern))
    else concernsByCategory[line.category] = [strip(line.concern)]
  }
  return concernsByCategory
}

async function loadCsvWithHeader(filePath) {
  const csv = await fetch(filePath).then(r => r.text())
  return new Promise(resolve => Papa.parse(csv, { header: true, skipEmptyLines: true, complete: r => resolve(r.data) }))
}

let cache = null
/** Loads all planner data once. */
export async function loadPlannerData() {
  if (cache) return cache
  const [pairs, categoryLines, concernDescriptions, descriptionLines] = await Promise.all([
    loadCsvWithHeader(`${BASE}data/conservation_practices_long.csv`),
    loadCsvWithHeader(`${BASE}data/concerns_by_category.csv`),
    fetch(`${BASE}data/concern_descriptions_map.json`).then(r => r.json()),
    loadCsvWithHeader(`${BASE}data/conservation_practice_descriptions.csv`),
  ])
  const practiceDescriptions = {}
  for (const line of descriptionLines) {
    const label = line['Conservation Practice'] || ''
    const m = /^CP #(\d+)\s*\|\s*(.+?)\s*\|/.exec(label)
    if (m) practiceDescriptions[m[1]] = { name: m[2], definition: line['Definition'] || '' }
  }
  cache = {
    /** practice × concern CPPE effect value, long format (zeros included) */
    practiceConcernPairs: pairs.filter(p => p.conservation_practice && p.concern),
    concernsByCategory: concernsByCategoryFromCsvObj(categoryLines),
    concernDescriptions,
    practiceDescriptions, // keyed by CP number
  }
  return cache
}

// ---- mapping logic (verbatim port) ------------------------------------------------
export function findRelevantConservationPractices(practiceConcernPairs, chosenConcerns) {
  const relevantConservationPractices = new Set()
  for (const pair of practiceConcernPairs) {
    if (chosenConcerns.includes(pair['concern']) && pair['value'] != 0) {
      relevantConservationPractices.add(pair['conservation_practice'])
    }
  }
  return relevantConservationPractices
}

export function filterPracticesByChosenConcerns(practiceConcernPairs, chosenConcerns, relevantConservationPractices) {
  return practiceConcernPairs.filter(pair =>
    chosenConcerns.includes(pair['concern']) && relevantConservationPractices.has(pair['conservation_practice']))
}

export function cumulativeEffectScores(practiceConcernPairs) {
  const scores = {}
  for (const pair of practiceConcernPairs) {
    if (!(pair['conservation_practice'] in scores)) scores[pair['conservation_practice']] = 0
    scores[pair['conservation_practice']] += Number(pair['value'])
  }
  return scores
}

/** Sorts in place: practices with a higher cumulative effect score first (stable). */
export function sortByConservationPracticeEffectScores(practiceConcernPairs) {
  const scores = cumulativeEffectScores(practiceConcernPairs)
  practiceConcernPairs.sort((a, b) => scores[b['conservation_practice']] - scores[a['conservation_practice']])
  return scores
}

/** Everything the results view needs for a set of chosen concerns. */
export function computeResults(data, chosenConcerns) {
  const relevant = findRelevantConservationPractices(data.practiceConcernPairs, chosenConcerns)
  const pairs = filterPracticesByChosenConcerns(data.practiceConcernPairs, chosenConcerns, relevant)
  const scores = sortByConservationPracticeEffectScores(pairs)
  const practices = [...new Set(pairs.map(d => d.conservation_practice))]
  const concerns = [...new Set(pairs.map(d => d.concern))]
  const byPractice = {}
  for (const p of pairs) (byPractice[p.conservation_practice] ||= {})[p.concern] = Number(p.value)
  return { pairs, scores, practices, concerns, byPractice }
}

/**
 * The few practices to call out first: the top of the same ranking the heatmap
 * uses (combined CPPE score across the chosen concerns), positive scores only.
 */
export function topPractices(results, n = 3) {
  return results.practices
    .filter(p => results.scores[p] > 0)
    .slice(0, n)
    .map(p => ({
      name: p,
      score: results.scores[p],
      addressed: results.concerns.filter(c => (results.byPractice[p]?.[c] ?? 0) > 0).length,
      worsens: results.concerns.filter(c => (results.byPractice[p]?.[c] ?? 0) < 0).length,
    }))
}

/** Display name as the original heatmap shows it (trailing "(IRA)" removed). */
export const displayName = name => name.replace(/\(IRA\)$/, '').trim()

export const colorScale = scaleLinear()
  .domain([-2, 1, 0, 1, 2, 3, 4, 5])
  .range(['#ad1313', '#d65151', '#f2efee', '#cde3ee', '#8fc2dc', '#4b94c4', '#2265a3', '#053061'])

// Choosing a text color that gives good contrast with the color associated with that value
export function valueToTextColor(value) {
  return (value == 1 || value == 0) ? 'black' : 'white'
}

export const LEGEND_KEYS = [-2, -1, 0, 1, 2, 3, 4, 5]

// ---- CSV export (verbatim port) ---------------------------------------------------
export function restructurePracticeConcernPairs(data) {
  const columns = [...new Set(data.map(item => item.concern))]
  const table = [['Conservation Practice', ...columns]]
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.conservation_practice]) acc[item.conservation_practice] = {}
    acc[item.conservation_practice][item.concern] = item.value
    return acc
  }, {})
  for (const [practice, concerns] of Object.entries(groupedData)) {
    const row = [practice]
    for (const column of columns) row.push(concerns[column] || '')
    table.push(row)
  }
  return table
}

export function downloadCsv(pairs, filename = 'concerns.csv') {
  const csv = Papa.unparse(restructurePracticeConcernPairs(pairs), { header: true })
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

// ---- URL state (same query keys as the original tool) -----------------------------
export const FORM_KEYS = ['name', 'state', 'county', 'organization', 'role']
export function readPlannerState(query) {
  const concerns = (query.get('concerns') || '').split(':').map(s => s.trim()).filter(Boolean)
  const form = {}
  for (const k of FORM_KEYS) form[k] = query.get(k) || ''
  return { concerns, form }
}
export function plannerQuery(form, concerns) {
  const q = {}
  for (const k of FORM_KEYS) if (form[k]) q[k] = form[k]
  q.concerns = concerns.join(':')
  return q
}
const STORE = 'aquacorridors-planner'
export function savePlannerState(state) { try { sessionStorage.setItem(STORE, JSON.stringify(state)) } catch { /* ignore */ } }
export function loadPlannerState() { try { return JSON.parse(sessionStorage.getItem(STORE) || 'null') } catch { return null } }

export const US_STATES = [['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['DC','District Of Columbia'],['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NM','New Mexico'],['NY','New York'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['VT','Vermont'],['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],['NONE','None']]
