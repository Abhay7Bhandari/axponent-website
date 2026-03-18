import { useState } from "react";
import FadeSection from "./FadeSection";

// ── Image imports ──
import cardViewability from "../assets/images/cards/card 3.png";
import cardPlacements from "../assets/images/cards/card 4.png";
import cardPublishers from "../assets/images/cards/card 5.png";
import measurementImg from "../assets/images/partners/measurement-partners.png";
import mediaImg from "../assets/images/partners/media-partners.png";

/* ── Section 1: Hero section ── */
function AdvertisersHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Star background */}
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-5xl sm:text-5xl md:text-5xl text-white mb-6 leading-tight">
          PARTNERS/<span style={{ color: "#00A8FF" }}>ADVERTISERS</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Axponent partners with trusted global measurement, media, and
          technology platforms to deliver transparent, scalable,
          performance-driven campaigns worldwide.
        </p>
      </FadeSection>
    </section>
  );
}

/* ── Section 2: Precision Advertising Cards ── */
function PrecisionCards() {
  const cards = [
    { img: cardViewability, alt: "High Viewability" },
    { img: cardPlacements, alt: "Exclusive Placements" },
    { img: cardPublishers, alt: "Top-Tier Publishers" },
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
              See The Difference Precision Advertising Makes
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

/* ── Section 3: Partner Tabs ── */
function PartnerTabs() {
  const [activeTab, setActiveTab] = useState("measurement");

  const tabs = [
    {
      key: "measurement",
      label: "Measurement & Attribution Partners",
      img: measurementImg,
    },
    {
      key: "media",
      label: "Media & Platform Partners",
      img: mediaImg,
    },
  ];

  const active = tabs.find((t) => t.key === activeTab);

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab headers */}
          <div className="flex border-b border-white/10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-6 py-4 text-sm font-medium transition-all"
                style={{
                  color: activeTab === tab.key ? "#ffffff" : "#6B7280",
                  borderBottom:
                    activeTab === tab.key
                      ? "2px solid #ffffff"
                      : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Full-width banner image — switches on tab click */}
          <img
            key={
              active.key
            } /* key forces re-render / fade if you add CSS transition */
            src={active.img}
            alt={active.label}
            className="w-full rounded-2xl object-cover transition-opacity duration-300"
          />
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 4: Ad Fraud Detection ── */
function AdFraudDetection() {
  const points = [
    "Multi Layered Fraud Protection Multi Detections",
    "Detection, Mitigation and reporting all in one place.",
    "Real time blocking for clean data and swift optimization.",
    "Comprehensive Reporting for advertisers.",
  ];

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="font-display font-bold text-4xl text-white mb-4">
                Ad Fraud Detection<span style={{ color: "#00A8FF" }}>.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Ad fraud costs the industry billions each year as budgets shift
                to digital. Fraudsters inflate apps by serving ads with little
                or no chance of being seen by real users.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Axponent protects your campaigns with advanced verification and
                brand-safe inventory, ensuring your ad spend delivers real
                impact.
              </p>
            </div>

            {/* Right – bullet list */}
            <div className="flex flex-col gap-3">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-5 py-4"
                  style={{
                    background: "rgba(10,15,40,0.7)",
                    border: "1px solid rgba(0,80,200,0.2)",
                    borderLeft: "3px solid #00A8FF",
                  }}
                >
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 5: Ad Format ── */
function AdFormat() {
  const [activeFormat, setActiveFormat] = useState("Banner AD");
  const formats = ["Banner AD", "Native AD", "Video AD", "Interstitial AD"];

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left – phone mockup */}
            <div className="flex justify-center">
              <div
                className="relative w-48 rounded-3xl overflow-hidden"
                style={{
                  background: "#0A0F2A",
                  border: "2px solid rgba(0,100,255,0.3)",
                  boxShadow: "0 0 40px rgba(0,80,200,0.2)",
                  aspectRatio: "9/18",
                }}
              >
                {/* Phone status bar */}
                <div className="flex justify-between items-center px-4 py-2 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>▐▐▐</span>
                    <span>WiFi</span>
                  </div>
                </div>
                {/* Feed items */}
                <div className="px-3 flex flex-col gap-2 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <div
                        className="w-8 h-8 rounded flex-shrink-0"
                        style={{ background: "rgba(30,50,120,0.6)" }}
                      />
                      <div className="flex-1 flex flex-col gap-1">
                        <div
                          className="h-2 rounded"
                          style={{
                            background: "rgba(255,255,255,0.15)",
                            width: "80%",
                          }}
                        />
                        <div
                          className="h-2 rounded"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            width: "60%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Banner AD at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 flex items-center justify-center text-white text-xs font-semibold"
                  style={{
                    background: "linear-gradient(90deg,#0060FF,#0090FF)",
                  }}
                >
                  {activeFormat}
                </div>
              </div>
            </div>

            {/* Right – format list */}
            <div>
              <h2 className="font-display font-bold text-4xl text-white mb-8">
                Ad Format
              </h2>
              <div className="flex flex-col gap-2">
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setActiveFormat(fmt)}
                    className="text-left px-4 py-3 rounded-lg transition-all text-sm font-medium"
                    style={{
                      color: activeFormat === fmt ? "#ffffff" : "#6B7280",
                      background:
                        activeFormat === fmt
                          ? "rgba(0,80,200,0.15)"
                          : "transparent",
                      border:
                        activeFormat === fmt
                          ? "1px solid rgba(0,120,255,0.3)"
                          : "1px solid transparent",
                    }}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 6: Get In Touch ── */
function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing orb background */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "100%",
          height: "260px",
          background:
            "radial-gradient(ellipse at center bottom, rgba(0,100,255,0.45) 0%, rgba(0,50,150,0.2) 40%, transparent 75%)",
          filter: "blur(10px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "min(800px,95vw)",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(0,140,255,0.25)",
          boxShadow: "0 0 60px rgba(0,100,255,0.15)",
        }}
      />

      {/* Side label */}
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <span
          className="text-gray-500 text-xs tracking-widest"
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
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name..."
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-colors"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,100,255,0.25)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,160,255,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0,100,255,0.25)")
              }
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Your Mail"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-colors"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(0,100,255,0.25)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,160,255,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0,100,255,0.25)")
              }
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-colors"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(0,100,255,0.25)",
            }}
            onFocus={(e) =>
              (e.target.style.borderColor = "rgba(0,160,255,0.6)")
            }
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(0,100,255,0.25)")
            }
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              background: "linear-gradient(90deg, #0060FF, #00A0FF)",
              boxShadow: "0 4px 20px rgba(0,100,255,0.3)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

/* ── Main Advertisers Page ── */
export default function AdvertisersPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <AdvertisersHero />
      <PrecisionCards />
      <PartnerTabs />
      <AdFraudDetection />
      <AdFormat />
      <GetInTouch />
    </div>
  );
}
