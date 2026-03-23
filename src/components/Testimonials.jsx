import FadeSection from './FadeSection'

const REVIEWS = [
  {
    name: 'Laura T',
    role: 'Growth Marketer',
    logo: null,
    stars: 5,
    text: "There's always a great idea, but Flynn needs it tense it up and running in 4 months. No tutorials. Just straight to doing.",
  },
  {
    name: 'Pheella Levy',
    role: 'Co-founder, NGM',
    logo: null,
    stars: 5,
    text: "I've been working with Axponent for more than two years on a consistent basis, and their team has proven to be responsive, transparent and highly professional. Our collaboration has always been smooth and reliable.",
  },
  {
    name: 'Tiphut Feifer',
    role: 'Co-founder, NGM',
    logo: null,
    stars: 5,
    text: 'They are very diligent and business-minded partners who understand our strategic marketing specialty and dedication to the work.',
  },
  {
    name: 'Chloe S',
    role: 'Head of Dev',
    logo: null,
    stars: 5,
    text: "We found a reliable ally in Axponent, whose expertise in user acquisition has been instrumental in refining our strategies and delivering better scale to campaigns.",
  },
  {
    name: 'Ethan C',
    role: 'Product Strategist',
    logo: null,
    stars: 5,
    text: "Axponent has become an integral part of our team. Their blend of strategic insight and expertise effectively bridges our target audience and converts them into loyal customers.",
  },
  {
    name: 'Rahul Yadav',
    role: 'Chief Manager – Digital',
    logo: null,
    stars: 5,
    text: 'Angel One has been associated with Axponent for a while. They are very diligent and trustworthy, driving performance-based initiatives with sincerity and dedication.',
  },
  {
    name: 'Mirella Levy',
    role: 'Co-founder, NGM',
    logo: null,
    stars: 5,
    text: "I've been working with Axponent for over five years on a consistent basis, and their team has proven to be responsive, transparent and highly professional.",
  },
  {
    name: 'Chloe R',
    role: 'Head of Ops',
    logo: null,
    stars: 5,
    text: "We've found a reliable ally in Axponent, whose expertise in user acquisition has been instrumental in refining our strategies and achieving better scale in campaigns.",
  },
]

// Split into 2 rows
const ROW1 = REVIEWS.slice(0, 4)
const ROW2 = REVIEWS.slice(4)

function Avatar({ review }) {
  return review.logo ? (
    <img
      src={review.logo}
      alt={review.name}
      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
    />
  ) : (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
      style={{ background: review.color }}
    >
      {review.initials}
    </div>
  )
}

function TestimonialCard({ r }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-5 flex flex-col justify-between"
      style={{
        width: '320px',
        minHeight: '180px',
        background: 'linear-gradient(135deg, rgba(10,18,55,0.9) 0%, rgba(4,8,28,0.95) 100%)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
      }}
    >
      <p className="text-gray-300 text-sm leading-relaxed mb-5">
        "{r.text}"
      </p>
      <div className="flex items-center gap-3">
        <Avatar review={r} />
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-semibold leading-tight">{r.name}</div>
          {r.role && <div className="text-blue-400 text-xs mt-0.5 truncate">{r.role}</div>}
        </div>
        <div className="flex gap-0.5 flex-shrink-0">
          {[...Array(r.stars)].map((_, j) => (
            <span key={j} className="text-yellow-400" style={{ fontSize: '11px' }}>★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, duration, reverse = false }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
      <div
        className="flex gap-4"
        style={{
          width: 'max-content',
          animation: `marquee${reverse ? 'Rev' : ''} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((r, i) => (
          <TestimonialCard key={i} r={r} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <FadeSection>
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <MarqueeRow items={ROW1} duration={32} />
          <MarqueeRow items={ROW2} duration={28} reverse />
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .flex:hover > * {
          animation-play-state: paused;
        }
      `}</style>
    </FadeSection>
  )
}