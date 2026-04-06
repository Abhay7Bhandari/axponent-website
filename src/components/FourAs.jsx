import { useState, useEffect, useRef } from "react";
import analysisImg from "../assets/images/home/four-as/analysis.png";
import activationImg from "../assets/images/home/four-as/activation.png";
import acquisitionImg from "../assets/images/home/four-as/acquisition.png";
import amplificationImg from "../assets/images/home/four-as/amplification.png";

const SLIDES = [
  {
    key: "Axponent 4A'S",
    isTitle: true,
    img: null,
  },
  {
    key: "Analysis",
    subtitle: "Audience, funnel, and attribution insights",
    body: "We start with data. By analyzing audience behavior, conversion funnels, and attribution signals, we identify where real value comes from and where growth opportunities lie. This foundation ensures every campaign is aligned with performance and ROI from the start.",
    img: analysisImg,
  },
  {
    key: "Activation",
    subtitle: "Early funnel optimization",
    body: "Before scaling, we test and refine. We validate audiences, creatives, and channels to build a strong performance baseline while optimizing early engagement and conversions to ensure campaigns scale efficiently.",
    img: activationImg,
  },
  {
    key: "Acquisition",
    subtitle: "Intent-led, CPA-driven media execution",
    body: "Our focus is on acquiring users that matter. With intent-led targeting and CPA-driven buying, we deliver high-quality users through data-backed media execution designed for measurable outcomes and long-term value.",
    img: acquisitionImg,
  },
  {
    key: "Amplification",
    subtitle: "Scalable, profitable growth",
    body: "Once performance is validated, we scale with purpose. We expand into new markets, increase budgets strategically, and unlock new growth opportunities while maintaining quality and profitability.",
    img: amplificationImg,
  },
];

