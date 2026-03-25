import { useState, useEffect } from "react";

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

  const handleNavClick = (link) => {
    setActivePage(link);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Full-width fixed nav wrapper — transparent, just for positioning */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pt-4 px-4">
        {/* Floating pill container */}
        <div
          className="flex items-center justify-between w-full transition-all duration-300"
          style={{
            maxWidth: "1200px",
            height: "64px",
            borderRadius: "64px",
            background: "#000000",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid #2F4D6C",
            padding: "0 8px 0 20px",
          }}
        >
          {/* Desktop Nav Links — centered */}
          <div className="hidden md:flex items-center gap-5  flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="nav-link text-md font-medium focus:outline-none relative flex items-center justify-center px-2 py-3"
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
                      bottom: "0px", // sticks to bottom of button
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

          {/* CTA Button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              className="hidden md:block text-sm font-semibold text-white focus:outline-none"
              style={{
                background: "rgba(248, 246, 253, 0.1)",
                borderRadius: "999px",
                padding: "10px 22px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 120, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Enquire Now
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden text-white p-2"
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

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="mobile-menu-overlay">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setOpen(false)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-white text-2xl font-display font-semibold hover:text-blue-400 transition-colors focus:outline-none"
            >
              {link}
            </button>
          ))}
          <button
            className="mt-4 px-8 py-3 rounded-full text-base font-semibold text-white"
            style={{ background: "linear-gradient(90deg, #0060ff, #0090ff)" }}
          >
            Enquire Now
          </button>
        </div>
      )}
    </>
  );
}
