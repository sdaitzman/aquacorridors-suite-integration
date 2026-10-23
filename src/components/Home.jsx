import { href, BASE } from '../lib/router.js'

const PORTAL = 'https://archive.landscapepartnership.org/networks/working-lands-for-wildlife/landscapes-wildlife/landscapes/aquatics/maps-and-data/aquacorridors-tool-suite'

export default function Home() {
  return (
    <>
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="hero sand" style={{ minHeight: 380 }}>
          <div className="deco" style={{ right: -60, top: -60, width: 260, height: 130, background: 'var(--lmoss)', borderRadius: '0 0 260px 260px' }} />
          <img className="deco art" src={`${BASE}art/watershed.jpg`} alt="" style={{ right: '-8%', bottom: '-10%', width: 'min(60%,720px)' }} />
          <div className="copy" style={{ maxWidth: 520 }}>
            <div className="eyebrow">Working Lands for Wildlife · Aquatics</div>
            <h1>The AquaCorridors<br />Tool Suite</h1>
            <p className="lede">The AquaCorridor Tools aim to streamline collaboration in aquatic conservation across the eastern and central United States, empowering landscape-scale, transformative projects.</p>
            <div className="cluster">
              <a className="pill river" href={href('/planner')}>Start with the Planner →</a>
              <a className="pill" href={href('/handbook')}>Browse the Handbook</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="tools">
        <div className="section-head"><span className="arch" /><span className="title">Tools in the suite</span></div>
        <div className="card-grid">
          <a className="tool-card river has-art" href={href('/planner')}>
            <span className="num">01 · open to everyone</span>
            <span className="t">Planner</span>
            <p>Tell us which resource concerns you have on your land. The Planner lists the NRCS conservation practices that address them, scored with USDA's Conservation Practice Physical Effects (CPPE) data, and links each one to the Handbook.</p>
            <span className="foot"><span className="pill sm sand">Open the Planner →</span></span>
            <img className="circle" src={`${BASE}art/circle-riparian-buffer.png`} alt="" />
          </a>
          <a className="tool-card pine has-art" href={href('/handbook')}>
            <span className="num">02 · open to everyone</span>
            <span className="t">Handbook</span>
            <p>Conservation practices, threats and resource concerns, benefits, NRCS and FSA funding programs, and a directory of other decision-support tools. Explore by benefit, by threat, or by practice.</p>
            <span className="foot"><span className="pill sm sand">Open the Handbook →</span></span>
            <img className="circle" src={`${BASE}art/circle-streambank-protection.png`} alt="" />
          </a>
          <a className="tool-card lmoss" href={`${PORTAL}/aquacorridors-data-layer-library/aquacorridor-data-library`} target="_blank" rel="noopener">
            <span className="num">03 · Landscape Partnership login</span>
            <span className="t">Data Layer Library</span>
            <p>A curated collection of aquatic conservation datasets from agencies and NGOs, hosted on the Landscape Partnership portal.</p>
            <span className="foot"><span className="pill sm">Open on the portal ↗</span></span>
          </a>
          <a className="tool-card sand" href={`${PORTAL}/aquacorridors-mapper/aquacorridors-mapper`} target="_blank" rel="noopener">
            <span className="num">04 · Landscape Partnership login</span>
            <span className="t">Mapper</span>
            <p>Explore and export data for an area of interest: at-risk species by watershed, partner priority areas, contacts and landscape conditions.</p>
            <span className="foot"><span className="pill sm">Open on the portal ↗</span></span>
          </a>
        </div>
      </section>

      <section className="section" id="how">
        <div className="section-head"><span className="arch" style={{ background: 'var(--moss)' }} /><span className="title">How the Planner and Handbook fit together</span></div>
        <div className="row">
          <div className="panel lmoss">
            <div className="ptitle">1 · Pick your resource concerns</div>
            <p className="small">The Planner's concern list is the same list of threats and resource concerns the Handbook documents. Every concern has an info button with its definition and a link to its Handbook page.</p>
          </div>
          <div className="panel sand">
            <div className="ptitle">2 · See which practices help</div>
            <p className="small">Practices are ranked by their combined CPPE effect score across the concerns you chose. The top few are called out first; the full heatmap below shows every practice with any effect.</p>
          </div>
          <div className="panel" style={{ background: 'var(--paper)' }}>
            <div className="ptitle">3 · Read the Handbook page</div>
            <p className="small">Every practice and concern in the Planner links to its Handbook page: definition, purposes, benefits, resource-concern tables, the NRCS practice standard and a short video.</p>
          </div>
        </div>
        <div className="row">
          <div className="hero lmoss" style={{ minHeight: 220 }}>
            <div className="deco" style={{ right: -40, top: -40, width: 240, height: 120, background: 'var(--sand)', borderRadius: '0 0 240px 240px' }} />
            <img className="deco art" src={`${BASE}art/hellbender.jpg`} alt="Eastern Hellbender" style={{ right: '-2%', top: '-4%', width: 'min(46%,480px)', transform: 'rotate(-9deg)' }} />
            <div className="copy">
              <div className="eyebrow">Embeddable</div>
              <h2 style={{ fontSize: 'clamp(22px,3vw,32px)' }}>Every Handbook page has its own link and can be framed into another site.</h2>
              <p className="lede">Open any page in the Handbook and use <b>Embed</b> to copy an iframe snippet. Framed pages show the same markdown, without the site chrome.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
