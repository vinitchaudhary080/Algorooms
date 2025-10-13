// src/components/pricing/PriceCompare.jsx
import React from "react";

// 🔹 top tiles icons
import starterIcon from "@/assets/pricing/starter.png";
import proIcon from "@/assets/pricing/pro.png";
import enterpriseIcon from "@/assets/pricing/starter.png";

// 🔹 tick / cross
import checkIcon from "@/assets/pricing/check.png";
import crossIcon from "@/assets/pricing/cross.png";

export default function PriceCompare() {
  const data = [
    { label: "Number of websites", values: ["1", "Up to 10", "Unlimited"] },
    { label: "Monthly pageviews", values: ["Up to 10,000", "Up to 100,000", "Unlimited"] },
    { label: "Support", values: ["Community", "Priority", "Dedicated"] },
    { label: "Image optimization", values: [true, false, true] },
    { label: "Code optimization", values: [false, true, true] },
    { label: "Global CDN", values: [false, false, true] },
    { label: "Google PageSpeed Integration", values: [false, true, true] },
    { label: "Competitor comparison", values: [false, "Up to 3 sites", "Unlimited"] },
    { label: "Analytics dashboard", values: ["Basic", "Advanced", "Advanced"] },
    { label: "Mobile vs Desktop insights", values: [false, false, true] },
    { label: "Team members", values: [false, "1", "Unlimited"] },
    { label: "White-label reporting", values: [false, false, true] },
    { label: "Dedicated account manager", values: [false, true, true] },
    { label: "Real-time alerts", values: [false, false, true] },
  ];

  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-24">
      <div className="container-xxl">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_auto] items-center gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 ring-2 ring-[#F6F6F9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
              Compare Plans
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
              See how each plan <br className="hidden sm:block" /> stacks up.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-[260px]">
            Compare features side by side to make the best choice for your goals.
            <br />
            <a href="#" className="font-semibold text-neutral-900">Get started now</a>
          </p>
        </div>

        {/* ===== MOBILE SCROLL WRAPPER (desktop unaffected) ===== */}
        <div className="-mx-4 sm:mx-0">
          <div className="overflow-x-auto">
            {/* inner width so mobile can scroll sideways */}
            <div className="min-w-[760px]">
              {/* Table shell */}
              <div className="overflow-hidden rounded-2xl bg-white ring-2 ring-[#F6F6F9] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                {/* Plan headers */}
                <div className="grid grid-cols-[180px_repeat(3,1fr)] border-b border-neutral-200">
                  <div className="px-4 py-6" />
                  {[
                    { icon: starterIcon, title: "Starter", sub: "Everything you need to launch." },
                    { icon: proIcon, title: "Pro", sub: "Advanced tools for growing businesses." },
                    { icon: enterpriseIcon, title: "Enterprise", sub: "Custom solutions for large teams." },
                  ].map((p, i) => (
                    <div key={i} className="py-5 px-3">
                      <div className="rounded-2xl bg-[#F6F6F9] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] px-4 sm:px-5 py-3 sm:py-4 text-center">
                        <img
                          src={p.icon}
                          alt=""
                          className="mx-auto mb-2 h-10 w-10 sm:h-16 sm:w-16 object-contain"
                        />
                        <h3 className="text-[14px] sm:text-[15px] font-semibold text-neutral-900 leading-tight break-words">
                          {p.title}
                        </h3>
                        <p className="text-[11.5px] sm:text-xs text-neutral-500 leading-snug">
                          {p.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rows (striped) */}
                <div className="divide-y divide-neutral-200">
                  {data.map((row, idx) => {
                    const valueBg = idx % 2 === 0 ? "bg-white" : "bg-[#FBFBFD]";
                    const labelBg = idx % 2 === 0 ? "bg-[#F7F7FA]" : "bg-[#F0F1F6]";

                    return (
                      <div
                        key={row.label}
                        className={`grid grid-cols-[180px_repeat(3,1fr)] items-center text-sm sm:text-[15px] ${valueBg}`}
                      >
                        {/* label cell (fixed width so mobile me wrap clean rahe) */}
                        <div className={`py-4 px-4 font-medium text-neutral-800 ${labelBg}`}>
                          {row.label}
                        </div>

                        {/* values */}
                        {row.values.map((val, i) => (
                          <div key={i} className="py-4 text-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <img
                                  src={checkIcon}
                                  alt="Included"
                                  className="mx-auto h-4 w-4 object-contain"
                                />
                              ) : (
                                <img
                                  src={crossIcon}
                                  alt="Not included"
                                  className="mx-auto h-3.5 w-3.5 opacity-60"
                                />
                              )
                            ) : (
                              <span className="text-neutral-700">{val}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* /table shell */}
            </div>
          </div>
        </div>
        {/* /mobile scroll wrapper */}
      </div>
    </section>
  );
}
