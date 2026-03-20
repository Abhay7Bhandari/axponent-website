import { useState } from "react";
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
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      {/* <Footer /> */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
