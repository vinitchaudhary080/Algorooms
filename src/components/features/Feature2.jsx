// src/components/features/Feature2.jsx
import React from "react";
import augustUpdateImg from "@/assets/features/august-update.png"; // <- tum yeh image provide karoge

export default function Feature1() {
  return (
    <section className="bg-[#F6F6F8] py-14 sm:py-16">
      <div className="container-xxl">
        <div className="grid gap-8 md:grid-cols-12">
          {/* LEFT: Meta */}
          <aside className="md:col-span-3">
            <h3 className="text-[18px] font-extrabold text-neutral-900">
              CNC & BTST Trading
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
              Enjoy a faster, cleaner, and smarter
              experience across the entire platform.
            </p>
            <div className="mt-4 text-[12px] text-neutral-500">
              Aug 23, 2025
            </div>
          </aside>

          {/* RIGHT: Content */}
          <div className="md:col-span-9">
            {/* top image card */}
            <div className=" rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={augustUpdateImg}
                  alt="August Update"
                  className="w-full h-[180px] sm:h-[420px] object-cover ring-5 ring-[#F6F6F9]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* intro copy */}
            <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
              The August Update brings a big boost in performance and workflow speed.
              We’ve optimized how data loads across dashboards, added smarter filtering
              options, and resolved key bugs for a smoother user experience.
            </p>

            {/* Added */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">Added</h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Global Search Bar:</span> Quickly find tasks,
                  reports, or team members from any page.
                </li>
                <li>
                  <span className="font-medium">Advanced Filters:</span> Combine multiple
                  conditions to view exactly what matters in your dashboards.
                </li>
              </ul>
            </section>

            {/* Improved */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">Improved</h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Data Loading Speed:</span> Dashboard load
                  times reduced by up to 30%.
                </li>
                <li>
                  <span className="font-medium">Mobile Responsiveness:</span> Better layouts
                  and touch interactions for smaller screens.
                </li>
              </ul>
            </section>

            {/* Fixed */}
            <section className="mt-6">
              <h4 className="text-[15px] font-semibold text-neutral-900">Fixed</h4>
              <ul className="mt-2 list-disc pl-5 text-[13.5px] leading-6 text-neutral-700">
                <li>
                  <span className="font-medium">Duplicate Notifications Bug:</span> Resolved
                  issue causing repeated alerts on task updates.
                </li>
                <li>
                  <span className="font-medium">Export Glitch:</span> Fixed error when
                  exporting analytics to CSV format.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
