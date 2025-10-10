// src/components/pricing/PricingHero.jsx
import React from "react";
import planIcon from "@/assets/power-icon.png"; // 👈 tum apna blue square icon yahan rakhna

export default function PricingHero() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-20 scroll-mt-nav">
      <div className="container-xxl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm ring-1 ring-black/5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
          Pricing
        </span>

        {/* Heading */}
        <h1 className="mt-4 text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-tight tracking-tight text-neutral-900">
          Choose the{" "}
          <span className="inline-flex items-center align-middle">
            {/* inline blue icon before “plan” */}
            <img
              src={planIcon}
              alt=""
              className="mx-1 inline-block h-6 w-6 sm:h-7 sm:w-7 translate-y-[-2px] drop-shadow-[0_8px_18px_rgba(59,102,246,0.35)]"
              draggable="false"
            />
            <span className="text-[#3B66F6]">plan</span>
          </span>{" "}
          that
          <br className="hidden sm:block" />
          fits your Budget.
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-xl mx-auto text-[14.5px] sm:text-[15px] text-neutral-600">
          Find the package that matches your needs —<br className="hidden sm:block" />
          with the flexibility to grow and scale anytime.
        </p>
      </div>
    </section>
  );
}
