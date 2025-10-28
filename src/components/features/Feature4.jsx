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
              Equity, Options & Futures Trading
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
              Trade across segments efficiently with a unified platform built for
              speed, accuracy, and multi-asset execution.
            </p>
            <div className="mt-4 text-[12px] text-neutral-500">Aug 23, 2025</div>
          </aside>

          {/* RIGHT: Content */}
          <div className="md:col-span-9">
            {/* top image card */}
            <div className="rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={augustUpdateImg}
                  alt="Equity, Options & Futures Trading"
                  className="w-full h-[180px] sm:h-[420px] object-cover ring-5 ring-[#F6F6F9]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* intro copy */}
            <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
              Experience seamless multi-segment trading with a high-performance algo
              system designed for equity, options, and futures markets. Execute with
              precision, manage strategies effortlessly, and track every move in real
              time.
            </p>

            {/* Highlights */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">
                Core Highlights
              </h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Multi-Segment Access:</span> Trade equities,
                  options, and futures on a single algo trading platform.
                </li>
                <li>
                  <span className="font-medium">Strategy Deployment:</span> Launch and manage
                  algorithmic trading strategies with minimal manual input.
                </li>
                <li>
                  <span className="font-medium">Real-Time Updates:</span> Stay informed on all
                  trades, orders, and market changes with a live trading dashboard.
                </li>
                <li>
                  <span className="font-medium">Performance Tracking:</span> Monitor P&amp;L and
                  overall portfolio performance instantly across all segments.
                </li>
                <li>
                  <span className="font-medium">Broker Integration:</span> Connect multiple
                  broker accounts for automated and synchronized trade execution.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
