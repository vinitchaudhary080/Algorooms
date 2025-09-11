import React from "react";

export default function PrivacyHero() {
  return (
    <section className="relative flex items-center justify-center bg-[#F6F6F8]">
      <div className="container-xxl py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
          Privacy Policy
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-neutral-500">
          <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 font-semibold text-green-700 ring-1 ring-inset ring-green-200">
            v1.0.0
          </span>
          <span>January 4, 2025</span>
        </div>
      </div>
    </section>
  );
}
