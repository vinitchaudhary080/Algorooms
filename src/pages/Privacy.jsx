// src/pages/Privacy.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent"; // 👈 add

export default function Privacy() {
  return (
    <>
      <Navbar />

      {/* Hero section */}
      <PrivacyHero />

      {/* Content section */}
      <PrivacyContent />

      <Footer />
    </>
  );
}
