// src/components/blog/Bloglisting.jsx
import React from "react";
import { Link } from "react-router-dom";

// 👉 apni images assets/blog/… me rakh lo (ya URLs use kar lo)
import img1 from "../assets/blog/blog-1.png";
import img2 from "../assets/blog/blog-2.png";
import img3 from "../assets/blog/blog-3.png";

const posts = [
  {
    id: 1,
    href: "/blog/what-is-crypto-trading",
    category: "Crypto Trading",
    title: "What is Crypto Trading? A Beginner’s Guide in Simple Words",
    date: "Jan 9, 2025",
    image: img1,
    alt: "A terracotta pot plant against soft orange wall",
  },
  {
    id: 2,
    href: "/blog/how-to-start-crypto-trading",
    category: "Beginner's guide",
    title: "How to Start Crypto Trading: A Simple Beginner’s Guide",
    date: "Jan 8, 2025",
    image: img2,
    alt: "A red cup on cyan background casting a soft shadow",
  },
  {
    id: 3,
    href: "/blog/cryptocurrency-digital-revolution",
    category: "Cryptocurrency",
    title: "Cryptocurrency: The Digital Revolution Reshaping Money",
    date: "Jan 7, 2025",
    image: img3,
    alt: "An orange bowl on warm background",
  },
];

export default function Blog() {
  return (
    <section id="resources" className="bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Resources
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Resources & Insights
          </h2>
          <p className="mt-4 text-neutral-500">
            Find the right guides, trading solutions, and beyond all that you need in order to maximize the outcome and trade wiser with Cryptomaty.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <Link to={p.href} className="block focus:outline-none">
                <div className="overflow-hidden rounded-2xl border border-neutral-200">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <span className="text-xs font-medium text-primary/90">{p.category}</span>
                  <h3 className="mt-1 text-[17px] font-semibold leading-snug text-neutral-900 group-hover:underline">
                    {p.title}
                  </h3>
                  <time
                    dateTime={new Date(p.date).toISOString().slice(0, 10)}
                    className="mt-1 block text-xs text-neutral-500"
                  >
                    {p.date}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
          >
            Explore resources →
          </Link>
        </div>
      </div>
    </section>
  );
}
