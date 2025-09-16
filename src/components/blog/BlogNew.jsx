// src/components/blog/BlogNew.jsx
import React from "react";
import sampleImg from "@/assets/blog/sample-post.png";
import { Link } from "react-router-dom";

export default function BlogNew() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-xxl">
        {/* 👇 Wrap entire card with Link */}
        <Link
          to="/blog/code-detail"
          className="group grid md:grid-cols-2 gap-10 items-center cursor-pointer"
        >
          {/* Left: Blog image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={sampleImg}
              alt="Featured blog"
              className="w-full h-[220px] sm:h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              loading="lazy"
            />
          </div>

          {/* Right: Blog details */}
          <div>
            <span className="text-sm font-medium text-blue-600">New</span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-neutral-900 leading-snug transition-colors duration-300 group-hover:underline">
              What is Crypto Trading? A Beginner’s Guide in Simple Words
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">
             If you’ve been scrolling through social media lately, chances are you’ve seen people talking about Bitcoin, Ethereum, or some “new coin” that’s about to explode. That’s all part of the world of crypto trading.
            </p>
            <p className="mt-4 text-sm text-neutral-500">Jan 9, 2025</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
