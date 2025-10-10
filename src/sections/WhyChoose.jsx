// src/sections/WhyChoose.jsx
import React from "react";
import {
  Settings2,
  Zap,
  ClipboardList,
  BarChart2,
  FileChartColumn,
  ChevronRight,
  Check,
  X,
} from "lucide-react";

const FEATURES = [
  { label: "Customised Strategy", icon: Settings2 },
  { label: "1-Click Deployed", icon: Zap },
  { label: "Strategies Template", icon: ClipboardList },
  { label: "Backtest", icon: BarChart2 },
  { label: "Broker-wise Report", icon: FileChartColumn },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-gradient-to-b from-[#F8F9FB] to-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT SIDE */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
            <span className="h-2 w-2 rounded-full bg-[#3B66F6]" />
            Why Algorooms stands out
          </div>

          <h2 className="mt-4 text-[34px] sm:text-5xl font-semibold  leading-tight tracking-tight text-neutral-900">
            The better way to <br /> launch and grow.
          </h2>

          <p className="mt-4 max-w-md text-neutral-600">
            All-in-one setup, no hidden fees, and smooth customization — everything
            you need to launch faster.
          </p>

          <div className="mt-6">
           <a
  href="#"
  className="
    mt-5
    inline-flex items-center gap-2
    rounded-2xl
    px-5 py-3
    text-[15px] font-semibold text-white
    bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
    shadow-[0_10px_30px_rgba(40,100,223,0.35)]
    border-2 border-[#6C88FF]
    transition-all duration-300
    hover:shadow-[0_14px_36px_rgba(40,100,223,0.45)]
    hover:scale-[1.02]
  "
>
  Switch to Algorooms <ChevronRight className="h-4 w-4" />
</a>

          </div>
        </div>

        {/* RIGHT SIDE — Comparison Table */}
        <div className="relative">
          <div className="rounded-[28px] bg-white ring-5 ring-[#F6F6F9] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] items-center">
              {/* Feature list with icons */}
              <div className="py-6 pl-8 pr-3">
                <ul className="space-y-7">
                  {FEATURES.map((f) => {
                    const Icon = f.icon;
                    return (
                      <li
                        key={f.label}
                        className="flex items-center gap-3 text-[15px] text-neutral-800 font-medium"
                      >
                        <Icon className="h-[16px] w-[16px] text-neutral-700 shrink-0" />
                        {f.label}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Algorooms (✓ column) */}
              <div className="relative py-5 px-2">
                <div className="h-full w-[110px] sm:w-[130px] rounded-[22px] bg-gradient-to-b from-[#3B66F6] to-[#1E4CEA]
                                shadow-[0_18px_40px_rgba(59,102,246,0.35)] flex flex-col items-center justify-between py-6">
                  <div className="text-white text-sm font-semibold">Algorooms</div>
                  <ul className="flex flex-col items-center justify-center gap-7 mt-6">
                    {FEATURES.map((f) => (
                      <li
                        key={f.label}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30"
                      >
                        <Check className="h-[12px] w-[12px] text-white" strokeWidth={3} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Others (✕ column) */}
              <div className="py-6 pr-8 pl-3">
                <div className="text-neutral-900 text-sm font-semibold mb-6">Others</div>
                <ul className="flex flex-col gap-7">
                  {FEATURES.map((f) => (
                    <li
                      key={f.label}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-neutral-200"
                    >
                      <X className="h-[12px] w-[12px] text-neutral-500" strokeWidth={3} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
