import { useState, useEffect, useRef } from "react";
import analysisImg from "../assets/images/home/four-as/analysis.png";
import activationImg from "../assets/images/home/four-as/activation.png";
import acquisitionImg from "../assets/images/home/four-as/acquisition.png";
import amplificationImg from "../assets/images/home/four-as/amplification.png";

const CW = 1536;
const CH = 628;

const SLIDES = [
  {
    key: "Analysis",
    subtitle: "Audience, funnel, and attribution insights",
    body: "We start with data. By analyzing audience behavior, conversion funnels, and attribution signals, we identify where real value comes from and where growth opportunities lie. This foundation ensures every campaign is aligned with performance and ROI from the start.",
    img: analysisImg,
    titlePos: {
      top: `${(300 / CH) * 100}%`,
      left: `${(170 / CW) * 100}%`,
      width: `${(554 / CW) * 100}%`,
    },
    bodyPos: {
      top: `${(400 / CH) * 100}%`,
      left: `${(170 / CW) * 100}%`,
      width: `${(531 / CW) * 100}%`,
    },
  },
  {
    key: "Activation",
    subtitle: "Early funnel optimization",
    body: "Before scaling, we test and refine. We validate audiences, creatives, and channels to build a strong performance baseline while optimizing early engagement and conversions to ensure campaigns scale efficiently.",
    img: activationImg,
    titlePos: {
      top: `${(300 / CH) * 100}%`,
      left: `${(677 / CW) * 100}%`,
      width: `${(554 / CW) * 100}%`,
    },
    bodyPos: {
      top: `${(350 / CH) * 100}%`,
      left: `${(677 / CW) * 100}%`,
      width: `${(631 / CW) * 100}%`,
    },
  },
  {
    key: "Acquisition",
    subtitle: "Intent-led, CPA-driven media execution",
    body: "Our focus is on acquiring users that matter. With intent-led targeting and CPA-driven buying, we deliver high-quality users through data-backed media execution designed for measurable outcomes and long-term value.",
    img: acquisitionImg,
    titlePos: {
      top: `${(300 / CH) * 100}%`,
      left: `${(189 / CW) * 100}%`,
      width: `${(554 / CW) * 100}%`,
    },
    bodyPos: {
      top: `${(400 / CH) * 100}%`,
      left: `${(189 / CW) * 100}%`,
      width: `${(631 / CW) * 100}%`,
    },
  },
  {
    key: "Amplification",
    subtitle: "Scalable, profitable growth",
    body: "Once performance is validated, we scale with purpose. We expand into new markets, increase budgets strategically, and unlock new growth opportunities while maintaining quality and profitability.",
    img: amplificationImg,
    titlePos: {
      top: `${(300 / CH) * 100}%`,
      left: `${(756 / CW) * 100}%`,
      width: `${(554 / CW) * 100}%`,
    },
    bodyPos: {
      top: `${(350 / CH) * 100}%`,
      left: `${(756 / CW) * 100}%`,
      width: `${(631 / CW) * 100}%`,
    },
  },
];

export default function FourAs() {
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

  // Scroll-driven slide changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top; // how far into the sticky container we've scrolled
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

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    // Tall container — 500vh gives enough scroll room for 4 slides
    <div
      ref={containerRef}
      style={{ height: `${100 + SLIDES.length * 100}vh`, position: "relative" }}
    >
      {/* Sticky viewport that pins while scrolling */}
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
              {/* Background image — cross-fade + zoom */}
              <div
                className="absolute inset-0"
                style={{
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(1.04)",
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.key}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.32) saturate(0.85)" }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(2,6,20,0.95) 0%, rgba(2,6,20,0.65) 45%, rgba(2,6,20,0.15) 75%, transparent 100%), linear-gradient(to top, rgba(2,6,20,1) 0%, transparent 25%)",
                }}
              />

              {/* SCROLL DOWN side label */}
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

              {/* Title */}
              <div
                style={{
                  position: "absolute",
                  top: slide.titlePos.top,
                  left: slide.titlePos.left,
                  width: slide.titlePos.width,
                  zIndex: 10,
                  overflow: "hidden",
                }}
              >
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "Gilroy-Bold, sans-serif",
                    fontWeight: 400,
                    fontSize: "50px",
                    lineHeight: "96%",
                    letterSpacing: "0",
                    margin: 0,
                    transition:
                      "opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s",
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      
? "translateY(0px)"
                      : "translateY(40px)",
                    willChange: "transform, opacity",
                  }}
                >
                  {slide.subtitle}
                </h3>
              </div>

              {/* Body */}
              <div
                style={{
                  position: "absolute",
                  top: slide.bodyPos.top,
                  left: slide.bodyPos.left,
                  width: slide.bodyPos.width,
                  zIndex: 10,
                  overflow: "hidden",
                }}
              >
                <p
                  className="text-gray-300"
                  style={{
                    fontFamily: "Gilroy-Medium, sans-serif",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "150%",
                    letterSpacing: "0",
                    margin: 0,
                    transition:
                      "opacity 0.65s ease 0.28s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.28s",
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0px)"
                      : "translateY(40px)",
                    willChange: "transform, opacity",
                  }}
                >
                  {slide.body}
                </p>
              </div>

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
                {SLIDES.map((s, j) => (
                  <button
                    key={s.key}
                    onClick={() => goTo(j)}
                    className="relative flex-1 py-4 text-sm font-medium transition-all duration-300 focus:outline-none"
                    style={{
                      color: active === j ? "#ffffff" : "rgba(156,163,175,0.7)",
                      background:
                        active === j ? "rgba(0,80,200,0.22)" : "transparent",
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
                    {s.key}
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