import React from "react";
import { NotebookPen } from "lucide-react";

export default function BlogHero() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ background: "#F6F7F9" }} // light gray jaisa screenshot me
    >
      <div className="container-xxl">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-green-600/30 bg-white">
              <NotebookPen className="h-3.5 w-3.5 text-green-600" />
            </span>
             Blog & Insights
          </span>

          {/* Title */}
          <h1 className="mt-4 text-[44px] sm:text-6xl font-semibold tracking-tight text-neutral-900">
            Stay Ahead of the Market
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg text-neutral-500">
            Explore expert tips, market trends, and trading strategies - delivered to help you trade smarter each and every day.
          </p>
        </div>
      </div>
    </section>
  );
}
