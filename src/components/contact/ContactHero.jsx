// src/components/contact/ContactHero.jsx
import React from "react";
import powerBlueIcon from "@/assets/about/power-blue.png"; // 👈 tum apna blue icon yahan rakhna

export default function ContactHero() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 ring-2 ring-[#F6F6F9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
          Contact
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-[40px] leading-[1.12] sm:text-6xl font-black  font-semibold  leading-tight tracking-tight text-neutral-900">
          Power{" "}
          <span className="inline-flex items-center align-middle">
            <img
              src={powerBlueIcon}
              alt=""
              className="mx-1 inline-block h-16 w-16 sm:h-24 sm:w-24 translate-y-[-2px] drop-shadow-[0_8px_18px_rgba(59,102,246,0.35)]"
              draggable="false"
            />
          </span>
          up <span className="text-[#3B66F6]">your</span>
          <br />
          <span className="text-neutral-400">Trading</span>{" "}
          <span className="text-neutral-900">and Profit.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-xl mx-auto text-[14.5px] sm:text-[15px] text-neutral-600">
          Stay up to date with the latest improvements, features,
          <br className="hidden sm:block" />
          and updates — all in one place.
        </p>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="https://wa.me/917049850866?text=Hi!%20I%20want%20to%20chat%20with%20Algorooms."
            target="_blank"
            rel="noopener noreferrer"
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
            Chat Now →
          </a>
        </div>
      </div>
    </section>
  );
}
