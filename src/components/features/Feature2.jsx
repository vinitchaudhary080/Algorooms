// src/components/features/Feature2.jsx
import React from "react";
import augustUpdateImg from "@/assets/features/august-update.png"; // <- tum yeh image provide karoge

export default function Feature2() {
  return (
    <section className="bg-[#F6F6F8] py-14 sm:py-16">
      <div className="container-xxl">
        <div className="grid gap-8 md:grid-cols-12">
          {/* LEFT: Meta */}
          <aside className="md:col-span-3">
            <h3 className="text-[18px] font-extrabold text-neutral-900">
              CNC & BTST Trading
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
              Execute positional and short-term trades seamlessly with speed and
              accuracy using our algo trading platform.
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
                  alt="CNC & BTST Trading"
                  className="w-full h-[180px] sm:h-[420px] object-cover ring-5 ring-[#F6F6F9]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* intro copy */}
            <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
              Manage your CNC (Cash and Carry) and BTST (Buy Today Sell Tomorrow)
              trades effortlessly with our advanced algo trading tools. Execute
              with precision, monitor positions in real time, and never miss key
              opportunities.
            </p>

            {/* Highlights */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">Core Highlights</h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Automated Orders:</span> Place CNC and
                  BTST trades instantly using our order execution software.
                </li>
                <li>
                  <span className="font-medium">Smart Triggers:</span> Set custom rules
                  for trade entry and exit with algorithmic trading automation.
                </li>
                <li>
                  <span className="font-medium">Portfolio Updates:</span> Track performance
                  and open positions in real time with our trading dashboard.
                </li>
                <li>
                  <span className="font-medium">Market Alerts:</span> Receive instant
                  notifications for price movements and trading opportunities.
                </li>
                <li>
                  <span className="font-medium">Seamless Integration:</span> Connect
                  broker accounts quickly for smooth and efficient workflows.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
