import FadeSection from "./FadeSection";

// ─────────────────────────────────────────────
//  IMAGE IMPORTS
//  File locations inside your project:
//
//  src/assets/images/products/
//    ├── inventory-cards/
//    │   ├── ctv-oem.png               ← card_3__3_.png
//    │   ├── in-app-inventory.png      ← card_4__3_.png
//    │   ├── dsp-ssp.png               ← card_5__2_.png
//    │   └── dmp-targeting.png         ← card_6.png
//    └── phone-screens/
//        ├── gaming-app.png            ← Component_2.png
//        ├── entertainment.png         ← Rectangle_5619.png
//        ├── content-news.png          ← Rectangle_5618.png
//        └── analytics.png            ← Group_1000001176.png
// ─────────────────────────────────────────────

// Inventory / Global Media cards
import ctvOemImg        from "../assets/images/products/inventory-cards/ctv-oem.png";
import inAppImg         from "../assets/images/products/inventory-cards/in-app-inventory.png";
import dspSspImg        from "../assets/images/products/inventory-cards/dsp-ssp.png";
import dmpImg           from "../assets/images/products/inventory-cards/dmp-targeting.png";

// Phone screen images
import gamingImg        from "../assets/images/products/phone-screens/gaming-app.png";
import entertainImg     from "../assets/images/products/phone-screens/entertainment.png";
import newsImg          from "../assets/images/products/phone-screens/content-news.png";
import analyticsImg     from "../assets/images/products/phone-screens/analytics.png";

/* ── Section 1: Hero ── */
function OwnedAssetsHero() {
  return (
    <section className="relative min-h-[45vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-white mb-6 leading-tight">
          INVENTORIES & <span style={{ color: "#00A8FF" }}>OWNED ASSETS</span>
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
              background: "rgba(8,15,45,0.7)",
              border: "1px solid rgba(0,80,200,0.2)",
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
      category: "Gaming-focused inventory and engaged user base",
      url: "https://play.google.com/store",
    },
    {
      img: entertainImg,
      alt: "Entertainment",
      label: "Entertainment",
      category: "Premium entertainment content for global audiences.",
      url: "https://play.google.com/store",
    },
    {
      img: newsImg,
      alt: "Content / News",
      label: "Content / News",
      category: "Content & news platform with high daily engagement.",
      url: "https://play.google.com/store",
    },
    {
      img: analyticsImg,
      alt: "Analytics Dashboard",
      label: "Analytics",
      category: "Real-time analytics and campaign performance tracking.",
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
              <div
                key={i}
                className="product-card flex-shrink-0"
              >
                <div
                  className="relative rounded-[20px] overflow-hidden"
                  style={{
                    width: "252px",
                    height: "489px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* App screenshot */}
                  <img
                    src={phone.img}
                    alt={phone.alt}
                    className="w-full h-full object-cover transition-transform duration-500 product-card-img"
                  />

                  {/* Hover overlay — dark bg only, no padding bias */}
                  <div
                    className="product-hover-overlay absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 100%)",
                      opacity: 0,
                      transition: "opacity 0.35s ease",
                    }}
                  />

                  {/* Description — absolutely centered in the card */}
                  <p
                    className="product-desc absolute left-0 right-0 text-white text-center leading-snug px-5"
                    style={{
                      top: "50%",
                      transform: "translateY(calc(-50% + 10px))",
                      fontSize: "13px",
                      opacity: 0,
                      transition: "transform 0.35s ease, opacity 0.35s ease",
                    }}
                  >
                    {phone.category}
                  </p>

                  {/* Label button at bottom — shown only on hover */}
                  <button
                    onClick={() => window.open(phone.url, "_blank")}
                    className="product-label absolute bottom-0 left-0 right-0 flex items-center justify-center font-bold text-white transition-all duration-200 hover:brightness-110"
                    style={{
                      background: "linear-gradient(90deg, #0055FF, #0099FF)",
                      padding: "14px",
                      fontSize: "16px",
                      letterSpacing: "0.08em",
                      opacity: 0,
                      transform: "translateY(100%)",
                      transition: "transform 0.35s ease, opacity 0.35s ease",
                    }}
                  >
                    {phone.label.toUpperCase()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .product-card:hover .product-hover-overlay {
          opacity: 1 !important;
        }
        .product-card:hover .product-desc {
          transform: translateY(-50%) !important;
          opacity: 1 !important;
        }
        .product-card:hover .product-label {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .product-card:hover .product-card-img {
          transform: scale(1.06);
        }
        @media (hover: none) {
          .product-hover-overlay { opacity: 1 !important; }
          .product-desc { transform: translateY(-50%) !important; opacity: 1 !important; }
          .product-label { opacity: 1 !important; transform: translateY(0) !important; }
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