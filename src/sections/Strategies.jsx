// src/sections/Strategies.jsx
import React from "react";
import { Link } from "react-router-dom";

import strategyVideo from "../assets/strategyvideo.webm"; // ✅ new video

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
            Strategies Templates
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Smarter Scheduling. <br /> Better Planning.
          </h2>

          <p className="mt-4 text-neutral-500 max-w-lg">
            Find trading templates created by experts to win. Choose one, turn it on, and leave the rest to automation. No coding necessary.
          </p>

          <div className="mt-8">
            <Link
              to="/features"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[48px]">
            <video
              src={strategyVideo}
              className="w-full h-auto object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
