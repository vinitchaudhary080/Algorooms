import React from "react";
import { Lightbulb, UserCheck, ShieldCheck, Lock } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "Pushing the limits with smarter trading tools.",
  },
  {
    icon: UserCheck,
    title: "Trader-Centric",
    desc: "Planning ahead with a view to your needs and development.",
  },
  {
    icon: ShieldCheck,
    title: "Openness",
    desc: "Uses transparent, reliable, and honest processes in everything.",
  },
  {
    icon: Lock,
    title: "Security & Trust",
    desc: "Guarding your information and trades using the finest safety systems.",
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
            The Principles That Power Cryptomaty
          </h2>
          <p className="mt-4 text-neutral-500">
            Values that become the map in every single step at Cryptomaty and guarantee trust, innovation, and success of its traders.
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
                <div className="text-sm font-semibold text-neutral-900">
                  {title}
                </div>
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
