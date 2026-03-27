import { useState } from "react";
import FadeSection from "./FadeSection";
import heroImg from "../assets/images/venture/hero-coin-jar.png";
import standardImg from "../assets/images/venture/offer-cards/standard-support.png";
import partnershipImg from "../assets/images/venture/offer-cards/partnership-support.png";
import compassImg from "../assets/images/venture/offer-cards/founder-compass.png";
import communityImg from "../assets/images/venture/offer-cards/community.png";
import earthImg from "../assets/images/Earth.png";

function VCHero() {
  return (
    <section
      className="relative flex flex-col items-start justify-center px-4 pt-24 sm:pt-28 pb-0 overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      <div className="stars" />
      <div className="max-w-6xl mx-auto w-full">
        <FadeSection>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1
              className="font-display font-bold text-white mb-2 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              LAUNCH, FUND, AND SCALE
              <br />
              HIGH-GROWTH BUSINESSES
            </h1>
            <h1
              className="font-display font-bold mb-6 sm:mb-8 leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                color: "#007BFF",
              }}
            >
              WITH AXPONENT
            </h1>
            <button
              className="px-8 sm:px-10 py-3 rounded-full text-white font-semibold text-sm mb-8 sm:mb-12 transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #0050FF, #0090FF)",
                boxShadow: "0 4px 24px rgba(0,100,255,0.45)",
              }}
            >
              Apply Now
            </button>
          </div>
        </FadeSection>
        <img
          src={heroImg}
          alt="Person placing a coin into a glass jar — investment and funding"
          className="w-full rounded-2xl object-cover"
          style={{
            height: "clamp(200px, 40vw, 460px)",
            objectPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

function WhatWeOffer() {
  const cards = [
    { img: standardImg, alt: "Standard Support" },
    { img: partnershipImg, alt: "Partnership Support" },
    { img: compassImg, alt: "Founder Compass" },
    { img: communityImg, alt: "Community" },
  ];
  return (
    <FadeSection>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-8 sm:mb-12"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
            What do we offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-6 sm:mb-10"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
            Our Focus Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5">
            {areas.map((area, i) => (
              <span
                key={i}
                className="flex items-center justify-center text-center px-3 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm text-white cursor-pointer transition-all duration-200 hover:scale-105 min-h-[44px]"
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

function RaiseFunds() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will review your application.");
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "60px", paddingBottom: "0", minHeight: "600px" }}
    >
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src={earthImg}
          alt=""
          aria-hidden
          className="w-full"
          style={{
            display: "block",
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
      <div
        className="max-w-3xl mx-auto relative px-4 pb-28 sm:pb-36"
        style={{ zIndex: 1 }}
      >
        <h2
          className="font-display font-bold text-white text-center mb-8 sm:mb-12"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
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
            rows={5}
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
