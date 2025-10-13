// src/sections/CounterSection.jsx
import React from "react";
import teamImg from "@/assets/about/team.png"; // 👈 apni image ka sahi path

/* ---------- Single Stat (static) ---------- */
function Stat({ value, suffix = "", label }) {
  return (
    <div className="text-center">
      <div className="text-[32px] sm:text-[40px] font-bold text-neutral-900 tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-neutral-500">{label}</div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function CounterSection() {
  return (
    <section className="bg-[#F6F6F8] py-8 sm:py-16 scroll-mt-nav">
      <div className="container-xxl">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={teamImg}
            alt="Team working"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Stats (static) */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value="2010" label="Year founded" />
          <Stat value="15" suffix="+" label="Broker" />
          <Stat value="25" suffix="K" label="Users" />
          <Stat value="25" suffix="K" label="Users" />
        </div>
      </div>
    </section>
  );
}
