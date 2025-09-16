// src/sections/HowItWorks.jsx
import React from "react";
import {
  CalendarCheck2,
  BarChart2,
  Link as LinkIcon,
  LayoutPanelTop,
  ChevronRight,
  Zap,
} from "lucide-react";
// import howImg from "../assets/how-dashboard.png"; // ❌ remove old image
import howVideo from "../assets/how-to-use.webm"; // ✅ new video

const bullets = [
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* Top row: badge + title + CTA */}
        <div className="grid items-start gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
              <Zap className="h-4 w-4 text-green-600" />
              How it works
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              All You Need to <br className="hidden sm:block" />
              Grow, All in One Place
            </h2>

            <p className="mt-4 max-w-xl text-neutral-500">
              Our platform was constructed with convenience and simplicity in mind. Growth is easy and sufficient enough that even a beginner can navigate the platform with complete confidence.
            </p>
          </div>

          <div className="md:pt-6">
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

        {/* Tilted screenshot card (replaced with video) */}
        <div className="mt-10">
          <div className="relative mx-auto max-w-8xl">
            {/* soft background plate */}
            <div className="absolute " />
            {/* video frame */}
            <div className="relative overflow-hidden rounded-xl">
              <video
                src={howVideo}
                className="block w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            {/* bottom glow */}
            <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-10 rounded-full blur-2xl bg-black/10" />
          </div>
        </div>

        {/* Bullet row */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bullets.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
                <Icon className="h-4 w-4 text-neutral-800" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
