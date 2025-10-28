// src/pages/FeaturesPage.jsx
import React from "react";
import SEO from "@/components/SEO.jsx";               // ✅ add
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import FeaturesHero from "@/components/features/FeaturesHero";
import Feature1 from "@/components/features/Feature1";
import Feature2 from "@/components/features/Feature2";
import Feature3 from "@/components/features/Feature3";
import Feature4 from "@/components/features/Feature4";
import HowItWorks from "@/sections/HowItWorks";
import WhyChoose from "@/sections/WhyChoose";
import FAQ from "@/sections/FAQ";
import Reveal from "@/components/Reveal";

// Optional: simple JSON-LD for this page
const pageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AlgoRooms Features: AI Algo Strategy Builder & Backtesting Tool",
  url: "https://algorooms.com/features",
  description:
    "Discover powerful AlgoRooms features, a no-code strategy builder, real-time backtesting, risk management tools, and fast trade execution for all asset classes.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://algorooms.com/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://algorooms.com/features" }
    ]
  }
};

export default function FeaturesPage() {
  return (
    <>
      {/* ✅ SEO Meta */}
      <SEO
        title="AlgoRooms Features: AI Algo Strategy Builder & Backtesting Tool"
        description="Discover powerful AlgoRooms features, a no-code strategy builder, real-time backtesting, risk management tools, and fast trade execution for all asset classes."
        canonical="https://algorooms.com/features"
        image="/og-features.jpg"
        jsonLd={pageLd}
        keywords="Algo Trading Features, algo trading software, algorithmic trading platform, AI trading software, automated trading software, no-code strategy builder, visual strategy builder, backtesting tool, Portfolio Backtesting Software, quantitative trading tool, trading signal generator, rule-based trading software, broker integration, multi-asset algo platform, risk management software, stop-loss automation, take-profit automation, fast trade execution, low-latency trading, high-frequency trading, technical analysis trading software, trade optimization platform, trading simulation tool, trading dashboard, live data trading software, cloud-based trading solution, developer-friendly trading system, secure algo trading platform"
      />

      <Navbar />

      {/* Hero */}
      <Reveal effect="zoom" duration={700}>
        <FeaturesHero />
      </Reveal>

      {/* Listed / Mosaic */}
      <Reveal effect="fade-up" duration={650}><Feature1 /></Reveal>
      <Reveal effect="fade-up" duration={650}><Feature2 /></Reveal>
      <Reveal effect="fade-up" duration={650}><Feature3 /></Reveal>
      <Reveal effect="fade-up" duration={650}><Feature4 /></Reveal>

      {/* How it works */}
      <Reveal effect="fade-up" duration={650}><HowItWorks /></Reveal>

      {/* Why choose */}
      <Reveal effect="fade-right" duration={700}><WhyChoose /></Reveal>

      {/* FAQ */}
      <Reveal effect="fade-up" duration={650}><FAQ /></Reveal>

      <Footer />
    </>
  );
}
