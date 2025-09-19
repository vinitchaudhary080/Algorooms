// src/sections/FeaturesHero.jsx
import React, { useState } from "react";
import {
  CalendarCheck2,
  BarChart2,
  Link as LinkIcon,
  LayoutPanelTop,
} from "lucide-react";

// 🎥 Replace images with videos
import vidStrategyTemplates from "@/assets/features/strategytemplates.webm";
import vidDeployedStrategies from "@/assets/features/deployedstrategies.webm";
import vidBacktest from "@/assets/features/backtest.webm";
import vidTrack from "@/assets/features/track.webm";

const TABS = [
  {
    id: "calendar",
    label: "Strategy Template",
    icon: CalendarCheck2,
    badge: "Ready-Made",
    title: "Strategy Templates",
    desc:
      "Get started trading flipping out of the box with strategies pre-built by professional traders. Installing a code or elaborate systems is not essential; one just has to select a template, apply it, and leave the rest to the automatics. These templates will allow saving time, reduce the guesswork, and begin to trade smarter on the first day.",
    cta: "Try now",
    video: vidStrategyTemplates,
  },
  {
    id: "analytics",
    label: "Deployed strategies",
    icon: BarChart2,
    badge: "One-Click",
    title: "Deployed Strategies",
    desc:
      "Act upon your ideas with implemented strategies that run silently in the backroom. It should be noted that our system, when enabled, will follow the market, will trade automatically, and will adjust automatically in real time, thus leaving you with less to do with manual trading and more to do with the outcomes. The survival of the swiftest in terms of reacting to market signals is only a one-click deployment.",
    cta: "Deployed now",
    video: vidDeployedStrategies,
  },
  {
    id: "integrations",
    label: "Backtest and analytics",
    icon: LayoutPanelTop,
    badge: " Data-Driven",
    title: "Backtest and Analytics",
    desc:
      "Trade without fear, putting your money into it at risk. You are able to test trades on historical data with the help of sophisticated backtesting and see the profit of a particular trade, the risk that might arise, and have your boxes narrowed down. Combined with in-depth analytics, you will have the knowledge you will use to make knowledgeable, data-driven judgments.",
    cta: "Explore analytics",
    video: vidBacktest,
  },
  {
    id: "boards",
    label: "Track PNL",
    icon: LinkIcon,
    badge: "Real-Time",
    title: "Track PNL",
    desc:
      "Real-time PNL tracking brokers and strategies. Keep control of your performance. Watch your profits, losses, and your ROI live, directly on a single dashboard, and combine means of dashboards. There is no longer a need to change tabs or maintain multiple spreadsheet windows and see an overview of your performance in any trade; Cryptomaty will provide you with a clear and transparent context.",
    cta: "Try now",
    video: vidTrack,
  },
];

export default function FeaturesHero() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F6F8]">
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Features
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Stay the Course of Every Trading Moment.
          </h1>
          <p className="mt-4 text-neutral-500">
            Explore our entire range of tools designed to make you more efficient. Our products make tasks easier, and they help you stay ahead in any market environment.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="Features tabs"
            className="flex flex-wrap gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2"
          >
            {TABS.map((t, i) => {
              const Icon = t.icon;
              const isActive = i === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition
                    ${isActive
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-50"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={tab.id}
          className="mt-10 grid gap-10 md:grid-cols-2 items-center"
        >
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {tab.badge}
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-neutral-900">
              {tab.title}
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">{tab.desc}</p>

            {/* CTA Button → always go to Cryptomaty app */}
            <a
              href="https://web.cryptomaty.com/"
              target="_self"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold 
                         text-neutral-800 border border-neutral-200 hover:border-neutral-300"
            >
              {tab.cta} <span aria-hidden>→</span>
            </a>
          </div>

          {/* Right: video card */}
          <div className="relative">
            <div className="rounded-3xl">
              <div className="overflow-hidden rounded-2xl">
                <video
                  key={tab.video}
                  src={tab.video}
                  className="w-full h-auto object-cover transition-transform duration-500 will-change-transform hover:scale-[1.01]"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
