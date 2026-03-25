import FadeSection from "./FadeSection";

// Inventory / Global Media cards
import ctvOemImg from "../assets/images/products/inventory-cards/ctv-oem.png";
import inAppImg from "../assets/images/products/inventory-cards/in-app-inventory.png";
import dspSspImg from "../assets/images/products/inventory-cards/dsp-ssp.png";
import dmpImg from "../assets/images/products/inventory-cards/dmp-targeting.png";

// Phone screen images
import gamingImg from "../assets/images/products/phone-screens/gaming-app.png";
import entertainImg from "../assets/images/products/phone-screens/entertainment.png";
import newsImg from "../assets/images/products/phone-screens/content-news.png";
import analyticsImg from "../assets/images/products/phone-screens/analytics.png";

/* ── Section 1: Hero ── */
function OwnedAssetsHero() {
  return (
    <section className="relative min-h-[45vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-white mb-6 leading-tight">
          INVENTORIES & <span style={{ color: "#007BFF" }}>OWNED ASSETS</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Axponent combines premium global inventory access with a growing
          portfolio of owned and operated platforms — enabling stronger
          targeting, better optimization, and higher-performing campaigns.
        </p>
      </FadeSection>
    </section>
  );
}

/* ── Section 2: Global Media & Inventory Access ── */
function GlobalMediaAccess() {
  const cards = [
    {
      img: ctvOemImg,
      alt: "CTV & OEM inventory for high-impact, brand-safe placements",
    },
    {
      img: inAppImg,
      alt: "In-app inventory across leading global applications",
    },
    {
      img: dspSspImg,
      alt: "DSP & SSP integrations enabling scalable programmatic reach",
    },
    {
      img: dmpImg,
      alt: "DMP-driven targeting for advanced audience segmentation and precision delivery",
    },
  ];

  return (
    <FadeSection>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "#000000",
              border: "2px solid #393647",
            }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-3">
              Global Media & Inventory Access
            </h2>
            <p className="text-gray-400 text-sm text-center max-w-xl mx-auto mb-10">
              We provide access to diverse, high-performing inventory across
              mobile, web, and connected devices to help brands reach users at
              scale.
            </p>

            {/* 2×2 grid of PNG cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <img
                  key={i}
                  src={card.img}
                  alt={card.alt}
                  className="w-full rounded-xl object-cover transition-all duration-300 hover:scale-[1.02]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 3: Our Owned & Operated Assets ── */
function OwnedOperatedAssets() {
  const phones = [
    {
      img: gamingImg,
      alt: "Gaming App",
      label: "Gaming App",
      category: "GAMING (WORLDWIDE)",
      url: "https://play.google.com/store",
    },
    {
      img: entertainImg,
      alt: "Entertainment",
      label: "Entertainment",
      category: "ENTERTAINMENT (WORLDWIDE)",
      url: "https://play.google.com/store",
    },
    {
      img: newsImg,
      alt: "Content / News",
      label: "Content / News",
      category: "CONTENT & NEWS (WORLDWIDE)",
      url: "https://play.google.com/store",
    },
    {
      img: analyticsImg,
      alt: "Analytics Dashboard",
      label: "Analytics",
      category: "ANALYTICS (WORLDWIDE)",
      url: "https://axponent.com",
    },
  ];

  return (
    <FadeSection>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-4">
            Our Owned & Operated Assets
          </h2>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-14 leading-relaxed">
            Axponent connects premium publishers with high-quality global
            campaigns, offering transparent tracking, fast approvals, and
            dedicated support to drive consistent monetization and long-term
            growth.
          </p>

          <div className="flex flex-row justify-center gap-3 flex-wrap">
            {phones.map((phone, i) => (
              <div key={i} className="product-card flex-shrink-0">
                <div
                  className="relative rounded-[20px] overflow-hidden"
                  style={{
                    width: "252px",
                    height: "489px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src={phone.img}
                    alt={phone.alt}
                    className="w-full h-full object-cover transition-transform duration-500 product-card-img"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="product-overlay absolute inset-0 flex flex-col justify-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(4,8,21,0.97) 0%, rgba(4,8,21,0.55) 45%, transparent 100%)",
                      opacity: 0,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    {/* Slide-up info panel */}
                    <div
                      className="product-panel mx-3 mb-3 rounded-xl px-4 py-3"
                      style={{
                        background: "rgba(255,255,255,0.96)",
                        transform: "translateY(20px)",
                        opacity: 0,
                        transition: "transform 0.35s ease, opacity 0.35s ease",
                      }}
                    >
                      <p
                        className="text-gray-400 font-semibold leading-tight"
                        style={{ fontSize: "10px", letterSpacing: "0.05em" }}
                      >
                        {phone.category}
                      </p>
                      <div className="flex items-center justify-between mt-1 gap-2">
                        <p
                          className="text-gray-900 font-bold truncate"
                          style={{ fontSize: "13px" }}
                        >
                          {phone.label.toUpperCase()}
                        </p>
                        <button
                          onClick={() => window.open(phone.url, "_blank")}
                          className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                          style={{
                            width: "22px",
                            height: "22px",
                            background:
                              "linear-gradient(135deg, #0050FF, #0090FF)",
                            boxShadow: "0 2px 8px rgba(0,80,255,0.5)",
                          }}
                          aria-label={`Open ${phone.label}`}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .product-card:hover .product-overlay {
          opacity: 1 !important;
        }
        .product-card:hover .product-panel {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
        .product-card:hover .product-card-img {
          transform: scale(1.06);
        }
      `}</style>
    </FadeSection>
  );
}

/* ── Main Our Products Page ── */
export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <OwnedAssetsHero />
      <GlobalMediaAccess />
      <OwnedOperatedAssets />
    </div>
  );
}
