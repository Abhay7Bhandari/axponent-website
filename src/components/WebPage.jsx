import FadeSection from './FadeSection'

/* ── Section 1: Hero ── */
function WebHero() {
  return (
    <section className="relative min-h-[52vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 leading-tight">
          PERFORMANCE WEB
        </h1>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight" style={{ color: '#00A8FF' }}>
          ACQUISITION AT GLOBAL SCALE
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Axponent drives scalable customer acquisition through high-intent traffic across a curated global
          network of premium publishers and direct partnerships — powered by advanced media buying,
          exclusive supply, and real-time optimization for predictable, ROI-driven growth.
        </p>
      </FadeSection>
    </section>
  )
}

/* ── Section 2: What We Deliver ── */
function WhatWeDeliver() {
  const cards = [
    { title: 'CPA, CPL & CPS-Based Customer Acquisition' },
    { title: 'Conversion-Optimized Web Traffic Built for Performance' },
    { title: 'Scalable Mobile Web & Desktop Campaign Execution' },
    { title: 'Incremental User Growth Through Premium Global Publishers' },
    { title: 'Full-Funnel Acquisition & Retargeting Strategies' },
    { title: 'Vertical Expertise Across Fintech, Gaming, Ecommerce & Lead Generation' },
  ]

  return (
    <FadeSection>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: 'rgba(8,15,50,0.7)', border: '1px solid rgba(0,80,200,0.2)' }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-10">
              What We Deliver
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,50,160,0.25) 0%, rgba(5,10,40,0.85) 100%)',
                    border: '1px solid rgba(0,80,200,0.25)',
                  }}
                >
                  <p className="text-white text-sm font-medium leading-snug">{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 3: Brand Ticker ── */
function BrandTicker() {
  const brands = [
    { name: 'AliExpress', color: '#FF4400' },
    { name: 'klook',      color: '#FF5722' },
    { name: 'Lycamobile', color: '#E91E8C' },
    { name: 'shopify',    color: '#95BF47' },
    { name: 'malaysia',   color: '#00A8FF' },
    { name: 'Surfshark',  color: '#1DB9C3' },
    { name: 'AliExpress', color: '#FF4400' },
    { name: 'klook',      color: '#FF5722' },
    { name: 'Lycamobile', color: '#E91E8C' },
    { name: 'shopify',    color: '#95BF47' },
    { name: 'malaysia',   color: '#00A8FF' },
    { name: 'Surfshark',  color: '#1DB9C3' },
  ]

  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee gap-16 w-max">
        {brands.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm font-bold whitespace-nowrap"
            style={{ color: b.color }}
          >
            <span
              className="w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: b.color, opacity: 0.85 }}
            />
            {b.name}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Section 4: Diverse Needs ── */
function DiverseNeeds() {
  const categories = [
    {
      label: 'Finance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v2M12 16v2M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5S13.7 12 12 12s-3 1.1-3 2.5S10.3 17 12 17s3-1.1 3-2.5" />
        </svg>
      ),
    },
    {
      label: 'E-commerce',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          <path d="M9 6h6M9 10h6M9 14h3" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      label: 'Travel',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      ),
    },
    {
      label: 'Insurance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: 'Education',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      label: 'Home\nImprovement',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
          <path d="M14 6l2 2M16 4l1 1" strokeWidth="1.2" />
        </svg>
      ),
    },
  ]

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12 leading-snug">
            Meeting Diverse Publisher<br />Needs with Precision
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="rounded-xl p-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,20,60,0.9) 0%, rgba(5,10,35,0.95) 100%)',
                  border: '1px solid rgba(30,50,120,0.5)',
                }}
              >
                <span className="text-white text-sm font-medium whitespace-pre-line leading-snug">
                  {cat.label}
                </span>
                <div className="flex-shrink-0 ml-3 opacity-80">{cat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 5: Traffic Channels Diagram ── */
function TrafficChannels() {
  const nodes = [
    { label: 'Performance Publisher &\nComparison Networks', angle: 90,  icon: '👥' },
    { label: 'Native, Display &\nProgrammatic Advertising', angle: 20,  icon: '📺' },
    { label: 'Email & Push High-Intent\nWeb Traffic',          angle: -30, icon: '📧' },
    { label: 'Direct Media Buying &\nExclusive Inventory Access', angle: 210, icon: '🛒' },
    { label: 'Contextual & Intent-Based\nAudience Targeting',  angle: 150, icon: '🎯' },
    { label: 'Google',                                          angle: 120, icon: '🔍' },
  ]

  // Convert polar → % positions (center = 50%,50%, radius = 38%)
  const toPos = (angleDeg, r = 38) => {
    const rad = (angleDeg * Math.PI) / 180
    return {
      left: `${50 + r * Math.cos(rad)}%`,
      top:  `${50 - r * Math.sin(rad)}%`,
    }
  }

  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-4">
            Traffic Channels
          </h2>

          {/* Diagram container */}
          <div className="relative mx-auto" style={{ width: '100%', maxWidth: '640px', aspectRatio: '1/1' }}>

            {/* Outer glow ring */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '55%', height: '55%',
                borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.5)',
                boxShadow: '0 0 40px rgba(0,100,255,0.15)',
              }}
            />
            {/* Inner glow orb */}
            <div
              className="absolute"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '18%', height: '18%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,120,255,0.7) 0%, rgba(0,60,180,0.3) 50%, transparent 80%)',
                boxShadow: '0 0 40px rgba(0,120,255,0.4)',
              }}
            />

            {/* Connector dots on ring */}
            {nodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180
              const r = 27.5 // % of container — sits on ring edge
              const dotLeft = `${50 + r * Math.cos(rad)}%`
              const dotTop  = `${50 - r * Math.sin(rad)}%`
              return (
                <div
                  key={`dot-${i}`}
                  className="absolute"
                  style={{
                    left: dotLeft, top: dotTop,
                    transform: 'translate(-50%,-50%)',
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    background: 'white',
                    boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                    zIndex: 2,
                  }}
                />
              )
            })}

            {/* Node labels */}
            {nodes.map((node, i) => {
              const pos = toPos(node.angle, 44)
              // Determine text alignment by quadrant
              const rad = (node.angle * Math.PI) / 180
              const cx = Math.cos(rad)
              const textAlign = cx > 0.3 ? 'left' : cx < -0.3 ? 'right' : 'center'
              const transform = cx > 0.3
                ? 'translate(0,-50%)'
                : cx < -0.3
                ? 'translate(-100%,-50%)'
                : 'translate(-50%,-50%)'

              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform,
                    textAlign,
                    maxWidth: '130px',
                    zIndex: 3,
                  }}
                >
                  <span style={{ fontSize: '20px', lineHeight: 1 }}>{node.icon}</span>
                  <span
                    className="whitespace-pre-line leading-tight"
                    style={{
                      color: '#fff',
                      fontSize: 'clamp(8px, 1.5vw, 11px)',
                      fontWeight: 500,
                      textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    {node.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Main Web Page ── */
export default function WebPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <WebHero />
      <WhatWeDeliver />
      <BrandTicker />
      <DiverseNeeds />
      <TrafficChannels />
    </div>
  )
}
