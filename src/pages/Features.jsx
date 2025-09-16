// src/pages/FeaturesPage.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesShowcase from "@/components/features/FeaturesShowcase";
import HowItWorks from "@/sections/HowItWorks";
import WhyChoose from "@/sections/WhyChoose";
import FAQ from "@/sections/FAQ";
import Reveal from "@/components/Reveal"; // 👈 add

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      {/* Hero – thoda zoom for punchy entry */}
      <Reveal effect="zoom" duration={700}>
        <FeaturesHero />
      </Reveal>

      {/* Listed / Mosaic – slide up */}
      {/* <Reveal effect="fade-up" duration={650}>
        <FeaturesShowcase />
      </Reveal> */}

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
