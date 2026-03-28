import FadeSection from "./FadeSection";
import creativeImg from "../assets/images/home/how-we-do/creative-performance.png";
import measureImg from "../assets/images/home/how-we-do/measurement-attribution.png";
import fraudImg from "../assets/images/home/how-we-do/fraud-prevention.png";
import strategyImg from "../assets/images/home/how-we-do/strategy-planning.png";
import mediaImg from "../assets/images/home/how-we-do/media-buying.png";

const CARDS = [
  { img: creativeImg, alt: "Creative & Performance Optimization" },
  { img: measureImg, alt: "Measurement & Attribution" },
  { img: fraudImg, alt: "Fraud Prevention & Quality Control" },
  { img: strategyImg, alt: "Strategy & Campaign Planning" },
  { img: mediaImg, alt: "Media Buying & User Acquisition" },
];

function HowCard({ img, alt }) {
  return (
    <div
      className="how-card group w-full overflow-hidden"
      style={{
        aspectRatio: "389 / 315",
        borderRadius: "12px",
        border: "1px solid transparent",
        backgroundImage:
          "linear-gradient(rgba(7,4,21,1),rgba(7,4,21,1)), linear-gradient(180deg,rgba(250,250,250,0.20) 0%,rgba(250,250,250,0.10) 100%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
        flexShrink: 0,
        transition: "box-shadow 0.35s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 0 0 1px rgba(59,130,246,0.45), 0 8px 48px rgba(0,60,200,0.3)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,0,0,0.5)")
      }
    >
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        style={{ display: "block", borderRadius: "12px" }}
      />
    </div>
  );
}

export default function HowWeDo() {
  return (
    <FadeSection>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display font-bold text-center text-white mb-8 sm:mb-12 md:mb-14"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            How We Do
          </h2>

          {/* Mobile: single column */}
          {/* Tablet: 2-col */}
          {/* Desktop: Row of 3, then Row of 2 centered */}

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-6">
            <HowCard img={CARDS[0].img} alt={CARDS[0].alt} />
            <HowCard img={CARDS[1].img} alt={CARDS[1].alt} />
            <HowCard img={CARDS[2].img} alt={CARDS[2].alt} />
          </div>

          {/* Row 2 — centered 2 cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full sm:w-auto lg:w-[66%]">
              <HowCard img={CARDS[3].img} alt={CARDS[3].alt} />
              <HowCard img={CARDS[4].img} alt={CARDS[4].alt} />
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
