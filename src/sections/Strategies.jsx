// src/sections/Strategies.jsx
import React from "react";
import strategiesImg from "../assets/strategies.png"; // 👈 apna image import karo

export default function Strategies() {
  return (
    <section id="strategies" className="relative bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Meaningful calendar
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Use Ready-Made Strategies. <br /> Start Earning Faster.
          </h2>

          <p className="mt-4 text-neutral-500 max-w-lg">
            Explore proven trading templates crafted by expert traders. Just
            select, deploy, and let automation do the rest — no coding needed.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-[15px] font-medium text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <img
              src={strategiesImg}
              alt="Cryptomaty strategy templates preview"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
