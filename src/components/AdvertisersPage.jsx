import { useState } from "react";
import FadeSection from "./FadeSection";

// ── Image imports ──
import cardViewability from "../assets/images/cards/card 3.png";
import cardPlacements from "../assets/images/cards/card 4.png";
import cardPublishers from "../assets/images/cards/card 5.png";
import measurementImg from "../assets/images/partners/measurement-partners.png";
import mediaImg from "../assets/images/partners/media-partners.png";

//Ad imports
import bannerAd from "../assets/images/advertisers/banner_ad.png";
import nativeAd from "../assets/images/advertisers/native_ad.png";
import videoAd from "../assets/images/advertisers/video_ad.png";
import interstitialAd from "../assets/images/advertisers/interstitial_ad.png";

/* ── Section 1: Hero section ── */
function AdvertisersHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Star #000000 */}
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

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Tab bar */}
        <div className="flex border-b border-white/10 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-6 py-4 text-sm font-medium transition-all duration-200"
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

        {/* Both cards stacked, each fades in on scroll */}
        <div className="flex flex-col gap-10">
          {tabs.map((tab) => (
            <FadeSection key={tab.key}>
              <div
                className="relative cursor-pointer"
                onClick={() => setActiveTab(tab.key)}
              >
                {/* Active left stripe */}
                {activeTab === tab.key && (
                  <div
                    // className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
                    style={{
                      background: "linear-gradient(180deg,#0060FF,#00A8FF)",
                    }}
                  />
                )}
                <img
                  src={tab.img}
                  alt={tab.label}
                  className="w-full rounded-2xl object-cover transition-all duration-400"
                  style={{
                    opacity: activeTab === tab.key ? 1 : 0.45,
                    transform:
                      activeTab === tab.key ? "scale(1)" : "scale(0.985)",
                    boxShadow:
                      activeTab === tab.key
                        ? "0 0 0 2px rgba(0,168,255,0.55), 0 20px 60px rgba(0,80,200,0.3)"
                        : "none",
                    transition:
                      "opacity 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
                  }}
                />
                {/* <p
                  className="mt-3 text-sm font-medium text-center"
                  style={{
                    color: activeTab === tab.key ? "#ffffff" : "#6B7280",
                  }}
                >
                  {/* {tab.label} */}
                {/* </p */}
              </div>
            </FadeSection>
          ))}
        </div>

      </div>
    </section>
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
  const [active, setActive] = useState("banner");
  
const feedRows = (count) =>
  Array.from({ length: count }).map((_, i) => (
    <div key={i} className="flex items-center gap-2 flex-shrink-0">
      <div className="w-7 h-7 rounded bg-[#1e2a3a] flex-shrink-0" />
      <div className="flex flex-col gap-1 flex-1">
        <div className="h-[5px] rounded bg-[#1e2a3a] w-4/5" />
        <div className="h-[5px] rounded bg-[#1e2a3a] w-3/5" />
        <div className="h-[5px] rounded bg-[#1e2a3a] w-1/2" />
      </div>
    </div>
  ));

const formats = [
  { key: "banner", label: "Banner AD" },
  { key: "native", label: "Native AD" },
  { key: "video", label: "Video AD" },
  { key: "interstitial", label: "Interstitial AD" },
];

  return (
    <section className="bg-black  flex items-center justify-center px-8 py-12">
      <div className="flex items-center gap-14 w-full max-w-2xl">

        {/* Phone */}
        <div className="flex-shrink-0">
          <div
            className={`relative w-40 h-80 rounded-[2rem] border-[6px] border-[#1e2336] bg-[#0d1120] overflow-hidden transition-all duration-300 ${
              active === "video"
                ? "shadow-[0_0_0_3px_#3b82f6,0_0_24px_6px_rgba(59,130,246,0.35)]"
                : ""
            }`}
          >
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#1e2336] rounded-full z-10" />

            {/* Status bar */}
            <div className="absolute top-0 w-full flex justify-between items-center px-3 pt-3 pb-1 z-10">
              <span className="text-[8px] text-[#aaa] font-medium">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-2 h-1.5 rounded-sm bg-[#aaa]" />
                <div className="w-2.5 h-[5px] border border-[#aaa] rounded-sm relative">
                  <div className="absolute inset-[1px] right-[2px] bg-[#aaa] rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Native: full screen */}
            {active === "native" && (
              <div className="absolute inset-0 bg-[#3b6cf6]" />
            )}

            {/* Feed-based states */}
            {active !== "native" && (
              <div className="absolute inset-0 pt-8 flex flex-col gap-1.5 p-2 overflow-hidden">
                {active === "banner" && (
                  <>
                    {feedRows(5)}
                    <div className="absolute bottom-0 left-0 right-0 h-9 bg-[#3b6cf6] border-t border-[#4a7aff]" />
                  </>
                )}

                {active === "video" && (
                  <>
                    {feedRows(2)}
                    <div className="w-full h-16 bg-[#3b6cf6] rounded-md flex-shrink-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full border-2 border-white/80 flex items-center justify-center">
                        <div
                          className="ml-0.5"
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: "5px solid transparent",
                            borderBottom: "5px solid transparent",
                            borderLeft: "8px solid rgba(255,255,255,0.85)",
                          }}
                        />
                      </div>
                    </div>
                    {feedRows(2)}
                  </>
                )}

                {active === "interstitial" && (
                  <>
                    {feedRows(1)}
                    <div className="w-full h-24 bg-[#3b6cf6] rounded-md flex-shrink-0" />
                    {feedRows(2)}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: title + list */}
        <div>
          <h2 className="text-white text-3xl font-bold tracking-tight mb-5">
            Ad Format
          </h2>
          <div className="flex flex-col gap-1">
            {formats.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`text-left text-sm px-0.5 py-1.5 transition-colors duration-200 ${
                  active === key
                    ? "text-white font-bold"
                    : "text-gray-500 font-normal hover:text-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
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
      {/* Glowing orb #000000 */}
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