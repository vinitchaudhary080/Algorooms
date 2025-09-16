import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Safe defaults
import coverImg from "@/assets/blog/blog-1.png";
// NOTE: Agar tumhare paas avatar file nahi hai to is import ko hata do
// import authorAvatar from "@/assets/avatars/john.png";

export default function CodeDetailHero({
  backTo = "/blog",
  category = "News",
  title = "What is Crypto Trading? A Beginner’s Guide in Simple Words",
  excerpt = "If you’ve been scrolling through social media lately, chances are you’ve seen people talking about Bitcoin, Ethereum, or some “new coin” that’s about to explode. That’s all part of the world of crypto trading.",
  date = "Sep 16, 2025",
  author = { name: "John Parker", role: "Customer Success" },
  hero = coverImg,
  avatar = null, // 👈 pass an image path if you have one
}) {
  return (
    <section className="bg-[#F6F6F8] py-10 sm:py-14">
      <div className="container-xxl">

        {/* Top: Back + Badge */}
        <div className="flex items-center justify-between">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>

          <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-500/20">
            {category}
          </span>
        </div>

        {/* Title + Excerpt */}
        <h1 className="mt-4 pt-10 sm:pt-14 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-600">
          {excerpt}
        </p>

        {/* Meta row */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Avatar (safe fallback) */}
            <div className="h-9 w-9 overflow-hidden rounded-full bg-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-600">
              {avatar ? (
                <img
                  src={avatar}
                  alt={author?.name || "Author"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span>
                  {(author?.name || "A").split(" ").map(w => w[0]).join("").slice(0,2)}
                </span>
              )}
            </div>

            <div>
              <div className="text-sm font-semibold text-neutral-900">
                {author?.name}
              </div>
              <div className="text-xs text-neutral-500">
                {author?.role}
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-neutral-500">{date}</div>
        </div>

        {/* Hero image */}
        <div className="mt-8 sm:mt-10">
          <div className="rounded-4xl p-2 ring-1 ring-black/5">
            <div className="overflow-hidden rounded-xl">
              <img
                src={hero}
                alt="Post cover"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
