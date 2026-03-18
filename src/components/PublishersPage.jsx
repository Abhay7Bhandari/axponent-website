import { useState } from "react";
import FadeSection from "./FadeSection";

// ─────────────────────────────────────────────
//  IMAGE IMPORTS
//  File locations inside your project:
//
//  src/assets/images/publishers/
//    ├── monetization/
//    │   ├── fill-rates.png            ← card_3__1_.png
//    │   ├── mcm.png                   ← card_4__1_.png
//    │   └── improve-relevance.png     ← card_5__1_.png  (or card_3__2_ / card_4__2_)
//    ├── categories/
//    │   └── publisher-categories.png  ← Group_1171276755.png
//    └── expect/
//        ├── global-campaign-demand.png     ← card_7.png
//        ├── competitive-payouts.png        ← card_8.png
//        ├── transparent-tracking.png       ← card_9.png
//        ├── dedicated-support.png          ← (export from Figma — missing)
//        └── long-term-scaling.png          ← (export from Figma — missing)
// ─────────────────────────────────────────────

// Monetization cards
import fillRatesImg      from "../assets/images/publishers/monetization/fill-rates.png";
import mcmImg            from "../assets/images/publishers/monetization/mcm.png";
import improveRelImg     from "../assets/images/publishers/monetization/improve-relevance.png";

// Publisher categories — full grid PNG
import categoriesImg     from "../assets/images/publishers/categories/publisher-categories.png";

// What You Can Expect cards
import globalDemandImg   from "../assets/images/publishers/expect/global-campaign-demand.png";
import payoutsImg        from "../assets/images/publishers/expect/competitive-payouts.png";
import trackingImg       from "../assets/images/publishers/expect/transparent-tracking.png";
import supportImg        from "../assets/images/publishers/expect/dedicated-support.png";
import scalingImg        from "../assets/images/publishers/expect/long-term-scaling.png";

/* ── Section 1: Hero ── */
function PublishersHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-white mb-6 leading-tight">
          PUBLISHERS & <span style={{ color: "#00A8FF" }}>MEDIA PARTNERS</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Axponent connects premium publishers with quality global campaigns,
          offering transparent tracking, fast approvals, and dedicated support
          for consistent monetization and long-term growth.
        </p>
      </FadeSection>
    </section>
  );
}

/* ── Section 2: App Monetization Cards ── */
function MonetizationCards() {
  const cards = [
    { img: fillRatesImg,   alt: "Fill Rates" },
    { img: mcmImg,         alt: "MCM" },
    { img: improveRelImg,  alt: "Improve Relevance" },
  ];

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "rgba(10,20,60,0.5)",
              border: "1px solid rgba(0,100,255,0.15)",
            }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-10">
              See The Difference Our App Monetization Makes.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, i) => (
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

/* ── Section 3: Publisher Categories ── */
// Using the full Figma-exported PNG (Group_1171276755.png) — it already
// contains all 6 category tiles exactly as designed.
function PublisherCategories() {
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
            alt="Publisher Categories — Fintech, E-commerce, Utilities, Gaming, Sports Betting & Casino, Entertainment"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 4: What You Can Expect ── */
function WhatToExpect() {
  // Top row — 3 cards, bottom row — 2 cards
  const topRow = [
    { img: globalDemandImg, alt: "Consistent global campaign demand" },
    { img: payoutsImg,      alt: "Competitive and timely payouts" },
    { img: trackingImg,     alt: "Transparent tracking & attribution" },
  ];
  const bottomRow = [
    { img: supportImg,  alt: "Dedicated publisher support" },
    { img: scalingImg,  alt: "Long-term scaling opportunities" },
  ];

  return (
    <FadeSection>
      <section className="py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,60,180,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12">
            What You Can Expect
          </h2>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {topRow.map((card, i) => (
              <img
                key={i}
                src={card.img}
                alt={card.alt}
                className="w-full rounded-xl object-cover transition-all duration-300 hover:scale-[1.02]"
              />
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {bottomRow.map((card, i) => (
              <img
                key={i}
                src={card.img}
                alt={card.alt}
                className="w-full rounded-xl object-cover transition-all duration-300 hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 5: Become A Publisher Form ── */
function BecomePublisher() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing planet/orb at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "100%",
          height: "280px",
          background:
            "radial-gradient(ellipse at center bottom, rgba(0,120,255,0.5) 0%, rgba(0,60,180,0.25) 35%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "min(900px, 95vw)",
          height: "220px",
          borderRadius: "50%",
          border: "1.5px solid rgba(0,160,255,0.3)",
          boxShadow: "0 0 80px rgba(0,120,255,0.2)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "min(500px, 80vw)",
          height: "100px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,160,255,0.6) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-gray-500 text-xs tracking-widest select-none"
          style={{ writingMode: "vertical-rl" }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,120,255,0.3)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,180,255,0.7)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0,120,255,0.3)")
              }
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Your Mail"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,120,255,0.3)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,180,255,0.7)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0,120,255,0.3)")
              }
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-all"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(0,120,255,0.3)",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(0,180,255,0.7)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(0,120,255,0.3)")
            }
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #0060FF, #00B0FF)",
              boxShadow: "0 4px 24px rgba(0,120,255,0.4)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
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
  );
}