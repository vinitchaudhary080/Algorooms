// src/components/blog/cryptocurrency/Hero.jsx (or keep your path)
// If you keep the original path/name, replace the export below in-place.

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Safe defaults
import coverImg from "@/assets/blog/blog-4.png";

export default function Blockchain({
  backTo = "/blog",
  category = "Automation",
  title = "Trading Bots Explained: Automation in Action",
  excerpt = "The way people trade today has changed dramatically. What once required constant screen time, emotional control, and manual effort is now handled by machines — more specifically, by trading bots. These digital tools represent the heart of modern trading automation in India, allowing traders to execute decisions with speed, accuracy, and discipline.But how exactly do they work, and why are they reshaping the entire investing landscape?",
  date = "Sep 16, 2025", // kept but not rendered to match target layout
  author = { name: "John Parker", role: "Customer Success" },
  hero = coverImg,
  avatar = null, // pass an image path if you have one
}) {
  return (
    <section className="bg-[#F6F6F8] py-12 sm:py-24 scroll-mt-nav">
      <div className="container-xxl max-w-4xl mx-auto">
        {/* Top row: Back + Category */}
        <div className="flex items-center justify-between">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-[#2048FE] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <span className="inline-flex items-center rounded-full bg-[#2048FE]/10 text-[#2048FE] text-xs font-semibold px-3 py-1 ring-1 ring-[#2048FE]/20 shadow-sm">
            {category}
          </span>
        </div>

        {/* Title + Description */}
        <h1 className="mt-6 text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-[15px] sm:text-base text-neutral-600 leading-relaxed">
          {excerpt}
        </p>

        {/* Author info (to match target: no date on the right) */}
        <div className="mt-6 flex items-center gap-3">
          {/* Avatar */}
          <div className="h-10 w-10 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-700">
            {avatar ? (
              <img
                src={avatar}
                alt={author?.name || "Author"}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <span>
                {(author?.name || "A")
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            )}
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">
              {author?.name}
            </div>
            <div className="text-xs text-neutral-500">{author?.role}</div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-10">
          <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
            <img
              src={hero}
              alt="Blog cover"
              className="w-full h-auto object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
