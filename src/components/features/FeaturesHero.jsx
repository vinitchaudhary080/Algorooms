import React, { useState } from "react";
import {
  CalendarCheck2,
  BarChart2,
  Link as LinkIcon,
  LayoutPanelTop,
} from "lucide-react";

// ⤵️ Replace these with your real images
import imgCalendar from "@/assets/features/feat-calendar.png";
import imgAnalytics from "@/assets/features/feat-analytics.png";
import imgIntegration from "@/assets/features/feat-integration.png";
import imgBoards from "@/assets/features/feat-boards.png";

const TABS = [
  {
    id: "calendar",
    label: "Create strategies",
    icon: CalendarCheck2,
    badge: "Create strategies",
    title: "Stay organized and on track",
    desc:
      "Effortlessly manage your time and tasks with our intuitive scheduling calendar. Create, modify, and share events with ease.",
    cta: "Try now",
    image: imgCalendar,
  },
  {
    id: "analytics",
    label: "Deployed strategies",
    icon: BarChart2,
    badge: "Deployed strategies",
    title: "Track what matters at a glance",
    desc:
      "Turn raw data into actionable insights. Visualize KPIs, discover trends, and make faster decisions with confidence.",
    cta: "Deployed now",
    image: imgAnalytics,
  },
  {
    id: "integrations",
    label: "Backtest and analytics",
    icon: LayoutPanelTop,
    badge: "Backtest and analytics",
    title: "Connect your favorite tools",
    desc:
      "Integrate with the apps you already use. Keep work in sync and automate the busywork — zero friction.",
    cta: "Explore analytics",
    image: imgIntegration,
  },
  {
    id: "boards",
    label: "Seamless integration",
    icon: LinkIcon,
    badge: "Connect your broker",
    title: "Plan and collaborate clearly",
    desc:
      "Organize projects with clean boards. Prioritize tasks, share context, and keep everyone aligned without the clutter.",
    cta: "Try now",
    image: imgBoards,
  },
];

export default function FeaturesHero() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="pt-14 pb-20 sm:pt-20 sm:pb-0 bg-[#F6F6F8]">
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Features
          </span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Suited for every scenario
          </h1>
          <p className="mt-4 text-neutral-500">
            Explore the comprehensive suite of tools designed to enhance your
            productivity and streamline your workflow.
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
          className="mt-10 grid items-start gap-10 md:grid-cols-2 items-center"
        >


          {/* Left: Content */}
          <div >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {tab.badge}
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-neutral-900">
              {tab.title}
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">{tab.desc}</p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-300 "
            >
              {tab.cta} <span aria-hidden>→</span>
            </a>
          </div>

          {/* Right: image card */}
          <div className="relative">
            <div className="rounded-3xl ">
              <div className="overflow-hidden rounded-2xl">
                <img
                  key={tab.image}
                  src={tab.image}
                  alt={tab.label}
                  className="w-full h-auto object-cover transition-transform duration-500 will-change-transform hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>


      </div>

    </section>
  );
}
