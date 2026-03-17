import { useState } from "react";
import FadeSection from "./FadeSection";

/* ── Section 1: Hero ── */
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
    {
      title: "High Impact Placements",
      desc: "Up to date mobile and desktop ad management and performance.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      title: "Exclusive Placements",
      desc: "Smarter, more effective placements with media buying and scalable video, display, and native.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      title: "Top-Tier Publishers",
      desc: "An exclusive network of publishers delivering viewability, completions, video, and native.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 20c0-3-2-5.5-5-6.5" />
        </svg>
      ),
    },
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
                <div
                  key={i}
                  className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,60,180,0.25) 0%, rgba(5,10,40,0.8) 100%)",
                    border: "1px solid rgba(0,100,255,0.2)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,100,255,0.15)" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
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

  const measurementLogos = [
    { color: "#4ADE80", symbol: "✦", name: "Adjust" },
    { color: "#FB923C", symbol: "▲", name: "Appsflyer" },
    { color: "#38BDF8", symbol: "◎", name: "Kochava" },
    { color: "#A78BFA", symbol: "≡", name: "Branch" },
    { color: "#34D399", symbol: "★", name: "Singular" },
    { color: "#F472B6", symbol: "◆", name: "Skan" },
    { color: "#60A5FA", symbol: "•••", name: "Airbridge" },
    { color: "#FBBF24", symbol: "⊕", name: "Smartly" },
    { color: "#F87171", symbol: "✦", name: "Rockerbox" },
  ];

  const mediaLogos = [
    { color: "#1877F2", symbol: "f", name: "Meta" },
    { color: "#FF0000", symbol: "▶", name: "YouTube" },
    { color: "#00A8FF", symbol: "𝕏", name: "Twitter/X" },
    { color: "#E1306C", symbol: "◉", name: "Instagram" },
    { color: "#0077B5", symbol: "in", name: "LinkedIn" },
    { color: "#FF6900", symbol: "◈", name: "Taboola" },
    { color: "#4ADE80", symbol: "◎", name: "DV360" },
    { color: "#F59E0B", symbol: "★", name: "The Trade Desk" },
    { color: "#A78BFA", symbol: "▲", name: "Criteo" },
  ];

  const logos = activeTab === "measurement" ? measurementLogos : mediaLogos;

  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab headers */}
          <div className="flex border-b border-white/10 mb-8">
            {[
              {
                key: "measurement",
                label: "Measurement & Attribution Partners",
              },
              { key: "media", label: "Media & Platform Partners" },
            ].map((tab) => (
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

          {/* Tab content */}
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(5,20,80,0.6) 0%, rgba(2,8,40,0.8) 100%)",
              border: "1px solid rgba(0,80,200,0.2)",
            }}
          >
            {/* Left text */}
            <div className="md:w-1/3 flex-shrink-0">
              <h3 className="font-display font-bold text-2xl text-white mb-4 leading-snug">
                {activeTab === "measurement"
                  ? "Measurement & Attribution Partners"
                  : "Media & Platform Partners"}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Axponent collaborates with a global ecosystem of trusted
                partners to deliver transparent, scalable, and
                performance-driven campaigns across every market.
              </p>
            </div>

            {/* Right logo grid */}
            <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl flex items-center justify-center text-xl font-bold cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{
                    background: `${logo.color}18`,
                    border: `1px solid ${logo.color}35`,
                    color: logo.color,
                  }}
                  title={logo.name}
                >
                  {logo.symbol}
                </div>
              ))}
            </div>
          </div>
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
              placeholder="Enter You Mail"
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
