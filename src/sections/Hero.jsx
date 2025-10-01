// src/sections/Hero.jsx
import { useEffect, useState } from "react";
import { Calendar, BarChart3, Layers, Layout } from "lucide-react";
import heroBg from "@/assets/hero.png"; // make sure hero.png is inside src/assets/

// Counter with looping every 60s
function Counter({ value, duration = 2000, loopInterval = 60000 }) {
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0); // force restart counter

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""), 10); // extract numbers
    if (isNaN(end)) return;

    const increment = end / (duration / 16); // ~60fps
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(handle);
  }, [value, duration, key]);

  // reset counter every loopInterval (1min default)
  useEffect(() => {
    const loop = setInterval(() => {
      setCount(0);
      setKey((k) => k + 1); // restart effect
    }, loopInterval);

    return () => clearInterval(loop);
  }, [loopInterval]);

  return (
    <span>
      {count}
      {value.replace(/[0-9]/g, "") /* suffix like %, K+, M, hr */}
    </span>
  );
}

// Stat block
function Stat({ value, label }) {
  return (
    <div className="text-left">
      <div className="text-2xl font-semibold text-[#4F7DFF]">
        <Counter value={value} />
      </div>
      <div className="text-sm text-neutral-500">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white mt-0 sm:mt-20 scroll-mt-nav overflow-visible">
      {/* ✅ Rotating background image */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="transform" style={{ transform: "translateY(4%)" }}>
          <img
            src={heroBg}
            alt="Hero background"
            className="bg-rotating opacity-20 w-[190vw] max-w-none sm:w-[150vw] md:w-[130vw] lg:w-[115vw]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <div className="container-xxl relative z-10 py-4 sm:pt-20 sm:pb-10 text-center">
        {/* --- SIDE STATS (lg+) --- */}
        <div
          className="
            pointer-events-none
            hidden lg:flex items-center gap-10
            absolute left-0 top-[50%] -translate-y-1/2 -translate-x-2
          "
          aria-hidden="true"
        >
          <Stat value="₹0" label="Start free" />
          <span className="h-16 w-px bg-neutral-200" />
          <Stat value="19K+" label="Trusted traders with us." />
        </div>

        <div
          className="
            pointer-events-none
            hidden lg:flex items-center gap-10
            absolute right-0 top-[50%] -translate-y-1/2 translate-x-2
          "
          aria-hidden="true"
        >
          <Stat value="95%" label="Quickened backtesting" />
          <span className="h-16 w-px bg-neutral-200" />
          <Stat value="24hr" label="Specialized assistance" />
        </div>

        {/* --- Hero content --- */}
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 mb-6">
          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">
            NEW
          </span>
          Cryptomaty
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
          Your Smart Crypto Dashboard <br />
          For <span className="text-primary">Faster & Smarter</span> Trades
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-neutral-500">
          Bring the crypto power out with our progressive SaaS model. Make your
          trading easier and achieve even greater heights now.
        </p>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <a
            href="https://web.cryptomaty.com/login"
            className="px-6 py-3 rounded-xl text-white font-medium shadow 
             bg-gradient-to-r from-blue-500 to-purple-600 
             hover:opacity-90 transition-opacity animated-gradient"
          >
            All this at zero cost - free for everyone →
          </a>
        </div>

        {/* --- MOBILE STATS (2x2 grid, lg se chhupao) --- */}
        <div className="mt-10 lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#4F7DFF]">
                <Counter value="₹0" />
              </div>
              <div className="mt-1 text-xs text-neutral-500">Start free</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#4F7DFF]">
                <Counter value="30M" />
              </div>
              <div className="mt-1 text-xs text-neutral-500">Total funding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#4F7DFF]">
                <Counter value="19K+" />
              </div>
              <div className="mt-1 text-xs text-neutral-500">Trusted traders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#4F7DFF]">
                <Counter value="24hr" />
              </div>
              <div className="mt-1 text-xs text-neutral-500">Specialized assistance</div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="flex flex-col items-start gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Strategy Templates</h3>
            <p className="text-sm text-neutral-500">
              Access trading strategies pre-built by trading experts.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Backtest</h3>
            <p className="text-sm text-neutral-500">
              Test your ideas with historical data prior to going live.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Layers className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Deployed Strategy</h3>
            <p className="text-sm text-neutral-500">
              Easily deploy strategies and set automation to work for you.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Layout className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Track P&L</h3>
            <p className="text-sm text-neutral-500">
              Track real-time profits and losses directly on your dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
