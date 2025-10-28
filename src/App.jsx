// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import About from "@/components/about/About.jsx"; 
import BlogPage from "@/pages/Blog";
import CodeDetail from "@/pages/blog/CodeDetail";
import Contact from "@/pages/Contact"; 
import FeaturesPage from "@/pages/Features";
import PricingPage from "@/pages/Pricing";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import ScrollToTop from "@/components/ScrollToTop";
import StratCrypto from "@/pages/blog/StratCrypto";
import Cryptocurrency from "@/pages/blog/Cryptocurrency";
import Blockchain from "@/pages/blog/Blockchain";
import FAQFullPage from "./pages/FAQFull";


export default function App() {
  return (
    <>
    <ScrollToTop behavior="auto" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/blog" element={<BlogPage />} />
       <Route path="/blog/code-detail" element={<CodeDetail />} />
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
       <Route path="/terms" element={<Terms />} />
       <Route path="/privacy" element={<Privacy />} />
      <Route path="/blog/What-is-algo-trading" element={<CodeDetail />} />
      <Route path="/blog/How-algorithmic-trading" element={<StratCrypto />} />
      <Route path="/blog/Building-wealth" element={<Cryptocurrency />}/>
      <Route path="/blog/Trading-bots" element={<Blockchain />}/>
      <Route path="/faq" element={<FAQFullPage />} />
       
    </Routes>
    </>
  );
}
