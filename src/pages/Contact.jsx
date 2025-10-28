// src/pages/Contact.jsx
import React from "react";
import SEO from "@/components/SEO.jsx";                 // ✅ add
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactHowItWorks from "@/components/contact/ContactHowItWorks";
import LifeAtCryptomaty from "@/components/contact/LifeAtCryptomaty"; // 🔴 consider renaming to LifeAtAlgoRooms
import FAQ from "@/sections/FAQ"; 
import Reveal from "@/components/Reveal";

// ✅ Contact page JSON-LD
const pageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AlgoRooms: India’s Leading Algorithmic Trading Platform",
  url: "https://algorooms.com/contact",
  description:
    "Get in touch with AlgoRooms, India’s top algorithmic trading software provider. Connect for demos, pricing, broker integration, or enterprise algo trading solutions.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://algorooms.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://algorooms.com/contact" }
    ]
  }
};

export default function Contact() {
  return (
    <>
      {/* ✅ SEO Meta */}
      <SEO
        title="Contact AlgoRooms: India’s Leading Algorithmic Trading Platform"
        description="Get in touch with AlgoRooms, India’s top algorithmic trading software provider. Connect for demos, pricing, broker integration, or enterprise algo trading solutions."
        canonical="https://algorooms.com/contact"
        image="/og-contact.jpg"     // 🔁 replace with a real asset
        jsonLd={pageLd}
        keywords="algo trading platform, algorithmic trading software, Automated Trading Solutions, algo trading software India, AI trading software, trading automation India, broker integration, institutional algo trading, quantitative trading tool, multi-asset trading software, advanced algo trading platform in India, Algo Trading Software India, fast trade execution, secure algo trading platform, trading API, cloud-based trading solution, customizable trading algorithms, automated trading strategies"
      />

      <Navbar />

      {/* Hero - zoom animation */}
      <Reveal effect="zoom" duration={700}>
        <ContactHero />
      </Reveal>

      {/* How it works - fade-up */}
      <Reveal effect="fade-up">
        <ContactHowItWorks />
      </Reveal>

      {/* Brand check: this is named for Cryptomaty */}
      <Reveal effect="fade-left">
        <LifeAtCryptomaty />
      </Reveal>

      {/* FAQ - fade-up */}
      <Reveal effect="fade-up">
        <FAQ />
      </Reveal>

      <Footer />
    </>
  );
}
