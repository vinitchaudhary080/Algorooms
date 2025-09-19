import React from "react";
import { Link } from "react-router-dom";

// 👉 apni images assets/blog/… me rakh lo (ya URLs use kar lo)
import img1 from "../../assets/blog/blog-1.png";
import img2 from "../../assets/blog/blog-2.png";
import img3 from "../../assets/blog/blog-3.png";
import img4 from "../../assets/blog/blog-4.png";

const posts = [
  {
    id: 1,
    href: "/blog/blockchain-force-transforming",
    category: "Blockchain",
    title: "Blockchain: The Force Transforming the Future of Stock Markets",
    date: "Jan 9, 2025",
    image: img4,
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
  // {
  //   id: 4,
  //   href: "/blog/code-collaboration-teamwork",
  //   category: "Stories",
  //   title: "Code collaboration and best practices for seamless teamwork",
  //   date: "Jan 9, 2025",
  //   image: img3,
  //   alt: "A terracotta pot plant against soft orange wall",
  // },
  // {
  //   id: 5,
  //   href: "/blog/platform-performance-speed",
  //   category: "Business",
  //   title: "Tips for optimizing your platform’s performance and speed",
  //   date: "Jan 8, 2025",
  //   image: img1,
  //   alt: "A red cup on cyan background casting a soft shadow",
  // },
  // {
  //   id: 6,
  //   href: "/blog/building-brand-loyalty-support-2",
  //   category: "Insights",
  //   title: "Building brand loyalty through exceptional customer support",
  //   date: "Jan 7, 2025",
  //   image: img2,
  //   alt: "An orange bowl on warm background",
  // },
];

export default function Blog() {
  return (
    <section id="resources" className="bg-white py-0 sm:py-10 mb-10 sm:mb-20 scroll-mt-nav">
      <div className="container-xxl">
        {/* Grid */}
        <div className="mt-12 grid gap-10 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <Link to={p.href} className="block focus:outline-none">
                <div className="overflow-hidden rounded-2xl">
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
      </div>
    </section>
  );
}
