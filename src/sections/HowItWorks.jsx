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
            Simplify Your Automation
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
            Turn Complex Workflows
            <br className="hidden sm:block" />
            into Simple Steps.
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-neutral-500">
            Three straightforward steps to connect your data, automate trades, and track performance with your algo trading platform.
            
          </p>
        </div>

        {/* ===== 3 cards ===== */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <StepCard
            step={1}
            title="Build Your Strategy"
            desc="Integrate your data and create strategies in minutes no coding or heavy setup needed with our algo strategy builder."
            img={stepImg1}
            alt="Create Strategy bar chart"
          />

          <StepCard
            step={2}
            title="Backtest & Optimize"
            desc=" Test your strategies with smart triggers and recurring automation, so you can focus on refining what works best with backtesting tools."
            img={stepImg2}
            alt="Backtest Strategy waveform"
          />

          <StepCard
            step={3}
            title="Deploy & Monitor"
            desc="Deploy your strategies live, track real-time performance, and optimize workflow with actionable insights from our real-time trading system."
            img={stepImg3}
            alt="Deployed Strategy gauge"
          />
        </div>
      </div>
    </section>
  );
}
