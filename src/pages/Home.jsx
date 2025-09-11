// src/pages/Home.jsx
import React from "react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO.jsx";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero.jsx";
import HeroShowcase from "@/sections/HeroShowcase";
import TrustedBy from "@/sections/TrustedBy";
import Features from "@/sections/Features";
import Strategies from "@/sections/Strategies";
import Charts from "@/sections/Charts";
import FeatureListing from "@/sections/FeatureListing";
import HowItWorks from "@/sections/HowItWorks";
import WhyChoose from "@/sections/WhyChoose";
import Broker from "@/sections/Broker";
import Testimonials from "@/sections/Testimonials";
import VideoTestimonials from "@/sections/VideoTestimonials";
import Blog from "@/sections/Blog";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

export default function Home() {
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cryptomaty",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: "https://cryptomaty.app/",
    description:
      "Cryptomaty is a smart crypto trading platform where you can build, backtest, and deploy strategies with ease.",
  };

  return (
    <>
      <SEO
        title="Cryptomaty – Your Smart Crypto Dashboard"
        description="Build, backtest and deploy smarter crypto trading strategies with Cryptomaty."
        canonical="https://cryptomaty.app/"
        image="/og-home.jpg"
        jsonLd={pageLd}
      />
      <Navbar />
      {/* Hero - light zoom/fade */}
      <Reveal effect="zoom" duration={200}>
        <Hero />
      </Reveal>

      {/* Showcase - slide up */}
      <Reveal effect="fade-up">
        <HeroShowcase />
      </Reveal>

      {/* Logos carousel - subtle fade */}
      <Reveal effect="fade" delay={50}>
        <TrustedBy />
      </Reveal>

      {/* Feature blocks - layered stagger */}
      <Reveal effect="fade-up"><Features /></Reveal>
      <Reveal effect="fade-up" delay={100}><Strategies /></Reveal>
      <Reveal effect="fade-up" delay={150}><Charts /></Reveal>

      {/* Listing + HowItWorks */}
      <Reveal effect="fade-up"><FeatureListing /></Reveal>
      <Reveal effect="fade-up" delay={100}><HowItWorks /></Reveal>

      {/* Why choose + Broker */}
      <Reveal effect="fade-right"><WhyChoose /></Reveal>
      <Reveal effect="fade-left"><Broker /></Reveal>

      {/* Social proof */}
      <Reveal effect="fade-up"><Testimonials /></Reveal>
      <Reveal effect="fade-up" delay={120}><VideoTestimonials /></Reveal>

      {/* Blog + FAQ */}
      <section id="blogs" className="scroll-mt-nav">
        <Reveal effect="fade-up"><Blog /></Reveal>
      </section>

      <section id="faq" className="scroll-mt-nav">
        <Reveal effect="fade-up"><FAQ /></Reveal>
      </section>

      <Footer />
    </>
  );
}
