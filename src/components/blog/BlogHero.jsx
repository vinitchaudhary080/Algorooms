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
          Smart insights to guide
          <br className="hidden sm:block" />
          your growth journey.
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-xl mx-auto text-[14.5px] sm:text-[15px] text-neutral-600">
          Learn from expert perspectives, real-world
          <br className="hidden sm:block" />
          examples, and practical advices.
        </p>
      </div>
    </section>
  );
}
