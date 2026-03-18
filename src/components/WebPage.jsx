import FadeSection from "./FadeSection";

// ─────────────────────────────────────────────
//  IMAGE IMPORTS
//  File locations inside your project:
//
//  src/assets/images/web/
//    ├── deliver-cards/
//    │   ├── cpa-cpl-cps.png               ← card_3__4_.png
//    │   ├── conversion-optimized.png       ← card_6__1_.png
//    │   ├── scalable-mobile-web.png        ← card_7__1_.png
//    │   ├── incremental-user-growth.png    ← card_8__2_.png
//    │   ├── full-funnel-acquisition.png    ← card_9__2_.png
//    │   └── vertical-expertise.png         ← card_10.png
//    ├── brand-ticker.png                   ← Component_10.png
//    └── categories.png                     ← Group_1171276755__1_.png
// ─────────────────────────────────────────────

// "What We Deliver" cards
import cpaCplImg        from "../assets/images/web/deliver-cards/cpa-cpl-cps.png";
import conversionImg    from "../assets/images/web/deliver-cards/conversion-optimized.png";
import scalableImg      from "../assets/images/web/deliver-cards/scalable-mobile-web.png";
import incrementalImg   from "../assets/images/web/deliver-cards/incremental-user-growth.png";
import fullFunnelImg    from "../assets/images/web/deliver-cards/full-funnel-acquisition.png";
import verticalImg      from "../assets/images/web/deliver-cards/vertical-expertise.png";

// Brand ticker strip
import brandTickerImg   from "../assets/images/web/brand-ticker.png";

// Categories grid
import categoriesImg    from "../assets/images/web/categories.png";

/* ── Section 1: Hero ── */
function WebHero() {
  return (
    <section className="relative min-h-[52vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-white mb-2 leading-tight">
          PERFORMANCE WEB
        </h1>
        <h1
          className="font-display font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl mb-6 leading-tight"
          style={{ color: "#00A8FF" }}
        >
          ACQUISITION AT GLOBAL SCALE
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Axponent drives scalable customer acquisition through high-intent
          traffic across a curated global network of premium publishers and
          direct partnerships — powered by advanced media buying, exclusive
          supply, and real-time optimization for predictable, ROI-driven growth.
        </p>
      </FadeSection>
    </section>
  );
}

/* ── Section 2: What We Deliver ── */
function WhatWeDeliver() {
  const deliverCards = [
    { img: cpaCplImg,       alt: "CPA, CPL & CPS-Based Customer Acquisition" },
    { img: conversionImg,   alt: "Conversion-Optimized Web Traffic Built for Performance" },
    { img: scalableImg,     alt: "Scalable Mobile Web & Desktop Campaign Execution" },
    { img: incrementalImg,  alt: "Incremental User Growth Through Premium Global Publishers" },
    { img: fullFunnelImg,   alt: "Full-Funnel Acquisition & Retargeting Strategies" },
    { img: verticalImg,     alt: "Vertical Expertise Across Fintech, Gaming, Ecommerce & Lead Generation" },
  ];

  return (
    <FadeSection>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(8,15,50,0.7)",
              border: "1px solid rgba(0,80,200,0.2)",
            }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-10">
              What We Deliver
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverCards.map((card, i) => (
                <img
                  key={i}
                  src={card.img}
                  alt={card.alt}
                  className="w-full rounded-xl object-cover transition-all duration-300 hover:scale-[1.02]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 3: Brand Ticker ── */
// Full PNG strip — scrolls via CSS marquee animation
function BrandTicker() {
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      {/* Duplicate the image side-by-side so the marquee loops seamlessly */}
      <div className="flex animate-marquee gap-0 w-max">
        <img
          src={brandTickerImg}
          alt="Brand partners — AliExpress, Klook, Lycamobile, Shopify, Malaysia Airlines, Surfshark"
          className="h-10 object-contain flex-shrink-0"
          draggable={false}
        />
        {/* Second copy for seamless loop */}
        <img
          src={brandTickerImg}
          alt=""
          aria-hidden="true"
          className="h-10 object-contain flex-shrink-0"
          draggable={false}
        />
      </div>
    </div>
  );
}

/* ── Section 4: Diverse Needs ── */
// Full PNG grid — already pixel-perfect from Figma
function DiverseNeeds() {
  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12 leading-snug">
            Meeting Diverse Publisher
            <br />
            Needs with Precision
          </h2>
          <img
            src={categoriesImg}
            alt="Categories — Finance, E-commerce, Travel, Insurance, Education, Home Improvement"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 5: Traffic Channels Diagram ── */
function TrafficChannels() {
  const nodes = [
    {
      label: "Performance Publisher &\nComparison Networks",
      angle: 90,
      icon: "👥",
    },
    {
      label: "Native, Display &\nProgrammatic Advertising",
      angle: 20,
      icon: "📺",
    },
    { label: "Email & Push High-Intent\nWeb Traffic", angle: -30, icon: "📧" },
    {
      label: "Direct Media Buying &\nExclusive Inventory Access",
      angle: 210,
      icon: "🛒",
    },
    {
      label: "Contextual & Intent-Based\nAudience Targeting",
      angle: 150,
      icon: "🎯",
    },
    { label: "Google", angle: 120, icon: "🔍" },
  ];

  const toPos = (angleDeg, r = 38) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      left: `${50 + r * Math.cos(rad)}%`,
      top: `${50 - r * Math.sin(rad)}%`,
    };
  };

  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-4">
            Traffic Channels
          </h2>

          <div
            className="relative mx-auto"
            style={{ width: "100%", maxWidth: "640px", aspectRatio: "1/1" }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "55%",
                height: "55%",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.5)",
                boxShadow: "0 0 40px rgba(0,100,255,0.15)",
              }}
            />
            {/* Inner glow orb */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "18%",
                height: "18%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,120,255,0.7) 0%, rgba(0,60,180,0.3) 50%, transparent 80%)",
                boxShadow: "0 0 40px rgba(0,120,255,0.4)",
              }}
            />

            {/* Connector dots on ring */}
            {nodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const r = 27.5;
              const dotLeft = `${50 + r * Math.cos(rad)}%`;
              const dotTop = `${50 - r * Math.sin(rad)}%`;
              return (
                <div
                  key={`dot-${i}`}
                  className="absolute"
                  style={{
                    left: dotLeft,
                    top: dotTop,
                    transform: "translate(-50%,-50%)",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "white",
                    boxShadow: "0 0 6px rgba(255,255,255,0.8)",
                    zIndex: 2,
                  }}
                />
              );
            })}

            {/* Node labels */}
            {nodes.map((node, i) => {
              const pos = toPos(node.angle, 44);
              const rad = (node.angle * Math.PI) / 180;
              const cx = Math.cos(rad);
              const transform =
                cx > 0.3
                  ? "translate(0,-50%)"
                  : cx < -0.3
                    ? "translate(-100%,-50%)"
                    : "translate(-50%,-50%)";
              const textAlign =
                cx > 0.3 ? "left" : cx < -0.3 ? "right" : "center";

              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform,
                    textAlign,
                    maxWidth: "130px",
                    zIndex: 3,
                  }}
                >
                  <span style={{ fontSize: "20px", lineHeight: 1 }}>
                    {node.icon}
                  </span>
                  <span
                    className="whitespace-pre-line leading-tight"
                    style={{
                      color: "#fff",
                      fontSize: "clamp(8px, 1.5vw, 11px)",
                      fontWeight: 500,
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeSection>
  );
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
  );
}