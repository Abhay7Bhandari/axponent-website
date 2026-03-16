import { useState } from 'react'
import FadeSection from './FadeSection'

/* ── Section 1: Hero ── */
function VCHero() {
  return (
    <section className="relative flex flex-col items-start justify-center px-4 pt-28 pb-0 overflow-hidden" style={{ minHeight: '90vh' }}>
      <div className="stars" />

      {/* Text content — left aligned */}
      <div className="max-w-6xl mx-auto w-full">
        <FadeSection>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-2 leading-tight max-w-2xl">
            LAUNCH, FUND, AND SCALE<br />HIGH-GROWTH BUSINESSES
          </h1>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight" style={{ color: '#00A8FF' }}>
            WITH AXPONENT
          </h1>
          <button
            className="px-10 py-3 rounded-full text-white font-semibold text-sm mb-12 transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #0050FF, #0090FF)',
              boxShadow: '0 4px 24px rgba(0,100,255,0.45)',
            }}
          >
            Apply Now
          </button>
        </FadeSection>

        {/* Hero image — coin jar scene */}
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            height: 'clamp(280px, 45vw, 460px)',
            background: 'linear-gradient(135deg, #0a0f1a 0%, #111827 40%, #1a0a0a 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Warm light from right */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 80% 50%, rgba(200,80,20,0.25) 0%, transparent 60%)',
          }} />
          {/* Cool light from left */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 20% 60%, rgba(0,80,200,0.12) 0%, transparent 50%)',
          }} />

          {/* SVG coin jar illustration */}
          <svg
            viewBox="0 0 700 400"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Background desk surface */}
            <rect x="0" y="260" width="700" height="140" fill="#111018" rx="0"/>
            <rect x="0" y="258" width="700" height="6" fill="#1a1525" rx="0"/>

            {/* Person silhouette (left side) */}
            <ellipse cx="160" cy="200" rx="90" ry="120" fill="#1a1020" opacity="0.7"/>
            <ellipse cx="160" cy="80" rx="55" ry="65" fill="#111018" opacity="0.8"/>

            {/* Arm reaching in */}
            <path d="M260 160 Q320 140 360 180 Q380 195 375 220 Q370 240 340 248" stroke="#c8956a" strokeWidth="42" strokeLinecap="round" fill="none"/>
            <path d="M260 160 Q320 140 360 180 Q380 195 375 220 Q370 240 340 248" stroke="#b07850" strokeWidth="36" strokeLinecap="round" fill="none"/>

            {/* Hand / fingers */}
            <ellipse cx="348" cy="248" rx="22" ry="14" fill="#c8956a" transform="rotate(-20,348,248)"/>
            <path d="M335 240 Q345 230 360 238" stroke="#b07850" strokeWidth="6" strokeLinecap="round" fill="none"/>
            <path d="M340 252 Q352 244 365 250" stroke="#b07850" strokeWidth="5" strokeLinecap="round" fill="none"/>

            {/* Coin held between fingers */}
            <ellipse cx="355" cy="228" rx="14" ry="14" fill="#D4A843" stroke="#B8902A" strokeWidth="2"/>
            <ellipse cx="355" cy="228" rx="10" ry="10" fill="#E8C060" opacity="0.6"/>
            <text x="355" y="233" textAnchor="middle" fontSize="9" fill="#8B6010" fontWeight="bold">$</text>
            {/* Coin shine */}
            <ellipse cx="350" cy="224" rx="4" ry="3" fill="white" opacity="0.3" transform="rotate(-30,350,224)"/>

            {/* Glass jar */}
            <rect x="370" y="200" width="100" height="130" rx="6" fill="rgba(180,210,230,0.12)" stroke="rgba(180,210,230,0.35)" strokeWidth="2"/>
            {/* Jar opening / lip */}
            <rect x="365" y="193" width="110" height="14" rx="4" fill="rgba(180,210,230,0.15)" stroke="rgba(180,210,230,0.4)" strokeWidth="2"/>
            {/* Jar highlight */}
            <rect x="378" y="208" width="12" height="100" rx="6" fill="rgba(255,255,255,0.06)"/>
            {/* Coins inside jar */}
            {[
              [420, 322, 34, 8],
              [408, 314, 30, 7],
              [425, 308, 28, 7],
              [412, 300, 32, 7],
              [418, 292, 26, 6],
              [410, 285, 30, 6],
              [420, 278, 24, 6],
            ].map(([cx, cy, rx, ry], i) => (
              <g key={i}>
                <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#9A7820" stroke="#C4A030" strokeWidth="1" opacity="0.85"/>
                <ellipse cx={cx} cy={cy - 1} rx={rx} ry={ry} fill="#D4A843" opacity="0.5"/>
              </g>
            ))}
            {/* Jar base */}
            <ellipse cx="420" cy="326" rx="50" ry="10" fill="rgba(180,210,230,0.15)" stroke="rgba(180,210,230,0.3)" strokeWidth="1.5"/>

            {/* Laptop left */}
            <rect x="60" y="245" width="140" height="20" rx="3" fill="#1a1a2e" stroke="#2a2a4e" strokeWidth="1"/>
            <rect x="55" y="262" width="150" height="6" rx="2" fill="#111122" stroke="#222244" strokeWidth="1"/>

            {/* Coins scattered right */}
            {[[510,270],[540,278],[525,262],[555,268]].map(([cx,cy],i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="16" ry="8" fill="#C49A28" stroke="#A07820" strokeWidth="1" opacity="0.7"/>
            ))}

            {/* Shadow behind jar */}
            <ellipse cx="420" cy="332" rx="60" ry="12" fill="rgba(0,0,0,0.4)" />
          </svg>
        </div>
      </div>
    </section>
  )
}

