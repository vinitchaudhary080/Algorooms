import React from "react";
import { Leaf } from "lucide-react";

// 👉 अपनी images को assets में रखो और नीचे वाले paths अपडेट कर दो
import imgLarge from "../../assets/about/hero-1.png";
import imgRightTop from "../../assets/about/hero-2.png";
import imgRightBottom from "../../assets/about/hero-3.png";

export default function AboutHero() {
  return (
    <section className=" py-16 sm:py-20 bg-[#F6F6F8] scroll-mt-nav">
      <div className="container-xxl">
        {/* Top: Badge + Heading + Subtext */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-200">
              <Leaf className="h-3 w-3 text-green-600" />
            </span>
            About us
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            The Future of  <br className="hidden sm:block" />
            Crypto Trading.
          </h1>

          <p className="mt-4 text-neutral-500">
            Trader-friendly and trusted by thousands, our mission is to make trading in crypto as simple as it should be, using AI-powered trading tools, automation, and a single dashboard to trade smarter each day.
          </p>
        </div>

        {/* Images */}
        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
          {/* Left: big image */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200">
            <img
              src={imgLarge}
              alt="Studio workspace with large windows and plants"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: two stacked images */}
          <div className="grid grid-rows-2 gap-5 sm:gap-6">
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <img
                src={imgRightTop}
                alt="Team collaborating in modern office"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <img
                src={imgRightBottom}
                alt="Designer working on laptop"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
