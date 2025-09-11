// src/components/contact/ContactHowItWorks.jsx
import React from "react";
import { Video, PlayCircle, Sparkles, Goal } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Schedule a video call",
    desc: "Pick a time that works for you and connect with our team.",
  },
  {
    icon: PlayCircle,
    title: "Live demonstration",
    desc: "Watch our product in action! We’ll showcase its features.",
  },
  {
    icon: Sparkles,
    title: "Interactive experience",
    desc: "Explore the product yourself with a guided trial or sandbox.",
  },
  {
    icon: Goal,
    title: "Next steps",
    desc: "After the demo, we’ll help you plan your next steps smoothly.",
  },
];

export default function ContactHowItWorks() {
  return (
    <section id="contact-how" className="bg-white py-16 sm:py-24">
      <div className="container-xxl">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
          Getting started has
          <br className="hidden sm:block" /> never been easier
        </h2>

        <p className="mt-4 text-center max-w-3xl mx-auto text-neutral-600">
          Our streamlined process is designed to give you a clear and personalized
          understanding of how our solution can work for you.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white">
                  <Icon className="h-4 w-4 text-neutral-800" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
