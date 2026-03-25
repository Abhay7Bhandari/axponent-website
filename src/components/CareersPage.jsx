import { useState, useRef } from "react";
import FadeSection from "./FadeSection";
import careerMock from "../utils/careerMock.json";
import globalMarketsImg from "../assets/images/careers/global-markets.png";
import cultureImg from "../assets/images/careers/culture-ownership.png";
import platformsImg from "../assets/images/careers/leading-platforms.png";

/* ── Section 1: Hero ── */
function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-0 overflow-hidden">
      <div className="stars" />

      {/* Content */}
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-white mb-5 leading-tight">
          GROW WITH <span style={{ color: "#007BFF" }}>AXPONENT</span>
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
  const slides = [
    {
      number: "01",
      title: "Exposure to global markets and ",
      highlight: "large-scale campaigns",
      img: globalMarketsImg,
      alt: "Exposure to global markets",
    },
    {
      number: "02",
      title: "Culture of ownership, learning, ",
      highlight: "and accountability",
      img: cultureImg,
      alt: "Culture of ownership",
    },
    {
      number: "03",
      title: "Opportunity to work with leading ",
      highlight: "platforms and partners",
      img: platformsImg,
      alt: "Platforms and partners",
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {slides.map((slide) => (
          <FadeSection key={slide.number}>
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
                  className="w-full rounded-xl overflow-hidden"
                  style={{
                    height: "260px",
                    border: "1px solid rgba(0,80,200,0.2)",
                  }}
                >
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeSection>
        ))}
      </div>
    </section>
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