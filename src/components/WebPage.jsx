import React, { useState, useEffect, useRef } from "react";
import FadeSection from "./FadeSection";

import cpaCplImg from "../assets/images/web/deliver-cards/cpa-cpl-cps.png";
import conversionImg from "../assets/images/web/deliver-cards/conversion-optimized.png";
import scalableImg from "../assets/images/web/deliver-cards/scalable-mobile-web.png";
import incrementalImg from "../assets/images/web/deliver-cards/incremental-user-growth.png";
import fullFunnelImg from "../assets/images/web/deliver-cards/full-funnel-acquisition.png";
import verticalImg from "../assets/images/web/deliver-cards/vertical-expertise.png";

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

import Contextual from "../assets/images/web/Traffic-Channels/Contextual.svg";
import Contextualllintent from "../assets/images/web/Traffic-Channels/Contextualllintent.svg";
import DirectMedia from "../assets/images/web/Traffic-Channels/DirectMedia.svg";
import DirecttMediallintent from "../assets/images/web/Traffic-Channels/DirecttMediallintent.svg";
import EmailPush from "../assets/images/web/Traffic-Channels/EmailPush.svg";
import EmailPushllintent from "../assets/images/web/Traffic-Channels/EmailPushllintent.svg";
import Google from "../assets/images/web/Traffic-Channels/Google.svg";
import Googlellintent from "../assets/images/web/Traffic-Channels/Googlellintent.svg";
import Native from "../assets/images/web/Traffic-Channels/Native.svg";
import Nativellintent from "../assets/images/web/Traffic-Channels/Nativellintent.svg";
import PerformacePublisher from "../assets/images/web/Traffic-Channels/PerformacePublisher.svg";
import PerformacePublisherllintent from "../assets/images/web/Traffic-Channels/PerformacePublisherllintent.svg";
import categoriesImg from "../assets/images/web/categories.png";
import mobileImg1 from "../assets/images/web/mobile-high-value-audience/201 (1).png";
import mobileImg2 from "../assets/images/web/mobile-high-value-audience/3 (1).png";
import mobileImg3 from "../assets/images/web/mobile-high-value-audience/4 (1).png";
import mobileImg4 from "../assets/images/web/mobile-high-value-audience/5 (1).png";
import mobileImg5 from "../assets/images/web/mobile-high-value-audience/6 (1).png";
import mobileImg6 from "../assets/images/web/mobile-high-value-audience/7 (1).png";

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

function WebHero() {
  return (
    <section className="relative min-h-[48vh] sm:min-h-[52vh] flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden">
      <div className="stars" />
      <FadeSection>
        <h1
          className="font-display font-bold text-white mb-1 sm:mb-2 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          PERFORMANCE WEB
        </h1>
        <h1
          className="font-display font-bold mb-4 sm:mb-6 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", color: "#007BFF" }}
        >
          ACQUISITION AT GLOBAL SCALE
        </h1>
        <p
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
        >
          Axponent drives scalable customer acquisition through high-intent
          traffic across a curated global network of premium publishers and
          direct partnerships — powered by advanced media buying, exclusive
          supply, and real-time optimization for predictable, ROI-driven growth.
        </p>
      </FadeSection>
    </section>
  );
}