// Mobile accordion/stack version
function MobileFourAs() {
  const [active, setActive] = useState(0);

  return (
    <div className="py-0">
      {/* Full-bleed image with overlay — same feel as desktop */}
      <div className="relative w-full" style={{ minHeight: "100svh" }}>
        {SLIDES[active].isTitle ? (
          <div className="absolute inset-0 bg-black" />
        ) : (
          <>
            <img
              src={SLIDES[active].img}
              alt={SLIDES[active].key}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.32) saturate(0.85)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(2,6,20,1) 0%, rgba(2,6,20,0.4) 50%, transparent 100%)",
              }}
            />
          </>
        )}

        {/* Text content */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-6 pb-32 pt-20 max-w-sm"
          style={{ zIndex: 5 }}
        >
          {SLIDES[active].isTitle ? (
            <h2
              className="text-white text-center font-bold"
              style={{
                fontFamily: "Gilroy-Bold, sans-serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                lineHeight: "110%",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              Axponent <span style={{ color: "#007BFF" }}>4A'S</span>
            </h2>
          ) : (
            <>
              <h3
                className="text-white font-bold mb-3"
                style={{
                  fontFamily: "Gilroy-Bold, sans-serif",
                  fontSize: "clamp(1.4rem, 6vw, 2rem)",
                  lineHeight: "115%",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                {SLIDES[active].subtitle}
              </h3>
              <p
                className="text-gray-300 leading-relaxed"
                style={{ fontSize: "clamp(0.82rem, 3.5vw, 1rem)" }}
              >
                {SLIDES[active].body}
              </p>
            </>
          )}
        </div>

        {/* Bottom tab bar — mirrors desktop */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            background: "rgba(2,6,20,0.85)",
            backdropFilter: "blur(8px)",
            zIndex: 10,
          }}
        >
          {SLIDES.map((s, j) => (
            <button
              key={s.key}
              onClick={() => setActive(j)}
              className="relative flex-1 py-3 text-xs font-medium transition-all duration-300 focus:outline-none"
              style={{
                color: active === j ? "#ffffff" : "rgba(156,163,175,0.7)",
                background:
                  active === j ? "rgba(0,80,200,0.22)" : "transparent",
                border: "none",
                cursor: "pointer",
                ...(s.isTitle
                  ? {
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 0,
                      minWidth: 0,
                      padding: 0,
                      margin: 0,
                      overflow: "hidden",
                      color: "transparent",
                      background: "transparent",
                      pointerEvents: "none",
                    }
                  : {}),
              }}
            >
              {active === j && (
                <span
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg,transparent,#00A8FF,transparent)",
                  }}
                />
              )}
              {s.isTitle ? <span className="sr-only">{s.key}</span> : s.key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Desktop sticky-scroll version
function DesktopFourAs() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active || animating) return;
    setPrev(active);
    setActive(idx);
    setAnimating(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 800);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScroll = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      const newIdx = Math.min(
        SLIDES.length - 1,
        Math.floor(progress * SLIDES.length),
      );
      if (newIdx !== active) goTo(newIdx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active, animating]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div
      ref={containerRef}
      style={{ height: `${100 + SLIDES.length * 100}vh`, position: "relative" }}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#020610",
        }}
      >
        {SLIDES.map((slide, i) => {
          const isActive = i === active;
          const isPrev = i === prev;

          return (
            <div
              key={slide.key}
              className="absolute inset-0"
              style={{
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Background image or black title background */}
              <div
                className="absolute inset-0"
                style={{
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(1.04)",
                  background: slide.isTitle ? "#000000" : undefined,
                }}
              >
                {!slide.isTitle && (
                  <img
                    src={slide.img}
                    alt={slide.key}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.32) saturate(0.85)" }}
                  />
                )}
              </div>

              {/* Gradient overlay */}
              {!slide.isTitle && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(2,6,20,0.95) 0%, rgba(2,6,20,0.65) 45%, rgba(2,6,20,0.15) 75%, transparent 100%), linear-gradient(to top, rgba(2,6,20,1) 0%, transparent 25%)",
                  }}
                />
              )}

              {/* SCROLL DOWN label */}
              <div className="hidden lg:flex flex-col items-center gap-2 absolute right-6 top-1/2 -translate-y-1/2 z-20">
                <span
                  className="text-gray-600 text-[10px] tracking-widest select-none"
                  style={{ writingMode: "vertical-rl" }}
                >
                  SCROLL DOWN
                </span>
                <div className="w-px h-10 bg-gray-700" />
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4B5563"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>

              {/* Text content — responsive positioning */}
              {slide.isTitle ? (
                <div
                  className="absolute inset-0 flex items-center justify-center px-8 md:px-16 lg:px-24"
                  style={{ zIndex: 10 }}
                >
                  <h2
                    className="text-white text-center font-bold"
                    style={{
                      fontFamily: "Gilroy-Bold, sans-serif",
                      fontSize: "clamp(2rem, 5vw, 5rem)",
                      lineHeight: "100%",
                      transition: "opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0px)" : "translateY(30px)",
                    }}
                  >
                    Axponent <span style={{ color: "#007BFF" }}>4A'S</span>
                  </h2>
                </div>
              ) : (
                <div
                  className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 pb-20 max-w-2xl"
                  style={{ zIndex: 10 }}
                >
                  <h3
                    className="text-white mb-4 sm:mb-6"
                    style={{
                      fontFamily: "Gilroy-Bold, sans-serif",
                      fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                      lineHeight: "110%",
                      transition:
                        "opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0px)"
                        : "translateY(40px)",
                    }}
                  >
                    {slide.subtitle}
                  </h3>
                  <p
                    className="text-gray-300"
                    style={{
                      fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
                      lineHeight: "150%",
                      transition:
                        "opacity 0.65s ease 0.28s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.28s",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0px)"
                        : "translateY(40px)",
                    }}
                  >
                    {slide.body}
                  </p>
                </div>
              )}

              {/* Tab bar */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  background: "rgba(2,6,20,0.75)",
                  backdropFilter: "blur(8px)",
                  zIndex: 10,
                }}
              >
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.key}
                    onClick={() => goTo(idx)}
                    className="relative flex-1 py-4 text-sm font-medium transition-all duration-300 focus:outline-none"
                    style={{
                      color: active === idx ? "#ffffff" : "rgba(156,163,175,0.7)",
                      background:
                        active === idx ? "rgba(0,80,200,0.22)" : "transparent",
                      ...(s.isTitle
                        ? {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 0,
                            minWidth: 0,
                            padding: 0,
                            margin: 0,
                            overflow: "hidden",
                            color: "transparent",
                            background: "transparent",
                            pointerEvents: "none",
                          }
                        : {}),
                    }}
                  >
                    {active === idx && (
                      <span
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                          background:
                            "linear-gradient(90deg,transparent,#00A8FF,transparent)",
                        }}
                      />
                    )}
                    {s.isTitle ? <span className="sr-only">{s.key}</span> : s.key}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FourAs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileFourAs /> : <DesktopFourAs />;
}
