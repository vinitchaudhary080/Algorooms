import React from "react";
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogNew from "@/components/blog/BlogNew";
import Blog from "@/components/blog/Bloglisting";
import Footer from "@/sections/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogNew />
      <Blog />
      <Footer />
    </>
  );
}
