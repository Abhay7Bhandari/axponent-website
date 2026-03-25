import React, { useState, useEffect, useRef } from "react";
import FadeSection from "./FadeSection";

// "What We Deliver" cards
import cpaCplImg from "../assets/images/web/deliver-cards/cpa-cpl-cps.png";
import conversionImg from "../assets/images/web/deliver-cards/conversion-optimized.png";
import scalableImg from "../assets/images/web/deliver-cards/scalable-mobile-web.png";
import incrementalImg from "../assets/images/web/deliver-cards/incremental-user-growth.png";
import fullFunnelImg from "../assets/images/web/deliver-cards/full-funnel-acquisition.png";
import verticalImg from "../assets/images/web/deliver-cards/vertical-expertise.png";

// Brand ticker logos
import webLogo1 from "../assets/images/clients/Web page Logo/Agoda.png";
import webLogo2 from "../assets/images/clients/Web page Logo/AliExpress.png";
import webLogo3 from "../assets/images/clients/Web page Logo/HboMax.png";
import webLogo4 from "../assets/images/clients/Web page Logo/Hostinger.png";
import webLogo5 from "../assets/images/clients/Web page Logo/Klook.png";
import webLogo6 from "../assets/images/clients/Web page Logo/LycaMobile.png";
import webLogo7 from "../assets/images/clients/Web page Logo/Malaysia.png";
import webLogo8 from "../assets/images/clients/Web page Logo/Noton.png";
import webLogo9 from "../assets/images/clients/Web page Logo/Shopify.png";
import webLog10 from "../assets/images/clients/Web page Logo/Surfshank.png";

// Traffic Channels icons
import Contextual from "../assets/images/web/Traffic-Channels/Contextual.svg";
import Contextualllintent from "../assets/images/web/Traffic-Channels/Contextualllintent.svg";
import DirectMedia from "../assets/images/web/Traffic-Channels/DirectMedia.svg";
import DirecttMediallintent from "../assets/images/web/Traffic-Channels/DirecttMediallintent.svg";
import EmailPush from "../assets/images/web/Traffic-Channels/EmailPush.svg";
import EmailPushllintent from "../assets/images/web/Traffic-Channels/EmailPushllintent.svg";
import Google from "../assets/images/web/Traffic-Channels/Google.svg";
import Googlellintent from "../assets/images/web/Traffic-Channels/Googlellintent.svg";
import Native from "../assets/images/web/Traffic-Channels/Native.svg";
import PerformacePublisher from "../assets/images/web/Traffic-Channels/PerformacePublisher.svg";

const WEB_LOGOS = [
  { name: "Agoda", src: webLogo1 },
  { name: "AliExpress", src: webLogo2 },
  { name: "HBO Max", src: webLogo3 },
  { name: "Hostinger", src: webLogo4 },
  { name: "Klook", src: webLogo5 },
  { name: "Lycamobile", src: webLogo6 },
  { name: "Malaysia Airlines", src: webLogo7 },
  { name: "Noton", src: webLogo8 },
  { name: "Shopify", src: webLogo9 },
  { name: "Surfshark", src: webLog10 },
];
const WEB_TICKER = [...WEB_LOGOS, ...WEB_LOGOS];

import categoriesImg from "../assets/images/web/categories.png";

/* ── Section 1: Hero ── */
function WebHero() {
  return (
    <section className="relative min-h-[52vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1 className="font-display font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-white mb-2 leading-tight">
          PERFORMANCE WEB
        </h1>
        <h1
          className="font-display font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl mb-6 leading-tight"
          style={{ color: "#00A8FF" }}
        >
          ACQUISITION AT GLOBAL SCALE
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Axponent drives scalable customer acquisition through high-intent
          traffic across a curated global network of premium publishers and
          direct partnerships — powered by advanced media buying, exclusive
          supply, and real-time optimization for predictable, ROI-driven growth.
        </p>
      </FadeSection>
    </section>
  );
}

