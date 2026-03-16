import FadeSection from './FadeSection'

const SERVICES = [
  {
    title: 'Performance Marketing',
    desc: "Performance marketing is a game-changer. We'll help your audience with our customized marketing campaigns. Partner with us to take your brand to new heights.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="6" y="26" width="8" height="20" rx="2" fill="#1E40AF" opacity="0.8"/>
        <rect x="18" y="18" width="8" height="28" rx="2" fill="#2563EB"/>
        <rect x="30" y="10" width="8" height="36" rx="2" fill="#3B82F6"/>
        <rect x="42" y="6" width="4" height="40" rx="2" fill="#60A5FA"/>
        <polyline points="6,30 14,20 26,24 38,12 46,8" stroke="#93C5FD" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Targeting',
    desc: "Targeting is a game-changer. We'll help you stay connected with interested audiences and boost your ROI with expert retargeting strategies.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="18" stroke="#2563EB" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="11" stroke="#3B82F6" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="4" fill="#60A5FA"/>
        <path d="M26 8v6M26 38v6M8 26h6M38 26h6" stroke="#2563EB" strokeWidth="1.5"/>
        <circle cx="36" cy="16" r="5" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1"/>
        <path d="M34 16l1.5 1.5L38 14" stroke="#60A5FA" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: 'Branding',
    desc: "A strong brand creates lasting connections with customers. Let our branding experts help you build a brand that resonates, inspires and drives growth.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="16" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 2"/>
        <circle cx="26" cy="26" r="8" fill="#1E3A8A"/>
        <path d="M22 22l8 8M30 22l-8 8" stroke="#60A5FA" strokeWidth="1.5"/>
        <circle cx="26" cy="26" r="3" fill="#3B82F6"/>
      </svg>
    ),
  },
]

export default function WhatWeDo() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-glow rounded-2xl p-6 flex flex-col gap-4">
                <div className="h-36 flex items-center justify-center rounded-xl"
                  style={{background:'linear-gradient(135deg,rgba(15,30,80,0.8),rgba(5,10,40,0.9))'}}>
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
