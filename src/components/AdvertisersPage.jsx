import { useState, useRef, useEffect } from "react";
import FadeSection from "./FadeSection";
import earthImg from "../assets/images/Earth.png";

import cardViewability from "../assets/images/cards/card 3.png";
import cardPlacements from "../assets/images/cards/card 4.png";
import cardPublishers from "../assets/images/cards/card 5.png";
import measurementImg from "../assets/images/partners/measurement-partners.png";
import measurementMobileImg from "../assets/images/partners/measurement-mobile.png";
import mediaMobileImg from "../assets/images/partners/media-mobile.png";
import mediaImg from "../assets/images/partners/media-partners.png";
import bannerAd from "../assets/images/advertisers/banner_ad.png";
import nativeAd from "../assets/images/advertisers/native_ad.png";
import videoAd from "../assets/images/advertisers/video_ad.png";
import interstitialAd from "../assets/images/advertisers/interstitial_ad.png";

function AdvertisersHero() {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[50vh] flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1
          className="font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
        >
          PARTNERS/
          <br className="sm:hidden" />
          <span style={{ color: "#007BFF" }}>ADVERTISERS</span>
        </h1>
        <p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const sectionRefs = useRef({});
  const isScrollingProgrammatically = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    {
      key: "measurement",
      label: "Measurement & Attribution Partners",
      img: measurementImg,
      mobileImg: measurementMobileImg,
    },
    {
      key: "media",
      label: "Media & Platform Partners",
      img: mediaImg,
      mobileImg: mediaMobileImg,
    },
  ];

  const handleTabClick = (key) => {
    setActiveTab(key);
    const el = sectionRefs.current[key];
    if (!el) return;
    isScrollingProgrammatically.current = true;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 900);
  };

  useEffect(() => {
    const tabKeys = tabs.map((t) => t.key);
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;
      let closestKey = null;
      let closestDistance = Infinity;
      tabKeys.forEach((key) => {
        const el = sectionRefs.current[key];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2,
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestKey = key;
        }
      });
      if (closestKey) setActiveTab(closestKey);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Sticky Tab Bar */}
        <div
          className="sticky z-30 mb-6 sm:mb-8 md:mb-12"
          style={{ top: "72px" }}
        >
          <div
            className="flex items-stretch justify-center"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className="relative flex-1 transition-all duration-300 focus:outline-none text-center"
                style={{
                  color: activeTab === tab.key ? "#ffffff" : "#6B7280",
                  fontWeight: activeTab === tab.key ? 600 : 400,
                  /* Allow wrap so text fits on mobile without overflow */
                  whiteSpace: "normal",
                  lineHeight: "1.35",
                  padding: "10px clamp(8px, 3vw, 36px) 14px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                }}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span
                    className="absolute bottom-0 left-0"
                    style={{
                      width: "100%",
                      height: "2px",
                      borderRadius: "2px 2px 0 0",
                      background: "#00A8FF",
                      display: "block",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Image Sections */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
          {tabs.map((tab) => (
            <FadeSection key={tab.key}>
              <div
                ref={(el) => (sectionRefs.current[tab.key] = el)}
                className="relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden"
                onClick={() => handleTabClick(tab.key)}
                style={{
                  boxShadow:
                    activeTab === tab.key
                      ? "0 0 0 2px rgba(0,168,255,0.55), 0 20px 60px rgba(0,80,200,0.3)"
                      : "none",
                  transition: "box-shadow 0.35s ease",
                }}
              >
                <img
                  src={isMobile ? tab.mobileImg : tab.img}
                  alt={tab.label}
                  className="w-full object-cover block"
                  style={{
                    /* Portrait ratio on mobile, auto on desktop */
                    aspectRatio: isMobile ? "9/14" : "auto",
                    objectPosition: "top center",
                    opacity: activeTab === tab.key ? 1 : 0.45,
                    transform:
                      activeTab === tab.key ? "scale(1)" : "scale(0.985)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    borderRadius: "inherit",
                  }}
                />

                {activeTab !== tab.key && (
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <span
                      className="text-white font-medium px-3 py-1.5 rounded-full text-center"
                      style={{
                        fontSize: "clamp(11px, 3vw, 14px)",
                        background: "rgba(0,0,0,0.55)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        backdropFilter: "blur(6px)",
                        lineHeight: "1.4",
                      }}
                    >
                      {tab.label}
                    </span>
                  </div>
                )}
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
                    borderLeft: "3px solid #007BFF",
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
    { key: "banner", label: "Banner AD", img: bannerAd },
    { key: "native", label: "Native AD", img: nativeAd },
    { key: "video", label: "Video AD", img: interstitialAd },
    { key: "interstitial", label: "Interstitial AD", img: videoAd },
  ];

  const current = formats.find((f) => f.key === active);

  return (
    <section className="bg-black px-4 sm:px-8 pt-16 sm:pt-24 pb-10 sm:pb-12">
      {/* Mobile: stacked layout */}
      <div className="flex flex-col items-center sm:hidden gap-6 w-full max-w-sm mx-auto">
        <h2 className="text-white text-2xl font-bold text-center">Ad Format</h2>

        {/* Tab row — horizontal scrollable on mobile */}
        <div
          className="flex gap-0 w-full overflow-x-auto scrollbar-hide"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {formats.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="relative flex-shrink-0 py-2 px-3 text-xs transition-all duration-200 focus:outline-none"
              style={{
                color: active === key ? "#ffffff" : "#6B7280",
                fontWeight: active === key ? 600 : 400,
                background: "transparent",
                border: "none",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {label}
              {active === key && (
                <span
                  className="absolute bottom-0 left-0"
                  style={{
                    width: "100%",
                    height: "2px",
                    background: "#00A8FF",
                    borderRadius: "2px 2px 0 0",
                    display: "block",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Phone mockup */}
        <div className="relative w-40 h-[340px] rounded-[2.5rem] bg-black ">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-2 bg-[#1e2336] rounded-full z-10" />
          <img
            key={current.img}
            src={current.img}
            alt={current.img}
            className="w-full h-full transition-all duration-500"
          />
        </div>
      </div>

      {/* Desktop: original side-by-side layout */}
      <div className="hidden sm:flex flex-row items-center gap-10 sm:gap-16 w-full max-w-4xl mx-auto">
        <div className="flex-shrink-0">
          <div className="relative w-44 sm:w-52 h-[380px] sm:h-[460px] rounded-[2.5rem]  bg-black ">
            {/* <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-2 bg-[#1e2336] rounded-full z-10" /> */}
            <img
              key={current.img}
              src={current.img}
              alt={current.label}
              className="w-full h-full transition-all duration-500"
            />
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">
            Ad Format
          </h2>
          <div className="flex flex-col gap-3">
            {formats.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`text-left text-sm transition-all duration-200 ${
                  active === key
                    ? "text-white font-semibold"
                    : "text-gray-500 hover:text-gray-300"
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
      id="enquire-form"
      className="relative overflow-hidden"
      style={{ paddingTop: "0", paddingBottom: "0" }}
    >
      {/* Earth image — pinned to bottom */}
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

      {/* Scroll Down indicator */}
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

      {/* Form content */}
      <div
        className="relative px-4"
        style={{
          zIndex: 1,
          paddingTop: "clamp(40px, 8vw, 80px)",
          paddingBottom: "clamp(120px, 22vw, 320px)",
        }}
      >
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
