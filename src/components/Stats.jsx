import { useRef, useEffect } from "react";
import FadeSection from "./FadeSection";
import earthImg from "../assets/images/Earth.png";

const STATS = [
  { num: "65+", label: "performance\nmarketing specialists" },
  { num: "3", label: "global offices" },
  { num: "4", label: "Products" },
  { num: "120+", label: "countries reached" },
  { num: "5Mn+", label: "Daily Connections" },
  { num: "200+", label: "brand partners" },
];

function useGlowCanvas(cardRef, canvasRef) {
  useEffect(() => {
    const card = cardRef.current;
    const canvas = canvasRef.current;
    if (!card || !canvas) return;

    const resize = () => {
      canvas.width = card.offsetWidth;
      canvas.height = card.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(card);

    const mouse = { x: -999, y: -999, inside: false };
    const glow = { opacity: 0, side: "top", pos: 0 };
    let raf;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.inside = true;
    };
    const onLeave = () => {
      mouse.inside = false;
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    const draw = () => {
      const ctx = canvas.getContext("2d");
      const w = canvas.width,
        h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      glow.opacity = mouse.inside
        ? Math.min(1, glow.opacity + 0.07)
        : Math.max(0, glow.opacity - 0.04);

      if (glow.opacity > 0) {
        const { x, y } = mouse;
        const dT = y,
          dB = h - y,
          dL = x,
          dR = w - x;
        const min = Math.min(dT, dB, dL, dR);
        let side =
          min === dT
            ? "top"
            : min === dB
              ? "bottom"
              : min === dL
                ? "left"
                : "right";
        let pos = side === "top" || side === "bottom" ? x / w : y / h;

        glow.side = side;
        glow.pos += (pos - glow.pos) * 0.2;

        const p = glow.pos;
        const half = 0.3;
        let x1, y1, x2, y2;
        if (side === "top") {
          x1 = Math.max(0, (p - half) * w);
          y1 = 0;
          x2 = Math.min(w, (p + half) * w);
          y2 = 0;
        }
        if (side === "bottom") {
          x1 = Math.max(0, (p - half) * w);
          y1 = h;
          x2 = Math.min(w, (p + half) * w);
          y2 = h;
        }
        if (side === "left") {
          x1 = 0;
          y1 = Math.max(0, (p - half) * h);
          x2 = 0;
          y2 = Math.min(h, (p + half) * h);
        }
        if (side === "right") {
          x1 = w;
          y1 = Math.max(0, (p - half) * h);
          x2 = w;
          y2 = Math.min(h, (p + half) * h);
        }

        const o = glow.opacity;
        const g1 = ctx.createLinearGradient(x1, y1, x2, y2);
        g1.addColorStop(0, `rgba(0,168,255,0)`);
        g1.addColorStop(0.3, `rgba(0,168,255,${0.55 * o})`);
        g1.addColorStop(0.5, `rgba(100,210,255,${o})`);
        g1.addColorStop(0.7, `rgba(0,168,255,${0.55 * o})`);
        g1.addColorStop(1, `rgba(0,168,255,0)`);
        ctx.save();
        ctx.strokeStyle = g1;
        ctx.lineWidth = 3;
        ctx.shadowColor = `rgba(0,180,255,${o})`;
        ctx.shadowBlur = 22;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        const g2 = ctx.createLinearGradient(x1, y1, x2, y2);
        g2.addColorStop(0, `rgba(255,255,255,0)`);
        g2.addColorStop(0.45, `rgba(255,255,255,${0.55 * o})`);
        g2.addColorStop(0.5, `rgba(255,255,255,${o})`);
        g2.addColorStop(0.55, `rgba(255,255,255,${0.55 * o})`);
        g2.addColorStop(1, `rgba(255,255,255,0)`);
        ctx.strokeStyle = g2;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = `rgba(255,255,255,${o})`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);
}

function StatCard({
  num,
  label,
  className = "",
  style = {},
  children,
  align = "left",
}) {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  useGlowCanvas(cardRef, canvasRef);

  return (
    <div
      ref={cardRef}
      className={`relative group overflow-hidden ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.13)",
        background: "rgba(4,8,21,0.35)",
        cursor: "default",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,90,200,0.07) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        className="relative flex flex-col justify-center py-9 px-8"
        style={{
          zIndex: 3,
          alignItems: align === "center" ? "center" : "flex-start",
          textAlign: align,
        }}
      >
        {children || (
          <>
            <div
              className="font-display font-bold leading-none mb-2"
              style={{
                fontSize: "clamp(2rem,3.8vw,3.25rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              {num}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm leading-snug whitespace-pre-line group-hover:text-gray-300 transition-colors duration-300">
              {label}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <FadeSection>
      {/* Wrap in relative so Earth sits behind the grid */}
      <section className="relative py-14 px-4 overflow-hidden">
        {/* Earth image — top of section, behind content */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ zIndex: 0 }}
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

        {/* Stats grid on top of Earth */}
        <div className="max-w-6xl mx-auto relative" style={{ zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              overflow: "hidden",
              background: "rgba(2,6,18,0.16)",
            }}
          >
            {/* Row 1 */}
            <StatCard
              num={STATS[0].num}
              label={STATS[0].label}
              style={{ gridColumn: "1 / span 2" }}
            />
            <StatCard
              num={STATS[1].num}
              label={STATS[1].label}
              style={{ gridColumn: "3 / span 2" }}
            />
            <StatCard
              num={STATS[2].num}
              label={STATS[2].label}
              style={{ gridColumn: "5 / span 2", borderRight: "none" }}
            />

            {/* Row 2 */}
            <StatCard
              num={STATS[3].num}
              label={STATS[3].label}
              style={{ gridColumn: "2 / span 2" }}
            />
            <StatCard
              num={STATS[4].num}
              label={STATS[4].label}
              style={{ gridColumn: "4 / span 3" }}
            />

            {/* Row 3 */}
            <StatCard
              num={STATS[5].num}
              label={STATS[5].label}
              style={{
                gridColumn: "2 / span 3",
                borderLeft: "1px solid rgba(255,255,255,0.13)",
                borderRight: "1px solid rgba(255,255,255,0.13)",
                borderBottom: "none",
                marginLeft: "200px",
              }}
              align="center"
            />
          </div>
        </div>
      </section>
    </FadeSection>
  );
}
