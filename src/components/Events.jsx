import { useState, useEffect, useRef } from "react";
import FadeSection from "./FadeSection";

import img0 from "../assets/images/home/events/caraousel-zero.png";
import img1 from "../assets/images/home/events/caraousel-one.png";
import img2 from "../assets/images/home/events/caraousel-two.png";
import img3 from "../assets/images/home/events/caraousel-three.png";
import img4 from "../assets/images/home/events/caraousel-four.png";

const IMAGES = [img0, img1, img2, img3, img4];

// Desktop proportional slots
const SLOTS = [
  { width: 172, height: 270, top: 180, left: 0 },
  { width: 236, height: 371, top: 120, left: 201 },
  { width: 296, height: 465, top: 40, left: 466 },
  { width: 236, height: 371, top: 120, left: 791 },
  { width: 172, height: 270, top: 180, left: 1056 },
];

const CANVAS_HEIGHT = 505;
const CANVAS_WIDTH = 1228;

export default function Events() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef(null);
  const n = IMAGES.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % n);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (dir) => {
    setCurrent((prev) => (prev + dir + n) % n);
    startTimer();
  };

  const arrowTopPct = ((180 + 135) / CANVAS_HEIGHT) * 100;

  // Mobile: simple single-card carousel
  if (isMobile) {
    return (
      <FadeSection>
        <section className="py-12 pb-8 overflow-hidden">
          <div className="max-w-md mx-auto px-4">
            <h2
              className="font-display font-bold text-center text-white mb-8"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)" }}
            >
              Axponent <span className="text-brand-blue">At Events</span>
            </h2>

            {/* Single card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              {IMAGES.map((src, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: idx === current ? 1 : 0 }}
                >
                  <img
                    src={src}
                    alt={`Event ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Arrow overlays */}
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrent(idx);
                    startTimer();
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: idx === current ? 20 : 8,
                    height: 8,
                    background:
                      idx === current ? "#00A8FF" : "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeSection>
    );
  }

  // Desktop/Tablet: original fan carousel
  return (
    <FadeSection>
      <section className="py-12 sm:py-16 md:py-20 pb-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2
            className="font-display font-bold text-center text-white mb-10 sm:mb-14 md:mb-16"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Axponent <span className="text-brand-blue">At Events</span>
          </h2>

          <div
            className="relative mx-auto"
            style={{
              paddingBottom: `${(CANVAS_HEIGHT / CANVAS_WIDTH) * 100}%`,
            }}
          >
            <div className="absolute inset-0">
              {IMAGES.map((src, idx) => {
                let offset = idx - current;
                if (offset > Math.floor(n / 2)) offset -= n;
                if (offset < -Math.floor(n / 2)) offset += n;

                const slotIdx = offset + 2;
                if (slotIdx < 0 || slotIdx > 4) return null;

                const s = SLOTS[slotIdx];
                const isCenter = slotIdx === 2;
                const leftPct = (s.left / CANVAS_WIDTH) * 100;
                const topPct = (s.top / CANVAS_HEIGHT) * 100;
                const widthPct = (s.width / CANVAS_WIDTH) * 100;
                const heightPct = (s.height / CANVAS_HEIGHT) * 100;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!isCenter) go(offset > 0 ? 1 : -1);
                    }}
                    style={{
                      position: "absolute",
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      width: `${widthPct}%`,
                      height: `${heightPct}%`,
                      borderRadius: 18,
                      overflow: "hidden",
                      zIndex: isCenter
                        ? 10
                        : slotIdx === 1 || slotIdx === 3
                          ? 7
                          : 4,
                      border: isCenter
                        ? "2px solid rgba(0,168,255,0.7)"
                        : "1px solid rgba(255,255,255,0.10)",
                      boxShadow: isCenter
                        ? "0 8px 40px rgba(0,120,255,0.30), 0 2px 16px rgba(0,0,0,0.5)"
                        : "0 4px 20px rgba(0,0,0,0.35)",
                      cursor: isCenter ? "default" : "pointer",
                      transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Event ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        filter: isCenter ? "none" : "brightness(0.6)",
                        transition: "filter 0.55s ease",
                      }}
                    />
                  </div>
                );
              })}

              {/* Left arrow */}
              <button
                onClick={() => go(-1)}
                style={{
                  position: "absolute",
                  left: "-4%",
                  top: `${arrowTopPct}%`,
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,168,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Right arrow */}
              <button
                onClick={() => go(1)}
                style={{
                  position: "absolute",
                  right: "-4%",
                  top: `${arrowTopPct}%`,
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,168,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
