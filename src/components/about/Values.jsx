import React from "react";
import { UsersRound, Sparkles, Gem, Leaf } from "lucide-react";

const items = [
  {
    icon: UsersRound,
    title: "Collaboration",
    desc:
      "Working together to achieve shared goals and innovation.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    desc:
      "Continuously evolving to meet challenges and opportunities.",
  },
  {
    icon: Gem,
    title: "Excellence",
    desc:
      "Committing to the highest standards in our products.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc:
      "Focusing on long-term impact and positive change.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Our values
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Our core values
          </h2>
          <p className="mt-4 text-neutral-500">
            We believe in forging strong relationships with our customers,
            partners, and employees, based on trust and mutual respect.
          </p>
        </div>

        {/* Values grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white">
                <Icon className="h-4 w-4 text-neutral-900" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">{title}</div>
                <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