function WhatWeDeliver() {
  const deliverCards = [
    { img: cpaCplImg, alt: "CPA, CPL & CPS-Based Customer Acquisition" },
    { img: conversionImg, alt: "Conversion-Optimized Web Traffic" },
    { img: scalableImg, alt: "Scalable Mobile Web & Desktop Campaign" },
    { img: incrementalImg, alt: "Incremental User Growth" },
    { img: fullFunnelImg, alt: "Full-Funnel Acquisition & Retargeting" },
    { img: verticalImg, alt: "Vertical Expertise" },
  ];
  return (
    <FadeSection>
      <section className="py-8 sm:py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 md:p-10"
            style={{ background: "#000000", border: "2px solid #393647" }}
          >
            <h2
              className="font-display font-bold text-white text-center mb-6 sm:mb-10"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.875rem)" }}
            >
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

function BrandTicker() {
  return (
    <div className="py-8 sm:py-10 border-y border-white/5 overflow-hidden">
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
              height: "28px",
              width: "auto",
              objectFit: "contain",
              flexShrink: 0,
              marginLeft: "40px",
              marginRight: "40px",
              opacity: 0.85,
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

function DiverseNeeds() {
  const mobileImages = [
    { img: mobileImg2, alt: "High-Value Audience 2" },
    { img: mobileImg3, alt: "High-Value Audience 3" },
    { img: mobileImg4, alt: "High-Value Audience 4" },
    { img: mobileImg5, alt: "High-Value Audience 5" },
    { img: mobileImg6, alt: "High-Value Audience 6" },
    { img: mobileImg1, alt: "High-Value Audience 1" },
  ];
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Mobile heading */}
          <h2
            className="font-display font-bold text-white text-center mb-8 sm:mb-12 leading-snug sm:hidden"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
            Reach High-value
            <br />
            Audience across
            <br />
            key verticals
          </h2>
          {/* Web heading */}
          <h2
            className="font-display font-bold text-white text-center mb-8 sm:mb-12 leading-snug hidden sm:block"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
            Reach High -Value Audiences
            <br />
            Across Key Verticals
          </h2>
          {/* Mobile: single column stack of images */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {mobileImages.map((card, i) => (
              <img
                key={i}
                src={card.img}
                alt={card.alt}
                className="w-full rounded-2xl object-cover"
              />
            ))}
          </div>
          {/* Web: single image */}
          <img
            src={categoriesImg}
            alt="Categories"
            className="w-full rounded-2xl object-cover hidden sm:block"
          />
        </div>
      </section>
    </FadeSection>
  );
}

function TrafficChannels() {
  const nodes = [
    {
      label: "Performance Publisher &\nComparison Networks",
      iconActive: PerformacePublisher,
      iconInactive: PerformacePublisherllintent,
    },
    {
      label: "Native, Display &\nProgrammatic Advertising",
      iconActive: Native,
      iconInactive: Nativellintent,
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = vw < 480;
  const isTablet = vw >= 480 && vw < 1024;

  /* ── sizing table — same proportions at every size ── */
  const RADIUS = isMobile ? 100 : isTablet ? 148 : 200;
  const stageSize = isMobile ? 340 : isTablet ? 490 : 580;
  const iconSz = isMobile ? 34 : isTablet ? 42 : 52;
  const nodeW = isMobile ? 80 : isTablet ? 100 : 124;
  const labelR = RADIUS + (isMobile ? 54 : isTablet ? 62 : 78);
  const dotSz = isMobile ? 8 : isTablet ? 10 : 11;
  const fontSize = isMobile ? "9px" : isTablet ? "10px" : "11px";
  const glowDiameter = RADIUS * 2 - 4;

  const nodeAngles = nodes.map((_, i) => 90 + (i / n) * 360);

  /* ── animated dot ── */
  const [dotAngle, setDotAngle] = useState(nodeAngles[0]);
  const dotAngleRef = useRef(nodeAngles[0]);
  const targetAngleRef = useRef(nodeAngles[0]);
  const rafRef = useRef(null);
  const highlightIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  const animateTo = (targetRaw) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const current = dotAngleRef.current;
    const diff = ((((targetRaw - current) % 360) + 540) % 360) - 180;
    targetAngleRef.current = current + diff;

    const step = () => {
      const cur = dotAngleRef.current;
      const tgt = targetAngleRef.current;
      if (Math.abs(tgt - cur) < 0.5) {
        dotAngleRef.current = tgt;
        setDotAngle(tgt);
        return;
      }
      const delta = Math.sign(tgt - cur) * Math.min(3, Math.abs(tgt - cur));
      dotAngleRef.current = cur + delta;
      setDotAngle(cur + delta);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const handleNodeClick = (i) => {
    setActiveIdx(i);
    animateTo(nodeAngles[i]);
  };
  const handleNodeEnter = (i) => {
    setHoveredIdx(i);
    animateTo(nodeAngles[i]);
  };
  const handleNodeLeave = () => {
    setHoveredIdx(null);
    animateTo(nodeAngles[activeIdx]);
  };
  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const dotRad = (dotAngle * Math.PI) / 180;
  const dotX = Math.cos(dotRad) * RADIUS;
  const dotY = -Math.sin(dotRad) * RADIUS;

  /* ── same gradient at every breakpoint ── */
  const glowGradient =
    "radial-gradient(circle, " +
    "rgba(0,  80, 220, 0.72)  0%,  " +
    "rgba(0,  90, 230, 0.65) 25%,  " +
    "rgba(0,  80, 200, 0.45) 55%,  " +
    "rgba(0,  50, 160, 0.15) 80%,  " +
    "transparent             100%)";

  return (
    <FadeSection>
      <style>{`
        @keyframes tc-glow-pulse {
          0%, 100% { opacity: 0.85; transform: translate(-50%,-50%) scale(0.97); }
          50%       { opacity: 1;   transform: translate(-50%,-50%) scale(1.03); }
        }

        .tc-node {
          position: absolute;
          display: flex; flex-direction: column;
          align-items: center; gap: 5px;
          text-align: center; cursor: pointer;
          transition: transform 0.25s ease;
        }
        .tc-node:hover { transform: translate(-50%,-50%) scale(1.1) !important; }

        .tc-icon-wrap {
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          padding: 6px; box-sizing: border-box;
          transition: background 0.3s, border 0.3s, box-shadow 0.3s;
        }
        .tc-icon-wrap.active {
          background: rgba(255,255,255,0.14);
          border: 1.5px solid rgba(255,255,255,0.72);
          box-shadow: 0 0 14px rgba(255,255,255,0.28),
                      0 0 26px rgba(0,160,255,0.16);
        }
        .tc-icon-wrap.inactive {
          background: transparent;
          border: 1px solid transparent;
          box-shadow: none;
        }

        .tc-orbit-dot {
          position: absolute; border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 7px 3px rgba(255,255,255,0.88);
          z-index: 8; pointer-events: none;
        }
      `}</style>

      <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2
            className="text-white text-center mb-10 sm:mb-14 md:mb-16"
            style={{
              fontFamily: "'Gilroy-Medium', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 4vw, 3.75rem)",
              lineHeight: "96%",
            }}
          >
            Traffic Channels
          </h2>

          {/* ═══════════════════════════════════════════════════
              Single orbit diagram — scales for every viewport.
              No separate mobile/desktop branches, same markup,
              just smaller numbers on mobile.
          ═══════════════════════════════════════════════════ */}
          <div
            className="relative mx-auto"
            style={{
              width: stageSize,
              height: stageSize,
              maxWidth: "96vw",
            }}
          >
            {/* white orbit ring */}
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
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* blue glow — identical gradient, clipped to ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: glowDiameter,
                height: glowDiameter,
                borderRadius: "50%",
                background: glowGradient,
                transform: "translate(-50%,-50%)",
                animation: "tc-glow-pulse 3.5s ease-in-out infinite",
                zIndex: 3,
                pointerEvents: "none",
                clipPath: "circle(50%)",
              }}
            />

            {/* white orbit dot */}
            <div
              className="tc-orbit-dot"
              style={{
                left: `calc(50% + ${dotX}px)`,
                top: `calc(50% + ${dotY}px)`,
                width: dotSz,
                height: dotSz,
                transform: "translate(-50%,-50%)",
              }}
            />

            {/* nodes */}
            {nodes.map((node, i) => {
              const isActive = i === highlightIdx;
              const rad = (nodeAngles[i] * Math.PI) / 180;
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
                    width: nodeW,
                  }}
                  onClick={() => handleNodeClick(i)}
                  onMouseEnter={() => handleNodeEnter(i)}
                  onMouseLeave={handleNodeLeave}
                >
                  <div
                    className={`tc-icon-wrap ${isActive ? "active" : "inactive"}`}
                    style={{ width: iconSz, height: iconSz }}
                  >
                    <img
                      src={isActive ? node.iconActive : node.iconInactive}
                      alt={node.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        opacity: isActive ? 1 : 0.38,
                        transition: "opacity 0.3s",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize,
                      fontWeight: isActive ? 700 : 400,
                      color: isActive ? "#ffffff" : "rgba(148,163,184,0.58)",
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                      textShadow: "0 1px 8px rgba(0,0,0,0.95)",
                      transition: "color 0.3s, font-weight 0.15s",
                    }}
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
