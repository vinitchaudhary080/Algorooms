// src/sections/Pricing.jsx
import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

const BILLING = ["monthly", "quarterly", "yearly"];

// 💰 Pricing data - per day
// Cycle / Free Plan / Unlimited Plan (per day) / Limited Plan (per day)
// Monthly:   0 / 81 / 48
// Quarterly: 0 / 69 / 41
// Yearly:    0 / 58 / 34
const PRICES = {
  monthly: { free: 0, unlimited: 81, limited: 48 },
  quarterly: { free: 0, unlimited: 69, limited: 41 },
  yearly: { free: 0, unlimited: 58, limited: 34 },
};

// ✅ Features per plan - fill later if needed
const FEATURES = [
  // { label: "Example feature", free: true, unlimited: true, limited: false },
];

export default function Pricing() {
  const [billing, setBilling] = useState("quarterly");
  const price = PRICES[billing];

  const pill = (key, label) => (
    <button
      key={key}
      onClick={() => setBilling(key)}
      className={[
        "relative inline-flex items-center justify-center h-9 px-4 text-[13px] font-semibold rounded-full transition",
        billing === key
          ? "bg-white text-neutral-900 shadow-sm ring-2 ring-[#3B66F6]/20"
          : "text-neutral-700 hover:text-neutral-900",
      ].join(" ")}
    >
      {label}
    </button>
  );

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-[#F8F9FB] to-white py-20 sm:py-28 scroll-mt-nav"
    >
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="block w-fit mx-auto rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3B66F6]" /> Price Listing
          </span>

          {/* Billing tabs */}
          <div className="mt-6 relative w-fit mx-auto sm:pr-8">
            <div className="inline-flex items-center rounded-full bg-neutral-100 p-1 ring-2 ring-[#F6F6F9]">
              {pill("monthly", "Monthly")}
              {pill("quarterly", "Quarterly")}
              {pill("yearly", "Yearly")}
            </div>

            {/* Dynamic badges */}
            {billing === "quarterly" && (
              <span className="absolute sm:-right-3 sm:-top-2 top-[110%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 inline-flex items-center rounded-full bg-[#3B66F6] text-white text-[11px] font-semibold px-2.5 py-1 shadow-sm ring-1 ring-black/5 transition-all duration-300">
                Optimized pricing
              </span>
            )}
            {billing === "yearly" && (
              <span className="absolute sm:-right-3 sm:-top-2 top-[110%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 inline-flex items-center rounded-full bg-[#3B66F6] text-white text-[11px] font-semibold px-2.5 py-1 shadow-sm ring-1 ring-black/5 transition-all duration-300">
                Best value plan
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          <PlanCard
            title="Free Plan"
            subtitle="Start experimenting with no cost."
            price={price.free}
            billing={billing}
            features={FEATURES}
            planKey="free"
            ctaText="Choose Free Plan"
          />

          <PlanCard
            title="Unlimited Plan"
            subtitle="Best for active traders running multiple strategies."
            price={price.unlimited}
            billing={billing}
            features={FEATURES}
            planKey="unlimited"
            featured
            ctaText="Choose Unlimited"
          />

          <PlanCard
            title="Limited Plan"
            subtitle="For traders testing live deployment with limits."
            price={price.limited}
            billing={billing}
            features={FEATURES}
            planKey="limited"
            ctaText="Choose Limited"
          />
        </div>
      </div>
    </section>
  );
}

// Single Plan Card
function PlanCard({
  title,
  subtitle,
  price,
  billing,
  features,
  planKey,
  ctaText,
  featured = false,
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-white p-6 sm:p-7 ring-5 ring-[#F6F6F9]",
        featured
          ? "shadow-[0_24px_70px_rgba(59,102,246,0.18)]"
          : "shadow-[0_12px_40px_rgba(0,0,0,0.05)]",
      ].join(" ")}
    >
      <div className="mb-3 text-[15px] font-semibold text-neutral-900">{title}</div>
      <div className="text-sm text-neutral-500">{subtitle}</div>

      {/* Pricing */}
      <div className="mt-5 flex items-end gap-1">
        <div className="text-4xl font-extrabold tracking-tight text-neutral-900">
          ₹{price}
        </div>
        <div className="pb-1 text-neutral-500 text-sm">/day</div>
    </div>
      <div className="text-xs text-neutral-500">
        Billed{" "}
        {billing === "monthly"
          ? "monthly"
          : billing === "quarterly"
          ? "quarterly"
          : "yearly"}
      </div>

      {/* CTA */}
      <button
        className={[
          "mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-semibold transition",
          "text-white shadow-[0_10px_30px_rgba(40,100,223,0.35)]",
          "bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA] hover:opacity-95",
        ].join(" ")}
      >
        {ctaText} <ArrowRight className="h-4 w-4" />
      </button>

      {/* Features */}
      {features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((f) => {
            const ok = f[planKey];
            return (
              <li key={f.label} className="flex items-start gap-3 text-sm">
                <span
                  className={[
                    "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1",
                    ok
                      ? "bg-[#3B66F6]/10 text-[#3B66F6] ring-[#3B66F6]/30"
                      : "bg-neutral-100 text-neutral-400 ring-neutral-300/60",
                  ].join(" ")}
                >
                  {ok ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <X className="h-3.5 w-3.5" />
                  )}
                </span>
                <span className={ok ? "text-neutral-800" : "text-neutral-500"}>
                  {f.label}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
