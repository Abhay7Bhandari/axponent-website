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

// Traffic Channels icons (using emojis for simplicity)
import Contextual from "../assets/images/web/Traffic-Channels/Contextual.svg";
import Contextualllintent from "../assets/images/web/Traffic-Channels/Contextualllintent.svg";

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

// Categories grid
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
            alt="Categories — Finance, E-commerce, Travel, Insurance, Education, Home Improvement"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </FadeSection>
  );
}

/* ── Section 5: Traffic Channels — Orbit with active dot ── */
function TrafficChannels() {
  const nodes = [
    { label: "Performance Publisher & Comparison Networks", icon: "👥" },
    { label: "Native, Display & Programmatic Advertising", icon: "📺" },
    { label: "Email & Push High-Intent Web Traffic", icon: "📧" },
    { label: "Direct Media Buying & Exclusive Inventory Access", icon: "🛒" },
    { label: "Contextual & Intent-Based Audience Targeting", icon: "🎯" },
    { label: "Google", icon: "🔍" },
  ];

  const n = nodes.length;
  const RADIUS = 200; // px — orbit radius
  const DURATION = 12000; // ms per full rotation

  const [activeIdx, setActiveIdx] = useState(0);
  const [dotAngle, setDotAngle] = useState(90); // start at top (90deg = Performance Publisher)
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const pauseAngleRef = useRef(90);

  // Node angles: evenly spaced, starting at 90deg (top)
  const nodeAngles = nodes.map((_, i) => 90 - (i / n) * 360);

  useEffect(() => {
    if (paused) return;
    const animate = (ts) => {
      if (!startRef.current)
        startRef.current = ts - (pauseAngleRef.current / 360) * DURATION;
      const elapsed = ts - startRef.current;
      const angle = 90 - ((elapsed % DURATION) / DURATION) * 360;
      setDotAngle(angle);
      pauseAngleRef.current = angle;

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  const handleNodeClick = (i) => {
    setPaused(true);
    setActiveIdx(i);
    pauseAngleRef.current = nodeAngles[i];
    setDotAngle(nodeAngles[i]);
    startRef.current = null;
    // Resume after 2s
    setTimeout(() => {
      setPaused(false);
      startRef.current = null;
    }, 2000);
  };

  // Dot position on orbit
  const dotRad = (dotAngle * Math.PI) / 180;
  const dotX = Math.cos(dotRad) * RADIUS;
  const dotY = -Math.sin(dotRad) * RADIUS;

  return (
    <FadeSection>
      <style>{`
        @keyframes glow-orb {
          0%, 100% { box-shadow: 0 0 60px 20px rgba(0,140,255,0.5), 0 0 120px 40px rgba(0,80,200,0.25); }
          50%       { box-shadow: 0 0 80px 30px rgba(0,180,255,0.7), 0 0 160px 60px rgba(0,100,255,0.35); }
        }
        @keyframes pulse-ring {
          0%,100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.5; }
          50%      { transform: translate(-50%,-50%) scale(1.12); opacity: 0.15; }
        }
        @keyframes pulse-ring2 {
          0%,100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.3; }
          50%      { transform: translate(-50%,-50%) scale(1.2);  opacity: 0.08; }
        }
        .tc-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 110px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.25s;
        }
        .tc-node:hover { transform: translate(-50%,-50%) scale(1.1) !important; }
        .tc-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 21px;
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .tc-icon.active {
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.7);
          box-shadow: 0 0 18px rgba(255,255,255,0.35);
        }
        .tc-icon.inactive {
          background: rgba(0,60,180,0.25);
          border: 1px solid rgba(0,140,255,0.3);
          box-shadow: 0 2px 12px rgba(0,100,255,0.2);
        }
        .tc-label {
          font-size: 11px;
          font-weight: 500;
          line-height: 1.3;
          text-shadow: 0 1px 6px rgba(0,0,0,0.9);
          transition: color 0.3s;
        }
        .tc-label.active  { color: #ffffff; }
        .tc-label.inactive{ color: rgba(148,163,184,0.7); }
      `}</style>

      <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-4">
        Traffic Channels
      </h2>
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Active label display */}
          {/* <p className="text-center text-brand-blue text-sm font-medium mb-12 tracking-wide min-h-[20px]">
            {nodes[activeIdx].label}
          </p> */}

          {/* Stage */}
          <div
            className="relative mx-auto"
            style={{ width: 500, height: 500, maxWidth: "90vw" }}
          >
            {/* Pulse rings */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 420,
                height: 420,
                borderRadius: "50%",
                border: "1px solid rgba(0,140,255,0.2)",
                animation: "pulse-ring2 4s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 340,
                height: 340,
                borderRadius: "50%",
                border: "1.5px solid rgba(0,160,255,0.3)",
                animation: "pulse-ring 3.5s ease-in-out infinite",
              }}
            />

            {/* Orbit track */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: RADIUS * 2,
                height: RADIUS * 2,
                borderRadius: "50%",
                border: "1px solid rgba(0,160,255,0.18)",
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* Central orb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 90,
                height: 90,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(80,180,255,0.95) 0%, rgba(0,100,255,0.7) 40%, rgba(0,40,160,0.4) 70%, transparent 100%)",
                animation: "glow-orb 3s ease-in-out infinite",
                zIndex: 5,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 26,
                height: 26,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,#fff 0%,rgba(160,220,255,0.8) 60%,transparent 100%)",
                zIndex: 6,
              }}
            />

            {/* Moving white dot on orbit */}
            <div
              style={{
                position: "absolute",
                left: `calc(50% + ${dotX}px)`,
                top: `calc(50% + ${dotY}px)`,
                transform: "translate(-50%,-50%)",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: "0 0 10px 3px rgba(255,255,255,0.8)",
                zIndex: 8,
                transition: "left 0.05s linear, top 0.05s linear",
              }}
            />

            {/* Node icons + labels at fixed positions */}
            {nodes.map((node, i) => {
              const isActive = i === activeIdx;
              const rad = (nodeAngles[i] * Math.PI) / 180;
              // Push labels further out than orbit radius
              const labelR = RADIUS + 72;
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
                >
                  <div
                    className={`tc-icon ${isActive ? "active" : "inactive"}`}
                  >
                    {node.icon}
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
