// src/sections/Features.jsx
import React from "react";

// 👇 apni images import karo
import feature1 from "../assets/feature-1.png"; // Deploy Strategies image
import feature2 from "../assets/feature-2.png"; // AI Screener image
import feature3 from "../assets/feature-3.png"; // Track Profits image

const features = [
  {
    title: "Deploy Custom Strategies:",
    desc: "Build/test/automate with no-code.",
    img: feature1,
  },
  {
    title: "Smart Coin Sentiment Detection",
    desc: "AI sorts the coins that become bullish/bears.",
    img: feature2,
  },
  {
    title: "Track Profits and Strategy ROI",
    desc: "Real-time P&L and flat by broker.",
    img: feature3,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Everything For More Intelligent Trading. In One Powerful Dashboard.
          </h2>
          <p className="mt-4 text-neutral-500">
            Forget the confusion and move into a progressive working process that has been established among you to trade more rapidly & intelligently.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl"
            >
              <div className="overflow-hidden ">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-neutral-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
