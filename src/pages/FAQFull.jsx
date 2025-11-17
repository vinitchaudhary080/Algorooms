// src/pages/FAQFull.jsx
import React from "react";
import FAQ from "../sections/FAQFull"; // import the section version
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export default function FAQFullPage() {
  return (
    <>
     <Navbar />
      <ScrollToTop />

      <div className="pt-24 sm:pt-28">
        <div className="container-xxl text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-neutral-500">
            Everything about algo trading in one place.
          </p>
        </div>

        <FAQ />
      </div>

      <Footer />
    </>
  );
}
