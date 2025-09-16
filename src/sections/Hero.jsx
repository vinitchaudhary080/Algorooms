// src/sections/Hero.jsx
import { Calendar, BarChart3, Layers, Layout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white mt-0 sm:mt-20 scroll-mt-nav">
      <div className="container-xxl  py-4 sm:pt-20 sm:pb-10 text-center">
        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 mb-6">
          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">NEW</span>
          Cryptomaty
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900">
          Your smart Crypto Dashboard <br />
          For <span className="text-primary">faster & smarter</span> trades.
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-neutral-500">
          Bring the crypto power out with our progressive SaaS model. Make your trading easier and achieve even greater heights now.
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
       <a
  href="https://web.cryptomaty.com/login"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow hover:opacity-90 transition-opacity"
>
  Get started →
</a>


          <a href="#features" className="px-6 py-3 rounded-xl border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors">
            Know More →
          </a>
        </div>
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="flex flex-col items-start gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Strategy Templates</h3>
            <p className="text-sm text-neutral-500">Access trading strategies pre-built by trading experts.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Backtest</h3>
            <p className="text-sm text-neutral-500">Test your ideas with historical data prior to going live.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Layers className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Deployed Strategy</h3>
            <p className="text-sm text-neutral-500">Easily deploy strategies and set automation to work for you.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Layout className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Track P&L</h3>
            <p className="text-sm text-neutral-500">Track real-time profits and losses directly on your dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
