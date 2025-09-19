// src/pages/blog/Cryptocurrency.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/blockchain/DetailHero";
import StratDetailContent from "@/components/blog/blockchain/Content";
import Blog from "@/components/blog/Bloglisting";
import Footer from "@/sections/Footer";
import Reveal from "@/components/Reveal";

export default function Cryptocurrency() {
  return (
    <>
      <Navbar />

      {/* Hero – zoom for a nice entrance */}
      <Reveal effect="zoom" duration={700}>
        <BlogHero />
      </Reveal>

      {/* Article content – clean fade-up */}
      <Reveal effect="fade-up">
        <StratDetailContent />
      </Reveal>

      {/* More from blog – slight fade-up */}
      <Reveal effect="fade-up">
        <Blog />
      </Reveal>

      <Footer />
    </>
  );
}
