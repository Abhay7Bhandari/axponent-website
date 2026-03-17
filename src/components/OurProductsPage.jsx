import FadeSection from "./FadeSection";

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
      title: "CTV & OEM inventory for high-impact, brand-safe placements",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8h2v5H7zM11 8h6" strokeWidth="1.5" />
          <path d="M11 11h4" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "In-app inventory across leading global applications",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 17h7M17 14v7" />
        </svg>
      ),
    },
    {
      title: "DSP & SSP integrations enabling scalable programmatic reach",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="6" height="10" rx="1" />
          <rect x="9" y="4" width="6" height="16" rx="1" />
          <rect x="16" y="9" width="6" height="8" rx="1" />
          <path d="M5 7V4M12 4V2M19 9V6" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      title:
        "DMP-driven targeting for advanced audience segmentation and precision delivery",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00A8FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          <circle cx="18" cy="7" r="3" />
          <path d="M20.5 13c1.5.5 2.5 1.8 2.5 3" />
          <circle cx="6" cy="7" r="3" />
          <path d="M3.5 13C2 13.5 1 14.8 1 16" />
        </svg>
      ),
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

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,50,160,0.2) 0%, rgba(5,10,40,0.8) 100%)",
                    border: "1px solid rgba(0,80,200,0.25)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,80,200,0.18)" }}
                  >
                    {card.icon}
                  </div>
                  <p className="text-white text-sm font-medium leading-snug">
                    {card.title}
                  </p>
                </div>
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
  const assets = [
    {
      label: "Gaming App",
      gradient:
        "linear-gradient(160deg, #1a3a1a 0%, #0d2010 50%, #05100a 100%)",
      accent: "#4ADE80",
      // Jungle / game scene
      content: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* Sky gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,#1a4a1a 0%,#0d2a0d 60%,#051005 100%)",
            }}
          />
          {/* Trees */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ marginBottom: `${i % 2 === 0 ? 0 : 8}px` }}
              >
                <div
                  style={{
                    width: `${18 + i * 4}px`,
                    height: `${40 + i * 8}px`,
                    background: "#1a4a1a",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    borderRadius: "2px",
                  }}
                />
                <div
                  style={{
                    width: "6px",
                    height: "14px",
                    background: "#2d1a0a",
                  }}
                />
              </div>
            ))}
          </div>
          {/* Character */}
          <div
            className="absolute"
            style={{
              bottom: "30%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#FF4444",
                border: "2px solid #FF6666",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "14px" }}>😠</span>
            </div>
          </div>
          {/* Score */}
          <div className="absolute top-3 left-0 right-0 flex justify-between px-3">
            <span
              style={{ color: "#fff", fontSize: "10px", fontWeight: "bold" }}
            >
              LVL 5
            </span>
            <span style={{ color: "#FFD700", fontSize: "10px" }}>⭐ 1240</span>
          </div>
        </div>
      ),
    },
    {
      label: "Entertainment",
      gradient: "linear-gradient(160deg, #1a0a2e 0%, #0d0618 100%)",
      accent: "#A78BFA",
      content: (
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #0a0515 0%, #1a0a30 40%, #2a1050 100%)",
            }}
          />
          {/* Spotlight */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "160px",
              background:
                "radial-gradient(ellipse at top, rgba(255,200,100,0.3) 0%, transparent 70%)",
            }}
          />
          {/* Person silhouette */}
          <div
            className="absolute"
            style={{
              bottom: "15%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "#3a2060",
                border: "2px solid #6040a0",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "40px",
                background: "#2a1a50",
                margin: "2px auto 0",
                borderRadius: "4px 4px 2px 2px",
              }}
            />
          </div>
          {/* Lights */}
          <div className="absolute top-4 flex gap-2 left-0 right-0 justify-center">
            {["#ff4466", "#ffaa00", "#4466ff"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: c,
                  boxShadow: `0 0 8px ${c}`,
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Content / News",
      gradient: "linear-gradient(160deg, #1a1a2e 0%, #0d0d1a 100%)",
      accent: "#60A5FA",
      content: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ background: "#f8f8f8", borderRadius: "18px" }}
        >
          {/* Header */}
          <div
            style={{
              background: "#1a3a8a",
              padding: "8px 10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              style={{ color: "white", fontSize: "9px", fontWeight: "bold" }}
            >
              📰 Business Rule
            </span>
          </div>
          {/* Article */}
          <div style={{ padding: "8px 10px" }}>
            <div
              style={{
                background: "#e0e0e0",
                height: "50px",
                borderRadius: "4px",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "18px" }}>📊</span>
            </div>
            <div
              style={{
                fontSize: "7px",
                fontWeight: "bold",
                color: "#111",
                marginBottom: "4px",
                lineHeight: 1.3,
              }}
            >
              10 Secret Tips for IELTS Listening Practice Test
            </div>
            {[80, 65, 90].map((w, i) => (
              <div
                key={i}
                style={{
                  height: "5px",
                  background: "#ddd",
                  borderRadius: "2px",
                  width: `${w}%`,
                  marginBottom: "3px",
                }}
              />
            ))}
            <div
              style={{
                marginTop: "6px",
                borderTop: "1px solid #eee",
                paddingTop: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "6px",
                  color: "#555",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                LATEST
              </div>
              {[75, 60].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: "4px",
                    background: "#e5e5e5",
                    borderRadius: "2px",
                    width: `${w}%`,
                    marginBottom: "2px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Analytics Dashboard",
      gradient: "linear-gradient(160deg, #1a1505 0%, #0d0f0a 100%)",
      accent: "#FBBF24",
      content: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ background: "#0f1117", borderRadius: "18px" }}
        >
          {/* Top bar */}
          <div
            style={{
              padding: "7px 10px",
              borderBottom: "1px solid #222",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#aaa", fontSize: "7px" }}>
              📊 Social Business Analytics
            </span>
          </div>
          {/* KPI row */}
          <div style={{ display: "flex", gap: "4px", padding: "6px 8px" }}>
            {[
              { label: "Impressions", val: "$1.2M", color: "#4ADE80" },
              { label: "Clicks", val: "$2.8", color: "#60A5FA" },
              { label: "Revenue", val: "700K", color: "#FBBF24" },
            ].map((k, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: "#1a1f2e",
                  borderRadius: "4px",
                  padding: "4px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: k.color,
                    fontSize: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {k.val}
                </div>
                <div style={{ color: "#666", fontSize: "5px" }}>{k.label}</div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div style={{ padding: "0 8px 6px" }}>
            <div
              style={{
                height: "50px",
                background: "#1a1f2e",
                borderRadius: "4px",
                padding: "6px",
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
              }}
            >
              {[30, 50, 35, 65, 45, 70, 55, 80, 60, 90].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: `rgba(96,165,250,${0.3 + i * 0.07})`,
                    borderRadius: "2px 2px 0 0",
                  }}
                />
              ))}
            </div>
          </div>
          {/* Bottom table */}
          <div style={{ padding: "0 8px" }}>
            {[
              ["Product A", "34%"],
              ["Product B", "28%"],
              ["Product C", "19%"],
            ].map(([name, pct], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2px 0",
                  borderBottom: "1px solid #1a1f2e",
                }}
              >
                <span style={{ color: "#888", fontSize: "6px" }}>{name}</span>
                <span style={{ color: "#60A5FA", fontSize: "6px" }}>{pct}</span>
              </div>
            ))}
          </div>
        </div>
      ),
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

          {/* 4 phone cards in a row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center">
            {assets.map((asset, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 w-full max-w-[180px]"
              >
                {/* Phone frame */}
                <div
                  className="relative w-full transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-1"
                  style={{
                    aspectRatio: "9/18",
                    borderRadius: "20px",
                    border: "2px solid rgba(255,255,255,0.1)",
                    boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)`,
                    overflow: "hidden",
                    background: asset.gradient,
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 z-10"
                    style={{
                      width: "40px",
                      height: "5px",
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: "3px",
                    }}
                  />
                  {asset.content}
                </div>
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
