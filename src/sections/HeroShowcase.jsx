// src/sections/HeroShowcase.jsx
import React from "react";
import dashboardImg from "../assets/dashboard-hero.png"; // 👈 direct import

export default function HeroShowcase() {
  return (
    <section className="relative bg-white ">
      <div className="container-xxl">
        {/* Heading + badge row */}
      
         

        {/* Screenshot frame */}
        <div className="mt-10 sm:mt-4">
          <div
            className="relative mx-auto max-w-[1200px]  
"
          >
            {/* Top glow */}
            <div className="pointer-events-none absolute -inset-x-10 -top-10 h-24 bg-gradient-to-b from-black/[0.06] to-transparent blur-2xl" />

            {/* Dashboard image */}
            <img
              src={dashboardImg}
              alt="Cryptomaty trading dashboard preview"
              className="block w-full h-auto"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1380px) 1400px, 100vw"
            />

            {/* Soft bottom shadow */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 blur-2xl bg-black/5" />
          </div>
        </div>

       
      </div>
    </section>
  );
}
