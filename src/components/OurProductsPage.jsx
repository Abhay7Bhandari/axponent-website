import FadeSection from "./FadeSection";
import ctvOemImg from "../assets/images/products/inventory-cards/ctv-oem.png";
import inAppImg from "../assets/images/products/inventory-cards/in-app-inventory.png";
import dspSspImg from "../assets/images/products/inventory-cards/dsp-ssp.png";
import dmpImg from "../assets/images/products/inventory-cards/dmp-targeting.png";
import gamingImg from "../assets/images/products/phone-screens/gaming-app.png";
import entertainImg from "../assets/images/products/phone-screens/entertainment.png";
import newsImg from "../assets/images/products/phone-screens/content-news.png";
import analyticsImg from "../assets/images/products/phone-screens/analytics.png";

function OwnedAssetsHero() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[45vh] flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1
          className="font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
        >
          INVENTORIES & <span style={{ color: "#007BFF" }}>OWNED ASSETS</span>
        </h1>
        <p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
        >
          Axponent combines premium global inventory access with a growing
          portfolio of owned and operated platforms — enabling stronger
          targeting, better optimization, and higher-performing campaigns.
        </p>
      </FadeSection>
    </section>
  );
}

function GlobalMediaAccess() {
  const cards = [
    { img: ctvOemImg, alt: "CTV & OEM inventory" },
    { img: inAppImg, alt: "In-app inventory" },
    { img: dspSspImg, alt: "DSP & SSP integrations" },
    { img: dmpImg, alt: "DMP-driven targeting" },
  ];
  return (
    <FadeSection>
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 md:p-12"
            style={{ background: "#000000", border: "2px solid #393647" }}
          >
            <h2
              className="font-display font-bold text-white text-center mb-3"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
            >
              Global Media & Inventory Access
            </h2>
            <p className="text-gray-400 text-sm text-center max-w-xl mx-auto mb-6 sm:mb-10">
              We provide access to diverse, high-performing inventory across
              mobile, web, and connected devices to help brands reach users at
              scale.
            </p>
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

// function OwnedOperatedAssets() {
//   const phones = [
//     {
//       img: gamingImg,
//       alt: "Gaming App",
//       label: "Gaming App",
//       category: "GAMING (WORLDWIDE)",
//       url: "https://play.google.com/store",
//     },
//     {
//       img: entertainImg,
//       alt: "Entertainment",
//       label: "Entertainment",
//       category: "ENTERTAINMENT (WORLDWIDE)",
//       url: "https://play.google.com/store",
//     },
//     {
//       img: newsImg,
//       alt: "Content / News",
//       label: "Content / News",
//       category: "CONTENT & NEWS (WORLDWIDE)",
//       url: "https://play.google.com/store",
//     },
//     {
//       img: analyticsImg,
//       alt: "Analytics Dashboard",
//       label: "Analytics",
//       category: "ANALYTICS (WORLDWIDE)",
//       url: "https://axponent.com",
//     },
//   ];

//   return (
//     <FadeSection>
//       <section className="py-12 sm:py-16 md:py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2
//             className="font-display font-bold text-white text-center mb-3 sm:mb-4"
//             style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
//           >
//             Our Owned & Operated Assets
//           </h2>
//           <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14 leading-relaxed">
//             Axponent connects premium publishers with high-quality global
//             campaigns, offering transparent tracking, fast approvals, and
//             dedicated support to drive consistent monetization and long-term
//             growth.
//           </p>

//           {/* Responsive: 2-col on mobile, 4-col on lg */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//             {phones.map((phone, i) => (
//               <div key={i} className="product-card w-full">
//                 <div
//                   className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden w-full"
//                   style={{
//                     aspectRatio: "252/489",
//                     boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
//                   }}
//                 >
//                   <img
//                     src={phone.img}
//                     alt={phone.alt}
//                     className="w-full h-full object-cover transition-transform duration-500 product-card-img"
//                   />
//                   <div
//                     className="product-overlay absolute inset-0 flex flex-col justify-end"
//                     style={{
//                       background:
//                         "linear-gradient(to top, rgba(4,8,21,0.97) 0%, rgba(4,8,21,0.55) 45%, transparent 100%)",
//                       opacity: 0,
//                       transition: "opacity 0.35s ease",
//                     }}
//                   >
//                     <div
//                       className="product-panel mx-2 mb-2 sm:mx-3 sm:mb-3 rounded-xl px-3 py-2 sm:px-4 sm:py-3"
//                       style={{
//                         background: "rgba(255,255,255,0.96)",
//                         transform: "translateY(20px)",
//                         opacity: 0,
//                         transition: "transform 0.35s ease, opacity 0.35s ease",
//                       }}
//                     >
//                       <p
//                         className="text-gray-400 font-semibold leading-tight"
//                         style={{ fontSize: "9px", letterSpacing: "0.05em" }}
//                       >
//                         {phone.category}
//                       </p>
//                       <div className="flex items-center justify-between mt-1 gap-1 sm:gap-2">
//                         <p
//                           className="text-gray-900 font-bold truncate"
//                           style={{ fontSize: "11px" }}
//                         >
//                           {phone.label.toUpperCase()}
//                         </p>
//                         <button
//                           onClick={() => window.open(phone.url, "_blank")}
//                           className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
//                           style={{
//                             width: "20px",
//                             height: "20px",
//                             background:
//                               "linear-gradient(135deg, #0050FF, #0090FF)",
//                             boxShadow: "0 2px 8px rgba(0,80,255,0.5)",
//                           }}
//                           aria-label={`Open ${phone.label}`}
//                         >
//                           <svg
//                             width="9"
//                             height="9"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="white"
//                             strokeWidth="3"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path d="M5 12h14M12 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style>{`
//         .product-card:hover .product-overlay { opacity: 1 !important; }
//         .product-card:hover .product-panel { transform: translateY(0) !important; opacity: 1 !important; }
//         .product-card:hover .product-card-img { transform: scale(1.06); }
//         @media (hover: none) {
//           .product-overlay { opacity: 1 !important; }
//           .product-panel { transform: translateY(0) !important; opacity: 1 !important; }
//         }
//       `}</style>
//     </FadeSection>
//   );
// }

function OwnedOperatedAssets() {
  const getStoreUrl = (androidUrl, iosUrl) => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(ua) && !isIOS;
    return isIOS || isMac ? iosUrl : androidUrl;
  };

  const phones = [
    {
      img: gamingImg,
      alt: "Gaming App",
      label: "GRUMBL",
      description: "Gaming-focused inventory and engaged user base.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.grumbl",
      iosUrl: "https://apps.apple.com/app/grumbl",
    },
    {
      img: entertainImg,
      alt: "Entertainment",
      label: "ENTERTAIN",
      description: "Premium entertainment content for global audiences.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.entertain",
      iosUrl: "https://apps.apple.com/app/entertain",
    },
    {
      img: newsImg,
      alt: "Content / News",
      label: "NEWSLY",
      description: "Content & news platform with high daily engagement.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.newsly",
      iosUrl: "https://apps.apple.com/app/newsly",
    },
    {
      img: analyticsImg,
      alt: "Analytics Dashboard",
      label: "AXLYTICS",
      description: "Real-time analytics and campaign performance tracking.",
      androidUrl: "https://play.google.com/store/apps/details?id=com.axlytics",
      iosUrl: "https://apps.apple.com/app/axlytics",
    },
  ];

  return (
    <FadeSection>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-3 sm:mb-4"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
            Our Owned & Operated Assets
          </h2>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14 leading-relaxed">
            Axponent connects premium publishers with high-quality global
            campaigns, offering transparent tracking, fast approvals, and
            dedicated support to drive consistent monetization and long-term
            growth.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {phones.map((phone, i) => (
              <div key={i} className="product-card w-full">
                <div
                  className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden w-full"
                  style={{
                    aspectRatio: "252/489",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src={phone.img}
                    alt={phone.alt}
                    className="w-full h-full object-cover transition-transform duration-500 product-card-img"
                  />

                  <div className="product-panel absolute left-0 right-0 bottom-0">
                    <div
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
                        padding: "32px 12px 10px 12px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        className="text-white leading-snug"
                        style={{ fontSize: "clamp(10px, 1.8vw, 13px)" }}
                      >
                        {phone.description}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        window.open(
                          getStoreUrl(phone.androidUrl, phone.iosUrl),
                          "_blank",
                        )
                      }
                      className="w-full flex items-center justify-center gap-2 font-bold text-white transition-all duration-200 hover:brightness-110"
                      style={{
                        background: "linear-gradient(90deg, #0055FF, #0099FF)",
                        padding: "10px 12px",
                        fontSize: "clamp(11px, 1.8vw, 14px)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {/* Store icon — Play Store or App Store based on device */}
                      {(() => {
                        const ua =
                          navigator.userAgent ||
                          navigator.vendor ||
                          window.opera;
                        const isIOS =
                          /iPad|iPhone|iPod/.test(ua) ||
                          (navigator.platform === "MacIntel" &&
                            navigator.maxTouchPoints > 1);
                        const isMac = /Macintosh|MacIntel/.test(ua) && !isIOS;
                        return isIOS || isMac ? (
                          // Apple logo
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 814 1000"
                            fill="white"
                          >
                            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.6-49 192.5-49 34.6.1 109.7 4.6 159.1 57zM549.8 163.3c24.4-29 41.5-69.6 41.5-110.1 0-5.6-.5-11.3-1.5-16.8-39.4 1.5-86.7 26.5-114.9 56.8-21.9 24.4-42.3 65.3-42.3 106.5 0 6.2 1 12.3 1.5 14.3 2.5.5 6.5 1 10.5 1 35.4 0 80.2-23.6 105.2-51.7z" />
                          </svg>
                        ) : (
                          // Play Store triangle icon
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <path d="M3 22V2l18 10L3 22z" />
                          </svg>
                        );
                      })()}
                      {phone.label}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .product-panel {
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .product-card:hover .product-panel {
          transform: translateY(0);
        }
        .product-card:hover .product-card-img {
          transform: scale(1.06);
        }
        @media (hover: none) {
          .product-panel {
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </FadeSection>
  );
}

export default function OurProductsPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <OwnedAssetsHero />
      <GlobalMediaAccess />
      <OwnedOperatedAssets />
    </div>
  );
}
