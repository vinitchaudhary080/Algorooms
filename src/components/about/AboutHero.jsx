// src/sections/AboutHero.jsx
import React from "react";
import powerBlueIcon from "@/assets/about/power-blue.png"; // 👈 आपका नीला आइकन (inline icon)

export default function AboutHero() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-20 scroll-mt-nav">
      <div className="container-xxl">
        {/* ===== Top: Badge ===== */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 ring-2 ring-[#F6F6F9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
            Version 2.0
          </span>
        </div>

        {/* ===== Heading ===== */}
        <div className="mt-5 text-center">
          <h1 className="text-[40px] leading-[1.12] sm:text-6xl font-black  font-semibold tracking-tight text-neutral-900">
            Power{" "}
            <span className="inline-flex items-center align-middle">
              <img
                src={powerBlueIcon}
                alt=""
                className="mx-1 inline-block h-16 w-16 sm:h-24 sm:w-24 drop-shadow-[0_8px_18px_rgba(59,102,246,0.35)]"
                draggable="false"
              />
            </span>
            up <span className="text-[#3B66F6]">your</span>
            <br />
            Trading and Profit.
          </h1>

          {/* Subtext */}
          <p className="mt-4 max-w-xl mx-auto text-[15px] text-neutral-600">
            Stay up to date with the latest improvements, features,
            and updates — all in one place.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#get-started"
              className="
                inline-flex items-center gap-2
                rounded-2xl
                px-5 py-3
                text-[15px] font-semibold text-white
                bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
                shadow-[0_10px_30px_rgba(40,100,223,0.35)]
                border-3 border-[#6C88FF]
                transition-all
                hover:shadow-[0_14px_36px_rgba(40,100,223,0.45)]
              "
            >
              Get started →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
