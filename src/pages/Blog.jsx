// src/pages/BlogPage.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogNew from "@/components/blog/BlogNew";
import Blog from "@/components/blog/Bloglisting";
import Footer from "@/sections/Footer";
import Reveal from "@/components/Reveal"; // 👈 import

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero - zoom animation */}
      <Reveal effect="zoom" duration={700}>
        <BlogHero />
      </Reveal>

      {/* BlogNew - fade-up */}
      <Reveal effect="fade-up">
        <BlogNew />
      </Reveal>

      {/* Blog listing - fade-up with thoda delay */}
      <Reveal effect="fade-up" duration={800}>
        <Blog />
      </Reveal>

      <Footer />
    </>
  );
}
