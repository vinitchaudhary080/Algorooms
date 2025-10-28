// src/pages/PricingsPage.jsx
import React from "react";
import SEO from "@/components/SEO.jsx";               // ✅ add SEO
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import Listing from "@/components/pricing/Listing";
import Compare from "@/components/pricing/PriceCompare";
import FAQ from "@/sections/FAQ";
import Reveal from "@/components/Reveal";

// ✅ Pricing page JSON-LD
const pageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pricing: Best Algo Trading Software & Plans | AlgoRooms",
  url: "https://algorooms.com/pricing",
  description:
    "Choose the best AlgoRooms plan, affordable pricing for automated trading software, backtesting tools, and AI-driven algorithmic trading solutions in India."
};

export default function PricingPage() {
  return (
    <>
      {/* ✅ SEO Meta */}
      <SEO
        title="Pricing: Best Algo Trading Software & Plans | AlgoRooms"
        description="Choose the best AlgoRooms plan, affordable pricing for automated trading software, backtesting tools, and AI-driven algorithmic trading solutions in India."
        canonical="https://algorooms.com/pricing"
        image="/og-pricing.jpg"
        jsonLd={pageLd}
        keywords="Best Algo Trading Software in India, Best Automated Trading Software, Algo Trading Software India, algorithmic trading platform, automated trading solutions, algo trading app, Best Paper Trading Platform, multi-asset algo platform, quantitative trading tool, trading dashboard, programmatic trading platform, order execution software, cloud-based trading solution, institutional algo trading, Portfolio Backtesting Software, trading simulation tool, trading automation India"
      />

      <Navbar />

      <Reveal effect="zoom" duration={700}><PricingHero /></Reveal>
      <Reveal effect="zoom" duration={700}><Listing /></Reveal>
      <Reveal effect="zoom" duration={700}><Compare /></Reveal>

      <Reveal effect="fade-up" duration={650}><FAQ /></Reveal>

      <Footer />
    </>
  );
}
