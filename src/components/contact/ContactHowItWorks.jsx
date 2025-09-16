// src/components/contact/ContactHowItWorks.jsx
import React from "react";
import {
  CalendarCheck2,
  BarChart2,
  Link as LinkIcon,
  LayoutPanelTop,
  ChevronRight,
  Zap,
} from "lucide-react";

const steps = [
  {
    icon: LinkIcon,
    title: "Connect Your Broker",
    desc: "Link exchange APIs are securely connected.",
  },
  {
    icon: BarChart2,
    title: "Scan with AI Screener",
    desc: "Identify bullish/bearish coins immediately.",
  },
  {
    icon: CalendarCheck2,
    title: "Deploy Strategy",
    desc: "Select or build templates.",
  },
  {
    icon: LayoutPanelTop,
    title: "Track & Optimise",
    desc: "Operate ROI, P&L, and at any time.",
  },
];

export default function ContactHowItWorks() {
  return (
    <section id="contact-how" className="bg-white py-16 sm:py-24">
      <div className="container-xxl">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <Zap className="h-4 w-4 text-green-600" />
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
          All You Need to <br className="hidden sm:block" />
          Grow, All in One Place
        </h2>

        <p className="mt-4 text-center max-w-3xl mx-auto text-neutral-600">
          Our platform was constructed with convenience and simplicity in mind.
          Growth is easy and sufficient enough that even a beginner can navigate
          the platform with complete confidence.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
                  <Icon className="h-4 w-4 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/watch?v=pg8gz3usjE8&ab_channel=Cryptomaty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-[15px] font-medium text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
            aria-label="Learn more about how it works"
          >
            Learn more <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
