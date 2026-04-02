import { useState } from "react";
import FadeSection from "./FadeSection";
import earthImg from "../assets/images/Earth.png";
import fillRatesImg from "../assets/images/publishers/monetization/fill-rates.png";
import mcmImg from "../assets/images/publishers/monetization/mcm.png";
import improveRelImg from "../assets/images/publishers/monetization/improve-relevance.png";
import categoriesImg from "../assets/images/publishers/categories/publisher-categories.png";
import globalDemandImg from "../assets/images/publishers/expect/global-campaign-demand.png";
import payoutsImg from "../assets/images/publishers/expect/competitive-payouts.png";
import trackingImg from "../assets/images/publishers/expect/transparent-tracking.png";
import supportImg from "../assets/images/publishers/expect/dedicated-support.png";
import scalingImg from "../assets/images/publishers/expect/long-term-scaling.png";

function PublishersHero() {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1
          className="font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
        >
          PUBLISHERS & <span style={{ color: "#007BFF" }}>MEDIA PARTNERS</span>
        </h1>
        <p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
        >
          Axponent connects premium publishers with quality global campaigns,
          offering transparent tracking, fast approvals, and dedicated support
          for consistent monetization and long-term growth.
        </p>
      </FadeSection>
    </section>
  );
}

function MonetizationCards() {
  const cards = [
    { img: fillRatesImg, alt: "Fill Rates" },
    { img: mcmImg, alt: "MCM" },
    { img: improveRelImg, alt: "Improve Relevance" },
  ];
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-5 sm:p-8 md:p-12"
            style={{
              background: "rgba(10,20,60,0.5)",
              border: "1px solid rgba(0,100,255,0.15)",
            }}
          >
            <h2
              className="font-display font-bold text-white text-center mb-5 sm:mb-10"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.875rem)" }}
            >
              See The Difference Our App Monetization Makes.
            </h2>
            {/* Mobile: vertical stack; sm+: 3-col grid */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-6">
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

function PublisherCategories() {
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-6 sm:mb-12 leading-snug"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2.25rem)" }}
          >
            Meeting Diverse Publisher
            <br />
            Needs with Precision
          </h2>
          <img
            src={categoriesImg}
            alt="Publisher Categories"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </FadeSection>
  );
}

function WhatToExpect() {
  const topRow = [
    { img: globalDemandImg, alt: "Consistent global campaign demand" },
    { img: payoutsImg, alt: "Competitive and timely payouts" },
    { img: trackingImg, alt: "Transparent tracking & attribution" },
  ];
  const bottomRow = [
    { img: supportImg, alt: "Dedicated publisher support" },
    { img: scalingImg, alt: "Long-term scaling opportunities" },
  ];
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,60,180,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2
            className="font-display font-bold text-white text-center mb-6 sm:mb-12"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2.25rem)" }}
          >
            What You Can Expect
          </h2>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col sm:hidden gap-3">
            {[...topRow, ...bottomRow].map((card, i) => (
              <img
                key={i}
                src={card.img}
                alt={card.alt}
                className="w-full rounded-xl object-cover"
              />
            ))}
          </div>

          {/* sm+: original grid layout */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {topRow.map((card, i) => (
                <img
                  key={i}
                  src={card.img}
                  alt={card.alt}
                  className="w-full rounded-xl object-cover transition-all duration-300 hover:scale-[1.02]"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
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
        </div>
      </section>
    </FadeSection>
  );
}

function BecomePublisher() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "0" }}
    >
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src={earthImg}
          alt=""
          aria-hidden
          style={{
            display: "block",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-gray-500 text-xs tracking-widest select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL DOWN
        </span>
        <div className="w-px h-12 bg-gray-700" />
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
      <div className="relative px-4 pb-28 sm:pb-36" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto" style={{ marginBottom: "40px" }}>
          <h2
            className="font-display font-bold text-white text-center mb-8 sm:mb-10"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            Become A Publisher
          </h2>
          <div className="flex flex-col gap-3">
            {/* On mobile: stack name/email vertically; sm+: side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "name", placeholder: "Enter Your Name", type: "text" },
                {
                  name: "email",
                  placeholder: "Enter Your Mail",
                  type: "email",
                },
              ].map((f) => (
                <input
                  key={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(0,120,255,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,180,255,0.7)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(0,120,255,0.3)")
                  }
                />
              ))}
            </div>
            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,120,255,0.3)",
                backdropFilter: "blur(8px)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,180,255,0.7)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0,120,255,0.3)")
              }
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #0070FF, #00C8FF)",
                boxShadow: "0 4px 32px rgba(0,150,255,0.5)",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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
