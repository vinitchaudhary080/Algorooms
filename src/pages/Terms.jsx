// src/pages/Terms.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import TermsHero from "@/components/terms/TermsHero"; // jo hero tumne banaya
import TermsContent from "@/components/terms/TermsContent";
import Footer from "@/sections/Footer";
import Reveal from "@/components/Reveal"; // optional: same animations

export default function Terms() {
  return (
    <>
      <Navbar />
      <Reveal effect="zoom" duration={700}>
        <TermsHero />
      </Reveal>
      <Reveal effect="fade-up">
        <TermsContent />
      </Reveal>
      <Footer />
    </>
  );
}
