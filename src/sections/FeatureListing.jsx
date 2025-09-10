// src/sections/FeatureListing.jsx
import React from "react";
import { Zap } from "lucide-react";

// 👇 apni images yahin rakho (replace filenames as needed)
import analyticsImg from "../assets/features/analytics.png";
import trustImg from "../assets/features/users.png";
import deployImg from "../assets/features/command.png";
import seamlessImg from "../assets/features/seamless.png";
import templatesImg from "../assets/features/templates.png";

export default function FeatureListing() {
  return (
    <section id="feature-listing" className="py-20 sm:py-28 bg-[#F6F6F8] scroll-mt-nav">
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <Zap className="h-4 w-4 text-green-600" />
            Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Features designed to <br className="hidden sm:block" />
            empower your workflow
          </h2>
          <p className="mt-4 text-neutral-500">
            Stay ahead with tools that prioritize your needs, integrating insights
            and efficiency into one powerful platform.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Big analytics card — spans 2 cols on large screens */}
          <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white ">
            <div className="p-5 sm:p-6">
              {/* Top mini title row (like “Analytics”) */}
              
              <div className="overflow-hidden bg-white">
                <img
                  src={analyticsImg}
                  alt="Backtest strategy insights"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Backtest strategy insights
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                  Make smarter, more informed decisions with powerful and actionable data
                  insights, designed to empower your business with the tools needed to drive
                  growth, efficiency, and success.
                </p>
              </div>
            </div>
          </div>

          {/* Right small card (19K+ user trust) */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 ">
            <div className="  bg-white">
              <img
                src={trustImg}
                alt="User trust"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-neutral-900">19K+ user trust</h3>
            <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
              Collaborate with your team, share updates instantly, and achieve your goals faster.
            </p>
          </div>

          {/* Bottom left — Deploy in 1 click */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 ">
            <div className="overflow-hidden  bg-white">
              <img
                src={deployImg}
                alt="Deploy in 1 click"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-neutral-900">Deploy in 1 click</h3>
            <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
              Save time, boost efficiency, and focus on what truly matters for you.
            </p>
          </div>

          {/* Bottom middle — Seamless experience */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="overflow-hidden  bg-white">
              <img
                src={seamlessImg}
                alt="Seamless experience"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-neutral-900">Seamless experience</h3>
            <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
              Seamlessly connect your favorite apps and platforms with our powerful integrations.
            </p>
          </div>

          {/* Bottom right — Strategy templates */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 ">
            <div className="overflow-hidden  bg-white">
              <img
                src={templatesImg}
                alt="Strategy templates"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-neutral-900">Strategy templates</h3>
            <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
              Provides real-time data, actionable insights, and key metrics at a glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
