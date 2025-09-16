// src/sections/Testimonials.jsx
import React from "react";
import { Quote } from "lucide-react";
import fadeImg from "../assets/Fade.png"; // 👈 bottom fade image

const items = [
  {
    text: "The AI screener is something that saves lives. “I would be able to identify bullish coins within minutes of time and make trades confidently. It saves me hours every day.",
    name: "Amit Verma",
    role: "Swing Trader",
  },
  {
    text: "Backtesting provided me with clarity. “I was able to test my strategy and then viewed the results, and even did it live with no fear. It's like having a safety net.",
    name: "Priya Nair",
    role: "Day Trader",
  },
  {
    text: "There is everything inside a single dashboard: charts, strategies, and broker P&L. Trading is easier and effective at this point.",
    name: "Rahul Mehta",
    role: "Options Trader",
  },
  {
    text: "I have feared a complex application, but Cryptomaty is top of the world easy to use. There is no coding, no confusion, just smart trading tools that make it happen.",
    name: "Neha Sharma",
    role: "Crypto Enthusiast",
  },
  {
    text: "From sentiment detection to live P&L, Cryptomaty has got it all. I don't have to take a lot of different tools and pieces with me every time they're in one of the clean dashboards.",
    name: "Karan Patel:",
    role: "Professional Trader",
  },
  {
    text: "As a beginner, I was apprehensive about dealing with crypto trading. But Cryptomaty's AI tools made me believe.'This is How I Started Small, And The Results Speak For Themselves'.",
    name: "Ananya Joshi",
    role: "New Trader",
  },
  {
    text: "The ability to use live charts and track returns on strategy is invaluable. I time myself better, monitor my performance, trade smarter, every single day.",
    name: "Vikram Sing",
    role: "Day traders / Swing Trader",
  },
  {
    text: "'Integrating my broker account was very seamless.' My P&L updates in real time, which saves me hours every week and allows me to discuss strategy.",
    name: "Rohit Desai",
    role: "Algorithmic Trader",
  },
  {
    text: "I launched my first strategy in a matter of minutes without doing any coding.The templates and automation work perfectly; it doesn't seem like trading finally runs on autopilot.",
    name: "Sneha Kulkarni",
    role: " Investor and Part-Time Trader",
  },
];

export default function Testimonials() {
  return (
  <section
  id="testimonials"
  className="relative isolate py-20 sm:py-28 overflow-hidden scroll-mt-nav" // 👈 add `isolate`
  style={{ background: "linear-gradient(to bottom, #F6F6F8 0%, #FFFFFF 100%)" }}
>
  {/* Bottom Fade Image */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 mb-[-5px] z-50">
    <img
      src={fadeImg}
      alt="fade effect"
      className="mx-auto w-full max-w-[1400px] select-none"
      loading="lazy"
    />
  </div>


      <div className="container-xxl relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Trusted by 19,000+ Active <br className="hidden sm:block" />
            Traders Worldwide
          </h2>
          <p className="mt-4 text-neutral-500">
            Thousands of traders in India, who are amateurs and professional users, have confided in Cryptomaty to make trading easy and get more profits.
          </p>
        </div>

        {/* Cards Grid */}
        {/* Cards Grid */}
<div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items
    // mobile: show only 3, tablet/desktop: show all
    .slice(0, 3) // by default first 3
    .map((t, i) => (
      <article
        key={i}
        className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
      >
        <Quote className="h-4 w-4 text-neutral-300" />
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          “{t.text}”
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-200" />
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              {t.name}
            </div>
            <div className="text-xs text-neutral-500">{t.role}</div>
          </div>
        </div>
      </article>
    ))}

  {/* 👇 show remaining cards only on sm+ */}
  {items.slice(3).map((t, i) => (
    <article
      key={`extra-${i}`}
      className="hidden sm:block rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
    >
      <Quote className="h-4 w-4 text-neutral-300" />
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
        “{t.text}”
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-neutral-200" />
        <div>
          <div className="text-sm font-semibold text-neutral-900">
            {t.name}
          </div>
          <div className="text-xs text-neutral-500">{t.role}</div>
        </div>
      </div>
    </article>
  ))}
</div>


        {/* Show more CTA */}
        {/* <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
          >
            Show more +
          </button>
        </div> */}
      </div>
    </section>
  );
}
