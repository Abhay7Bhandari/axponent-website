import { useState, useRef } from "react";
import FadeSection from "./FadeSection";
import careerMock from "../utils/careerMock.json";
import globalMarketsImg from "../assets/images/careers/global-markets.png";
import cultureImg from "../assets/images/careers/culture-ownership.png";
import platformsImg from "../assets/images/careers/leading-platforms.png";
import earthImg from "../assets/images/Earth.png";

function CareersHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-4 pt-20 sm:pt-24 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="stars" />
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ marginBottom: "clamp(60px,18vw,200px)" }}
      >
        <FadeSection>
          <h1
            className="font-display font-bold text-white leading-tight mb-4 sm:mb-5"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            GROW WITH <span style={{ color: "#007BFF" }}>AXPONENT</span>
          </h1>
          <p
            className="text-gray-400 max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
          >
            We're building a team of performance-driven thinkers who thrive in
            fast-paced, data-led environments.
          </p>
          <button
            className="px-8 sm:px-10 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #0050FF, #0090FF)",
              boxShadow: "0 4px 24px rgba(0,100,255,0.45)",
            }}
          >
            Apply Now
          </button>
        </FadeSection>
      </div>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ zIndex: 2 }}>
        <img src={earthImg} alt="" aria-hidden style={{ display: "block", width: "100%", objectFit: "cover", objectPosition: "top center" }} />
      </div>
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-20">
        <span className="text-gray-500 text-xs tracking-widest select-none" style={{ writingMode: "vertical-rl" }}>SCROLL DOWN</span>
        <div className="w-px h-16 bg-gray-700" />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

// function WhyWorkHere() {
//   const slides = [
//     { number: "01", title: "Exposure to global markets and ", highlight: "large-scale campaigns", img: globalMarketsImg, alt: "Exposure to global markets" },
//     { number: "02", title: "Culture of ownership, learning, ", highlight: "and accountability", img: cultureImg, alt: "Culture of ownership" },
//     { number: "03", title: "Opportunity to work with leading ", highlight: "platforms and partners", img: platformsImg, alt: "Platforms and partners" },
//   ];

//   return (
//     <section className="py-8 sm:py-10 px-0">
//       <div className="flex flex-col gap-4 sm:gap-6">
//         {slides.map((slide) => (
//           <FadeSection key={slide.number}>
//             <div
//               className="relative w-full overflow-hidden"
//               style={{
//                 background: "#000000",
//                 border: "1px solid rgba(0,80,200,0.2)",
//                 borderRadius: "16px",
//               }}
//             >
//               {/* Title + number — 2 lines */}
//               <div className="flex flex-row justify-between items-start gap-4 px-5 sm:px-10 pt-8 sm:pt-10 pb-4">
//                 <h3
//                   className="font-display font-bold text-white leading-snug"
//                   style={{
//                     fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
//                     maxWidth: "85%",
//                   }}
//                 >
//                   {slide.title}
//                   <span style={{ color: "#007BFF" }}>{slide.highlight}</span>
//                 </h3>
//                 <div
//                   className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-white"
//                   style={{
//                     background: "#007BFF",
//                     boxShadow: "0 4px 20px rgba(0,100,255,0.5)",
//                     fontSize: "13px",
//                     letterSpacing: "0.05em",
//                   }}
//                 >
//                   {slide.number}
//                 </div>
//               </div>

//               {/* Full screen image with curved edges */}
//               <div className="px-5 sm:px-10 pt-16 sm:pt-20 pb-6" style={{ height: "clamp(400px, 60vh, 700px)" }}>
//                 <img
//                   src={slide.img}
//                   alt={slide.alt}
//                   className="w-full h-full object-cover rounded-lg"
//                   style={{ borderRadius: "12px" }}
//                 />
//               </div>
//             </div>
//           </FadeSection>
//         ))}
//       </div>
//     </section>
//   );
// }

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
    <section className="w-full">
      <div className="flex flex-col">
        {slides.map((slide) => (
          <FadeSection key={slide.number}>
            {/* FULL SCREEN SECTION */}
            <div className="relative w-full h-screen flex flex-col justify-between bg-black border border-blue-900/20 rounded-none sm:rounded-xl overflow-hidden">

              {/* TOP CONTENT */}
              <div className="flex justify-between items-start px-5 sm:px-10 pt-6 sm:pt-8">
                <h3
                  className="font-display font-bold text-white leading-snug max-w-[85%]"
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  }}
                >
                  {slide.title}
                  <span className="text-blue-500">{slide.highlight}</span>
                </h3>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-white bg-blue-600 shadow-lg text-xs tracking-widest">
                  {slide.number}
                </div>
              </div>

              {/* IMAGE AREA (MAIN HERO PART) */}
              <div className="w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] px-5 sm:px-10 pb-6">
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </FadeSection>
        ))}
      </div>
    </section>
  );
}

