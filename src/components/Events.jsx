import { useState, useEffect, useRef } from "react";
import FadeSection from "./FadeSection";

import img0 from "../assets/images/home/events/caraousel-zero.png";
import img1 from "../assets/images/home/events/caraousel-one.png";
import img2 from "../assets/images/home/events/caraousel-two.png";
import img3 from "../assets/images/home/events/caraousel-three.png";
import img4 from "../assets/images/home/events/caraousel-four.png";

const IMAGES = [img0, img1, img2, img3, img4];

// Figma specs — centre lifted more (top: 60 instead of 109)
const SLOTS = [
  { width: 172, height: 270, top: 180, left: 0 },
  { width: 236, height: 371, top: 120, left: 201 },
  { width: 296, height: 465, top: 40, left: 466 }, // lifted up more
  { width: 236, height: 371, top: 120, left: 791 },
  { width: 172, height: 270, top: 180, left: 1056 },
];

const CANVAS_HEIGHT = 505;
const CANVAS_WIDTH = 1228;

export default function Events() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const n = IMAGES.length;

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

  // Arrow vertical position: aligned to the mid-height of the side cards
  // Side cards: top=180, height=270 → midpoint = 180 + 135 = 315px out of 505
  const arrowTopPct = ((180 + 135) / CANVAS_HEIGHT) * 100;

  return (
    <FadeSection>
      <section className="py-20 pb-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Axponent <span className="text-brand-blue">At Events</span>
          </h2>

          {/* Carousel canvas with arrows overlaid */}
          <div
            className="relative mx-auto"
            style={{
              paddingBottom: `${(CANVAS_HEIGHT / CANVAS_WIDTH) * 100}%`,
            }}
          >
            <div className="absolute inset-0">
              {/* Cards */}
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

              {/* Left arrow — aligned to side-card vertical centre */}
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
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,168,255,0.25)";
                  e.currentTarget.style.borderColor = "rgba(0,168,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
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
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,168,255,0.25)";
                  e.currentTarget.style.borderColor = "rgba(0,168,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
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
