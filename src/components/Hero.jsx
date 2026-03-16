import React, { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Stars */}
      <div className="stars" />

      {/* Side Scroll Indicator */}
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <span className="text-gray-500 text-xs tracking-widest select-none"
          style={{ writingMode: 'vertical-rl' }}>MACROTRENDS</span>
        <div className="w-px h-16 bg-gray-700" />
        <svg className="text-gray-500" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto" style={{ paddingBottom: '180px' }}>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ animation: 'fadeup 0.7s ease both' }}>
          Built to deliver
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeup 0.7s ease 0.15s both' }}>
          Axponent is a global performance marketing and user acquisition company, helping brands scale
          efficiently across competitive markets. Founded in 2020, we specialize in acquiring relevant
          content, high-value users through data-driven media execution.
        </p>

        {/* Email Subscribe */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0"
          style={{ animation: 'fadeup 0.7s ease 0.3s both' }}>
          <div className="flex items-center rounded-lg sm:rounded-r-none sm:rounded-l-lg overflow-hidden w-full sm:w-72 md:w-80"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <svg className="ml-3 flex-shrink-0 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent flex-1 px-3 py-3 text-sm text-white outline-none"
              style={{ '::placeholder': { color: '#6B7280' } }}
            />
          </div>
          <button className="btn-submit px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg text-sm font-semibold text-white w-full sm:w-auto">
            Submit
          </button>
        </div>
      </div>

      {/* Glowing Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full" style={{ height: '320px' }}>
        <div className="hero-glow" />
        <div className="hero-glow-ring" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-12 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,160,255,0.7) 0%, transparent 70%)',
            filter: 'blur(10px)',
            animation: 'heroFloat 5s ease-in-out infinite',
          }} />
      </div>
    </section>
  );
}
