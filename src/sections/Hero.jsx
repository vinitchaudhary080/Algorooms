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
          Unlock the potential of your business with our next-level SaaS platform. Transform your workflows and achieve new heights today.
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
         <a
  href="#get-started"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow hover:opacity-90 transition-opacity"
>
  Get started →
</a>

          <a href="#learn-more" className="px-6 py-3 rounded-xl border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-colors">
            Know More →
          </a>
        </div>
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div className="flex flex-col items-start gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Meaningful calendar</h3>
            <p className="text-sm text-neutral-500">Create, modify, and share events with ease.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Insightful analytics</h3>
            <p className="text-sm text-neutral-500">Track key performance indicators, generate reports.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Layers className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Seamless integration</h3>
            <p className="text-sm text-neutral-500">Keep everything connected without any limits.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Layout className="h-6 w-6 text-primary" />
            <h3 className="font-semibold text-neutral-900">Effortless boards</h3>
            <p className="text-sm text-neutral-500">Visual way to organize and track your tasks and projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
