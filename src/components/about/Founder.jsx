// src/sections/Founder.jsx
import React from "react";
import founderImg from "@/assets/about/founder.png"; // ← image ka path update kar lena

export default function Founder() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl">
        {/* Outer container with ring & rounded edges */}
        <div className="rounded-2xl ring-5 ring-[#F6F6F9] bg-white/50 p-3 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* ===== Left Image ===== */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={founderImg}
                alt="Founder at workspace"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* ===== Right Card ===== */}
            <div className="bg-white rounded-2xl ring-5 ring-[#F6F6F9] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              {/* Badge */}
              <span className="inline-flex items-center rounded-full bg-[#EEF2FF] text-[#3B66F6] px-2.5 py-1 text-[11px] font-semibold">
                Founder
              </span>

              {/* Heading */}
              <h2 className="mt-3 text-2xl sm:text-[26px] font-semibold leading-snug text-neutral-900">
                A Note from the Founder
              </h2>

              {/* Paragraphs */}
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-600">
                When we started Algorooms, our goal was simple: make trading easier, faster, and smarter for everyone. No confusion. No extra steps. Just clear tools and insights so you can trade confidently.
              </p>

              <p className="mt-4 text-[14px] leading-relaxed text-neutral-600">
                But Algorooms is more than just a platform it’s a community of thinkers, doers, and game-changers. A place where ideas spark, challenges turn into opportunities, and every voice matters. Your trust and support are what keep this vision alive.
              </p>

              {/* Quote block */}
              <blockquote className="mt-6 sm:mt-52 rounded-xl bg-white/70 p-4 sm:p-5 ring-1 ring-neutral-200">
                <p className="text-[15px] sm:text-[16px] font-semibold text-neutral-900">
                  “We’re constantly evolving building new features, listening to your feedback, and making sure Algorooms grows with the needs of traders like you. The journey has just begun, and the best part? We’re in it together, aiming higher, trading smarter, and winning bigger.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
