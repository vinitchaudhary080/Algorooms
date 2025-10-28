// src/components/features/FeaturesHero.jsx
import React from "react";

export default function FeaturesHero() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-20 scroll-mt-nav">
      <div className="container-xxl">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 ring-2 ring-[#F6F6F9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
            Features
          </span>
        </div>

        {/* Heading + subtext (exact copy style) */}
        <div className="mt-4 text-center">
          <h1 className="text-[40px] leading-[1.12] sm:text-6xl font-black  font-semibold  tracking-tight text-neutral-900">
            What’s New in Algorooms
          </h1>

          <p className="mt-3 text-[14.5px] sm:text-[15px] text-neutral-600">
            Execute trades directly from integrated charts with speed, reliability, and real-time market updates.
            <br className="hidden sm:block" />
            Analyze trends, automate execution, and manage multiple segments effortlessly all from one unified platform.
          </p>
        </div>
      </div>
    </section>
  );
}
