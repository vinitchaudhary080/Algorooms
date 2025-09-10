// src/about/About.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Founder from "@/components/about/Founder";
import Team from "@/components/about/Team";
import Footer from "@/sections/Footer";
import Reveal from "@/components/Reveal"; // 👈 add

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero - thoda zoom nice lagta hai */}
      <Reveal effect="zoom" duration={700}>
        <AboutHero />
      </Reveal>

      {/* Mission - slide up */}
      <Reveal effect="fade-up">
        <Mission />
      </Reveal>

      {/* Values - slight stagger feel ke liye delay */}
      <Reveal effect="fade-up">
        <Values />
      </Reveal>

      {/* Founder - left/right se thoda motion */}
      <Reveal effect="fade-left">
        <Founder />
      </Reveal>

      {/* Team - slide up */}
      <Reveal effect="fade-up">
        <Team />
      </Reveal>

      <Footer />
    </>
  );
}
