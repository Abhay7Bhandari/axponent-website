import FadeSection from "./FadeSection";
import perfImg from "../assets/images/home/what-we-do/performance-marketing.png";
import targetImg from "../assets/images/home/what-we-do/retargeting.png";
import brandImg from "../assets/images/home/what-we-do/branding.png";

const SERVICES = [
  { title: "Performance Marketing", img: perfImg },
  { title: "Retargeting", img: targetImg },
  { title: "Branding", img: brandImg },
];

export default function WhatWeDo() {
  return (
    <FadeSection>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display font-bold text-center text-white mb-8 sm:mb-12 md:mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background:
                    "linear-gradient(160deg, #0d1a3a 0%, #070d20 100%)",
                  border: "1px solid rgba(0,80,200,0.25)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="w-full"
                  style={{ minHeight: "clamp(180px, 22vw, 280px)" }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
