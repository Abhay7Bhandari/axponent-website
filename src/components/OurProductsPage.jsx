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
    { img: gamingImg, alt: "Gaming App", label: "Gaming App" },
    { img: entertainImg, alt: "Entertainment", label: "Entertainment" },
    { img: newsImg, alt: "Content / News", label: "Content / News" },
    {
      img: analyticsImg,
      alt: "Analytics Dashboard",
      label: "Analytics Dashboard",
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

          {/* 4 phone screenshots in a row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
            {phones.map((phone, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 w-full max-w-[180px]"
              >
                <img
                  src={phone.img}
                  alt={phone.alt}
                  className="w-full rounded-[20px] object-cover transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-1"
                  style={{
                    aspectRatio: "9/18",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
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
