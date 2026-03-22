import { useState, useEffect, useRef } from 'react'
import analysisImg      from '../assets/images/home/four-as/analysis.png'
import activationImg    from '../assets/images/home/four-as/activation.png'
import acquisitionImg   from '../assets/images/home/four-as/acquisition.png'
import amplificationImg from '../assets/images/home/four-as/amplification.png'

const SLIDES = [
  {
    key: 'Analysis',
    subtitle: 'Audience, funnel, and attribution insights',
    body: 'We start with data. By analyzing audience behavior, conversion funnels, and attribution signals, we identify where real value comes from and where growth opportunities lie. This foundation ensures every campaign is aligned with performance and ROI from the start.',
    img: analysisImg,
  },
  {
    key: 'Activation',
    subtitle: 'Early funnel optimization',
    body: 'Before scaling, we test and refine. We validate audiences, creatives, and channels to build a strong performance baseline while optimising early engagement and conversions to ensure campaigns scale efficiently.',
    img: activationImg,
  },
  {
    key: 'Acquisition',
    subtitle: 'Intent-led, CPA-driven media execution',
    body: 'Our focus is on acquiring users that matter. With intent-led targeting and CPA-driven buying, we deliver high-quality users through data-backed media execution designed for measurable outcomes and long-term value.',
    img: acquisitionImg,
  },
  {
    key: 'Amplification',
    subtitle: 'Scale what works, cut what does not',
    body: "We amplify your brand's reach by scaling winning campaigns, optimising budgets in real time, and expanding to new markets and audience segments — sustaining growth far beyond initial launch.",
    img: amplificationImg,
  },
]

export default function FourAs() {
  const [active, setActive]     = useState(0)
  const [prev, setPrev]         = useState(null)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  const goTo = (idx) => {
    if (idx === active || animating) return
    setPrev(active)
    setActive(idx)
    setAnimating(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setPrev(null)
      setAnimating(false)
    }, 800)
  }

  // Hero slide shown first, then auto-advances to Analysis
  const [heroVisible, setHeroVisible] = useState(true)
  const sectionRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setHeroVisible(false) },
      { threshold: 0.1 }
    )
    // not used for hero hide; just trigger once on mount
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative" style={{ background: '#020610' }}>

      {/* ── HERO PAGE ── */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '100vh', padding: '100px 24px 100px' }}
      >
        <div className="stars absolute inset-0" />
        <div className="absolute pointer-events-none" style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(0,60,200,0.2) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }} />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.28em] text-blue-400 uppercase mb-6">
            Our Framework
          </p>
          <h2
            className="font-display font-bold text-white mb-6 leading-none"
            style={{ fontSize: 'clamp(3.5rem,9vw,6rem)', letterSpacing: '-0.03em' }}
          >
            Axponent <span style={{ color: '#00A8FF' }}>4A's</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-12">
            A proven four-stage performance framework built to drive measurable
            growth at every stage of your campaign lifecycle.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => {
                  document.getElementById('fouras-slides')?.scrollIntoView({ behavior: 'smooth' })
                  setTimeout(() => goTo(i), 400)
                }}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(0,80,200,0.12)',
                  border: '1px solid rgba(0,120,255,0.3)',
                  color: '#94A3B8',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,80,200,0.28)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = 'rgba(0,168,255,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0,80,200,0.12)'
                  e.currentTarget.style.color = '#94A3B8'
                  e.currentTarget.style.borderColor = 'rgba(0,120,255,0.3)'
                }}
              >
                {s.key}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-gray-500 text-[10px] tracking-widest">SCROLL</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(0,168,255,0.9), transparent)' }} />
        </div>
      </div>

      {/* ── SLIDES AREA — full screen, tab-controlled ── */}
      <div
        id="fouras-slides"
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Render all slides, only active one is visible */}
        {SLIDES.map((slide, i) => {
          const isActive = i === active
          const isPrev   = i === prev

          return (
            <div
              key={slide.key}
              className="absolute inset-0"
              style={{
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              {/* Background image with cross-fade + slight zoom */}
              <div
                className="absolute inset-0"
                style={{
                  transition: 'opacity 0.75s ease, transform 0.75s ease',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.04)',
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.key}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.3) saturate(0.85)' }}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to right, rgba(2,6,20,0.95) 0%, rgba(2,6,20,0.65) 45%, rgba(2,6,20,0.15) 75%, transparent 100%), linear-gradient(to top, rgba(2,6,20,1) 0%, transparent 25%)',
              }} />

              {/* SCROLL DOWN side */}
              <div className="hidden lg:flex flex-col items-center gap-2 absolute right-6 top-1/2 -translate-y-1/2 z-20">
                <span className="text-gray-600 text-[10px] tracking-widest select-none" style={{ writingMode: 'vertical-rl' }}>
                  SCROLL DOWN
                </span>
                <div className="w-px h-10 bg-gray-700" />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>

              {/* Text content — slides up on enter */}
              <div
                className="absolute inset-0 flex flex-col justify-between"
                style={{ paddingBottom: 0 }}
              >
                <div
                  className="flex-1 flex items-center px-10 md:px-16 lg:px-24"
                  style={{
                    transition: 'opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(24px)',
                  }}
                >
                  <div style={{ maxWidth: '520px' }}>
                    <p className="font-display font-bold mb-4"
                      style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#00A8FF' }}>
                      0{i + 1} — {slide.key.toUpperCase()}
                    </p>
                    <h3
                      className="font-display font-bold text-white mb-5 leading-tight"
                      style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', letterSpacing: '-0.02em' }}
                    >
                      {slide.subtitle}
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontSize: '15px', maxWidth: '440px' }}>
                      {slide.body}
                    </p>
                  </div>
                </div>

                {/* Tab bar — always visible, same across all slides */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', background: 'rgba(2,6,20,0.7)', backdropFilter: 'blur(8px)' }}>
                  {SLIDES.map((s, j) => (
                    <button
                      key={s.key}
                      onClick={() => goTo(j)}
                      className="relative flex-1 py-4 text-sm font-medium transition-all duration-300 focus:outline-none"
                      style={{
                        color: active === j ? '#ffffff' : 'rgba(156,163,175,0.7)',
                        background: active === j ? 'rgba(0,80,200,0.22)' : 'transparent',
                        borderBottom: 'none',
                      }}
                    >
                      {active === j && (
                        <span className="absolute top-0 left-0 right-0 h-[2px]"
                          style={{ background: 'linear-gradient(90deg,transparent,#00A8FF,transparent)' }} />
                      )}
                      {s.key}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}