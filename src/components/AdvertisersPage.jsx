import { useState } from "react";
import FadeSection from "./FadeSection";
import earthImg from "../assets/images/Earth.png";

import cardViewability from "../assets/images/cards/card 3.png";
import cardPlacements from "../assets/images/cards/card 4.png";
import cardPublishers from "../assets/images/cards/card 5.png";
import measurementImg from "../assets/images/partners/measurement-partners.png";
import mediaImg from "../assets/images/partners/media-partners.png";
import bannerAd from "../assets/images/advertisers/banner_ad.png";
import nativeAd from "../assets/images/advertisers/native_ad.png";
import videoAd from "../assets/images/advertisers/video_ad.png";
import interstitialAd from "../assets/images/advertisers/interstitial_ad.png";

function AdvertisersHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1
          className="font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
        >
          PARTNERS/<span style={{ color: "#007BFF" }}>ADVERTISERS</span>
        </h1>
        <p
          className="text-gray-400 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
        >
          Axponent partners with trusted global measurement, media, and
          technology platforms to deliver transparent, scalable,
          performance-driven campaigns worldwide.
        </p>
      </FadeSection>
    </section>
  );
}

function PrecisionCards() {
  const cards = [
    { img: cardViewability, alt: "High Viewability" },
    { img: cardPlacements, alt: "Exclusive Placements" },
    { img: cardPublishers, alt: "Top-Tier Publishers" },
  ];
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 md:p-12"
            style={{ background: "#000000", border: "1px solid #393647" }}
          >
            <h2
              className="font-display font-bold text-white text-center mb-6 sm:mb-10"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
            >
              See The Difference Precision Advertising Makes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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

function PartnerTabs() {
  const [activeTab, setActiveTab] = useState("measurement");
  const tabs = [
    {
      key: "measurement",
      label: "Measurement & Attribution Partners",
      img: measurementImg,
    },
    { key: "media", label: "Media & Platform Partners", img: mediaImg },
  ];
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex border-b border-white/10 mb-6 sm:mb-10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0"
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
        <div className="flex flex-col gap-8 sm:gap-10">
          {tabs.map((tab) => (
            <FadeSection key={tab.key}>
              <div
                className="relative cursor-pointer"
                onClick={() => setActiveTab(tab.key)}
              >
                <img
                  src={tab.img}
                  alt={tab.label}
                  className="w-full rounded-2xl object-cover"
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
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdFraudDetection() {
  const points = [
    "Multi Layered Fraud Protection Multi Detections",
    "Detection, Mitigation and reporting all in one place.",
    "Real time blocking for clean data and swift optimization.",
    "Comprehensive Reporting for advertisers.",
  ];
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
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
            <div className="flex flex-col gap-3">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-4 sm:px-5 py-3 sm:py-4"
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

function AdFormat() {
  const [active, setActive] = useState("banner");
  const formats = [
    { key: "banner", label: "Banner AD" },
    { key: "native", label: "Native AD" },
    { key: "video", label: "Video AD" },
    { key: "interstitial", label: "Interstitial AD" },
  ];

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

  return (
    <section className="bg-black flex items-center justify-center px-4 sm:px-8 py-10 sm:py-12">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-14 w-full max-w-2xl">
        {/* Phone mockup */}
        <div className="flex-shrink-0">
          <div
            className={`relative w-36 sm:w-40 h-72 sm:h-80 rounded-[2rem] border-[6px] border-[#1e2336] bg-[#0d1120] overflow-hidden transition-all duration-300 ${active === "video" ? "shadow-[0_0_0_3px_#3b82f6,0_0_24px_6px_rgba(59,130,246,0.35)]" : ""}`}
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#1e2336] rounded-full z-10" />
            <div className="absolute top-0 w-full flex justify-between items-center px-3 pt-3 pb-1 z-10">
              <span className="text-[8px] text-[#aaa] font-medium">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-2 h-1.5 rounded-sm bg-[#aaa]" />
                <div className="w-2.5 h-[5px] border border-[#aaa] rounded-sm relative">
                  <div className="absolute inset-[1px] right-[2px] bg-[#aaa] rounded-[1px]" />
                </div>
              </div>
            </div>
            {active === "native" && (
              <div className="absolute inset-0 bg-[#3b6cf6]" />
            )}
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

        {/* Labels */}
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-4 sm:mb-5">
            Ad Format
          </h2>
          <div className="flex flex-row sm:flex-col gap-3 sm:gap-1 flex-wrap">
            {formats.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`text-left text-sm px-0.5 py-1.5 transition-colors duration-200 ${active === key ? "text-white font-bold" : "text-gray-500 font-normal hover:text-gray-300"}`}
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

function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
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
          className="text-gray-500 text-xs tracking-widest"
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
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-8 sm:mb-10"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Get In Touch
          </h2>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  name: "name",
                  placeholder: "Enter Your Name...",
                  type: "text",
                },
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
                  className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(0,100,255,0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,160,255,0.7)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(0,100,255,0.3)")
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
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(0,100,255,0.3)",
                backdropFilter: "blur(8px)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,160,255,0.7)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0,100,255,0.3)")
              }
            />
            <button
              type="submit"
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
