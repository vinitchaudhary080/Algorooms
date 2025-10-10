// src/pages/Contact.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactHowItWorks from "@/components/contact/ContactHowItWorks";
import LifeAtCryptomaty from "@/components/contact/LifeAtCryptomaty";
import FAQ from "@/sections/FAQFull"; 
import Reveal from "@/components/Reveal"; // 👈 import

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero - zoom animation */}
      <Reveal effect="zoom" duration={700}>
        <ContactHero />
      </Reveal>

      {/* How it works - fade-up */}
      <Reveal effect="fade-up">
        <ContactHowItWorks />
      </Reveal>

      {/* Life at Cryptomaty - left motion */}
      <Reveal effect="fade-left">
        <LifeAtCryptomaty />
      </Reveal>

      {/* FAQ - fade-up */}
      <Reveal effect="fade-up">
        <FAQ />
      </Reveal>

      <Footer />
    </>
  );
}
