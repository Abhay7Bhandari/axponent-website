import { useState, useRef, useEffect } from "react";
import FadeSection from "./FadeSection";
import careerMock from "../utils/careerMock.json";

/* ── Section 1: Hero ── */
function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-0 overflow-hidden">
      <div className="stars" />

      {/* Content */}
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-white mb-5 leading-tight">
          GROW WITH <span style={{ color: "#00A8FF" }}>AXPONENT</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          We're building a team of performance-driven thinkers who thrive in
          fast-paced, data-led environments.
        </p>
        <button
          className="px-10 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #0050FF, #0090FF)",
            boxShadow: "0 4px 24px rgba(0,100,255,0.45)",
          }}
        >
          Apply Now
        </button>
      </FadeSection>

      {/* Glowing orb bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-full"
        style={{ height: "220px" }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "min(700px,95vw)",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(0,100,255,0.55) 0%, rgba(0,40,120,0.25) 45%, transparent 75%)",
            filter: "blur(16px)",
            animation: "float 5s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "min(700px,95vw)",
            height: "210px",
            borderRadius: "50%",
            border: "1.5px solid rgba(0,140,255,0.3)",
            boxShadow: "0 0 40px rgba(0,120,255,0.15)",
            animation: "float 5s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

/* ── Section 2: Why Work Here card ── */

function WhyWorkHere() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      number: "01",
      title: "Exposure to global markets and ",
      highlight: "large-scale campaigns",
      image: (
        <svg
          viewBox="0 0 700 380"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#003870" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#001030" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="fadeTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#040815" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#040815" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="700" height="380" fill="url(#g1)" />
          <ellipse
            cx="350"
            cy="260"
            rx="320"
            ry="90"
            fill="rgba(0,60,120,0.5)"
            stroke="rgba(0,120,200,0.3)"
            strokeWidth="1"
          />
          <g opacity="0.5" fill="#1a4a7a" stroke="#3a8aaa" strokeWidth="0.5">
            <path d="M120 200 Q160 170 210 180 Q240 175 255 195 Q265 215 248 228 Q220 240 185 232 Q145 222 120 200Z" />
            <path d="M270 185 Q305 168 340 172 Q365 174 372 190 Q377 208 362 218 Q340 228 312 222 Q285 215 272 198Z" />
            <path d="M390 178 Q430 162 465 168 Q488 172 492 188 Q495 205 478 215 Q455 224 425 218 Q396 210 388 194Z" />
            <path d="M300 230 Q322 220 342 225 Q358 229 360 244 Q361 258 345 265 Q325 271 308 264 Q292 256 291 242Z" />
            <path d="M175 238 Q195 229 210 234 Q222 238 223 252 Q223 265 210 270 Q196 274 184 268 Q172 261 171 248Z" />
          </g>
          {[
            ["155,210", "315,195"],
            ["315,195", "438,188"],
            ["438,188", "480,200"],
            ["315,195", "330,248"],
            ["155,210", "188,245"],
          ].map(([s, e], i) => {
            const [x1, y1] = s.split(",").map(Number),
              [x2, y2] = e.split(",").map(Number);
            return (
              <path
                key={i}
                d={`M${x1},${y1} Q${(x1 + x2) / 2},${Math.min(y1, y2) - 25} ${x2},${y2}`}
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="5 3"
                opacity="0.6"
              />
            );
          })}
          {[
            [155, 210],
            [315, 195],
            [438, 188],
            [480, 200],
            [330, 248],
            [188, 245],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="6"
                fill="rgba(100,180,255,0.3)"
                stroke="white"
                strokeWidth="1"
              />
              <circle cx={x} cy={y} r="3" fill="white" opacity="0.9" />
            </g>
          ))}
          {[
            [100, 155],
            [210, 125],
            [350, 115],
            [490, 125],
            [600, 155],
          ].map(([x, y], i) => (
            <g key={i}>
              <ellipse
                cx={x}
                cy={y - 8}
                rx="16"
                ry="18"
                fill="#2a3a5a"
                stroke="#3a5a8a"
                strokeWidth="1"
              />
              <rect
                x={x - 18}
                y={y + 8}
                width="36"
                height="35"
                rx="6"
                fill="#2a3a5a"
                stroke="#3a5a8a"
                strokeWidth="1"
              />
            </g>
          ))}
          {[
            [180, 235],
            [490, 240],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect
                x={x - 28}
                y={y - 15}
                width="56"
                height="35"
                rx="3"
                fill="#0a1840"
                stroke="#0060C0"
                strokeWidth="1"
              />
              <rect
                x={x - 32}
                y={y + 20}
                width="64"
                height="7"
                rx="2"
                fill="#0a1840"
                stroke="#0060C0"
                strokeWidth="1"
              />
            </g>
          ))}
          {[
            [280, 258],
            [420, 255],
          ].map(([x, y], i) => (
            <g key={i}>
              <ellipse
                cx={x}
                cy={y}
                rx="14"
                ry="9"
                fill="#1a2050"
                stroke="#0060C0"
                strokeWidth="1"
              />
              <rect
                x={x - 8}
                y={y - 16}
                width="16"
                height="18"
                rx="3"
                fill="#1a2050"
                stroke="#0060C0"
                strokeWidth="1"
              />
            </g>
          ))}
          <path
            d="M0 310 Q80 270 160 260 Q180 258 185 270 Q170 280 80 300 Q40 315 0 330Z"
            fill="#c8956a"
            opacity="0.7"
          />
          <path
            d="M700 320 Q620 280 560 272 Q540 270 538 282 Q555 292 630 310 Q665 320 700 335Z"
            fill="#c8956a"
            opacity="0.6"
          />
          <rect
            x="0"
            y="0"
            width="700"
            height="60"
            fill="url(#fadeTop)"
            opacity="0.8"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Culture of ownership, learning, ",
      highlight: "and accountability",
      image: (
        <svg
          viewBox="0 0 700 380"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="g2" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#1a2a3a" stopOpacity="1" />
              <stop offset="100%" stopColor="#050810" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="700" height="380" fill="url(#g2)" />
          <rect
            x="420"
            y="0"
            width="280"
            height="220"
            fill="rgba(100,140,200,0.08)"
            rx="4"
          />
          <rect
            x="440"
            y="10"
            width="120"
            height="180"
            fill="rgba(120,160,220,0.06)"
            rx="2"
          />
          <rect
            x="570"
            y="10"
            width="120"
            height="180"
            fill="rgba(120,160,220,0.06)"
            rx="2"
          />
          <ellipse
            cx="350"
            cy="310"
            rx="340"
            ry="55"
            fill="rgba(30,40,60,0.8)"
            stroke="rgba(60,80,120,0.4)"
            strokeWidth="1"
          />
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <rect
                x={320}
                y={180 - i * 22}
                width={60}
                height={16}
                rx="2"
                fill={`rgba(${180 + i * 5},${140 + i * 3},${80 + i * 4},0.9)`}
                stroke={`rgba(${160 + i * 5},${120 + i * 3},${60 + i * 4},0.6)`}
                strokeWidth="0.8"
                transform={
                  i % 2 === 0
                    ? `rotate(0,350,${188 - i * 22})`
                    : `rotate(90,350,${188 - i * 22})`
                }
              />
            </g>
          ))}
          {[
            [80, 240],
            [200, 205],
            [350, 195],
            [500, 205],
            [620, 240],
          ].map(([x, y], i) => (
            <g key={i}>
              <ellipse
                cx={x}
                cy={y - 15}
                rx="22"
                ry="26"
                fill={
                  ["#2a3a5a", "#3a3a4a", "#2a3050", "#3a3a50", "#2a3560"][i]
                }
                stroke={
                  ["#4a6a9a", "#5a5a7a", "#4a5080", "#5a5a80", "#4a6090"][i]
                }
                strokeWidth="1"
              />
              <rect
                x={x - 25}
                y={y + 10}
                width="50"
                height="45"
                rx="8"
                fill={
                  ["#2a3a5a", "#3a3a4a", "#2a3050", "#3a3a50", "#2a3560"][i]
                }
                stroke={
                  ["#4a6a9a", "#5a5a7a", "#4a5080", "#5a5a80", "#4a6090"][i]
                }
                strokeWidth="1"
              />
              <path
                d={`M${x} ${y + 10} Q${350 + (x - 350) * 0.3} ${230} ${330 + i * 8} ${240}`}
                fill="none"
                stroke="#c8956a"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>
          ))}
          {[
            [250, 290],
            [450, 290],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect
                x={x - 6}
                y={y - 30}
                width="12"
                height="35"
                rx="4"
                fill="rgba(0,100,50,0.7)"
                stroke="rgba(0,150,80,0.5)"
                strokeWidth="1"
              />
              <ellipse
                cx={x}
                cy={y - 30}
                rx="6"
                ry="4"
                fill="rgba(0,120,60,0.8)"
              />
            </g>
          ))}
        </svg>
      ),
    },
    {
      number: "03",
      title: "Opportunity to work with leading ",
      highlight: "platforms and partners",
      image: (
        <svg
          viewBox="0 0 700 380"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="g3" cx="40%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a2535" stopOpacity="1" />
              <stop offset="100%" stopColor="#050810" stopOpacity="1" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="700" height="380" fill="url(#g3)" />
          <rect
            x="0"
            y="40"
            width="700"
            height="280"
            fill="rgba(20,30,50,0.4)"
          />
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={i * 160}
              y={50}
              width={150}
              height={180}
              rx="4"
              fill="rgba(15,25,45,0.6)"
              stroke="rgba(30,50,80,0.3)"
              strokeWidth="1"
            />
          ))}
          <rect
            x="600"
            y="100"
            width="20"
            height="120"
            rx="4"
            fill="rgba(30,50,30,0.7)"
          />
          <ellipse
            cx="610"
            cy="100"
            rx="30"
            ry="40"
            fill="rgba(30,80,30,0.6)"
            stroke="rgba(50,120,50,0.4)"
            strokeWidth="1"
          />
          <ellipse
            cx="595"
            cy="115"
            rx="20"
            ry="28"
            fill="rgba(40,90,40,0.5)"
          />
          <ellipse
            cx="625"
            cy="108"
            rx="22"
            ry="30"
            fill="rgba(35,85,35,0.5)"
          />
          <ellipse
            cx="350"
            cy="310"
            rx="300"
            ry="45"
            fill="rgba(25,35,55,0.9)"
            stroke="rgba(40,60,100,0.4)"
            strokeWidth="1"
          />
          <rect
            x="280"
            y="255"
            width="140"
            height="90"
            rx="4"
            fill="#0a1020"
            stroke="#1a3060"
            strokeWidth="1.5"
          />
          <rect
            x="270"
            y="342"
            width="160"
            height="10"
            rx="3"
            fill="#0a1020"
            stroke="#1a3060"
            strokeWidth="1"
          />
          <rect
            x="288"
            y="262"
            width="124"
            height="76"
            rx="2"
            fill="rgba(0,100,200,0.15)"
          />
          <rect
            x="292"
            y="266"
            width="116"
            height="68"
            rx="1"
            fill="rgba(20,80,180,0.2)"
          />
          {[
            [60, 200],
            [160, 170],
            [290, 160],
            [430, 165],
            [540, 175],
            [650, 200],
          ].map(([x, y], i) => (
            <g key={i}>
              <ellipse
                cx={x}
                cy={y - 15}
                rx="20"
                ry="24"
                fill={
                  [
                    "#2a3a5a",
                    "#3a2a3a",
                    "#2a3050",
                    "#4a3a2a",
                    "#2a3a4a",
                    "#3a3050",
                  ][i]
                }
                stroke={
                  [
                    "#4a6a9a",
                    "#6a4a6a",
                    "#4a5080",
                    "#7a6a4a",
                    "#4a6a7a",
                    "#5a5080",
                  ][i]
                }
                strokeWidth="1"
              />
              <rect
                x={x - 22}
                y={y + 8}
                width="44"
                height="50"
                rx="7"
                fill={
                  [
                    "#2a3a5a",
                    "#3a2a3a",
                    "#2a3050",
                    "#4a3a2a",
                    "#2a3a4a",
                    "#3a3050",
                  ][i]
                }
                stroke={
                  [
                    "#4a6a9a",
                    "#6a4a6a",
                    "#4a5080",
                    "#7a6a4a",
                    "#4a6a7a",
                    "#5a5080",
                  ][i]
                }
                strokeWidth="1"
              />
              {i % 2 === 0 && (
                <path
                  d={`M${x - 15} ${y + 10} Q${x - 35} ${y - 20} ${x - 25} ${y - 40}`}
                  fill="none"
                  stroke="#c8956a"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              )}
              {i % 2 !== 0 && (
                <path
                  d={`M${x + 15} ${y + 10} Q${x + 35} ${y - 20} ${x + 25} ${y - 40}`}
                  fill="none"
                  stroke="#c8956a"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              )}
            </g>
          ))}
          {[
            [180, 315],
            [520, 318],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect
                x={x - 10}
                y={y - 22}
                width="20"
                height="24"
                rx="3"
                fill="rgba(40,50,80,0.8)"
                stroke="rgba(60,80,120,0.6)"
                strokeWidth="1"
              />
              <ellipse
                cx={x}
                cy={y - 22}
                rx="10"
                ry="5"
                fill="rgba(50,60,90,0.9)"
              />
            </g>
          ))}
          <rect
            x="80"
            y="295"
            width="120"
            height="8"
            rx="3"
            fill="rgba(200,180,140,0.4)"
            stroke="rgba(180,160,120,0.3)"
            strokeWidth="0.5"
            transform="rotate(-8,140,299)"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <FadeSection>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(0,80,200,0.25)" }}
          >
            {/* Dark background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a1a3a 0%, #051020 50%, #0d1830 100%)",
              }}
            />

            {/* Title + badge */}
            <div className="relative z-10 p-8 md:p-10 flex flex-row justify-between items-start gap-6">
              <div className="max-w-lg">
                <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-snug">
                  {slide.title}
                  <span style={{ color: "#00A8FF" }}>{slide.highlight}</span>
                </h3>
              </div>
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-white text-lg"
                style={{
                  background: "linear-gradient(135deg, #0050C8, #0080FF)",
                  boxShadow: "0 4px 20px rgba(0,80,200,0.5)",
                }}
              >
                {slide.number}
              </div>
            </div>

            {/* Image */}
            <div className="relative z-10 px-8 pb-8">
              <div
                className="w-full rounded-xl overflow-hidden transition-all duration-700"
                style={{
                  height: "260px",
                  border: "1px solid rgba(0,80,200,0.2)",
                }}
              >
                {slide.image}
              </div>
            </div>

            {/* ❌ Dots removed */}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 3: Job Listings ── */
