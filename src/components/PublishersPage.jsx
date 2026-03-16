import { useState } from 'react'
import FadeSection from './FadeSection'

/* ── Section 1: Hero ── */
function PublishersHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          PUBLISHERS &{' '}
          <span style={{ color: '#00A8FF' }}>MEDIA PARTNERS</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Axponent connects premium publishers with quality global campaigns, offering transparent
          tracking, fast approvals, and dedicated support for consistent monetization and long-term
          growth.
        </p>
      </FadeSection>
    </section>
  )
}

/* ── Section 2: App Monetization Cards ── */
function MonetizationCards() {
  const cards = [
    {
      title: 'Fill Rate',
      desc: 'By optimising ad placements in real-time to app environment, we can ensure high fill rates while increasing eCPM.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6"  y1="20" x2="6"  y2="14" />
          <polyline points="2,20 22,20" />
        </svg>
      ),
    },
    {
      title: 'MCM',
      desc: 'Add your account as a partner under our GAM 360 account to unlock seamless, efficient monetization.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: 'Improve Relevance',
      desc: 'We ensure that ads displayed are relevant to your traffic demographics, delivering improved CTRs.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.42 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
          <path d="M14.05 6A5 5 0 0 1 18 10" />
        </svg>
      ),
    },
  ]

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: 'rgba(10,20,60,0.5)', border: '1px solid rgba(0,100,255,0.15)' }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-10">
              See The Difference Our App Monetization Makes.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,60,180,0.25) 0%, rgba(5,10,40,0.8) 100%)',
                    border: '1px solid rgba(0,100,255,0.2)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(0,100,255,0.15)' }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 3: Publisher Categories ── */
function PublisherCategories() {
  const categories = [
    {
      label: 'Fintech',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M9 2.46A10 10 0 0 1 12 2c5.52 0 10 4.48 10 10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 8v1M12 15v1M8 12H7M17 12h-1" />
        </svg>
      ),
    },
    {
      label: 'E-commerce',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9"  cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      label: 'Utilities',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
        </svg>
      ),
    },
    {
      label: 'Gaming',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4M8 10v4M15 11h.01M17 13h.01" />
        </svg>
      ),
    },
    {
      label: 'Sports Betting\n& Casino',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7z" />
          <circle cx="12" cy="9" r="3" />
          <path d="M9 21l3-3 3 3" />
        </svg>
      ),
    },
    {
      label: 'Entertainment',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" />
          <path d="M16 2l-4 5-4-5" />
          <path d="M10 12l5 3-5 3V12z" fill="#00A8FF" fillOpacity="0.3" />
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
                className="rounded-xl p-6 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-blue-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,20,60,0.9) 0%, rgba(5,10,35,0.95) 100%)',
                  border: '1px solid rgba(30,50,120,0.5)',
                }}
              >
                <span className="text-white text-sm font-medium whitespace-pre-line leading-snug">
                  {cat.label}
                </span>
                <div className="flex-shrink-0 ml-3">{cat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 4: What You Can Expect ── */
function WhatToExpect() {
  const features = [
    {
      label: 'Consistent global\ncampaign demand',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      label: 'Competitive and\ntimely payouts',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M6.93 6.93l-2.83 2.83M19.9 19.9l-2.83-2.83M2 12h4M18 12h4M6.93 17.07l-2.83-2.83M19.9 4.1l-2.83 2.83" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 9v3l2 2" />
        </svg>
      ),
    },
    {
      label: 'Transparent tracking &\nattribution',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9V7M12 17v-2M9 12H7M17 12h-2" />
          <path d="M10.17 10.17L8.75 8.75M15.25 15.25l-1.42-1.42M13.83 10.17l1.42-1.42M8.75 15.25l1.42-1.42" />
        </svg>
      ),
    },
    {
      label: 'Dedicated publisher\nsupport',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M9 14l2 2 4-4" stroke="#00A8FF" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      label: 'Long-term scaling\nopportunities',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00A8FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
          <path d="M8 3.5A9 9 0 0 1 21 12" stroke="#00A8FF" strokeOpacity="0.4" />
          <path d="M3.5 8A9 9 0 0 0 12 21" stroke="#00A8FF" strokeOpacity="0.4" />
          <circle cx="12" cy="12" r="3" fill="#00A8FF" fillOpacity="0.15" />
        </svg>
      ),
    },
  ]

  return (
    <FadeSection>
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,60,180,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12">
            What You Can Expect
          </h2>
          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {features.slice(0, 3).map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,40,140,0.3) 0%, rgba(5,10,40,0.85) 100%)',
                  border: '1px solid rgba(0,80,200,0.25)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,80,200,0.15)' }}
                >
                  {f.icon}
                </div>
                <p className="text-white text-sm font-medium whitespace-pre-line leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {features.slice(3).map((f, i) => (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,40,140,0.3) 0%, rgba(5,10,40,0.85) 100%)',
                  border: '1px solid rgba(0,80,200,0.25)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,80,200,0.15)' }}
                >
                  {f.icon}
                </div>
                <p className="text-white text-sm font-medium whitespace-pre-line leading-snug">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

/* ── Section 5: Become A Publisher Form ── */
function BecomePublisher() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you soon.')
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing planet/orb at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '100%',
          height: '280px',
          background:
            'radial-gradient(ellipse at center bottom, rgba(0,120,255,0.5) 0%, rgba(0,60,180,0.25) 35%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(900px, 95vw)',
          height: '220px',
          borderRadius: '50%',
          border: '1.5px solid rgba(0,160,255,0.3)',
          boxShadow: '0 0 80px rgba(0,120,255,0.2)',
        }}
      />
      {/* Extra bright core */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(500px, 80vw)',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,160,255,0.6) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* SCROLL DOWN side label */}
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-gray-500 text-xs tracking-widest select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL DOWN
        </span>
        <div className="w-px h-12 bg-gray-700" />
        <svg
          className="text-gray-500"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white text-center mb-12">
          Become A Publisher
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,120,255,0.3)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(0,180,255,0.7)')}
              onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,120,255,0.3)')}
            />
            <input
              name="email"
              type="email"
              placeholder="Enter You Mail"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,120,255,0.3)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(0,180,255,0.7)')}
              onBlur={(e)  => (e.target.style.borderColor = 'rgba(0,120,255,0.3)')}
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-all"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(0,120,255,0.3)',
            }}
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

/* ── Main Publishers Page ── */
export default function PublishersPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <PublishersHero />
      <MonetizationCards />
      <PublisherCategories />
      <WhatToExpect />
      <BecomePublisher />
    </div>
  )
}
