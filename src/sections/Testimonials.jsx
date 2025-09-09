// src/sections/Testimonials.jsx
import React from "react";
import { Quote } from "lucide-react";
import fadeImg from "../assets/Fade.png"; // 👈 bottom fade image

const items = [
  {
    text: "Using this product has been such a smooth experience. The clean UI & a lot of thought went into making it user-friendly.",
    name: "Diana Musker",
    role: "Head of Product, Cloud",
  },
  {
    text: "I didn’t realize how much I needed this product until I started using it. It’s reliable and easy to use.",
    name: "Paul Smith",
    role: "Creative Director, Luminous",
  },
  {
    text: "This product does everything I hoped for and more. The design is so intuitive, and it fits seamlessly into my routine.",
    name: "Tim Williams",
    role: "Founder, Orbitc",
  },
  {
    text: "I’ve tried countless products; nothing comes close. The design is incredibly user-friendly.",
    name: "James Anderson",
    role: "Founder, Aura",
  },
  {
    text: "Simple yet powerful. This has become essential for me.",
    name: "David Mitchell",
    role: "VP of Sales, Proline",
  },
  {
    text: "Genuinely impressed with how well this works. Integrates into my routine seamlessly.",
    name: "Benjamin Meier",
    role: "Product Manager, Hamilton",
  },
  {
    text: "So easy to set up. Minimal UI, intuitive UX, performs beautifully.",
    name: "Natalie Brooks",
    role: "Co-founder, Anecdocs",
  },
  {
    text: "Exactly what I was looking for. Reliable and beautifully designed.",
    name: "Ishaan Patel",
    role: "Design Lead, Aeron",
  },
  {
    text: "Exceeded expectations. Made my life easier in ways I didn’t expect.",
    name: "John Parker",
    role: "Marketing Director, Menlia",
  },
];

export default function Testimonials() {
  return (
  <section
  id="testimonials"
  className="relative isolate py-20 sm:py-28 overflow-hidden" // 👈 add `isolate`
  style={{ background: "linear-gradient(to bottom, #F6F6F8 0%, #FFFFFF 100%)" }}
>
  {/* Bottom Fade Image */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 mb-[-5px] z-50">
    <img
      src={fadeImg}
      alt="fade effect"
      className="mx-auto w-full max-w-[1400px] select-none"
      loading="lazy"
    />
  </div>


      <div className="container-xxl relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Trusted by 19,000+ Active <br className="hidden sm:block" />
            Traders Worldwide
          </h2>
          <p className="mt-4 text-neutral-500">
            Find out why our solution is the top choice for fast-growing startups.
          </p>
        </div>

        {/* Cards Grid */}
        {/* Cards Grid */}
<div className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items
    // mobile: show only 3, tablet/desktop: show all
    .slice(0, 3) // by default first 3
    .map((t, i) => (
      <article
        key={i}
        className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
      >
        <Quote className="h-4 w-4 text-neutral-300" />
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          “{t.text}”
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-200" />
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              {t.name}
            </div>
            <div className="text-xs text-neutral-500">{t.role}</div>
          </div>
        </div>
      </article>
    ))}

  {/* 👇 show remaining cards only on sm+ */}
  {items.slice(3).map((t, i) => (
    <article
      key={`extra-${i}`}
      className="hidden sm:block rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
    >
      <Quote className="h-4 w-4 text-neutral-300" />
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
        “{t.text}”
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-neutral-200" />
        <div>
          <div className="text-sm font-semibold text-neutral-900">
            {t.name}
          </div>
          <div className="text-xs text-neutral-500">{t.role}</div>
        </div>
      </div>
    </article>
  ))}
</div>


        {/* Show more CTA */}
        {/* <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
          >
            Show more +
          </button>
        </div> */}
      </div>
    </section>
  );
}
