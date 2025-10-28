// src/components/features/Feature3.jsx
import React from "react";
import augustUpdateImg from "@/assets/features/august-update.png"; // <- tum yeh image provide karoge

export default function Feature3() {
  return (
    <section className="bg-[#F6F6F8] py-14 sm:py-16">
      <div className="container-xxl">
        <div className="grid gap-8 md:grid-cols-12">
          {/* LEFT: Meta */}
          <aside className="md:col-span-3">
            <h3 className="text-[18px] font-extrabold text-neutral-900">
              Easy Potential Trading
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
              Identify high-probability trades and reduce manual effort with
              intelligent automation and trading bot support.
            </p>
            <div className="mt-4 text-[12px] text-neutral-500">
              Aug 23, 2025
            </div>
          </aside>

          {/* RIGHT: Content */}
          <div className="md:col-span-9">
            {/* top image card */}
            <div className="rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={augustUpdateImg}
                  alt="Easy Potential Trading"
                  className="w-full h-[180px] sm:h-[420px] object-cover ring-5 ring-[#F6F6F9]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* intro copy */}
            <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
              Unlock smarter trading opportunities with intelligent automation.
              Our algo system helps identify high-probability setups, minimize
              manual effort, and ensure faster, more accurate trade execution.
            </p>

            {/* Highlights */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">
                Core Highlights
              </h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Opportunity Scanner:</span> Monitor
                  multiple instruments with real-time market analysis algorithms.
                </li>
                <li>
                  <span className="font-medium">Custom Signals:</span> Receive alerts
                  for price movements, trend changes, and strategy triggers.
                </li>
                <li>
                  <span className="font-medium">Error Reduction:</span> Automate
                  repetitive tasks for precise execution using advanced trading
                  bots.
                </li>
                <li>
                  <span className="font-medium">Strategy Suggestions:</span> Get
                  AI-assisted recommendations for optimized trade setups.
                </li>
                <li>
                  <span className="font-medium">Quick Execution:</span> Capture
                  profitable opportunities within seconds, directly from your
                  dashboard.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
