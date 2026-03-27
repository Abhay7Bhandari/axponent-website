import { useState, useEffect } from "react";
import AxponentLogoWhite from "../assets/images/clients/AxponentLogoWhite.png";

const NAV_LINKS = [
  "Home",
  "Advertisers",
  "Publishers",
  "Our Products",
  "Web",
  "Careers",
  "Venture Capital",
];

export default function Navbar({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (link) => {
    setActivePage(link);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Full-width fixed nav wrapper */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-3 px-3 sm:pt-4 sm:px-4">
        {/* Floating pill container */}
        <div
          className="flex items-center justify-between w-full transition-all duration-300"
          style={{
            maxWidth: "1255px",
            height: "56px",
            borderRadius: "64px",
            background: scrolled ? "rgba(0,0,0,0.95)" : "#000000",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid #2F4D6C",
            padding: "0 10px 0 14px",
          }}
        >
          {/* Left: Logo */}
          <button
            onClick={() => handleNavClick("Home")}
            className="flex items-center flex-shrink-0 focus:outline-none"
          >
            <img
              src={AxponentLogoWhite}
              alt="Axponent Logo"
              style={{
                width: 120,
                height: 24,
                marginLeft: "8px",
                objectFit: "contain",
              }}
            />
          </button>

          {/* Center: Nav Links — hidden on mobile & tablet */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center px-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="nav-link text-xs xl:text-sm font-medium focus:outline-none relative flex items-center justify-center py-2 whitespace-nowrap"
                style={{
                  color: activePage === link ? "#ffffff" : "#9CA3AF",
                  background: "none",
                  cursor: "pointer",
                  fontWeight: activePage === link ? "600" : "400",
                }}
              >
                {link}
                {activePage === link && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      borderRadius: "2px",
                      background: "#00A8FF",
                      boxShadow: "0 0 8px 2px rgba(0, 168, 255, 0.7)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: CTA + Mobile menu */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              className="hidden lg:block text-xs xl:text-sm font-semibold text-white focus:outline-none"
              style={{
                background: "rgba(248,246,253,0.1)",
                borderRadius: "999px",
                padding: "8px 16px",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,120,255,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enquire Now
            </button>

            {/* Hamburger — mobile + tablet */}
            <button
              className="lg:hidden text-white p-2 focus:outline-none"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.97)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-white p-2 focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Logo in mobile menu */}
        <img
          src={AxponentLogoWhite}
          alt="Axponent Logo"
          style={{ width: 160, height: 32, marginBottom: 16 }}
        />

        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleNavClick(link)}
            className="text-white text-xl sm:text-2xl font-semibold hover:text-blue-400 transition-colors focus:outline-none relative"
            style={{ color: activePage === link ? "#00A8FF" : "#ffffff" }}
          >
            {link}
            {activePage === link && (
              <span
                className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full"
                style={{ background: "#00A8FF" }}
              />
            )}
          </button>
        ))}

        <button
          className="mt-4 px-8 py-3 rounded-full text-base font-semibold text-white"
          style={{ background: "linear-gradient(90deg, #0060ff, #0090ff)" }}
        >
          Enquire Now
        </button>
      </div>
    </>
  );
}
