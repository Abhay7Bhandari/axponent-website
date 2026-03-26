import React, { useState } from "react";
import earthImg from "../assets/images/Earth.png";

export default function Hero() {
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Stars */}
      <div className="stars" />

      {/* Side Scroll Indicator */}
      <div className="hidden lg:flex flex-col items-center gap-2 fixed right-6 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollToBottom}
          className="text-gray-500 text-xs tracking-widest select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL DOWN
        </button>
        <div className="w-px h-16 bg-gray-700" />
        <svg
          className="text-gray-500"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-48">
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ animation: "fadeup 0.7s ease both" }}
        >
          Built to deliver
        </h1>
        <p
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeup 0.7s ease 0.15s both" }}
        >
          Axponent is a global performance marketing and user acquisition
          company, helping brands scale efficiently across competitive markets.
          Founded in 2020, we specialize in acquiring relevant content,
          high-value users through data-driven media execution.
        </p>
      </div>

      {/* Earth Image — positioned at the very bottom, full width */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <img
          src={earthImg}
          alt=""
          aria-hidden
          className="w-full"
          style={{
            display: "block",
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>
    </section>
  );
}
