import FadeSection from "./FadeSection";

const ITEMS = [
  {
    title: "Creative & Performance Optimization",
    desc: "Continuous testing, optimization, and data-driven focused execution.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4C11.2 4 4 11.2 4 20s7.2 16 16 16 16-7.2 16-16"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <path
          d="M20 10v10l6 6"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="32"
          cy="10"
          r="4"
          fill="#1E40AF"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <path d="M30 10l1.5 1.5L34 8" stroke="#93C5FD" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Measurement & Attribution",
    desc: "MMP integration, event tracking, and real-time performance intelligence.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="20" width="6" height="14" rx="1.5" fill="#1E3A8A" />
        <rect x="13" y="14" width="6" height="20" rx="1.5" fill="#1E40AF" />
        <rect x="22" y="8" width="6" height="26" rx="1.5" fill="#2563EB" />
        <rect x="31" y="4" width="5" height="30" rx="1.5" fill="#3B82F6" />
        <polyline
          points="4,22 10,16 19,18 28,10 36,6"
          stroke="#60A5FA"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Fraud Prevention & Quality Control",
    desc: "Built-in fraud protection, traffic authentication, and compliance management.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4L6 10v10c0 8.8 6 17 14 19 8-2 14-10.2 14-19V10L20 4z"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="rgba(30,64,175,0.2)"
        />
        <path
          d="M14 20l4 4 8-8"
          stroke="#60A5FA"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Strategy & Campaign Planning",
    desc: "Data-led global strategy, audience analysis, and KPI-driven growth strategy.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="rgba(30,64,175,0.2)"
        />
        <rect
          x="22"
          y="6"
          width="12"
          height="12"
          rx="2"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="rgba(30,64,175,0.2)"
        />
        <rect
          x="6"
          y="22"
          width="12"
          height="12"
          rx="2"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="rgba(30,64,175,0.2)"
        />
        <rect
          x="22"
          y="22"
          width="12"
          height="12"
          rx="2"
          stroke="#60A5FA"
          strokeWidth="1.5"
          fill="rgba(37,99,235,0.3)"
        />
        <path
          d="M28 25v6M25 28h6"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Media Buying & User Acquisition",
    desc: "Direct media buying across mobile web, OTT, CTV, DSP & SSP inventory.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="4"
          y="8"
          width="22"
          height="16"
          rx="2"
          stroke="#3B82F6"
          strokeWidth="1.5"
          fill="rgba(30,64,175,0.2)"
        />
        <path
          d="M10 24v4M16 24v4M8 28h16"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="24"
          y="14"
          width="12"
          height="20"
          rx="2"
          stroke="#60A5FA"
          strokeWidth="1.5"
          fill="rgba(37,99,235,0.2)"
        />
        <circle cx="30" cy="30" r="1.5" fill="#60A5FA" />
      </svg>
    ),
  },
];

export default function HowWeDo() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">
            How We Do
          </h2>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {ITEMS.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[280px]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(10,30,100,0.9) 0%, rgba(5,15,60,0.95) 50%, rgba(0,5,30,1) 100%)",
                  border: "1px solid rgba(30,60,180,0.3)",
                }}
              >
                {/* Text top */}
                <div className="flex flex-col gap-3 z-10 relative">
                  <h3 className="font-display font-semibold text-sm text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Large illustration bottom */}
                <div
                  className="flex items-end justify-center mt-6 relative z-10"
                  style={{
                    filter: "brightness(0) invert(1)",
                    transform: "scale(2.2)",
                    transformOrigin: "bottom center",
                    height: "80px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Blue glow at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at bottom, rgba(0,80,255,0.25) 0%, transparent 70%)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {ITEMS.slice(3).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[280px]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(10,30,100,0.9) 0%, rgba(5,15,60,0.95) 50%, rgba(0,5,30,1) 100%)",
                  border: "1px solid rgba(30,60,180,0.3)",
                }}
              >
                {/* Text top */}
                <div className="flex flex-col gap-3 z-10 relative">
                  <h3 className="font-display font-semibold text-sm text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Large illustration bottom */}
                <div
                  className="flex items-end justify-center mt-6 relative z-10"
                  style={{
                    filter: "brightness(0) invert(1)",
                    transform: "scale(2.2)",
                    transformOrigin: "bottom center",
                    height: "80px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Blue glow at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at bottom, rgba(0,80,255,0.25) 0%, transparent 70%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
