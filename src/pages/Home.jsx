// src/pages/Home.jsx
import React from "react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO.jsx";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero.jsx";
import HeroShowcase from "@/sections/HeroShowcase";

import Features from "@/sections/Features";
import Strategies from "@/sections/Strategies";
import Charts from "@/sections/Charts";
import FeatureListing from "@/sections/FeatureListing";
import HowItWorks from "@/sections/HowItWorks";
import WhyChoose from "@/sections/WhyChoose";
import Benefits from "@/sections/Benefits";
import Testimonials from "@/sections/Testimonials";  
import VideoTestimonials from "@/sections/VideoTestimonials";
import Pricing from "@/sections/Pricing";
import Blog from "@/sections/Blog";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

export default function Home() {
  // ✅ SEO schema for Algorooms
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Algorooms",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: "https://algorooms.com/",
    description:
      "Algorooms is an advanced options analytics and algo-trading platform for retail traders — backtest, deploy, and monitor your strategies in one dashboard.",
  };

  return (
    <>
      {/* ✅ SEO Meta */}
      <SEO
        title="Algorooms – Trade Smarter with Automated Options Strategies"
        description="Algorooms helps retail traders build, backtest and deploy algorithmic strategies with real-time options analytics — all in one seamless dashboard."
        canonical="https://algorooms.com/"
        image="/og-home.jpg"
        jsonLd={pageLd}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Reveal effect="zoom" duration={200}>
        <Hero />
      </Reveal>

      {/* Product Features + Core Modules */}
      <Reveal effect="fade-up"><Features /></Reveal>
      <Reveal effect="fade-up" delay={100}><Strategies /></Reveal>
      <Reveal effect="fade-up" delay={150}><Charts /></Reveal>

      {/* Explainers + Workflow Sections */}
      <Reveal effect="fade-up" delay={100}><HowItWorks /></Reveal>
      <Reveal effect="fade-up"><FeatureListing /></Reveal>

      {/* Why Choose + Benefits */}
      <Reveal effect="fade-right"><WhyChoose /></Reveal>
      <Reveal effect="fade-left"><Benefits /></Reveal>

      {/* Testimonials */}
      <Reveal effect="fade-up"><Testimonials /></Reveal>
      <Reveal effect="fade-up"><VideoTestimonials /></Reveal> 

      {/* Pricing */}
      <Reveal effect="fade-up"><Pricing /></Reveal> 

      {/* Blog Section */}
      <section id="blogs" className="scroll-mt-nav">
        <Reveal effect="fade-up"><Blog /></Reveal>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-nav">
        <Reveal effect="fade-up"><FAQ /></Reveal>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
