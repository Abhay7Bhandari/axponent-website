import { useState } from "react";
import AxponentLogoWhite from "../assets/images/clients/AxponentLogoWhite.png";

const NAV_LINKS = [
  { label: "Home", page: "Home" },
  { label: "Advertisers", page: "Advertisers" },
  { label: "Publishers", page: "Publishers" },
  { label: "Owned Assets", page: "Our Products" },
  { label: "Web", page: "Web" },
  { label: "Careers", page: "Careers" },
  { label: "Venture Capital", page: "Venture Capital" },
];

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState("");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNavClick = (page) => {
    if (setActivePage) setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-white/5 pt-16 pb-8 px-4"
      style={{ background: "#000000" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 – Logo + Newsletter */}
          <div>
            {/* Logo matching Image 1 style: ΩX boxed + PONENT */}
            <button
              onClick={() => handleNavClick("Home")}
              className="flex items-center gap-0 mb-3 focus:outline-none"
            >
              <img
                src={AxponentLogoWhite}
                alt="Axponent Logo"
                style={{ width: 183, height: 36 }}
              />
            </button>

            <p className="text-gray-400 text-sm mb-6">
              Built with clarity. Designed for flow.
            </p>

            {/* Email input — plain dark box with inline Submit */}
            <div
              className="flex items-center rounded-lg overflow-hidden mb-5"
              style={{
                borderRadius: "400px",
                border: "1px solid #F7F7FD1A",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder-gray-500"
                style={{ paddingLeft: "12px", paddingRight: "12px" }}
              />
              <button
                className="px-5 py-3 text-sm font-semibold text-white flex-shrink-0 transition-colors hover:text-brand-blue"
                style={{
                  background: "linear-gradient(90deg,#0060FF,#0090FF)",
                  // borderRadius: "0 6px 6px 0",
                  borderRadius: "100px",
                  border: "1px",
                  padding: "10px 28px 10px 28px",
                }}
              >
                Submit
              </button>
            </div>

            {/* Social icons — blue filled circles like Image 1 */}
            <div className="flex gap-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ background: "#0A66C2" }}
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ background: "#0A66C2" }}
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" fill="white" />
                  <circle cx="4" cy="4" r="2" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 – Product Links */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-5 tracking-wide">
              Product
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, page }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-500 text-sm hover:text-white transition-colors focus:outline-none text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Get In Touch */}
          <div>
            <h4 className="font-sans font-semibold text-white text-sm mb-5 tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <svg
                  className="text-brand-blue mt-0.5 flex-shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,12 2,6" />
                </svg>
                <a
                  href="mailto:info@axpoennt.com"
                  className="text-gray-400 text-sm hover:text-brand-blue transition-colors"
                >
                  info@axpoennt.com
                </a>
              </div>

              {/* India office */}
              <div className="flex items-start gap-3">
                <svg
                  className="text-brand-blue mt-0.5 flex-shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Axponent, 706-707, 7th Floor Tower A, Iris Tech Park, Sector
                  48, Sohna Road, Gurugram, India, Pin – 122018
                </span>
              </div>

              {/* Dubai office */}
              <div className="flex items-start gap-3">
                <svg
                  className="text-brand-blue mt-0.5 flex-shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Axponent Media -FZCO, Dubai Silicon Oasis, DDP, Building A1,
                  Dubai, AE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © 2025 Axponent. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-500 text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            Back to top
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