function JobListings() {
  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-10 tracking-widest uppercase">
            Find Your Role
          </h2>
          <div className="flex flex-col gap-5">
            {careerMock.map((job, i) => (
              <div
                key={i}
                className="rounded-xl p-6 transition-all duration-300 hover:scale-[1.005]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(5,15,55,0.9) 0%, rgba(3,8,30,0.95) 100%)",
                  border: "1px solid rgba(0,60,180,0.3)",
                }}
              >
                {/* Title row */}
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {job.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                    {job.exp}
                  </span>
                  <span className="text-gray-600 text-xs">|</span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {job.location}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(0,60,180,0.15)",
                        border: "1px solid rgba(0,80,200,0.3)",
                        color: "#94A3B8",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {job.desc}
                </p>

                {/* Apply button */}
                <div className="flex justify-end">
                  <button
                    className="px-6 py-2 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
                    style={{
                      background: "linear-gradient(90deg, #0050FF, #0090FF)",
                      boxShadow: "0 2px 12px rgba(0,80,255,0.35)",
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 4: Work With Us Form ── */
function WorkWithUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted! We'll be in touch.");
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Glowing planet orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: "100%", height: "300px" }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "100%",
            height: "260px",
            background:
              "radial-gradient(ellipse at center bottom, rgba(0,120,255,0.5) 0%, rgba(0,60,180,0.2) 40%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            width: "min(900px,95vw)",
            height: "220px",
            borderRadius: "50%",
            border: "1.5px solid rgba(0,160,255,0.35)",
            boxShadow: "0 0 80px rgba(0,120,255,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            width: "min(500px,80vw)",
            height: "100px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(0,160,255,0.55) 0%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
      </div>

      {/* SCROLL DOWN label */}
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

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white text-center mb-12">
          Work With Us!
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "name", placeholder: "Enter Your Name", type: "text" },
              { name: "email", placeholder: "Enter You Mail", type: "email" },
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

          {/* Message */}
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

          {/* CV Upload row */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(0,120,255,0.3)",
            }}
          >
            <span className="text-gray-500 text-sm truncate flex-1 mr-3">
              {fileName || "Upload Your CV"}
            </span>
            <button
              type="button"
              onClick={() => fileRef.current.click()}
              className="px-5 py-1.5 rounded-lg text-white text-sm font-semibold flex-shrink-0 transition-all hover:opacity-90"
              style={{ background: "linear-gradient(90deg,#0050FF,#0090FF)" }}
            >
              Upload
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              className="hidden"
            />
          </div>

          {/* Submit */}
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

/* ── Main Careers Page ── */
export default function CareersPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <CareersHero />
      <WhyWorkHere />
      <JobListings />
      <WorkWithUs />
    </div>
  );
}
