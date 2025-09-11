import React from "react";

export default function TermsHero({
  title = "Terms of service",
  version = "New",
  date = "January 4, 2025",
}) {
  return (
    // 🔁 height exactly like BlogHero: center vertically with min-heights
    <section className="bg-[#F6F6F8] min-h-[46vh] sm:min-h-[56vh] flex items-center">
      <div className="container-xxl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-900">
            {title}
          </h1>

          {/* version + date pills */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold">
              {version}
            </span>
            <span className="text-sm text-neutral-500">{date}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