/* ── Section 2: What Do We Offer ── */
function WhatWeOffer() {
  const cards = [
    {
      title: 'Standard Support',
      desc: 'Each company that is accepted into the program receives a standard offer that outlines the terms, benefits, and opportunities provided as part of the collaboration.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      title: 'Partnership Support',
      desc: 'Every founder is supported by a partner who brings extensive investing and operating experience.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      title: 'Founder Compass',
      desc: 'We provide a continuous support system designed to help founders maximize their chances of success.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
        </svg>
      ),
    },
    {
      title: 'Community',
      desc: 'Selected startups gain visibility among a growing and highly engaged tech audience, helping with hiring, customers, and fundraising.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ]

  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12">
            What do we offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,50,160,0.22) 0%, rgba(5,10,40,0.9) 100%)',
                  border: '1px solid rgba(0,80,200,0.25)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,80,200,0.18)' }}
                >
                  {card.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-base">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 3: Focus Areas ── */
function FocusArea() {
  const areas = [
    'Consumer Apps', 'Marketing SAAS', 'Gaming', 'Fintech', 'Healthcare',
    'Retail', 'Gaming', 'AI', 'Cyber Security', 'Food',
  ]

  return (
    <FadeSection>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-10">
            Our Focus Area
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full text-sm text-white cursor-pointer transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(10,20,60,0.8)',
                  border: '1px solid rgba(30,60,160,0.5)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 4: Raise Funds Form ── */
function RaiseFunds() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will review your application.')
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing planet orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: '100%', height: '300px' }}>
        <div style={{
          position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
          width: '100%', height: '260px',
          background: 'radial-gradient(ellipse at center bottom, rgba(0,120,255,0.5) 0%, rgba(0,60,180,0.2) 40%, transparent 70%)',
          filter: 'blur(10px)',
        }}/>
        <div style={{
          position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)',
          width: 'min(900px,95vw)', height: '220px',
          borderRadius: '50%',
          border: '1.5px solid rgba(0,160,255,0.35)',
          boxShadow: '0 0 80px rgba(0,120,255,0.2)',
        }}/>
        <div style={{
          position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)',
          width: 'min(500px,80vw)', height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,160,255,0.55) 0%, transparent 70%)',
          filter: 'blur(18px)',
        }}/>
      </div>

      {/* SCROLL DOWN label */}
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <span className="text-gray-500 text-xs tracking-widest select-none" style={{ writingMode: 'vertical-rl' }}>SCROLL DOWN</span>
        <div className="w-px h-12 bg-gray-700"/>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white text-center mb-12">
          Raise Funds!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'name',  placeholder: 'Enter Your Name', type: 'text'  },
              { name: 'email', placeholder: 'Enter You Mail',  type: 'email' },
            ].map((f) => (
              <input
                key={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,120,255,0.3)' }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(0,180,255,0.7)')}
                onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,120,255,0.3)')}
              />
            ))}
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,120,255,0.3)' }}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(0,180,255,0.7)')}
            onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,120,255,0.3)')}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(90deg, #0060FF, #00B0FF)',
              boxShadow: '0 4px 24px rgba(0,120,255,0.4)',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

/* ── Main Venture Capital Page ── */
export default function VentureCapitalPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <VCHero />
      <WhatWeOffer />
      <FocusArea />
      <RaiseFunds />
    </div>
  )
}
