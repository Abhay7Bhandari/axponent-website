import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home page sections
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhatWeDo from "./components/WhatWeDo";
import LogoTicker from "./components/LogoTicker";
import HowWeDo from "./components/HowWeDo";
import FourAs from "./components/FourAs";
import CaseStudy from "./components/CaseStudy";
import TrustedBy from "./components/TrustedBy";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";

// Sub-pages
import AdvertisersPage from "./components/AdvertisersPage";
import PublishersPage from "./components/PublishersPage";
import OurProductsPage from "./components/OurProductsPage";
import WebPage from "./components/WebPage";
import CareersPage from "./components/CareersPage";
import VentureCapitalPage from "./components/VentureCapitalPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatWeDo />
      <LogoTicker />
      <HowWeDo />
      <FourAs />
      <CaseStudy />
      <TrustedBy />
      <Testimonials />
      <Events />
    </>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  // ── Enquire Now scroll logic ─────────────────────────────────────────────
  // Each page that has a form renders an element with id="enquire-form".
  // Pages WITHOUT a form (Home, Our Products) have no form, so we scroll
  // to the Footer's "Get In Touch" column instead (id="footer-contact").
  //
  // Flow:
  //   1. If we're already on a page that has a form → scroll immediately.
  //   2. If the current page has NO form → navigate to Advertisers (which
  //      always has a form) and scroll after a short paint delay.
  // ────────────────────────────────────────────────────────────────────────
  const PAGES_WITH_FORM = [
    "Advertisers",
    "Publishers",
    "Web",
    "Careers",
    "Venture Capital",
  ];

  const scrollToForm = useCallback(() => {
    // small delay so the DOM is ready after a page change
    setTimeout(() => {
      const el = document.getElementById("enquire-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  }, []);

  const handleEnquireNow = useCallback(() => {
    if (PAGES_WITH_FORM.includes(activePage)) {
      // Already on a page with a form — just scroll
      scrollToForm();
    }
  }, [activePage, scrollToForm]);
  // ─────────────────────────────────────────────────────────────────────────

  const renderPage = () => {
    switch (activePage) {
      case "Advertisers":
        return <AdvertisersPage />;
      case "Publishers":
        return <PublishersPage />;
      case "Our Products":
        return <OurProductsPage />;
      case "Web":
        return <WebPage />;
      case "Careers":
        return <CareersPage />;
      case "Venture Capital":
        return <VentureCapitalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onEnquireNow={handleEnquireNow}
      />
      {renderPage()}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
