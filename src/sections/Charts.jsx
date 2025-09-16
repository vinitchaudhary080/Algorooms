// src/sections/Charts.jsx
import React from "react";
import { Link } from "react-router-dom";
// import chartsImg from "../assets/charts.png";  // ❌ not needed anymore
import backtestVideo from "../assets/backtestvideo.webm"; // ✅ new video

export default function Charts() {
  return (
    <section id="charts" className="relative bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Video */}
        <div className="relative order-1 md:order-none">
          <div className="relative overflow-hidden rounded-[48px]">
            <video
              src={backtestVideo}
              className="w-full h-auto object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4 text-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Insightful analytics
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Test Before You Trade. <br /> Smarter Backtests & Reports.
          </h2>

          <p className="mt-4 text-neutral-500 max-w-lg">
            Run historical simulations, analyze detailed reports, and perfect your strategies using real market data. Minimize risks, maximize entries and exits, and trade with confidence supported by insights that matter.
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
      </div>
    </section>
  );
}
