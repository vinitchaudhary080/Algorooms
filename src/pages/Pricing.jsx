// src/pages/PricingsPage.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import PricingHero from "@/components/pricing/PricingHero";

import FAQ from "@/sections/FAQ";
import Reveal from "@/components/Reveal"; // 👈 add

export default function PricingPage() {
  return (
    <>
      <Navbar />

      {/* Hero – thoda zoom for punchy entry */}
      <Reveal effect="zoom" duration={700}>
        <PricingHero />
      </Reveal>

      {/* Listed / Mosaic – slide up */}
      <Reveal effect="fade-up" duration={650}>
        <Feature1 />
      </Reveal>
       <Reveal effect="fade-up" duration={650}>
        <Feature2 />
      </Reveal>
       <Reveal effect="fade-up" duration={650}>
        <Feature3 />
      </Reveal>
      <Reveal effect="fade-up" duration={650}>
        <Feature4 />
      </Reveal>

      {/* How it works – fade-up */}
      <Reveal effect="fade-up" duration={650}>
        <HowItWorks />
      </Reveal>

      {/* Why choose – right se halka motion */}
      <Reveal effect="fade-right" duration={700}>
        <WhyChoose />
      </Reveal>

      {/* FAQ – simple fade-up */}
      <Reveal effect="fade-up" duration={650}>
        <FAQ />
      </Reveal>

      <Footer />
    </>
  );
}
