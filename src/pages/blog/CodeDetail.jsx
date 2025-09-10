import React from "react";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/code/DetailHero";
import CodeDetailContent from "@/components/blog/code/Content";
import Blog from "@/components/blog/Bloglisting";
import Footer from "@/sections/Footer";


export default function CodeDetail() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <CodeDetailContent />
      <Blog />
      <Footer />
    </>
  );
}
