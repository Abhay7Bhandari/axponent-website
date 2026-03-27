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
  return (
    <FadeSection>
      <section className="py-10 sm:py-14 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display font-bold text-white text-center mb-8 sm:mb-12 leading-snug"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
          >
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const RADIUS = isMobile ? 120 : 200;
  const nodeAngles = nodes.map((_, i) => 90 + (i / n) * 360);
  const [dotAngle, setDotAngle] = useState(nodeAngles[0]);
  const dotAngleRef = useRef(nodeAngles[0]);
  const targetAngleRef = useRef(nodeAngles[0]);
  const rafRef = useRef(null);
  const highlightIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  const animateTo = (targetRaw) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    let current = dotAngleRef.current;
    let diff = ((((targetRaw - current) % 360) + 540) % 360) - 180;
    const finalTarget = current + diff;
    targetAngleRef.current = finalTarget;
    const step = () => {
      const cur = dotAngleRef.current,
        tgt = targetAngleRef.current;
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

  const stageSize = isMobile ? 320 : 560;

  return (
    <FadeSection>
      <style>{`
        @keyframes tc-orb-breathe {
          0%, 100% { box-shadow: 0px -5px 250px 204px rgba(0,123,255,0.40); }
          50%       { box-shadow: 0px -5px 280px 224px rgba(0,123,255,0.55); }
        }
        .tc-node { position: absolute; display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; cursor: pointer; transition: transform 0.25s; }
        .tc-node:hover { transform: translate(-50%, -50%) scale(1.08) !important; }
        .tc-icon-wrap { border-radius: 12px; display: flex; align-items: center; justify-content: center; transition: background 0.3s, box-shadow 0.3s; padding: 5px; box-sizing: border-box; }
        .tc-icon-wrap.active { background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.75); box-shadow: 0 0 16px rgba(255,255,255,0.3); }
        .tc-icon-wrap.inactive { background: transparent; border: 1px solid transparent; }
        .tc-orbit-dot { position: absolute; border-radius: 50%; background: #ffffff; box-shadow: 0 0 6px 2px rgba(255,255,255,0.85); z-index: 8; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-white font-display text-center mb-8 sm:mb-12 md:mb-16"
            style={{
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 4vw, 3.75rem)",
              lineHeight: "96%",
            }}
          >
            Traffic Channels
          </h2>
          {/* Stage */}
          <div
            className="relative mx-auto"
            style={{ width: stageSize, height: stageSize, maxWidth: "92vw" }}
          >
            {/* Orbit ring */}
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
            {/* Center orb */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: isMobile ? 20 : 31,
                height: isMobile ? 20 : 31,
                borderRadius: "50%",
                background: "#007BFF",
                boxShadow: "0px -5px 250px 204px rgba(0,123,255,0.40)",
                animation: "tc-orb-breathe 3.5s ease-in-out infinite",
                zIndex: 5,
              }}
            />
            {/* Dot */}
            <div
              className="tc-orbit-dot"
              style={{
                left: `calc(50% + ${dotX}px)`,
                top: `calc(50% + ${dotY}px)`,
                width: isMobile ? 8 : 11,
                height: isMobile ? 8 : 11,
                transform: "translate(-50%,-50%)",
              }}
            />
            {/* Nodes */}
            {nodes.map((node, i) => {
              const isActive = i === highlightIdx;
              const rad = (nodeAngles[i] * Math.PI) / 180;
              const labelR = RADIUS + (isMobile ? 50 : 74);
              const lx = Math.cos(rad) * labelR;
              const ly = -Math.sin(rad) * labelR;
              const iconSize = isMobile ? 36 : 52;
              return (
                <div
                  key={i}
                  className="tc-node"
                  style={{
                    left: `calc(50% + ${lx}px)`,
                    top: `calc(50% + ${ly}px)`,
                    transform: "translate(-50%,-50%)",
                    zIndex: 7,
                    width: isMobile ? 80 : 120,
                  }}
                  onClick={() => handleNodeClick(i)}
                  onMouseEnter={() => handleNodeEnter(i)}
                  onMouseLeave={handleNodeLeave}
                >
                  <div
                    className={`tc-icon-wrap ${isActive ? "active" : "inactive"}`}
                    style={{ width: iconSize, height: iconSize }}
                  >
                    <img
                      src={isActive ? node.iconActive : node.iconInactive}
                      alt={node.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? "9px" : "11px",
                      fontWeight: isActive ? 700 : 400,
                      color: isActive ? "#fff" : "rgba(148,163,184,0.6)",
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                      textShadow: "0 1px 6px rgba(0,0,0,0.9)",
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
