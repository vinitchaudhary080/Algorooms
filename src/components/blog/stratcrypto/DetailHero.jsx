// src/components/blog/stratcrypto/DetailHero.jsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Safe defaults
import coverImg from "@/assets/blog/blog-2.png";

export default function DetailHero({
  backTo = "/blog",
  category = "News",
  title = "How Algorithmic Trading Software is Changing Investing in 2025",
  excerpt = "The year 2025 marks a turning point in how investors approach the markets. What was once limited to institutional traders has now become a mainstream investing method powered by algorithmic trading platforms and automated trading solutions. With technology reshaping every aspect of finance, investors today seek speed, accuracy, and data-driven insights, all made possible through advanced algo trading platforms in India and beyond.",
  date = "Sep 16, 2025", // kept for future use; not rendered to match target design
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

        {/* Author info (no separate date render to match design) */}
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
