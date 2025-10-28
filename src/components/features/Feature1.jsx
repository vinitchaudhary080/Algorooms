// src/components/features/Feature1.jsx
import React from "react";
import augustUpdateImg from "@/assets/features/august-update.png"; // <- tum yeh image provide karoge

export default function Feature1() {
  return (
    <section className="bg-[#F6F6F8] py-14 sm:py-16">
      <div className="container-xxl">
        <div className="grid gap-8 md:grid-cols-12">
          {/* LEFT: Meta */}
          <aside className="md:col-span-3">
            <h3 className="text-[18px] font-extrabold text-neutral-900">
              Trade Execution with TradingView
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
              Execute trades directly from integrated charts with fast, reliable
              performance and real-time updates using our algo trading software.
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
                  alt="TradingView Integration"
                  className="w-full h-[180px] sm:h-[420px] object-cover ring-5 ring-[#F6F6F9]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* intro copy */}
            <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
              Execute trades seamlessly within integrated TradingView charts.
              Experience ultra-fast, reliable performance and real-time updates
              powered by our algorithmic trading engine.
            </p>

            {/* Added */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">Core Highlights</h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Real-Time Orders:</span> Place and modify
                  trades instantly using our advanced order execution software.
                </li>
                <li>
                  <span className="font-medium">Integrated Charts:</span> Analyze market
                  trends and execute trades within a real-time trading system.
                </li>
                <li>
                  <span className="font-medium">Precision Execution:</span> Reduce errors
                  with automated, algorithm-driven trade handling.
                </li>
                <li>
                  <span className="font-medium">Multi-Segment Trading:</span> Handle
                  equities, options, and futures seamlessly from one platform.
                </li>
                <li>
                  <span className="font-medium">Instant Feedback:</span> View order
                  confirmations and updates live, without delays.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
