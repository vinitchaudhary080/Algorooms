// src/components/blog/BlogListing.jsx
import React from "react";
import { Link } from "react-router-dom";

// 👉 अपनी images यहाँ import करें
import img1 from "../../assets/blog/blog-1.png";
import img2 from "../../assets/blog/blog-2.png";
import img3 from "../../assets/blog/blog-3.png";

const POSTS = [
  {
    id: 1,
    href: "/blog/automation-workflows",
    category: "Growth",
    title: "5 Automation Workflows to Boost Team Productivity",
    excerpt:
      "Explore five automation workflows that reduce repetitive tasks and help your team focus on meaningful work.",
    image: img1,
    author: "Daniel Lee",
    role: "Workflow Strategist",
    date: "Jan 9, 2025",
  },
  {
    id: 2,
    href: "/blog/ai-support-response",
    category: "Analytics",
    title: "How AI Can Improve Customer Support Response Times",
    image: img2,
    date: "Jan 8, 2025",
  },
  {
    id: 3,
    href: "/blog/metrics-that-matter",
    category: "Productivity",
    title: "Metrics That Matter: Tracking SaaS Growth the Right Way",
    image: img3,
    date: "Jan 7, 2025",
  },
  {
    id: 4,
    href: "/blog/data-driven-culture",
    category: "Technology",
    title: "Building a Data-Driven Culture in Your Team",
    image: img3,
    date: "Jan 6, 2025",
  },
];

function Initials({ name }) {
  const ii = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-[12px] font-semibold text-neutral-700 ring-1 ring-black/5">
      {ii}
    </span>
  );
}

export default function BlogListing() {
  const featured = POSTS[0];
  const cards = POSTS.slice(1, 4);

  return (
    <section id="blog" className="bg-transparent py-20 mb-0 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
       
        

        {/* ===== Featured card ===== */}
        {featured && (
          <article className="rounded-[18px] bg-white ring-5 ring-[#F6F6F9] shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden mb-8  mt-10 sm:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start ">

              {/* left image */}
              <div className="lg:col-span-5 flex items-center justify-center p-4">
                <Link to={featured.href} className="block w-full h-full">
                  <div className="rounded-2xl overflow-hidden w-full h-[95%] sm:h-[420px] lg:h-[460px]">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>


              {/* right content */}
              <div className="lg:col-span-7 p-5 sm:p-6">
                <span className="inline-flex items-center rounded-full bg-[#EEF2FF] text-[#3B66F6] px-2 py-0.5 text-[11px] font-semibold">
                  {featured.category}
                </span>

                <Link to={featured.href}>
                  <h3 className="mt-2 text-[22px] sm:text-[44px] font-bold leading-snug text-neutral-900 hover:opacity-90">
                    {featured.title}
                  </h3>
                </Link>

                <p className="mt-2 text-[18px] text-neutral-600">{featured.excerpt}</p>

                <div className="mt-16 sm:mt-44 flex items-center gap-3">
                  <Initials name={featured.author} />
                  <div className="text-sm">
                    <div className="font-semibold text-neutral-900">
                      {featured.author}
                    </div>
                    <div className="text-neutral-500">{featured.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>

        )}

        {/* ===== 3 small cards row ===== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((p) => (
            <article
              key={p.id}
              className="rounded-[18px] bg-white ring-5 ring-[#F6F6F9] shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden"
            >
              <Link to={p.href} className="block">
                {/* ✅ Image with padding */}
                <div className="p-2 sm:p-2">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-48 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* ✅ Content */}
                <div className="px-5 sm:px-6 pb-5">
                  <span className="inline-flex items-center rounded-full bg-[#EEF2FF] text-[#3B66F6] px-2 py-0.5 text-[11px] font-semibold">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-[16.5px] font-semibold leading-snug text-neutral-900">
                    {p.title}
                  </h3>
                  <time
                    dateTime={new Date(p.date).toISOString().slice(0, 10)}
                    className="mt-2 block text-xs text-neutral-500"
                  >
                    {p.date}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
