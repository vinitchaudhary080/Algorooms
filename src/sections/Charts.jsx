// src/sections/Charts.jsx
import React from "react";
import { Link } from "react-router-dom";
import automateMock from "@/assets/automate-right.png"; // ✅ right-side image (you'll provide)

export default function Charts() {
  return (
    <section id="automate" className="relative bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FB] py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* ============ LEFT CONTENT ============ */}
        <div className="max-w-xl">
          {/* badges row */}
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white px-2 py-1 ring-2 ring-[#F6F6F9]">
            <span className="inline-flex items-center rounded-full bg-[#3B66F6] text-white px-3 py-1 text-xs font-semibold">
              Streamline
            </span>
            <span className="inline-flex items-center rounded-full text-neutral-800 px-3 py-1 text-xs font-semibold">
              Automation
            </span>
          </div>


          {/* heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold  tracking-tight leading-tight text-neutral-900">
            Maximize Strategy
            <br /> Performance
          </h2>

          {/* subtext */}
          <p className="mt-5 text-neutral-600 max-w-md leading-relaxed">
            Eliminate repetitive work with powerful automated trading software and algo trading platform features, so you can stay focused on building, testing, and scaling strategies.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-[15px] font-semibold text-white
                         bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
                         shadow-[0_12px_32px_rgba(40,100,223,0.38)] ring-1 ring-black/5
                         hover:shadow-[0_16px_40px_rgba(40,100,223,0.48)] transition-all"
            >
              Get Started
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ============ RIGHT MOCKUP ============ */}
        <div className="relative">
          {/* outer soft canvas frame */}
          <div className="relative rounded-[44px] overflow-hidden">
            <div className="p-2">
              <img
                src={automateMock}
                alt="Algorooms automation dashboard"
                className="w-full h-auto object-contain rounded-[32px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
