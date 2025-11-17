// src/sections/Pricing.jsx
import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

const BILLING = ["monthly", "quarterly", "yearly"];

// Pricing data - per day, from your table
// Monthly:   0 / 81 / 48
// Quarterly: 0 / 69 / 41
// Yearly:    0 / 58 / 34
const PRICES = {
  monthly: { starter: 0, pro: 81, business: 48 },
  quarterly: { starter: 0, pro: 69, business: 41 },
  yearly: { starter: 0, pro: 58, business: 34 },
};

// ✅ FEATURES - mapped from your comparison table
// Features
// Free / Unlimited / Limited
// Backtest Credits: 50 / 1500 / 500
// Strategy Creation: 5 / 50 / 25
// Live & Forward Deployment: x / 20 / 5
// Allowed Brokers: x / Any 5 / Any 3
// Index Futures / Options / Equity etc: x / Yes / Yes
// Portfolio Backtesting: x / 10 strategies / 2 strategies
const FEATURES = [
  // Backtest Credits
  {
    label: "Backtest credits - 50 per month",
    starter: true,
    pro: false,
    business: false,
  },
  {
    label: "Backtest credits - 1500 per month",
    starter: false,
    pro: true,
    business: false,
  },
  {
    label: "Backtest credits - 500 per month",
    starter: false,
    pro: false,
    business: true,
  },

  // Strategy Creation
  {
    label: "Strategy creation - up to 5 strategies",
    starter: true,
    pro: false,
    business: false,
  },
  {
    label: "Strategy creation - up to 50 strategies",
    starter: false,
    pro: true,
    business: false,
  },
  {
    label: "Strategy creation - up to 25 strategies",
    starter: false,
    pro: false,
    business: true,
  },

  // Live & Forward Deployment
  {
    label: "Live and forward deployment - up to 20 strategies",
    starter: false,
    pro: true,
    business: false,
  },
  {
    label: "Live and forward deployment - up to 5 strategies",
    starter: false,
    pro: false,
    business: true,
  },

  // Allowed Brokers
  {
    label: "Allowed brokers - any 5 brokers",
    starter: false,
    pro: true,
    business: false,
  },
  {
    label: "Allowed brokers - any 3 brokers",
    starter: false,
    pro: false,
    business: true,
  },

  // Market coverage (Yes/No rows)
  {
    label: "Index futures enabled",
    starter: false,
    pro: true,
    business: true,
  },
  {
    label: "Index options enabled",
    starter: false,
    pro: true,
    business: true,
  },
  {
    label: "Equity (cash) trading enabled",
    starter: false,
    pro: true,
    business: true,
  },
  {
    label: "Equity options trading enabled",
    starter: false,
    pro: true,
    business: true,
  },
  {
    label: "Equity futures trading enabled",
    starter: false,
    pro: true,
    business: true,
  },

  // Portfolio Backtesting
  {
    label: "Portfolio backtesting - up to 10 strategies",
    starter: false,
    pro: true,
    business: false,
  },
  {
    label: "Portfolio backtesting - up to 2 strategies",
    starter: false,
    pro: false,
    business: true,
  },
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
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-black font-semibold ring-2 ring-[#F6F6F9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" /> Choose Your Plan
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
            Smart Options To Power <br className="hidden sm:block" />
            Your Trading Journey.
          </h2>

          {/* Tabs (Monthly / Quarterly / Yearly) */}
          <div className="mt-6 inline-block relative sm:pr-8">
            <div className="inline-flex items-center rounded-full bg-neutral-100 p-1 ring-2 ring-[#F6F6F9]">
              {pill("monthly", "Monthly")}
              {pill("quarterly", "Quarterly")}
              {pill("yearly", "Yearly")}
            </div>

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

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          <PlanCard
            title="Free Plan"
            subtitle="Start exploring with zero cost."
            price={price.starter}
            billing={billing}
            features={FEATURES}
            planKey="starter"
            ctaText="Choose Free Plan"
          />

          <PlanCard
            title="Unlimited Plan"
            subtitle="Run high frequency and multiple strategies."
            price={price.pro}
            billing={billing}
            features={FEATURES}
            planKey="pro"
            featured
            ctaText="Choose Unlimited Plan"
          />

          <PlanCard
            title="Limited Plan"
            subtitle="Perfect for testing live deployment with limits."
            price={price.business}
            billing={billing}
            features={FEATURES}
            planKey="business"
            ctaText="Choose Limited Plan"
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
        "relative rounded-2xl bg-white p-6 sm:p-7 ring-5 transition-all duration-300",
        featured
          ? "scale-[1.03] ring-[#3B66F6] ring-2 shadow-[0_24px_70px_rgba(59,102,246,0.18)]"
          : "ring-[#F6F6F9] shadow-[0_12px_40px_rgba(0,0,0,0.05)]",
      ].join(" ")}
    >
      {/* Heading + Recommended badge for featured (Unlimited) */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="text-[15px] font-semibold text-neutral-900">{title}</div>
        {featured && (
          <span className="inline-flex items-center rounded-full bg-[#3B66F6] text-white text-[10px] font-semibold px-2.5 py-1 shadow">
            Recommended
          </span>
        )}
      </div>

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
          featured
            ? "text-white bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA] shadow-[0_10px_30px_rgba(40,100,223,0.4)]"
            : "text-white bg-gradient-to-r from-neutral-700 to-neutral-900 shadow",
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
