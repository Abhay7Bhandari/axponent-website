import { useState, useRef } from "react";
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
  return (
    <FadeSection>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(0,80,200,0.25)" }}
          >
            {/* Background — globe/world meeting image simulation */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a1a3a 0%, #051020 50%, #0d1830 100%)",
              }}
            />

            {/* Globe overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                style={{
                  width: "85%",
                  height: "85%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse at 40% 60%, rgba(0,60,140,0.6) 0%, rgba(0,30,80,0.3) 50%, transparent 75%)",
                  border: "1px solid rgba(0,120,255,0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* World map lines */}
                <svg
                  viewBox="0 0 400 220"
                  className="absolute inset-0 w-full h-full opacity-30"
                >
                  {/* Continents outline simplified */}
                  <path
                    d="M60 80 Q80 60 110 70 Q130 65 140 80 Q150 95 135 105 Q115 115 95 108 Q70 100 60 80Z"
                    fill="#1a4a8a"
                    stroke="#00A8FF"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M155 60 Q175 50 200 55 Q220 58 230 70 Q235 85 225 95 Q210 105 190 100 Q170 95 158 82 Q150 72 155 60Z"
                    fill="#1a4a8a"
                    stroke="#00A8FF"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M240 65 Q265 55 285 62 Q300 68 305 80 Q308 92 298 100 Q282 110 262 105 Q245 98 238 84 Q232 73 240 65Z"
                    fill="#1a4a8a"
                    stroke="#00A8FF"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M170 115 Q185 108 200 112 Q212 116 215 128 Q217 140 208 148 Q196 155 184 150 Q172 144 168 132 Q164 120 170 115Z"
                    fill="#1a4a8a"
                    stroke="#00A8FF"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M95 120 Q110 113 122 118 Q132 123 133 135 Q133 147 122 152 Q110 157 100 151 Q89 144 87 132 Q85 121 95 120Z"
                    fill="#1a4a8a"
                    stroke="#00A8FF"
                    strokeWidth="0.5"
                  />
                  {/* Connection arcs */}
                  {[
                    ["95,90", "180,80"],
                    ["180,80", "285,72"],
                    ["285,72", "310,85"],
                    ["180,80", "195,130"],
                    ["95,90", "110,135"],
                  ].map(([start, end], i) => {
                    const [x1, y1] = start.split(",").map(Number);
                    const [x2, y2] = end.split(",").map(Number);
                    const mx = (x1 + x2) / 2,
                      my = Math.min(y1, y2) - 30;
                    return (
                      <path
                        key={i}
                        d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                        fill="none"
                        stroke="#00A8FF"
                        strokeWidth="0.8"
                        strokeDasharray="4 3"
                        opacity="0.6"
                      />
                    );
                  })}
                  {/* Dots at nodes */}
                  {[
                    [95, 90],
                    [180, 80],
                    [285, 72],
                    [310, 85],
                    [195, 130],
                    [110, 135],
                  ].map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="white"
                      opacity="0.8"
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* Table simulation */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(5,15,40,0.5)" }}
            />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="max-w-md">
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 leading-snug">
                  Exposure to global markets and{" "}
                  <span style={{ color: "#00A8FF" }}>
                    large-scale campaigns
                  </span>
                </h3>
              </div>
              {/* Number badge */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-white text-lg"
                style={{
                  background: "linear-gradient(135deg, #0050C8, #0080FF)",
                  boxShadow: "0 4px 20px rgba(0,80,200,0.5)",
                }}
              >
                01
              </div>
            </div>

            {/* Image row */}
            <div className="relative z-10 px-8 pb-8">
              <div
                className="w-full rounded-xl overflow-hidden"
                style={{
                  height: "200px",
                  background:
                    "linear-gradient(135deg, #0a1a3a 0%, #0d2040 100%)",
                  border: "1px solid rgba(0,80,200,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Meeting table illustration */}
                <svg viewBox="0 0 600 200" className="w-full h-full opacity-80">
                  <defs>
                    <radialGradient id="tableGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00A8FF" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#003080"
                        stopOpacity="0.1"
                      />
                    </radialGradient>
                  </defs>
                  {/* Table */}
                  <ellipse
                    cx="300"
                    cy="130"
                    rx="220"
                    ry="55"
                    fill="url(#tableGlow)"
                    stroke="#00A8FF"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  {/* World map on table */}
                  <ellipse
                    cx="300"
                    cy="120"
                    rx="190"
                    ry="45"
                    fill="rgba(0,60,140,0.4)"
                    stroke="#0080FF"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                  {/* Connection lines */}
                  {[
                    [180, 110],
                    [250, 105],
                    [320, 108],
                    [390, 112],
                    [450, 118],
                  ].map(([x, y], i, arr) => {
                    if (i === 0) return null;
                    const px = arr[i - 1][0],
                      py = arr[i - 1][1];
                    return (
                      <line
                        key={i}
                        x1={px}
                        y1={py}
                        x2={x}
                        y2={y}
                        stroke="#00A8FF"
                        strokeWidth="1"
                        strokeDasharray="6 3"
                        opacity="0.7"
                      />
                    );
                  })}
                  {[
                    [180, 110],
                    [250, 105],
                    [320, 108],
                    [390, 112],
                    [450, 118],
                  ].map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="white"
                      opacity="0.9"
                    />
                  ))}
                  {/* People silhouettes around table */}
                  {[
                    [120, 85],
                    [200, 70],
                    [300, 65],
                    [400, 70],
                    [480, 85],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle
                        cx={x}
                        cy={y - 12}
                        r="10"
                        fill="#1a3060"
                        stroke="#2a5090"
                        strokeWidth="1"
                      />
                      <rect
                        x={x - 10}
                        y={y - 2}
                        width="20"
                        height="22"
                        rx="4"
                        fill="#1a3060"
                        stroke="#2a5090"
                        strokeWidth="1"
                      />
                    </g>
                  ))}
                  {/* Laptops */}
                  {[
                    [170, 118],
                    [430, 122],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <rect
                        x={x - 18}
                        y={y - 8}
                        width="36"
                        height="22"
                        rx="2"
                        fill="#0a1840"
                        stroke="#0060C0"
                        strokeWidth="0.8"
                      />
                      <rect
                        x={x - 20}
                        y={y + 14}
                        width="40"
                        height="4"
                        rx="1"
                        fill="#0a1840"
                        stroke="#0060C0"
                        strokeWidth="0.8"
                      />
                    </g>
                  ))}
                  {/* Coffee cups */}
                  {[
                    [240, 128],
                    [360, 126],
                  ].map(([x, y], i) => (
                    <ellipse
                      key={i}
                      cx={x}
                      cy={y}
                      rx="8"
                      ry="5"
                      fill="#1a2050"
                      stroke="#0060C0"
                      strokeWidth="0.8"
                    />
                  ))}
                </svg>
              </div>
            </div>
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
