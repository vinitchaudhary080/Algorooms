// src/sections/HeroShowcase.jsx
import React from "react";
import heroVideo from "../assets/hero-video.webm"; // 👈 apna video import

export default function HeroShowcase() {
  return (
    <section className="relative bg-white scroll-mt-nav">
      <div className="container-xxl">
        {/* Screenshot frame */}
        <div className="mt-10 sm:mt-4">
          <div className="relative mx-auto max-w-[1200px]">
            {/* Top glow */}
            <div className="pointer-events-none absolute -inset-x-10 -top-10 h-24 bg-gradient-to-b from-black/[0.06] to-transparent blur-2xl" />

            {/* Hero video */}
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="block w-full h-auto rounded-xl"
            />

            {/* Soft bottom shadow (optional) */}
            {/* <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 blur-2xl bg-black/5" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
