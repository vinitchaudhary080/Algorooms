import React from "react";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/code/DetailHero";
import CodeDetailContent from "@/components/blog/code/Content";
import Blog from "@/components/blog/Bloglisting";
import Footer from "@/sections/Footer";
import Reveal from "@/components/Reveal";                       // 👈 animation wrapper

export default function CodeDetail() {
  return (
    <>
      <Navbar />

      {/* Hero – zoom for a nice entrance */}
      <Reveal effect="zoom" duration={700}>
        <BlogHero />
      </Reveal>

      {/* Article content – clean fade-up */}
      <Reveal effect="fade-up">
        <CodeDetailContent />
      </Reveal>

      {/* More from blog – slight fade-up */}
      <Reveal effect="fade-up">
        <Blog />
      </Reveal>

      <Footer />
    </>
  );
}