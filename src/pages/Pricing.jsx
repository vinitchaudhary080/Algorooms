// src/pages/PricingsPage.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import Listing from "@/components/pricing/Listing";
import Compare from "@/components/pricing/PriceCompare";
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
       <Reveal effect="zoom" duration={700}>
        <Listing />
      </Reveal>

       <Reveal effect="zoom" duration={700}>
        <Compare />
      </Reveal>

    

  

      {/* FAQ – simple fade-up */}
      <Reveal effect="fade-up" duration={650}>
        <FAQ />
      </Reveal>

      <Footer />
    </>
  );
}
