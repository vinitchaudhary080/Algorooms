// src/App.jsx
import React from "react";
import Navbar from "@/components/Navbar"; 
import Hero from "./sections/Hero.jsx";
import HeroShowcase from "@/sections/HeroShowcase";
import TrustedBy from "@/sections/TrustedBy";
import Features from "@/sections/Features";
import Strategies from "@/sections/Strategies";
import Charts from "@/sections/Charts";
import FeatureListing from "@/sections/FeatureListing";
import HowItWorks from "@/sections/HowItWorks";
import WhyChoose from "@/sections/WhyChoose";
import Broker from "./sections/Broker"; 
import Testimonials from "./sections/Testimonials";
import VideoTestimonials from "./sections/VideoTestimonials";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import SEO from "./components/SEO.jsx";

export default function App() {
  const pageLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cryptomaty",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: "https://cryptomaty.app/",
    description:
      "Cryptomaty is a smart crypto trading platform where you can build, backtest, and deploy strategies with ease.",
  };

  return (
    <>
      <SEO
        title="Cryptomaty – Your Smart Crypto Dashboard"
        description="Build, backtest and deploy smarter crypto trading strategies with Cryptomaty."
        canonical="https://cryptomaty.app/"
        image="/og-home.jpg"
        jsonLd={pageLd}
      />
      <Navbar />
      <Hero />
      <HeroShowcase /> 
      <TrustedBy />
      <Features />
      <Strategies />
      <Charts />
      <FeatureListing />
      <HowItWorks />
      <WhyChoose />
      <Broker /> 
      <Testimonials />
      <VideoTestimonials />
      <Blog />
      <FAQ />
      <Footer />
      
    </>
  );
}