function JobListings() {
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-6 sm:mb-10 tracking-widest uppercase"
            style={{ fontSize: "clamp(1.3rem, 3vw, 2.5rem)" }}
          >
            Find Your Role
          </h2>
          <div className="flex flex-col gap-3 sm:gap-4">
            {careerMock.map((job, i) => (
              <div
                key={i}
                className="rounded-xl p-4 sm:p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(5,15,55,0.95) 0%, rgba(3,8,30,0.98) 100%)",
                  border: "1px solid rgba(0,60,180,0.35)",
                }}
              >
                <h3 className="font-display font-bold text-white text-sm sm:text-base mb-2">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                    {job.exp}
                  </span>
                  <span className="text-gray-600 text-xs">|</span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {job.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {job.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 sm:px-3 py-1 rounded-full" style={{ background: "rgba(0,50,160,0.15)", border: "1px solid rgba(0,80,200,0.3)", color: "#94A3B8" }}>{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{job.desc}</p>
                <div className="flex justify-end">
                  <button className="px-4 sm:px-6 py-2 rounded-lg text-white text-xs sm:text-sm font-semibold transition-all hover:opacity-90 hover:scale-105" style={{ background: "linear-gradient(90deg, #0050FF, #0090FF)", boxShadow: "0 2px 12px rgba(0,80,255,0.35)" }}>
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

function WorkWithUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => { if (e.target.files[0]) setFileName(e.target.files[0].name); };
  const handleSubmit = (e) => { e.preventDefault(); alert("Application submitted! We'll be in touch."); };

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "0" }}>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ zIndex: 0 }}>
        <img src={earthImg} alt="" aria-hidden style={{ display: "block", width: "100%", objectFit: "cover", objectPosition: "top center" }} />
      </div>
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-20">
      </div>
      <div className="relative px-4 pb-28 sm:pb-36" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto" style={{ marginBottom: "50px" }}>
          <h2 className="font-display font-bold text-white text-center mb-8 sm:mb-10" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Work With Us!
          </h2>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "name", placeholder: "Enter Your Name", type: "text" },
                { name: "email", placeholder: "Enter Your Mail", type: "email" },
              ].map((f) => (
                <input
                  key={f.name} name={f.name} type={f.type} placeholder={f.placeholder}
                  value={form[f.name]} onChange={handleChange}
                  className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,120,255,0.35)", backdropFilter: "blur(8px)" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,180,255,0.7)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,120,255,0.35)")}
                />
              ))}
            </div>
            <textarea
              name="message" placeholder="Your Message..." rows={5} value={form.message} onChange={handleChange}
              className="px-4 py-3 rounded-lg text-sm text-white outline-none placeholder-gray-500 resize-none transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,120,255,0.35)", backdropFilter: "blur(8px)" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(0,180,255,0.7)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(0,120,255,0.35)")}
            />
            <div className="flex items-center justify-between px-4 py-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,120,255,0.35)", backdropFilter: "blur(8px)" }}>
              <span className="text-gray-500 text-sm truncate flex-1 mr-3">{fileName || "Upload Your CV"}</span>
              <button type="button" onClick={() => fileRef.current.click()} className="px-4 sm:px-5 py-1.5 rounded-lg text-white text-sm font-semibold flex-shrink-0 transition-all hover:opacity-90 whitespace-nowrap" style={{ background: "linear-gradient(90deg, #0050FF, #0090FF)" }}>
                Upload
              </button>
              <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="hidden" />
            </div>
            <button onClick={handleSubmit} className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(90deg, #0070FF, #00C8FF)", boxShadow: "0 4px 32px rgba(0,150,255,0.5)" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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