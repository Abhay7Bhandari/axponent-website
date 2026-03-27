import FadeSection from "./FadeSection";
import bybitImg from "../assets/images/case-study/bybit.png";
import sberImg from "../assets/images/case-study/sber.png";
import angeloneImg from "../assets/images/case-study/angelone.png";
import primeImg from "../assets/images/case-study/primevideo.png";
import mashreqImg from "../assets/images/case-study/mashreq.png";
import jeenyImg from "../assets/images/case-study/jeeny.png";

const CASES = [
  { img: bybitImg, label: "Bybit", category: "CRYPTO TRADING (WORLDWIDE)" },
  { img: sberImg, label: "Sber Megamarket", category: "E-COMMERCE (RUSSIA)" },
  { img: angeloneImg, label: "AngelOne", category: "FINTECH (INDIA)" },
  { img: primeImg, label: "Prime Video", category: "STREAMING (WORLDWIDE)" },
  { img: mashreqImg, label: "Mashreq", category: "BANKING (UAE)" },
  { img: jeenyImg, label: "Jeeny", category: "MOBILITY (KSA)" },
];

export default function CaseStudy() {
  return (
    <FadeSection>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display font-bold text-center text-white mb-8 sm:mb-12 md:mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Case Study
          </h2>

          {/* Responsive grid: 1 col mobile, 2 col sm, 3 col md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CASES.map((c, i) => (
              <div
                key={i}
                className="case-card overflow-hidden w-full"
                style={{
                  aspectRatio: "365 / 419",
                  borderRadius: "9px",
                  border: "1px solid transparent",
                  backgroundImage:
                    "linear-gradient(rgba(7,4,21,1),rgba(7,4,21,1)), linear-gradient(180deg,rgba(250,250,250,0.20) 0%,rgba(250,250,250,0.10) 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                {/* Image */}
                <img
                  src={c.img}
                  alt={c.label}
                  className="case-card-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "9px",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="case-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(4,8,21,0.97) 0%, rgba(4,8,21,0.55) 45%, transparent 100%)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    borderRadius: "9px",
                  }}
                >
                  {/* Slide-up info panel */}
                  <div
                    className="case-panel"
                    style={{
                      margin: "0 12px 12px",
                      borderRadius: "6px",
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.97)",
                      transform: "translateY(20px)",
                      opacity: 0,
                      transition: "transform 0.35s ease, opacity 0.35s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        color: "#6B7280",
                        fontWeight: 600,
                        marginBottom: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.category}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "clamp(13px,1.2vw,18px)",
                          fontWeight: 700,
                          color: "#111827",
                          lineHeight: 1.2,
                        }}
                      >
                        {c.label.toUpperCase()}
                      </p>
                      <button
                        style={{
                          flexShrink: 0,
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          border: "none",
                          background: "linear-gradient(135deg,#0050FF,#0090FF)",
                          boxShadow: "0 2px 10px rgba(0,80,255,0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "20px",
                          fontWeight: 300,
                          color: "white",
                          lineHeight: 1,
                        }}
                        aria-label={`View ${c.label}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .case-card:hover .case-overlay  { opacity: 1 !important; }
        .case-card:hover .case-panel    { transform: translateY(0) !important; opacity: 1 !important; }
        .case-card:hover .case-card-img { transform: scale(1.05); }

        /* Touch-friendly: show overlay on focus for mobile */
        @media (hover: none) {
          .case-overlay { opacity: 1 !important; }
          .case-panel   { transform: translateY(0) !important; opacity: 1 !important; }
        }
      `}</style>
    </FadeSection>
  );
}
