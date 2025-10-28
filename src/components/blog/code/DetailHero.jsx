import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import coverImg from "@/assets/blog/blog-1.png";

export default function CodeDetailHero({
  backTo = "/blog",
  category = "Growth",
  title = "What Is Algo Trading Software and Why It Matters",
  excerpt = "In today’s fast-moving financial markets, every second counts. Traditional manual trading is slowly being replaced by something faster, smarter, and far more efficient Algo Trading Software. But what exactly is it, and why does it matter so much in today’s trading ecosystem?",
  author = { name: "Daniel Lee", role: "Workflow Strategist" },
  date = "Oct 13, 2025",
  hero = coverImg,
  avatar = null, // optional avatar image
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

        {/* Author info */}
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