/* ── Section 2: What We Deliver ── */
function WhatWeDeliver() {
  const deliverCards = [
    { img: cpaCplImg, alt: "CPA, CPL & CPS-Based Customer Acquisition" },
    {
      img: conversionImg,
      alt: "Conversion-Optimized Web Traffic Built for Performance",
    },
    {
      img: scalableImg,
      alt: "Scalable Mobile Web & Desktop Campaign Execution",
    },
    {
      img: incrementalImg,
      alt: "Incremental User Growth Through Premium Global Publishers",
    },
    {
      img: fullFunnelImg,
      alt: "Full-Funnel Acquisition & Retargeting Strategies",
    },
    {
      img: verticalImg,
      alt: "Vertical Expertise Across Fintech, Gaming, Ecommerce & Lead Generation",
    },
  ];

  return (
    <FadeSection>
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(8,15,50,0.7)",
              border: "1px solid rgba(0,80,200,0.2)",
            }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center mb-10">
              What We Deliver
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverCards.map((card, i) => (
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

/* ── Section 3: Brand Ticker ── */
function BrandTicker() {
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden">
      <div
        className="flex items-center w-max"
        style={{ animation: "ticker 30s linear infinite" }}
      >
        {WEB_TICKER.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={i === 0 ? logo.name : ""}
            aria-hidden={i !== 0}
            style={{
              height: "32px",
              width: "auto",
              objectFit: "contain",
              flexShrink: 0,
              marginLeft: "60px",
              marginRight: "60px",
              opacity: 0.85,
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Section 4: Diverse Needs ── */
function DiverseNeeds() {
  return (
    <FadeSection>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12 leading-snug">
            Meeting Diverse Publisher
            <br />
            Needs with Precision
          </h2>
          <img
            src={categoriesImg}
            alt="Categories"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 5: Traffic Channels ── */
function TrafficChannels() {
  const nodes = [
    {
      label: "Performance Publisher &\nComparison Networks",
      iconActive: PerformacePublisher,
      iconInactive: PerformacePublisher,
    },
    {
      label: "Native, Display &\nProgrammatic Advertising",
      iconActive: Native,
      iconInactive: Native,
    },
    {
      label: "Email & Push High-Intent\nWeb Traffic",
      iconActive: EmailPush,
      iconInactive: EmailPushllintent,
    },
    {
      label: "Direct Media Buying &\nExclusive Inventory Access",
      iconActive: DirectMedia,
      iconInactive: DirecttMediallintent,
    },
    {
      label: "Contextual & Intent-Based\nAudience Targeting",
      iconActive: Contextual,
      iconInactive: Contextualllintent,
    },
    { label: "Google", iconActive: Google, iconInactive: Googlellintent },
  ];

  const n = nodes.length;
  const RADIUS = 200;
  const DURATION = 12000;

  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [dotAngle, setDotAngle] = useState(90);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const pauseAngleRef = useRef(90);

  // Node angles: evenly spaced, top = 90°, going clockwise
  const nodeAngles = nodes.map((_, i) => 90 + (i / n) * 360);

  // Determine which index is "highlighted" (hovered takes priority over active)
  const highlightIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  useEffect(() => {
    if (paused) return;
    const animate = (ts) => {
      if (!startRef.current)
        startRef.current =
          ts - (((pauseAngleRef.current - 90 + 3600) % 360) / 360) * DURATION;
      const elapsed = ts - startRef.current;
      const angle = 90 + ((elapsed % DURATION) / DURATION) * 360;
      setDotAngle(angle);
      pauseAngleRef.current = angle;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  const snapToNode = (i) => {
    setPaused(true);
    setActiveIdx(i);
    pauseAngleRef.current = nodeAngles[i];
    setDotAngle(nodeAngles[i]);
    startRef.current = null;
    setTimeout(() => {
      setPaused(false);
      startRef.current = null;
    }, 2000);
  };

  const handleNodeClick = (i) => snapToNode(i);

  const handleNodeEnter = (i) => {
    setHoveredIdx(i);
    snapToNode(i);
  };

  const handleNodeLeave = () => {
    setHoveredIdx(null);
  };

  const dotRad = (dotAngle * Math.PI) / 180;
  const dotX = Math.cos(dotRad) * RADIUS;
  const dotY = -Math.sin(dotRad) * RADIUS;

  return (
    <FadeSection>
      <style>{`
        @keyframes subtle-glow {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.6; }
        }

        .tc-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 120px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.25s;
        }
        .tc-node:hover { transform: translate(-50%, -50%) scale(1.08) !important; }

        .tc-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
          padding: 6px;
        }
        .tc-icon-wrap.active {
          background: rgba(255, 255, 255, 0.15);
          border: 1.5px solid rgba(255, 255, 255, 0.75);
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.3), 0 0 32px rgba(100, 180, 255, 0.2);
        }
        .tc-icon-wrap.inactive {
          background: transparent;
          border: 1px solid transparent;
          box-shadow: none;
        }

        .tc-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 0.3s, filter 0.3s;
        }
        .tc-icon-img.active {
          opacity: 1;
          filter: brightness(1.3) drop-shadow(0 0 6px rgba(255,255,255,0.5));
        }
        .tc-icon-img.inactive {
          opacity: 0.4;
          filter: grayscale(0.3) brightness(0.7);
        }

        .tc-label {
          font-size: 11px;
          font-weight: 400;
          line-height: 1.35;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9);
          transition: color 0.3s, font-weight 0.1s;
          white-space: pre-line;
        }
        .tc-label.active {
          color: #fff;
          font-weight: 700;
        }
        .tc-label.inactive {
          color: rgba(148, 163, 184, 0.6);
        }

        /* White dot on ring */
        .tc-orbit-dot {
          position: absolute;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.85);
          z-index: 8;
          transition: left 0.05s, top 0.05s;
        }
      `}</style>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-16">
            Traffic Channels
          </h2>

          {/* Stage */}
          <div
            className="relative mx-auto"
            style={{ width: 560, height: 560, maxWidth: "92vw" }}
          >
            {/* Outer faint halo ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: RADIUS * 2 + 80,
                height: RADIUS * 2 + 80,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.05)",
                transform: "translate(-50%,-50%)",
                animation: "orbit-pulse 5s ease-in-out infinite",
              }}
            />

            {/* Main orbit ring — bright white, Image 2 style */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: RADIUS * 2,
                height: RADIUS * 2,
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.55)",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* ── CENTER: small dim blue glow (Image 2 style, NO big sphere) ── */}
            {/* Outer diffuse glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 110,
                height: 110,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(30,100,220,0.45) 0%, rgba(0,60,180,0.2) 50%, transparent 80%)",
                animation: "subtle-glow 4s ease-in-out infinite",
                zIndex: 4,
              }}
            />
            {/* Tiny bright centre dot */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(140,210,255,0.9) 0%, rgba(40,120,255,0.6) 60%, transparent 100%)",
                zIndex: 6,
              }}
            />

            {/* Moving white dot on orbit */}
            <div
              className="tc-orbit-dot"
              style={{
                left: `calc(50% + ${dotX}px)`,
                top: `calc(50% + ${dotY}px)`,
                width: 11,
                height: 11,
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* Nodes */}
            {nodes.map((node, i) => {
              const isActive = i === highlightIdx;
              const rad = (nodeAngles[i] * Math.PI) / 180;
              const labelR = RADIUS + 74;
              const lx = Math.cos(rad) * labelR;
              const ly = -Math.sin(rad) * labelR;

              return (
                <div
                  key={i}
                  className="tc-node"
                  style={{
                    left: `calc(50% + ${lx}px)`,
                    top: `calc(50% + ${ly}px)`,
                    transform: "translate(-50%,-50%)",
                    zIndex: 7,
                  }}
                  onClick={() => handleNodeClick(i)}
                  onMouseEnter={() => handleNodeEnter(i)}
                  onMouseLeave={handleNodeLeave}
                >
                  <div
                    className={`tc-icon-wrap ${isActive ? "active" : "inactive"}`}
                  >
                    <img
                      src={isActive ? node.iconActive : node.iconInactive}
                      alt={node.label}
                      className={`tc-icon-img ${isActive ? "active" : "inactive"}`}
                    />
                  </div>
                  <span
                    className={`tc-label ${isActive ? "active" : "inactive"}`}
                  >
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Main Web Page ── */
export default function WebPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <WebHero />
      <WhatWeDeliver />
      <BrandTicker />
      <DiverseNeeds />
      <TrafficChannels />
    </div>
  );
}
