// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import About from "@/components/about/About.jsx"; 
import BlogPage from "@/pages/Blog";
import CodeDetail from "@/pages/blog/CodeDetail";
import ScrollToTop from "@/components/ScrollToTop";

export default function App() {
  return (
    <>
    <ScrollToTop behavior="auto" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/blog" element={<BlogPage />} />
       <Route path="/blog/code-detail" element={<CodeDetail />} />
       
    </Routes>
    </>
  );
}
