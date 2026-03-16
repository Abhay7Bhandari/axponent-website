import FadeSection from './FadeSection'

const EVENTS = [
  {
    label: 'Team at Conference',
    gradient: 'linear-gradient(135deg,#1a2a4a,#0a1528)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M10 50 Q30 20 50 30 Q30 40 10 50z" fill="rgba(0,120,255,0.3)" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="30" cy="30" r="8" fill="rgba(37,99,235,0.4)" stroke="#60A5FA" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: 'Global Summit 2024',
    gradient: 'linear-gradient(135deg,#2a1a3a,#150a2a)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="10" width="40" height="40" rx="8" fill="rgba(124,58,237,0.2)" stroke="#7C3AED" strokeWidth="1.2" />
        <path d="M20 30h20M30 20v20" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'MWC Barcelona',
    gradient: 'linear-gradient(135deg,#1a3a2a,#0a1a10)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="20" stroke="#10B981" strokeWidth="1.2" fill="rgba(16,185,129,0.1)" />
        <path d="M22 30l6 6 10-12" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Ad:Tech India',
    gradient: 'linear-gradient(135deg,#3a1a1a,#1a0a0a)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 10l8 16h18l-14 12 5 17-17-12-17 12 5-17L4 26h18z" fill="rgba(251,191,36,0.3)" stroke="#FBBF24" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: 'Performance Summit',
    gradient: 'linear-gradient(135deg,#1a2a3a,#0a1520)',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M10 44 Q20 20 30 25 Q40 30 50 16" stroke="#60A5FA" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="25" r="5" fill="#2563EB" />
        <circle cx="50" cy="16" r="4" fill="#3B82F6" />
        <circle cx="10" cy="44" r="4" fill="#1D4ED8" />
      </svg>
    ),
  },
]

export default function Events() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">
            Axponent <span className="text-brand-blue">At Events</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {EVENTS.map((ev, i) => (
              <div
                key={i}
                className="event-img rounded-2xl overflow-hidden cursor-pointer relative"
                style={{
                  background: ev.gradient,
                  aspectRatio: '3/4',
                  border: '1px solid rgba(30,50,120,0.4)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {ev.icon}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white text-xs font-medium">{ev.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}
