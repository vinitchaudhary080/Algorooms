// src/components/pricing/PriceCompare.jsx
import React from "react";

// top tiles icons
import starterIcon from "@/assets/pricing/starter.png";
import proIcon from "@/assets/power-icon.png";
import enterpriseIcon from "@/assets/pricing/starter.png";

// tick cross
import checkIcon from "@/assets/pricing/check.png";
import crossIcon from "@/assets/pricing/cross.png";

export default function PriceCompare() {
  const data = [
    { label: "Backtest Credits", values: ["50", "1500", "500"] },
    { label: "Strategy Creation", values: ["5", "50", "25"] },
    { label: "Live and Forward Deployment", values: [false, "20", "5"] },
    { label: "Allowed Brokers", values: [false, "Any 5 brokers", "Any 3 brokers"] },
    { label: "Index Futures", values: [false, true, true] },
    { label: "Index Options", values: [false, true, true] },
    { label: "Equity Cash Trading", values: [false, true, true] },
    { label: "Equity Options", values: [false, true, true] },
    { label: "Equity Futures", values: [false, true, true] },
    { label: "Portfolio Backtesting", values: [false, "Up to 10 strategies", "Up to 2 strategies"] },
  ];

  const plans = [
    {
      icon: starterIcon,
      title: "Free Plan",
      sub: "Perfect to start testing.",
      highlight: false,
    },
    {
      icon: proIcon,
      title: "Unlimited Plan",
      sub: "For serious and high volume traders.",
      highlight: true, // highlighted plan
    },
    {
      icon: enterpriseIcon,
      title: "Limited Plan",
      sub: "Great for growing traders.",
      highlight: false,
    },
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
            <a href="#" className="font-semibold text-neutral-900">
              Get started now
            </a>
          </p>
        </div>

        <div className="-mx-4 sm:mx-0">
          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="overflow-hidden rounded-2xl bg-white ring-2 ring-[#F6F6F9] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

                {/* Header Plans */}
                <div className="grid grid-cols-[180px_repeat(3,1fr)] border-b border-neutral-200">
                  <div className="px-4 py-6 text-sm font-semibold text-neutral-800 bg-[#F7F7FA]">
                    Features
                  </div>

                  {plans.map((p, i) => (
                    <div key={i} className="py-5 px-3">
                      <div
                        className={`relative rounded-2xl px-4 sm:px-5 pt-6 pb-3 sm:pt-7 sm:pb-4 text-center transition-all duration-300
                        ${
                          p.highlight
                            ? "bg-white ring-2 ring-[#3B66F6] shadow-[0_12px_34px_rgba(59,102,246,0.25)] scale-[1.03]"
                            : "bg-[#F6F6F9] ring-1 ring-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                        }`}
                      >

                        {/* Recommended Tag inside the card */}
                        {p.highlight && (
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#3B66F6] text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-md">
                            Recommended
                          </div>
                        )}

                        {/* Icon */}
                        <img
                          src={p.icon}
                          alt=""
                          className={`mx-auto mb-2 h-10 w-10 sm:h-16 sm:w-16 object-contain ${
                            p.highlight ? "scale-110" : ""
                          }`}
                        />

                        {/* Title */}
                        <h3
                          className={`text-[14px] sm:text-[15px] font-semibold leading-tight break-words 
                          ${p.highlight ? "text-[#3B66F6]" : "text-neutral-900"}`}
                        >
                          {p.title}
                        </h3>

                        {/* Subtext */}
                        <p
                          className={`text-[11.5px] sm:text-xs leading-snug 
                          ${p.highlight ? "text-neutral-700" : "text-neutral-500"}`}
                        >
                          {p.sub}
                        </p>

                      </div>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                <div className="divide-y divide-neutral-200">
                  {data.map((row, idx) => {
                    const valueBg = idx % 2 === 0 ? "bg-white" : "bg-[#FBFBFD]";
                    const labelBg = idx % 2 === 0 ? "bg-[#F7F7FA]" : "bg-[#F0F1F6]";

                    return (
                      <div
                        key={row.label}
                        className={`grid grid-cols-[180px_repeat(3,1fr)] items-center text-sm sm:text-[15px] ${valueBg}`}
                      >
                        <div className={`py-4 px-4 font-medium text-neutral-800 ${labelBg}`}>
                          {row.label}
                        </div>

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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
