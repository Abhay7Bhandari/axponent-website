import { useState } from "react";
import FadeSection from "./FadeSection";
// ── Image imports ──
import heroImg from "../assets/images/venture/hero-coin-jar.png";
import standardImg from "../assets/images/venture/offer-cards/standard-support.png";
import partnershipImg from "../assets/images/venture/offer-cards/partnership-support.png";
import compassImg from "../assets/images/venture/offer-cards/founder-compass.png";
import communityImg from "../assets/images/venture/offer-cards/community.png";

/* ── Section 1: Hero ── */
function VCHero() {
  return (
    <section
      className="relative flex flex-col items-start justify-center px-4 pt-28 pb-0 overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      <div className="stars" />

      <div className="max-w-6xl mx-auto w-full">
        <FadeSection>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-white mb-2 leading-tight">
              LAUNCH, FUND, AND SCALE
              <br />
              HIGH-GROWTH BUSINESSES
            </h1>
            <h1
              className="font-display font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl mb-8 leading-tight"
              style={{ color: "#00A8FF" }}
            >
              WITH AXPONENT
            </h1>
            <button
              className="px-10 py-3 rounded-full text-white font-semibold text-sm mb-12 transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #0050FF, #0090FF)",
                boxShadow: "0 4px 24px rgba(0,100,255,0.45)",
              }}
            >
              Apply Now
            </button>
          </div>
        </FadeSection>

        {/* Hero image — real photo from Figma */}
        <img
          src={heroImg}
          alt="Person placing a coin into a glass jar full of coins — representing investment and funding"
          className="w-full rounded-2xl object-cover"
          style={{
            height: "clamp(280px, 45vw, 460px)",
            objectPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

/* ── Section 2: What Do We Offer ── */
function WhatWeOffer() {
  const cards = [
    { img: standardImg, alt: "Standard Support" },
    { img: partnershipImg, alt: "Partnership Support" },
    { img: compassImg, alt: "Founder Compass" },
    { img: communityImg, alt: "Community" },
  ];

  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12">
            What do we offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
      </section>
    </FadeSection>
  );
}

/* ── Section 3: Focus Areas ── */
function FocusArea() {
  const areas = [
    "Consumer Apps",
    "Marketing SAAS",
    "Gaming",
    "Fintech",
    "Healthcare",
    "Retail",
    "Gaming",
    "AI",
    "Cyber Security",
    "Food",
  ];

  return (
    <FadeSection>
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-10">
            Our Focus Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {areas.map((area, i) => (
              <span
                key={i}
                className="flex items-center justify-center text-center px-5 py-3 rounded-full text-sm text-white cursor-pointer transition-all duration-200 hover:scale-105 min-h-[48px]"
                style={{
                  background: "rgba(10,20,60,0.8)",
                  border: "1px solid rgba(30,60,160,0.5)",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 4: Raise Funds Form ── */
function RaiseFunds() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will review your application.");
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing planet orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "100%", height: "300px" }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "100%",
            height: "260px",
            background:
              "radial-gradient(ellipse at center bottom, rgba(0,120,255,0.5) 0%, rgba(0,60,180,0.2) 40%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            width: "min(900px,95vw)",
            height: "220px",
            borderRadius: "50%",
            border: "1.5px solid rgba(0,160,255,0.35)",
            boxShadow: "0 0 80px rgba(0,120,255,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            width: "min(500px,80vw)",
            height: "100px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(0,160,255,0.55) 0%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
      </div>

      {/* SCROLL DOWN label */}
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

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white text-center mb-12">
          Raise Funds!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "name", placeholder: "Enter Your Name", type: "text" },
              { name: "email", placeholder: "Enter Your Mail", type: "email" },
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
            ))}
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
            onBlur={(e) => (e.target.style.borderColor = "rgba(0,120,255,0.3)")}
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

/* ── Main Venture Capital Page ── */
export default function VentureCapitalPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <VCHero />
      <WhatWeOffer />
      <FocusArea />
      <RaiseFunds />
    </div>
  );
}
