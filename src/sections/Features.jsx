// src/sections/Features.jsx
import React from "react";
import growthIcon from "@/assets/growth-icon.png"; // ✅ heading icon (you'll provide)
import feature1 from "@/assets/feature1.png";     // ✅ left card image
import feature2 from "@/assets/feature2.png";     // ✅ center card image
import feature3 from "@/assets/feature3.png";     // ✅ right card image

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-transparent py-24 pt-0 pb-6 sm:py-32 scroll-mt-nav"
    >
      <div className="container-xxl">
        {/* ================== Section Heading ================== */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h2 className="text-4xl sm:text-5xl font-semibold  leading-tight text-neutral-900 tracking-tight">
            <span className="block">Stop Switching Tools.</span>

            <span className="mt-1.5 block">
              <span className="inline-flex flex-wrap items-center justify-center gap-2 whitespace-normal">
                <span>Start Compounding</span>
                <span className="inline-flex items-center">
                  <img
                    src={growthIcon}
                    alt=""
                    className="
                      h-16 w-16 sm:h-24 sm:w-24
                      mx-1 sm:mx-2
                      sm:translate-y-[-4px]
                      drop-shadow-[0_6px_14px_rgba(59,102,246,0.35)] sm:drop-shadow-[0_10px_25px_rgba(59,102,246,0.4)]
                    "
                    draggable="false"
                  />
                  <span className="text-[#3B66F6]">Growth.</span>
                </span>
              </span>
            </span>
          </h2>
        </div>

        {/* ================== Features Grid ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* -------- Card 1 -------- */}
          <div className="flex flex-col items-center text-center p-8">
            <div
              className="
      w-[100%] sm:w-full
      max-w-[640px]
      rounded-2xl 
      transition-all duration-300
    "
            >
              <img
                src={feature1}
                alt="Strategy Templates"
                className="
        w-full h-auto object-contain
        scale-[1.1] sm:scale-[1.05]
        transition-transform duration-500
      "
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-neutral-900">
              RA-Based Strategy Templates
            </h3>
            <p className="mt-3 text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
              Design, test, and refine trading models instantly with no-code strategy builder templates  simplifying algorithm creation without complex coding.
            </p>
          </div>

          {/* -------- Card 2 -------- */}
          <div className="flex flex-col items-center text-center p-8">
            <div
              className="
      w-[100%] sm:w-full
      max-w-[640px]
      rounded-2xl overflow-hidden
      transition-all duration-300
    "
            >
              <img
                src={feature2}
                alt="Seamless Collaboration"
                className="
        w-full h-auto object-contain
        scale-[1.1] sm:scale-[1.05]
        transition-transform duration-500
      "
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-neutral-900">
              Seamless Collaboration
            </h3>
            <p className="mt-3 text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
              Coordinate, communicate, and execute without delays. Real-time tracking and team sync make collaboration seamless across every trading strategy on our algo trading platform.
            </p>
          </div>

          {/* -------- Card 3 -------- */}
          <div className="flex flex-col items-center text-center p-8">
            <div
              className="
      w-[100%] sm:w-full
      max-w-[640px]
      rounded-2xl overflow-hidden
      transition-all duration-300
    "
            >
              <img
                src={feature3}
                alt="Deployed Strategy"
                className="
        w-full h-auto object-contain
        scale-[1.1] sm:scale-[1.05]
        transition-transform duration-500
      "
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-neutral-900">
              From Idea to Execution
            </h3>
            <p className="mt-3 text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed">
              Turn your strategies into action  create, test, and automate every trade with intelligent backtesting and real-time deployment.

            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
