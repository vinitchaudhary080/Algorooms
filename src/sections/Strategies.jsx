// src/sections/Strategies.jsx
import React from "react";
import { Link } from "react-router-dom";
import strategiesMock from "@/assets/strategies-left.png";

export default function Strategies() {
  return (
    <section
      id="strategies"
      className="relative  pt-14 pb-20 sm:py-28 scroll-mt-nav bg-gradient-to-b from-[#F8F9FB] to-white" 
    >
      <div className="container-xxl grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start"> {/* 👈 mobile gap smaller */}
        {/* ============= Left Image ============= */}
        <div className="relative -mt-2 sm:mt-0"> {/* 👈 pull image up a bit on mobile */}
          <div className="relative overflow-hidden ">
            <div className="p-1.5 sm:p-0"> {/* 👈 less inner padding on mobile */}
              <img
                src={strategiesMock}
                alt="Algorooms strategies dashboard"
                className="w-full h-auto object-contain rounded-[32px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ============= Right Content ============= */}
        <div className="max-w-xl md:ml-2">
          {/* badges row */}
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-white px-2 py-1 ring-2 ring-[#F6F6F9]">
            <span className="inline-flex items-center rounded-full bg-[#3B66F6] text-[#ffffff] px-3 py-1 text-xs font-semibold">
              Strategies
            </span>
            <span className="inline-flex items-center rounded-full text-neutral-800 px-3 py-1 text-xs font-semibold">
              All-in-one dashboard
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold  tracking-tight leading-tight text-neutral-900">
            Manage everything
            <br /> in one place.
          </h2>

          <p className="mt-4 text-neutral-600">
            Keep projects, data, and communication together in a single, organized
            dashboard — so decisions are faster and distractions are fewer.
          </p>

          <hr className="mt-8 mb-6 border-neutral-200/70" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-[15px]">
            {["Slack", "Notion", "Zapier", "Google Sheets"].map((item) => (
              <div key={item} className="inline-flex items-center gap-3 text-neutral-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3B66F6] shadow-sm ring-1 ring-black/5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
