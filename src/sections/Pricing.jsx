// src/sections/Pricing.jsx
import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

const BILLING = ["monthly", "quarterly", "yearly"];

// 💰 Pricing data
const PRICES = {
  monthly: { starter: 79, pro: 129, business: 179 },
  quarterly: { starter: 69, pro: 109, business: 159 }, // Save 10%
  yearly: { starter: 59, pro: 99, business: 149 }, // Save 20%
};

// ✅ Features per plan
const FEATURES = [
  { label: "Core layout sections", starter: true, pro: true, business: true },
  { label: "Mobile-friendly design", starter: true, pro: true, business: true },
  { label: "Light & dark mode", starter: true, pro: true, business: true },
  { label: "Smooth basic animations", starter: true, pro: true, business: true },
  { label: "CMS & blog support", starter: false, pro: true, business: true },
  { label: "Commercial use rights", starter: false, pro: true, business: true },
  { label: "Built-in blog layouts", starter: false, pro: true, business: true },
  { label: "SEO-optimized pages", starter: false, pro: true, business: true },
  { label: "Smart navigation system", starter: false, pro: true, business: true },
  { label: "Priority support", starter: false, pro: false, business: true },
  { label: "Lifetime access", starter: false, pro: true, business: true },
];

export default function Pricing() {
  // ⬇️ Default quarterly selected
  const [billing, setBilling] = useState("quarterly");
  const price = PRICES[billing];

  // 💡 Pill button (Monthly / Quarterly / Yearly)
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
    <section id="pricing" className="relative bg-gradient-to-b from-[#F8F9FB] to-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* ========== Heading ========== */}
        <div className="text-center max-w-4xl mx-auto">
  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" /> Pricing
  </span>

  <h2 className="mt-4 text-4xl sm:text-5xl font-semibold  leading-tight tracking-tight text-neutral-900">
    Choose the plan that <br className="hidden sm:block" />
    fits your team best.
  </h2>

  {/* Tabs (Monthly / Quarterly / Yearly) */}
 {/* Tabs (Monthly / Quarterly / Yearly) */}
<div className="mt-6 inline-block relative sm:pr-8">
  <div className="inline-flex items-center rounded-full bg-neutral-100 p-1 ring-2 ring-[#F6F6F9]">
    {pill("monthly", "Monthly")}
    {pill("quarterly", "Quarterly")}
    {pill("yearly", "Yearly")}
  </div>

  {/* ✅ Dynamic badges – visible on all devices, positioned smartly */}
  {billing === "quarterly" && (
    <span className="absolute sm:-right-3 sm:-top-2 top-[110%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 inline-flex items-center rounded-full bg-[#3B66F6] text-white text-[11px] font-semibold px-2.5 py-1 shadow-sm ring-1 ring-black/5 transition-all duration-300">
      Save 10%
    </span>
  )}
  {billing === "yearly" && (
    <span className="absolute sm:-right-3 sm:-top-2 top-[110%] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 inline-flex items-center rounded-full bg-[#3B66F6] text-white text-[11px] font-semibold px-2.5 py-1 shadow-sm ring-1 ring-black/5 transition-all duration-300">
      Save 20%
    </span>
  )}
</div>

</div>


        {/* ========== Pricing Cards ========== */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          <PlanCard
            title="Starter"
            subtitle="Get started with the essentials."
            price={price.starter}
            billing={billing}
            features={FEATURES}
            planKey="starter"
            ctaText="Choose your plan"
          />

          <PlanCard
            title="Pro"
            subtitle="Built for growing SaaS teams."
            price={price.pro}
            billing={billing}
            features={FEATURES}
            planKey="pro"
            featured
            ctaText="Choose your plan"
          />

          <PlanCard
            title="Business"
            subtitle="For scaling teams that need more."
            price={price.business}
            billing={billing}
            features={FEATURES}
            planKey="business"
            ctaText="Choose your plan"
          />
        </div>
      </div>
    </section>
  );
}

// ========== Single Plan Card ========== //
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
        <div className="pb-1 text-neutral-500 text-sm">/mo</div>
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
    </div>
  );
}
