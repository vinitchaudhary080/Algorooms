// src/components/blog/BlogHero.jsx
import React from "react";

export default function BlogHero() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-20 scroll-mt-nav">
      <div className="container-xxl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 ring-2 ring-[#F6F6F9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
          Blog
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-[40px] leading-[1.12] sm:text-6xl font-black font-semibold tracking-tight text-neutral-900">
          Insights to Fuel Your 
          <br className="hidden sm:block" />
         Team’s Growth
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-xl mx-auto text-[14.5px] sm:text-[15px] text-neutral-600">
          Data-driven tips, smooth integrations, and practical strategies to keep your workflow moving effortlessly.
          <br className="hidden sm:block" />
          
        </p>
      </div>
    </section>
  );
}
