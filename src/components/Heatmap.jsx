// The practice × concern heatmap: a port of createHeatmap() from the original
// ConservationPracticeExplorer.vue (same layout constants, colour scale and text wrapping),
// with clickable labels and cell tooltips added.
import { useEffect, useRef, useState } from 'react'
import { select } from 'd3-selection'
import { scaleBand } from 'd3-scale'
import { axisTop, axisLeft } from 'd3-axis'
const d3 = { select, scaleBand, axisTop, axisLeft }
import { colorScale, valueToTextColor, LEGEND_KEYS, displayName } from '../lib/planner.js'

const TOP_LABEL_OFFSET = 110   // Space for the top labels (concern names)
const SIDE_LABEL_OFFSET = 400  // Space for the side labels (conservation names)
const HEATMAP_COLUMN_WIDTH = 110
const HEATMAP_ROW_HEIGHT = 30

export default function Heatmap({ results, highlighted = [], onPractice, onConcern }) {
  const sideRef = useRef(null)
  const gridRef = useRef(null)
  const legendRef = useRef(null)
  const [tip, setTip] = useState(null)

  useEffect(() => {
    const { pairs, practices, concerns } = results
    const side = d3.select(sideRef.current); side.selectAll('*').remove()
    const grid = d3.select(gridRef.current); grid.selectAll('*').remove()
    const legend = d3.select(legendRef.current); legend.selectAll('*').remove()
    if (!pairs.length) return

    let heatmapWidth = HEATMAP_COLUMN_WIDTH * concerns.length
    if (heatmapWidth < 300) heatmapWidth = 350 // minimum width for very few columns
    const heatmapHeight = HEATMAP_ROW_HEIGHT * practices.length

    const svg = grid.append('svg').attr('width', heatmapWidth).attr('height', heatmapHeight + TOP_LABEL_OFFSET).append('g')

    const x = d3.scaleBand().range([0, heatmapWidth]).domain(concerns).padding(0.05)
    const xAxisObj = svg.append('g').attr('class', 'x axis').attr('transform', `translate(0,${TOP_LABEL_OFFSET})`).style('font-size', 15)
      .call(d3.axisTop(x).tickSize(0))
    xAxisObj.select('.domain').remove()
    xAxisObj.selectAll('.tick text').attr('class', 'xlab').call(wrapText, x.bandwidth())
      .on('click', (e, d) => onConcern?.(d))
      .append('title').text(d => `${d} — open in the Handbook`)

    const y = d3.scaleBand().range([0, heatmapHeight]).domain(practices).padding(0.05)
    const sidebarSvg = side.append('svg').attr('width', SIDE_LABEL_OFFSET).attr('height', heatmapHeight + TOP_LABEL_OFFSET)
    const yAxisObj = sidebarSvg.append('g').style('font-size', 15).attr('transform', `translate(${SIDE_LABEL_OFFSET},${TOP_LABEL_OFFSET})`)
      .call(d3.axisLeft(y).tickSize(0))
    yAxisObj.select('.domain').remove()
    yAxisObj.selectAll('.tick text')
      .attr('class', d => `ylab${highlighted.includes(d) ? ' hl' : ''}`)
      .text(t => displayName(t)) // strip trailing (IRA)
      .on('click', (e, d) => onPractice?.(d))
      .append('title').text(d => `${displayName(d)} — open in the Handbook`)

    // values
    const squares = svg.selectAll().data(pairs, d => d.concern + ':' + d.conservation_practice).enter()
    squares.append('rect')
      .attr('x', d => x(d.concern)).attr('y', d => y(d.conservation_practice) + TOP_LABEL_OFFSET)
      .attr('rx', 4).attr('ry', 4).attr('width', x.bandwidth()).attr('height', y.bandwidth())
      .style('fill', d => colorScale(d.value || 0)).style('stroke-width', 4).style('stroke', 'none').style('opacity', 0.8)
      .on('mousemove', (e, d) => setTip({ x: e.clientX, y: e.clientY, d }))
      .on('mouseleave', () => setTip(null))
    squares.insert('text')
      .attr('x', d => x(d.concern) + x.bandwidth() / 2)
      .attr('y', d => y(d.conservation_practice) + TOP_LABEL_OFFSET + y.bandwidth() / 2)
      .attr('dy', 1).attr('text-anchor', 'middle').style('alignment-baseline', 'middle').style('pointer-events', 'none')
      .attr('fill', d => valueToTextColor(d.value)).attr('font-family', 'sans-serif')
      .text(d => d.value)

    // legend
    const legendBoxWidth = 40, legendBoxHeight = 25, legendVerticalOffset = 20, legendHorizontalOffset = 190
    const lsvg = legend.append('svg').attr('width', 400 + LEGEND_KEYS.length * (legendBoxWidth + 5)).attr('height', 65).append('g')
    lsvg.selectAll('legend-boxes').data(LEGEND_KEYS).enter().append('rect')
      .attr('x', (d, i) => legendHorizontalOffset + i * (legendBoxWidth + 5)).attr('y', legendVerticalOffset)
      .attr('width', legendBoxWidth).attr('height', legendBoxHeight).style('fill', d => colorScale(d))
    lsvg.selectAll('legend-numbers').data(LEGEND_KEYS).enter().append('text')
      .attr('x', (d, i) => legendHorizontalOffset + i * (legendBoxWidth + 5) + legendBoxWidth / 2)
      .attr('y', legendVerticalOffset + legendBoxHeight / 2).attr('dy', 1)
      .attr('fill', d => valueToTextColor(d)).text(d => d).attr('text-anchor', 'middle').style('alignment-baseline', 'middle')
    const cap = (xx, yy, t, anchor) => lsvg.append('text').attr('x', xx).attr('y', yy).text(t).attr('text-anchor', anchor).style('alignment-baseline', 'middle').style('font-size', 13)
    cap(legendHorizontalOffset - 8, legendVerticalOffset + legendBoxHeight / 2 - 10, 'Conservation practice', 'end')
    cap(legendHorizontalOffset - 8, legendVerticalOffset + legendBoxHeight / 2 + 10, 'has detrimental effect', 'end')
    cap(legendHorizontalOffset + 8 * (legendBoxWidth + 5), legendVerticalOffset + legendBoxHeight / 2 - 10, 'Conservation practice', 'start')
    cap(legendHorizontalOffset + 8 * (legendBoxWidth + 5), legendVerticalOffset + legendBoxHeight / 2 + 10, 'has protective effect', 'start')
  }, [results, highlighted, onPractice, onConcern])

  return (
    <div className="heat">
      <div className="legend"><div ref={legendRef} /></div>
      <div className="scroller">
        <div className="side" ref={sideRef} />
        <div className="grid" ref={gridRef} />
      </div>
      {tip && (
        <div className="tip" style={{ left: Math.min(tip.x + 14, window.innerWidth - 320), top: tip.y + 14 }}>
          <b>{displayName(tip.d.conservation_practice)}</b><br />{tip.d.concern}<br />
          <span className="mono">effect score {tip.d.value}</span>
        </div>
      )}
    </div>
  )
}

// Adapted from https://gist.github.com/mbostock/7555321 (ISC, Observable Inc.)
function wrapText(text, width) {
  text.each(function () {
    const t = d3.select(this)
    const words = t.text().split(/\s+/).reverse()
    let word, line = [], lineNumber = 0
    const lineHeight = 1.1, y = t.attr('y'), dy = parseFloat(t.attr('dy'))
    let tspan = t.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', dy + 'em')
    word = words.pop()
    while (word) {
      line.push(word)
      tspan.text(line.join(' '))
      if (tspan.node().getComputedTextLength() > width) {
        line.pop()
        tspan.text(line.join(' '))
        line = [word]
        tspan = t.append('tspan').attr('x', 0).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word)
      }
      word = words.pop()
    }
    const tspans = t.selectAll('tspan')
    const h = 1.05
    tspans.each(function (d, i) {
      let ddy = i * h
      ddy -= (tspans.size() - 1) * h
      d3.select(this).attr('y', y).attr('dy', ddy + 'em')
    })
  })
}
