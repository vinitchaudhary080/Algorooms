// src/sections/HowItWorks.jsx
import React from "react";
import stepImg1 from "@/assets/how-step-1.png"; // 📊 bar chart image
import stepImg2 from "@/assets/how-step-2.png"; // 📈 waveform image
import stepImg3 from "@/assets/how-step-3.png"; // 🟦 gauge image

function StepCard({ step, title, desc, img, alt }) {
  return (
    <div className="relative rounded-[28px] bg-white ring-5 ring-[#F6F6F9] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 sm:p-7">
      {/* illustration */}
      <div className="mb-6 rounded-2xl overflow-hidden bg-white">
        <img
          src={img}
          alt={alt}
          className="w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* step pill */}
      <span className="inline-flex items-center rounded-full bg-[#3B66F6] text-white px-3 py-1 text-xs font-semibold shadow-[0_10px_25px_rgba(59,102,246,0.35)] ring-1 ring-black/5">
        Step {step}
      </span>

      {/* copy */}
      <h3 className="mt-3 text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{desc}</p>

      {/* soft edge highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/70" />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-transparent py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* ===== centered heading block ===== */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3B66F6]" />
            How it works
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
            Turn complex workflows
            <br className="hidden sm:block" />
            into simple steps.
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-neutral-500">
            Three simple steps to connect your data, automate tasks,
            <br className="hidden sm:block" /> and track progress.
          </p>
        </div>

        {/* ===== 3 cards ===== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <StepCard
            step={1}
            title="Create Strategy"
            desc="Integrate your favorite tools and import data in minutes — no coding or heavy setup needed."
            img={stepImg1}
            alt="Create Strategy bar chart"
          />

          <StepCard
            step={2}
            title="Backtest Strategy"
            desc="Set up smart triggers and recurring tasks so your team can focus on what matters most."
            img={stepImg2}
            alt="Backtest Strategy waveform"
          />

          <StepCard
            step={3}
            title="Deployed Strategy"
            desc="Monitor performance in real-time and optimize your workflow with clear, actionable insights."
            img={stepImg3}
            alt="Deployed Strategy gauge"
          />
        </div>
      </div>
    </section>
  );
}
