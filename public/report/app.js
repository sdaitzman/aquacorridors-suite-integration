/* Southern Waters report generator — prototype
 *
 * Step 1: user describes themselves + picks an area of interest (draw / upload / HUC-8 lookup).
 * Step 2: report. Section 01 (at-risk species) is wired to the live ArcGIS layer;
 *         every other section is a design placeholder.
 */
(() => {
  'use strict';

  // ------------------------------------------------------------------
  // Config
  // ------------------------------------------------------------------
  const SERVICE = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services/endangered_acquatics/FeatureServer/0';
  const FIELDS = ['HUC8', 'NAME', 'STATES', 'Num_Aquati', 'List_Aquat', 'Num_RSGCN', 'List_RSGCN'];
  // Same org, same watersheds, but with 4000-char list fields — the polygon layer's List_* fields are
  // cut at 254 chars, so species lists come from this table (keyed by HUC8 as an integer).
  const LISTS = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services/EndangeredSpeciesByWatershed_CSV_G123_S123/FeatureServer/0';
  // Esri Light Gray Canvas — no API key needed; tinted toward the ANCHOR palette in CSS.
  const TILE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  const TILE_REF = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}';
  const TILE_ATTR = 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors';
  const SE_CENTER = [34.4, -85.2];
  const RAMP = ['#F7EFDF', '#EAC891', '#DE9A5C', '#D06224', '#AE431E', '#2E1E12']; // six classes, light → dark
  const INK = '#2E1E12', ROJO = '#AE431E', CREAM = '#F7EFDF';
  const SQM_PER_ACRE = 4046.8564224;

  // ------------------------------------------------------------------
  // State
  // ------------------------------------------------------------------
  const PREVIEW = 25; // rows shown per table before "download full table"; the CSV has everything
  const PDF_MODE = /[?&]aoi(b64)?=/.test(location.search); // rendered headless for the PDF → tables use the 25-row preview rule
  let exportAll = false; // set by the PDF server (?aoi… with exportAll:true) → every table shows every row
  const SHOW_FIRST = 5; const expandedTables = new Set(); // every table shows 5 rows online with a "show all" button; the PDF keeps the 25-row preview rule
  const SHOW_FIRST_BY = { st: 3 }; // success story cards are tall: 3 before "show all"
  const firstN = (key) => SHOW_FIRST_BY[key] || SHOW_FIRST;
  const shownRows = (rows, key) => rows.slice(0, exportAll ? Infinity : PDF_MODE ? PREVIEW : (key && expandedTables.has(key)) ? Infinity : firstN(key));
  /** Accessible names for every filter control (placeholder / first option), run once at boot. */
  function labelFilters() { $$('.filters input, .filters select, #sp-filter input, #sp-filter select').forEach(el => { if (el.getAttribute('aria-label') || (el.labels && el.labels.length)) return; el.setAttribute('aria-label', el.placeholder || (el.options && el.options[0] ? el.options[0].text.replace(/^Any /, '') : 'Filter')); }); }
  /** Card-style tables → ARIA table semantics so screen readers can move by row and cell. */
  function tableA11y(rowsSel, label) {
    const rows = $(rowsSel); if (!rows) return;
    if (rows.querySelector('table')) { rows.querySelector('table').setAttribute('aria-label', label); return; } // real table: native semantics
    rows.setAttribute('role', 'table'); rows.setAttribute('aria-label', label);
    $$(`${rowsSel} > .trow, ${rowsSel} > .story, ${rowsSel} > .gage-row`).forEach(r => { r.setAttribute('role', 'row'); [...r.children].forEach(c => { c.setAttribute('role', 'cell'); }); });
  }
  /** Stat cards announce "label: value" as one phrase. */
  function statLabels() { $$('.stat, .stat-pill').forEach(el => { const n = el.querySelector('.n, b'), pre = el.querySelector('.pre'), l = el.querySelector('.label, span:not(.pre)'); if (n && l) el.setAttribute('aria-label', `${pre ? pre.textContent.trim() + ' ' : ''}${n.textContent.trim()} ${l.textContent.trim()}`); }); }
  // ---- Shared table renderer: real <table>, a description under each header, click-to-sort headers (first click = the column's natural order)
  const tableSort = {};
  const linkCell = (url) => (url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(String(url).replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>` : '—');
  function sortRows(key, rows, cols) { const st = tableSort[key]; const col = st && cols.find(c => c.k === st.k); if (!col || !col.sort) return rows; return rows.slice().sort((a, b) => col.sort(a, b) * st.dir); }
  /** Column description, hidden until the ⓘ button is pressed (printed in full). */
  const helpBtn = (h) => (h ? `<button type="button" class="info" aria-label="About this column" aria-expanded="false" title="About this column">i</button><span class="help" hidden>${h}</span>` : '');
  document.addEventListener('click', (e) => { const btn = e.target.closest('.tbl thead .info'); if (!btn) return; e.stopPropagation(); e.preventDefault(); const th = btn.closest('th'); const open = !th.classList.contains('help-open'); th.classList.toggle('help-open', open); btn.setAttribute('aria-expanded', String(open)); th.querySelector('.help').hidden = !open; }, true);
  document.addEventListener('keydown', (e) => { if (e.target.closest && e.target.closest('.tbl thead .info') && (e.key === 'Enter' || e.key === ' ')) e.stopPropagation(); }, true); // keep the header's sort shortcut out of it
  function tableHtml(key, cols, shown, empty) {
    const st = tableSort[key] || {};
    const th = (c) => { if (!c.sort) return `<th scope="col">${esc(c.label)}${helpBtn(c.help)}</th>`;
      const on = st.k === c.k, desc = on && ((c.desc ? 1 : -1) * st.dir === 1);
      return `<th scope="col" class="sortable${on ? ' on' : ''}" data-sort="${c.k}" aria-sort="${on ? (desc ? 'descending' : 'ascending') : 'none'}" title="Click to sort by ${esc(c.label.toLowerCase())}"><span class="sort-btn" aria-hidden="true">${esc(c.label)} <span class="arrow">${on ? (desc ? '▼' : '▲') : '⇅'}</span></span><span class="sr-only">${esc(c.label)}</span>${helpBtn(c.help)}</th>`; };
    const body = shown.length ? shown.map(r => `<tr>${cols.map((c, i) => (i === 0 ? `<th scope="row">${c.cell(r)}</th>` : `<td${c.mono ? ' class="mono"' : ''}>${c.cell(r)}</td>`)).join('')}</tr>`).join('') : `<tr><td colspan="${cols.length}">${empty}</td></tr>`;
    return `<div class="tbl-wrap"><table class="tbl"><thead><tr>${cols.map(th).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
  }
  function bindTableSort(rowsSel, key, rerender) { $$(`${rowsSel} th[data-sort]`).forEach(th => { const go = () => { const k = th.dataset.sort; const st = tableSort[key]; tableSort[key] = { k, dir: st && st.k === k ? -st.dir : 1 }; rerender(); }; th.onclick = go; th.tabIndex = 0; th.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }; }); }
  const byStr = (f) => (a, b) => String(f(a) || '').localeCompare(String(f(b) || ''));
  const byNumDesc = (f) => (a, b) => ((f(b) ?? -Infinity) - (f(a) ?? -Infinity));
  /** "Show all N rows" / "Show first 5 only" button under a .rows container; rerender re-runs the section's renderer. */
  function moreButton(rowsSel, key, total, rerender) {
    const rows = $(rowsSel); if (!rows) return;
    let wrap = rows.nextElementSibling && rows.nextElementSibling.classList.contains('more-row') ? rows.nextElementSibling : null;
    if (!wrap) { wrap = document.createElement('div'); wrap.className = 'more-row'; wrap.setAttribute('data-noprint', ''); wrap.innerHTML = '<button class="pill sunset" type="button"></button>'; rows.after(wrap); }
    tableA11y(rowsSel, { sp: 'At-risk species', org: 'Organizations and agency offices', st: 'Success stories', pa: 'Partner priority layers', wq: 'Assessed waters', dams: 'Dams', xings: 'Road crossings', dr: 'Counties and drought', gage: 'Streamflow gages' }[key] || 'Table');
    const btn = wrap.firstElementChild, on = expandedTables.has(key);
    btn.hidden = exportAll || PDF_MODE || total <= firstN(key);
    btn.textContent = on ? `Show first ${firstN(key)} only ↑` : `Show all ${fmt(total)} rows ↓`;
    btn.onclick = () => { if (on) { expandedTables.delete(key); rows.scrollIntoView({ block: 'start' }); } else expandedTables.add(key); rerender(); };
  }
  const state = {
    mode: 'draw',
    regionKind: 'county',
    boundaryKind: null,      // 'draw' | 'upload' | 'county' | 'huc8' | 'huc12'
    boundaryCode: null,      // FIPS / HUC code when the boundary came from the region picker
    boundary: null,          // GeoJSON Feature<Polygon|MultiPolygon>, WGS84
    boundarySource: '',      // human label: "Drawn polygon", "Upload · file.zip", "HUC-8 · Upper Coosa"
    draw: { pts: [], closed: false },
    report: null,            // computed report data
    filter: '', sort: 'name', dir: 1,
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const fmt = (n, d = 0) => Number(n).toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: d });
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let toastTimer;
  function toast(msg, ms = 3200) {
    const t = $('#toast');
    t.textContent = msg; t.hidden = false; t.style.opacity = 1;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.style.opacity = 0; setTimeout(() => (t.hidden = true), 300); }, ms);
  }

  const tiles = () => L.layerGroup([
    L.tileLayer(TILE_URL, { attribution: TILE_ATTR, maxZoom: 16, crossOrigin: 'anonymous' }),
    L.tileLayer(TILE_REF, { maxZoom: 16, pane: 'shadowPane', opacity: .85, crossOrigin: 'anonymous' }),
  ]);
  const boundaryStyle = { color: INK, weight: 3, fill: false, dashArray: null };
  // Satellite view (00 Overview + its explorer): Esri World Imagery with place labels; public, no key
  const IMAGERY_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  const IMAGERY_REF = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
  const IMAGERY_ATTR = 'Imagery &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community';
  /** Switch a map between the warm grey basemap and satellite imagery. Satellite drops the basemap tint and softens
   *  everything outside the reporting area with a cream veil so the area itself stands out. `front` = layers to keep on top. */
  function setSatellite(m, on, { front = [] } = {}) {
    if (!m || !state.boundary) return;
    if (!m._swSat) {
      m._swSat = L.layerGroup([
        L.tileLayer(IMAGERY_URL, { attribution: IMAGERY_ATTR, maxZoom: 18, crossOrigin: 'anonymous' }),
        L.tileLayer(IMAGERY_REF, { maxZoom: 18, pane: 'shadowPane', crossOrigin: 'anonymous' }),
      ]);
      const g = state.boundary.geometry || state.boundary; const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
      if (!m.getPane('veilPane')) { const vp = m.createPane('veilPane'); vp.style.zIndex = 350; vp.style.pointerEvents = 'none'; } // above tiles, under every data layer
      m._swVeil = L.polygon([[[-85, -180], [-85, 180], [85, 180], [85, -180]], ...polys.map(pl => pl[0].map(([x, y]) => [y, x]))], { stroke: false, fillColor: CREAM, fillOpacity: .5, interactive: false, pane: 'veilPane', renderer: L.svg({ pane: 'veilPane' }) });
    }
    const c = m.getContainer();
    if (on) { if (m._swBase) m._swBase.remove(); m._swSat.addTo(m); m._swVeil.addTo(m); c.classList.add('sat-mode'); }
    else { m._swSat.remove(); m._swVeil.remove(); if (m._swBase && !m.hasLayer(m._swBase)) m._swBase.addTo(m); c.classList.remove('sat-mode'); }
    front.forEach(l => l && l.bringToFront && l.bringToFront());
  }
  /** "Map | Satellite" switch for a section map or its explorer. `well` = snapshot to refresh (page maps);
   *  `pageId` = page map whose current choice an explorer opens with. */
  function addBaseSwitch(m, { well = null, pageId = null } = {}) {
    const ctl = L.control({ position: 'topleft' }); let box;
    const set = (on) => {
      m._swMode = on ? 'sat' : 'map'; setSatellite(m, on);
      box.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String((x.dataset.base === 'sat') === on)));
      if (well) snapLater(m, well);
    };
    ctl.onAdd = () => {
      box = L.DomUtil.create('div', 'map-mode'); box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Background'); box.setAttribute('data-noprint', '');
      box.innerHTML = '<button type="button" data-base="map" aria-pressed="true">Map</button><button type="button" data-base="sat" aria-pressed="false">Satellite</button>';
      L.DomEvent.disableClickPropagation(box); L.DomEvent.disableScrollPropagation(box);
      box.addEventListener('click', (e) => { const x = e.target.closest('button'); if (x) set(x.dataset.base === 'sat'); });
      return box;
    };
    ctl.addTo(m);
    if (pageId && maps[pageId] && maps[pageId]._swMode === 'sat') set(true); // call after the map has a view (the veil needs one)
  }
  /** "Land cover | Satellite" switch in a map corner; onChange(mode) with 'lc' or 'sat'. */
  function addModeSwitch(m, onChange, initial = 'lc') {
    const ctl = L.control({ position: 'topleft' });
    ctl.onAdd = () => {
      const d = L.DomUtil.create('div', 'map-mode'); d.setAttribute('role', 'group'); d.setAttribute('aria-label', 'Map view'); d.setAttribute('data-noprint', '');
      d.innerHTML = [['lc', 'Land cover'], ['sat', 'Satellite']].map(([k, t]) => `<button type="button" data-mode="${k}" aria-pressed="${k === initial}">${t}</button>`).join('');
      L.DomEvent.disableClickPropagation(d); L.DomEvent.disableScrollPropagation(d);
      d.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; d.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b))); onChange(b.dataset.mode); });
      return d;
    };
    return ctl.addTo(m);
  }

  // ------------------------------------------------------------------
  // Intake map + drawing
  // ------------------------------------------------------------------
  const intakeMap = L.map('intake-map', { center: SE_CENTER, zoom: 6, zoomControl: false, doubleClickZoom: false, attributionControl: true });
  L.control.zoom({ position: 'bottomright' }).addTo(intakeMap);
  // Intake basemap: Stamen Terrain (OpenStreetMap data, hosted by Stadia Maps). Works from localhost without a key;
  // a deployed domain needs a free Stadia key in STADIA_KEY (and the domain registered there). Falls back to the gray canvas on tile errors.
  const STADIA_KEY = '';
  const terrain = L.tileLayer(`https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png${STADIA_KEY ? `?api_key=${STADIA_KEY}` : ''}`,
    { maxZoom: 18, attribution: '&copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://www.stamen.com/">Stamen Design</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' });
  let terrainErrors = 0;
  terrain.on('tileerror', () => { if (++terrainErrors === 6 && intakeMap.hasLayer(terrain)) { terrain.remove(); tiles().addTo(intakeMap); $('#intake-map').classList.remove('no-tint'); console.warn('Stamen Terrain tiles unavailable — using the gray canvas basemap'); } });
  terrain.addTo(intakeMap); $('#intake-map').classList.add('no-tint');
  queueMicrotask(showSwfOutline); // the Southern Waters boundary stays on the intake map in every mode (deferred: its `let` state is declared further down the script)
  const drawLayer = L.layerGroup().addTo(intakeMap);   // vertices + rubber band
  const aoiLayer = L.layerGroup().addTo(intakeMap);    // committed boundary
  let rubber = null;

  function setDrawStatus(text) { $('#draw-status').textContent = text; }

  let commitTimer;
  function commitDrawnBoundary() {   // closed shape → boundary (debounced while dragging)
    clearTimeout(commitTimer);
    commitTimer = setTimeout(() => { if (state.draw.closed && state.draw.pts.length >= 3) setBoundary(turf.polygon([ringFromLatLngs(state.draw.pts)]), 'Drawn polygon', { fit: false }); }, 120);
  }
  function renderDraw() {
    drawLayer.clearLayers();
    const { pts, closed } = state.draw;
    let outline = null;
    if (pts.length >= 2 && !closed) outline = L.polyline(pts, { color: INK, weight: 2, dashArray: '4 4', interactive: false }).addTo(drawLayer);
    if (pts.length >= 3 && !closed) L.polygon(pts, { color: INK, weight: 0, fillColor: ROJO, fillOpacity: .18, interactive: false }).addTo(drawLayer);
    // vertices: drag to move, right-click to remove, click the first one to close
    pts.forEach((ll, i) => {
      const mk = L.marker(ll, { icon: L.divIcon({ className: 'vertex' + (i === 0 ? ' first' : ''), iconSize: [11, 11] }), draggable: true, bubblingMouseEvents: false, title: i === 0 && !closed && pts.length >= 3 ? 'Click to close the shape' : 'Drag to move · right-click to remove' }).addTo(drawLayer);
      mk.on('dragstart', () => mk.getElement()?.classList.add('dragging'));
      mk.on('drag', (e) => { pts[i] = e.target.getLatLng(); if (outline) outline.setLatLngs(pts); if (closed) commitDrawnBoundary(); });
      mk.on('dragend', () => { mk.getElement()?.classList.remove('dragging'); renderDraw(); if (closed) commitDrawnBoundary(); });
      mk.on('click', (e) => { L.DomEvent.stop(e.originalEvent || e); if (i === 0 && !closed && pts.length >= 3) closeShape(); });
      mk.on('contextmenu', (e) => { L.DomEvent.stop(e.originalEvent || e); if (closed && pts.length <= 3) { toast('A closed shape needs at least three points.'); return; } pts.splice(i, 1); renderDraw(); if (closed) commitDrawnBoundary(); });
    });
    // midpoint handles: click to insert a vertex on that edge
    const edges = pts.length >= 2 ? pts.length - (closed || pts.length >= 3 ? 0 : 1) : 0;
    for (let i = 0; i < edges; i++) {
      const p1 = pts[i], p2 = pts[(i + 1) % pts.length];
      if (!closed && i === pts.length - 1) continue; // no handle on the open (rubber-band) edge while drawing
      const mid = L.latLng((p1.lat + p2.lat) / 2, (p1.lng + p2.lng) / 2);
      const hm = L.marker(mid, { icon: L.divIcon({ className: 'midpoint', iconSize: [9, 9] }), bubblingMouseEvents: false, title: 'Click to add a point here' }).addTo(drawLayer);
      hm.on('click', (e) => { L.DomEvent.stop(e.originalEvent || e); pts.splice(i + 1, 0, mid); renderDraw(); if (closed) commitDrawnBoundary(); });
    }
    if (!closed) {
      if (pts.length === 0) setDrawStatus('Click the map to start drawing');
      else if (pts.length < 3) setDrawStatus(`${pts.length} point${pts.length > 1 ? 's' : ''} · keep clicking`);
      else setDrawStatus(`${pts.length} points · double-click, press Close, or click the first point to finish`);
    }
    $('#drawwell').classList.toggle('drawing-cursor', state.mode === 'draw' && !closed);
  }

  function ringFromLatLngs(pts) {
    const ring = pts.map(ll => [Number(ll.lng.toFixed(6)), Number(ll.lat.toFixed(6))]);
    ring.push(ring[0]);
    return ring;
  }

  function setBoundary(feature, sourceLabel, { fit = true, kind = 'draw', code = null } = {}) {
    state.boundary = feature;
    state.boundarySource = sourceLabel;
    state.boundaryKind = feature ? kind : null; state.boundaryCode = feature ? code : null;
    aoiLayer.clearLayers();
    if (feature) {
      const lyr = L.geoJSON(feature, { style: { color: INK, weight: 3, fillColor: ROJO, fillOpacity: .18 } }).addTo(aoiLayer);
      if (fit) intakeMap.fitBounds(lyr.getBounds(), { padding: [24, 24] });
      const acres = turf.area(feature) / SQM_PER_ACRE;
      $('#aoi-summary').textContent = `${sourceLabel} · ${fmt(acres)} acres`;
      $('#btn-generate').disabled = false; $('#btn-clear-area').disabled = false;
      if (state.mode === 'draw' && kind === 'draw') setDrawStatus(`Boundary closed · ${fmt(acres)} acres · drag points to adjust, click a square to add one`);
    } else {
      $('#aoi-summary').textContent = 'No area selected yet';
      $('#btn-generate').disabled = true; $('#btn-clear-area').disabled = !state.draw.pts.length;
    }
  }

  function closeShape() {
    const { pts } = state.draw;
    if (pts.length < 3) { toast('Add at least three points before closing the shape.'); return; }
    state.draw.closed = true;
    if (rubber) { drawLayer.removeLayer(rubber); rubber = null; }
    renderDraw();
    const feature = turf.polygon([ringFromLatLngs(pts)]);
    setBoundary(feature, 'Drawn polygon', { fit: false });
  }
  function clearShape() {
    state.draw = { pts: [], closed: false };
    if (state.mode === 'draw') setBoundary(null, '');
    renderDraw();
  }
  function undoPoint() {
    if (state.draw.closed) { state.draw.closed = false; setBoundary(null, ''); }
    state.draw.pts.pop();
    renderDraw();
  }

  intakeMap.on('click', (e) => {
    if (state.mode !== 'draw' || state.draw.closed) return;
    state.draw.pts.push(e.latlng);
    renderDraw();
  });
  intakeMap.on('dblclick', (e) => {
    if (state.mode !== 'draw' || state.draw.closed) return;
    // dblclick fires after two clicks that both added the same vertex — drop the duplicate
    const p = state.draw.pts;
    if (p.length >= 2 && p[p.length - 1].equals(p[p.length - 2], 1e-9)) p.pop();
    closeShape();
  });
  intakeMap.on('mousemove', (e) => {
    if (state.mode !== 'draw' || state.draw.closed || !state.draw.pts.length) return;
    const pts = state.draw.pts;
    const line = [pts[pts.length - 1], e.latlng].concat(pts.length >= 2 ? [pts[0]] : []);
    if (!rubber) rubber = L.polyline(line, { color: ROJO, weight: 1.5, dashArray: '3 5', interactive: false }).addTo(drawLayer);
    else rubber.setLatLngs(line);
  });
  $('#btn-undo').onclick = undoPoint;
  $('#btn-close').onclick = closeShape;
  $('#btn-clear').onclick = clearShape;
  /** Clear whatever area is set — drawn, uploaded or picked — and the inputs that produced it. */
  function clearArea() {
    state.draw = { pts: [], closed: false }; drawLayer.clearLayers(); rubber = null;
    setBoundary(null, '');
    if (state.mode === 'draw') renderDraw();
    const fi = $('#file'); if (fi) fi.value = '';
    const q = $('#region-q'); if (q) q.value = ''; const sg = $('#region-suggest'); if (sg) sg.innerHTML = '';
    if (location.search) history.replaceState(null, '', location.pathname); // drop ?huc8= / ?county= / ?poly= so a reload starts clean
    intakeMap.setView(SE_CENTER, 6);
    toast('Area cleared');
  }
  $('#btn-clear-area').onclick = clearArea;

  // Place search (Nominatim) — just recentres the map.
  $('#jump').addEventListener('keydown', async (e) => {
    if (e.key !== 'Enter') return;
    const q = e.target.value.trim(); if (!q) return;
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(q)}`, { headers: { Accept: 'application/json' } });
      const j = await r.json();
      if (!j.length) { toast('No place found for that search.'); return; }
      const bb = j[0].boundingbox.map(Number); // [s, n, w, e]
      intakeMap.fitBounds([[bb[0], bb[2]], [bb[1], bb[3]]]);
    } catch { toast('Place search is unavailable right now.'); }
  });

  // ------------------------------------------------------------------
  // AOI mode switching
  // ------------------------------------------------------------------
  function setMode(mode) {
    state.mode = mode;
    $$('#aoi-modes .pill').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    $('#mode-upload').hidden = mode !== 'upload';
    $('#mode-region').hidden = mode !== 'region';
    $('#draw-tools').hidden = mode !== 'draw';
    if (mode === 'draw') {
      // restore the drawn shape (if any) as the boundary
      if (state.draw.closed) setBoundary(turf.polygon([ringFromLatLngs(state.draw.pts)]), 'Drawn polygon', { fit: false });
      else setBoundary(null, '');
      renderDraw();
    } else {
      drawLayer.clearLayers(); rubber = null;
      if (state.boundarySource === 'Drawn polygon') setBoundary(null, '');
      setDrawStatus(mode === 'upload' ? 'Upload a file to preview it here' : 'Pick a county or watershed to preview it here');
      $('#drawwell').classList.remove('drawing-cursor');
    }
    showSwfOutline();
  }
  $$('#aoi-modes .pill').forEach(b => b.onclick = () => setMode(b.dataset.mode));

  // ------------------------------------------------------------------
  // Upload
  // ------------------------------------------------------------------
  const drop = $('#drop'), fileInput = $('#file');
  drop.onclick = () => fileInput.click();
  drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('over'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('over'));
  drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('over'); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); });
  fileInput.onchange = () => fileInput.files[0] && handleFile(fileInput.files[0]);

  async function handleFile(file) {
    if (file.size > 25 * 1024 * 1024) { toast('That file is over 25 MB.'); return; }
    const name = file.name.toLowerCase();
    try {
      let gj;
      if (name.endsWith('.zip')) {
        if (typeof shp !== 'function') throw new Error('Shapefile parser did not load');
        gj = await shp(await file.arrayBuffer());
        if (Array.isArray(gj)) gj = { type: 'FeatureCollection', features: gj.flatMap(fc => fc.features) };
      } else if (name.endsWith('.kml')) {
        const doc = new DOMParser().parseFromString(await file.text(), 'text/xml');
        gj = toGeoJSON.kml(doc);
      } else {
        gj = JSON.parse(await file.text());
      }
      const feature = polygonsOnly(gj);
      if (!feature) throw new Error('No polygon geometry found in that file');
      setBoundary(feature, `Upload · ${file.name}`, { kind: 'upload' });
      toast(`Loaded ${file.name}`);
    } catch (err) {
      console.error(err);
      toast(`Could not read that file: ${err.message}`);
    }
  }

  /** Collapse any GeoJSON into one WGS84 Polygon/MultiPolygon feature. */
  function polygonsOnly(gj) {
    const polys = [];
    const walk = (g) => {
      if (!g) return;
      if (g.type === 'FeatureCollection') g.features.forEach(f => walk(f));
      else if (g.type === 'Feature') walk(g.geometry);
      else if (g.type === 'GeometryCollection') g.geometries.forEach(walk);
      else if (g.type === 'Polygon') polys.push(g.coordinates);
      else if (g.type === 'MultiPolygon') g.coordinates.forEach(c => polys.push(c));
    };
    walk(gj);
    if (!polys.length) return null;
    // strip Z, sanity-check lon/lat range
    const clean = polys.map(p => p.map(ring => ring.map(c => [c[0], c[1]])));
    const flat = clean.flat(2);
    if (flat.some(c => Math.abs(c[0]) > 180 || Math.abs(c[1]) > 90)) throw new Error('Coordinates are not WGS84 lon/lat — reproject to EPSG:4326 first');
    let feature = clean.length === 1 ? turf.polygon(clean[0]) : turf.multiPolygon(clean);
    if (flat.length > 3000) feature = turf.simplify(feature, { tolerance: 0.0005, highQuality: false });
    return feature;
  }

  // ------------------------------------------------------------------
  // Region lookup — counties (Esri), HUC-8 / HUC-12 (USGS WBD), limited to the Southern Waters
  // Framework operational boundary
  // ------------------------------------------------------------------
  const SWF_BOUNDARY = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services/SWF_Operational_Boundary_Dissolve/FeatureServer/0';
  const COUNTIES = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Counties_Generalized_Boundaries/FeatureServer/0';
  const WBD = 'https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer';
  const REGION = {
    county: { label: 'County name', ph: 'e.g. Macon, Buncombe, Cherokee…', base: COUNTIES, idField: 'FIPS', fields: 'NAME,STATE_ABBR,FIPS,SQMI', order: 'NAME',
      where: q => `UPPER(NAME) LIKE UPPER('%${q}%')`, id: p => p.FIPS, title: p => `${p.NAME}, ${p.STATE_ABBR}`, sub: p => `${fmt(p.SQMI)} sq mi`, source: p => `County · ${p.NAME}, ${p.STATE_ABBR}`, empty: 'No counties in the Southern Waters area match that name' },
    huc8: { label: 'HUC-8 watershed', ph: 'e.g. Upper Little Tennessee, Etowah, or 06010202', base: `${WBD}/4`, idField: 'huc8', fields: 'huc8,name,states,areaacres', order: 'name',
      where: q => (/^\d+$/.test(q) ? `huc8 LIKE '${q}%'` : `UPPER(name) LIKE UPPER('%${q}%')`), id: p => p.huc8, title: p => p.name, sub: p => `${p.huc8} · ${p.states} · ${fmt(p.areaacres)} acres`, source: p => `HUC-8 · ${p.name} (${p.huc8})`, empty: 'No HUC-8 watersheds in the Southern Waters area match that name' },
    huc12: { label: 'HUC-12 subwatershed', ph: 'e.g. Cartoogechaye Creek, or 060102020104', base: `${WBD}/6`, idField: 'huc12', fields: 'huc12,name,states,areaacres', order: 'name',
      where: q => (/^\d+$/.test(q) ? `huc12 LIKE '${q}%'` : `UPPER(name) LIKE UPPER('%${q}%')`), id: p => p.huc12, title: p => p.name, sub: p => `${p.huc12} · ${p.states} · ${fmt(p.areaacres)} acres`, source: p => `HUC-12 · ${p.name} (${p.huc12})`, empty: 'No HUC-12 subwatersheds in the Southern Waters area match that name' },
  };
  let swfBoundary = null, swfBbox = null, swfPromise = null, swfLayer = null;
  // The programmatic boundary ships with the app (data/swf-boundary.json, built from datasets/NEW_Oct2026_Programmatic_Boundary_Counties_Dissolve.zip).
  const SWF_BOUNDARY_FILE = 'data/swf-boundary.json';
  function loadSwf() {
    return swfPromise || (swfPromise = fetch(SWF_BOUNDARY_FILE, { cache: 'force-cache' }).then(r => (r.ok ? r.json() : Promise.reject(new Error(`boundary file HTTP ${r.status}`))))
      .then(gj => { swfBoundary = gj.features[0]; swfBbox = turf.bbox(swfBoundary); return swfBoundary; })
      .catch(err => { swfPromise = null; throw err; }));
  }
  async function showSwfOutline() {
    try {
      const b = await loadSwf();
      if (swfLayer) return;
      swfLayer = L.geoJSON(b, { style: { color: INK, weight: 2.5, dashArray: '7 5', fill: false }, interactive: false }).addTo(intakeMap); swfLayer.bringToBack();
    } catch (err) { console.warn('SWF boundary unavailable', err); }
  }
  const inSwf = (f) => { try { return !swfBoundary || turf.booleanIntersects(swfBoundary, f); } catch { return true; } };

  // Region-wide at-risk species per HUC-8 — the same endangered_acquatics layer section 01 uses, for the landing context map.
  // The full layer takes ~30 s to generalize server-side, so a generalized copy ships in data/swf-species-huc8.json (live query = fallback).
  let swfSpecies = null, swfSpeciesPromise = null, swfBreaks = null;
  function loadSwfSpecies() {
    if (swfSpeciesPromise) return swfSpeciesPromise;
    const live = () => arcgis('query', { where: '1=1', outFields: 'HUC8,NAME,STATES,Num_Aquati,Num_RSGCN', returnGeometry: 'true', outSR: '4326', geometryPrecision: '3', maxAllowableOffset: '0.02', resultRecordCount: '2000', f: 'geojson' }, SERVICE, { timeoutMs: 90000 });
    return (swfSpeciesPromise = fetch('data/swf-species-huc8.json', { cache: 'force-cache' }).then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .catch(err => { console.warn('static species HUC-8 file unavailable, querying the service', err); return live(); })
      .then(gj => {
        swfSpecies = (gj.features || []).filter(f => f.geometry);
        const vals = swfSpecies.map(f => swfCount(f)).sort((a, b) => a - b);
        swfBreaks = RAMP.slice(1).map((_, i) => vals[Math.floor(vals.length * (i + 1) / RAMP.length)]); // region-wide sextile breaks → one RAMP class each
        return swfSpecies;
      })
      .catch(err => { swfSpeciesPromise = null; throw err; }));
  }
  const swfCount = (f) => Number(f.properties.Num_Aquati) || 0;
  const swfClass = (n) => (swfBreaks ? swfBreaks.filter(b => n >= b).length : 0);
  const swfSpeciesStyle = (f) => ({ color: CREAM, weight: .7, fillColor: RAMP[swfClass(swfCount(f))], fillOpacity: .82 });
  /** Tick labels for the species classes: '0–a', 'a–b', …, 'z+'. */
  const swfTicks = () => RAMP.map((_, i) => (i === 0 ? `0–${swfBreaks[0] - 1}` : i === RAMP.length - 1 ? `${swfBreaks[i - 1]}+` : `${swfBreaks[i - 1]}–${swfBreaks[i] - 1}`));
  /** Legend rows for the species ramp (region-wide sextiles) + boundary + area. */
  function swfLegendHtml() {
    const ticks = swfBreaks ? swfTicks() : [];
    const lab = (i) => ticks[i] || '';
    return RAMP.map((c, i) => `<div><span class="sw-sq" style="background:${c};box-shadow:inset 0 0 0 1px rgba(46,30,18,.2)"></span>${lab(i)}${i === 0 ? ' at-risk species' : ''}</div>`).join('')
      + `<div><span class="sw-line" style="border-top:3px dashed #8A8635"></span>Southern Waters operational boundary</div><div><span class="sw-sq" style="background:transparent;box-shadow:inset 0 0 0 3px ${INK}"></span>Your area</div>`;
  }
  // ---- Region-wide context: static reference numbers (data/region-context.json) + two live ones (species, drought)
  const regionCtxP = fetch('data/region-context.json', { cache: 'no-cache' }).then(r => (r.ok ? r.json() : null)).catch(() => null);
  const withRegion = (fn) => regionCtxP.then(rc => { try { fn(rc || {}); } catch (err) { console.warn('region context', err); } });
  function setRegion(id, html) { const el = $('#rc-' + id); if (!el) return; el.hidden = !html; el.querySelector('.txt').innerHTML = html || ''; }
  const ordinal = (n) => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th');
  const pctStr = (a, b) => { if (!b) return '—'; const v = a / b * 100; return `${v > 0 && v < 10 ? v.toFixed(1) : Math.round(v)}%`; };
  function speciesRegionHtml() {
    const r = state.report; if (!swfSpecies || !r || !r.watersheds.length) return '';
    const all = swfSpecies.map(swfCount).sort((a, b) => a - b); const med = all[Math.floor(all.length / 2)];
    const top = r.watersheds.slice().sort((a, b) => b.count - a.count)[0];
    const rank = all.filter(v => v > top.count).length + 1; const mean = r.watersheds.reduce((s, w) => s + w.count, 0) / r.watersheds.length;
    return `Across the Southern Waters region the median HUC-8 holds <b>${med}</b> at-risk aquatic species (max ${all[all.length - 1]}). Your watershed${r.watersheds.length === 1 ? ' holds' : 's average'} <b>${Math.round(mean)}</b>; the richest, ${esc(top.name)} (${top.count}), ranks <b>${ordinal(rank)} of ${all.length}</b> region-wide (top ${Math.max(1, Math.round(rank / all.length * 100))}%).`;
  }
  let regionDroughtP = null;
  /** Share of the whole Southern Waters boundary in drought (D1+) this week — D1 polygons are nested, so one class suffices. */
  function regionDrought() {
    return regionDroughtP || (regionDroughtP = (async () => {
      const b = await loadSwf(); const bb = turf.bbox(b); const total = turf.area(b) / SQM_PER_ACRE;
      const gj = await arcgis('query', { where: 'dm = 1', geometry: JSON.stringify({ xmin: bb[0], ymin: bb[1], xmax: bb[2], ymax: bb[3], spatialReference: { wkid: 4326 } }), geometryType: 'esriGeometryEnvelope', inSR: '4326', spatialRel: 'esriSpatialRelIntersects',
        outFields: 'dm', returnGeometry: 'true', outSR: '4326', geometryPrecision: '3', maxAllowableOffset: '0.02', f: 'geojson' }, `${USDM}/3`, { timeoutMs: 60000 });
      let acres = 0;
      (gj.features || []).forEach(f => { try { const ix = turf.intersect(b, f); if (ix) acres += turf.area(ix) / SQM_PER_ACRE; } catch { /* skip */ } });
      return { acres, total, share: total ? acres / total : 0 };
    })().catch(err => { regionDroughtP = null; throw err; }));
  }
  /** Region HUC-8s that intersect the reporting boundary, most species first. */
  function swfSpeciesOverlaps() {
    if (!swfSpecies || !state.boundary) return [];
    return swfSpecies.filter(f => { try { return turf.booleanIntersects(state.boundary, f); } catch { return false; } }).sort((a, b) => swfCount(b) - swfCount(a));
  }
  /** Species choropleth + SWF outline + the reporting area (with a ring so a small area stays visible at regional scale). */
  function addContextLayers(m, onPick) {
    const out = {};
    if (swfSpecies) out.sp = L.geoJSON({ type: 'FeatureCollection', features: swfSpecies }, { style: swfSpeciesStyle, interactive: !!onPick,
      onEachFeature: (f, lyr) => { if (!onPick) return; const p = f.properties; lyr.bindTooltip(`<b>${esc(p.NAME)}</b><br>HUC ${p.HUC8} · ${swfCount(f)} at-risk species`, { sticky: true }); lyr.on('click', () => onPick(f)); lyr.on('mouseover', () => lyr.setStyle({ weight: 2.5, color: INK })); lyr.on('mouseout', () => out.sp.resetStyle(lyr)); } }).addTo(m);
    if (swfBoundary) out.swf = L.geoJSON(swfBoundary, { style: { color: '#8A8635', weight: 2.5, dashArray: '8 6', fill: false }, interactive: false }).addTo(m);
    out.area = addBoundary(m); out.area.bringToFront();
    const c = turf.centroid(state.boundary).geometry.coordinates;
    out.ring = L.marker([c[1], c[0]], { interactive: false, keyboard: false, icon: L.divIcon({ className: '', iconSize: [36, 36], iconAnchor: [18, 18], html: `<div style="width:36px;height:36px;border-radius:999px;border:3px solid ${ROJO};box-shadow:0 0 0 2px ${CREAM}, 0 2px 8px rgba(46,30,18,.35)"></div>` }) }).addTo(m);
    return out;
  }
  let contextRun = 0;
  async function runContext(m) {
    const run = ++contextRun; const note = $('#ctx-note');
    note.textContent = 'Loading region-wide at-risk species…';
    const [swf, sp] = await Promise.all([loadSwf().catch(err => { console.warn('SWF boundary unavailable', err); return null; }), loadSwfSpecies().catch(err => { console.warn('region species HUC-8s unavailable', err); return null; })]);
    if (run !== contextRun || maps['context-map'] !== m) return;
    let layers;
    try { layers = addContextLayers(m, null); fitTo(m, [layers.swf || layers.area], 12); }
    catch (err) { console.error('context map failed', err); note.textContent = 'Context map unavailable right now'; return; }
    $('#ctx-legend').innerHTML = swfLegendHtml();
    const ov = swfSpeciesOverlaps(); const counts = ov.map(swfCount); const all = swfSpecies ? swfSpecies.map(swfCount).sort((a, b) => a - b) : [];
    note.textContent = !sp ? `Region-wide species counts unavailable right now${swf ? '' : ' · boundary outline unavailable'}`
      : `Your area touches ${ov.length} HUC-8${ov.length === 1 ? '' : 's'} with ${counts.length ? (Math.min(...counts) === Math.max(...counts) ? `${counts[0]}` : `${Math.min(...counts)}–${Math.max(...counts)}`) : '0'} at-risk species each · region-wide median ${all[Math.floor(all.length / 2)]}, max ${all[all.length - 1]}${swf ? '' : ' · boundary outline unavailable'}`;
    watchForSnapshot(m, 'context-well');
  }

  $$('#region-kinds .pill').forEach(b => b.onclick = () => {
    state.regionKind = b.dataset.kind;
    $$('#region-kinds .pill').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    const R = REGION[state.regionKind];
    $('#region-label').textContent = R.label; $('#region-q').placeholder = R.ph; $('#region-q').value = ''; $('#region-suggest').innerHTML = '';
  });

  let regionTimer, regionSeq = 0;
  $('#region-q').addEventListener('input', (e) => {
    clearTimeout(regionTimer);
    const q = e.target.value.trim();
    if (q.length < 2) { $('#region-suggest').innerHTML = ''; return; }
    regionTimer = setTimeout(() => searchRegion(q), 300);
  });

  async function searchRegion(q) {
    const R = REGION[state.regionKind]; const seq = ++regionSeq;
    $('#region-suggest').innerHTML = '<span class="loading"><span class="spinner"></span>Searching…</span>';
    try {
      await loadSwf();
      const env = JSON.stringify({ xmin: swfBbox[0], ymin: swfBbox[1], xmax: swfBbox[2], ymax: swfBbox[3], spatialReference: { wkid: 4326 } });
      const j = await arcgis('query', { where: R.where(q.replace(/'/g, "''")), geometry: env, geometryType: 'esriGeometryEnvelope', inSR: '4326', spatialRel: 'esriSpatialRelIntersects',
        outFields: R.fields, returnGeometry: 'true', outSR: '4326', maxAllowableOffset: '0.01', geometryPrecision: '3', resultRecordCount: '30', orderByFields: R.order, f: 'geojson' }, R.base, { timeoutMs: 25000 });
      if (seq !== regionSeq) return; // a newer search superseded this one
      const hits = (j.features || []).filter(inSwf).slice(0, 10);
      $('#region-suggest').innerHTML = hits.length
        ? hits.map((f, i) => `<button class="pill" type="button" data-i="${i}">${esc(R.title(f.properties))} <span class="col-label" style="opacity:.85">${esc(R.sub(f.properties))}</span></button>`).join('')
        : `<span class="label">${esc(R.empty)}</span>`;
      $$('#region-suggest [data-i]').forEach(b => b.onclick = () => pickRegion(hits[Number(b.dataset.i)].properties));
    } catch (err) { console.error(err); if (seq === regionSeq) $('#region-suggest').innerHTML = `<span class="label">${err.name === 'AbortError' ? 'Lookup timed out — try again' : 'Lookup failed — try again'}</span>`; }
  }

  async function pickRegion(p) {
    const kind = state.regionKind, R = REGION[kind], id = R.id(p);
    $('#region-suggest').innerHTML = '<span class="loading"><span class="spinner"></span>Loading boundary…</span>';
    try {
      const gj = await arcgis('query', { where: `${R.idField}='${String(id).replace(/'/g, "''")}'`, outFields: R.fields, returnGeometry: 'true', outSR: '4326', geometryPrecision: '5', f: 'geojson' }, R.base);
      const f = gj.features && gj.features[0];
      if (!f) throw new Error('empty');
      setBoundary({ type: 'Feature', properties: {}, geometry: f.geometry }, R.source(f.properties), { kind, code: String(id) });
      $('#region-q').value = R.title(f.properties);
      $('#region-suggest').innerHTML = `<span class="label">Selected · ${esc(R.source(f.properties))}</span>`;
    } catch (err) { console.error(err); toast('Could not load that boundary.'); $('#region-suggest').innerHTML = ''; }
  }

  // ------------------------------------------------------------------
  // Shareable URLs: the report's boundary lives in the query string
  // ------------------------------------------------------------------
  function boundaryParams() {
    const k = state.boundaryKind, code = state.boundaryCode;
    if (k === 'huc8' || k === 'huc12' || k === 'county') return { [k]: code };
    if (k === 'draw' && state.draw.closed) return { poly: state.draw.pts.map(ll => `${ll.lng.toFixed(4)},${ll.lat.toFixed(4)}`).join(';') };
    return null; // uploads are too big for a link
  }
  function updateUrl() {
    const p = boundaryParams(); const q = new URLSearchParams();
    if (p) Object.entries(p).forEach(([k, v]) => q.set(k, v));
    history.replaceState(null, '', location.pathname + (p ? '?' + q.toString() : ''));
  }
  $('#btn-share').onclick = async () => {
    if (!boundaryParams()) { toast('Uploaded shapes can\'t be shared by link — download the PDF instead.', 5000); return; }
    updateUrl();
    try { await navigator.clipboard.writeText(location.href); toast('Link copied — it reopens this exact report.'); }
    catch { prompt('Copy this link:', location.href); }
  };
  /** Rebuild the boundary from URL params (?huc8=, ?huc12=, ?county=, ?poly=) and generate. */
  async function restoreFromUrl(q) {
    for (const kind of ['huc8', 'huc12', 'county']) {
      const code = q.get(kind); if (!code) continue;
      const R = REGION[kind]; setMode('region'); state.regionKind = kind;
      $$('#region-kinds .pill').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.kind === kind)));
      const gj = await retry(() => arcgis('query', { where: `${R.idField}='${code.replace(/'/g, "''")}'`, outFields: R.fields, returnGeometry: 'true', outSR: '4326', geometryPrecision: '5', f: 'geojson' }, R.base));
      const f = gj.features && gj.features[0]; if (!f) throw new Error(`No ${kind} ${code}`);
      setBoundary({ type: 'Feature', properties: {}, geometry: f.geometry }, R.source(f.properties), { kind, code });
      $('#region-q').value = R.title(f.properties);
      return generate();
    }
    const poly = q.get('poly');
    if (poly) {
      const pts = poly.split(';').map(s => s.split(',').map(Number)).filter(c => c.length === 2 && c.every(Number.isFinite)).map(c => L.latLng(c[1], c[0]));
      if (pts.length >= 3) { state.draw = { pts, closed: true }; renderDraw(); setBoundary(turf.polygon([ringFromLatLngs(pts)]), 'Drawn polygon'); return generate(); }
    }
  }

  // ------------------------------------------------------------------
  // ArcGIS helper
  // ------------------------------------------------------------------
  async function arcgis(op, params, base = SERVICE, { timeoutMs = 0 } = {}) {
    const body = new URLSearchParams(params);
    const ctl = timeoutMs ? new AbortController() : null; const timer = ctl && setTimeout(() => ctl.abort(), timeoutMs);
    let r;
    try { r = await fetch(`${base}/${op}`, { signal: ctl ? ctl.signal : undefined, method: 'POST', body, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }); }
    finally { if (timer) clearTimeout(timer); }
    if (!r.ok) throw new Error(`ArcGIS ${r.status}`);
    const j = await r.json();
    if (j.error) throw new Error(j.error.message || 'ArcGIS error');
    return j;
  }

  function esriPolygon(geom) {
    const rings = geom.type === 'Polygon' ? geom.coordinates : geom.coordinates.flat(1);
    return JSON.stringify({ rings: rings.map(r => r.map(c => [c[0], c[1]])), spatialReference: { wkid: 4326 } });
  }

  // ------------------------------------------------------------------
  // Report generation
  // ------------------------------------------------------------------
  $('#btn-generate').onclick = generate;

  let speciesReady = null; // resolves with the species roll-up (section 01); other sections that need it (NRCS states) wait on it
  /** Switch to the report at once; section 01 then loads on the report page like every other section. */
  async function generate() {
    if (!state.boundary) return;
    const btn = $('#btn-generate'); btn.disabled = true;
    try {
      state.report = null; expandedTables.clear();
      renderReportShell();
      resetStatuses();
      ['sum-miles', 'sum-dams', 'sum-xings', 'sum-orgs', 'sum-drought', 'sum-stories', 'sum-farms', 'sum-priority', 'st-counties', 'st-cover', 'pv-orgs', 'pv-stories', 'pv-priority'].forEach(id => setSummary(id, '…'));
      ['pv-viz-species', 'pv-viz-secas', 'pv-viz-priority', 'pv-viz-drought'].forEach(id => setSummary(id, '')); setSummary('st-counties-label', 'Counties'); setSummary('st-cover-label', 'Largest land cover'); updateAreaSummary();
      $('#intake').hidden = true; $('#report').hidden = false;
      showSlide(0, { scroll: true });
      updateUrl();
      speciesReady = runSpecies();
      setTimeout(initReportMaps, 0);
    } catch (err) {
      console.error(err);
      toast(`Report failed: ${err.message}`, 5000);
    } finally {
      btn.disabled = false; $('#gen-loading').hidden = true;
    }
  }
  /** Hero, dates, acreage and placeholders — everything that does not need the species roll-up. */
  function renderReportShell() {
    const now = new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });
    const who = [$('#f-name').value, $('#f-org').value].filter(Boolean).join(' · ');
    $('#generated-on').textContent = now; $('#generated-on-2').textContent = now; $('.print-date').textContent = now;
    $('#generated-for').textContent = who ? `· for ${who}` : '';
    $('#st-acres').textContent = fmt(turf.area(state.boundary) / SQM_PER_ACRE);
    ['st-species', 'st-huc', 'sp-total', 'sp-huc', 'sp-rsgcn'].forEach(id => { const el = $('#' + id); if (el) el.textContent = '…'; });
    $('#sp-preview').textContent = 'Loading species…'; $('#sp-rows').innerHTML = ''; $('#sp-source-note').textContent = 'Querying the at-risk species layer…';
    setRegion('species', '');
    updateCitation();
  }
  /** Section 01: HUC-8s intersecting the boundary, their full species lists, the roll-up, the map. */
  async function runSpecies() {
    setStatus('s-species', 'loading', null, () => { speciesReady = runSpecies(); });
    try {
      // A picked HUC-8 (or the HUC-8 containing a picked HUC-12) is used exactly — neighbouring
      // watersheds that merely share a border are not pulled in. Everything else intersects spatially.
      const exact = state.boundaryKind === 'huc8' || state.boundaryKind === 'huc12';
      // HUC-8 polygons + counts come from the Oct-2026 species layer shipped with the app (the same file the landing map uses)
      const all = await loadSwfSpecies();
      const feats = exact
        ? all.filter(f => String(f.properties.HUC8) === String(state.boundaryCode).slice(0, 8))
        : all.filter(f => { try { return turf.booleanIntersects(state.boundary, f); } catch { return false; } });
      // full species lists: the region lists file (row matching the layer's count, generic names dropped); live table as fallback
      const lists = {};
      try {
        const idx = await regionLists(); // builds the region index too
        const d = regionListsData || {};
        feats.forEach(f => { const h = String(f.properties.HUC8).padStart(8, '0'); const v = d[h]; if (v && !v.truncated) lists[Number(h)] = { HUC8: h, Num_AquaticSpecies: v.num, List_AquaticSpecies: v.names.join(', '), Num_RSGCN: v.rsgcn.length, List_RSGCN: v.rsgcn.join(', ') }; });
        void idx;
      } catch (err) {
        console.warn('species list file unavailable, querying the table', err);
        try {
          const t = await arcgis('query', { where: `HUC8 IN (${feats.map(f => Number(f.properties.HUC8)).filter(Number.isFinite).join(',')})`, outFields: 'HUC8,Num_AquaticSpecies,List_AquaticSpecies,Num_RSGCN,List_RSGCN', returnGeometry: 'false', f: 'json' }, LISTS);
          const want = {}; feats.forEach(f => { want[Number(f.properties.HUC8)] = Number(f.properties.Num_Aquati); });
          const nNames = (a) => splitList(a.List_AquaticSpecies).length;
          (t.features || []).forEach(f => { const a = f.attributes, h = Number(a.HUC8), cur = lists[h], w = want[h];
            const better = !cur || (Number.isFinite(w) && Number(a.Num_AquaticSpecies) === w && Number(cur.Num_AquaticSpecies) !== w) || (Number(cur.Num_AquaticSpecies) !== w && nNames(a) > nNames(cur));
            if (better) lists[h] = a; });
        } catch (err2) { console.warn('species list table unavailable, falling back to the layer’s cut-off fields', err2); }
      }
      state.report = buildReport(state.boundary, feats, lists, { exact });
      renderReport();
      // 01 map
      const sm = freshMap('species-map');
      const { layer } = addSpeciesLayers(sm, (w) => openViewer('species', w));
      const b2 = addBoundary(sm); b2.bringToFront();
      fitTo(sm, [layer, b2], 20);
      watchForSnapshot(sm, 'species-well');
      setStatus('s-species', 'done');
      return state.report;
    } catch (err) {
      console.error(err);
      setStatus('s-species', 'error', err.message);
      $('#sp-preview').textContent = `Could not load the at-risk species layer: ${err.message}`;
      ['st-species', 'st-huc', 'sp-total', 'sp-huc', 'sp-rsgcn'].forEach(id => { const el = $('#' + id); if (el) el.textContent = '##'; });
      throw err;
    }
  }

  // Generic placeholders such as "a cavesnail" or "a freshwater amphipod" (lowercase article) are dropped by request; counts follow the names kept.
  const GENERIC_NAME = /^an? \S/;
  const splitList = (s) => String(s || '').split(',').map(x => x.trim()).filter(x => x && x.toLowerCase() !== 'nan' && !GENERIC_NAME.test(x));

  const TOUCH_ACRES = 5; // an intersecting HUC-8 with less overlap than this only shares a border
  // Region-wide species index: species → set of HUC-8s holding it, from data/swf-species-lists.json (live table fallback).
  let regionIdx = null, regionListsP = null, regionListsData = null;
  function regionLists() {
    if (regionListsP) return regionListsP;
    const live = async () => { const hucs = {}; let off = 0; for (;;) { const t = await arcgis('query', { where: '1=1', outFields: 'HUC8,Num_AquaticSpecies,List_AquaticSpecies', returnGeometry: 'false', orderByFields: 'ObjectId', resultOffset: String(off), resultRecordCount: '1000', f: 'json' }, LISTS);
      const f = t.features || []; f.forEach(x => { const h = String(x.attributes.HUC8).padStart(8, '0'); const names = splitList(x.attributes.List_AquaticSpecies); if (!hucs[h] || names.length > hucs[h].names.length) hucs[h] = { names }; }); off += f.length; if (f.length < 1000) break; } return { hucs }; };
    return (regionListsP = fetch('data/swf-species-lists.json', { cache: 'force-cache' }).then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))).catch(live).then(d => {
      regionListsData = d.hucs || {};
      const idx = new Map(); Object.entries(d.hucs || {}).forEach(([h, v]) => (v.names || []).filter(n => !GENERIC_NAME.test(n)).forEach(n => { if (!idx.has(n)) idx.set(n, new Set()); idx.get(n).add(h); }));
      regionIdx = idx; REGION_HUC8S = Object.keys(d.hucs || {}).length || REGION_HUC8S; if (state.report) renderSpeciesRows(); return idx;
    }).catch(err => { regionListsP = null; throw err; }));
  }
  let REGION_HUC8S = 669; // HUC-8s in the Southern Waters Program Area (updated from the region file when it loads)
  const regionHucs = (name) => (regionIdx && regionIdx.get(name) ? regionIdx.get(name).size : null);
  /** Species recorded in this watershed and in no other HUC-8 of the Southern Waters region. */
  /** A point inside the polygon for its pin + label: the centre of mass when that lies comfortably inside, otherwise the
   *  grid point farthest from the outline (crescent- or sliver-shaped intersections put the centroid outside). */
  function interiorPoint(poly) {
    const c = turf.centerOfMass(poly).geometry.coordinates;
    let lines; try { lines = turf.polygonToLine(poly); } catch { return c; }
    const edges = lines.type === 'FeatureCollection' ? lines.features : [lines];
    const bb = turf.bbox(poly); const diag = turf.distance([bb[0], bb[1]], [bb[2], bb[3]]);
    const clearance = (pt) => { let d = Infinity; edges.forEach(l => { const x = turf.pointToLineDistance(pt, l); if (x < d) d = x; }); return d; };
    try { if (turf.booleanPointInPolygon(c, poly) && clearance(c) > diag * .06) return c; } catch { return c; }
    const N = 14; let best = null, bd = -1;
    for (let i = 1; i < N; i++) for (let j = 1; j < N; j++) {
      const pt = [bb[0] + (bb[2] - bb[0]) * i / N, bb[1] + (bb[3] - bb[1]) * j / N];
      if (!turf.booleanPointInPolygon(pt, poly)) continue;
      const d = clearance(pt); if (d > bd) { bd = d; best = pt; }
    }
    return best || c;
  }
  const onlyHere = (w) => (regionIdx ? w.species.filter(n => { const s = regionIdx.get(n); return !s || (s.size === 1 && s.has(String(w.huc8).padStart(8, '0'))); }) : null);
  function buildReport(boundary, features, lists = {}, { exact = false } = {}) {
    const acres = turf.area(boundary) / SQM_PER_ACRE;
    let droppedTouching = 0;

    const watersheds = features.map(f => {
      const p = f.properties;
      const full = lists[Number(p.HUC8)];
      // Prefer the full-length table row; fall back to the polygon layer's 254-char (cut-off) fields.
      const truncated = !full && String(p.List_Aquat || '').length >= 250;
      const species = [...new Set(splitList(full ? full.List_AquaticSpecies : p.List_Aquat))];
      const rsgcn = [...new Set(splitList(full ? full.List_RSGCN : p.List_RSGCN))];
      let overlapAcres = null, pin = null, labelLeft = false;
      const sideOf = (poly, pt) => { const bb = turf.bbox(poly); return (pt[0] - bb[0]) > (bb[2] - pt[0]); }; // more room to the left of the pin → label goes left
      try {
        const ix = turf.intersect(boundary, f);
        if (ix) { overlapAcres = turf.area(ix) / SQM_PER_ACRE; pin = interiorPoint(ix); labelLeft = sideOf(ix, pin); }
      } catch { /* invalid geometry — fall back below */ }
      if (!pin) { pin = interiorPoint(f); labelLeft = sideOf(f, pin); }
      return {
        huc8: p.HUC8, name: p.NAME, states: p.STATES, count: (full || p.List_Aquat) ? species.length : Number(p.Num_Aquati) || 0,
        rsgcnCount: (full || p.List_RSGCN) ? rsgcn.length : Number(p.Num_RSGCN) || 0, species, rsgcn, truncated, listedCount: species.length,
        overlapAcres, pin, labelLeft, feature: f,
      };
    }).filter(w => { const keep = exact || w.overlapAcres == null || w.overlapAcres >= TOUCH_ACRES; if (!keep) droppedTouching++; return keep; })
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
    watersheds.forEach((w, i) => (w.n = i + 1));

    const rsgcnAll = new Set(watersheds.flatMap(w => w.rsgcn));
    const byName = new Map();
    watersheds.forEach(w => w.species.forEach(n => {
      const rec = byName.get(n) || { name: n, hucs: [], rsgcn: rsgcnAll.has(n) };
      rec.hucs.push(w.huc8); byName.set(n, rec);
    }));
    const species = [...byName.values()].sort((a, b) => a.name.localeCompare(b.name));

    const counts = watersheds.map(w => w.count);
    const min = counts.length ? Math.min(...counts) : 0, max = counts.length ? Math.max(...counts) : 0;
    const breaks = RAMP.map((_, i) => min + (max - min) * i / RAMP.length);
    const classOf = (v) => (max === min ? 2 : Math.min(RAMP.length - 1, Math.floor((v - min) / (max - min) * RAMP.length)));

    return {
      acres, watersheds, species, rsgcnCount: species.filter(s => s.rsgcn).length, exact, droppedTouching,
      truncatedCount: watersheds.filter(w => w.truncated).length,
      unlisted: watersheds.reduce((a, w) => a + Math.max(0, w.count - w.listedCount), 0),
      min, max, breaks, classOf, generatedOn: new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' }),
    };
  }

  // ------------------------------------------------------------------
  // Section load status → progress strip, tab dots, error cards, service banner
  // ------------------------------------------------------------------
  const LIVE_SECTIONS = ['s-species', 'sub-orgs', 'sub-stories', 'sub-priority', 's-secas', 's-waters', 's-barriers', 's-drought', 's-ag'];
  const SOURCE_NAME = { 's-species': 'At-risk species (NatureServe/SWF)', 'sub-orgs': 'Organizations + agency offices', 'sub-stories': 'Success stories survey', 'sub-priority': 'Partner priority layers', 's-secas': 'SECAS Blueprint', 's-waters': 'EPA ATTAINS', 's-barriers': 'SARP barrier inventory', 's-drought': 'U.S. Drought Monitor' };
  const SLIDE_PARTS = { 's-partners': ['sub-orgs', 'sub-stories', 'sub-priority'] };
  const partsOf = (slideId) => SLIDE_PARTS[slideId] || [slideId];
  const sectionStatus = {}, sectionRetry = {};
  function setStatus(id, status, message, retry) {
    sectionStatus[id] = status; if (retry) sectionRetry[id] = retry;
    const sec = $('#' + id); const old = sec && sec.querySelector('.section-error'); if (old && status !== 'error') old.remove();
    if (status === 'error' && sec) {
      const card = old || document.createElement('div'); card.className = 'section-error';
      card.innerHTML = `<div class="msg"><b>${esc(SOURCE_NAME[id] || 'This data source')} didn't respond</b><span>${esc(message || 'The request failed.')} The rest of the report is unaffected. You can retry now or come back later — the "About this data" note explains the source.</span></div><button class="pill sm rojo" type="button">Retry</button>`;
      card.querySelector('button').onclick = () => { card.remove(); setStatus(id, 'loading'); (sectionRetry[id] || (() => {}))(); };
      if (!old) sec.querySelector('.section-head').after(card);
    }
    const done = LIVE_SECTIONS.filter(k => sectionStatus[k] === 'done').length, failed = LIVE_SECTIONS.filter(k => sectionStatus[k] === 'error'), total = LIVE_SECTIONS.length;
    const p = $('#progress'); if (p) {
      const finished = done + failed.length;
      p.hidden = false; p.classList.toggle('done', finished === total);
      $('#progress-fill').style.width = `${Math.round(finished / total * 100)}%`;
      $('#progress-text').textContent = finished === total ? (failed.length ? `${done} of ${total} sections loaded · ${failed.length} failed` : `All ${total} sections loaded`) : `Loading sections… ${finished} of ${total}`;
      if (finished === total && !failed.length) setTimeout(() => { if (LIVE_SECTIONS.every(k => sectionStatus[k] === 'done')) p.hidden = true; }, 4000);
    }
    updateBanner();
  }
  /** The banner only appears on a slide whose own source failed. */
  function updateBanner() {
    const b = $('#svc-banner'); if (!b) return;
    const here = partsOf(SLIDES[slide]).filter(k => sectionStatus[k] === 'error');
    b.hidden = !here.length;
    if (here.length) { const others = LIVE_SECTIONS.filter(k => !here.includes(k) && sectionStatus[k] === 'error').length; $('#svc-banner-text').textContent = `${here.map(k => SOURCE_NAME[k]).join(' and ')} didn't respond, so this section is incomplete.${others ? ` ${others} other section${others > 1 ? 's' : ''} also failed.` : ''}`; }
  }
  function resetStatuses() { LIVE_SECTIONS.forEach(k => { sectionStatus[k] = 'loading'; }); $$('.section-error').forEach(e => e.remove()); const p = $('#progress'); if (p) { p.hidden = false; p.classList.remove('done'); $('#progress-fill').style.width = '0%'; $('#progress-text').textContent = 'Loading sections… 0 of ' + LIVE_SECTIONS.length; } $('#svc-banner').hidden = true; }
  $('#svc-retry').onclick = () => { partsOf(SLIDES[slide]).filter(k => sectionStatus[k] === 'error').forEach(k => { const sec = $('#' + k); const card = sec && sec.querySelector('.section-error'); if (card) card.remove(); setStatus(k, 'loading'); (sectionRetry[k] || (() => {}))(); }); };
  // executive summary cards on slide 00
  const setSummary = (id, v) => { const el = $('#' + id); if (el) { if (/<\w/.test(String(v))) el.innerHTML = v; else el.textContent = v; } };
  const andList = (a) => (a.length < 2 ? (a[0] || '') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`);
  /** Mini graphic for a preview tile: proportional segments [[share, colour], …] that echo the page's own bar or ramp. */
  const pvBar = (id, segs) => setSummary(id, segs.length ? `<span class="pv-seg">${segs.filter(([v]) => v > 0).map(([v, c, o]) => `<i style="flex:${v.toFixed(4)} 1 0;background:${c}${o != null ? `;opacity:${o}` : ''}"></i>`).join('')}</span>` : '');
  /** "About this area": two or three plain-language sentences built from whatever sections have loaded so far. */
  function updateAreaSummary() {
    const el = $('#area-summary'); if (!el) return;
    const r = state.report; if (!r) { el.textContent = 'Building a summary of your area…'; return; }
    const states = typeof ag !== 'undefined' && ag && ag.rows ? [...new Set(ag.rows.map(x => x.state).filter(Boolean))] : [];
    const out = [`Your area covers <b>${fmt(r.acres)} acres</b> across ${r.watersheds.length} HUC-8 watershed${r.watersheds.length === 1 ? '' : 's'}${states.length ? ` in ${andList(states.map(ab => Object.keys(STATE_ABBR).find(n => STATE_ABBR[n] === ab) || ab))}` : ''}.`];
    let s2 = `It is home to <b>${fmt(r.species.length)} at-risk aquatic species</b>${r.rsgcnCount ? `, ${fmt(r.rsgcnCount)} of them also SE RSGCN` : ''}`;
    if (typeof landcover !== 'undefined' && landcover && landcover.total) {
      const top = NLCD_GROUPS.filter(([g]) => landcover.acres[g]).sort((a, b) => landcover.acres[b[0]] - landcover.acres[a[0]]).slice(0, 2);
      if (top.length) s2 += `, and the land is mostly ${andList(top.map(([g, name]) => `${name.toLowerCase()} (${lcPct(g, landcover)}%)`))}`;
    }
    out.push(s2 + '.');
    const c = [];
    if (typeof waters !== 'undefined' && waters && waters.impairedMiles) c.push(`${fmt(waters.impairedMiles)} impaired stream miles`);
    if (typeof barriers !== 'undefined' && barriers && barriers.damCount) c.push(`${fmt(barriers.damCount)} dams`);
    if (typeof drought !== 'undefined' && drought && drought.acresTotal) { const pd = Math.round(drought.cumAcres[1] / drought.acresTotal * 100); if (pd) c.push(`${pd}% of the area in drought`); }
    if (c.length) out.push(`Key constraints: ${andList(c)}.`);
    el.innerHTML = out.join(' ');
  }

  // ------------------------------------------------------------------
  // Slide deck: one report section per slide, arrows / keyboard / nav pills to move
  // ------------------------------------------------------------------
  const SLIDES = ['s-area', 's-species', 's-partners', 's-secas', 's-waters', 's-barriers', 's-drought', 's-ag'];
  const SLIDE_TITLE = { 's-area': 'Reporting area', 's-species': 'At-risk species', 's-partners': 'Partnership opportunities', 's-secas': 'SECAS Blueprint', 's-waters': 'Impaired waterways', 's-barriers': 'Dams + road crossings', 's-drought': 'Drought', 's-ag': 'Agriculture' };
  let slide = 0;
  function showSlide(i, { scroll = true, to = null } = {}) {
    slide = Math.max(0, Math.min(SLIDES.length - 1, i));
    SLIDES.forEach((id, k) => $('#' + id).classList.toggle('active', k === slide));
    const id = SLIDES[slide];
    $('#report').classList.toggle('last', slide === SLIDES.length - 1);
    $('#deck-prev').disabled = slide === 0; $('#deck-next').disabled = slide === SLIDES.length - 1;
    $('#deck-counter').textContent = `${String(slide + 1).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')} · ${SLIDE_TITLE[id]}`;
    syncPartNav(id === 's-partners' ? activeSub : id);
    // Leaflet maps on this slide were laid out off-screen; make sure they know their size and refit
    $$('#' + id + ' .map').forEach(el => { const m = maps[el.id]; if (m) { m.invalidateSize(); if (m._swFit) m._swFit(); } });
    if (typeof updateBanner === 'function') updateBanner();
    if (scroll) jumpTop(to);
  }
  /** Land at the top of the slide, immediately and again after the maps re-layout — with the page's smooth
   *  scrolling switched off for the jump so browsers that animate (or clamp mid-animation) can't leave the reader mid-slide. */
  function jumpTop(to = null) {
    const root = document.documentElement; const prev = root.style.scrollBehavior; root.style.scrollBehavior = 'auto';
    const go = () => { if (to) { window.scrollTo(0, Math.max(0, to.getBoundingClientRect().top + window.scrollY - navOffset())); return; } window.scrollTo(0, 0); document.body.scrollTop = 0; root.scrollTop = 0; };
    go(); requestAnimationFrame(go); setTimeout(() => { go(); root.style.scrollBehavior = prev; }, 120);
  }
  $('#deck-prev').onclick = () => showSlide(slide - 1);
  $('#deck-next').onclick = () => showSlide(slide + 1);
  /** Jump to a section or 02 subsection id: switch slides, then (for a subsection) land on it. Returns false for unknown ids. */
  function goTo(target) {
    const el = $('#' + target); const sec = el && el.closest('.section');
    const k = SLIDES.indexOf(sec ? sec.id : target); if (k < 0) return false;
    const sub = !!(el && sec && el !== sec);
    if (sub) activeSub = target;
    showSlide(k, { scroll: true, to: sub ? el : null }); // one landing target for every jump, so nothing double-scrolls
    return true;
  }
  // "In this report" rows and any in-page section link jump to slides instead of scrolling
  $('#report').addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#s-"], a[href^="#sub-"]'); if (!link) return;
    if (goTo(link.getAttribute('href').slice(1))) e.preventDefault();
  });

  // ------------------------------------------------------------------
  // Part cards nav (Claude Design "Part Cards Nav", option 3a): the three parts of the report as cards; the active
  // part widens and shows its section pills, the others collapse to a title + count. Overview (00) is a compact card.
  // ------------------------------------------------------------------
  const PARTS = [
    { n: 0, title: 'Overview of Reporting Area', sections: [{ id: 's-area', label: 'Reporting area' }] },
    { n: 1, title: 'Conservation Context', sections: [{ id: 's-species', label: 'At-Risk Aquatic Species' }, { id: 's-barriers', label: 'Dams + Stream Crossings' }, { id: 's-waters', label: 'Impaired Waterways' }, { id: 's-secas', label: 'SECAS Blueprint' }] },
    { n: 2, title: 'Partner Opportunity', sections: [{ id: 'sub-orgs', label: 'Organizations' }, { id: 'sub-stories', label: 'Success Stories' }, { id: 'sub-priority', label: 'Priority Layers' }] },
    { n: 3, title: 'Landscape Context', sections: [{ id: 's-ag', label: '2022 Agriculture Census' }, { id: 's-drought', label: 'Drought' }] },
  ];
  let activeSub = 'sub-orgs'; // which 02 subsection the nav highlights while the partner slide is open
  const partOf = (id) => PARTS.find(p => p.sections.some(x => x.id === id)) || PARTS[0];
  /** Space to leave above a jump target: the header and nav scroll with the page, so only a small margin. */
  const navOffset = () => 20;
  function renderPartNav() {
    const nav = $('#part-nav'); if (!nav) return;
    nav.innerHTML = PARTS.map(p => `
      <div class="pc-card" role="button" tabindex="0" data-part="${p.n}" aria-expanded="false">
        <span class="pc-eyebrow">${p.n ? `Part ${p.n}` : '00'}</span>
        <span class="pc-title">${esc(p.title)}</span>
        <div class="pc-body">${p.n ? `<span class="pc-count">${p.sections.length} sections</span><div class="pc-subs">${p.sections.map(x => `<a class="pc-sub" href="#${x.id}" aria-current="false">${esc(x.label)}</a>`).join('')}</div>` : ''}</div>
      </div>`).join('');
    nav.addEventListener('click', (e) => {
      const sub = e.target.closest('.pc-sub'); const card = e.target.closest('.pc-card'); if (!card) return;
      e.preventDefault(); e.stopPropagation();
      const p = PARTS[+card.dataset.part];
      if (sub) { goTo(sub.getAttribute('href').slice(1)); return; }           // a section pill changes the page
      if (p.n === 0) { goTo('s-area'); return; }                              // Overview is a single section
      $$('.pc-card', nav).forEach(c => c.setAttribute('aria-expanded', String(c === card))); // a category card only opens to show its pills
    });
    nav.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('pc-card')) { e.preventDefault(); e.target.click(); } });
  }
  /** Highlight the part + section for `id` (a section or 02 subsection id) — runs on every page change, so the open card follows the page. */
  let navPart = -1; // part whose card the nav last opened on its own; a card the reader opened stays open until the part changes
  function syncPartNav(id) {
    const nav = $('#part-nav'); if (!nav) return;
    const p = partOf(id);
    if (p.n !== navPart) { navPart = p.n; $$('.pc-card', nav).forEach(c => c.setAttribute('aria-expanded', String(+c.dataset.part === p.n))); }
    $$('.pc-sub', nav).forEach(a => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + id)));
    navFade();
  }
  renderPartNav();
  // while the partner slide is open, the highlighted subsection follows the scroll position
  { let t = 0; window.addEventListener('scroll', () => { if (t) return; t = requestAnimationFrame(() => { t = 0;
    if ($('#report').hidden || SLIDES[slide] !== 's-partners') return;
    const line = navOffset() + 40; let best = 'sub-orgs';
    ['sub-orgs', 'sub-stories', 'sub-priority'].forEach(k => { const el = $('#' + k); if (el && el.getBoundingClientRect().top <= line) best = k; });
    if (best !== activeSub) { activeSub = best; syncPartNav(best); } }); }, { passive: true }); }
  window.addEventListener('keydown', (e) => {
    if ($('#report').hidden || !viewer.hidden) return;
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement?.tagName)) return;
    if (e.key === 'ArrowRight') { showSlide(slide + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { showSlide(slide - 1); e.preventDefault(); }
  });

  // ------------------------------------------------------------------
  // Filter bars (one per table). Filters drive tables + maps; section totals stay as the area summary.
  // ------------------------------------------------------------------
  const isOn = (el) => (el.tagName === 'INPUT' ? !!el.value.trim() : el.value !== (el.dataset.default || 'all'));
  function readFilters(root) { const o = {}; $$('[data-filter]', $(root)).forEach(el => { o[el.dataset.filter] = el.tagName === 'INPUT' ? el.value.trim() : el.value; }); return o; }
  function filtersActive(root) { return $$('[data-filter]', $(root)).some(isOn); }
  function resetFilters(root) { const r = $(root); if (!r) return; $$('[data-filter]', r).forEach(el => { el.value = el.tagName === 'INPUT' ? '' : 'all'; el.classList.remove('on'); }); const cl = r.querySelector('.clear'); if (cl) cl.hidden = true; }
  function wireFilters(root, onChange) {
    const r = $(root); if (!r) return;
    const cl = r.querySelector('.clear'); let t;
    const fire = () => { clearTimeout(t); t = setTimeout(() => { $$('[data-filter]', r).forEach(el => el.classList.toggle('on', isOn(el))); if (cl) cl.hidden = !filtersActive(root); onChange(); }, 0); };
    r.addEventListener('input', (e) => { if (e.target.matches('[data-filter]')) fire(); });
    r.addEventListener('change', (e) => { if (e.target.matches('[data-filter]')) fire(); });
    if (cl) cl.onclick = () => { resetFilters(root); const sc = r.querySelector('[data-filter="scope"]'); if (sc) sc.value = sc.dataset.default || sc.options[0].value; onChange(); };
  }
  function setSelectOptions(sel, allLabel, options) { const el = $(sel); if (!el) return; el.innerHTML = `<option value="all">${esc(allLabel)}</option>` + options.map(o => `<option value="${esc(o.v)}">${esc(o.label)}</option>`).join(''); }
  const csvLabel = (sel, n, active) => { const b = $(sel); if (b) b.innerHTML = `<img src="assets/icon-download.png" alt="">Download ${active ? 'filtered' : 'full'} table (CSV) · ${fmt(n)} row${n === 1 ? '' : 's'}`; };
  const previewLine = (shown, n, total, what, active) => exportAll
    ? (active ? `All ${fmt(n)} ${what} matching your filters (of ${fmt(total)})` : `All ${fmt(n)} ${what}`)
    : active
    ? (n ? `Showing ${shown < n ? `first ${shown} of ` : ''}${fmt(n)} ${what} matching your filters (of ${fmt(total)})` : `No ${what} match your filters (of ${fmt(total)})`)
    : shown < n ? `Showing first ${shown} of ${fmt(n)} ${what} <span class="print-only">· the complete table is available as a CSV download in the online report</span>`
    : n === 1 ? `Showing 1 result · ${what}` : n ? `Showing all ${n} ${what}` : `No ${what} inside this boundary`;
  const snapLater = (m, well) => { if (!m) return; clearTimeout(m._snapT); m._snapT = setTimeout(() => snapshotMap(m, well), 250); };

  // ------------------------------------------------------------------
  // "About this data": hover popovers on screen, one appendix page in print
  // ------------------------------------------------------------------
  function setupAboutPopovers() {
    $$('#report .about').forEach((box, i) => {
      if (box.closest('.about-wrap') || box.closest('#appendix')) return;
      const wrap = document.createElement('div'); wrap.className = 'about-wrap';
      const btn = document.createElement('button'); btn.className = 'pill sm about-btn'; btn.type = 'button';
      btn.textContent = 'About this data'; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', box.id || (box.id = `about-${i}`));
      btn.onclick = () => { const open = wrap.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open)); }; // touch / keyboard
      box.before(wrap); wrap.append(btn, box);
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.about-wrap')) $$('.about-wrap.open').forEach(w => { w.classList.remove('open'); w.querySelector('.about-btn').setAttribute('aria-expanded', 'false'); }); });
  }
  /** Copy every section's about-text into the print appendix (current text, so live notes are included). */
  /** Edge fades on the section nav when it overflows (it scrolls horizontally, but nothing said so). */
  function navFade() {
    const nav = $('.subnav'); if (!nav) return;
    const more = nav.scrollWidth - nav.clientWidth > 4;
    nav.classList.toggle('fade-r', more && nav.scrollLeft < nav.scrollWidth - nav.clientWidth - 4);
    nav.classList.toggle('fade-l', more && nav.scrollLeft > 4);
  }
  { const nav = $('.subnav'); if (nav) { nav.addEventListener('scroll', navFade, { passive: true }); window.addEventListener('resize', navFade); setTimeout(navFade, 300); } }
  function buildAppendix() {
    const body = $('#appendix-body'); if (!body) return;
    body.innerHTML = '';
    $$('#report .about-wrap .about').forEach(box => {
      const sec = box.closest('.subsection, .section'); const title = sec ? sec.querySelector('.section-head .title, h1')?.textContent.trim() : '';
      const item = document.createElement('div'); item.className = 'apx-item';
      item.innerHTML = `<h3>${esc(title || 'Report')}</h3>` + box.innerHTML;
      body.appendChild(item);
    });
  }
  // (not rebuilt inside beforeprint: mutating the DOM there crashes Chrome's print pipeline; it is rebuilt whenever a note changes)

  // ------------------------------------------------------------------
  // Source currency: each section states when its layer was last edited (ArcGIS editingInfo)
  // ------------------------------------------------------------------
  const sourceDateCache = new Map();
  async function sourceDate(base) {
    if (!sourceDateCache.has(base)) sourceDateCache.set(base, fetch(`${base}?f=json`).then(r => r.json()).then(j => (j.editingInfo && j.editingInfo.lastEditDate) ? new Date(j.editingInfo.lastEditDate) : null).catch(() => null));
    return sourceDateCache.get(base);
  }
  const fmtDate = (d) => d.toLocaleDateString('en-US', { dateStyle: 'medium' });
  /** Append "· source updated <date>" to a note line and a method paragraph (so the appendix carries it too). */
  async function stampSource(noteSel, methodSel, bases, label) {
    const dates = (await Promise.all([].concat(bases).map(sourceDate))).filter(Boolean);
    const d = dates.length ? new Date(Math.max(...dates.map(x => x.getTime()))) : null;
    const text = d ? `${label} updated ${fmtDate(d)}` : `${label} · update date not published`;
    const n = $(noteSel); if (n && !n.dataset.stamped) { n.dataset.stamped = '1'; n.textContent = `${n.textContent} · ${text}`; }
    const m = $(methodSel); if (m && !m.dataset.stamped) { m.dataset.stamped = '1'; m.textContent = `${m.textContent} ${text}.`; buildAppendixSoon(); }
  }

  // ------------------------------------------------------------------
  // Report rendering
  // ------------------------------------------------------------------
  function renderReport() {
    const r = state.report;
    const who = [$('#f-name').value, $('#f-org').value].filter(Boolean).join(' · ');
    $('#generated-on').textContent = r.generatedOn;
    $('#generated-on-2').textContent = r.generatedOn;
    $('.print-date').textContent = r.generatedOn;
    $('#generated-for').textContent = who ? `· for ${who}` : '';
    updateCitation();
    $('#st-acres').textContent = fmt(r.acres);
    $('#st-species').textContent = fmt(r.species.length);
    $('#st-huc').textContent = fmt(r.watersheds.length);
    updateAreaSummary();
    loadSwfSpecies().then(() => { if (state.report !== r || !swfBreaks) return; const have = new Set(r.watersheds.map(w => swfClass(w.count))); pvBar('pv-viz-species', RAMP.map((c, k) => [1, c, have.has(k) ? 1 : .28])); }).catch(() => {}); // the 01 map ramp, with the classes your watersheds fall in
    $('#sp-total').textContent = fmt(r.species.length);
    $('#sp-huc').textContent = String(r.watersheds.length);
    $('#sp-rsgcn').textContent = fmt(r.rsgcnCount);
    setRegion('species', ''); loadSwfSpecies().then(() => { if (state.report === r) setRegion('species', speciesRegionHtml()); }).catch(() => {});
    $('#ramp').innerHTML = RAMP.map(c => `<div style="background:${c}"></div>`).join('');
    $('#ramp-ticks').innerHTML = swfBreaks
      ? swfTicks().map(t => `<span>${t}</span>`).join('') // region-wide classes
      : r.watersheds.length ? r.breaks.map(b => `<span>${Math.round(b)}</span>`).join('') + `<span>${r.max}</span>` : RAMP.map(() => '<span>—</span>').join('');
    const notes = [r.exact
      ? `Live query · species are those recorded for HUC-8 ${r.watersheds[0] ? `${r.watersheds[0].name} (${r.watersheds[0].huc8})` : String(state.boundaryCode).slice(0, 8)} only (${state.boundarySource}); neighbouring watersheds that merely share a border are not included.`
      : `Live query · ${r.watersheds.length} HUC-8 watershed${r.watersheds.length === 1 ? '' : 's'} overlap the boundary (${state.boundarySource})${r.droppedTouching ? `; ${r.droppedTouching} adjacent watershed${r.droppedTouching === 1 ? '' : 's'} that only touch${r.droppedTouching === 1 ? 'es' : ''} the boundary ${r.droppedTouching === 1 ? 'was' : 'were'} excluded` : ''}. Totals are unique species across all of them combined — a species found in several watersheds is counted once.`];
    if (r.truncatedCount) notes.push(`Heads-up: the full species-list table was unavailable, so ${r.truncatedCount} watershed list${r.truncatedCount > 1 ? 's' : ''} came from the polygon layer's 254-character fields and ${r.truncatedCount > 1 ? 'are' : 'is'} cut off; totals are a lower bound.`);
    $('#sp-source-note').textContent = notes.join(' ');
    $('#sp-source-note').dataset.stamped = ''; stampSource('#sp-source-note', null, [SERVICE, LISTS], 'Species layers');
    resetFilters('#sp-filters');
    renderSpeciesRows();
    renderPlaceholders();
    buildAppendix();
  }

  /** "How to cite" text for the appendix card (also copied by its button). */
  function updateCitation() {
    if (!state.boundary) return; const acresNow = turf.area(state.boundary) / SQM_PER_ACRE;
    const d = new Date(); const long = d.toLocaleDateString('en-US', { dateStyle: 'long' });
    const who = [$('#f-name').value, $('#f-org').value].filter(Boolean).join(', ');
    const text = `Working Lands for Wildlife – Southern Waters. ${d.getFullYear()}. Conservation report for ${state.boundarySource} (${fmt(acresNow)} acres)${who ? `, prepared for ${who}` : ''}. Generated ${long} with the Southern Waters Report Generator; underlying data retrieved the same day from the sources listed in the appendix. Landscape Partnership, https://landscapepartnership.org/`;
    $('#cite-text').textContent = text;
    $('#btn-cite').onclick = () => { (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(() => toast('Citation copied')).catch(() => toast('Copy failed — select the text to copy it')); };
  }
  function speciesCmp() {
    return {
      name: (a, b) => a.name.localeCompare(b.name),
      rsgcn: (a, b) => (a.rsgcn === b.rsgcn ? a.name.localeCompare(b.name) : (a.rsgcn ? -1 : 1)),
      huc: (a, b) => (b.hucs.length - a.hucs.length) || a.name.localeCompare(b.name),
      region: (a, b) => ((regionHucs(b.name) || 0) - (regionHucs(a.name) || 0)) || a.name.localeCompare(b.name),
    }[state.sort] || ((a, b) => a.name.localeCompare(b.name));
  }
  function allSpeciesSorted() {
    const r = state.report; if (!r) return [];
    const cmp = speciesCmp();
    return r.species.slice().sort((a, b) => cmp(a, b) * state.dir);
  }
  function speciesRows() {
    const f = readFilters('#sp-filters'); const q = (f.q || '').toLowerCase(); const total = state.report.watersheds.length;
    return allSpeciesSorted().filter(s => (!q || s.name.toLowerCase().includes(q))
      && (f.rsgcn === 'all' || (f.rsgcn === 'yes') === s.rsgcn)
      && (!f.hucs || f.hucs === 'all' || (f.hucs === '2' ? s.hucs.length >= 2 : s.hucs.length === total)));
  }

  function renderSpeciesRows() {
    const r = state.report; const rows = speciesRows();
    const total = r.watersheds.length;
    const shown = shownRows(rows, 'sp'), active = filtersActive('#sp-filters');
    $('#sp-preview').innerHTML = previewLine(shown.length, rows.length, r.species.length, 'species', active) + ' <span class="sort-hint" data-noprint>· click a column heading to sort</span>';
    csvLabel('#btn-csv', rows.length, active);
    // sortable column headers (replace the old sort pills); click toggles direction on the active column
    // help text may carry <b>/<i> emphasis; the label is plain text
    const sortTh = (k, label, help) => { const on = state.sort === k, desc = (k === 'huc' || k === 'region' || k === 'rsgcn') ? state.dir === 1 : state.dir === -1; return `<th scope="col" class="sortable${on ? ' on' : ''}" data-sort="${k}" aria-sort="${on ? (desc ? 'descending' : 'ascending') : 'none'}" title="Click to sort by ${esc(label.toLowerCase())}"><span class="sort-btn" aria-hidden="true">${esc(label)} <span class="arrow">${on ? (desc ? '▼' : '▲') : '⇅'}</span></span><span class="sr-only">${esc(label)}</span>${helpBtn(help)}</th>`; };
    const regionCell = (s) => { const n = regionHucs(s.name); return n == null ? '<span class="mono" style="opacity:.6">…</span>' : n === 1 ? '<b style="color:var(--rojo)">1 · only here</b>' : `${n} of ${REGION_HUC8S}`; };
    $('#sp-rows').innerHTML = `<div class="tbl-wrap"><table class="tbl species-tbl">
      <thead><tr>
        ${sortTh('name', 'Species', 'Common names of at-risk aquatic species')}
        ${sortTh('huc', 'Your Area Occurrence', `<b>Your area</b> covers <b>${total} HUC-8 watershed${total === 1 ? '' : 's'}</b>. This column shows how many watersheds <i>in your selection area</i> this species appears in.`)}
        ${sortTh('region', 'Region-Wide Occurrence', `There are <b>${REGION_HUC8S} HUC-8 watersheds</b> in the <b>Southern Waters Program Area</b>. This column shows how many watersheds <i>across the whole Program Area</i> this species appears in.`)}
        ${sortTh('rsgcn', 'SE RSGCN', 'Southeast Regional Species of Greatest Conservation Need. <i>Note this data does not contain all SE RSGCN species.</i> This data shows all aquatic species that are listed as S1, S2, S3, G1, G2, G3, and here we are indicating which of those are also SE RSGCN.')}
      </tr></thead>
      <tbody>${shown.length ? shown.map(s => `<tr>
        <th scope="row">${esc(s.name)}</th>
        <td class="mono">${s.hucs.length} of ${total}</td>
        <td class="mono">${regionCell(s)}</td>
        <td><span class="chip ${s.rsgcn ? 'yes' : 'no'}">${s.rsgcn ? 'Yes' : 'No'}</span></td>
      </tr>`).join('') : `<tr><td colspan="4">${total ? 'No species match those filters.' : 'No at-risk aquatic species records intersect this boundary. Try a larger area, or an area inside the Southeast.'}</td></tr>`}</tbody>
    </table></div>`;
    $$('#sp-rows th[data-sort]').forEach(th => { th.onclick = () => { const k = th.dataset.sort; state.dir = state.sort === k ? -state.dir : 1; state.sort = k; renderSpeciesRows(); }; th.tabIndex = 0; th.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); th.onclick(); } }; });
    moreButton('#sp-rows', 'sp', rows.length, renderSpeciesRows);
  }

  wireFilters('#sp-filters', renderSpeciesRows);
  $$('#sp-sort .pill').forEach(b => b.onclick = () => {
    if (b.disabled) return;
    const k = b.dataset.sort;
    state.dir = state.sort === k ? -state.dir : 1; state.sort = k;
    $$('#sp-sort .pill').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    renderSpeciesRows();
  });

  $('#btn-csv').onclick = () => {
    const r = state.report; if (!r) return;
    const rows = speciesRows(); const total = r.watersheds.length;
    downloadCsv(filtersActive('#sp-filters') ? 'at-risk-species-filtered.csv' : 'at-risk-species.csv', ['Species', 'SE RSGCN (Southeast Regional Species of Greatest Conservation Need)', 'Your area occurrence (watersheds)', 'Of watersheds in your area', 'HUC8s', 'Region-wide occurrence (of 669 HUC-8s)'],
      rows.map(s => [s.name, s.rsgcn ? 'Yes' : 'No', s.hucs.length, total, s.hucs.join(' '), regionHucs(s.name) ?? '']));
  };
  $('#btn-map-png').onclick = () => {
    const url = snapshots['species-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'at-risk-species-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  // Download: ask the local server to render this exact report to PDF with headless Chrome.
  // Falls back to the browser's print dialog if the server can't (static hosting, no Chrome).
  let pdfBusy = false;
  async function downloadPdf(mode = 'preview') {
    if (!state.report || pdfBusy) return;
    const btn = $('#btn-print'); pdfBusy = true;
    const label = btn.innerHTML; btn.innerHTML = '<span class="spinner" style="border-top-color:var(--cream)"></span>Preparing PDF…'; btn.disabled = true;
    toast('Rendering your report to PDF — this takes about 20–40 seconds.', 6000);
    try {
      const r = await fetch('/pdf', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ boundary: state.boundary, source: state.boundarySource, kind: state.boundaryKind, code: state.boundaryCode, exportAll: mode === 'full',
          form: { name: $('#f-name').value, email: $('#f-email').value, org: $('#f-org').value, project: $('#f-project').value } }) });
      if (!r.ok) throw new Error(`${r.status} ${await r.text().catch(() => '')}`.trim());
      const blob = await r.blob();
      const cd = r.headers.get('Content-Disposition') || ''; const m = /filename="([^"]+)"/.exec(cd);
      const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: m ? m[1] : `southern-waters-report-${mode === 'full' ? 'all-data' : 'preview'}.pdf` });
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
      toast('PDF saved to your downloads.');
    } catch (err) {
      console.warn('PDF endpoint unavailable, falling back to the print dialog', err);
      toast('Direct PDF download isn\'t available here — use "Save as PDF" in the print dialog instead.', 6000);
      setTimeout(() => window.print(), 400);
    } finally { btn.innerHTML = label; btn.disabled = false; pdfBusy = false; }
  }
  // Is the PDF renderer available? (local server.py, or a deployed renderer answering HEAD /pdf)
  let pdfServer = null;
  fetch('/pdf', { method: 'HEAD' }).then(r => { pdfServer = r.ok; }).catch(() => { pdfServer = false; }).finally(() => {
    if (pdfServer === false) {
      $('#dl-menu .dl-options').innerHTML = '<button type="button" role="menuitem" data-mode="print"><b>Print / save as PDF</b><span>Opens your browser\'s print dialog — choose "Save as PDF". Tables print the first 25 rows; download CSVs for full data.</span></button>';
      $('#dl-menu .dl-options button').onclick = (e) => { e.stopPropagation(); $('#dl-menu .dl-options').hidden = true; window.print(); };
      $('#btn-print').innerHTML = '<img src="assets/icon-download.png" alt="">Print / save as PDF ▾';
    }
  });
  const dlOptions = $('#dl-menu .dl-options');
  $('#btn-print').onclick = (e) => { e.stopPropagation(); if (pdfBusy) return; dlOptions.hidden = !dlOptions.hidden; $('#btn-print').setAttribute('aria-expanded', String(!dlOptions.hidden)); };
  $$('#dl-menu .dl-options button').forEach(b => b.onclick = (e) => { e.stopPropagation(); dlOptions.hidden = true; $('#btn-print').setAttribute('aria-expanded', 'false'); downloadPdf(b.dataset.mode); });
  document.addEventListener('click', (e) => { if (!e.target.closest('#dl-menu')) { dlOptions.hidden = true; $('#btn-print').setAttribute('aria-expanded', 'false'); } });
  $('#btn-edit').onclick = () => { $('#report').hidden = true; $('#intake').hidden = false; window.scrollTo(0, 0); intakeMap.invalidateSize(); };

  // Placeholder rows / pins for the not-yet-connected sections.
  function renderPlaceholders() {
    const previewRow = (el, n, label) => {
      if (el.previousElementSibling && el.previousElementSibling.classList.contains('preview-row')) return;
      const row = document.createElement('div'); row.className = 'preview-row';
      row.innerHTML = `<div class="label">Showing first ${n} of ### ${esc(label)} <span class="print-only">· the complete table is available as a CSV download in the online report</span></div>
        <button class="pill sunset" disabled title="Placeholder — data not yet connected"><img src="assets/icon-download.png" alt="">Download full table (CSV)</button>`;
      el.before(row);
    };
    $$('[data-ph-rows]').forEach(el => {
      const cols = el.dataset.phCols.split('|'); const n = Number(el.dataset.phRows);
      previewRow(el, n, el.dataset.phLabel || 'records');
      el.innerHTML = Array.from({ length: n }, (_, i) => `<div class="trow ph">${cols.map((c, j) =>
        `<div><div class="col-label">${esc(c)}</div>${j === 1 || /\?$/.test(c) || c === 'Condition' ? '<span class="chip ph">###</span>' : `<div class="v${j ? ' plain' : ''}">${j ? '### ### ###' : `### ${i + 1}`}</div>`}</div>`).join('')}</div>`).join('');
    });
    $$('.ph-pins').forEach(el => {
      el.innerHTML = el.dataset.pins.split(' ').map((p, i) => {
        const [x, y] = p.split(',');
        return el.dataset.shape === 'pin'
          ? `<div style="position:absolute;left:${x}%;top:${y}%;width:26px;height:26px;margin:-26px 0 0 -13px;border-radius:999px 999px 2px 999px;transform:rotate(45deg);background:var(--rojo);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 7px rgba(46,30,18,.4)"><span style="transform:rotate(-45deg);color:var(--cream);font-size:11px;font-weight:600">${i + 1}</span></div>`
          : `<div style="position:absolute;left:${x}%;top:${y}%;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:999px;background:var(--rojo);border:3px solid var(--cream);box-shadow:0 2px 7px rgba(46,30,18,.4)"></div>`;
      }).join('');
    });
  }

  // ------------------------------------------------------------------
  // Report maps (Leaflet) — boundary (00) and species choropleth (01)
  // ------------------------------------------------------------------
  const maps = {};   // id -> L.Map

  function freshMap(id, opts = {}) {
    if (maps[id]) { maps[id].remove(); delete maps[id]; }
    const m = L.map(id, Object.assign({ zoomControl: false, fadeAnimation: false, zoomSnap: .1, attributionControl: true, scrollWheelZoom: false, dragging: false, doubleClickZoom: false, touchZoom: false, boxZoom: false, keyboard: false }, opts));
    m._swBase = tiles().addTo(m);
    maps[id] = m;
    if (window.ResizeObserver) { let raf = 0, last = ''; // refit when the box changes size (e.g. the Overview map stretching beside its panel)
      new ResizeObserver(([e]) => { const k = `${Math.round(e.contentRect.width)}x${Math.round(e.contentRect.height)}`; if (k === last || !e.contentRect.width) return; last = k;
        cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { if (maps[id] !== m) return; m.invalidateSize(); if (m._swFit) m._swFit(); }); }).observe(m.getContainer()); }
    return m;
  }

  function addBoundary(m) {
    return L.geoJSON(state.boundary, { style: boundaryStyle, interactive: false }).addTo(m);
  }

  function pinIcon(n) {
    return L.divIcon({ className: '', iconSize: [28, 28], iconAnchor: [14, 14], html: `<div style="width:28px;height:28px;border-radius:999px;background:${ROJO};border:3px solid ${CREAM};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 7px rgba(46,30,18,.4);color:${CREAM};font:600 13px Poppins,sans-serif">${n}</div>` });
  }

  /** Adds the HUC-8 choropleth + numbered pins; returns {layer, pins}. onPick(w) fires on click. */
  function addSpeciesLayers(m, onPick, { labels = false } = {}) {
    const r = state.report;
    const fc = { type: 'FeatureCollection', features: r.watersheds.map(w => Object.assign({}, w.feature, { properties: Object.assign({}, w.feature.properties, { _n: w.n }) })) };
    const byN = new Map(r.watersheds.map(w => [w.n, w]));
    const layer = L.geoJSON(fc, {
      style: f => { const w = byN.get(f.properties._n); return { color: CREAM, weight: 1.2, fillColor: RAMP[swfBreaks ? swfClass(w.count) : r.classOf(w.count)], fillOpacity: .78 }; }, // region-wide sextiles: a watershed keeps the colour it has on the landing map
      onEachFeature: (f, lyr) => {
        const w = byN.get(f.properties._n);
        lyr.bindTooltip(`<b>${esc(w.name)}</b><br>HUC ${w.huc8} · ${w.count} at-risk species`, { sticky: true, className: 'huc-tip' });
        lyr.on('click', () => onPick && onPick(w));
        lyr.on('mouseover', () => lyr.setStyle({ weight: 3, color: INK }));
        lyr.on('mouseout', () => layer.resetStyle(lyr));
      },
    }).addTo(m);
    const pins = L.layerGroup(r.watersheds.map(w => {
      const mk = L.marker([w.pin[1], w.pin[0]], { icon: pinIcon(w.n), title: w.name });
      mk.on('click', () => onPick && onPick(w));
      return mk;
    })).addTo(m);
    // label text sits on whichever side of the pin has more of the watershed (≈6 px per character of 10 px DM Mono)
    if (labels) r.watersheds.forEach(w => L.marker([w.pin[1], w.pin[0]], { icon: L.divIcon({ className: 'huc-label', html: esc(w.name), iconAnchor: [w.labelLeft ? Math.round(w.name.length * 6.1) + 16 : -16, 6] }), interactive: false }).addTo(m));
    return { layer, pins };
  }

  /** Every area map shares one framing: the whole reporting area, filling ~60% of the map (20% margin each side). */
  const AREA_PAD = .2;
  function fitArea(m, layer) {
    m._swFit = () => fitArea(m, layer); // re-run when a slide becomes visible
    const b = (layer && layer.getBounds ? layer : L.geoJSON(state.boundary)).getBounds();
    if (!b.isValid()) { m.setView(SE_CENTER, 6); return; }
    const sz = m.getSize();
    m.fitBounds(b, { padding: sz.x && sz.y ? L.point(Math.round(sz.x * AREA_PAD), Math.round(sz.y * AREA_PAD)) : L.point(30, 30) });
  }
  function fitTo(m, layers, pad = 24) {
    m._swFit = () => fitTo(m, layers, pad); // re-run when a slide becomes visible
    const b = L.latLngBounds([]);
    layers.forEach(l => l.getBounds && b.extend(l.getBounds()));
    if (b.isValid()) m.fitBounds(b, { padding: [pad, pad] });
    else m.setView(SE_CENTER, 6);
  }


  // ------------------------------------------------------------------
  // 00 · Land cover — NLCD 2021 via MRLC's WMS: one image of the area, clipped to the boundary, tallied by class colour
  // ------------------------------------------------------------------
  const NLCD_WMS = 'https://www.mrlc.gov/geoserver/mrlc_display/wms', NLCD_LAYER = 'NLCD_2021_Land_Cover_L48';
  const NLCD = [[11, 'Open water', [70, 107, 159], 'water'], [12, 'Perennial ice/snow', [209, 222, 250], 'other'], [21, 'Developed, open space', [222, 197, 197], 'developed'], [22, 'Developed, low intensity', [217, 146, 130], 'developed'], [23, 'Developed, medium intensity', [235, 0, 0], 'developed'], [24, 'Developed, high intensity', [171, 0, 0], 'developed'], [31, 'Barren land', [179, 172, 159], 'other'], [41, 'Deciduous forest', [104, 171, 99], 'forest'], [42, 'Evergreen forest', [28, 99, 48], 'forest'], [43, 'Mixed forest', [181, 197, 143], 'forest'], [52, 'Shrub/scrub', [204, 184, 121], 'shrub'], [71, 'Grassland/herbaceous', [223, 223, 194], 'shrub'], [81, 'Pasture/hay', [220, 217, 57], 'pasture'], [82, 'Cultivated crops', [171, 108, 40], 'crops'], [90, 'Woody wetlands', [184, 217, 235], 'wetland'], [95, 'Emergent herbaceous wetlands', [108, 159, 184], 'wetland']];
  const NLCD_GROUPS = [['forest', 'Forest', '#3B7A45'], ['crops', 'Cropland', '#AB6C28'], ['pasture', 'Pasture / hay', '#D6CB44'], ['developed', 'Developed', '#B5443A'], ['wetland', 'Wetlands', '#7FA8BE'], ['water', 'Open water', '#466B9F'], ['shrub', 'Shrub & grassland', '#CDBB7E'], ['other', 'Barren / other', '#B3AC9F']];
  let landcover = null, landcoverLayer = null;
  async function loadLandcover(boundary) {
    const bb = turf.bbox(boundary); const padX = (bb[2] - bb[0]) * .02, padY = (bb[3] - bb[1]) * .02;
    const x0 = bb[0] - padX, y0 = bb[1] - padY, x1 = bb[2] + padX, y1 = bb[3] + padY, midLat = (y0 + y1) / 2;
    const aspect = ((x1 - x0) * Math.cos(midLat * Math.PI / 180)) / (y1 - y0); let W = 1024, H = Math.round(W / aspect); if (H > 1024) { H = 1024; W = Math.round(H * aspect); }
    const url = `${NLCD_WMS}?service=WMS&request=GetMap&version=1.1.1&layers=${NLCD_LAYER}&styles=&srs=EPSG:4326&bbox=${x0},${y0},${x1},${y1}&width=${W}&height=${H}&format=image/png`;
    const bm = await retry(() => fetch(url).then(r => (r.ok ? r.blob() : Promise.reject(new Error(`NLCD ${r.status}`)))).then(b => createImageBitmap(b)));
    const c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d', { willReadFrequently: true }); ctx.drawImage(bm, 0, 0); bm.close && bm.close();
    const img = ctx.getImageData(0, 0, W, H), d = img.data;
    const m = document.createElement('canvas'); m.width = W; m.height = H; const mctx = m.getContext('2d', { willReadFrequently: true }); mctx.fillStyle = '#000'; mctx.beginPath();
    const polys = boundary.geometry.type === 'Polygon' ? [boundary.geometry.coordinates] : boundary.geometry.coordinates;
    polys.forEach(poly => poly.forEach(ring => { ring.forEach((pt, k) => { const px = (pt[0] - x0) / (x1 - x0) * W, py = (y1 - pt[1]) / (y1 - y0) * H; k ? mctx.lineTo(px, py) : mctx.moveTo(px, py); }); mctx.closePath(); })); mctx.fill('evenodd');
    const mask = mctx.getImageData(0, 0, W, H).data;
    const lut = new Map(); const nearest = (r, g, b) => { let best = null, bd = Infinity; NLCD.forEach(k => { const dr = r - k[2][0], dg = g - k[2][1], db = b - k[2][2]; const dist = dr * dr + dg * dg + db * db; if (dist < bd) { bd = dist; best = k; } }); return bd < 900 ? best : null; };
    const acres = {}, classAcres = {}; let total = 0, unknown = 0; const degW = (x1 - x0) / W, degH = (y1 - y0) / H;
    for (let y = 0; y < H; y++) {
      const lat = y1 - (y + .5) * degH; const cell = (degH * 111320) * (degW * 111320 * Math.cos(lat * Math.PI / 180)) / SQM_PER_ACRE;
      for (let x = 0; x < W; x++) {
        const j = y * W + x; if (mask[j * 4 + 3] < 128) { d[j * 4 + 3] = 0; continue; } // outside the boundary → transparent (the map fill)
        if (d[j * 4 + 3] < 128) { unknown += cell; continue; }
        const key = (d[j * 4] << 16) | (d[j * 4 + 1] << 8) | d[j * 4 + 2]; let k = lut.get(key); if (k === undefined) { k = nearest(d[j * 4], d[j * 4 + 1], d[j * 4 + 2]); lut.set(key, k); }
        if (!k) { unknown += cell; continue; }
        acres[k[3]] = (acres[k[3]] || 0) + cell; classAcres[k[0]] = (classAcres[k[0]] || 0) + cell; total += cell;
      }
    }
    ctx.putImageData(img, 0, 0);
    return { acres, classAcres, total, unknown, dataUrl: c.toDataURL('image/png'), bounds: [[y0, x0], [y1, x1]], res: Math.round(degW * 111320 * Math.cos(midLat * Math.PI / 180)) };
  }
  const lcPct = (g, lc) => (lc.total ? Math.round((lc.acres[g] || 0) / lc.total * 100) : 0);
  function renderLandcover() {
    const lc = landcover; const groups = NLCD_GROUPS.filter(([g]) => lc.acres[g]).sort((a, b) => (lc.acres[b[0]] || 0) - (lc.acres[a[0]] || 0));
    $('#lc-bar').innerHTML = groups.map(([g, name, col]) => `<div style="flex:${(lc.acres[g] / lc.total).toFixed(4)} 1 0;background:${col}" title="${esc(name)} · ${fmt(lc.acres[g])} acres · ${lcPct(g, lc)}%"></div>`).join('');
    $('#lc-legend').innerHTML = groups.map(([g, name, col]) => `<div><span class="sw-sq" style="background:${col};width:11px;height:11px"></span><b>${lcPct(g, lc)}%</b>${esc(name)}</div>`).join('');
    if (groups.length) { const [g, name] = groups[0]; setSummary('st-cover', `${lcPct(g, lc)}%`); setSummary('st-cover-label', `${name} · largest land cover`); }
    updateAreaSummary();
    $('#lc-note').textContent = `${fmt(lc.total)} acres classed · ~${lc.res} m pixels${lc.unknown > lc.total * .01 ? ` · ${fmt(lc.unknown)} acres unclassified` : ''}`;
    $('#lc-method').textContent = `This run: NLCD 2021 rendered at about ${lc.res} m for your area and clipped to the boundary — ${fmt(lc.total)} acres classed${lc.unknown ? `, ${fmt(lc.unknown)} acres without a class` : ''}. Top classes: ${Object.entries(lc.classAcres).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([code, a]) => `${NLCD.find(k => k[0] === Number(code))[1]} ${Math.round(a / lc.total * 100)}%`).join(', ')}.`;
    withRegion(rc => { const g = rc.nlcd; if (!g || !g.total) { setRegion('landcover', ''); return; } const top = ['forest', 'pasture', 'crops', 'developed', 'wetland'];
      setRegion('landcover', `Across the Southern Waters boundary land cover is ${top.map(k => `<b>${Math.round((g.acres[k] || 0) / g.total * 100)}%</b> ${NLCD_GROUPS.find(x => x[0] === k)[1].toLowerCase()}`).join(', ')}; your area: ${top.map(k => `${lcPct(k, lc)}% ${NLCD_GROUPS.find(x => x[0] === k)[1].toLowerCase()}`).join(', ')}.`); });
    buildAppendixSoon();
  }
  async function runLandcover(map) {
    landcover = null; if (landcoverLayer) { landcoverLayer.remove(); landcoverLayer = null; }
    $('#lc-note').textContent = 'Loading land cover…'; $('#lc-bar').innerHTML = ''; setRegion('landcover', '');
    $('#lc-legend').innerHTML = '<div class="lc-wait" role="status"><span class="spinner"></span>Land cover is a large dataset, give us a second to load. You can explore other parts of the app while you wait.</div>';
    try {
      landcover = await loadLandcover(state.boundary);
      if (maps['boundary-map'] !== map) return;
      landcoverLayer = L.imageOverlay(landcover.dataUrl, landcover.bounds, { opacity: map._swMode === 'sat' ? 0 : .85, interactive: false, className: 'lc-overlay' }).addTo(map); landcoverLayer.bringToBack();
      renderLandcover(); snapLater(map, 'boundary-well');
    } catch (err) { console.warn('land cover', err); $('#lc-note').textContent = `Land cover unavailable right now (${err.message})`; setSummary('st-cover', '—'); }
  }

  function initReportMaps() {
    // 00 · boundary
    const bm = freshMap('boundary-map');
    const b = addBoundary(bm);
    bm._swMode = 'lc';
    addModeSwitch(bm, (mode) => { bm._swMode = mode; setSatellite(bm, mode === 'sat', { front: [b] }); if (landcoverLayer && maps['boundary-map'] === bm) landcoverLayer.setOpacity(mode === 'sat' ? 0 : .85); snapLater(bm, 'boundary-well'); });
    fitArea(bm, b);
    runLandcover(bm); // fills the area with NLCD land cover once the image arrives
    // 00 · context: where the area sits in the Southern Waters boundary
    runContext(freshMap('context-map', { zoomSnap: .25 }));
    watchForSnapshot(bm, 'boundary-well'); // (01 species map is drawn by runSpecies once the roll-up exists)
    // 03 · SECAS Blueprint
    const cm = freshMap('secas-map');
    const b3 = addBoundary(cm);
    fitArea(cm, b3);
    watchForSnapshot(cm, 'secas-well');
    runBlueprint(cm);
    // 05 · dams + road crossings
    const xm = freshMap('barriers-map');
    const b4 = addBoundary(xm);
    fitArea(xm, b4);
    addBaseSwitch(xm, { well: 'barriers-well' });
    watchForSnapshot(xm, 'barriers-well');
    runBarriers(xm);
    // 04 · impaired waterways
    const wm = freshMap('waters-map');
    const b5 = addBoundary(wm);
    fitArea(wm, b5);
    addBaseSwitch(wm, { well: 'waters-well' });
    watchForSnapshot(wm, 'waters-well');
    runWaters(wm);
    // 02a · organizations
    const om = freshMap('orgs-map');
    const b6 = addBoundary(om);
    fitArea(om, b6);
    addBaseSwitch(om, { well: 'orgs-well' });
    watchForSnapshot(om, 'orgs-well');
    runOrgs(om);
    // 06 · drought
    const dm = freshMap('drought-map');
    const b7 = addBoundary(dm);
    fitArea(dm, b7);
    watchForSnapshot(dm, 'drought-well');
    runDrought(dm);
    // 02b · success stories
    const stm = freshMap('stories-map');
    const b8 = addBoundary(stm);
    fitArea(stm, b8);
    addBaseSwitch(stm, { well: 'stories-well' });
    watchForSnapshot(stm, 'stories-well');
    runStories(stm);
    // 02c · partner priority areas
    const pm = freshMap('priority-map');
    const b9 = addBoundary(pm);
    fitArea(pm, b9);
    addBaseSwitch(pm, { well: 'priority-well' });
    watchForSnapshot(pm, 'priority-well');
    runPriority(pm);
    // 07 · agriculture
    const am = freshMap('ag-map');
    const bAg = addBoundary(am);
    fitArea(am, bAg);
    watchForSnapshot(am, 'ag-well');
    runAg(am);
    // Clicking the small map opens the explorer (explore buttons too)
    $$('.explore').forEach(btn => btn.onclick = (e) => {
      e.stopPropagation();
      const k = btn.dataset.viewer;
      if (k === 'ph') openPlaceholderViewer(btn.dataset.title, btn.dataset.eyebrow, btn.closest('.mapwell').querySelector('.static').style.backgroundImage);
      else openViewer(k);
    });
  }

  /** Print + download: Chrome drops Leaflet's 3D-transformed tile layers when printing, so each
   *  live map keeps a PNG snapshot (tiles + overlay SVG + pins) refreshed whenever tiles finish
   *  loading. Print CSS shows the snapshot instead of the Leaflet DOM. */
  const snapshots = {};
  function snapshotMap(m, wellId) {
    const c = m.getContainer(), cr = c.getBoundingClientRect();
    if (!cr.width || !cr.height) return;
    const dpr = 2, canvas = document.createElement('canvas');
    canvas.width = Math.round(cr.width * dpr); canvas.height = Math.round(cr.height * dpr);
    const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
    ctx.fillStyle = '#E6E0C8'; ctx.fillRect(0, 0, cr.width, cr.height);
    const rel = (el) => { const r = el.getBoundingClientRect(); return [r.left - cr.left, r.top - cr.top, r.width, r.height]; };
    // tiles, with the same tint filter the screen uses
    const pane = c.querySelector('.leaflet-tile-pane');
    ctx.filter = pane ? getComputedStyle(pane).filter : 'none';
    let tainted = false;
    ['.leaflet-tile-pane', '.leaflet-shadow-pane'].forEach(sel => {
      const p = c.querySelector(sel); if (!p) return;
      ctx.globalAlpha = parseFloat(getComputedStyle(p).opacity) || 1;
      p.querySelectorAll('img.leaflet-tile-loaded').forEach(img => {
        const [x, y, w, h] = rel(img);
        try { ctx.drawImage(img, x, y, w, h); } catch { tainted = true; }
      });
    });
    ctx.filter = 'none'; ctx.globalAlpha = 1;
    replaySvg(c.querySelector('.leaflet-veil-pane svg')); // Leaflet names a custom pane leaflet-<name minus 'Pane'>-pane // satellite veil sits between the tiles and the data
    // image overlays (e.g. the Blueprint raster) — data-URL images, so never tainted
    c.querySelectorAll('.leaflet-overlay-pane img.leaflet-image-layer').forEach(img => {
      const [x, y, w, h] = rel(img); ctx.globalAlpha = parseFloat(img.style.opacity || 1);
      try { ctx.drawImage(img, x, y, w, h); } catch { /* skip */ }
    });
    ctx.globalAlpha = 1;
    // canvas-rendered vector layers (barrier points) — flush any pending animation-frame redraw first
    (m._swRenderers || []).forEach(r => { if (r._redrawRequest) { L.Util.cancelAnimFrame(r._redrawRequest); r._redrawRequest = null; r._redraw(); } });
    c.querySelectorAll('.leaflet-overlay-pane canvas').forEach(cv => { const [x, y, w, h] = rel(cv); try { ctx.drawImage(cv, x, y, w, h); } catch { /* skip */ } });
    // overlay SVG (choropleth + boundary): replay each <path d> through Path2D — synchronous,
    // so the snapshot can also be refreshed inside beforeprint.
    replaySvg(c.querySelector('.leaflet-overlay-pane svg'));
    function replaySvg(svg) {
      if (!svg) return;
      const [sx, sy] = rel(svg);
      const vb = (svg.getAttribute('viewBox') || '0 0 0 0').split(/\s+/).map(Number);
      ctx.save(); ctx.translate(sx - vb[0], sy - vb[1]);
      svg.querySelectorAll('path').forEach(p => {
        const d = p.getAttribute('d'); if (!d) return;
        const path = new Path2D(d);
        const fill = p.getAttribute('fill'), stroke = p.getAttribute('stroke');
        if (fill && fill !== 'none') { ctx.globalAlpha = parseFloat(p.getAttribute('fill-opacity') ?? 1); ctx.fillStyle = fill; ctx.fill(path, p.getAttribute('fill-rule') || 'evenodd'); }
        if (stroke && stroke !== 'none') {
          ctx.globalAlpha = parseFloat(p.getAttribute('stroke-opacity') ?? 1); ctx.strokeStyle = stroke;
          ctx.lineWidth = parseFloat(p.getAttribute('stroke-width') || 1); ctx.lineJoin = p.getAttribute('stroke-linejoin') || 'round'; ctx.lineCap = p.getAttribute('stroke-linecap') || 'round';
          const dash = p.getAttribute('stroke-dasharray'); ctx.setLineDash(dash ? dash.split(/[ ,]+/).map(Number) : []);
          ctx.stroke(path);
        }
      });
      ctx.restore(); ctx.globalAlpha = 1;
    }
    // pins + labels (divIcons)
    c.querySelectorAll('.leaflet-marker-icon').forEach(mk => {
      const [x, y, w, h] = rel(mk); const txt = mk.textContent.trim();
      if (mk.classList.contains('huc-label')) {
        ctx.font = '600 10px "DM Mono", monospace'; ctx.fillStyle = INK; ctx.textBaseline = 'middle';
        ctx.lineWidth = 3; ctx.strokeStyle = CREAM; ctx.strokeText(txt, x, y + h / 2); ctx.fillText(txt, x, y + h / 2);
      } else if (mk.classList.contains('vertex')) {
        ctx.beginPath(); ctx.arc(x + w / 2, y + h / 2, 5, 0, Math.PI * 2); ctx.fillStyle = CREAM; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = INK; ctx.stroke();
      } else {
        const inner = mk.firstElementChild, cs = inner ? getComputedStyle(inner) : null; // pins carry their own colours (story layers, nearby vs inside)
        const fill = cs && !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor) ? cs.backgroundColor : ROJO;
        ctx.beginPath(); ctx.arc(x + w / 2, y + h / 2, Math.max(4, Math.min(w, h) / 2 - 2.5), 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill();
        ctx.lineWidth = 3; ctx.strokeStyle = cs && cs.borderTopStyle !== 'none' ? cs.borderTopColor : CREAM; ctx.stroke();
        ctx.font = '600 11px Poppins, sans-serif'; ctx.fillStyle = cs ? cs.color : CREAM; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(txt, x + w / 2, y + h / 2 + .5); ctx.textAlign = 'start';
      }
    });
    let url;
    try { url = canvas.toDataURL('image/jpeg', .85); } catch { return; } // tainted canvas — keep the old snapshot. JPEG keeps the PDF small (the canvas is opaque)
    if (tainted) return;
    snapshots[wellId] = url;
    const well = $('#' + wellId); if (!well) return;
    let img = well.querySelector('.print-snap');
    if (!img) { img = document.createElement('img'); img.className = 'print-snap'; img.alt = 'Map'; well.appendChild(img); }
    img.src = url;
  }
  /** Re-snapshot once all tiles of a map are loaded (and on every subsequent settle). */
  function watchForSnapshot(m, wellId) {
    let t;
    const kick = () => { clearTimeout(t); t = setTimeout(() => snapshotMap(m, wellId), 250); };
    m.eachLayer(l => { if (l instanceof L.TileLayer) l.on('load', kick); });
    m.on('moveend', kick);
    kick();
  }
  window.addEventListener('beforeprint', () => { [['boundary-map', 'boundary-well'], ['context-map', 'context-well'], ['species-map', 'species-well'], ['secas-map', 'secas-well'], ['barriers-map', 'barriers-well'], ['waters-map', 'waters-well'], ['orgs-map', 'orgs-well'], ['drought-map', 'drought-well'], ['stories-map', 'stories-well'], ['priority-map', 'priority-well'], ['ag-map', 'ag-well']].forEach(([m, w]) => maps[m] && snapshotMap(maps[m], w)); });

  // ------------------------------------------------------------------
  // 03 · SECAS Blueprint 2025 — tiled image service (LERC tiles, decoded client-side)
  // ------------------------------------------------------------------
  const BP = {
    url: 'https://tiledimageservices.arcgis.com/QVENGdaPbd4LUkLV/arcgis/rest/services/Southeast_Conservation_Blueprint_2025/ImageServer/tile',
    origin: [-12065482.3210514, 5134454.74927161], tile: 256, res0: 15360, maxLevel: 9, // level 9 = native 30 m
    classes: [ // from the service's raster attribute table
      { v: 4, name: 'Highest priority', rgb: [77, 0, 75] },
      { v: 3, name: 'High priority', rgb: [132, 63, 152] },
      { v: 2, name: 'Medium priority', rgb: [140, 150, 198] },
      { v: 1, name: 'Priority connections', rgb: [108, 108, 108] },
      { v: 0, name: 'Lower priority', rgb: null },
    ],
  };
  // Public cartographic tiles of the same Blueprint (PNG8, standard Web Mercator grid). Pixel colours are the class
  // colours above; transparent = lower priority (or outside the Blueprint). Used when the image service refuses tiles.
  const BP_PNG = { url: 'https://tiles.arcgis.com/tiles/QVENGdaPbd4LUkLV/arcgis/rest/services/Blueprint24/MapServer/tile', origin: [-20037508.342787, 20037508.342787], tile: 256, res0: 156543.03392804097, maxLevel: 13, png: true };
  let bpSrc = BP, bpProbeP = null;
  /** Decide once per session which Blueprint source answers: the value tiles (LERC) or the public PNG tiles. */
  function bpProbe() {
    return bpProbeP || (bpProbeP = (async () => {
      try {
        const m = toMerc(-85, 35); const size = BP.res0 / 2 ** 9 * BP.tile; const r = Math.floor((BP.origin[1] - m[1]) / size), c = Math.floor((m[0] - BP.origin[0]) / size);
        const res = await fetch(`${BP.url}/9/${r}/${c}`); const ct = res.headers.get('content-type') || '';
        bpSrc = (res.ok && !/html|json/i.test(ct)) ? BP : BP_PNG;
      } catch { bpSrc = BP_PNG; }
      if (bpSrc === BP_PNG) console.warn('Blueprint image service unavailable (token required) — using the public PNG map tiles');
      return bpSrc;
    })());
  }
  const R_MERC = 6378137;
  const toMerc = (lng, lat) => [lng * Math.PI / 180 * R_MERC, Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)) * R_MERC];
  const mercToLatLng = (x, y) => [(2 * Math.atan(Math.exp(y / R_MERC)) - Math.PI / 2) * 180 / Math.PI, x / R_MERC * 180 / Math.PI];
  const bpRes = (level) => bpSrc.res0 / 2 ** level;
  const bpClass = (v) => BP.classes.find(k => k.v === v);
  const bpTileCache = new Map();
  let lercReady = null;
  const loadLerc = () => lercReady || (lercReady = Lerc.load({ locateFile: (f) => 'vendor/' + f }));

  /** Fetch + decode one Blueprint tile (null when outside coverage / 404). Cached. LERC values, or PNG colours → class values. */
  const BP_COLOR = new Map(BP.classes.filter(k => k.rgb).map(k => [k.rgb.join(','), k.v]));
  function bpTile(level, row, col) {
    const key = `${bpSrc.png ? 'png' : 'lerc'}:${level}/${row}/${col}`;
    if (!bpTileCache.has(key)) bpTileCache.set(key, (async () => {
      const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), 20000); // never let one stalled tile hang the report
      const r = await fetch(`${bpSrc.url}/${level}/${row}/${col}`, { signal: ctl.signal }).finally(() => clearTimeout(timer));
      if (!r.ok) return null;
      if (!bpSrc.png) { const img = Lerc.decode(await r.arrayBuffer()); return { px: img.pixels[0], mask: img.mask }; }
      const bm = await createImageBitmap(await r.blob()); const N = bpSrc.tile; const c = document.createElement('canvas'); c.width = c.height = N;
      const ctx = c.getContext('2d', { willReadFrequently: true }); ctx.drawImage(bm, 0, 0); bm.close && bm.close();
      const d = ctx.getImageData(0, 0, N, N).data; const px = new Uint8Array(N * N);
      for (let j = 0; j < N * N; j++) { if (d[j * 4 + 3] < 128) { px[j] = 0; continue; } px[j] = BP_COLOR.get(`${d[j * 4]},${d[j * 4 + 1]},${d[j * 4 + 2]}`) ?? 0; }
      return { px, mask: null }; // transparent pixels count as lower priority inside the Blueprint
    })().catch(() => { bpTileCache.delete(key); return null; })); // a failed tile is retried next time
    return bpTileCache.get(key);
  }
  function bpRange(bboxM, level) {
    const size = bpRes(level) * bpSrc.tile;
    return { size, c0: Math.floor((bboxM[0] - bpSrc.origin[0]) / size), c1: Math.floor((bboxM[2] - bpSrc.origin[0]) / size),
             r0: Math.floor((bpSrc.origin[1] - bboxM[3]) / size), r1: Math.floor((bpSrc.origin[1] - bboxM[1]) / size) };
  }
  /** All rings (outer + holes) of a Polygon/MultiPolygon in Web Mercator metres, plus their bbox. */
  function mercRings(geom) {
    const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
    const rings = polys.flat(1).map(ring => ring.map(c => toMerc(c[0], c[1])));
    const bb = [Infinity, Infinity, -Infinity, -Infinity];
    rings.forEach(r => r.forEach(p => { bb[0] = Math.min(bb[0], p[0]); bb[1] = Math.min(bb[1], p[1]); bb[2] = Math.max(bb[2], p[0]); bb[3] = Math.max(bb[3], p[1]); }));
    return { rings, bb };
  }

  /** Acres per Blueprint class inside the boundary. Picks the finest tile level that needs ≤ 36 tiles,
   *  rasterises the boundary onto each tile's grid with canvas (even-odd, so holes work) and sums cells,
   *  scaling each cell's area by cos²(lat) to undo Web Mercator's stretch. */
  async function blueprintStats(boundary, { maxTiles = 36 } = {}) {
    await bpProbe(); if (!bpSrc.png) await loadLerc();
    const { rings, bb } = mercRings(boundary.geometry);
    let level = bpSrc.maxLevel, rng;
    for (; level > 3; level--) { rng = bpRange(bb, level); if ((rng.c1 - rng.c0 + 1) * (rng.r1 - rng.r0 + 1) <= maxTiles) break; }
    rng = bpRange(bb, level); // the loop can exit at level 3 with a range computed for level 4 (region-scale boundaries)
    const res = bpRes(level), size = rng.size, N = bpSrc.tile;
    const acres = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 }; let nodata = 0;
    const mask = document.createElement('canvas'); mask.width = mask.height = N;
    const mctx = mask.getContext('2d', { willReadFrequently: true });
    const jobs = [];
    for (let r = rng.r0; r <= rng.r1; r++) for (let c = rng.c0; c <= rng.c1; c++) jobs.push([r, c]);
    const tiles = []; for (let i = 0; i < jobs.length; i += 16) tiles.push(...await Promise.all(jobs.slice(i, i + 16).map(([r, c]) => bpTile(level, r, c)))); // ≤16 in flight
    jobs.forEach(([r, c], i) => {
      const t = tiles[i], x0 = bpSrc.origin[0] + c * size, y0 = bpSrc.origin[1] - r * size;
      mctx.clearRect(0, 0, N, N); mctx.fillStyle = '#000'; mctx.beginPath();
      rings.forEach(ring => { ring.forEach((p, k) => { const px = (p[0] - x0) / res, py = (y0 - p[1]) / res; k ? mctx.lineTo(px, py) : mctx.moveTo(px, py); }); mctx.closePath(); });
      mctx.fill('evenodd');
      const al = mctx.getImageData(0, 0, N, N).data;
      for (let j = 0; j < N * N; j++) {
        if (al[j * 4 + 3] < 128) continue;
        const lat = mercToLatLng(0, y0 - (Math.floor(j / N) + .5) * res)[0] * Math.PI / 180;
        const cellAcres = res * res * Math.cos(lat) ** 2 / SQM_PER_ACRE;
        if (!t || (t.mask && !t.mask[j])) { nodata += cellAcres; continue; }
        acres[t.px[j]] = (acres[t.px[j]] || 0) + cellAcres;
      }
    });
    const total = Object.values(acres).reduce((s, v) => s + v, 0);
    return { level, res: Math.round(res), acres, total, nodata, tiles: jobs.length, source: bpSrc.png ? 'png' : 'lerc' };
  }

  /** Paint the Blueprint around the boundary onto one Mercator-aligned canvas and add it as an image overlay.
   *  Returns the layer plus a lookup(lat, lng) → class value for click-to-identify. */
  let bpShow = new Set([4, 3, 2, 1]); // Blueprint classes currently shown on the maps
  let bpLayer = null, bpMap = null;
  async function blueprintOverlay(map, boundary, { pad = .5, maxPx = 2048, classes = bpShow } = {}) {
    await bpProbe(); if (!bpSrc.png) await loadLerc();
    const { bb } = mercRings(boundary.geometry);
    const w = bb[2] - bb[0], h = bb[3] - bb[1];
    const bboxM = [bb[0] - w * pad, bb[1] - h * pad, bb[2] + w * pad, bb[3] + h * pad];
    let level = bpSrc.maxLevel; while (level > 0 && (bboxM[2] - bboxM[0]) / bpRes(level) > maxPx) level--;
    const res = bpRes(level), rng = bpRange(bboxM, level), size = rng.size, N = bpSrc.tile;
    const cols = rng.c1 - rng.c0 + 1, rows = rng.r1 - rng.r0 + 1;
    const x0 = bpSrc.origin[0] + rng.c0 * size, y0 = bpSrc.origin[1] - rng.r0 * size;
    const canvas = document.createElement('canvas'); canvas.width = cols * N; canvas.height = rows * N;
    const ctx = canvas.getContext('2d');
    const jobs = []; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) jobs.push([r, c]);
    const tiles = await Promise.all(jobs.map(([r, c]) => bpTile(level, rng.r0 + r, rng.c0 + c)));
    jobs.forEach(([r, c], i) => {
      const t = tiles[i]; if (!t) return;
      const id = ctx.createImageData(N, N), d = id.data;
      for (let j = 0; j < t.px.length; j++) {
        if (t.mask && !t.mask[j]) continue;
        const k = bpClass(t.px[j]); if (!k || !k.rgb || !classes.has(k.v)) continue;
        d[j * 4] = k.rgb[0]; d[j * 4 + 1] = k.rgb[1]; d[j * 4 + 2] = k.rgb[2]; d[j * 4 + 3] = 255;
      }
      ctx.putImageData(id, c * N, r * N);
    });
    const bounds = L.latLngBounds(mercToLatLng(x0, y0 - rows * size), mercToLatLng(x0 + cols * size, y0));
    const layer = L.imageOverlay(canvas.toDataURL('image/png'), bounds, { opacity: .8, interactive: false, className: 'bp-overlay' }).addTo(map);
    layer.bringToBack();
    const lookup = (lat, lng) => {
      const m = toMerc(lng, lat);
      const c = Math.floor((m[0] - x0) / size), r = Math.floor((y0 - m[1]) / size);
      if (c < 0 || r < 0 || c >= cols || r >= rows) return null;
      const t = tiles[r * cols + c]; if (!t) return null;
      const j = Math.floor((y0 - m[1] - r * size) / res) * N + Math.floor((m[0] - x0 - c * size) / res);
      return (t.mask && !t.mask[j]) ? null : t.px[j];
    };
    return { layer, level, res, lookup };
  }

  let bpStats = null;
  const pctOf = (v, total) => total ? `${Math.round(v / total * 100)}%` : '—';
  function renderBlueprintStats(s) {
    $('#st-secas').textContent = fmt(s.acres[4]);
    if (s.total) { const known = [4, 3, 2, 1].reduce((t, v) => t + (s.acres[v] || 0), 0); pvBar('pv-viz-secas', BP.classes.filter(k => k.rgb).map(k => [(s.acres[k.v] || 0) / s.total, `rgb(${k.rgb.join(',')})`]).concat([[Math.max(0, 1 - known / s.total), 'rgba(46,30,18,.12)']])); }
    [4, 3, 2, 1].forEach(v => { $(`#bp-pct-${v}`).textContent = pctOf(s.acres[v], s.total); $(`#bp-ac-${v}`).textContent = fmt(s.acres[v]); });
    $('#bp-bar').innerHTML = BP.classes.map(k => {
      const share = s.total ? s.acres[k.v] / s.total * 100 : 0;
      const bg = k.rgb ? `rgb(${k.rgb.join(',')})` : '#EDE1C9';
      return `<div style="flex:${share.toFixed(3)} 1 0;background:${bg};display:flex;align-items:center;justify-content:center;color:${k.v >= 3 ? CREAM : INK};font:600 10.5px var(--mono)" title="${esc(k.name)} · ${fmt(s.acres[k.v])} acres · ${share.toFixed(1)}%" aria-label="${esc(k.name)} ${share.toFixed(0)} percent">${share >= 8 ? `${share.toFixed(0)}%` : ''}</div>`;
    }).join('');
    $('#bp-bar-note').textContent = `${fmt(s.total)} acres analysed · ${pctOf(s.acres[0], s.total)} lower priority` + (s.nodata > 50 ? ` · ${fmt(s.nodata)} acres outside Blueprint coverage` : '');
    $('#bp-note').textContent = `Blueprint 2025 (SECAS release) · ${s.res} m cells inside your boundary`;
    withRegion(rc => { const g = rc.secas; setRegion('secas', g && g.total ? `Across the whole Southern Waters boundary <b>${pctStr(g.acres['4'], g.total)}</b> is highest priority and ${pctStr(g.acres['3'], g.total)} high priority (${pctStr(g.acres['0'], g.total)} lower priority); your area: <b>${pctOf(s.acres[4], s.total)}</b> highest and ${pctOf(s.acres[3], s.total)} high.` : ''); });
    buildAppendixSoon();
    $('#bp-method').textContent = `Acres are computed here in the browser by overlaying your boundary on the Blueprint raster tiles (${s.tiles} tiles at ${s.res} m, ${s.res <= 30 ? 'the native resolution' : 'resampled from the native 30 m'}${s.source === 'png' ? '; read from the public Blueprint map tiles, whose colours encode the four priority classes, because the value service now requires a sign-in' : ''}) and summing the cells of each class, corrected for map-projection scale at your latitude. Percentages are shares of the ${fmt(s.total)} acres analysed inside your boundary.`;
  }
  const buildAppendixSoon = () => setTimeout(() => { buildAppendix(); statLabels(); }, 0);
  async function runBlueprint(map) {
    setStatus('s-secas', 'loading', null, () => runBlueprint(map));
    bpStats = null;
    bpShow = new Set([4, 3, 2, 1]); bpLayer = null;
    $('#bp-classes').innerHTML = BP.classes.filter(k => k.rgb).map(k => `<button class="pill xs" type="button" data-class="${k.v}" aria-pressed="true" style="background:rgb(${k.rgb.join(',')});color:${k.v === 2 ? 'var(--ink)' : 'var(--cream)'}">${esc(k.name)}</button>`).join('');
    $$('#bp-classes .pill').forEach(b => b.onclick = async () => {
      const v = Number(b.dataset.class); const on = !bpShow.has(v);
      if (on) bpShow.add(v); else bpShow.delete(v);
      b.setAttribute('aria-pressed', String(on));
      if (!bpMap) return;
      if (bpLayer) bpLayer.remove();
      try { bpLayer = (await blueprintOverlay(bpMap, state.boundary)).layer; snapLater(bpMap, 'secas-well'); } catch (err) { console.error(err); }
    });
    $('#bp-legend').innerHTML = BP.classes.map(k => `<div><span class="sw-sq" style="background:${k.rgb ? `rgb(${k.rgb.join(',')})` : 'transparent'};border:1.5px solid ${k.rgb ? 'transparent' : 'var(--cream)'}"></span><span style="color:var(--cream)">${esc(k.name)}</span></div>`).join('');
    [4, 3, 2, 1].forEach(v => { $(`#bp-pct-${v}`).textContent = '…'; $(`#bp-ac-${v}`).textContent = '—'; });
    $('#st-secas').textContent = '…';
    $('#bp-note').textContent = 'Loading the Blueprint…';
    try {
      await bpProbe(); if (!bpSrc.png && typeof Lerc === 'undefined') throw new Error('LERC decoder did not load');
      const [stats, ov] = await Promise.all([blueprintStats(state.boundary), blueprintOverlay(map, state.boundary)]);
      bpLayer = ov.layer; bpMap = map;
      bpStats = stats;
      renderBlueprintStats(stats);
      setStatus('s-secas', 'done');
      snapshotMap(map, 'secas-well');
    } catch (err) {
      console.error(err);
      [4, 3, 2, 1].forEach(v => { $(`#bp-pct-${v}`).textContent = '##%'; }); $('#st-secas').textContent = '###';
      setStatus('s-secas', 'error', err.message);
      $('#bp-note').textContent = 'Blueprint unavailable right now';
      $('#bp-bar-note').textContent = `Could not load the Blueprint raster: ${err.message}`;
    }
  }
  $('#btn-secas-png').onclick = () => {
    const url = snapshots['secas-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'secas-blueprint-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };

  // ------------------------------------------------------------------
  // 05 · Dams + road crossings — SARP National Aquatic Barrier Inventory (point layers)
  // ------------------------------------------------------------------
  // Dams: SARP's inventory as compiled for Southern Waters (Aug 2026, public). The Dec-2023 national dams layer became token-only on 2026-09-24.
  const DAMS = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services/SARP_barriers_swf_08042026/FeatureServer/0';
  const XINGS = 'https://services.arcgis.com/QVENGdaPbd4LUkLV/arcgis/rest/services/All_RoadBarriers_01212019/FeatureServer/0';
  const PASSABILITY = { 'Complete barrier': 'Complete Barrier', 'Partial passability': 'Partial Barrier', 'Partial passability - non salmonid': 'Partial Barrier', 'No barrier': 'No Barrier' };
  const FEASIBILITY = { 0: 'Not assessed', 1: 'Not feasible', 2: 'Likely infeasible', 3: 'Possibly feasible', 4: 'Likely feasible', 5: 'No connectivity benefit', 6: 'Unknown', 7: 'Error', 8: 'Dam removed for conservation benefit', 12: 'Removal planned', 13: 'Breached with full flow', 14: 'Fish passage installed for conservation benefit', 15: 'Treatment completed', 16: 'Treatment planned' };
  const PROJECT_LABEL = { 'No': 'Passable structure', 'Potential Project': 'Potential project — impassable to some degree', 'Small Project': 'Small project — blocked by debris', 'Error-Delete': 'Error' };
  const SEVERITY_RANK = (s) => !s ? 9 : /^Complete/.test(s) ? 0 : /^Partial/.test(s) ? 1 : /^Season/.test(s) ? 2 : /No Barrier/.test(s) ? 3 : 4;
  const PROJECT_RANK = { 'Severe Barrier': 0, 'Significant Barrier': 1, 'Moderate Barrier': 2, 'Potential Project': 3, 'Proposed Project': 4, 'Minor Barrier': 5, 'Small Project': 6, 'Insignificant Barrier': 7, 'Indeterminate': 8, 'Not Scored': 8, 'Unassessed': 8 };
  const sevChip = (s) => !s ? 'ph' : /^Complete/.test(s) ? 'rojo' : /^(Partial|Season)/.test(s) ? 'terra' : /No Barrier/.test(s) ? 'sunset' : 'paper';
  const projChip = (p) => ({ 'Severe Barrier': 'rojo', 'Significant Barrier': 'terra', 'Moderate Barrier': 'sunset', 'Potential Project': 'sunset', 'Proposed Project': 'sunset' })[p] || (PROJECT_RANK[p] <= 7 ? 'paper' : 'ph');
  const clean = (v) => (v == null ? '' : String(v).trim());
  const SARP_RECORD = (id) => `https://tool.aquaticbarriers.org/report/dams/${encodeURIComponent(id)}`;
  // SARP's details API only allows its own origin, so server.py proxies it at /sarp/dams/<id> (HEAD /sarp = capability)
  const sarpProxyP = fetch('/sarp', { method: 'HEAD' }).then(r => r.ok).catch(() => false);
  const sarpCache = new Map();
  const sarpDetails = (id) => { if (!sarpCache.has(id)) sarpCache.set(id, sarpProxyP.then(ok => (ok ? fetch(`/sarp/dams/${encodeURIComponent(id)}`).then(r => (r.ok ? r.json() : null)) : null)).catch(() => null)); return sarpCache.get(id); };
  const miles = (v) => fmt(v, v < 10 ? 1 : 0);
  const gainText = (d) => (!d ? '' : d.hasnetwork === false || d.gainmiles == null ? 'No network analysis for this dam' : `${miles(d.gainmiles)} mi of stream reopened if removed${d.perennialgainmiles != null ? ` (${miles(d.perennialgainmiles)} perennial)` : ''}${d.totalupstreammiles != null ? ` · ${miles(d.totalupstreammiles)} mi upstream network` : ''}`);
  /** Fill the "gain" spans of the rendered dam rows once SARP details arrive. */
  function fillGains(scope) { $$(`${scope} [data-sarp]`).forEach(el => { const id = el.dataset.sarp; sarpDetails(id).then(d => { if (d && el.isConnected) el.textContent = ` · ${gainText(d)}`; }); }); }
  const BARRIER_CAP = 8000; // per layer — enough for any sensible reporting area, keeps the browser responsive

  /** Every point of a layer inside the boundary, paginated; also the server-side exact count. */
  async function fetchBarrierLayer(base, outFields, { where = '1=1', idField = 'OBJECTID' } = {}) {
    const spatial = { where, geometry: esriPolygon(state.boundary.geometry), geometryType: 'esriGeometryPolygon', inSR: '4326', spatialRel: 'esriSpatialRelIntersects' };
    const countP = arcgis('query', Object.assign({ returnCountOnly: 'true', f: 'json' }, spatial), base).then(j => j.count ?? null).catch(() => null);
    const feats = []; let offset = 0;
    for (;;) {
      const gj = await arcgis('query', Object.assign({ outFields, returnGeometry: 'true', outSR: '4326', orderByFields: idField, resultOffset: String(offset), resultRecordCount: '2000', f: 'geojson' }, spatial), base);
      const f = gj.features || []; feats.push(...f); offset += f.length;
      const more = gj.exceededTransferLimit || (gj.properties && gj.properties.exceededTransferLimit) || f.length === 2000;
      if (!more || !f.length || offset >= BARRIER_CAP) break;
    }
    return { feats, count: await countP, capped: offset >= BARRIER_CAP };
  }

  let barriers = null;
  async function loadBarriers() {
    const [d, x] = await Promise.all([
      fetchBarrierLayer(DAMS, 'fid,SARPID,Name,River,Passability,Feasibility,BarrierOwnerType,TESpp,IsPriority,SARP_Score,State,County', { where: "BarrierType='Dam'", idField: 'fid' }),
      fetchBarrierLayer(XINGS, 'OBJECTID,SARPUniqueID,Road,StreamName,Potential_Project,CrossingTypeId,SE_AOP,CrossingConditionId,STATE,TownId'),
    ]);
    const dams = d.feats.map(f => { const p = f.properties; const sev = PASSABILITY[clean(p.Passability)] || null; const nm = clean(p.Name); return {
      kind: 'dam', id: p.SARPID || p.fid, name: nm && !/^\d+$/.test(nm) && !/^estimated dam$/i.test(nm) ? nm : (/^estimated dam$/i.test(nm) ? 'Estimated dam (unnamed)' : 'Unnamed dam'),
      river: clean(p.River), severity: sev, severityLabel: sev ? sev.replace(/ Barrier$/, '') : 'Not assessed', feasibility: clean(p.Feasibility) || 'Not assessed',
      owner: clean(p.BarrierOwnerType), tesp: Number(p.TESpp) || 0, priority: /^(yes|identified)/i.test(clean(p.IsPriority)) || (clean(p.IsPriority) && !/not identified/i.test(clean(p.IsPriority))), score: p.SARP_Score != null && p.SARP_Score >= 0 ? Number(p.SARP_Score) : null,
      height: null, place: [clean(p.County), STATE_ABBR[clean(p.State)] || clean(p.State)].filter(Boolean).join(', '), lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0] }; })
      .sort((a, b) => SEVERITY_RANK(a.severity) - SEVERITY_RANK(b.severity) || /unnamed/i.test(a.name) - /unnamed/i.test(b.name) || a.name.localeCompare(b.name));
    const xings = x.feats.map(f => { const p = f.properties; const proj = clean(p.Potential_Project) || 'Unassessed'; return {
      kind: 'xing', id: p.SARPUniqueID || p.OBJECTID, road: clean(p.Road) || 'Unnamed road', stream: clean(p.StreamName), project: proj, projectLabel: PROJECT_LABEL[proj] || proj,
      type: clean(p.CrossingTypeId) || 'Unknown', aop: clean(p.SE_AOP), condition: clean(p.CrossingConditionId), place: [clean(p.TownId), clean(p.STATE)].filter(Boolean).join(', '),
      severe: proj === 'Severe Barrier' || proj === 'Significant Barrier', lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0] }; })
      .sort((a, b) => (PROJECT_RANK[a.project] ?? 9) - (PROJECT_RANK[b.project] ?? 9) || a.road.localeCompare(b.road));
    return { dams, xings, damCount: d.count ?? dams.length, xingCount: x.count ?? xings.length, capped: d.capped || x.capped,
             assessed: dams.filter(r => r.severity).length, severe: xings.filter(r => r.severe).length };
  }

  /** Both point layers on a map via the canvas renderer; onPick(record) on click. */
  const sevGroup = (s) => !s ? 'na' : /^Complete/.test(s) ? 'complete' : /^(Partial|Season)/.test(s) ? 'partial' : /No Barrier/.test(s) ? 'none' : 'other';
  const feasGroup = (l) => /Likely feasible|Possibly feasible/.test(l) ? 'feasible' : /Not feasible|Likely infeasible|No connectivity|No conservation benefit|Invasive species barrier/.test(l) ? 'infeasible' : /removed|planned|installed|completed|Breached/i.test(l) ? 'done' : 'na';
  const projGroup = (p) => ({ 'Severe Barrier': 'severe', 'Significant Barrier': 'significant', 'Moderate Barrier': 'moderate', 'Potential Project': 'potential', 'Proposed Project': 'potential', 'Minor Barrier': 'minor', 'Insignificant Barrier': 'minor', 'Small Project': 'minor', 'No Barrier': 'none', 'No': 'none', 'Completed Project': 'none' })[p] || 'other';
  function damRows() {
    if (!barriers) return []; const f = readFilters('#dam-filters'); const q = (f.q || '').toLowerCase();
    return barriers.dams.filter(r => (!q || `${r.name} ${r.river} ${r.place}`.toLowerCase().includes(q)) && (f.severity === 'all' || sevGroup(r.severity) === f.severity) && (f.feas === 'all' || feasGroup(r.feasibility) === f.feas));
  }
  function xingRows() {
    if (!barriers) return []; const f = readFilters('#xing-filters'); const q = (f.q || '').toLowerCase();
    return barriers.xings.filter(r => (!q || `${r.road} ${r.stream} ${r.place}`.toLowerCase().includes(q)) && (f.project === 'all' || projGroup(r.project) === f.project) && (f.type === 'all' || r.type === f.type));
  }
  let barMap = null, barGroup = null;
  function addBarrierLayers(m, dams, xings, onPick) {
    if (!barriers) return null;
    const rend = L.canvas({ padding: .5 });
    (m._swRenderers = m._swRenderers || []).push(rend); // so snapshotMap can force a synchronous redraw
    const group = L.layerGroup().addTo(m);
    const mk = (rec, style) => { const c = L.circleMarker([rec.lat, rec.lng], Object.assign({ renderer: rend, weight: 1, color: CREAM }, style)); c.on('click', () => onPick && onPick(rec)); c.bindTooltip(rec.kind === 'dam' ? `${esc(rec.name)} · ${esc(rec.severityLabel)}` : `${esc(rec.road)} · ${esc(rec.projectLabel)}`); return c; };
    // draw order: unassessed dams, crossings, rated dams, severe crossings on top
    dams.filter(r => !r.severity).forEach(r => group.addLayer(mk(r, { radius: 3.5, fill: false, color: ROJO, weight: 1.5 }))); // hollow = not assessed (shape, not just opacity)
    xings.filter(r => !r.severe).forEach(r => group.addLayer(mk(r, { radius: 4, fillColor: '#EAC891', fillOpacity: .95 })));
    dams.filter(r => r.severity).forEach(r => group.addLayer(mk(r, { radius: 5, fillColor: ROJO, fillOpacity: .95 })));
    xings.filter(r => r.severe).forEach(r => group.addLayer(mk(r, { radius: 4.5, fillColor: INK, fillOpacity: .95 })));
    return group;
  }

  function damFields(r) { return [['Dam', r.name], ['River', r.river || '—'], ['Barrier severity', r.severityLabel], ['Potential feasibility', r.feasibility], ['Owner', r.owner || '—'], ['T&E species upstream', r.tesp ? String(r.tesp) : '0'], ...(r.priority ? [['Resource-manager priority', 'Yes']] : []), ['County', r.place || '—'], ['SARP ID', String(r.id)], ['SARP record', `<a href="${SARP_RECORD(r.id)}" target="_blank" rel="noopener">Barrier report on aquaticbarriers.org →</a>`, true]]; }
  function xingFields(r) { return [['Road', r.road], ['Stream', r.stream || '—'], ['Potential project', r.projectLabel], ['Crossing type', r.type], ['SE AOP determination', r.aop || '—'], ['Condition', r.condition || '—'], ['County', r.place || '—'], ['SARP ID', String(r.id)]]; }

  const DAM_COLS = [
    { k: 'name', label: 'Dam', help: 'Name as inventoried (estimated dams have no name), the river, a link to SARP’s barrier report and, when SARP’s network analysis is available, the stream miles removing it would reopen.', sort: byStr(r => r.name), cell: r => `<div class="v">${esc(r.name)}</div><span class="sub">${r.river ? `${esc(r.river)} · ` : ''}<a href="${SARP_RECORD(r.id)}" target="_blank" rel="noopener" style="color:var(--rojo)">SARP record</a><span data-sarp="${esc(r.id)}"></span></span>` },
    { k: 'sev', label: 'Barrier severity', help: 'From SARP’s passability field: complete barrier, partial, no barrier, or not assessed.', sort: (a, b) => SEVERITY_RANK(a.severity) - SEVERITY_RANK(b.severity), cell: r => `<span class="chip ${sevChip(r.severity)}">${esc(r.severityLabel)}</span>` },
    { k: 'feas', label: 'Potential feasibility', help: 'SARP’s assessment of how feasible removal is, where one has been made.', sort: byStr(r => r.feasibility), cell: r => esc(r.feasibility) },
    { k: 'owner', label: 'Owner', help: 'Owner type recorded in the inventory.', sort: byStr(r => r.owner), cell: r => esc(r.owner || '—') },
    { k: 'tesp', label: 'T&E species upstream', help: 'Threatened or endangered species recorded in the stream network upstream of the dam.', mono: true, desc: true, sort: byNumDesc(r => r.tesp), cell: r => String(r.tesp || 0) },
  ];
  const XING_COLS = [
    { k: 'road', label: 'Road', help: 'Road name at the crossing, with the stream it crosses.', sort: byStr(r => r.road), cell: r => `<div class="v">${esc(r.road)}</div>${r.stream ? `<span class="sub">${esc(r.stream)}</span>` : ''}` },
    { k: 'proj', label: 'Potential project', help: 'SARP’s rating of the crossing as a barrier-removal project, from severe barrier down to passable.', sort: (a, b) => (PROJECT_RANK[a.project] ?? 9) - (PROJECT_RANK[b.project] ?? 9), cell: r => `<span class="chip ${projChip(r.project)}">${esc(r.projectLabel)}</span>` },
    { k: 'type', label: 'Crossing type', help: 'Culvert, bridge, ford or other structure type.', sort: byStr(r => r.type), cell: r => esc(r.type) },
    { k: 'aop', label: 'SE AOP determination', help: 'Southeast aquatic-organism-passage field determination, where one was made.', sort: byStr(r => r.aop), cell: r => esc(r.aop || '—') },
  ];
  function renderBarriers() {
    const b = barriers;
    $('#bar-dams').textContent = fmt(b.damCount); $('#bar-xings').textContent = fmt(b.xingCount);
    setSummary('sum-dams', fmt(b.damCount)); setSummary('sum-xings', fmt(b.xingCount)); updateAreaSummary();
    withRegion(rc => { const g = rc.barriers; setRegion('barriers', g ? `The Southern Waters boundary holds <b>${fmt(g.dams)}</b> inventoried dams and <b>${fmt(g.xings)}</b> assessed road crossings; ${pctStr(g.damsAssessed, g.dams)} of dams carry a severity rating and ${pctStr(g.xingsSevere, g.xings)} of crossings rate severe or significant. Here: <b>${b.dams.length ? Math.round(b.assessed / b.dams.length * 100) : 0}%</b> of ${fmt(b.damCount)} dams rated, <b>${pctStr(b.severe, b.xings.length)}</b> of ${fmt(b.xingCount)} crossings severe or significant.` : ''); });
    $('#bar-assessed').textContent = b.dams.length ? `${Math.round(b.assessed / b.dams.length * 100)}%` : '—';
    $('#bar-severe').textContent = fmt(b.severe);
    $('#bar-note').textContent = `SARP inventory · ${fmt(b.damCount)} dams · ${fmt(b.xingCount)} assessed crossings inside your boundary`;
    $('#bar-note').dataset.stamped = ''; $('#bar-method').dataset.stamped = ''; stampSource('#bar-note', '#bar-method', [DAMS, XINGS], 'SARP layers');
    const dRows = sortRows('dams', damRows(), DAM_COLS), xRows = sortRows('xings', xingRows(), XING_COLS), dActive = filtersActive('#dam-filters'), xActive = filtersActive('#xing-filters');
    const dShow = shownRows(dRows, 'dams'), xShow = shownRows(xRows, 'xings');
    $('#dam-preview').innerHTML = previewLine(dShow.length, dRows.length, b.dams.length, 'dams', dActive) + (dRows.length && !dActive ? ', worst first' : '');
    $('#xing-preview').innerHTML = previewLine(xShow.length, xRows.length, b.xings.length, 'assessed road crossings', xActive) + (xRows.length && !xActive ? ', worst first' : '');
    csvLabel('#btn-dams-csv', dRows.length, dActive); csvLabel('#btn-xings-csv', xRows.length, xActive);
        $('#dam-rows').innerHTML = tableHtml('dams', DAM_COLS, dShow, 'No dams match those filters.'); bindTableSort('#dam-rows', 'dams', renderBarriers);
        $('#xing-rows').innerHTML = tableHtml('xings', XING_COLS, xShow, 'No road crossings match those filters.'); bindTableSort('#xing-rows', 'xings', renderBarriers);
    $('#bar-method').textContent = `Points are selected where they fall inside your boundary${b.capped ? ` (the first ${fmt(BARRIER_CAP)} of each layer were downloaded — narrow the area for a complete table)` : ''}. Tables are sorted worst-first: dams by barrier severity, crossings by potential-project rating. ${fmt(b.assessed)} of ${fmt(b.dams.length)} dams here have a severity rating.`;
    $('#btn-dams-csv').disabled = !dRows.length; $('#btn-xings-csv').disabled = !xRows.length;
    fillGains('#dam-rows');
    moreButton('#dam-rows', 'dams', dRows.length, renderBarriers); moreButton('#xing-rows', 'xings', xRows.length, renderBarriers);
    buildAppendixSoon();
  }
  function refreshBarrierMap() {
    if (!barMap || !barriers) return;
    if (barGroup) barGroup.remove();
    barGroup = addBarrierLayers(barMap, damRows(), xingRows(), (rec) => openViewer('barriers', rec));
    snapLater(barMap, 'barriers-well');
  }
  wireFilters('#dam-filters', () => { if (barriers) { renderBarriers(); refreshBarrierMap(); } });
  wireFilters('#xing-filters', () => { if (barriers) { renderBarriers(); refreshBarrierMap(); } });
  function downloadCsv(name, header, rows) {
    const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const blob = new Blob([[header.map(q).join(',')].concat(rows.map(r => r.map(q).join(','))).join('\n')], { type: 'text/csv' });
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: name });
    document.body.appendChild(a); a.click(); a.remove();
  }
  $('#btn-dams-csv').onclick = () => barriers && downloadCsv(filtersActive('#dam-filters') ? 'dams-filtered.csv' : 'dams.csv', ['Dam', 'River', 'Barrier severity', 'Potential feasibility', 'Owner', 'T&E species upstream', 'Manager priority', 'County', 'SARP ID', 'Latitude', 'Longitude'],
    damRows().map(r => [r.name, r.river, r.severityLabel, r.feasibility, r.owner, r.tesp, r.priority ? 'Yes' : 'No', r.place, r.id, r.lat.toFixed(5), r.lng.toFixed(5)]));
  $('#btn-xings-csv').onclick = () => barriers && downloadCsv(filtersActive('#xing-filters') ? 'road-crossings-filtered.csv' : 'road-crossings.csv', ['Road', 'Stream', 'Potential project', 'Crossing type', 'SE AOP determination', 'Condition', 'County', 'SARP ID', 'Latitude', 'Longitude'],
    xingRows().map(r => [r.road, r.stream, r.projectLabel, r.type, r.aop, r.condition, r.place, r.id, r.lat.toFixed(5), r.lng.toFixed(5)]));
  $('#btn-barriers-png').onclick = () => {
    const url = snapshots['barriers-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'dams-and-crossings-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runBarriers(map) {
    setStatus('s-barriers', 'loading', null, () => runBarriers(map));
    barriers = null; barMap = map; barGroup = null;
    resetFilters('#dam-filters'); resetFilters('#xing-filters');
    ['bar-dams', 'bar-xings', 'bar-assessed', 'bar-severe'].forEach(id => { $('#' + id).textContent = '…'; });
    $('#bar-note').textContent = 'Loading the barrier inventory…'; $('#dam-preview').textContent = 'Loading…'; $('#xing-preview').textContent = 'Loading…';
    try {
      barriers = await loadBarriers();
      const typeCounts = {}; barriers.xings.forEach(r => { typeCounts[r.type] = (typeCounts[r.type] || 0) + 1; });
      setSelectOptions('#xing-filters [data-filter="type"]', 'Any crossing type', Object.entries(typeCounts).sort((x, y) => y[1] - x[1]).map(([v, n]) => ({ v, label: `${v} (${fmt(n)})` })));
      renderBarriers();
      setStatus('s-barriers', 'done');
      barGroup = addBarrierLayers(map, barriers.dams, barriers.xings, (rec) => openViewer('barriers', rec));
      setTimeout(() => snapshotMap(map, 'barriers-well'), 150);
    } catch (err) {
      console.error(err);
      ['bar-dams', 'bar-xings', 'bar-assessed', 'bar-severe'].forEach(id => { $('#' + id).textContent = '##'; });
      setStatus('s-barriers', 'error', err.message);
      $('#bar-note').textContent = 'Barrier inventory unavailable right now';
      $('#dam-preview').textContent = `Could not load the SARP inventory: ${err.message}`; $('#xing-preview').textContent = '';
    }
  }

  // ------------------------------------------------------------------
  // 04 · Impaired waterways — EPA ATTAINS (points + lines + areas, merged by assessment unit)
  // ------------------------------------------------------------------
  const ATTAINS = 'https://gispub.epa.gov/arcgis/rest/services/OW/ATTAINS_Assessment/MapServer';
  const WQ_LAYERS = [[0, 'point'], [1, 'line'], [2, 'area']];
  const CAUSE_FIELDS = ['algal_growth', 'ammonia', 'biotoxins', 'cause_unknown', 'cause_unknown_fish_kills', 'cause_unknown_impaired_biota', 'chlorine', 'dioxins', 'fish_consumption_advisory', 'flow_alterations', 'habitat_alterations', 'hydrologic_alteration', 'mercury', 'metals_other_than_mercury', 'noxious_aquatic_plants', 'nuisance_exotic_species', 'nuisance_native_species', 'nutrients', 'oil_and_grease', 'oxygen_depletion', 'other_cause', 'pathogens', 'pesticides', 'pfas', 'ph_acidity_caustic_conditions', 'polychlorinated_biphenyls_pcbs', 'radiation', 'solids_chlorides_sulfates', 'sediment', 'taste_color_and_odor', 'temperature', 'total_toxics', 'toxic_inorganics', 'toxic_organics', 'trash', 'turbidity'];
  const CAUSE_LABEL = { cause_unknown_impaired_biota: 'Cause unknown – impaired biota', cause_unknown_fish_kills: 'Cause unknown – fish kills', ph_acidity_caustic_conditions: 'pH / acidity', polychlorinated_biphenyls_pcbs: 'PCBs', pfas: 'PFAS', metals_other_than_mercury: 'Metals (other than mercury)', solids_chlorides_sulfates: 'Solids / chlorides / sulfates', taste_color_and_odor: 'Taste, color and odor', oil_and_grease: 'Oil and grease' };
  const causeLabel = (f) => CAUSE_LABEL[f] || f.replace(/_/g, ' ').replace(/^./, c => c.toUpperCase());
  const WQ_FIELDS = ['OBJECTID', 'organizationid', 'organizationname', 'state', 'reportingcycle', 'assessmentunitidentifier', 'assessmentunitname', 'waterbodyreportlink', 'ircategory', 'overallstatus', 'isassessed', 'isimpaired', 'isthreatened', 'on303dlist', 'hastmdl', 'has4bplan', 'hasalternativeplan', 'visionpriority303d', 'cultural_use', 'drinkingwater_use', 'ecological_use', 'fishconsumption_use', 'recreation_use', 'other_use'].concat(CAUSE_FIELDS).join(',');
  const WQ_CAP = 6000; // features per geometry layer
  const WQ_TYPE = { point: 'Point feature', line: 'Stream / river', area: 'Lake / reservoir / estuary' };

  async function fetchWaterLayer(layerId) {
    const spatial = { where: '1=1', geometry: esriPolygon(state.boundary.geometry), geometryType: 'esriGeometryPolygon', inSR: '4326', spatialRel: 'esriSpatialRelIntersects' };
    const feats = []; let offset = 0;
    for (;;) {
      const params = Object.assign({ outFields: WQ_FIELDS, returnGeometry: 'true', outSR: '4326', geometryPrecision: '5', orderByFields: 'OBJECTID', resultOffset: String(offset), resultRecordCount: '2000', f: 'geojson' }, spatial);
      // EPA's server occasionally answers an error without CORS headers (surfaces as "Failed to fetch"); one retry usually clears it
      let gj; try { gj = await arcgis('query', params, `${ATTAINS}/${layerId}`); }
      catch (err) { await new Promise(r => setTimeout(r, 1500)); gj = await arcgis('query', params, `${ATTAINS}/${layerId}`); }
      const f = gj.features || []; feats.push(...f); offset += f.length;
      const more = gj.exceededTransferLimit || (gj.properties && gj.properties.exceededTransferLimit) || f.length === 2000;
      if (!more || !f.length || offset >= WQ_CAP) break;
    }
    return { feats, capped: offset >= WQ_CAP };
  }
  /** Length (miles) of the parts of a line geometry whose segments sit inside the boundary. */
  function clippedMiles(g) {
    const lines = g.type === 'LineString' ? [g.coordinates] : g.coordinates; let mi = 0;
    lines.forEach(cs => { for (let i = 1; i < cs.length; i++) {
      const p = cs[i - 1], q = cs[i];
      if (turf.booleanPointInPolygon([(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], state.boundary)) mi += turf.distance(p, q, { units: 'miles' });
    } });
    return mi;
  }

  let waters = null;
  async function loadWaters() {
    const results = await Promise.all(WQ_LAYERS.map(([id]) => fetchWaterLayer(id)));
    const units = new Map();
    WQ_LAYERS.forEach(([, type], i) => results[i].feats.forEach(f => {
      const p = f.properties; const id = clean(p.assessmentunitidentifier) || `obj-${p.OBJECTID}`;
      let u = units.get(id);
      if (!u) {
        u = { id, name: clean(p.assessmentunitname) || id, org: clean(p.organizationname), state: clean(p.state), cycle: p.reportingcycle, link: clean(p.waterbodyreportlink),
          status: clean(p.overallstatus) || 'Not Assessed', category: clean(p.ircategory), assessed: p.isassessed === 'Y', impaired: p.isimpaired === 'Y', threatened: p.isthreatened === 'Y',
          listed: p.on303dlist === 'Y', tmdl: p.hastmdl === 'Y', plan: p.has4bplan === 'Y' || p.hasalternativeplan === 'Y', vision: p.visionpriority303d === 'Y',
          uses: { 'Ecological use': clean(p.ecological_use), 'Fish consumption': clean(p.fishconsumption_use), 'Recreational use': clean(p.recreation_use), 'Drinking water': clean(p.drinkingwater_use), 'Cultural use': clean(p.cultural_use), 'Other use': clean(p.other_use) },
          causes: CAUSE_FIELDS.filter(c => p[c] === 'Cause').map(causeLabel), types: new Set(), features: [], miles: 0, acres: 0 };
        units.set(id, u);
      }
      u.types.add(type); u.features.push(f);
    }));
    units.forEach(u => u.features.forEach(f => {
      const g = f.geometry; if (!g) return;
      if (g.type === 'LineString' || g.type === 'MultiLineString') u.miles += clippedMiles(g);
      else if (g.type === 'Polygon' || g.type === 'MultiPolygon') { try { const ix = turf.intersect(state.boundary, f); if (ix) u.acres += turf.area(ix) / SQM_PER_ACRE; } catch { /* skip */ } }
    }));
    const list = [...units.values()].map(u => Object.assign(u, { typeLabel: [...u.types].map(t => WQ_TYPE[t]).join(' + ') }))
      .sort((a, b) => (b.listed - a.listed) || (b.impaired - a.impaired) || a.name.localeCompare(b.name));
    const impaired = list.filter(u => u.impaired), listed = list.filter(u => u.listed);
    return { list, impaired: impaired.length, listed: listed.length, impairedMiles: impaired.reduce((s, u) => s + u.miles, 0), totalMiles: list.reduce((s, u) => s + u.miles, 0),
      impairedAcres: impaired.reduce((s, u) => s + u.acres, 0), byType: WQ_LAYERS.map(([, t], i) => [t, results[i].feats.length]), capped: results.some(r => r.capped),
      cycles: [...new Set(list.map(u => `${u.state || u.org} ${u.cycle}`))].sort() };
  }

  function wqStyle(u) {
    return u.impaired ? { color: ROJO, weight: 4, opacity: .95, fillColor: ROJO, fillOpacity: .45 }
      : /not assessed/i.test(u.status) ? { color: '#8a8a8a', weight: 2, dashArray: '4 4', fillColor: '#8a8a8a', fillOpacity: .2 }
      : { color: '#8A8635', weight: 2.5, fillColor: '#8A8635', fillOpacity: .3 };
  }
  /** All assessment units on a map (canvas renderer); onPick(unit) on click. Impaired drawn last, on top. */
  function watersRows() {
    if (!waters) return []; const f = readFilters('#wq-filters'); const q = (f.q || '').toLowerCase();
    const na = (u) => /not assessed/i.test(u.status);
    return waters.list.filter(u => (!q || `${u.name} ${u.id}`.toLowerCase().includes(q))
      && (f.status === 'all' || (f.status === 'impaired' && u.impaired) || (f.status === 'listed' && u.listed) || (f.status === 'meets' && !u.impaired && !na(u)) || (f.status === 'na' && na(u) && !u.impaired))
      && (f.type === 'all' || u.types.has(f.type))
      && (f.cause === 'all' || u.causes.includes(f.cause))
      && (f.use === 'all' || /not supporting|impaired|threatened/i.test(u.uses[f.use] || '')));
  }
  let wqMap = null, wqGroup = null;
  function addWaterLayers(m, list, onPick) {
    if (!waters) return null;
    const rend = L.canvas({ padding: .5 });
    (m._swRenderers = m._swRenderers || []).push(rend);
    const group = L.layerGroup().addTo(m);
    list.slice().sort((a, b) => a.impaired - b.impaired).forEach(u => {
      const st = wqStyle(u);
      group.addLayer(L.geoJSON({ type: 'FeatureCollection', features: u.features }, {
        style: () => st, renderer: rend,
        pointToLayer: (f, ll) => L.circleMarker(ll, Object.assign({ renderer: rend, radius: 5, weight: 1.5, fillOpacity: .9 }, st)),
        onEachFeature: (f, lyr) => { lyr.bindTooltip(`<b>${esc(u.name)}</b><br>${esc(u.status)}${u.listed ? ' · 303(d)' : ''}`, { sticky: true }); lyr.on('click', () => onPick && onPick(u)); },
      }));
    });
    return group;
  }
  const yesNo = (b) => (b ? 'Yes' : 'No');
  function waterFields(u) {
    const uses = Object.entries(u.uses).filter(([, v]) => v).map(([k, v]) => [k, v]);
    return [
      ['Assessment unit', `${u.id} · ${u.typeLabel}`], ['Overall status', u.status + (u.category ? ` (IR category ${u.category})` : '')],
      ['Impaired?', yesNo(u.impaired)], ['On 303(d) list?', yesNo(u.listed)], ['Has TMDL / restoration plan?', u.tmdl ? 'TMDL' : u.plan ? 'Alternative plan' : 'No'],
      ...uses, ['Causes of impairment', u.causes.length ? u.causes.join(', ') : '—'],
      ['Inside your boundary', u.miles ? `${fmt(u.miles, 1)} stream miles` : u.acres ? `${fmt(u.acres)} acres` : '—'],
      ['Reported by', `${u.org || u.state} · ${u.cycle} cycle`],
      ['Waterbody report', u.link ? `<a href="${esc(u.link)}" target="_blank" rel="noopener">Open on How's My Waterway →</a>` : '—', true],
    ];
  }
  const WQ_COLS = [
    { k: 'name', label: 'Waterbody', help: 'Assessment unit name, with its identifier, geometry type and a link to EPA’s report for it.', sort: byStr(u => u.name), cell: u => `<div class="v">${esc(u.name)}</div><span class="sub">${esc(u.id)} · ${esc(u.typeLabel)}${u.link ? ` · <a href="${esc(u.link)}" target="_blank" rel="noopener" style="color:var(--rojo)">EPA report</a>` : ''}</span>` },
    { k: 'imp', label: 'Impaired?', help: 'Yes when the overall status is Not Supporting; Not assessed when the state has not evaluated the unit.', desc: true, sort: byNumDesc(u => (u.impaired ? 2 : /not assessed/i.test(u.status) ? 0 : 1)), cell: u => `<span class="chip ${u.impaired ? 'rojo' : /not assessed/i.test(u.status) ? 'ph' : 'paper'}">${/not assessed/i.test(u.status) && !u.impaired ? 'Not assessed' : yesNo(u.impaired)}</span>` },
    { k: 'listed', label: '303(d)?', help: 'On the Clean Water Act section 303(d) list of impaired waters that still need a restoration plan.', desc: true, sort: byNumDesc(u => (u.listed ? 1 : 0)), cell: u => `<span class="chip ${u.listed ? 'terra' : 'paper'}">${yesNo(u.listed)}</span>` },
    { k: 'inside', label: 'Inside your area', help: 'Stream miles or lake acres of the unit that fall inside your boundary.', mono: true, desc: true, sort: byNumDesc(u => (u.miles || u.acres || 0)), cell: u => (u.miles ? `${fmt(u.miles, 1)} mi` : u.acres ? `${fmt(u.acres)} ac` : '—') },
    { k: 'eco', label: 'Ecological use', help: 'Support status of the aquatic-life / ecological designated use.', cell: u => esc(u.uses['Ecological use'] || '—') },
    { k: 'fish', label: 'Fish consumption', help: 'Support status of the fish-consumption use.', cell: u => esc(u.uses['Fish consumption'] || '—') },
    { k: 'rec', label: 'Recreational use', help: 'Support status of the recreation use.', cell: u => esc(u.uses['Recreational use'] || '—') },
  ];
  function renderWaters() {
    const w = waters, n = w.list.length;
    $('#wq-units').textContent = fmt(n); $('#wq-impaired').textContent = fmt(w.impaired); $('#wq-listed').textContent = fmt(w.listed);
    $('#wq-pct-impaired').textContent = n ? `${Math.round(w.impaired / n * 100)}%` : '—'; $('#wq-pct-listed').textContent = n ? `${Math.round(w.listed / n * 100)}%` : '—';
    $('#wq-miles').textContent = fmt(w.impairedMiles); $('#wq-acres').textContent = fmt(w.impairedAcres);
    setSummary('sum-miles', fmt(w.impairedMiles)); updateAreaSummary();
    withRegion(rc => { const a = rc.attains; setRegion('waters', a ? `Across the Southern Waters boundary <b>${pctStr(a.unitsImpaired, a.unitsAssessed)}</b> of the ${fmt(a.unitsAssessed)} assessed stream units are impaired and ${pctStr(a.unitsListed, a.unitsAssessed)} are on the 303(d) list (by stream length: ${pctStr(a.lengthImpaired, a.lengthAssessed)} impaired, ${pctStr(a.lengthListed, a.lengthAssessed)} listed); here <b>${pctStr(w.impaired, n)}</b> of ${fmt(n)} assessed waters are impaired and ${pctStr(w.listed, n)} listed.` : ''); });
    $('#wq-note').textContent = `ATTAINS · ${fmt(n)} assessment units (${w.byType.filter(([, c]) => c).map(([t, c]) => `${fmt(c)} ${t}${c === 1 ? '' : 's'}`).join(', ')}) · reporting cycles ${w.cycles.map(c => c.split(' ').pop()).filter((v, i, arr) => arr.indexOf(v) === i).join(', ')}`;
    const rows = sortRows('wq', watersRows(), WQ_COLS), active = filtersActive('#wq-filters'), shown = shownRows(rows, 'wq');
    $('#wq-preview').innerHTML = previewLine(shown.length, rows.length, n, 'assessed waters', active) + (rows.length && !active ? ', 303(d)-listed and impaired first' : '');
    csvLabel('#btn-waters-csv', rows.length, active);
        $('#wq-rows').innerHTML = tableHtml('wq', WQ_COLS, shown, 'No assessed waters match those filters.'); bindTableSort('#wq-rows', 'wq', renderWaters);
    $('#wq-method').textContent = `This run: ${fmt(n)} assessment units from ${w.byType.map(([t, c]) => `${fmt(c)} ${t} feature${c === 1 ? '' : 's'}`).join(', ')}; ${fmt(w.impairedMiles)} of ${fmt(w.totalMiles)} assessed stream miles inside the boundary are impaired. Reporting cycles: ${w.cycles.join(', ')}.${w.capped ? ` The first ${fmt(WQ_CAP)} features of a layer were downloaded — narrow the area for a complete table.` : ''}`;
    $('#btn-waters-csv').disabled = !rows.length;
    moreButton('#wq-rows', 'wq', rows.length, renderWaters);
    buildAppendixSoon();
  }
  function refreshWaterMap() {
    if (!wqMap || !waters) return;
    if (wqGroup) wqGroup.remove();
    wqGroup = addWaterLayers(wqMap, watersRows(), (u) => openViewer('waters', u));
    snapLater(wqMap, 'waters-well');
  }
  wireFilters('#wq-filters', () => { if (waters) { renderWaters(); refreshWaterMap(); } });
  $('#btn-waters-csv').onclick = () => waters && downloadCsv(filtersActive('#wq-filters') ? 'impaired-waters-filtered.csv' : 'impaired-waters.csv',
    ['Waterbody', 'Assessment unit ID', 'Type', 'State', 'Organization', 'Reporting cycle', 'Overall status', 'IR category', 'Impaired', 'On 303(d) list', 'TMDL', 'Ecological use', 'Fish consumption', 'Recreational use', 'Drinking water use', 'Causes of impairment', 'Stream miles inside boundary', 'Acres inside boundary', 'Report link'],
    watersRows().map(u => [u.name, u.id, u.typeLabel, u.state, u.org, u.cycle, u.status, u.category, yesNo(u.impaired), yesNo(u.listed), yesNo(u.tmdl), u.uses['Ecological use'], u.uses['Fish consumption'], u.uses['Recreational use'], u.uses['Drinking water'], u.causes.join('; '), u.miles ? u.miles.toFixed(2) : '', u.acres ? u.acres.toFixed(1) : '', u.link]));
  $('#btn-waters-png').onclick = () => {
    const url = snapshots['waters-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'impaired-waters-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runWaters(map) {
    setStatus('s-waters', 'loading', null, () => runWaters(map));
    waters = null; wqMap = map; wqGroup = null;
    resetFilters('#wq-filters');
    $$('#wq-stats .n').forEach(el => { el.textContent = '…'; });
    $('#wq-note').textContent = 'Loading ATTAINS…'; $('#wq-preview').textContent = 'Loading…';
    try {
      waters = await loadWaters();
      const causeCounts = {}; waters.list.forEach(u => u.causes.forEach(c => { causeCounts[c] = (causeCounts[c] || 0) + 1; }));
      setSelectOptions('#wq-filters [data-filter="cause"]', 'Any cause of impairment', Object.entries(causeCounts).sort((x, y) => y[1] - x[1]).map(([v, cnt]) => ({ v, label: `${v} (${fmt(cnt)})` })));
      renderWaters();
      setStatus('s-waters', 'done');
      wqGroup = addWaterLayers(map, waters.list, (u) => openViewer('waters', u));
      setTimeout(() => snapshotMap(map, 'waters-well'), 150);
    } catch (err) {
      console.error(err);
      $$('#wq-stats .n').forEach(el => { el.textContent = '##'; });
      setStatus('s-waters', 'error', err.message);
      $('#wq-note').textContent = 'ATTAINS unavailable right now';
      $('#wq-preview').textContent = `Could not load EPA ATTAINS: ${err.message}`;
    }
  }

  // ------------------------------------------------------------------
  // 02a · Organizations — Landscape Partnership directory (points at HQ/office addresses)
  // ------------------------------------------------------------------
  const ORGS = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services/LP_organizations_AI_augmentAddresses/FeatureServer/0';
  const ORG_REACH_MI = 100; // widest 'nearby' radius in the table's scope filter; the map shows the whole directory
  let orgs = null, orgMap = null, orgGroup = null;
  // Agency offices / field staff (points) from the AquaCorridors "Priority Area Layers" group
  const S6 = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services';
  const STATE_ABBR = { Alabama: 'AL', Arkansas: 'AR', Florida: 'FL', Georgia: 'GA', Kentucky: 'KY', Louisiana: 'LA', Mississippi: 'MS', 'North Carolina': 'NC', 'South Carolina': 'SC', Tennessee: 'TN', Virginia: 'VA', 'West Virginia': 'WV', Texas: 'TX', Oklahoma: 'OK', Missouri: 'MO', Maryland: 'MD', Delaware: 'DE', Pennsylvania: 'PA' };
  const AGENCY_LAYERS = [
    { key: 'pfw', url: `${S6}/AquaCorridors_FeatureLayer_PFWStaff_Locations/FeatureServer/0`, org: 'USFWS Partners for Fish and Wildlife', short: 'USFWS PFW staff', type: 'Federal Agency', site: 'https://www.fws.gov/program/partners-fish-and-wildlife', desc: 'U.S. Fish and Wildlife Service program providing technical and financial assistance to private landowners who restore fish and wildlife habitat.',
      fields: 'USER_First,USER_Last_,USER_Posit,USER_Work_,USER_Email,USER_Stree,USER_City_,Match_addr,City,RegionAbbr,USER_State',
      map: p => ({ name: `${clean(p.USER_First)} ${clean(p.USER_Last_)}`.trim(), title: clean(p.USER_Posit), phone: clean(p.USER_Work_), email: clean(p.USER_Email), address: clean(p.USER_Stree) || clean(p.Match_addr), city: clean(p.City) || clean(p.USER_City_), state: clean(p.RegionAbbr) || clean(p.USER_State) }) },
    { key: 'cp', url: `${S6}/AquaCorridors_Shapefile_CP_Staff_Locations/FeatureServer/0`, org: 'USFWS Coastal Program', short: 'USFWS Coastal Program staff', type: 'Federal Agency', site: 'https://www.fws.gov/program/coastal', desc: 'U.S. Fish and Wildlife Service program conserving coastal habitats through voluntary partnerships with landowners and communities.',
      fields: 'USER_Name,USER_First,USER_Last_,USER_Title,USER_Phone,USER_Email,USER_Addre,Match_addr,City,RegionAbbr',
      map: p => ({ name: clean(p.USER_Name) || `${clean(p.USER_First)} ${clean(p.USER_Last_)}`.trim(), title: clean(p.USER_Title), phone: clean(p.USER_Phone), email: clean(p.USER_Email), address: clean(p.USER_Addre) || clean(p.Match_addr), city: clean(p.City), state: clean(p.RegionAbbr) }) },
    { key: 'nrcs', url: `${S6}/NRCS_State_Offices/FeatureServer/0`, org: 'USDA Natural Resources Conservation Service', short: 'NRCS state office', type: 'Federal Agency', site: 'https://www.nrcs.usda.gov/conservation-basics/conservation-by-state', statewide: true, desc: 'USDA agency delivering voluntary conservation assistance on private working lands; the state office is the entry point for programs such as EQIP and Working Lands for Wildlife.',
      fields: 'State,Address', map: p => ({ name: '', office: `USDA NRCS ${clean(p.State)} State Office`, title: 'State office', phone: '', email: '', address: clean(p.Address), city: '', state: STATE_ABBR[clean(p.State)] || '' }) },
  ];
  /** States the boundary touches (from the species HUC-8 records) — used to keep each state's NRCS office in the list. */
  const boundaryStates = () => new Set((state.report ? state.report.watersheds : []).flatMap(w => String(w.states || '').split(',').map(s => s.trim()).filter(Boolean)));
  async function loadAgencyOffices(bufferedGeom, edges) {
    if (speciesReady) await Promise.race([speciesReady.catch(() => null), new Promise(r => setTimeout(r, 25000))]); // states come from the HUC-8 records
    const states = boundaryStates(); const out = []; const failed = [];
    await Promise.all(AGENCY_LAYERS.map(async (L) => {
      try {
        const params = { where: '1=1', outFields: L.fields, returnGeometry: 'true', outSR: '4326', resultRecordCount: '1000', f: 'geojson' }; // every office in the layer — the map shows them all
        const gj = await arcgis('query', params, L.url);
        (gj.features || []).filter(f => f.geometry).forEach((f, i) => {
          const m = L.map(f.properties || {}); const pt = turf.point(f.geometry.coordinates);
          const miles = milesToBoundary(pt, state.boundary, edges);
          const statewide = !!L.statewide && states.has(m.state);
          out.push({ id: `${L.key}-${f.properties.OBJECTID ?? f.properties.FID ?? i}`, kind: 'agency', source: L.short, agency: L.org, type: L.type,
            name: m.office || L.org, contact: m.name || '', contactTitle: m.name ? m.title : '', description: L.desc, address: m.address, city: m.city, state: m.state, zip: '',
            phone: m.phone, email: m.email.replace(/\s+/g, ''), url: L.site, image: '', profile: '', aiAddress: false, statewide,
            inside: miles === 0, miles, lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0] });
        });
      } catch (err) { console.warn(`${L.short} unavailable`, err); failed.push(L.short); }
    }));
    return { list: out, failed };
  }

  /** Miles from a point to the boundary (0 when inside). */
  function milesToBoundary(pt, boundary, edges) {
    if (turf.booleanPointInPolygon(pt, boundary)) return 0;
    let best = Infinity;
    edges.forEach(l => { const d = turf.pointToLineDistance(pt, l, { units: 'miles' }); if (d < best) best = d; });
    return best;
  }
  async function loadOrgs() {
    // the whole published directory (a few hundred points), paged in case it outgrows the service's 1,000-record limit
    const gj = { features: [] };
    for (let off = 0; off < 5000; off += 1000) {
      const page = await arcgis('query', { where: "review_state='published' OR review_state IS NULL", outFields: 'ObjectId,id,relative_path,title,description,phone,email,address,addressTwo,city,stateProv,postalCode,orgURL,image_url,AI_searched,source_AI_search,confidence_AI_search', returnGeometry: 'true', outSR: '4326', resultOffset: String(off), resultRecordCount: '1000', f: 'geojson' }, ORGS);
      gj.features.push(...(page.features || [])); if ((page.features || []).length < 1000) break;
    }
    const lines = turf.polygonToLine(state.boundary); const edges = lines.type === 'FeatureCollection' ? lines.features : [lines];
    const agency = await loadAgencyOffices(null, edges);
    const list = (gj.features || []).filter(f => f.geometry).map(f => {
      const p = f.properties; const pt = turf.point(f.geometry.coordinates);
      const miles = milesToBoundary(pt, state.boundary, edges);
      return {
        id: p.id || p.ObjectId, kind: 'org', source: 'Landscape Partnership directory', name: clean(p.title) || 'Unnamed organization', description: clean(p.description),
        address: [clean(p.address), clean(p.addressTwo)].filter(Boolean).join(', '), city: clean(p.city), state: clean(p.stateProv), zip: clean(p.postalCode).replace(/^[A-Z]{2}\s+/, ''),
        phone: clean(p.phone), email: clean(p.email), url: clean(p.orgURL), image: clean(p.image_url),
        profile: p.relative_path ? `https://www.landscapepartnership.org/${String(p.relative_path).replace(/^\/+/, '')}` : '',
        aiAddress: String(p.AI_searched).toUpperCase() === 'TRUE', aiSource: clean(p.source_AI_search), aiConfidence: clean(p.confidence_AI_search),
        inside: miles === 0, miles, lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0],
      };
    }).concat(agency.list).sort((a, b) => a.miles - b.miles || a.name.localeCompare(b.name));
    const orgOnly = list.filter(o => o.kind === 'org');
    return { list, inside: orgOnly.filter(o => o.inside).length, within50: orgOnly.filter(o => o.miles <= 50).length,
      agencyNear: list.filter(o => o.kind === 'agency' && (o.miles <= 50 || o.statewide)).length, agencyFailed: agency.failed };
  }
  /** Table rows; with ignoreScope the distance filter is skipped (the map draws everything that matches the other filters). */
  function orgRows(ignoreScope) {
    if (!orgs) return []; const f = readFilters('#org-filters'); const q = (f.q || '').toLowerCase();
    return orgs.list.filter(o => (!q || `${o.name} ${o.contact || ''} ${o.city} ${o.description} ${o.source}`.toLowerCase().includes(q))
      && (f.kind === 'all' || o.kind === f.kind)
      && (ignoreScope || f.scope === 'all' || o.statewide || (f.scope === 'inside' ? o.inside : o.miles <= Number(f.scope)))
      && (f.state === 'all' || o.state === f.state));
  }
  /** "Potential point of contact" — hedged because staff assignments in the agency layers change over time. */
  const contactCell = (o) => o.kind === 'agency'
    ? (o.contact ? `<b>${esc(o.contact)}</b>${o.contactTitle ? `, ${esc(o.contactTitle)}` : ''}${o.phone || o.email ? `<br>${[o.phone ? esc(o.phone) : '', o.email ? `<a href="mailto:${esc(o.email)}">${esc(o.email)}</a>` : ''].filter(Boolean).join(' · ')}` : ''}<div class="mono" style="font-size:10px;opacity:.85;margin-top:3px">As listed in the agency layer · assignments change, confirm before reaching out</div>` : 'Contact the state office<div class="mono" style="font-size:10px;opacity:.85;margin-top:3px">No named contact in the agency layer</div>')
    : (o.phone || o.email ? [o.phone ? esc(o.phone) : '', o.email ? `<a href="mailto:${esc(o.email)}">${esc(o.email)}</a>` : ''].filter(Boolean).join(' · ') : '—');
  const contactText = (o) => o.kind === 'agency' ? [o.contact, o.contactTitle].filter(Boolean).join(', ') || 'Contact the state office' : '';
  const orgPlace = (o) => /\b[A-Z]{2}\s*\d{5}/.test(o.address || '') ? o.address : [o.address, [o.city, o.state].filter(Boolean).join(', '), o.zip].filter(Boolean).join(' · '); // agency addresses already carry city/state/zip
  /** Points for the table rows (inside = red, nearby = olive, agency = terra) over faint dots for every other office in the directory. */
  function addOrgLayers(m, list, onPick, rest = []) {
    if (!orgs) return null;
    const group = L.layerGroup().addTo(m);
    rest.forEach(o => {
      const mk = L.circleMarker([o.lat, o.lng], { radius: 3.5, color: CREAM, weight: 1, fillColor: INK, fillOpacity: .4, opacity: .8 });
      mk.bindTooltip(`<b>${esc(o.name)}</b>${o.kind === 'agency' ? `<br>${esc(o.source)}` : ''}<br>${esc([o.city, o.state].filter(Boolean).join(', '))} · ${fmt(o.miles)} mi from your boundary`);
      mk.on('click', () => onPick && onPick(o)); group.addLayer(mk);
    });
    list.slice().sort((a, b) => b.miles - a.miles).forEach(o => {
      const mk = L.circleMarker([o.lat, o.lng], { radius: o.inside ? 7 : 5.5, color: CREAM, weight: 1.5, fillColor: o.kind === 'agency' ? '#D06224' : o.inside ? ROJO : '#8A8635', fillOpacity: .95 });
      mk.bindTooltip(`<b>${esc(o.name)}</b>${o.kind === 'agency' ? `<br>${esc(o.source)}` : ''}<br>${esc([o.city, o.state].filter(Boolean).join(', '))}${o.inside ? '' : ` · ${fmt(o.miles)} mi from your boundary`}`);
      mk.on('click', () => onPick && onPick(o)); group.addLayer(mk);
    });
    return group;
  }
  function orgFields(o) {
    return [
      [o.kind === 'agency' ? 'Agency' : 'Organization', o.name, false, 'lead'], ...(o.kind === 'agency' ? [['Potential point of contact', contactCell(o), true], ['Source', `${o.source} · ${o.type}`]] : []), ['Address', orgPlace(o) || '—'], ['Location vs your boundary', o.inside ? 'Inside' : `${fmt(o.miles)} miles away${o.statewide ? ' · serves your state' : ''}`],
      ['Description', o.description || '—'], ['Phone', o.phone || '—'], ['Email', o.email ? `<a href="mailto:${esc(o.email)}">${esc(o.email)}</a>` : '—', true],
      ['Website', o.url ? `<a href="${esc(o.url)}" target="_blank" rel="noopener">${esc(o.url.replace(/^https?:\/\//, ''))}</a>` : '—', true],
      ['Landscape Partnership profile', o.profile ? `<a href="${esc(o.profile)}" target="_blank" rel="noopener">Open profile →</a>` : '—', true],
      ...(o.aiAddress ? [['Address source', `AI-assisted lookup${o.aiSource ? ` (${o.aiSource})` : ''}${o.aiConfidence ? ` · confidence ${o.aiConfidence}` : ''}`]] : []),
    ];
  }
  const ORG_COLS = [
    { k: 'name', label: 'Organization / Agency', help: 'Directory title, or the agency name for staff and office rows; the line beneath gives the source layer, the distance to your boundary and a link to the Landscape Partnership profile.', sort: byStr(r => r.name),
      cell: r => `<div class="v">${esc(r.name)}</div><span class="sub">${r.kind === 'agency' ? `${esc(r.source)} · ` : ''}${r.inside ? 'Inside your boundary' : r.statewide ? 'Serves your state' : `${fmt(r.miles)} mi away`}${r.profile ? ` · <a href="${esc(r.profile)}" target="_blank" rel="noopener" style="color:var(--rojo)">LP profile</a>` : ''}</span>` },
    { k: 'dist', label: 'Distance', help: 'Miles from the nearest edge of your boundary (0 = inside). NRCS state offices are listed for every state your area touches, whatever the distance.', mono: true, sort: (a, b) => a.miles - b.miles, cell: r => (r.inside ? 'Inside' : `${fmt(r.miles)} mi${r.statewide ? ' · serves your state' : ''}`) },
    { k: 'desc', label: 'Description of org', help: 'Directory description, or the agency programme description.', cell: r => `<div class="clamp3">${esc(r.description || '—')}</div>` },
    { k: 'contact', label: 'Potential point of contact', help: 'Staff member, title, phone and email as listed in the agency layer when it was published — assignments change, so confirm before reaching out. Directory rows show the organization’s phone and email.', cell: r => contactCell(r) },
    { k: 'addr', label: 'Address', help: 'Street, city, state and postal code from the directory or agency layer.', cell: r => esc(orgPlace(r) || '—') },
    { k: 'web', label: 'Website URL', help: 'Website or programme page.', cell: r => linkCell(r.url) },
    { k: 'shot', label: 'Website preview', help: 'Screenshot of the organization’s website as captured for the Landscape Partnership directory.', cell: r => (r.image ? `<img class="org-shot" data-photo="${esc(r.image)}" data-max="240" alt="Website preview for ${esc(r.name)}" onerror="this.closest('td').textContent='—'">` : '—') },
  ];
  function renderOrgs() {
    const o = orgs, rows = sortRows('org', orgRows(), ORG_COLS), active = filtersActive('#org-filters'), shown = shownRows(rows, 'org');
    $('#org-inside').textContent = fmt(o.inside); $('#org-near').textContent = fmt(o.within50); $('#org-agency').textContent = fmt(o.agencyNear);
    setSummary('sum-orgs', fmt(o.within50)); setSummary('pv-orgs', fmt(o.within50 + o.agencyNear));
    // NRCS state office contact for every state the boundary touches (statewide rows), nearest first
    const nrcs = o.list.filter(x => x.kind === 'agency' && x.source === 'NRCS state office' && (x.statewide || x.inside)).sort((a, b) => a.miles - b.miles);
    $('#nrcs-contact').hidden = !nrcs.length;
    $('#nrcs-contact-body').innerHTML = nrcs.map(x => `<div><div class="nm">${esc(x.name)}</div><div>${esc(x.address || '')}</div><div class="mono">${x.inside ? 'Inside your boundary' : `${fmt(x.miles)} mi away · serves your state`} · <a href="${esc(x.url)}" target="_blank" rel="noopener">nrcs.usda.gov →</a></div></div>`).join('');
    $('#org-note').textContent = `LP directory · ${fmt(o.inside)} inside · ${fmt(o.within50)} within 50 mi · ${fmt(o.agencyNear)} agency offices${o.agencyFailed.length ? ` (${o.agencyFailed.join(', ')} unavailable)` : ''}`;
    $('#org-note').dataset.stamped = ''; $('#org-method').dataset.stamped = ''; stampSource('#org-note', '#org-method', [ORGS].concat(AGENCY_LAYERS.map(L => L.url)), 'Directory + agency layers');
    const f = readFilters('#org-filters'); const noun = f.kind === 'agency' ? 'agency offices' : f.kind === 'org' ? 'organizations' : 'organizations and agency offices'; const what = f.scope === 'inside' ? `${noun} inside your boundary` : f.scope === 'all' ? `${noun} in the directory` : `${noun} inside or within ${f.scope} miles`;
    $('#org-preview').innerHTML = previewLine(shown.length, rows.length, o.list.length, what, active && (f.q || f.state !== 'all')) + (rows.length ? ', nearest first' : '');
    moreButton('#org-rows', 'org', rows.length, renderOrgs);
    withRegion(rc => setRegion('orgs', rc.orgs ? `The Landscape Partnership directory lists <b>${fmt(rc.orgs.inRegion)}</b> organizations inside the Southern Waters boundary; <b>${fmt(o.within50)}</b> of them (${pctStr(o.within50, rc.orgs.inRegion)}) are within 50 miles of your area, ${fmt(o.inside)} inside it.` : ''));
    csvLabel('#btn-orgs-csv', rows.length, active);
        $('#org-rows').innerHTML = tableHtml('org', ORG_COLS, shown, 'No organizations match those filters.'); bindTableSort('#org-rows', 'org', renderOrgs);
    fillPhotos('#org-rows'); tableA11y('#org-rows', 'Organizations and agency offices'); // after the rows exist
    const nAg = o.list.filter(x => x.kind === 'agency').length;
    $('#org-method').textContent = `This run: the map shows the whole directory — ${fmt(o.list.length - nAg)} organizations (${fmt(o.inside)} inside your boundary, ${fmt(o.within50)} within 50 miles) and ${fmt(nAg)} agency offices or staff locations; the table lists those inside or within the distance you pick. Distances are from each office address to the nearest edge of your boundary. Points of contact are the staff named in the agency layers when they were published; assignments change, so treat them as a starting point and confirm before reaching out.${o.agencyFailed.length ? ` Unavailable this run: ${o.agencyFailed.join(', ')}.` : ''}`;
    $('#btn-orgs-csv').disabled = !rows.length;
    buildAppendixSoon();
  }
  function refreshOrgMap() {
    if (!orgMap || !orgs) return;
    if (orgGroup) orgGroup.remove();
    const rows = orgRows(); orgGroup = addOrgLayers(orgMap, rows, (o) => openViewer('orgs', o), orgRows(true).filter(o => !rows.includes(o)));
    fitArea(orgMap); // same framing as every other area map — the whole directory is drawn, nearby offices fall in the margin
    snapLater(orgMap, 'orgs-well');
  }
  wireFilters('#org-filters', () => { if (orgs) { renderOrgs(); refreshOrgMap(); } });
  $('#btn-orgs-csv').onclick = () => orgs && downloadCsv(filtersActive('#org-filters') ? 'organizations-filtered.csv' : 'organizations.csv',
    ['Name', 'Kind', 'Potential point of contact', 'Source', 'Address', 'City', 'State', 'Postal code', 'Inside boundary', 'Miles from boundary', 'Description', 'Phone', 'Email', 'Website', 'Landscape Partnership profile', 'Address via AI lookup', 'AI source', 'AI confidence', 'Latitude', 'Longitude'],
    orgRows().map(o => [o.name, o.kind === 'agency' ? 'Agency office' : 'Organization', contactText(o), o.source, o.address, o.city, o.state, o.zip, o.inside ? 'Yes' : 'No', o.miles.toFixed(1), o.description, o.phone, o.email, o.url, o.profile, o.aiAddress ? 'Yes' : 'No', o.aiSource || '', o.aiConfidence || '', o.lat.toFixed(5), o.lng.toFixed(5)]));
  $('#btn-orgs-png').onclick = () => {
    const url = snapshots['orgs-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'organizations-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runOrgs(map) {
    setStatus('sub-orgs', 'loading', null, () => runOrgs(map));
    orgs = null; orgMap = map; orgGroup = null;
    resetFilters('#org-filters'); $('#org-filters [data-filter="scope"]').value = '50';
    $('#org-inside').textContent = '…'; $('#org-near').textContent = '…'; $('#org-agency').textContent = '…'; $('#nrcs-contact').hidden = true; $('#org-note').textContent = 'Loading organizations…'; $('#org-preview').textContent = 'Loading…';
    try {
      orgs = await loadOrgs();
      const states = {}; orgs.list.forEach(o => { if (o.state) states[o.state] = (states[o.state] || 0) + 1; });
      setSelectOptions('#org-filters [data-filter="state"]', 'Any state', Object.entries(states).sort((x, y) => y[1] - x[1]).map(([v, n]) => ({ v, label: `${v} (${n})` })));
      renderOrgs(); refreshOrgMap();
      setStatus('sub-orgs', 'done');
    } catch (err) {
      console.error(err);
      setStatus('sub-orgs', 'error', err.message);
      $('#org-inside').textContent = '##'; $('#org-near').textContent = '##'; $('#org-agency').textContent = '##';
      $('#org-note').textContent = 'Organization directory unavailable right now';
      $('#org-preview').textContent = `Could not load the Landscape Partnership directory: ${err.message}`;
    }
  }

  // ------------------------------------------------------------------
  // 02c · Partner priority areas — polygon layers from the AquaCorridors "Priority Area Layers" group
  // ------------------------------------------------------------------
  const PRIORITY_LAYERS = [
    { key: 'usfs', color: '#8A8635', label: 'USFS priority watersheds', url: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_PriorityWatersheds_01/MapServer/0',
      org: 'U.S. Forest Service', type: 'Federal Agency', orgDesc: 'Federal land-management agency stewarding 193 million acres of national forests and grasslands.',
      layerDesc: 'Priority watersheds chosen under the Watershed Condition Framework for restoration work on national forest lands, with the condition class and the reason each was selected.',
      site: 'https://www.fs.usda.gov/managing-land/water/watershed-condition-framework', nameField: 'watershed_name', fields: 'watershed_name,forest_name,watershed_condition_fs_area,year_priority_identified,principal_reason', extra: p => [p.forest_name, p.watershed_condition_fs_area ? `condition: ${p.watershed_condition_fs_area}` : '', p.year_priority_identified ? `priority since ${p.year_priority_identified}` : ''] },
    { key: 'sarp', color: '#AE431E', label: 'SARP Conservation Opportunity Areas', url: 'https://services9.arcgis.com/jLLC0IEfFUxV8nml/arcgis/rest/services/SARP_COA/FeatureServer/0',
      org: 'Southeast Aquatic Resources Partnership (SARP)', type: 'Local Non-Profit', orgDesc: 'Regional fish habitat partnership of state, federal, tribal and non-profit partners conserving aquatic resources across 14 southeastern states.',
      layerDesc: 'Conservation Opportunity Areas: HUC-8 watersheds SARP prioritizes for aquatic habitat conservation and barrier removal.',
      site: 'https://southeastaquatics.net', nameField: 'name', fields: 'name,huc8,states,HUC_Name', extra: p => [p.huc8 ? `HUC-8 ${p.huc8}` : '', p.states] },
    { key: 'acf', color: '#D06224', label: 'NRCS Aquatic Connectivity Framework priority areas', url: `${S6}/ACF_PA_25/FeatureServer/0`,
      org: 'USDA Natural Resources Conservation Service', type: 'Federal Agency', orgDesc: 'USDA agency delivering voluntary conservation assistance on private working lands, including the Working Lands for Wildlife partnership.',
      layerDesc: 'Priority HUC-8 watersheds (2025) for the Working Lands for Wildlife Aquatic Connectivity Framework, where NRCS targets protection and restoration practices for at-risk aquatic species.',
      site: 'https://www.nrcs.usda.gov/programs-initiatives/working-lands-for-wildlife', nameField: 'name', fields: 'name,huc8,states,Priority,Species,NRCS_prote,NRCS_resto', extra: p => [p.huc8 ? `HUC-8 ${p.huc8}` : '', clean(p.Priority) ? `priority: ${p.Priority}` : '', clean(p.Species) ? `species: ${p.Species}` : ''] },
    { key: 'nwqi', color: '#D06224', label: 'NRCS NWQI planning watersheds', url: 'https://services.arcgis.com/cJ9YHowT8TU7DUyn/arcgis/rest/services/FY2024_NWQI_Planning_shp/FeatureServer/0',
      org: 'USDA Natural Resources Conservation Service', type: 'Federal Agency', orgDesc: 'USDA agency delivering voluntary conservation assistance on private working lands.',
      layerDesc: 'National Water Quality Initiative planning watersheds (HUC-12, FY2024) selected for focused water-quality assistance to producers.',
      site: 'https://www.nrcs.usda.gov/programs-initiatives/nwqi-national-water-quality-initiative', nameField: 'name', fields: 'name,huc12,states', extra: p => [p.huc12 ? `HUC-12 ${p.huc12}` : '', p.states] },
    { key: 'pfw', color: '#2E1E12', label: 'USFWS Partners for Fish and Wildlife focus areas', url: `${S6}/PFW_FocusAreas_Gen4_AquaticConnectivityFramework_States/FeatureServer/0`,
      org: 'U.S. Fish and Wildlife Service · Partners for Fish and Wildlife', type: 'Federal Agency', orgDesc: 'USFWS program providing technical and financial assistance to private landowners who restore fish and wildlife habitat.',
      layerDesc: 'Partners for Fish and Wildlife focus areas (generation 4) in Aquatic Connectivity Framework states.',
      site: 'https://www.fws.gov/program/partners-fish-and-wildlife', nameField: 'name', fields: 'name,program_ty', extra: p => [p.program_ty] },
    { key: 'cp', color: '#EAC891', light: true, label: 'USFWS Coastal Program focus areas', url: `${S6}/AquaCorridors_FeatureLayer_CoastalProgram_FocusAreas/FeatureServer/0`,
      org: 'U.S. Fish and Wildlife Service · Coastal Program', type: 'Federal Agency', orgDesc: 'USFWS program conserving coastal habitats through voluntary partnerships with landowners and communities.',
      layerDesc: 'Coastal Program focus areas.', site: 'https://www.fws.gov/program/coastal', nameField: 'name', fields: 'name,program_ty', extra: p => [p.program_ty] },
    { key: 'sentinel', color: '#CFCB99', light: true, label: 'Sentinel Landscapes', url: 'https://services1.arcgis.com/0FfRGMN1s8OZevff/arcgis/rest/services/Sentinel_Landscapes/FeatureServer/0', restricted: true,
      org: 'Sentinel Landscapes Partnership (USDA · DoD · DOI)', type: 'Federal Agency', orgDesc: 'Federal partnership advancing conservation, working lands and national-defense priorities around military installations and ranges.',
      layerDesc: 'Designated Sentinel Landscapes.', site: 'https://sentinellandscapes.org', nameField: 'name', fields: '*', extra: () => [] },
  ];
  /** Map colours are the app palette (olive, rojo, terra, ink, sunset, light olive), one per organization, drawn semi-transparent. */
  const paFill = (L) => (L.light ? .55 : .32), paFillHi = (L) => (L.light ? .75 : .5);
  /** Unique organizations among the given layer rows, in row order, with feature counts — drives the legends. */
  const priorityOrgs = (rows) => { const out = []; rows.forEach(r => { let o = out.find(x => x.org === r.L.org); if (!o) { o = { org: r.L.org, color: r.L.color, layers: 0, features: 0 }; out.push(o); } o.layers++; o.features += r.features.length; }); return out; };
  const orgLegend = (rows) => priorityOrgs(rows).map(o => `<div><span class="sw-sq" style="background:${o.color}"></span>${esc(o.org)}${o.features ? ` (${o.features})` : ''}</div>`).join('');
  let priority = null, priorityMap = null, priorityGroup = null;
  let paOn = null;            // keys of the layers switched on (default: those overlapping the area)
  let viewerPaDraw = null;    // redraws the explorer map when a toggle changes while it is open
  /** The whole layer around the area: everything inside an envelope three boundary-widths wide, lightly simplified. */
  async function loadPriorityContext(p) {
    const bb = turf.bbox(state.boundary); const w = Math.max(bb[2] - bb[0], .3), h = Math.max(bb[3] - bb[1], .3);
    const env = { xmin: bb[0] - w * 1.5, ymin: bb[1] - h * 1.5, xmax: bb[2] + w * 1.5, ymax: bb[3] + h * 1.5, spatialReference: { wkid: 4326 } };
    await Promise.all(p.layers.map(async (row) => {
      const L = row.L; if (row.status !== 'ok') return;
      const have = new Set(row.features.map(f => f.feature.id ?? f.name));
      const params = { where: '1=1', geometry: JSON.stringify(env), geometryType: 'esriGeometryEnvelope', inSR: '4326', spatialRel: 'esriSpatialRelIntersects', outFields: L.fields, returnGeometry: 'true', outSR: '4326', geometryPrecision: '3', maxAllowableOffset: '0.005', resultRecordCount: '1000' };
      try {
        let feats = [];
        try { feats = (await arcgis('query', Object.assign({ f: 'geojson' }, params), L.url, { timeoutMs: 30000 })).features || []; }
        catch { const j = await arcgis('query', Object.assign({ f: 'json' }, params), L.url, { timeoutMs: 30000 }); feats = (j.features || []).filter(f => f.geometry && f.geometry.rings).map(f => ({ type: 'Feature', id: f.attributes.OBJECTID ?? f.attributes.FID, properties: f.attributes, geometry: esriRingsToGeoJSON(f.geometry.rings) })); }
        row.context = feats.filter(f => f.geometry).map(f => { const pr = f.properties || {}; return { name: clean(pr[L.nameField]) || 'Unnamed area', extra: (L.extra(pr) || []).map(clean).filter(Boolean), acres: 0, context: true, feature: f }; })
          .filter(f => !have.has(f.feature.id ?? f.name));
      } catch (err) { console.warn(`${L.label} context failed`, err); row.context = []; }
    }));
  }
  /** One toggle per partner layer — the same control sits above the table and in the explorer; the map, table and explorer follow it. */
  function paTogglesHtml() {
    if (!priority) return '';
    return priority.layers.map(r => { const k = r.L.key, on = paOn && paOn.has(k), off = r.status !== 'ok';
      const note = r.status === 'restricted' ? 'sign-in required' : r.status === 'error' ? 'unavailable' : r.features.length ? `${r.features.length} inside` : 'none inside';
      return `<label class="tog${on ? ' on' : ''}${off ? ' off' : ''}"><input type="checkbox" data-pa="${k}"${on ? ' checked' : ''}${off ? ' disabled' : ''}><span class="sw-sq" style="background:${r.L.color}"></span><span>${esc(r.L.label)}</span><span class="mono">${note}</span></label>`; }).join('');
  }
  function syncPaToggles() { $$('input[data-pa]').forEach(i => { i.checked = !!(paOn && paOn.has(i.dataset.pa)); i.closest('.tog').classList.toggle('on', i.checked); }); }
  document.addEventListener('change', (e) => {
    const i = e.target; if (!i.matches || !i.matches('input[data-pa]') || !priority) return;
    paOn = paOn || new Set(); i.checked ? paOn.add(i.dataset.pa) : paOn.delete(i.dataset.pa);
    syncPaToggles(); renderPriority(); refreshPriorityMap(); if (viewerPaDraw) viewerPaDraw();
  });
  /** Esri JSON polygon → GeoJSON (clockwise rings are outers, counter-clockwise are holes). */
  function esriRingsToGeoJSON(rings) {
    const polys = [];
    rings.forEach(r => { const ring = r.slice(); if (ring.length < 4) return; const cw = turf.booleanClockwise(ring); if (cw || !polys.length) polys.push([ring]); else polys[polys.length - 1].push(ring); });
    return polys.length === 1 ? { type: 'Polygon', coordinates: polys[0] } : { type: 'MultiPolygon', coordinates: polys };
  }
  async function loadPriority() {
    const acresTotal = turf.area(state.boundary) / SQM_PER_ACRE;
    const spatial = { where: '1=1', geometry: esriPolygon(state.boundary.geometry), geometryType: 'esriGeometryPolygon', inSR: '4326', spatialRel: 'esriSpatialRelIntersects' };
    const layers = await Promise.all(PRIORITY_LAYERS.map(async (L) => {
      const row = { L, features: [], acres: 0, status: 'ok', error: null };
      if (L.restricted) { row.status = 'restricted'; return row; }
      try {
        let feats = [];
        try {
          const gj = await arcgis('query', Object.assign({ outFields: L.fields, returnGeometry: 'true', outSR: '4326', geometryPrecision: '4', maxAllowableOffset: '0.002', resultRecordCount: '500', f: 'geojson' }, spatial), L.url, { timeoutMs: 30000 });
          feats = gj.features || [];
        } catch (e1) { // some MapServers don't speak geojson — fall back to Esri JSON
          const j = await arcgis('query', Object.assign({ outFields: L.fields, returnGeometry: 'true', outSR: '4326', geometryPrecision: '4', maxAllowableOffset: '0.002', resultRecordCount: '500', f: 'json' }, spatial), L.url, { timeoutMs: 30000 });
          feats = (j.features || []).filter(f => f.geometry && f.geometry.rings).map(f => ({ type: 'Feature', properties: f.attributes, geometry: esriRingsToGeoJSON(f.geometry.rings) }));
        }
        row.features = feats.filter(f => f.geometry).map(f => {
          const p = f.properties || {}; let acres = 0;
          try { const ix = turf.intersect(state.boundary, f); if (ix) acres = turf.area(ix) / SQM_PER_ACRE; } catch { acres = 0; }
          return { name: clean(p[L.nameField]) || 'Unnamed area', extra: (L.extra(p) || []).map(clean).filter(Boolean), acres, feature: f };
        }).sort((x, y) => y.acres - x.acres);
        row.acres = row.features.reduce((s, f) => s + f.acres, 0);
      } catch (err) { console.warn(`${L.label} failed`, err); row.status = 'error'; row.error = err.message; }
      return row;
    }));
    let union = null;
    layers.forEach(r => r.features.forEach(f => { try { const ix = turf.intersect(state.boundary, f.feature); if (!ix) return; union = union ? (turf.union(union, ix) || union) : ix; } catch { /* skip */ } }));
    const coveredAcres = union ? turf.area(union) / SQM_PER_ACRE : 0;
    const overlapping = layers.filter(r => r.features.length);
    return { layers, overlapping, acresTotal, coveredAcres, areas: overlapping.reduce((s, r) => s + r.features.length, 0), failed: layers.filter(r => r.status === 'error').map(r => r.L.label) };
  }
  function priorityRows() {
    if (!priority) return []; const f = readFilters('#pa-filters'); const q = (f.q || '').toLowerCase();
    return priority.layers.filter(r => (paOn ? paOn.has(r.L.key) : r.features.length) && (f.type === 'all' || r.L.type === f.type)
      && (!q || `${r.L.org} ${r.L.label} ${r.L.layerDesc} ${r.features.map(x => x.name).join(' ')}`.toLowerCase().includes(q)));
  }
  const typeChipPA = (t) => `<span class="chip ${({ 'Federal Agency': 'terra', 'State Agency': 'rojo', 'Chapter/Branch of NGO': 'sunset', 'Local Non-Profit': 'yes', 'Academic': 'paper', 'Private': 'paper' })[t] || 'paper'}">${esc(t)}</span>`;
  function addPriorityLayers(m, rows, onPick) {
    const group = L.layerGroup().addTo(m);
    const sorted = rows.slice().sort((x, y) => y.acres - x.acres);
    // the rest of each layer first (lighter), then the areas that touch the boundary on top
    sorted.forEach(r => (r.context || []).forEach(f => {
      group.addLayer(L.geoJSON(f.feature, { style: { color: r.L.color, weight: 1.2, opacity: .7, fillColor: r.L.color, fillOpacity: paFill(r.L) * .4 },
        onEachFeature: (_, lyr) => { lyr.bindTooltip(`<b>${esc(f.name)}</b><br>${esc(r.L.label)} · outside your boundary`, { sticky: true }); lyr.on('click', () => onPick && onPick(r, f)); lyr.on('mouseover', () => lyr.setStyle({ weight: 2.5, fillOpacity: paFill(r.L) })); lyr.on('mouseout', () => lyr.setStyle({ weight: 1.2, fillOpacity: paFill(r.L) * .4 })); } }));
    }));
    sorted.forEach(r => r.features.forEach(f => {
      group.addLayer(L.geoJSON(f.feature, { style: { color: r.L.color, weight: 2, opacity: .85, fillColor: r.L.color, fillOpacity: paFill(r.L) },
        onEachFeature: (_, lyr) => { lyr.bindTooltip(`<b>${esc(f.name)}</b><br>${esc(r.L.label)}${f.acres ? ` · ${fmt(f.acres)} acres inside` : ''}`, { sticky: true }); lyr.on('click', () => onPick && onPick(r, f)); lyr.on('mouseover', () => lyr.setStyle({ weight: 3.5, fillOpacity: paFillHi(r.L) })); lyr.on('mouseout', () => lyr.setStyle({ weight: 2, fillOpacity: paFill(r.L) })); } }));
    }));
    return group;
  }
  function priorityFields(r, f) {
    const pct = priority && priority.acresTotal ? Math.round((f ? f.acres : r.acres) / priority.acresTotal * 100) : 0;
    return [
      ['Organization', r.L.org, false, 'lead'],
      ...(f ? [['Priority area', f.name], ['Inside your boundary', f.context ? 'No — this area lies outside your boundary' : `${fmt(f.acres)} acres · ${pct}% of your area`]] : []),
      ['Type', r.L.type], ['Description of org', r.L.orgDesc], ['Description of priority layer', `${r.L.label}: ${r.L.layerDesc}`],
      ['In your area', r.features.length ? `${r.features.length} area${r.features.length === 1 ? '' : 's'} · ${fmt(r.acres)} acres` : 'No areas inside your boundary'],
      ['Website', `<a href="${esc(r.L.site)}" target="_blank" rel="noopener">${esc(r.L.site.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>`, true],
      ['Layer', `<a href="${esc(r.L.url)}" target="_blank" rel="noopener">ArcGIS service →</a>`, true],
    ];
  }
  const PA_COLS = [
    { k: 'org', label: 'Organization', help: 'Organization behind the layer, with the layer name and its colour on the map.', sort: byStr(r => r.L.org), cell: r => `<div class="v">${esc(r.L.org)}</div><span class="sub"><span class="sw-sq" style="display:inline-block;width:9px;height:9px;border-radius:2px;background:${r.L.color};vertical-align:middle;margin-right:4px"></span>${esc(r.L.label)}</span>` },
    { k: 'type', label: 'Type', help: 'Federal Agency, State Agency, Chapter/Branch of NGO, Local Non-Profit, Academic or Private.', sort: byStr(r => r.L.type), cell: r => typeChipPA(r.L.type) },
    { k: 'inside', label: 'In your area', help: 'Priority areas from this layer that intersect your boundary, the acres they cover inside it and the share of your area that is.', mono: true, desc: true, sort: byNumDesc(r => r.acres), cell: r => (r.status === 'restricted' ? 'Requires an ArcGIS sign-in' : r.status === 'error' ? `Unavailable: ${esc(r.error || '')}` : r.features.length ? `${r.features.length} area${r.features.length === 1 ? '' : 's'} · ${fmt(r.acres)} acres (${priority && priority.acresTotal ? Math.round(r.acres / priority.acresTotal * 100) : 0}%)<span class="sub">${esc(r.features.slice(0, 4).map(f => f.name).join(', '))}${r.features.length > 4 ? '…' : ''}</span>` : 'None inside') },
    { k: 'orgDesc', label: 'Description of org', help: 'What the organization does, written by Southern Waters.', cell: r => esc(r.L.orgDesc) },
    { k: 'layerDesc', label: 'Description of priority layer', help: 'What the layer represents and how its areas were chosen.', cell: r => esc(r.L.layerDesc) },
    { k: 'web', label: 'Website URL', help: 'Programme page.', cell: r => linkCell(r.L.site) },
  ];
  function renderPriority() {
    const p = priority, active = filtersActive('#pa-filters');
    const rows = sortRows('pa', priorityRows().sort((x, y) => y.acres - x.acres || x.L.org.localeCompare(y.L.org)), PA_COLS);
    const shown = shownRows(rows, 'pa');
    $('#pa-layers').textContent = fmt(p.overlapping.length); $('#pa-total').textContent = fmt(p.layers.length); setSummary('pv-priority', `${fmt(p.overlapping.length)}<span style="font-size:16px;opacity:.85"> of ${fmt(p.layers.length)}</span>`);
    setSummary('sum-priority', `${fmt(p.overlapping.length)}<span class="of"> of ${fmt(p.layers.length)}</span>`);
    setSummary('pv-viz-priority', `<span class="pv-dots">${p.layers.map(r => `<i style="background:${r.features.length ? r.L.color : 'rgba(46,30,18,.15)'}" title="${esc(r.L.label)}"></i>`).join('')}</span>`); // one dot per partner layer, in its map colour when it overlaps
    $('#pa-pct').textContent = p.acresTotal ? `${Math.round(p.coveredAcres / p.acresTotal * 100)}%` : '—';
    $('#pa-legend').innerHTML = orgLegend(rows) || '<div>No partner priority layers switched on</div>';
    $('#pa-toggles').innerHTML = `<span class="label">Layers</span>${paTogglesHtml()}`;
    $('#pa-note').textContent = `${p.overlapping.length} of ${p.layers.filter(r => r.status !== 'restricted').length} readable partner layers overlap your area · ${fmt(p.coveredAcres)} acres covered${p.failed.length ? ` · unavailable: ${p.failed.join(', ')}` : ''}`;
    $('#pa-note').dataset.stamped = ''; $('#pa-method').dataset.stamped = '';
    $('#pa-preview').innerHTML = previewLine(shown.length, rows.length, p.layers.length, 'partner priority layers', active) + (rows.length && !active ? ', most coverage first' : '');
    csvLabel('#btn-priority-csv', rows.length, active);
        $('#pa-rows').innerHTML = tableHtml('pa', PA_COLS, shown, 'No partner layers match those filters.'); bindTableSort('#pa-rows', 'pa', renderPriority);
    $('#pa-method').textContent = `This run: ${p.layers.length} partner layers checked, ${p.overlapping.length} overlap the boundary with ${fmt(p.areas)} priority areas covering ${fmt(p.coveredAcres)} of ${fmt(p.acresTotal)} acres (union of all layers). Acres are the intersection of each feature with your boundary. Overlapping layers are switched on by default and drawn in full around your area; use the toggles to turn any layer on or off.${p.failed.length ? ` Unavailable this run: ${p.failed.join(', ')}.` : ''}`;
    stampSource('#pa-note', '#pa-method', PRIORITY_LAYERS.filter(L => !L.restricted).map(L => L.url), 'Partner layers');
    $('#btn-priority-csv').disabled = !rows.length; moreButton('#pa-rows', 'pa', rows.length, renderPriority);
    withRegion(rc => { const L = rc.priority && rc.priority.layers; if (!L) { setRegion('priority', ''); return; }
      const tot = Object.values(L).reduce((a, b) => a + b, 0);
      const parts = PRIORITY_LAYERS.filter(l => L[l.key] != null).map(l => `${esc(l.label.replace(/^(USFS|SARP|NRCS|USFWS) /, ''))} ${fmt(L[l.key])}`);
      setRegion('priority', `Region-wide the ${Object.keys(L).length} readable partner layers hold <b>${fmt(tot)}</b> priority areas inside the Southern Waters boundary (${parts.join(' · ')}); your area touches <b>${fmt(p.areas)}</b> of them (${pctStr(p.areas, tot)}).`); });
    buildAppendixSoon();
  }
  function refreshPriorityMap() {
    if (!priorityMap || !priority) return;
    if (priorityGroup) priorityGroup.remove();
    priorityGroup = addPriorityLayers(priorityMap, priorityRows(), (r, f) => openViewer('priority', { r, f }));
    const b = addBoundary(priorityMap); b.setStyle({ dashArray: '7 5' }); b.bringToFront(); // dashed so the area outline never reads as a partner colour
    snapLater(priorityMap, 'priority-well');
  }
  wireFilters('#pa-filters', () => { if (priority) { renderPriority(); refreshPriorityMap(); } });
  $('#btn-priority-csv').onclick = () => priority && downloadCsv(filtersActive('#pa-filters') ? 'priority-areas-filtered.csv' : 'priority-areas.csv',
    ['Organization', 'Type', 'Description of org', 'Priority layer', 'Description of priority layer', 'Website URL', 'Status', 'Areas inside boundary', 'Acres inside boundary', 'Area names', 'Layer service'],
    priorityRows().map(r => [r.L.org, r.L.type, r.L.orgDesc, r.L.label, r.L.layerDesc, r.L.site, r.status === 'restricted' ? 'Sign-in required' : r.status === 'error' ? 'Unavailable' : 'OK', r.features.length, Math.round(r.acres), r.features.map(f => f.name).join('; '), r.L.url]));
  $('#btn-priority-png').onclick = () => {
    const url = snapshots['priority-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'priority-areas-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runPriority(map) {
    setStatus('sub-priority', 'loading', null, () => runPriority(map));
    priority = null; priorityMap = map; priorityGroup = null; paOn = null; resetFilters('#pa-filters'); $('#pa-toggles').innerHTML = '';
    ['pa-layers', 'pa-total', 'pa-pct'].forEach(id => { $('#' + id).textContent = '…'; }); $('#pa-note').textContent = 'Loading partner priority layers…'; $('#pa-preview').textContent = 'Loading…';
    try {
      priority = await loadPriority();
      paOn = new Set((priority.overlapping.length ? priority.overlapping : priority.layers.filter(r => r.status === 'ok')).map(r => r.L.key));
      renderPriority(); refreshPriorityMap();
      setStatus('sub-priority', 'done');
      const p = priority; await loadPriorityContext(p); // the rest of each layer arrives a moment later
      if (priority === p) { refreshPriorityMap(); if (viewerPaDraw) viewerPaDraw(); }
    } catch (err) {
      console.error(err);
      setStatus('sub-priority', 'error', err.message);
      ['pa-layers', 'pa-total', 'pa-pct'].forEach(id => { $('#' + id).textContent = '##'; });
      $('#pa-note').textContent = 'Partner layers unavailable right now'; $('#pa-preview').textContent = `Could not load partner priority layers: ${err.message}`;
    }
  }

  // ------------------------------------------------------------------
  // 06 · Drought — U.S. Drought Monitor via Esri live feed (current polygons + weekly county table)
  // ------------------------------------------------------------------
  const USDM = 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/US_Drought_Intensity_v1/FeatureServer';
  const COUNTY_LAYER = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Counties_Generalized_Boundaries/FeatureServer/0';
  const DM = [
    { v: 0, code: 'D0', name: 'Abnormally dry', color: '#FFFF00' },
    { v: 1, code: 'D1', name: 'Moderate drought', color: '#FCD37F' },
    { v: 2, code: 'D2', name: 'Severe drought', color: '#FFAA00' },
    { v: 3, code: 'D3', name: 'Extreme drought', color: '#E60000' },
    { v: 4, code: 'D4', name: 'Exceptional drought', color: '#730000' },
  ];
  const HISTORY_YEARS = 10, RECENT_YEARS = 5;
  let drought = null, droughtMap = null, droughtGroup = null;
  /** Redraw the small drought map (polygons + gage points) and refresh its print snapshot. */
  function refreshDroughtMap() {
    if (!droughtMap || !drought) return;
    if (droughtGroup) droughtGroup.remove();
    droughtGroup = addDroughtLayers(droughtMap); addBoundary(droughtMap).bringToFront();
    snapLater(droughtMap, 'drought-well');
  }
  /** Retry a fetch-like promise factory on failure (transient network / 503s). */
  const retry = (fn, tries = 3, wait = 1500) => fn().catch(err => (tries > 1 ? new Promise(r => setTimeout(r, wait)).then(() => retry(fn, tries - 1, wait * 2)) : Promise.reject(err)));

  async function loadDrought() {
    const acresTotal = turf.area(state.boundary) / SQM_PER_ACRE;
    const bbox = turf.bbox(state.boundary);
    // (1) current polygons touching the boundary → clip → cumulative acres per class (USDM polygons are nested)
    const cur = await arcgis('query', { where: '1=1', geometry: esriPolygon(state.boundary.geometry), geometryType: 'esriGeometryPolygon', inSR: '4326', spatialRel: 'esriSpatialRelIntersects',
      outFields: 'dm,ddate,period', returnGeometry: 'true', outSR: '4326', geometryPrecision: '4', maxAllowableOffset: '0.003', f: 'geojson' }, `${USDM}/3`);
    const clipped = []; let asOf = null;
    (cur.features || []).forEach(f => {
      asOf = asOf || f.properties.ddate;
      let piece = f; try { piece = turf.bboxClip(f, [bbox[0] - .5, bbox[1] - .5, bbox[2] + .5, bbox[3] + .5]); } catch { piece = f; } // trim the national polygons for drawing
      clipped.push({ dm: f.properties.dm, feature: piece });
    });
    // (2) counties touching the boundary (+ overlap acres as weights)
    const cj = await arcgis('query', { where: '1=1', geometry: esriPolygon(state.boundary.geometry), geometryType: 'esriGeometryPolygon', inSR: '4326', spatialRel: 'esriSpatialRelIntersects',
      outFields: 'NAME,STATE_ABBR,FIPS,SQMI', returnGeometry: 'true', outSR: '4326', geometryPrecision: '4', f: 'geojson' }, COUNTY_LAYER);
    const counties = (cj.features || []).map(f => { let ov = 0; try { const ix = turf.intersect(state.boundary, f); if (ix) ov = turf.area(ix) / SQM_PER_ACRE; } catch { ov = 0; }
      return { fips: f.properties.FIPS, name: f.properties.NAME, state: f.properties.STATE_ABBR, sqmi: f.properties.SQMI, overlapAcres: ov, weeks: [] }; })
      .filter(c => c.overlapAcres > 1);
    // (3) weekly county table for those counties over the history window
    const since = new Date(); since.setFullYear(since.getFullYear() - HISTORY_YEARS);
    const sinceStr = since.toISOString().slice(0, 10);
    const byFips = new Map(counties.map(c => [c.fips, c]));
    if (counties.length) {
      let offset = 0;
      for (let page = 0; page < 6; page++) {
        const t = await arcgis('query', { where: `admin_fips IN (${counties.map(c => `'${c.fips}'`).join(',')}) AND ddate >= DATE '${sinceStr}'`, outFields: 'admin_fips,ddate,nothing,d0,d1,d2,d3,d4', orderByFields: 'ddate', resultOffset: String(offset), resultRecordCount: '10000', returnGeometry: 'false', f: 'json' }, `${USDM}/1`);
        const rows = t.features || [];
        rows.forEach(r => { const c = byFips.get(String(r.attributes.admin_fips)); if (c) c.weeks.push({ t: r.attributes.ddate, d: [0, 1, 2, 3, 4].map(k => Number(r.attributes['d' + k]) || 0) }); });
        offset += rows.length; if (rows.length < 10000) break;
      }
    }
    // area-weighted weekly share of the boundary in each (exclusive) class
    const wsum = counties.reduce((s, c) => s + c.overlapAcres, 0) || 1;
    const weekMap = new Map();
    counties.forEach(c => c.weeks.forEach(w => { const e = weekMap.get(w.t) || { t: w.t, d: [0, 0, 0, 0, 0] }; w.d.forEach((v, k) => { e.d[k] += v * c.overlapAcres / wsum; }); weekMap.set(w.t, e); }));
    const weeks = [...weekMap.values()].sort((x, y) => x.t - y.t).map(w => Object.assign(w, { d1plus: w.d[1] + w.d[2] + w.d[3] + w.d[4], d0plus: w.d.reduce((s, v) => s + v, 0) }));
    const recentFrom = Date.now() - RECENT_YEARS * 365.25 * 86400000;
    const recent = weeks.filter(w => w.t >= recentFrom);
    let run = 0, longest = 0; recent.forEach(w => { run = w.d1plus >= 50 ? run + 1 : 0; longest = Math.max(longest, run); });
    const inDroughtWeeks = recent.filter(w => w.d1plus >= 50).length;
    const peak = recent.reduce((m, w) => (w.d1plus > (m ? m.d1plus : -1) ? w : m), null);
    // per-county current + recent stats for the table
    counties.forEach(c => {
      const latest = c.weeks.length ? c.weeks[c.weeks.length - 1] : null;
      c.now = latest ? latest.d : [0, 0, 0, 0, 0]; c.nowD1 = c.now[1] + c.now[2] + c.now[3] + c.now[4]; c.nowD0 = c.now.reduce((s, v) => s + v, 0);
      c.worst = latest ? Math.max(-1, ...c.now.map((v, k) => (v > 0 ? k : -1))) : -1;
      const rec = c.weeks.filter(w => w.t >= recentFrom); c.recentWeeks = rec.length; c.recentDrought = rec.filter(w => (w.d[1] + w.d[2] + w.d[3] + w.d[4]) >= 50).length;
      c.recentSevere = rec.filter(w => (w.d[2] + w.d[3] + w.d[4]) >= 50).length;
    });
    counties.sort((x, y) => y.nowD1 - x.nowD1 || y.recentDrought - x.recentDrought || x.name.localeCompare(y.name));
    // current acres per class: each county's published class shares × its acres inside the boundary
    const exactAcres = [0, 0, 0, 0, 0];
    counties.forEach(c => c.now.forEach((pctv, k) => { exactAcres[k] += pctv / 100 * c.overlapAcres; }));
    const cumAcres = exactAcres.map((_, k) => exactAcres.slice(k).reduce((s, v) => s + v, 0));
    const worstNow = Math.max(-1, ...exactAcres.map((v, k) => (v > acresTotal * 0.001 ? k : -1)));
    if (!asOf && counties.length && counties[0].weeks.length) asOf = counties[0].weeks[counties[0].weeks.length - 1].t;
    return { asOf, acresTotal, cumAcres, exactAcres, clipped, counties, weeks, recent, inDroughtWeeks, longest, peak, worstNow, sinceStr };
  }

  const dmChip = (k) => (k < 0 ? '<span class="chip paper">None</span>' : `<span class="chip" style="background:${DM[k].color};color:${k >= 3 ? 'var(--cream)' : 'var(--ink)'}">${DM[k].code} ${esc(DM[k].name)}</span>`);
  function droughtRows() {
    if (!drought) return []; const f = readFilters('#dr-filters'); const q = (f.q || '').toLowerCase();
    return drought.counties.filter(c => (!q || `${c.name} ${c.state}`.toLowerCase().includes(q)) && (f.state === 'all' || c.state === f.state)
      && (f.now === 'all' || (f.now === 'drought' && c.nowD1 > 0) || (f.now === 'dry' && c.nowD0 > 0) || (f.now === 'none' && c.nowD0 === 0)));
  }
  function addDroughtLayers(m) {
    if (!drought) return null;
    const group = L.layerGroup().addTo(m);
    drought.clipped.slice().sort((x, y) => x.dm - y.dm).forEach(({ dm, feature }) => {
      group.addLayer(L.geoJSON(feature, { style: { color: DM[dm].color, weight: 1, fillColor: DM[dm].color, fillOpacity: .55, interactive: false } }));
    });
    if (gages && gages.list.length) { // streamflow gages, coloured by today's percentile class
      const rend = L.canvas({ padding: .5 }); (m._swRenderers = m._swRenderers || []).push(rend);
      gages.list.forEach(p => group.addLayer(L.circleMarker([p.lat, p.lng], { renderer: rend, radius: 6, weight: 2, color: CREAM, fillColor: FLOW_CLASS[p.cls][1], fillOpacity: 1 }).bindTooltip(`<b>${esc(p.name || p.id)}</b><br>${fmt(p.flow)} cfs · ${FLOW_CLASS[p.cls][0]}`)));
    }
    return group;
  }
  // ---- Streamflow right now: USGS gages inside (or nearest to) the boundary, classed against today's percentiles
  const USGS_LATEST = 'https://api.waterdata.usgs.gov/ogcapi/v0/collections/latest-continuous/items';
  const USGS_SITES = 'https://api.waterdata.usgs.gov/ogcapi/v0/collections/monitoring-locations/items';
  const USGS_STATS = 'https://waterservices.usgs.gov/nwis/stat/';
  const FLOW_CLASS = { muchbelow: ['Much below normal', ROJO], below: ['Below normal', '#D06224'], normal: ['Normal', '#8A8635'], above: ['Above normal', '#CFCB99'], muchabove: ['Much above normal', INK], na: ['No percentiles', '#EDE1C9'] };
  const FLOW_ORDER = ['muchbelow', 'below', 'normal', 'above', 'muchabove', 'na'];
  let gages = null;
  async function loadGages() {
    const bb = turf.bbox(state.boundary); const pad = .05;
    const box = `${(bb[0] - pad).toFixed(4)},${(bb[1] - pad).toFixed(4)},${(bb[2] + pad).toFixed(4)},${(bb[3] + pad).toFixed(4)}`;
    const get = (url) => retry(() => fetch(url).then(r => (r.ok ? r.json() : Promise.reject(new Error(`USGS ${r.status}`)))));
    const latest = await get(`${USGS_LATEST}?bbox=${box}&parameter_code=00060&limit=300&f=json`);
    const cutoff = Date.now() - 3 * 86400000;
    const pts = (latest.features || []).filter(f => f.geometry && f.properties.value != null && /^USGS-\d+$/.test(String(f.properties.monitoring_location_id)) && new Date(f.properties.time).getTime() > cutoff) // NWIS statistics only exist for USGS-numbered sites
      .map(f => ({ id: f.properties.monitoring_location_id, site: String(f.properties.monitoring_location_id).replace(/^USGS-/, ''), flow: Number(f.properties.value), time: new Date(f.properties.time), lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0], name: '' }));
    pts.forEach(p => { p.inside = turf.booleanPointInPolygon([p.lng, p.lat], state.boundary); });
    let list = pts.filter(p => p.inside), nearest = false;
    if (!list.length && pts.length) { nearest = true; const c = turf.centroid(state.boundary); list = pts.map(p => Object.assign(p, { km: turf.distance(c, [p.lng, p.lat]) })).sort((a, b) => a.km - b.km).slice(0, 5); }
    list = list.slice(0, 20); // the statistics service takes a comma list; keep it short
    if (list.length) {
      try { const sites = await get(`${USGS_SITES}?bbox=${box}&limit=500&f=json`); const byId = new Map((sites.features || []).map(f => [f.id || f.properties.id, f.properties])); list.forEach(p => { const m = byId.get(p.id); if (m) { p.name = m.monitoring_location_name || ''; p.da = m.drainage_area; } }); } catch (err) { console.warn('USGS site names', err); }
      const d = new Date(); const mo = d.getMonth() + 1, day = d.getDate();
      try {
        const rdb = await retry(() => fetch(`${USGS_STATS}?format=rdb&sites=${list.map(p => p.site).join(',')}&statReportType=daily&statTypeCd=p10,p25,p50,p75,p90&parameterCd=00060`).then(r => (r.ok ? r.text() : Promise.reject(new Error(`USGS stats ${r.status}`)))));
        const lines = rdb.split('\n').filter(l => l && !l.startsWith('#')); const head = (lines[0] || '').split('\t'); const ix = (n) => head.indexOf(n); const num = (v) => (v === '' || v == null ? null : Number(v));
        lines.slice(2).forEach(l => { const c = l.split('\t'); if (Number(c[ix('month_nu')]) !== mo || Number(c[ix('day_nu')]) !== day) return; const p = list.find(x => x.site === c[ix('site_no')]); if (!p) return;
          p.pct = { p10: num(c[ix('p10_va')]), p25: num(c[ix('p25_va')]), p50: num(c[ix('p50_va')]), p75: num(c[ix('p75_va')]), p90: num(c[ix('p90_va')]) }; p.years = Number(c[ix('count_nu')]) || null; });
      } catch (err) { console.warn('USGS stats', err); }
    }
    list.forEach(p => { const s = p.pct; p.cls = !s || s.p25 == null || s.p75 == null || (p.years && p.years < 10) ? 'na' : (s.p10 != null && p.flow < s.p10) ? 'muchbelow' : p.flow < s.p25 ? 'below' : p.flow <= s.p75 ? 'normal' : (s.p90 != null && p.flow > s.p90) ? 'muchabove' : 'above'; });
    list.sort((a, b) => FLOW_ORDER.indexOf(a.cls) - FLOW_ORDER.indexOf(b.cls) || (b.da || 0) - (a.da || 0));
    return { list, nearest, all: pts.length };
  }
  const flowChip = (k) => `<span class="chip" style="background:${FLOW_CLASS[k][1]};color:${k === 'above' || k === 'na' ? 'var(--ink)' : 'var(--cream)'}">${FLOW_CLASS[k][0]}</span>`;
  /** Re-encode a loaded remote image at a smaller size (data URL) — keeps 10 MB phone photos out of the PDF. Needs CORS; silently keeps the original otherwise. */
  const shrunk = new Map();
  const imgProxyP = fetch('/img', { method: 'HEAD' }).then(r => r.ok).catch(() => false); // server.py image proxy for hosts without CORS
  /** Fetch a remote image (directly, or through the server proxy when its host blocks cross-origin reads) and re-encode it at ≤ maxW px as a data URL (cached). null when neither works. */
  function shrinkPhoto(url, maxW = 900, q = .82) {
    const key = `${url}@${maxW}`;
    const grab = (u) => fetch(u, { mode: 'cors', credentials: 'omit' }).then(r => (r.ok ? r.blob() : Promise.reject(new Error(String(r.status)))));
    const viaProxy = () => imgProxyP.then(ok => (ok ? grab(`/img?u=${encodeURIComponent(url)}&w=${maxW}`) : Promise.reject(new Error('no proxy'))));
    // ArcGIS hosts answer CORS, so read them directly; other hosts (the directory site) would download fully before the browser rejects the read, so go through the proxy first
    const first = /\.arcgis\.com\//.test(url) ? grab(url).catch(viaProxy) : viaProxy().catch(() => grab(url));
    if (!shrunk.has(key)) shrunk.set(key, first.then(b => createImageBitmap(b)).then(bm => {
      const k = Math.min(1, maxW / bm.width); const c = document.createElement('canvas'); c.width = Math.round(bm.width * k); c.height = Math.round(bm.height * k);
      const ctx = c.getContext('2d'); if (maxW <= 200) { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); } // logos: flatten transparency onto white
      ctx.drawImage(bm, 0, 0, c.width, c.height); bm.close && bm.close(); return c.toDataURL('image/jpeg', q); }).catch(err => { console.warn('image shrink failed', url, err.message); return null; }));
    return shrunk.get(key);
  }
  /** Fill every <img data-photo> in scope with its shrunk copy (data-max = width cap); when shrinking fails, show the original on screen but leave it out of the PDF (a 10 MB photo per card). */
  function fillPhotos(scope) { $$(`${scope} img[data-photo]`).forEach(img => { const u = img.dataset.photo; shrinkPhoto(u, Number(img.dataset.max) || 900).then(src => { if (!img.isConnected) return; if (src) img.src = src; else if (PDF_MODE) img.remove(); else { img.loading = 'lazy'; img.src = u; } }); }); }
  const ago = (t) => { const h = Math.round((Date.now() - t.getTime()) / 3600000); return h < 1 ? 'just now' : h < 48 ? `${h} h ago` : `${Math.round(h / 24)} d ago`; };
  const GAGE_COLS = [
    { k: 'name', label: 'Gage', help: 'USGS stream gage name and site number, with its drainage area and, for the nearest-gage fallback, the distance from your area.', sort: byStr(p => p.name || p.id), cell: p => `<div class="v">${esc(p.name || p.id)}</div><span class="sub">${esc(p.site)}${p.da ? ` · ${fmt(p.da)} sq mi drainage` : ''}${p.km ? ` · ${fmt(p.km * 0.621, 0)} mi from your area` : ''}</span>` },
    { k: 'flow', label: 'Flow now', help: 'Latest discharge in cubic feet per second and how old the reading is (USGS provisional data).', mono: true, desc: true, sort: byNumDesc(p => p.flow), cell: p => `<b>${fmt(p.flow)} cfs</b><span class="sub">${ago(p.time)}</span>` },
    { k: 'cls', label: 'vs normal for today', help: 'Today’s reading against this gage’s percentiles for the same date over its period of record: much below (under the 10th percentile), below (10–25th), normal (25–75th), above (75–90th), much above (over the 90th).', sort: (a, b) => FLOW_ORDER.indexOf(a.cls) - FLOW_ORDER.indexOf(b.cls), cell: p => flowChip(p.cls) },
    { k: 'median', label: 'Median for today', help: 'The gage’s median flow for this calendar date (cfs).', mono: true, desc: true, sort: byNumDesc(p => (p.pct ? p.pct.p50 : null)), cell: p => (p.pct && p.pct.p50 != null ? `${fmt(p.pct.p50)} cfs` : '—') },
  ];
  function renderGages() {
    const g = gages; const n = g.list.length; const by = (k) => g.list.filter(p => p.cls === k).length;
    const rated = g.list.filter(p => p.cls !== 'na').length;
    $('#gage-summary').innerHTML = !n ? 'No active USGS discharge gages inside or near your area.'
      : `${g.nearest ? `No gages inside your area — the ${n} nearest` : `${n} gage${n === 1 ? '' : 's'} inside your area`}: ${rated ? [['muchbelow', 'much below'], ['below', 'below'], ['normal', 'near'], ['above', 'above'], ['muchabove', 'much above']].filter(([k]) => by(k)).map(([k, w]) => `<b>${by(k)}</b> ${w} normal`).join(' · ') : 'no percentile records to compare against'}${n - rated ? ` · ${n - rated} without percentiles` : ''}`;
    $('#gage-legend').innerHTML = FLOW_ORDER.filter(k => k !== 'na' || by('na')).map(k => `<div><span class="sw-sq" style="background:${FLOW_CLASS[k][1]};width:11px;height:11px"></span>${FLOW_CLASS[k][0]}</div>`).join('');
    const shown = shownRows(sortRows('gage', g.list, GAGE_COLS), 'gage');
        $('#gage-rows').innerHTML = tableHtml('gage', GAGE_COLS, shown, 'No gages.'); bindTableSort('#gage-rows', 'gage', renderGages);
    moreButton('#gage-rows', 'gage', n, renderGages);
    $('#gage-note').textContent = n ? `USGS provisional data · classes compare the latest reading with each gage’s percentiles for ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} over its period of record (gages with under 10 years or no current reading are not classed) · ${g.all} gages reporting in the surrounding box` : '';
    if (droughtMap) refreshDroughtMap();
  }
  async function runGages() {
    gages = null; $('#gage-summary').textContent = 'Loading gages…'; $('#gage-rows').innerHTML = ''; $('#gage-legend').innerHTML = ''; $('#gage-note').textContent = '';
    try { gages = await loadGages(); renderGages(); }
    catch (err) { console.warn('gages', err); $('#gage-summary').textContent = `USGS streamflow unavailable right now (${err.message})`; }
  }
  // ---- NOAA CPC drought outlooks (monthly = layer 1, seasonal = layer 4), as shares of the boundary
  const CPC = 'https://mapservices.weather.noaa.gov/vector/rest/services/outlooks/cpc_drought_outlk/MapServer';
  const OUTLOOK = { Persistence: ['Drought persists', '#B07A4A', true], Development: ['Drought development likely', '#F2D88A', false], Improvement: ['Drought remains but improves', '#D9C49A', false], Removal: ['Drought removal likely', '#A9C48A', false], No_Drought: ['No drought', '#F1EBDD', false] };
  let outlook = null;
  async function loadOutlook() {
    const acresTotal = turf.area(state.boundary) / SQM_PER_ACRE; const bb = turf.bbox(state.boundary);
    const one = async (layer) => {
      const gj = await retry(() => arcgis('query', { where: '1=1', geometry: esriPolygon(state.boundary.geometry), geometryType: 'esriGeometryPolygon', inSR: '4326', spatialRel: 'esriSpatialRelIntersects', outFields: 'outlook,fcst_date,target', returnGeometry: 'true', outSR: '4326', geometryPrecision: '3', maxAllowableOffset: '0.01', f: 'geojson' }, `${CPC}/${layer}`, { timeoutMs: 60000 }));
      const shares = {}; let issued = null, target = null;
      const feats = (gj.features || []).filter(f => f.geometry); feats.forEach(f => { issued = issued || f.properties.fcst_date; target = target || f.properties.target; });
      // sample the boundary on a grid (~600 points) and attribute each point to the outlook polygon that contains it
      let cell = Math.sqrt(turf.area(state.boundary) / 600) / 1000; const pts = []; let tries = 0;
      while (tries++ < 4) { const grid = turf.pointGrid([bb[0], bb[1], bb[2], bb[3]], cell, { units: 'kilometers' }); pts.length = 0; grid.features.forEach(pt => { if (turf.booleanPointInPolygon(pt, state.boundary)) pts.push(pt); }); if (pts.length >= 60) break; cell /= 2; }
      const per = acresTotal / (pts.length || 1);
      pts.forEach(pt => { const hit = feats.find(f => { try { return turf.booleanPointInPolygon(pt, f); } catch { return false; } }); const k = hit ? hit.properties.outlook : 'No_Drought'; shares[k] = (shares[k] || 0) + per; });
      return { issued, target, shares, samples: pts.length };
    };
    const [monthly, seasonal] = await Promise.all([one(1), one(4)]);
    return { monthly, seasonal, acresTotal };
  }
  function renderOutlook() {
    const o = outlook; const block = (title, x) => { const rows = Object.entries(x.shares).filter(([, a]) => a / o.acresTotal >= .005).sort((p, q) => q[1] - p[1]);
      return `<div><div style="font-weight:600">${title}${x.target ? ` — through ${esc(x.target)}` : ''}</div><div class="mono" style="font-size:10px;opacity:.85;margin:2px 0 8px">${x.issued ? `Issued ${esc(x.issued)}` : 'Not available'}</div>${rows.length ? rows.map(([k, a]) => `<span class="outlook-chip" style="background:${(OUTLOOK[k] || ['', '#EDE1C9'])[1]};color:${(OUTLOOK[k] || [])[2] ? 'var(--cream)' : 'var(--ink)'}">${esc((OUTLOOK[k] || [k])[0])} · ${Math.round(a / o.acresTotal * 100)}%</span>`).join('') : '<span class="mono" style="font-size:11px;opacity:.85">No outlook polygons intersect your area</span>'}</div>`; };
    $('#outlook-body').innerHTML = block('Seasonal outlook', o.seasonal) + block('Monthly outlook', o.monthly) + `<div class="mono" style="font-size:10px;opacity:.85">Shares of your area under each Climate Prediction Center category; “no drought” means none is forecast to develop.</div>`;
  }
  async function runOutlook() {
    outlook = null; $('#outlook-body').textContent = 'Loading outlook…';
    try { outlook = await loadOutlook(); renderOutlook(); }
    catch (err) { console.warn('outlook', err); $('#outlook-body').textContent = `Drought outlook unavailable right now (${err.message})`; }
  }
  function droughtChart(weeks) {
    const el = $('#dr-chart'); if (!el) return;
    if (!weeks.length) { el.innerHTML = '<div class="label">No weekly history available for this area</div>'; return; }
    const W = 1000, H = 110, pad = 2, n = weeks.length, bw = (W - pad * 2) / n;
    let bars = '';
    weeks.forEach((w, i) => { let y = H; const x = pad + i * bw;
      [0, 1, 2, 3, 4].forEach(k => { const hgt = Math.max(0, Math.min(100, w.d[k])) / 100 * H; if (hgt > 0) { y -= hgt; bars += `<rect x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${(bw + 0.3).toFixed(2)}" height="${hgt.toFixed(2)}" fill="${DM[k].color}"/>`; } }); });
    // year ticks
    let ticks = ''; let lastYear = null;
    weeks.forEach((w, i) => { const yr = new Date(w.t).getUTCFullYear(); if (yr !== lastYear) { lastYear = yr; const x = pad + i * bw; ticks += `<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${H}" stroke="rgba(46,30,18,.18)" stroke-width="1"/><text x="${(x + 3).toFixed(1)}" y="${H - 4}" font-family="DM Mono, monospace" font-size="10" fill="rgba(46,30,18,.55)">${yr}</text>`; } });
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Weekly share of your area in each drought class over the last ten years; the county table below carries the same data" style="width:100%;height:100%;display:block;border-radius:8px;background:#EDE1C9"><line x1="0" y1="${H / 2}" x2="${W}" y2="${H / 2}" stroke="rgba(46,30,18,.25)" stroke-dasharray="4 4"/>${bars}${ticks}</svg>`;
    $('#dr-chart-legend').innerHTML = DM.map(k => `<div><span class="sw-sq" style="background:${k.color}"></span>${k.code} ${esc(k.name)}</div>`).join('') + '<div><span class="sw-line" style="border-top-style:dashed;border-color:rgba(46,30,18,.5)"></span>50% of area</div>';
  }
  const DR_COLS = [
    { k: 'name', label: 'County', help: 'County and state, with the acres of it inside your boundary (the weight it carries in the area-wide figures).', sort: byStr(c => c.name), cell: c => `<div class="v">${esc(c.name)}, ${esc(c.state)}</div><span class="sub">${fmt(c.overlapAcres)} acres inside your boundary</span>` },
    { k: 'worst', label: 'Worst class now', help: 'Highest Drought Monitor class present in the county this week.', desc: true, sort: byNumDesc(c => c.worst), cell: c => dmChip(c.worst) },
    { k: 'now', label: 'In drought now (D1+)', help: 'Share of the county in moderate drought or worse this week.', mono: true, desc: true, sort: byNumDesc(c => c.nowD1), cell: c => `${Math.round(c.nowD1)}% of county` },
    { k: 'weeks', label: 'Weeks in drought · 5 yrs', help: 'Weeks in the last five years with at least half the county in D1 or worse, of the weeks published.', mono: true, desc: true, sort: byNumDesc(c => c.recentDrought), cell: c => `${c.recentDrought} of ${c.recentWeeks}` },
    { k: 'severe', label: 'Weeks severe+ · 5 yrs', help: 'Weeks in the last five years with at least half the county in severe drought (D2) or worse.', mono: true, desc: true, sort: byNumDesc(c => c.recentSevere), cell: c => String(c.recentSevere) },
  ];
  function renderDrought() {
    const d = drought; const pct = (v) => (d.acresTotal ? `${Math.round(v / d.acresTotal * 100)}%` : '—');
    const asOf = d.asOf ? new Date(d.asOf).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '—';
    $('#dr-pct').textContent = pct(d.cumAcres[1]); $('#dr-worst').textContent = d.worstNow < 0 ? 'None' : DM[d.worstNow].code;
    setSummary('sum-drought', pct(d.cumAcres[1])); updateAreaSummary();
    if (d.acresTotal) pvBar('pv-viz-drought', DM.map(k => [((d.cumAcres[k.v] || 0) - (d.cumAcres[k.v + 1] || 0)) / d.acresTotal, k.color]).concat([[1 - (d.cumAcres[0] || 0) / d.acresTotal, 'rgba(46,30,18,.12)']])); // D0–D4 shares, as on the drought page
    setRegion('drought', ''); regionDrought().then(g => { if (drought === d) setRegion('drought', `Region-wide <b>${Math.round(g.share * 100)}%</b> of the Southern Waters boundary is in drought (D1 or worse) this week; your area: <b>${pct(d.cumAcres[1])}</b>.`); }).catch(err => console.warn('region drought', err));
    $('#dr-asof').textContent = `U.S. Drought Monitor · week of ${asOf}`;
    $('#dr-d0').textContent = pct(d.cumAcres[0]); $('#dr-d1').textContent = fmt(d.cumAcres[1]); $('#dr-d2').textContent = fmt(d.cumAcres[2]);
    $('#dr-weeks').textContent = d.recent.length ? `${d.inDroughtWeeks} of ${d.recent.length}` : '—'; $('#dr-run').textContent = d.recent.length ? String(d.longest) : '—';
    $('#dr-peak').textContent = d.peak ? `${Math.round(d.peak.d1plus)}%` : '—';
    $('#dr-note').textContent = `USDM week of ${asOf} · ${d.worstNow < 0 ? 'no drought classes touch your area' : `worst class present: ${DM[d.worstNow].code} ${DM[d.worstNow].name}`}`;
    $('#dr-legend').innerHTML = DM.map(k => `<div><span class="sw-sq" style="background:${k.color}"></span>${k.code} ${esc(k.name)}</div>`).join('');
    droughtChart(d.weeks);
    $('#dr-chart-note').textContent = d.weeks.length ? `${fmt(d.weeks.length)} weeks · ${d.counties.length} count${d.counties.length === 1 ? 'y' : 'ies'} weighted by overlap · since ${d.sinceStr}` : '';
    const rows = sortRows('dr', droughtRows(), DR_COLS), active = filtersActive('#dr-filters'), shown = shownRows(rows, 'dr');
    $('#dr-preview').innerHTML = previewLine(shown.length, rows.length, d.counties.length, 'counties', active) + (rows.length && !active ? ', driest first' : '');
    csvLabel('#btn-drought-csv', rows.length, active);
        $('#dr-rows').innerHTML = tableHtml('dr', DR_COLS, shown, 'No counties match those filters.'); bindTableSort('#dr-rows', 'dr', renderDrought);
    $('#dr-method').textContent = `This run: USDM week of ${asOf}; ${fmt(d.acresTotal)} acres analysed; ${d.counties.length} count${d.counties.length === 1 ? 'y' : 'ies'} supply the ${fmt(d.weeks.length)}-week history since ${d.sinceStr}. County shares are the USDM's published weekly percentages; boundary shares weight each county by the acres of it inside your boundary.`;
    $('#btn-drought-csv').disabled = !rows.length;
    moreButton('#dr-rows', 'dr', rows.length, renderDrought);
    buildAppendixSoon();
  }
  wireFilters('#dr-filters', () => { if (drought) renderDrought(); });
  $('#btn-drought-csv').onclick = () => drought && downloadCsv(filtersActive('#dr-filters') ? 'drought-counties-filtered.csv' : 'drought-counties.csv',
    ['County', 'State', 'FIPS', 'Acres inside boundary', 'Worst class now', '% county D0 now', '% county D1 now', '% county D2 now', '% county D3 now', '% county D4 now', 'Weeks in drought (D1+ ≥50%) last 5 yrs', 'Weeks severe+ (D2+ ≥50%) last 5 yrs', 'Weeks of record last 5 yrs'],
    droughtRows().map(c => [c.name, c.state, c.fips, Math.round(c.overlapAcres), c.worst < 0 ? 'None' : DM[c.worst].code, ...c.now.map(v => v.toFixed(1)), c.recentDrought, c.recentSevere, c.recentWeeks]));
  $('#btn-drought-png').onclick = () => {
    const url = snapshots['drought-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'drought-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runDrought(map) {
    setStatus('s-drought', 'loading', null, () => runDrought(map));
    drought = null; droughtMap = map; droughtGroup = null; resetFilters('#dr-filters');
    $$('#dr-stats .n').forEach(el => { el.textContent = '…'; }); $('#dr-pct').textContent = '…'; $('#dr-worst').textContent = '…';
    $('#dr-note').textContent = 'Loading the Drought Monitor…'; $('#dr-preview').textContent = 'Loading…'; $('#dr-asof').textContent = 'Loading…';
    gages = null; outlook = null; $('#gage-summary').textContent = 'Loading gages…'; $('#gage-rows').innerHTML = ''; $('#outlook-body').textContent = 'Loading outlook…';
    try {
      drought = await loadDrought();
      runGages(); runOutlook(); // independent add-ons: their own loading / error text
      const states = {}; drought.counties.forEach(c => { states[c.state] = (states[c.state] || 0) + 1; });
      setSelectOptions('#dr-filters [data-filter="state"]', 'Any state', Object.entries(states).sort((x, y) => y[1] - x[1]).map(([v, n]) => ({ v, label: `${v} (${n})` })));
      renderDrought();
      setStatus('s-drought', 'done');
      droughtGroup = addDroughtLayers(map);
      const b = addBoundary(map); b.bringToFront();
      setTimeout(() => snapshotMap(map, 'drought-well'), 150);
    } catch (err) {
      console.error(err);
      $$('#dr-stats .n').forEach(el => { el.textContent = '##'; }); $('#dr-pct').textContent = '##'; $('#dr-worst').textContent = '##';
      setStatus('s-drought', 'error', err.message);
      $('#dr-note').textContent = 'Drought Monitor unavailable right now'; $('#dr-asof').textContent = '';
      $('#dr-preview').textContent = `Could not load the U.S. Drought Monitor: ${err.message}`;
    }
  }

  // ------------------------------------------------------------------
  // 02b · Success stories — Southern Waters Survey123 results view (points + photo attachments)
  // ------------------------------------------------------------------
  const STORIES = 'https://services6.arcgis.com/FqSZYgvweBKv4NFt/arcgis/rest/services/survey123_80372d600dba45a0aa49de5867d22a10_results/FeatureServer/0';
  let stories = null, storyMap = null, storyGroup = null;
  // Three story layers, toggled like the partner priority layers: the partner survey (live), confirmed partner stories
  // (placeholder — no records yet) and the AI-assisted research compilation (data/success-stories-ai.json, built by
  // tools/build-stories.py from the October 2026 workbook, with its locations, partner names and links re-checked).
  const STORY_LAYERS = [
    { key: 'sw', label: 'Southern Waters Success Stories', swatch: `background:${ROJO};border-radius:999px` },
    { key: 'partner', label: 'Confirmed Partner Stories', swatch: 'background:#8A8635', placeholder: true },
    { key: 'ai', label: 'Success Stories · AI-assisted research', swatch: `background:${CREAM};border-radius:999px;box-shadow:inset 0 0 0 2.5px #D06224` },
  ];
  const AI_STORIES = 'data/success-stories-ai.json', AI_COLOR = '#D06224';
  const stOn = new Set(['sw', 'ai']);
  let viewerStDraw = null;  // redraws the explorer map when a story layer is toggled while it is open
  const storyPool = () => (stories ? stories.list.filter(s => stOn.has(s.src)) : []);
  /** Miles to the boundary; points more than 150 mi from its bounding box keep that (lower-bound) estimate — the AI layer is ~700 points region-wide. */
  function storyMiles(lng, lat, edges, bb) {
    const dx = lng < bb[0] ? bb[0] - lng : lng > bb[2] ? lng - bb[2] : 0, dy = lat < bb[1] ? bb[1] - lat : lat > bb[3] ? lat - bb[3] : 0;
    const est = Math.hypot(dx * 69 * Math.cos(lat * Math.PI / 180), dy * 69);
    return est > 150 ? est : milesToBoundary(turf.point([lng, lat]), state.boundary, edges);
  }
  async function loadSurveyStories(edges, bb) {
    // the survey is a few dozen records at most: fetch everything once, then rank by distance
    const gj = await arcgis('query', { where: '1=1', outFields: 'objectid,globalid,project_name,project_description,link_to_story_on_landscape_part,additional_publicity,project_type,CreationDate,EditDate', returnGeometry: 'true', outSR: '4326', f: 'geojson' }, STORIES);
    const feats = (gj.features || []).filter(f => f.geometry);
    let photos = {};
    try {
      const att = await arcgis('queryAttachments', { objectIds: feats.map(f => f.properties.objectid).join(','), f: 'json' }, STORIES);
      (att.attachmentGroups || []).forEach(g => { const imgs = (g.attachmentInfos || []).filter(i => /^image\//.test(i.contentType || '')); if (imgs.length) photos[g.parentObjectId] = imgs.map(i => ({ url: `${STORIES}/${g.parentObjectId}/attachments/${i.id}`, name: i.name })); });
    } catch (err) { console.warn('attachments unavailable', err); }
    return feats.map(f => { const p = f.properties; const [lng, lat] = f.geometry.coordinates; const miles = storyMiles(lng, lat, edges, bb);
      return { src: 'sw', id: `sw-${p.objectid}`, name: clean(p.project_name) || 'Untitled project', description: clean(p.project_description), link: clean(p.link_to_story_on_landscape_part), publicity: clean(p.additional_publicity),
        type: clean(p.project_type) || (/upcoming/i.test(p.project_name || '') ? 'Upcoming Project' : ''), submitted: p.CreationDate ? new Date(p.CreationDate) : null, photos: photos[p.objectid] || [],
        inside: miles === 0, miles, lat, lng }; });
  }
  async function loadAiStories(edges, bb) {
    const r = await fetch(AI_STORIES, { cache: 'force-cache' }); if (!r.ok) throw new Error(`AI-assisted stories file HTTP ${r.status}`);
    const j = await r.json();
    return { meta: j.meta, list: j.stories.map(a => { const miles = storyMiles(a.lng, a.lat, edges, bb);
      return { src: 'ai', id: a.id, name: a.title, description: a.desc, link: a.link, publicity: '', type: a.type, submitted: null, photos: a.photo ? [{ url: a.photo }] : [], inside: miles === 0, miles, lat: a.lat, lng: a.lng, ai: a }; }) };
  }
  async function loadStories() {
    const lines = turf.polygonToLine(state.boundary); const edges = lines.type === 'FeatureCollection' ? lines.features : [lines]; const bb = turf.bbox(state.boundary);
    const [sw, ai] = await Promise.allSettled([loadSurveyStories(edges, bb), loadAiStories(edges, bb)]);
    if (sw.status === 'rejected' && ai.status === 'rejected') throw sw.reason;
    const failed = [];
    if (sw.status === 'rejected') { console.warn('survey stories unavailable', sw.reason); failed.push('sw'); }
    if (ai.status === 'rejected') { console.warn('AI-assisted stories unavailable', ai.reason); failed.push('ai'); }
    const list = [...(sw.value || []), ...(ai.value ? ai.value.list : [])].sort((x, y) => x.miles - y.miles || x.name.localeCompare(y.name));
    return { list, failed, aiMeta: ai.value ? ai.value.meta : null };
  }
  function storyRows(ignoreScope) {
    if (!stories) return []; const f = readFilters('#st-filters'); const q = (f.q || '').toLowerCase();
    return stories.list.filter(s => stOn.has(s.src) && (!q || `${s.name} ${s.description} ${s.ai ? `${s.ai.orgs} ${s.ai.water} ${s.ai.town} ${s.ai.county}` : ''}`.toLowerCase().includes(q))
      && (ignoreScope || f.scope === 'all' || (f.scope === 'inside' ? s.inside : s.miles <= Number(f.scope)))
      && (f.type === 'all' || s.type === f.type));
  }
  /** Southern Waters stories: numbered pins, red inside / olive nearby (numbers match their cards). AI-assisted records: unnumbered cream dots with an orange ring. */
  function storyPin(s, n) {
    if (s.src === 'ai') return L.divIcon({ className: '', iconSize: [18, 18], iconAnchor: [9, 9], html: `<div style="width:12px;height:12px;border-radius:999px;background:${CREAM};border:3px solid ${AI_COLOR};box-shadow:0 1px 5px rgba(46,30,18,.35)"></div>` });
    if (s.inside) return pinIcon(n);
    return L.divIcon({ className: '', iconSize: [26, 26], iconAnchor: [13, 13], html: `<div style="width:26px;height:26px;border-radius:999px;background:#8A8635;border:3px solid ${CREAM};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 7px rgba(46,30,18,.4);color:${CREAM};font:600 11px Poppins,sans-serif">${n}</div>` });
  }
  /** Card / pin number: position among the listed Southern Waters stories (AI-assisted records are not numbered). */
  const swNumber = (list, s) => (s.src === 'ai' ? 0 : list.filter(x => x.src !== 'ai').indexOf(s) + 1);
  /** Numbered pins for the listed stories (numbers match the cards) over small dots for every other story in the switched-on layers. */
  function addStoryLayers(m, list, onPick, rest = []) {
    const group = L.layerGroup().addTo(m);
    const tip = (s, src) => `${src ? `<img class="tip-photo" src="${src}" alt="">` : ''}<b>${esc(s.name)}</b>${s.src === 'ai' ? '<br>AI-assisted research' : ''}${s.inside ? '' : `<br>${fmt(s.miles)} mi from your boundary`}`;
    /** Hover label with the story's photo: text at once, then a small cached copy of the photo (shrinkPhoto) slots in above it. */
    const hover = (mk, s) => { mk.bindTooltip(tip(s), { className: s.photos.length ? 'st-tip has-photo' : 'st-tip' });
      if (s.photos.length) mk.on('tooltipopen', () => shrinkPhoto(s.photos[0].url, 480).then(src => { if (src && mk.isTooltipOpen()) mk.setTooltipContent(tip(s, src)); })); };
    rest.forEach(s => {
      const ai = s.src === 'ai';
      const mk = L.circleMarker([s.lat, s.lng], ai ? { radius: 4, color: AI_COLOR, weight: 1.6, fillColor: CREAM, fillOpacity: .95, opacity: .9 } : { radius: 4.5, color: CREAM, weight: 1.2, fillColor: INK, fillOpacity: .45, opacity: .85 });
      hover(mk, s); mk.on('click', () => onPick && onPick(s)); group.addLayer(mk);
    });
    // AI-assisted first, so the numbered Southern Waters pins sit on top
    list.slice().sort((x, y) => (x.src === 'ai') === (y.src === 'ai') ? y.miles - x.miles : x.src === 'ai' ? -1 : 1).forEach(s => {
      const mk = L.marker([s.lat, s.lng], { icon: storyPin(s, swNumber(list, s)), keyboard: true }); mk.on('click', () => onPick && onPick(s)); hover(mk, s);
      group.addLayer(mk); group._byId = group._byId || {}; group._byId[s.id] = mk;
    });
    return group;
  }
  const checkedOn = () => (stories && stories.aiMeta ? new Date(`${stories.aiMeta.built}T12:00:00`).toLocaleDateString('en-US', { dateStyle: 'long' }) : '');
  const aiLinkLabel = (a) => (a.linkState === 'broken' ? 'Source page (not found when checked)' : a.linkShared ? 'Source report (covers several projects)' : 'Source page');
  const aiLinkHtml = (a) => (a.link ? `<a href="${esc(a.link)}" target="_blank" rel="noopener">${esc(aiLinkLabel(a))} →</a>${a.linkState === 'broken' ? `<div class="mono" style="font-size:10px;margin-top:3px;opacity:.85">This page answered “not found” when the list was checked on ${esc(checkedOn())}.</div>` : ''}` : '—');
  const aiPlace = (a) => [a.water, a.town, a.county, a.state].filter(Boolean).join(' · ');
  const aiBoundaryNote = (a) => (a.inExtent ? '' : `Pinned ${a.milesOutside} mi outside the Southern Waters programmatic boundary${a.milesOutside <= 6 ? ', just off its edge' : ''}.`);
  /** The colourful notice shown whenever the AI-assisted layer is on (and in the explorer for its records). Every number is counted from the data. */
  function aiNoteHtml(compact) {
    const all = stories ? stories.list.filter(s => s.src === 'ai') : []; const q = (stories && stories.aiMeta && stories.aiMeta.qa) || {};
    const fws = all.filter(s => s.ai.linkState === 'unverified' && /\/\/(www\.)?fws\.gov\//.test(s.link)).length;
    const programs = all.filter(s => /^Program/.test(s.ai.scope)).length;
    return `<div class="ai-note-badge">✦ AI-assisted research</div><div class="ai-note-body"><b>These entries come from an AI-assisted search, not from partners.</b> `
      + (compact ? '' : `The ${fmt(all.length)} restoration records were compiled in October 2026 by an AI-assisted search of public sources (EPA Section 319 nonpoint-source success stories, state environmental and wildlife agencies, federal programs such as the USFWS National Fish Passage Program and NOAA Gulf restoration, and conservation organizations), and each links to the page it came from. `)
      + `They have not been reviewed or confirmed by the partners involved. Locations are approximate (within a few miles)${programs ? `, and ${fmt(programs)} records describe multi-site programs pinned at one representative point` : ''}.`
      + (compact ? '' : ` When the list was checked on ${esc(checkedOn())}, ${fmt(q.link_ok || 0)} source pages responded, ${fmt(q.link_unverified || 0)} sit on sites that block automated checks${fws ? ` (${fmt(fws)} of them on fws.gov)` : ''} and ${fmt(q.link_broken || 0)} were no longer online.`)
      + ' Check the linked source before citing a project.</div>';
  }
  function stTogglesHtml() {
    return STORY_LAYERS.map(ly => {
      const failed = stories && stories.failed.includes(ly.key); const off = ly.placeholder || !stories || failed; const on = !off && stOn.has(ly.key);
      const n = stories ? stories.list.filter(s => s.src === ly.key).length : 0;
      const note = ly.placeholder ? 'coming soon' : failed ? 'unavailable' : `${fmt(n)} region-wide`;
      return `<label class="tog${on ? ' on' : ''}${off ? ' off' : ''}"${ly.placeholder ? ' title="A placeholder for partner-confirmed stories; there are no records yet."' : ''}><input type="checkbox" data-st="${ly.key}"${on ? ' checked' : ''}${off ? ' disabled' : ''}><span class="sw-sq" style="${ly.swatch}"></span><span>${esc(ly.label)}</span><span class="mono">${note}</span></label>`;
    }).join('');
  }
  // "Show on map" on a card opens the explorer centred on that story
  document.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('.show-on-map'); if (!b || !stories) return; const x = stories.list.find(y => y.id === b.dataset.story); if (x) openViewer('stories', x); });
  document.addEventListener('change', (e) => {
    const i = e.target; if (!i.matches || !i.matches('input[data-st]') || !stories) return;
    if (i.checked) stOn.add(i.dataset.st); else stOn.delete(i.dataset.st);
    renderStories(); refreshStoryMap(); if (viewerStDraw) viewerStDraw();
  });
  const typeChip = (t) => (t ? `<span class="chip ${/completed/i.test(t) ? 'yes' : /featured/i.test(t) ? 'terra' : 'sunset'}">${esc(t)}</span>` : '<span class="chip ph" title="Not recorded in the survey">##</span>');
  function storyFields(s) {
    if (s.src === 'ai') { const a = s.ai; return [
      ['Project', s.name, false, 'lead'], ['Description', s.description || '—'], ['Layer', 'Success Stories · AI-assisted research'], ['Project type', a.type || '—'], ['Record scope', [a.scope, a.year].filter(Boolean).join(' · ') || '—'],
      ['Organizations involved', a.orgs || '—'], ['Landscape Partnership network', a.lpOrgs.length ? a.lpOrgs.join('; ') : 'No exact match in the directory'],
      ['Location', aiPlace(a) || '—'], ['Pin', `${s.lat.toFixed(2)}, ${s.lng.toFixed(2)} (approximate)${s.inside ? ' · inside your boundary' : ` · ${fmt(s.miles)} miles from your boundary`}`],
      ['Learn more', aiLinkHtml(a), true], ...(a.notes ? [['Research notes', a.notes]] : []), ...(a.inExtent ? [] : [['Programmatic boundary', aiBoundaryNote(a)]]),
    ]; }
    return [['Project', s.name], ['Description', s.description || '—'], ['Type', s.type || '—'], ['Location', `${s.lat.toFixed(4)}, ${s.lng.toFixed(4)}${s.inside ? ' · inside your boundary' : ` · ${fmt(s.miles)} miles from your boundary`}`],
      ['Story', s.link ? `<a href="${esc(s.link)}" target="_blank" rel="noopener">Read on the Landscape Partnership →</a>` : '—', true],
      ['Additional publicity', s.publicity ? (/^https?:/.test(s.publicity) ? `<a href="${esc(s.publicity)}" target="_blank" rel="noopener">${esc(s.publicity)}</a>` : esc(s.publicity)) : '—', true],
      ['Submitted', s.submitted ? s.submitted.toLocaleDateString('en-US', { dateStyle: 'medium' }) : '—'], ['Photos', s.photos.length ? `${s.photos.length}` : 'None attached']];
  }
  function storyCard(s, num) {
    const pin = `<div><div class="col-label">Pin location</div><div class="mono" style="font-size:13px">${s.lat.toFixed(s.src === 'ai' ? 2 : 3)} / ${s.lng.toFixed(s.src === 'ai' ? 2 : 3)}</div><div class="mono" style="font-size:10px;opacity:.85">${s.inside ? 'inside your boundary' : `${fmt(s.miles)} mi from your boundary`}${s.src === 'ai' ? ' · approximate' : ''}</div></div>`;
    const photo = s.photos.length ? `<img class="photo" data-photo="${esc(s.photos[0].url)}" alt="${esc(s.name)}">` : '';
    const where = `<button class="pill xs show-on-map" type="button" data-story="${esc(s.id)}" data-noprint aria-label="Show ${esc(s.name)} on the map">◎ Show on map</button>`;
    if (s.src === 'ai') { const a = s.ai; return `
      <div class="story ai">
        <div style="flex:1 1 200px;min-width:min(100%,180px);display:flex;flex-direction:column;gap:14px">${photo}
          <div style="display:flex;flex-direction:column;gap:10px">${pin}
            <div><div class="col-label">State / county</div><div style="font-size:13px">${esc([a.county, a.state].filter(Boolean).join(', ') || '—')}</div></div>
            ${where}
          </div>
        </div>
        <div style="flex:2 1 340px;min-width:min(100%,280px);display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:baseline;justify-content:space-between"><h3>${esc(s.name)}</h3>${a.year ? `<div class="label" style="font-size:10.5px">${esc(a.year)}</div>` : ''}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px"><span class="chip ai">✦ AI-assisted research</span>${a.type ? `<span class="chip paper">${esc(a.type)}</span>` : ''}${a.scope && a.scope !== 'Project' ? `<span class="chip sunset">${esc(a.scope)}</span>` : ''}</div>
          <p>${esc(s.description || '—')}</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px">
            <div><div class="col-label">Organizations involved</div><div class="st-small">${esc(a.orgs || '—')}</div></div>
            <div><div class="col-label">In the LP network</div><div class="st-small">${esc(a.lpOrgs.join('; ') || '—')}</div></div>
            <div><div class="col-label">Learn more</div><div class="mono" style="font-size:12.5px">${aiLinkHtml(a)}</div></div>
          </div>
          ${a.inExtent ? '' : `<div class="mono" style="font-size:10.5px;opacity:.85">${esc(aiBoundaryNote(a))}</div>`}
        </div>
      </div>`; }
    return `
      <div class="story">
        <div style="flex:1 1 200px;min-width:min(100%,180px);display:flex;flex-direction:column;gap:14px">${photo}
          <div style="display:flex;flex-direction:column;gap:10px">${pin}
            <div><div class="col-label">State / county</div><div style="font-size:13px;opacity:.85">Not in survey</div></div>
            ${where}
          </div>
        </div>
        <div style="flex:2 1 340px;min-width:min(100%,280px);display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:baseline;justify-content:space-between"><h3>${num}. ${esc(s.name)}</h3>${s.submitted ? `<div class="label" style="font-size:10.5px">Submitted ${s.submitted.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>` : ''}</div>
          <div style="align-self:flex-start">${typeChip(s.type)}</div>
          <p>${esc(s.description || '—')}</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px">
            <div><div class="col-label">Project leads</div><div style="font-size:13px;opacity:.85">Not in survey</div></div>
            <div><div class="col-label">Project partners</div><div style="font-size:13px;opacity:.85">Not in survey</div></div>
            <div><div class="col-label">Learn more</div><div class="mono" style="font-size:12.5px">${s.link ? `<a href="${esc(s.link)}" target="_blank" rel="noopener">Landscape Partnership story →</a>` : '—'}${s.publicity ? `<br>${/^https?:/.test(s.publicity) ? `<a href="${esc(s.publicity)}" target="_blank" rel="noopener">Additional publicity →</a>` : esc(s.publicity)}` : ''}</div></div>
          </div>
        </div>
      </div>`;
  }
  function renderStories() {
    const st = stories, rows = storyRows(), f = readFilters('#st-filters'), active = f.q || f.type !== 'all', shown = shownRows(rows, 'st');
    const pool = storyPool(), inside = pool.filter(s => s.inside).length, near = pool.filter(s => s.miles <= 100).length;
    const nSw = st.list.filter(s => s.src === 'sw').length, aiAll = st.list.filter(s => s.src === 'ai'), nAiIn = aiAll.filter(s => s.ai.inExtent).length;
    $('#st-toggles').innerHTML = `<span class="label">Layers</span>${stTogglesHtml()}`;
    const aiOn = stOn.has('ai') && aiAll.length > 0; const box = $('#st-ai-note'); box.hidden = !aiOn; if (aiOn) box.innerHTML = aiNoteHtml(false);
    $('#st-leg-ai').hidden = !aiOn; $('#st-leg-sw-in').hidden = $('#st-leg-sw-near').hidden = !stOn.has('sw');
    $('#st-inside').textContent = fmt(inside); $('#st-near').textContent = fmt(near); $('#st-all').textContent = fmt(pool.length);
    setSummary('sum-stories', fmt(near)); setSummary('pv-stories', fmt(near));
    setRegion('stories', `Partners have published <b>${fmt(nSw)}</b> Southern Waters success stories${aiAll.length ? `; the AI-assisted research layer adds <b>${fmt(aiAll.length)}</b> more records (${fmt(nAiIn)} inside the programmatic boundary, ${fmt(aiAll.length - nAiIn)} outside it)` : ''}. With the layers you have switched on, <b>${fmt(near)}</b> are within 100 miles of your area and ${fmt(inside)} inside it.`);
    $('#st-note').textContent = `${fmt(nSw)} Southern Waters stories · ${fmt(aiAll.length)} AI-assisted records · ${fmt(inside)} inside · ${fmt(near)} within 100 mi (layers on)${st.failed.length ? ` · unavailable: ${st.failed.map(k => STORY_LAYERS.find(l => l.key === k).label).join(', ')}` : ''}`;
    $('#st-note').dataset.stamped = ''; $('#st-method').dataset.stamped = ''; stampSource('#st-note', '#st-method', [STORIES], 'Survey layer');
    const what = f.scope === 'inside' ? 'stories inside your boundary' : f.scope === 'all' ? 'stories in the region' : 'stories inside or within 100 miles';
    $('#st-preview').innerHTML = (stOn.size ? previewLine(shown.length, rows.length, pool.length, what, !!active) : 'No story layers switched on') + (rows.length && f.scope !== 'all' ? ', nearest first' : '');
    csvLabel('#btn-stories-csv', rows.length, !!active);
    $('#st-rows').innerHTML = shown.map(x => storyCard(x, swNumber(rows, x))).join('') || '';
    $('#st-method').textContent = `This run: ${fmt(pool.length)} stories from the layers switched on are on the map (${fmt(nSw)} from the partner survey, ${fmt(aiAll.length)} from AI-assisted research), ${fmt(inside)} inside your boundary and ${fmt(near)} within 100 miles; numbered pins are the cards below. Distances are from each pin to the nearest edge of your boundary. Survey photos are the survey attachments; AI-assisted photos are images on the source organization's site that answered a check${checkedOn() ? ` on ${checkedOn()}` : ''}.`;
    if (st.aiMeta) { const q = st.aiMeta.qa || {}, out = aiAll.filter(s => !s.ai.inExtent), near6 = out.filter(s => s.ai.milesOutside <= 6).length;
      $('#st-ai-method').textContent = `AI-assisted research layer: ${fmt(aiAll.length)} records from “${st.aiMeta.source}”, re-checked before they were added here. Locations were tested against the programmatic boundary shapefile: ${fmt(nAiIn)} sit inside it and ${fmt(out.length)} outside it (${fmt(near6)} of those within 6 miles of its edge, mostly bay, sound and shoreline projects). Partner names were re-matched to the Landscape Partnership directory, and ${fmt(q.lp_dropped || 0)} listed names with no exact directory match (chiefly “Private Landowner”) were left out of the network column. Every source page and photo link was requested${checkedOn() ? ` on ${checkedOn()}` : ''}: ${fmt(q.link_ok || 0)} pages responded, ${fmt(q.link_unverified || 0)} are on sites that refuse automated checks and ${fmt(q.link_broken || 0)} were not found; ${fmt(q.photo_ok || 0)} of ${fmt(q.photo_listed || 0)} photos loaded and only those are shown. Records that cite a compiled report or program page rather than a project page say “Source report”.`; }
    $('#btn-stories-csv').disabled = !rows.length;
    moreButton('#st-rows', 'st', rows.length, renderStories);
    fillPhotos('#st-rows');
    buildAppendixSoon();
  }
  function refreshStoryMap() {
    if (!storyMap || !stories) return;
    if (storyGroup) storyGroup.remove();
    const rows = storyRows(); storyGroup = addStoryLayers(storyMap, rows, (s) => openViewer('stories', s), storyRows(true).filter(s => !rows.includes(s)));
    fitArea(storyMap); // same framing as every other area map; every story in the program is drawn
    snapLater(storyMap, 'stories-well');
  }
  wireFilters('#st-filters', () => { if (stories) { renderStories(); refreshStoryMap(); } });
  $('#btn-stories-csv').onclick = () => stories && downloadCsv(filtersActive('#st-filters') ? 'success-stories-filtered.csv' : 'success-stories.csv',
    ['Layer', 'Project', 'Type', 'Record scope', 'Year', 'Inside boundary', 'Miles from boundary', 'Description', 'Organizations involved', 'Landscape Partnership network', 'State', 'County', 'Waterbody', 'Nearest town', 'Link', 'Link check', 'Additional publicity', 'Submitted', 'Photo URLs', 'Latitude', 'Longitude', 'Research notes'],
    storyRows().map(s => { const a = s.ai || {}; return [s.src === 'ai' ? 'AI-assisted research (not partner-confirmed)' : 'Southern Waters survey', s.name, s.type, a.scope || '', a.year || '', s.inside ? 'Yes' : 'No', s.miles.toFixed(1), s.description, a.orgs || '', (a.lpOrgs || []).join('; '), a.state || '', a.county || '', a.water || '', a.town || '', s.link, a.linkState || '', s.publicity, s.submitted ? s.submitted.toISOString().slice(0, 10) : '', s.photos.map(p => p.url).join(' '), s.lat.toFixed(5), s.lng.toFixed(5), a.notes || '']; }));
  $('#btn-stories-png').onclick = () => {
    const url = snapshots['stories-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'success-stories-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runStories(map) {
    setStatus('sub-stories', 'loading', null, () => runStories(map));
    stories = null; storyMap = map; storyGroup = null; resetFilters('#st-filters'); $('#st-filters [data-filter="scope"]').value = '100';
    ['st-inside', 'st-near', 'st-all'].forEach(id => { $('#' + id).textContent = '…'; }); $('#st-note').textContent = 'Loading success stories…'; $('#st-preview').textContent = 'Loading…'; $('#st-toggles').innerHTML = ''; $('#st-ai-note').hidden = true; $('#st-ai-method').textContent = '';
    try {
      stories = await loadStories();
      const types = {}; stories.list.forEach(s => { if (s.type) types[s.type] = (types[s.type] || 0) + 1; });
      setSelectOptions('#st-filters [data-filter="type"]', 'Any project type', Object.entries(types).sort((x, y) => y[1] - x[1]).map(([v, n]) => ({ v, label: `${v} (${n})` })));
      if (!storyPool().some(s => s.miles <= 100) && storyPool().length) $('#st-filters [data-filter="scope"]').value = 'all'; // nothing nearby → show the region
      renderStories(); refreshStoryMap();
      setStatus('sub-stories', 'done');
    } catch (err) {
      console.error(err);
      setStatus('sub-stories', 'error', err.message);
      ['st-inside', 'st-near', 'st-all'].forEach(id => { $('#' + id).textContent = '##'; });
      $('#st-note').textContent = 'Success stories unavailable right now'; $('#st-preview').textContent = `Could not load the success stories: ${err.message}`;
    }
  }


  // ------------------------------------------------------------------
  // 07 · Agriculture — USDA NASS 2022 Census of Agriculture, county level (data/ag-census-counties.json)
  // ------------------------------------------------------------------
  const AG_FILE = 'data/ag-census-counties.json';
  const AG_VARS = { M001: 'Number of farms', M050: 'Land in farms, % of land area', M051: 'Irrigated land, % of land in farms', M052: 'Total cropland, % of land area', M053: 'Total cropland, % of land in farms', M054: 'Harvested cropland, % of land in farms', M055: 'Irrigated harvested cropland, % of harvested cropland', M056: 'Pastureland, % of land in farms', M003: 'Farms with sales under $10,000, %', M004: 'Farms with sales $10,000–$249,999, %', M005: 'Farms with sales of $250,000 or more, %', M023: 'Net cash farm income of operations, $', M024: 'Net cash farm income of operations, avg per farm $', M025: 'Net cash farm income of producers, $', M026: 'Net cash farm income of producers, avg per farm $', M033: 'Total income from farm-related sources, avg per farm $' };
  const AG_RAMP = ['#F7EFDF', '#EAD8A8', '#D9B86A', '#B89040', '#8A8635'];
  let agAll = null, agAllP = null, ag = null, agMap = null, agGroup = null;
  function loadAgCounties() {
    return agAllP || (agAllP = fetch(AG_FILE, { cache: 'force-cache' }).then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))).then(gj => { agAll = (gj.features || []).filter(f => f.geometry); return agAll; }).catch(err => { agAllP = null; throw err; }));
  }
  const money = (v) => (v == null ? '—' : `${v < 0 ? '−' : ''}$${fmt(Math.abs(v) >= 1e9 ? Math.abs(v) / 1e9 : Math.abs(v) >= 1e6 ? Math.abs(v) / 1e6 : Math.abs(v) >= 1e3 ? Math.abs(v) / 1e3 : Math.abs(v), Math.abs(v) >= 1e3 ? 1 : 0)}${Math.abs(v) >= 1e9 ? ' B' : Math.abs(v) >= 1e6 ? ' M' : Math.abs(v) >= 1e3 ? ' K' : ''}`);
  const pctv = (v, d = 0) => (v == null ? '—' : `${fmt(v, d)}%`);
  const ACRES_PER_SQM = 1 / SQM_PER_ACRE;
  /** Counties intersecting the boundary with their overlap share, plus area-weighted roll-ups. */
  async function loadAg() {
    const all = await loadAgCounties(); const bb = turf.bbox(state.boundary);
    const rows = [];
    all.forEach(f => {
      const cb = turf.bbox(f); if (cb[0] > bb[2] || cb[2] < bb[0] || cb[1] > bb[3] || cb[3] < bb[1]) return;
      let ov = 0; try { const ix = turf.intersect(state.boundary, f); if (ix) ov = turf.area(ix) * ACRES_PER_SQM; } catch { ov = 0; }
      if (ov < 100) return;
      const p = f.properties; const countyAcres = turf.area(f) * ACRES_PER_SQM; const share = Math.min(1, ov / countyAcres);
      const landAcres = (p.ALAND || 0) * ACRES_PER_SQM;
      rows.push({ geoid: p.GEOID, name: p.NAME, state: p.ST, share, overlapAcres: ov, landInside: landAcres * share, farmsInside: (p.M001 || 0) * share, v: p, feature: f });
    });
    rows.sort((a, b) => b.overlapAcres - a.overlapAcres);
    const wmean = (k, w) => { let n = 0, d = 0; rows.forEach(r => { if (r.v[k] == null) return; const wt = w(r); n += r.v[k] * wt; d += wt; }); return d ? n / d : null; };
    const wsum = (k) => { let n = 0, any = false; rows.forEach(r => { if (r.v[k] == null) return; any = true; n += r.v[k] * r.share; }); return any ? n : null; };
    const byLand = (r) => r.landInside, byFarms = (r) => r.farmsInside;
    const farmland = (r) => r.landInside * ((r.v.M050 || 0) / 100); // acres in farms inside the boundary
    const roll = { farms: wsum('M001'), landPct: wmean('M050', byLand), cropPct: wmean('M052', byLand), pasturePct: wmean('M056', farmland), harvestedPct: wmean('M054', farmland), irrigatedPct: wmean('M051', farmland),
      smallPct: wmean('M003', byFarms), midPct: wmean('M004', byFarms), largePct: wmean('M005', byFarms), income: wsum('M023'), producersIncome: wsum('M025'), perFarm: wmean('M024', byFarms), relatedPerFarm: wmean('M033', byFarms) };
    // region-wide (whole programmatic boundary): operational counties as published (frac ≈ 1)
    const rg = { farms: 0, land: 0, landFarms: 0, crop: 0, income: 0, n: all.length };
    all.forEach(f => { const p = f.properties, la = (p.ALAND || 0) * ACRES_PER_SQM * (p.frac || 1); rg.farms += (p.M001 || 0) * (p.frac || 1); rg.land += la; rg.landFarms += la * ((p.M050 || 0) / 100); rg.crop += la * ((p.M052 || 0) / 100); rg.income += (p.M023 || 0) * (p.frac || 1); });
    return { rows, roll, region: rg, acresTotal: turf.area(state.boundary) * ACRES_PER_SQM };
  }
  const agClass = (v) => (v == null ? 0 : v < 10 ? 0 : v < 25 ? 1 : v < 40 ? 2 : v < 60 ? 3 : 4);
  const AG_BREAKS = ['under 10%', '10–25%', '25–40%', '40–60%', '60% or more'];
  function agRows() {
    if (!ag) return []; const f = readFilters('#ag-filters'); const q = (f.q || '').toLowerCase();
    return ag.rows.filter(r => (!q || `${r.name} ${r.state}`.toLowerCase().includes(q)) && (f.state === 'all' || r.state === f.state) && (f.share === 'all' || r.share * 100 >= Number(f.share)));
  }
  function addAgLayers(m, rows, onPick) {
    const group = L.layerGroup().addTo(m);
    rows.forEach(r => group.addLayer(L.geoJSON(r.feature, { style: { color: CREAM, weight: 1.2, fillColor: AG_RAMP[agClass(r.v.M050)], fillOpacity: .78 },
      onEachFeature: (_, lyr) => { lyr.bindTooltip(`<b>${esc(r.name)} County, ${esc(r.state)}</b><br>${pctv(r.v.M050)} of land in farms · ${fmt(r.v.M001 || 0)} farms · ${Math.round(r.share * 100)}% inside your area`, { sticky: true }); lyr.on('click', () => onPick && onPick(r)); lyr.on('mouseover', () => lyr.setStyle({ weight: 3, color: INK })); lyr.on('mouseout', () => lyr.setStyle({ weight: 1.2, color: CREAM })); } })));
    return group;
  }
  function agFields(r) {
    const p = r.v;
    return [['County', `${r.name} County, ${r.state}`, false, 'lead'], ['Inside your area', `${Math.round(r.share * 100)}% of the county · ${fmt(r.overlapAcres)} acres`],
      ['Farms', p.M001 == null ? '—' : fmt(p.M001)], ['Land in farms', `${pctv(p.M050)} of land area`], ['Cropland', `${pctv(p.M052)} of land area · ${pctv(p.M053)} of farmland`], ['Harvested cropland', `${pctv(p.M054)} of farmland`], ['Pastureland', `${pctv(p.M056)} of farmland`], ['Irrigated', `${pctv(p.M051)} of farmland · ${pctv(p.M055)} of harvested cropland`],
      ['Farms by sales', `${pctv(p.M003)} under $10,000 · ${pctv(p.M004)} $10,000–$249,999 · ${pctv(p.M005)} $250,000+`], ['Net cash farm income (operations)', `${money(p.M023)} total · ${money(p.M024)} per farm`], ['Net cash farm income (producers)', `${money(p.M025)} total · ${money(p.M026)} per farm`], ['Farm-related income', `${money(p.M033)} per farm`]];
  }
  const AG_COLS = [
    { k: 'name', label: 'County', help: 'County and state, with the share of the county inside your area and the overlap in acres — the weight it carries in the area-wide figures.', sort: byStr(r => r.name), cell: r => `<div class="v">${esc(r.name)}, ${esc(r.state)}</div><span class="sub">${Math.round(r.share * 100)}% inside your area · ${fmt(r.overlapAcres)} acres</span>` },
    { k: 'farms', label: 'Farms', help: 'Number of farms in the county (2022).', mono: true, desc: true, sort: byNumDesc(r => r.v.M001), cell: r => (r.v.M001 == null ? '—' : fmt(r.v.M001)) },
    { k: 'land', label: 'Land in farms', help: 'Acres of land in farms as a percent of the county’s land area.', mono: true, desc: true, sort: byNumDesc(r => r.v.M050), cell: r => `${pctv(r.v.M050)} of land` },
    { k: 'crop', label: 'Cropland', help: 'Total cropland as a percent of the county’s land area.', mono: true, desc: true, sort: byNumDesc(r => r.v.M052), cell: r => `${pctv(r.v.M052)} of land` },
    { k: 'pasture', label: 'Pastureland', help: 'All pastureland as a percent of land in farms.', mono: true, desc: true, sort: byNumDesc(r => r.v.M056), cell: r => `${pctv(r.v.M056)} of farmland` },
    { k: 'income', label: 'Net cash farm income', help: 'Net cash farm income of operations, county total in dollars (can be negative).', mono: true, desc: true, sort: byNumDesc(r => r.v.M023), cell: r => money(r.v.M023) },
  ];
  function renderAg() {
    const a = ag, R = a.roll, rows = sortRows('ag', agRows(), AG_COLS), active = filtersActive('#ag-filters'), shown = shownRows(rows, 'ag');
    $('#ag-farms').textContent = R.farms == null ? '—' : fmt(R.farms); $('#ag-landpct').textContent = pctv(R.landPct); $('#ag-croppct').textContent = pctv(R.cropPct); $('#ag-income').textContent = money(R.income);
    setSummary('sum-farms', R.farms == null ? '—' : fmt(R.farms));
    { const st = [...new Set(a.rows.map(x => x.state).filter(Boolean))]; setSummary('st-counties', fmt(a.rows.length)); setSummary('st-counties-label', `Counties${st.length ? ` · ${st.join(', ')}` : ''}`); updateAreaSummary(); }
    $('#ag-counties').textContent = fmt(a.rows.length); $('#ag-pasture').textContent = pctv(R.pasturePct); $('#ag-harvested').textContent = pctv(R.harvestedPct); $('#ag-irrigated').textContent = pctv(R.irrigatedPct);
    $('#ag-small').textContent = pctv(R.smallPct); $('#ag-large').textContent = pctv(R.largePct); $('#ag-perfarm').textContent = money(R.perFarm);
    $('#ag-legend').innerHTML = AG_RAMP.map((c, i) => `<div><span class="sw-sq" style="background:${c};box-shadow:inset 0 0 0 1px rgba(46,30,18,.2)"></span>${AG_BREAKS[i]}${i === 0 ? ' of land in farms' : ''}</div>`).join('');
    $('#ag-note').textContent = `2022 Census of Agriculture · ${fmt(a.rows.length)} counties intersect your area · values apportioned by each county’s share inside`;
    $('#ag-preview').innerHTML = previewLine(shown.length, rows.length, a.rows.length, 'counties', active) + (rows.length && !active ? ', most overlap first' : '');
    csvLabel('#btn-ag-csv', rows.length, active);
        $('#ag-rows').innerHTML = tableHtml('ag', AG_COLS, shown, 'No counties match those filters.'); bindTableSort('#ag-rows', 'ag', renderAg);
    moreButton('#ag-rows', 'ag', rows.length, renderAg);
    $('#ag-method').textContent = `This run: ${fmt(a.rows.length)} counties intersect the boundary (overlap of at least 100 acres); their 2022 census values are weighted by the share of each county inside — ${fmt(R.farms || 0)} farms, ${pctv(R.landPct)} of land in farms and ${money(R.income)} of net cash farm income apportioned to your ${fmt(a.acresTotal)} acres.`;
    $('#btn-ag-csv').disabled = !rows.length;
    withRegion(() => { const g = a.region; setRegion('ag', `Across the ${fmt(g.n)} counties of the Southern Waters programmatic boundary there are <b>${fmt(g.farms)}</b> farms; <b>${pctStr(g.landFarms, g.land)}</b> of the land is in farms and ${pctStr(g.crop, g.land)} is cropland, with <b>${money(g.income)}</b> of net cash farm income (2022). Your area: ${fmt(R.farms || 0)} farms, ${pctv(R.landPct)} in farms, ${money(R.income)}.`); });
    buildAppendixSoon();
  }
  function refreshAgMap() {
    if (!agMap || !ag) return;
    if (agGroup) agGroup.remove();
    agGroup = addAgLayers(agMap, agRows(), (r) => openViewer('ag', r));
    const b = addBoundary(agMap); b.bringToFront();
    fitArea(agMap, b);
    snapLater(agMap, 'ag-well');
  }
  wireFilters('#ag-filters', () => { if (ag) { renderAg(); refreshAgMap(); } });
  $('#btn-ag-csv').onclick = () => ag && downloadCsv(filtersActive('#ag-filters') ? 'agriculture-filtered.csv' : 'agriculture.csv',
    ['County', 'State', 'GEOID', 'Share of county inside your area', 'Overlap acres', ...Object.values(AG_VARS)],
    agRows().map(r => [r.name, r.state, r.geoid, (r.share * 100).toFixed(1) + '%', Math.round(r.overlapAcres), ...Object.keys(AG_VARS).map(k => (r.v[k] == null ? '' : r.v[k]))]));
  $('#btn-ag-png').onclick = () => {
    const url = snapshots['ag-well'];
    if (!url) { toast('Map is still rendering — try again in a moment.'); return; }
    const a = Object.assign(document.createElement('a'), { href: url, download: 'agriculture-map.jpg' });
    document.body.appendChild(a); a.click(); a.remove();
  };
  async function runAg(map) {
    setStatus('s-ag', 'loading', null, () => runAg(map));
    ag = null; agMap = map; agGroup = null; resetFilters('#ag-filters');
    ['ag-farms', 'ag-landpct', 'ag-croppct', 'ag-income', 'ag-counties', 'ag-pasture', 'ag-harvested', 'ag-irrigated', 'ag-small', 'ag-large', 'ag-perfarm'].forEach(id => { $('#' + id).textContent = '…'; });
    $('#ag-note').textContent = 'Loading the Census of Agriculture…'; $('#ag-preview').textContent = 'Loading…';
    try {
      ag = await loadAg();
      const states = {}; ag.rows.forEach(r => { states[r.state] = (states[r.state] || 0) + 1; });
      setSelectOptions('#ag-filters [data-filter="state"]', 'Any state', Object.entries(states).sort((x, y) => y[1] - x[1]).map(([v, n]) => ({ v, label: `${v} (${n})` })));
      renderAg(); refreshAgMap();
      setStatus('s-ag', 'done');
    } catch (err) {
      console.error(err);
      setStatus('s-ag', 'error', err.message);
      ['ag-farms', 'ag-landpct', 'ag-croppct', 'ag-income'].forEach(id => { $('#' + id).textContent = '##'; }); setSummary('sum-farms', '##'); setSummary('st-counties', '##');
      $('#ag-note').textContent = 'Census of Agriculture unavailable right now'; $('#ag-preview').textContent = `Could not load the Census of Agriculture: ${err.message}`;
    }
  }

  // ------------------------------------------------------------------
  // Explorer modal
  // ------------------------------------------------------------------
  const viewer = $('#viewer');
  let viewerMap = null, viewerFit = null;

  function showViewer(eyebrow, title) {
    $('#v-eyebrow').textContent = eyebrow; $('#v-title').textContent = title;
    setViewerLegend(null, null); // each explorer sets its own key; never carry one over
    viewer.hidden = false; document.body.style.overflow = 'hidden';
  }
  function closeViewer() {
    viewer.hidden = true; document.body.style.overflow = '';
    if (viewerMap) { viewerMap.remove(); viewerMap = null; }
  }
  $('#v-close').onclick = closeViewer;
  viewer.addEventListener('click', e => { if (e.target === viewer) closeViewer(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && !viewer.hidden) closeViewer(); });
  $('#v-reset').onclick = () => viewerFit && viewerFit();

  function sideEmpty(title, body) {
    $('#v-side').innerHTML = `<div class="empty"><b>${esc(title)}</b><p>${esc(body)}</p></div>`;
  }
  function sideFields(kind, title, fields, onClear) {
    $('#v-side').innerHTML = `
      <div class="kind"><div class="label" style="font-size:10.5px">${esc(kind)}</div><button class="linkbtn" id="v-clear">Clear</button></div>
      <div class="ttl">${esc(title)}</div>
      <div style="display:flex;flex-direction:column;gap:10px">${fields.map(f => `<div class="fld${f[3] === 'lead' ? ' lead' : ''}"><div class="col-label">${esc(f[0])}</div><div class="val">${f[2] ? f[1] : esc(f[1])}</div></div>`).join('')}</div>`;
    $('#v-clear').onclick = onClear;
  }

  /** Colour key overlaid on the explorer map (null removes it). */
  function setViewerLegend(title, html) {
    const old = $('#viewer .vlegend'); if (old) old.remove();
    if (!html) return;
    const div = document.createElement('div'); div.className = 'vlegend';
    div.innerHTML = `<div class="label">${esc(title)}</div>${html}`;
    $('#viewer .vmap').appendChild(div);
  }
  function openViewer(kind, preselect) {
    const r = state.report; if (!r) return;
    viewerPaDraw = null; viewerStDraw = null;
    $('#viewer-static').hidden = true; $('#viewer-map').hidden = false; setViewerLegend(null);
    if (viewerMap) { viewerMap.remove(); viewerMap = null; }

    if (kind === 'boundary') {
      showViewer('00 / reporting area', 'Reporting boundary');
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const lcv = landcover ? L.imageOverlay(landcover.dataUrl, landcover.bounds, { opacity: .85, interactive: false }).addTo(viewerMap) : null;
        const b = L.geoJSON(state.boundary, { style: { color: INK, weight: 3, fillColor: ROJO, fillOpacity: lcv ? 0 : .15 } }).addTo(viewerMap);
        // Explorer controls: the background (Map | Satellite) and land cover are separate, so land cover stays on over either
        const startSat = maps['boundary-map'] && maps['boundary-map']._swMode === 'sat'; // open on the background the reader picked on the page
        let sat = startSat, lcOn = !!lcv;
        const lcKey = () => (landcover ? NLCD_GROUPS.filter(([g]) => landcover.acres[g]).sort((x, y) => landcover.acres[y[0]] - landcover.acres[x[0]]).map(([g, name, col]) => `<div><span class="sw-sq" style="background:${col};width:11px;height:11px;display:inline-block;margin-right:6px;vertical-align:-1px"></span>${lcPct(g, landcover)}% ${esc(name)}</div>`).join('') : '');
        const apply = () => {
          setSatellite(viewerMap, sat, { front: [b] });
          if (lcv) lcv.setOpacity(lcOn ? (sat ? .72 : .85) : 0); // a touch lighter over imagery so the ground shows through
          setViewerLegend('Land cover · NLCD 2021', lcOn ? lcKey() : null);
          ctl.querySelectorAll('[data-base]').forEach(x => x.setAttribute('aria-pressed', String((x.dataset.base === 'sat') === sat)));
          const t = ctl.querySelector('[data-lc]'); if (t) t.setAttribute('aria-pressed', String(lcOn));
        };
        const box = L.control({ position: 'topleft' }); let ctl;
        box.onAdd = () => {
          ctl = L.DomUtil.create('div', 'map-tools'); ctl.setAttribute('data-noprint', '');
          ctl.innerHTML = `<div class="map-mode" role="group" aria-label="Background"><button type="button" data-base="map">Map</button><button type="button" data-base="sat">Satellite</button></div>${lcv ? '<button type="button" class="map-toggle" data-lc aria-label="Show land cover">Land cover</button>' : ''}`;
          L.DomEvent.disableClickPropagation(ctl); L.DomEvent.disableScrollPropagation(ctl);
          ctl.addEventListener('click', (e) => { const x = e.target.closest('button'); if (!x) return; if (x.dataset.base) sat = x.dataset.base === 'sat'; if (x.hasAttribute('data-lc')) lcOn = !lcOn; apply(); });
          return ctl;
        };
        box.addTo(viewerMap);
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        apply(); // after the first view: Leaflet cannot place the satellite veil on a map with no view yet
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        const bb = turf.bbox(state.boundary);
        sideFields('Area of interest', state.boundarySource, [
          ['Total area', `${fmt(r.acres)} acres (${fmt(r.acres / 640, 1)} sq mi)`],
          ['HUC-8 watersheds intersected', String(r.watersheds.length)],
          ['Bounding box', `${bb[1].toFixed(4)}, ${bb[0].toFixed(4)} → ${bb[3].toFixed(4)}, ${bb[2].toFixed(4)}`],
          ['Vertices', String(turf.coordAll(state.boundary).length)],
          ...(landcover ? NLCD_GROUPS.filter(([g]) => landcover.acres[g]).sort((a, b) => landcover.acres[b[0]] - landcover.acres[a[0]]).map(([g, name]) => [`Land cover · ${name}`, `${lcPct(g, landcover)}% · ${fmt(landcover.acres[g])} acres`]) : []),
        ], () => sideEmpty('Reporting boundary', 'The drawn or uploaded area every section of this report is clipped to.'));
      }, 0);
      return;
    }

    if (kind === 'context') {
      showViewer('00 / reporting area', 'Your area within the Southern Waters boundary');
      const ov = swfSpeciesOverlaps();
      const hucFields = (f) => { const p = f.properties; return [['At-risk species', String(swfCount(f)), false, 'lead'], ['Watershed', `${p.NAME} (HUC ${p.HUC8})`], ['States', p.STATES || '—'], ['SE RSGCN species', p.Num_RSGCN != null ? String(p.Num_RSGCN) : '—'], ['Relation to your area', ov.includes(f) ? 'Overlaps your reporting area' : 'Outside your reporting area'], ['Detail', 'Section 01 lists the species for the watersheds your area touches.']]; };
      const summary = () => sideFields('Southern Waters', 'Where your area sits', [
        ['Reporting area', `${state.boundarySource} · ${fmt(r.acres)} acres`],
        ['HUC-8s touched', swfSpecies ? (ov.length ? ov.map(f => `${f.properties.NAME} · ${swfCount(f)}`).join('; ') : 'None') : 'Unavailable'],
        ['How to read the map', 'Darker watersheds have more at-risk aquatic species (six region-wide classes, equal counts of watersheds). Dashed olive line = Southern Waters operational boundary. The ring marks your area. Click a watershed for its counts.'],
      ], summary);
      const pick = (f) => sideFields('HUC-8 watershed', f.properties.NAME, hucFields(f), summary);
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const layers = addContextLayers(viewerMap, pick);
        setViewerLegend('At-risk species per HUC-8', swfLegendHtml());
        viewerFit = () => fitTo(viewerMap, [layers.swf || layers.area], 20); viewerFit();
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        summary();
      }, 0);
      return;
    }

    if (kind === 'ag') {
      showViewer('07 / agriculture (2022 census of agriculture)', 'Working lands by county');
      const summary = () => ag
        ? sideFields('Census of Agriculture', 'Inside your boundary', [['Counties', `${fmt(ag.rows.length)} intersect your area`], ['Farms (apportioned)', ag.roll.farms == null ? '—' : fmt(ag.roll.farms)], ['Land in farms', pctv(ag.roll.landPct)], ['Cropland', `${pctv(ag.roll.cropPct)} of land`], ['Net cash farm income', money(ag.roll.income)], ['How to read the map', 'Counties are shaded by the share of their land in farms (see the key). Click a county for its full census profile.']], summary)
        : sideEmpty('Loading…', 'The Census of Agriculture is still loading.');
      const pick = (r) => sideFields('County · 2022 Census of Agriculture', `${r.name} County, ${r.state}`, agFields(r), summary);
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const g = addAgLayers(viewerMap, agRows(), pick); const b = addBoundary(viewerMap); b.bringToFront();
        setViewerLegend('Land in farms', AG_RAMP.map((c, i) => `<div><span class="sw-sq" style="background:${c};box-shadow:inset 0 0 0 1px rgba(46,30,18,.2)"></span>${AG_BREAKS[i]}</div>`).join('') + `<div><span class="sw-sq" style="background:transparent;box-shadow:inset 0 0 0 3px ${INK}"></span>Your area</div>`);
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        preselect ? pick(preselect) : summary();
      }, 0);
      return;
    }

    if (kind === 'priority') {
      showViewer('02c / priority area boundaries', 'Partner priority areas');
      const summary = () => priority
        ? sideFields('Partner priority layers', 'Inside your boundary', [
            ['Layers overlapping', `${priority.overlapping.length} of ${priority.layers.length}`], ['Priority areas', fmt(priority.areas)], ['Covered by at least one layer', `${fmt(priority.coveredAcres)} acres · ${priority.acresTotal ? Math.round(priority.coveredAcres / priority.acresTotal * 100) : 0}% of your area`],
            ['Layers on the map', `<div class="pa-toggles">${paTogglesHtml()}</div>`, true],
            ['How to read the map', 'Each color is one organization (see the key on the map); strong fills touch your boundary, light fills are the rest of the layer nearby. Click an area for the organization behind it.'],
          ], summary)
        : sideEmpty('Loading…', 'Partner layers are still loading.');
      const pick = (r, f) => sideFields(`Priority area · ${r.L.label}`, f ? f.name : r.L.org, priorityFields(r, f), summary);
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        let vg = null;
        viewerPaDraw = () => { if (!viewerMap) { viewerPaDraw = null; return; } if (vg) vg.remove(); const vrows = priorityRows(); vg = addPriorityLayers(viewerMap, vrows, pick); setViewerLegend('Organizations', orgLegend(vrows) || '<div>No layers switched on</div>'); };
        viewerPaDraw();
        const b = addBoundary(viewerMap); b.setStyle({ dashArray: '7 5' }); b.bringToFront();
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        addBaseSwitch(viewerMap, { pageId: 'priority-map' });
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        preselect ? pick(preselect.r, preselect.f) : summary();
      }, 0);
      return;
    }

    if (kind === 'stories') {
      showViewer('02b / success stories', 'Success stories');
      const aiBox = () => { const d = document.createElement('div'); d.className = 'ai-note compact'; d.setAttribute('role', 'note'); d.innerHTML = aiNoteHtml(true); return d; };
      let onSummary = true;
      const summary = () => {
        onSummary = true; focus = null; if (hl) { hl.remove(); hl = null; }
        if (!stories) { sideEmpty('Loading…', 'Success stories are still loading.'); return; }
        const pool = storyPool();
        sideFields('Success stories', 'Layers on the map', [
          ['Layers', `<div class="pa-toggles st-toggles">${stTogglesHtml()}</div>`, true],
          ['Inside your boundary', fmt(pool.filter(x => x.inside).length)], ['Within 100 miles', fmt(pool.filter(x => x.miles <= 100).length)], ['Region-wide', fmt(pool.length)],
          ['How to read the map', 'Filled pins are Southern Waters stories (red inside your boundary, olive nearby); cream pins with an orange ring are AI-assisted research records. Numbers match the cards in the report; small dots are every other story in the layers switched on. Click any for details.'],
        ], summary);
        if (stOn.has('ai') && pool.some(x => x.src === 'ai')) { const side = $('#v-side'); side.insertBefore(aiBox(), side.children[2] || null); }
      };
      let focus = null, hl = null;
      /** Show where a story is: keep your area in view, add the story, ring it. */
      const showStory = (x, frame) => {
        if (!viewerMap) return; if (hl) hl.remove();
        hl = L.marker([x.lat, x.lng], { interactive: false, keyboard: false, zIndexOffset: 1000, icon: L.divIcon({ className: '', iconSize: [44, 44], iconAnchor: [22, 22], html: `<div style="width:38px;height:38px;border-radius:999px;border:3px solid ${INK};box-shadow:0 0 0 3px ${CREAM},0 2px 10px rgba(46,30,18,.35)"></div>` }) }).addTo(viewerMap);
        if (frame) { const bb = L.geoJSON(state.boundary).getBounds().extend([x.lat, x.lng]); viewerMap.fitBounds(bb, { padding: [60, 60], maxZoom: 11 }); }
      };
      const pick = (x, frame = false) => {
        onSummary = false; focus = x; showStory(x, frame);
        sideFields(x.src === 'ai' ? 'Success story · AI-assisted research' : 'Success story · Southern Waters', x.name, storyFields(x), summary);
        const side = $('#v-side');
        if (x.photos.length) { const img = document.createElement('img'); img.src = x.photos[0].url; img.alt = ''; img.style.cssText = 'display:block;align-self:flex-start;max-width:100%;max-height:240px;width:auto;height:auto;border-radius:14px'; img.onerror = () => img.remove(); side.insertBefore(img, side.children[2] || null); }
        if (x.src === 'ai') side.insertBefore(aiBox(), side.children[2] || null);
      };
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const b = addBoundary(viewerMap); let vg = null;
        viewerStDraw = () => { if (!viewerMap) { viewerStDraw = null; return; } if (vg) vg.remove(); const rows = storyRows(); vg = addStoryLayers(viewerMap, rows, pick, storyRows(true).filter(x => !rows.includes(x))); if (onSummary) summary(); };
        viewerStDraw();
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        addBaseSwitch(viewerMap, { pageId: 'stories-map' });
        // a story opened from "Show on map" is framed with your area; otherwise the usual area framing
        setTimeout(() => { if (!viewerMap) return; viewerMap.invalidateSize(); if (focus && preselect === focus) showStory(focus, true); else viewerFit(); }, 250);
        preselect ? pick(preselect, true) : summary();
      }, 0);
      return;
    }

    if (kind === 'drought') {
      showViewer('06 / drought (u.s. drought monitor)', 'Current drought intensity');
      const summary = () => drought
        ? sideFields('U.S. Drought Monitor', `Week of ${drought.asOf ? new Date(drought.asOf).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '—'}`, [
            ...DM.map(k => [`${k.code} ${k.name} or worse`, `${fmt(drought.cumAcres[k.v])} acres · ${drought.acresTotal ? Math.round(drought.cumAcres[k.v] / drought.acresTotal * 100) : 0}% of your area`]),
            ['Last 5 years', drought.recent.length ? `${drought.inDroughtWeeks} of ${drought.recent.length} weeks with at least half your area in drought · longest spell ${drought.longest} weeks` : '—'],
            ['How to read the map', 'Yellow = abnormally dry, orange = moderate/severe drought, red = extreme, dark red = exceptional. Classes are nested.'],
          ], summary)
        : sideEmpty('Loading…', 'The Drought Monitor is still loading.');
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        addDroughtLayers(viewerMap);
        const b = addBoundary(viewerMap); b.bringToFront();
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        summary();
      }, 0);
      return;
    }

    if (kind === 'orgs') {
      showViewer('02a / conservation organizations + agency offices', 'Organizations near your area');
      const summary = () => orgs
        ? sideFields('Landscape Partnership directory', 'Organizations', [
            ['Inside your boundary', fmt(orgs.inside)], ['Within 50 miles', fmt(orgs.within50)], ['Whole directory', fmt(orgs.list.length)],
            ['How to read the map', 'Red = organization inside your boundary, olive = nearby, terra = agency office or field staff; small dark dots are every other office in the directory. Click a point for contact details and a link to the organization\'s profile.'],
          ], summary)
        : sideEmpty('Loading…', 'The organization directory is still loading.');
      const pick = (o) => { sideFields('Organization · Landscape Partnership', o.name, orgFields(o), summary); if (o.image) { const side = $('#v-side'); const img = document.createElement('img'); img.src = o.image; img.alt = ''; img.style.cssText = 'max-height:90px;width:auto;max-width:100%;object-fit:contain;border-radius:12px;background:var(--paper);padding:8px;align-self:flex-start'; img.onerror = () => img.remove(); side.insertBefore(img, side.children[2] || null); } };
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const b = addBoundary(viewerMap);
        const rows = orgRows(); addOrgLayers(viewerMap, rows, pick, orgRows(true).filter(o => !rows.includes(o)));
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        addBaseSwitch(viewerMap, { pageId: 'orgs-map' });
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        preselect ? pick(preselect) : summary();
      }, 0);
      return;
    }

    if (kind === 'waters') {
      showViewer('04 / impaired waterways (303d)', 'ATTAINS assessed waters');
      const summary = () => waters
        ? sideFields('Inside your boundary', 'Assessed waters', [
            ['Assessment units', `${fmt(waters.list.length)} · ${fmt(waters.impaired)} impaired · ${fmt(waters.listed)} on the 303(d) list`],
            ['Impaired inside your boundary', `${fmt(waters.impairedMiles)} stream miles · ${fmt(waters.impairedAcres)} lake/reservoir acres`],
            ['How to read the map', 'Red = impaired, olive = meets standards, dashed grey = not assessed. Filled shapes are lakes and reservoirs, dots are point-reported waters. Click any water for its record.'],
          ], summary)
        : sideEmpty('Loading…', 'ATTAINS is still loading.');
      const pick = (u) => sideFields('Assessment unit · ATTAINS', u.name, waterFields(u), summary);
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const b = addBoundary(viewerMap);
        addWaterLayers(viewerMap, watersRows(), pick);
        b.bringToFront();
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        addBaseSwitch(viewerMap, { pageId: 'waters-map' });
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        preselect ? pick(preselect) : summary();
      }, 0);
      return;
    }

    if (kind === 'barriers') {
      showViewer('05 / dams + road crossings (sarp)', 'SARP barrier inventory');
      const summary = () => barriers
        ? sideFields('Inside your boundary', 'Dams + road crossings', [
            ['Dams', `${fmt(barriers.damCount)} · ${fmt(barriers.assessed)} with a severity rating`],
            ['Assessed road crossings', `${fmt(barriers.xingCount)} · ${fmt(barriers.severe)} rated severe or significant`],
            ['How to read the map', 'Red = dams (faded when not assessed), gold = road crossings, black = severe or significant crossings. Click any point.'],
          ], summary)
        : sideEmpty('Loading…', 'The barrier inventory is still loading.');
      const pick = (rec) => {
        sideFields(rec.kind === 'dam' ? 'Dam · SARP inventory' : 'Road crossing · SARP inventory', rec.kind === 'dam' ? rec.name : rec.road, rec.kind === 'dam' ? damFields(rec) : xingFields(rec), summary);
        if (rec.kind === 'dam') sarpDetails(rec.id).then(d => { const list = $('#v-side > div:last-child'); if (!d || !list || $('#v-side .ttl')?.textContent !== rec.name) return;
          list.insertAdjacentHTML('afterbegin', `<div class="fld lead"><div class="col-label">Network gain if removed</div><div class="val">${esc(gainText(d))}</div></div>${d.ranked != null ? `<div class="fld"><div class="col-label">In SARP’s prioritization</div><div class="val">${d.ranked ? 'Ranked' : 'Not ranked'}${d.state_nc_tier ? ` · state network-connectivity tier ${esc(d.state_nc_tier)} of 20` : ''}</div></div>` : ''}`); });
      };
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const b = addBoundary(viewerMap);
        addBarrierLayers(viewerMap, damRows(), xingRows(), pick);
        b.bringToFront();
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        addBaseSwitch(viewerMap, { pageId: 'barriers-map' });
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        preselect ? pick(preselect) : summary();
      }, 0);
      return;
    }

    if (kind === 'secas') {
      showViewer('03 / secas blueprint', 'Southeast Conservation Blueprint 2025');
      const statFields = () => bpStats ? [
        ...[4, 3, 2, 1].map(v => [bpClass(v).name, `${fmt(bpStats.acres[v])} acres · ${pctOf(bpStats.acres[v], bpStats.total)} of your area`]),
        ['Lower priority', `${fmt(bpStats.acres[0])} acres · ${pctOf(bpStats.acres[0], bpStats.total)}`],
        ['Area analysed', `${fmt(bpStats.total)} acres at ${bpStats.res} m`],
      ] : [['Status', 'Blueprint statistics are still loading']];
      const summary = () => sideFields('Blueprint · inside your boundary', 'Priority by class', statFields(), summary);
      setTimeout(async () => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const b = addBoundary(viewerMap); b.bringToFront();
        viewerFit = () => fitArea(viewerMap, b); viewerFit();
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        summary();
        try {
          const ov = await blueprintOverlay(viewerMap, state.boundary, { pad: .6, maxPx: 3000 });
          viewerMap.on('click', (e) => {
            const v = ov.lookup(e.latlng.lat, e.latlng.lng); const k = v == null ? null : bpClass(v);
            sideFields('Blueprint · clicked point', k ? k.name : 'Outside Blueprint coverage', [
              ['Location', `${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`],
              ['Blueprint class', k ? k.name : '—'],
              ...statFields(),
            ], summary);
          });
        } catch (err) { console.error(err); }
      }, 0);
      return;
    }

    if (kind === 'species') {
      showViewer('01 / at-risk species', 'Species richness by watershed');
      const empty = () => sideEmpty('Click a watershed', `Each of the ${r.watersheds.length} shaded HUC-8 watersheds intersects your boundary. Click one — or its numbered pin — for its at-risk species roll-up.`);
      const pick = (w) => sideFields(`Watershed · HUC-8 ${w.huc8} · pin ${w.n}`, w.name, [
        ['States', w.states],
        ['At-risk aquatic species', String(w.count)],
        ['List of species' + (w.truncated ? ` (${w.species.length} of ${w.count} named — source list cut at 254 chars)` : ''), w.species.join(', ')],
        ['Species that are also SE RSGCN (Southeast Regional Species of Greatest Conservation Need)', String(w.rsgcnCount)],
        ['List of SE RSGCN species', w.rsgcn.length ? w.rsgcn.join(', ') : 'None recorded'],
        ['Area inside your boundary', w.overlapAcres != null ? `${fmt(w.overlapAcres)} acres` : '—'],
      ], empty);
      setTimeout(() => {
        viewerMap = L.map('viewer-map', { zoomControl: false, fadeAnimation: false, zoomSnap: .1 }); L.control.zoom({ position: 'bottomright' }).addTo(viewerMap); viewerMap._swBase = tiles().addTo(viewerMap);
        const { layer } = addSpeciesLayers(viewerMap, pick, { labels: true });
        const b = addBoundary(viewerMap); b.bringToFront();
        viewerFit = () => fitTo(viewerMap, [layer, b], 24); viewerFit();
        setTimeout(() => { viewerMap && viewerMap.invalidateSize(); viewerFit(); }, 250);
        preselect ? pick(preselect) : empty();
      }, 0);
    }
  }

  function openPlaceholderViewer(title, eyebrow, bgImage) {
    showViewer(eyebrow, title);
    if (viewerMap) { viewerMap.remove(); viewerMap = null; }
    $('#viewer-map').hidden = true;
    const st = $('#viewer-static'); st.hidden = false; st.style.backgroundImage = bgImage || 'url(assets/basemap-anchor.png)';
    viewerFit = null;
    $('#v-side').innerHTML = `<div class="empty"><b>Placeholder</b><p>This layer isn't connected yet. In the finished tool this explorer will show ${esc(title.toLowerCase())} clipped to your reporting boundary, with a detail panel here for whatever you click.</p><span class="ph-banner">Data not yet connected</span></div>`;
  }

  // ------------------------------------------------------------------
  // Admin review report — one Word document listing, per section, the highlighted features and how they
  // are calculated, the data layers (with links and last-updated dates), the table and pop-up fields, the
  // planned narrative text, plus an overview of every layer and the "about the data" write-ups.
  // The .docx is written here without a library (STORE-only zip + minimal WordprocessingML).
  // ------------------------------------------------------------------
  const CRC_TABLE = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = (u8) => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC_TABLE[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  /** files: [{name, text}] → zip Blob (no compression; Word is fine with that). */
  function zipStore(files) {
    const enc = new TextEncoder(); const parts = []; const central = []; let offset = 0;
    const u16 = (v) => [v & 255, (v >>> 8) & 255], u32 = (v) => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, (v >>> 24) & 255];
    files.forEach(f => {
      const name = enc.encode(f.name), data = enc.encode(f.text), crc = crc32(data);
      const head = new Uint8Array([...u32(0x04034b50), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...name]);
      parts.push(head, data);
      central.push(new Uint8Array([...u32(0x02014b50), ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0), ...u32(crc), ...u32(data.length), ...u32(data.length), ...u16(name.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(offset), ...name]));
      offset += head.length + data.length;
    });
    const cdSize = central.reduce((s, c) => s + c.length, 0);
    const eocd = new Uint8Array([...u32(0x06054b50), ...u16(0), ...u16(0), ...u16(files.length), ...u16(files.length), ...u32(cdSize), ...u32(offset), ...u16(0)]);
    return new Blob([...parts, ...central, eocd], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }
  const xml = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  /** blocks: {t:'h1'|'h2'|'h3'|'p'|'li'|'small', text|runs:[{text,b,link}]} | {t:'table', rows:[[cell…]], header:true} → .docx Blob */
  function buildDocx(blocks, title) {
    const rels = []; const relId = (url) => { rels.push(url); return `rId${rels.length + 1}`; };
    const run = (r) => { if (typeof r === 'string') r = { text: r }; const rpr = `${r.b ? '<w:b/>' : ''}${r.link ? '<w:rStyle w:val="Hyperlink"/>' : ''}${r.small ? '<w:sz w:val="18"/><w:color w:val="666666"/>' : ''}`;
      const inner = `<w:r>${rpr ? `<w:rPr>${rpr}</w:rPr>` : ''}<w:t xml:space="preserve">${xml(r.text)}</w:t></w:r>`;
      return r.link ? `<w:hyperlink r:id="${relId(r.link)}">${inner}</w:hyperlink>` : inner; };
    const runs = (b) => (b.runs || [b.text]).map(run).join('');
    const para = (b, style, extraPPr = '') => `<w:p><w:pPr>${style ? `<w:pStyle w:val="${style}"/>` : ''}${extraPPr}</w:pPr>${runs(b)}</w:p>`;
    const cell = (c, head) => `<w:tc><w:tcPr><w:tcW w:w="0" w:type="auto"/>${head ? '<w:shd w:val="clear" w:color="auto" w:fill="EDE1C9"/>' : ''}</w:tcPr><w:p><w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr>${(Array.isArray(c) ? c : [typeof c === 'object' && c && c.text != null ? c : { text: String(c ?? '') }]).map(r => run(head ? Object.assign({ b: true }, typeof r === 'string' ? { text: r } : r) : r)).join('')}</w:p></w:tc>`;
    const body = blocks.map(b => {
      if (b.t === 'h1') return para(b, 'Heading1'); if (b.t === 'h2') return para(b, 'Heading2'); if (b.t === 'h3') return para(b, 'Heading3');
      if (b.t === 'li') return para(Object.assign({}, b, { runs: [{ text: '•  ' }].concat(b.runs || [b.text]) }), null, '<w:ind w:left="360" w:hanging="360"/><w:spacing w:after="60"/>');
      if (b.t === 'small') return para({ runs: (b.runs || [b.text]).map(r => Object.assign({ small: true }, typeof r === 'string' ? { text: r } : r)) }, null, '<w:spacing w:after="60"/>');
      if (b.t === 'table') { const bd = '<w:top w:val="single" w:sz="4" w:color="BBBBBB"/><w:left w:val="single" w:sz="4" w:color="BBBBBB"/><w:bottom w:val="single" w:sz="4" w:color="BBBBBB"/><w:right w:val="single" w:sz="4" w:color="BBBBBB"/><w:insideH w:val="single" w:sz="4" w:color="BBBBBB"/><w:insideV w:val="single" w:sz="4" w:color="BBBBBB"/>';
        return `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/><w:tblBorders>${bd}</w:tblBorders><w:tblCellMar><w:left w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tblCellMar></w:tblPr>${b.rows.map((r, i) => `<w:tr>${r.map(c => cell(c, b.header && i === 0)).join('')}</w:tr>`).join('')}</w:tbl><w:p/>`; }
      return para(b, null, '<w:spacing w:after="120"/>');
    }).join('');
    const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1080" w:right="1080" w:bottom="1080" w:left="1080" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>`;
    const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="21"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="100" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="360" w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="34"/><w:color w:val="AE431E"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="280" w:after="80"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="27"/><w:color w:val="2E1E12"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="200" w:after="60"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="8A8635"/></w:rPr></w:style>
<w:style w:type="character" w:styleId="Hyperlink"><w:name w:val="Hyperlink"/><w:rPr><w:color w:val="0563C1"/><w:u w:val="single"/></w:rPr></w:style></w:styles>`;
    const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>${rels.map((u, i) => `<Relationship Id="rId${i + 2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${xml(u)}" TargetMode="External"/>`).join('')}</Relationships>`;
    const core = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xml(title)}</dc:title><dc:creator>Southern Waters Report Generator</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created></cp:coreProperties>`;
    return zipStore([
      { name: '[Content_Types].xml', text: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>` },
      { name: '_rels/.rels', text: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>` },
      { name: 'word/document.xml', text: document }, { name: 'word/styles.xml', text: styles }, { name: 'word/_rels/document.xml.rels', text: docRels }, { name: 'docProps/core.xml', text: core },
    ]);
  }

  /** Every layer the report touches, with the sections that use it. Built from the same constants the sections use. */
  function adminLayers() {
    const L = [];
    const add = (name, url, sections, note, kind = 'arcgis') => L.push({ name, url, sections, note, kind });
    add('Southern Waters programmatic boundary (Oct 2026, counties dissolved — static)', SWF_BOUNDARY_FILE, ['Intake', '00', 'All'], 'Region picker limit; dashed outline on the maps; every region-wide number uses it.', 'static');
    add('USA counties (Esri, generalized)', COUNTIES, ['Intake', '06'], 'County picker; drought county weights.');
    add('USGS Watershed Boundary Dataset — HUC-8', `${WBD}/4`, ['Intake'], 'HUC-8 picker.');
    add('USGS Watershed Boundary Dataset — HUC-12', `${WBD}/6`, ['Intake'], 'HUC-12 picker.');
    add('NLCD 2021 land cover (MRLC WMS)', NLCD_WMS, ['00'], 'One rendered image of the area, clipped to the boundary and tallied by class colour for the landing-page fill and breakdown.', 'tiles');
    add('At-risk aquatic species by HUC-8 — Oct-2026 layer (static)', 'data/swf-species-huc8.json', ['00', '01'], 'HUC-8 polygons with counts for the new boundary (591 HUC-8s), built from datasets/AtRiskSpecies_SWFAnalysis_huc8_geometry_SWFnewboundary_20260723.zip; section 01 intersects it in the browser.', 'static');
    add('At-risk aquatic species by HUC-8 (endangered_acquatics, AGOL)', SERVICE, ['01'], 'Reference copy on ArcGIS Online (old boundary, 669 HUC-8s); no longer queried for the report.');
    add('At-risk species lists by watershed (full-length table)', LISTS, ['01'], 'Untruncated species lists joined by HUC-8; where the table has two rows for a HUC-8 the one matching the layer’s count is used.');
    add('Region-wide species lists per HUC-8 (static copy)', 'data/swf-species-lists.json', ['01'], 'Feeds “found only in this watershed” and the region-wide HUC-8 counts.', 'static');
    add('Landscape Partnership organizations directory', ORGS, ['02a'], 'Organization points, descriptions, contacts, logos.');
    AGENCY_LAYERS.forEach(a => add(`${a.org} — ${a.short}`, a.url, ['02a'], a.statewide ? 'State offices (every state; those for states touched are listed).' : 'Every staff location in the layer (map); table rows within the chosen distance.'));
    add('Southern Waters success stories (Survey123 results view)', STORIES, ['02b'], 'Project points with description, links and photos.');
    add('Success stories · AI-assisted research (static file built from the Oct 2026 workbook)', AI_STORIES, ['02b'], '682 records compiled by AI-assisted research of public sources; locations, LP-network names and links re-checked by tools/build-stories.py. Not partner-confirmed.');
    add('Confirmed partner stories', '(placeholder — no layer yet)', ['02b'], 'Toggle shown as “coming soon”.');
    PRIORITY_LAYERS.forEach(p => add(`${p.label} (${p.org})`, p.url, ['02c'], p.restricted ? 'Requires an ArcGIS sign-in — shown as unavailable.' : `${p.type}.`));
    add('Southeast Conservation Blueprint 2025 (tiled image service, values)', BP.url.replace(/\/tile$/, ''), ['00', '03'], 'LERC value tiles; requires a sign-in since Oct 2026, so the app falls back to the map tiles below.', 'tiles');
    add('Southeast Conservation Blueprint 2025 (public map tiles)', BP_PNG.url.replace(/\/tile$/, ''), ['00', '03'], 'PNG tiles whose colours encode the four priority classes; read in the browser when the value service is unavailable.', 'tiles');
    add('EPA ATTAINS assessment units — points', `${ATTAINS}/0`, ['04'], 'Merged with lines and areas by assessment unit.');
    add('EPA ATTAINS assessment units — lines', `${ATTAINS}/1`, ['04'], 'Stream / river units.');
    add('EPA ATTAINS assessment units — areas', `${ATTAINS}/2`, ['04'], 'Lake / reservoir / estuary units.');
    add('SARP barriers — Southern Waters copy (dams)', DAMS, ['05'], 'Dams; passability shown as barrier severity.');
    add('SARP assessed road–stream crossings', XINGS, ['05'], 'Potential-project rating and crossing type.');
    add('SARP barrier details API (network gain)', 'https://tool.aquaticbarriers.org/', ['05'], 'Per-dam network gain, fetched through the report server; links go to each dam’s barrier report.', 'tiles');
    add('U.S. Drought Monitor — current polygons', `${USDM}/3`, ['06'], 'Nested D0–D4 polygons for the map and the region share.');
    add('U.S. Drought Monitor — weekly county statistics', `${USDM}/1`, ['06'], 'Ten years of weekly class shares per county.');
    add('USGS Water Data OGC API — latest discharge', USGS_LATEST, ['06'], 'Latest streamflow per gage.', 'tiles');
    add('USGS NWIS daily statistics', USGS_STATS, ['06'], 'Percentiles for today’s date per gage.', 'tiles');
    add('NOAA CPC drought outlook — monthly', `${CPC}/1`, ['06'], 'Outlook categories clipped to the boundary.');
    add('NOAA CPC drought outlook — seasonal', `${CPC}/4`, ['06'], 'Outlook categories clipped to the boundary.');
    add('USDA NASS 2022 Census of Agriculture — operational counties (static)', AG_FILE, ['07'], 'County polygons with 16 census variables, built from datasets/NASS_AgCensus2022_Operational_Shapefiles; apportioned by county share inside the boundary.', 'static');
    add('Region-wide reference numbers (static)', 'data/region-context.json', ['All'], 'Whole-boundary numbers for the region-wide context lines.', 'static');
    return L;
  }
  const PAGE_URL = () => location.origin + location.pathname;

  /** Section review metadata: pull-out stats (how calculated), table columns, pop-out fields, narrative template. */
  const ADMIN_SECTIONS = [
    { id: '01', title: '01 — At-risk species', layers: ['01'],
      stats: [['Species', 'Unique species across the kept HUC-8s (full-length list table first; the HUC-8 layer’s 254-character list as fallback).'], ['Watersheds', 'HUC-8s intersecting the boundary after dropping border touches under 5 acres; a picked HUC-8 uses that watershed only.'], ['SE RSGCN', 'Species also on the watershed’s Southeast Regional Species of Greatest Conservation Need list.'], ['Map', 'HUC-8s shaded by species count in six region-wide classes (equal counts of HUC-8s, same breaks as the landing map); numbered pins match the explorer.'], ['Region-wide context', 'Median and max species per HUC-8 across all 669; rank of the richest touched watershed.']],
      table: [['Species', 'Common names of at-risk aquatic species.'], ['Your Area Occurrence', 'Your area covers N HUC-8 watersheds; how many watersheds in the selection area the species appears in.'], ['Region-Wide Occurrence', 'There are 669 HUC-8 watersheds in the Southern Waters Program Area; how many of them the species appears in (“only here” when just this one).'], ['SE RSGCN', 'Southeast Regional Species of Greatest Conservation Need. The data does not contain all SE RSGCN species: it lists species ranked S1–S3 / G1–G3 and flags which of those are also SE RSGCN.']],
      popup: [['States', 'From the HUC-8 layer.'], ['At-risk aquatic species', 'Count for the watershed.'], ['List of species', 'Full list, with a note when the source list was truncated.'], ['Species that are also SE RSGCN (Southeast Regional Species of Greatest Conservation Need) / List', 'Count and names.'], ['Area inside your boundary', 'Acres of the watershed inside the boundary.']],
      narrative: 'The reporting area intersects {nHuc} HUC-8 watershed(s) that together hold {nSpecies} at-risk aquatic species, {nRsgcn} of which are Southeast Regional Species of Greatest Conservation Need. {richest} carries the most ({richestCount}); the regional median is {regionMedian}. {nShared} species occur in every watershed touched.' },
    { id: '02a', title: '02a — Organizations + agency offices', layers: ['02a'],
      stats: [['Orgs inside', 'Directory points inside the boundary.'], ['Within 50 mi', 'Directory points within 50 miles of the nearest boundary edge (the whole published directory is fetched and drawn).'], ['Agency offices', 'USFWS PFW and Coastal Program staff within 50 miles plus the NRCS state office for every state touched.'], ['NRCS state office contact', 'Name, address and link for each state touched.'], ['Region-wide context', 'Directory organizations inside the whole Southern Waters boundary vs within 50 miles of the area.']],
      table: [['Logo', 'Directory logo when one is published.'], ['Organization name / Agency', 'Directory title or agency name; sub-line with source, distance or “serves your state”, and LP profile link.'], ['Potential point of contact', 'Staff member, title, phone, email from the agency layer (hedged); directory phone / email; “Contact the state office” for NRCS.'], ['Address', 'Street, city, state, postal code.'], ['Description of org', 'Directory or programme description.'], ['Website URL', 'Website or programme page.']],
      popup: [['Organization / Agency', 'Name (bold).'], ['Potential point of contact', 'Agency rows only.'], ['Source', 'Layer and type (agency rows).'], ['Address', 'Full address.'], ['Location vs your boundary', 'Inside, or miles away.'], ['Description', 'Full text.'], ['Phone / Email / Website', 'As published.'], ['Landscape Partnership profile', 'Link.'], ['Address source', 'AI-assisted lookup note when applicable.']],
      narrative: '{nInside} conservation organizations from the Landscape Partnership directory are based inside the area and {nNear} within 50 miles, including {examples}. Federal field contacts nearby include {agencyExamples}; the NRCS state office(s) for {states} serve the area.' },
    { id: '02b', title: '02b — Success stories (beta)', layers: ['02b'],
      stats: [['Layer toggles', 'Southern Waters Success Stories (survey), Confirmed Partner Stories (placeholder, coming soon) and Success Stories · AI-assisted research; the survey and AI layers start on.'], ['Inside', 'Stories inside the boundary, layers switched on.'], ['Within 100 mi', 'Within 100 miles of the boundary; the scope widens to the region when nothing is near.'], ['Region-wide', 'All stories in the layers switched on.'], ['AI-assisted notice', 'Coloured box shown while the AI layer is on: source, not partner-confirmed, approximate locations, link-check counts.'], ['Region-wide context', 'Survey stories and AI-assisted records region-wide vs within 100 miles.']],
      table: [['Pin location', 'Latitude / longitude and distance from the boundary.'], ['State / county', 'Not collected by the survey (##).'], ['Title, type, submitted', 'From the survey record.'], ['Description', 'Survey description.'], ['Project leads / Project partners', 'Not collected (##).'], ['Learn more', 'Link to the story on the Landscape Partnership site.'], ['Photo', 'First attachment when present.']],
      popup: [['Project', 'Title.'], ['Type', 'Completed, featured or upcoming.'], ['Location', 'Coordinates and distance.'], ['Description', 'Full text.'], ['Story', 'Link.'], ['Additional publicity', 'Link or text.'], ['Submitted', 'Date.'], ['Photos', 'Count; first photo shown.']],
      narrative: 'Partners have shared {nNear} Southern Waters success stories within 100 miles of the area ({nInside} inside it), such as {examples}. The programme’s story list is young ({nAll} published), so this section will grow.' },
    { id: '02c', title: '02c — Priority area boundaries', layers: ['02c'],
      stats: [['Layers overlap, of N in our database', 'Partner layers with at least one feature intersecting the boundary, of all configured layers.'], ['% of your area in ≥1 priority layer', 'Union of every intersecting feature clipped to the boundary, as a share of its acres.'], ['Per-layer areas and acres', 'Features intersecting the boundary and their clipped acres.'], ['Map', 'One palette colour per organization, semi-transparent.'], ['Region-wide context', 'Priority-area counts per layer inside the whole boundary vs the areas touched.']],
      table: [['Organization', 'Organization behind the layer, with layer name and colour swatch.'], ['Type', 'Federal Agency, State Agency, Chapter/Branch of NGO, Local Non-Profit, Academic, Private.'], ['Description of org', 'Authored one-liner.'], ['Description of priority layer', 'Authored one-liner plus areas inside, acres, share and first names.'], ['Website URL', 'Programme page.']],
      popup: [['Organization', 'Bold, first.'], ['Priority area', 'Feature name.'], ['Inside your boundary', 'Acres and share.'], ['Type', 'Organization type.'], ['Description of org / Description of priority layer', 'Authored text.'], ['In your area', 'Feature count and acres.'], ['Website / Layer', 'Programme page and ArcGIS service.']],
      narrative: '{coveredPct} of the area falls inside at least one partner priority layer. {layerList} identify parts of it as a focus area, so proposals here can point to existing partner commitments.' },
    { id: '03', title: '03 — SECAS Blueprint', layers: ['03'],
      stats: [['% and acres per class', 'Blueprint 2025 tiles decoded in the browser at the finest level needing ≤36 tiles; the boundary is rasterised per tile and cells summed per class, scaled by cos²(latitude).'], ['Highest priority acres (landing)', 'Class-4 acres from the same computation.'], ['Share bar', 'All five classes; acres analysed and acres outside coverage.'], ['Class toggles', 'Show / hide classes on the map.'], ['Region-wide context', 'Class shares for the whole boundary (precomputed at 1,920 m).']],
      table: [['(no table)', 'Stat cards and a share bar only.']],
      popup: [['Location', 'Clicked coordinates.'], ['Blueprint class', 'Class at the click.'], ['Class acres and shares', 'Inside the boundary.'], ['Area analysed', 'Acres and cell size.']],
      narrative: '{pct4} of the area ({acres4} acres) is in the Southeast Conservation Blueprint’s highest priority class and {pct3} in high priority, compared with {regionPct4} and {regionPct3} across the Southern Waters boundary. {pct0} is lower priority.' },
    { id: '04', title: '04 — Impaired waterways (303d)', layers: ['04'],
      stats: [['Assessed waters', 'ATTAINS points, lines and areas intersecting the boundary, merged per assessment unit (capped at 6,000 per layer).'], ['Impaired / On 303(d) list', 'Units with overall status Not Supporting; units on the 303(d) list.'], ['% impaired / % listed', 'Shares of assessed units.'], ['Impaired stream miles', 'Length of impaired line units inside the boundary.'], ['Impaired lake / reservoir acres', 'Impaired polygon units clipped to the boundary.'], ['Region-wide context', 'Assessed, impaired and listed units and lengths for the whole boundary.']],
      table: [['Waterbody', 'Name, identifier, type, EPA report link.'], ['Impaired?', 'Yes / No / Not assessed.'], ['303(d)?', 'On the list.'], ['Ecological use', 'Use-support status.'], ['Fish consumption', 'Use-support status.'], ['Recreational use', 'Use-support status.']],
      popup: [['Assessment unit', 'Identifier and type.'], ['Overall status', 'With IR category.'], ['Impaired? / On 303(d) list?', 'Yes / No.'], ['Has TMDL / restoration plan?', 'TMDL, alternative plan or none.'], ['Designated uses', 'Each use with its status.'], ['Causes of impairment', 'List.'], ['Inside your boundary', 'Clipped miles or acres.'], ['Reported by', 'Organization and cycle.'], ['Waterbody report', 'How’s My Waterway link.']],
      narrative: 'EPA’s ATTAINS database lists {nUnits} assessed waters in the area; {nImpaired} ({pctImpaired}) are impaired and {nListed} are on the 303(d) list, totalling {impairedMiles} impaired stream miles and {impairedAcres} impaired lake acres. The most common causes are {topCauses}.' },
    { id: '05', title: '05 — Dams + road crossings (SARP)', layers: ['05'],
      stats: [['Dams / Assessed road crossings', 'Server-side counts of points inside the boundary (up to 8,000 per layer downloaded).'], ['Dams with a severity rating', 'Share of dams with known passability.'], ['Crossings rated severe or significant', 'Potential-project rating Severe or Significant Barrier.'], ['Network gain', 'Stream miles reopened if a dam were removed, from SARP’s barrier details (through the report server).'], ['Region-wide context', 'Dams and crossings inside the whole boundary and their rated shares.']],
      table: [['Dam', 'Name with river, SARP record link and network gain.'], ['Barrier severity', 'Complete / Partial / No barrier / Not assessed.'], ['Potential feasibility', 'SARP feasibility text.'], ['Road', 'Road name with stream.'], ['Potential project', 'SARP rating.'], ['Crossing type', 'Culvert, bridge, ford, etc.']],
      popup: [['Network gain if removed', 'Miles reopened (perennial miles, upstream network) — dams, when SARP details are available.'], ['In SARP’s prioritization', 'Ranked / not ranked and state network-connectivity tier.'], ['Dam / River / Barrier severity / Potential feasibility', 'As in the table.'], ['Owner', 'Owner type.'], ['T&E species upstream', 'Count.'], ['Resource-manager priority', 'When set.'], ['County / SARP ID / SARP record', 'Location, identifier, link to the barrier report.'], ['Road / Stream / Potential project / Crossing type / SE AOP determination / Condition / County / SARP ID', 'Crossing rows.']],
      narrative: 'SARP’s inventory records {nDams} dams and {nXings} assessed road–stream crossings inside the area. {nComplete} dams are complete barriers and {nFeasible} are rated likely or possibly feasible to remove; removing {topDam} would reopen {topGain} miles. {nSevere} crossings are severe or significant barriers.' },
    { id: '06', title: '06 — Drought (U.S. Drought Monitor)', layers: ['06'],
      stats: [['% in drought now / most severe class', 'County class shares weighted by each county’s acres inside the boundary (D1 and worse = drought).'], ['D0+ share, D1+ acres, D2+ acres', 'Same weighting, cumulative classes.'], ['Weeks in drought · 5 yrs / longest spell / worst week', 'Weekly area-weighted D1+ share; a week counts when at least half the area is in drought.'], ['10-year chart', 'Weekly stacked class shares.'], ['Streamflow right now', 'USGS gages inside (or nearest to) the boundary: latest discharge classed against that gage’s percentiles for today’s date.'], ['Drought outlook', 'NOAA CPC monthly and seasonal outlook categories as shares of the area.'], ['Region-wide context', 'Share of the whole boundary in D1+ this week.']],
      table: [['County', 'County and state.'], ['Worst class now', 'Highest class present.'], ['In drought now (D1+)', 'Share of the county.'], ['Weeks in drought · 5 yrs', 'Weeks with ≥50% in D1+.'], ['Weeks severe+ · 5 yrs', 'Weeks with ≥50% in D2+.'], ['Gage (streamflow table)', 'Gage name, site number, drainage area.'], ['Flow now', 'Latest discharge (cfs) and reading age.'], ['vs normal', 'Much below / below / normal / above / much above, with today’s median.']],
      popup: [['Each class or worse', 'Acres and share of the area.'], ['Last 5 years', 'Weeks in drought and longest spell.'], ['How to read the map', 'Colour key; gage points show today’s flow class.']],
      narrative: 'As of the {asOf} Drought Monitor, {pctD1} of the area is in drought ({worst} at worst) against {regionPct} across the Southern Waters boundary. {gagesBelow} of {gages} USGS gages are flowing below normal for the date, and the seasonal outlook through {target} calls for {outlookTop}. Over the last five years the area spent {weeks} of {weeksTotal} weeks in drought.' },
    { id: '07', title: '07 — Agriculture (2022 Census of Agriculture)', layers: ['07'],
      stats: [['Farms', 'Sum over intersecting counties of farms × the share of the county inside the boundary.'], ['Of land in farms / of land is cropland', 'County percentages averaged, weighted by the county land inside the boundary.'], ['Net cash farm income', 'County totals (operations) × share inside, summed.'], ['Pastureland / harvested / irrigated % of farmland', 'Averaged, weighted by farmland acres inside the boundary.'], ['Farms by sales class', 'Percentages averaged, weighted by farms inside.'], ['Net cash income per farm', 'Averaged, weighted by farms inside.'], ['Map', 'Counties shaded by land in farms (% of land area), five classes.'], ['Region-wide context', 'Totals for all 1,209 operational counties of the programmatic boundary.']],
      table: [['County', 'County and state, with the share of the county inside your area and the overlap acres.'], ['Farms', 'Number of farms (county total).'], ['Land in farms', '% of county land area.'], ['Cropland', '% of county land area.'], ['Pastureland', '% of land in farms.'], ['Net cash farm income', 'Operations, county total ($).']],
      popup: [['County', 'Name and state (bold).'], ['Inside your area', 'Share and acres.'], ['Farms', 'Count.'], ['Land in farms / Cropland / Harvested cropland / Pastureland / Irrigated', 'Percentages as published.'], ['Farms by sales', 'Three sales classes.'], ['Net cash farm income (operations / producers)', 'Totals and per-farm averages.'], ['Farm-related income', 'Average per farm.']],
      narrative: 'The area overlaps {nCounties} counties where the 2022 Census of Agriculture counted about {farms} farms. {landPct} of the land is in farms and {cropPct} is cropland; pasture makes up {pasturePct} of farmland. Net cash farm income apportioned to the area is {income}, about {perFarm} per farm, against {regionLandPct} of land in farms across the Southern Waters programmatic boundary.' },
  ];

  async function buildAdminReport() {
    const layers = adminLayers();
    const dates = await Promise.all(layers.map(l => (l.kind === 'arcgis' ? Promise.race([sourceDate(l.url).catch(() => null), new Promise(r => setTimeout(() => r(null), 12000))]) : Promise.resolve(null))));
    let region = null; try { region = await regionCtxP; } catch { /* none */ }
    const updated = (l, i) => (l.kind === 'static' ? (l.url.endsWith('region-context.json') && region && region.computed ? `computed ${region.computed}` : 'shipped with the app') : dates[i] ? fmtDate(dates[i]) : 'not published');
    const link = (l) => [{ text: l.name, link: /^https?:/.test(l.url) ? l.url : PAGE_URL() + l.url }];
    const B = [];
    B.push({ t: 'h1', text: 'Southern Waters Report Generator — admin review' });
    B.push({ t: 'p', text: `Generated ${new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}. For each report section: the pull-out stats, the data layers (last-updated dates read live from each ArcGIS service), the columns of the data table, the fields of the map pop-out, the “about the data” text, and the narrative text the section would generate.` });
    B.push({ t: 'h2', text: 'Intake' });
    B.push({ t: 'p', text: 'Users define an area three ways: draw a polygon, upload a shapefile / GeoJSON / KML, or pick a county, HUC-8 or HUC-12 (limited to the Southern Waters operational boundary). Every section is then clipped to that area. Region picks and drawn polygons produce shareable links; the PDF button renders the report on the server.' });
    B.push({ t: 'table', header: true, rows: [['Layer', 'Last updated', 'Role'], ...layers.map((l, i) => [l, i]).filter(([l]) => l.sections.includes('Intake')).map(([l, i]) => [link(l), updated(l, i), l.note])] });
    ADMIN_SECTIONS.forEach(sec => {
      B.push({ t: 'h2', text: sec.title });
      B.push({ t: 'h3', text: 'Pull-out stats' }); B.push({ t: 'table', header: true, rows: [['Stat', 'How it is calculated'], ...sec.stats] });
      B.push({ t: 'h3', text: 'Data layers' }); B.push({ t: 'table', header: true, rows: [['Layer', 'Last updated', 'Role'], ...layers.map((l, i) => [l, i]).filter(([l]) => l.sections.some(x => sec.layers.includes(x))).map(([l, i]) => [link(l), updated(l, i), l.note])] });
      B.push({ t: 'h3', text: 'Columns in the data table' }); B.push({ t: 'table', header: true, rows: [['Column', 'What it shows'], ...sec.table] });
      B.push({ t: 'h3', text: 'Fields in the pop-out' }); B.push({ t: 'table', header: true, rows: [['Field', 'What it shows'], ...sec.popup] });
      B.push({ t: 'h3', text: 'About the data' });
      const secEl = document.getElementById(sec.id === '01' ? 's-species' : sec.id === '02a' ? 'sub-orgs' : sec.id === '02b' ? 'sub-stories' : sec.id === '02c' ? 'sub-priority' : sec.id === '03' ? 's-secas' : sec.id === '04' ? 's-waters' : sec.id === '05' ? 's-barriers' : 's-drought');
      const about = secEl ? secEl.querySelector('.about-wrap .about') : null;
      if (about) about.querySelectorAll('p, li').forEach(el => { const runs = []; el.childNodes.forEach(n => { if (n.nodeType === 3) runs.push({ text: n.textContent }); else if (n.tagName === 'A') runs.push({ text: n.textContent, link: n.href }); else runs.push({ text: n.textContent, b: n.tagName === 'B' || n.tagName === 'STRONG' }); }); if (runs.map(r => r.text).join('').trim()) B.push({ t: 'p', runs: runs.map(r => Object.assign({}, r, { text: r.text.replace(/\s+/g, ' ') })) }); });
      else B.push({ t: 'p', text: '(no about text found)' });
      B.push({ t: 'h3', text: '“Copy narrative” text' }); B.push({ t: 'p', text: sec.narrative }); B.push({ t: 'small', text: 'Planned feature: braces are filled from the section’s numbers; clauses drop out when a value is zero or a source failed.' });
    });
    return buildDocx(B, 'Southern Waters Report Generator — admin review');
  }
  const adminBtn = $('#btn-admin');
  if (adminBtn) adminBtn.onclick = async () => {
    adminBtn.disabled = true; const label = adminBtn.textContent; adminBtn.textContent = 'Building admin report…';
    try {
      const blob = await buildAdminReport();
      const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: `southern-waters-admin-report-${new Date().toISOString().slice(0, 10)}.docx` });
      document.body.appendChild(a); a.click(); a.remove(); toast('Admin report downloaded');
    } catch (err) { console.error(err); toast('Could not build the admin report: ' + err.message); }
    adminBtn.disabled = false; adminBtn.textContent = label;
  };

  // ------------------------------------------------------------------
  // Boot
  // ------------------------------------------------------------------
  setMode('draw');
  renderDraw();
  labelFilters();
  { const sk = $('#skip-link'); if (sk) sk.onclick = (e) => { e.preventDefault(); const t = $('#report').hidden ? $('#intake') : $('#report'); t.setAttribute('tabindex', '-1'); t.focus(); t.scrollIntoView(); }; }
  setupAboutPopovers();
  // debug hook for the prototype
  window.__sw = { state, setBoundary, generate, intakeMap, setStatus, showSlide };
  // ?demo — auto-generate a report for a fixed upper-Coosa polygon (used for print/PDF testing)
  // Dev helper (console): await swfDev.regionBlueprint() → Blueprint class acres for the whole Southern Waters boundary (feeds data/region-context.json).
  window.swfDev = { regionBlueprint: () => loadSwf().then(b => blueprintStats(b, { maxTiles: 160 })), regionAcres: () => loadSwf().then(b => turf.area(b) / SQM_PER_ACRE), adminReport: () => buildAdminReport(), shrink: (u, w) => shrinkPhoto(u, w), fillPhotos: (scope) => fillPhotos(scope) };
  // ?aoi=<id> — the PDF server posts the user's boundary + form here and prints this page headless.
  const aoiId = new URLSearchParams(location.search).get('aoi');
  const aoiInline = new URLSearchParams(location.search).get('aoib64');
  if (aoiId || aoiInline) {
    (aoiInline ? Promise.resolve(JSON.parse(decodeURIComponent(escape(atob(aoiInline.replace(/-/g, '+').replace(/_/g, '/')))))) : fetch(`/aoi/${encodeURIComponent(aoiId)}`).then(r => r.json())).then(d => {
      const f = d.form || {}; exportAll = !!d.exportAll;
      $('#f-name').value = f.name || ''; $('#f-email').value = f.email || ''; $('#f-org').value = f.org || ''; $('#f-project').value = f.project || '';
      setBoundary(d.boundary, d.source || 'Reporting area', { kind: d.kind || 'upload', code: d.code || null });
      generate();
    }).catch(err => console.error('aoi load failed', err));
  }
  { const q = new URLSearchParams(location.search);
    if (!aoiId && !q.has('demo') && (q.has('huc8') || q.has('huc12') || q.has('county') || q.has('poly'))) restoreFromUrl(q).catch(err => { console.error(err); toast(`Couldn't reopen that report link: ${err.message}`, 6000); }); }
  if (new URLSearchParams(location.search).has('demo')) {
    const pts = [[-85.55, 34.05], [-84.7, 34.1], [-84.55, 34.6], [-85.0, 34.95], [-85.6, 34.7]];
    state.draw = { pts: pts.map(c => L.latLng(c[1], c[0])), closed: true };
    $('#f-name').value = 'Jordan Rivers'; $('#f-org').value = 'Regional Land Trust';
    setBoundary(turf.polygon([[...pts, pts[0]]]), 'Drawn polygon');
    generate();
  }
})();
