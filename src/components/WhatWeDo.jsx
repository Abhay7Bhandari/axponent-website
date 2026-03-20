import FadeSection from "./FadeSection";
import perfImg from "../assets/images/home/what-we-do/performance-marketing.png";
import targetImg from "../assets/images/home/what-we-do/retargeting.png";
import brandImg from "../assets/images/home/what-we-do/branding.png";

const SERVICES = [
  {
    title: "Performance Marketing",
    desc: "Attract, engage, and convert your target audience with our customised performance marketing campaigns. Partner with us to take your brand to new heights.",
    img: perfImg,
  },
  {
    title: "Retargeting",
    desc: "Retargeting is a game-changer. We'll help you stay connected with interested prospects and boost your ROI with expert retargeting strategies.",
    img: targetImg,
  },
  {
    title: "Branding",
    desc: "A strong brand creates lasting connections with customers. Our branding experts help you build a brand that inspires loyalty and drives long-term growth.",
    img: brandImg,
  },
];

export default function WhatWeDo() {
  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-14">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="flex-1 min-h-[220px]">
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
