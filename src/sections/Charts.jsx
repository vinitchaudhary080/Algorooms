// src/sections/Charts.jsx
import React from "react";
import chartsImg from "../assets/charts.png"; 
import { Link } from "react-router-dom";

export default function Charts() {
  return (
    <section id="charts" className="relative bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative order-1 md:order-none">
          <div className="relative overflow-hidden">
            <img
              src={chartsImg}
              alt="Unified trading charts preview"
              className="w-full h-auto object-contain"
              loading="lazy"
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
            All Your Charts. One <br /> Unified Trading View.
          </h2>

          <p className="mt-4 text-neutral-500 max-w-lg">
            Enable trading mode to monitor multiple charts, analyze trends,
            and make faster decisions — all from a single, clutter-free
            dashboard.
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
}
