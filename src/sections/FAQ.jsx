import React, { useState } from "react";

const faqs = [
  {
    q: "So what is to be done with this dashboard?",
    a: "Analyze markets, create and implement plans, back test concepts, as well as monitor live P&L  without leaving the building.",
  },
  {
    q: "Would it be necessary to have code formulations to create strategies?",
    a: "No coding is needed. Simply click on prerecorded templates or use our easy drag-and-drop tool.",
  },
  {
    q: "Can I link my broker account?",
    a: "Yes, safely integrate your broker account through API to be up-to-date.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely, our bank-grade encryption is used and does not share your data with third parties.",
  },
  {
    q: "What support do you offer?",
    a: "We have 24/7 customer care services through chat support, email, and knowledge base services.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null); // null = all collapsed

  const toggle = (i) => setOpen((v) => (v === i ? null : i));

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            In case you <br className="hidden sm:block" />
            missed anything
          </h2>
          <p className="mt-3 text-neutral-500">
            Get fast answers to the most popular inquiries of Cryptomaty, setting up Cryptomaty to strategy, we should know.
          </p>

          <div className="mt-5">
            <a
              href="https://wa.me/917049850866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold
             text-neutral-800 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50
             transition-colors"
            >
              Contact support →
            </a>

          </div>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="p-0">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-4 sm:px-5 py-4 sm:py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-sm sm:text-[15px] font-medium text-neutral-900">
                    {item.q}
                  </span>
                  {/* plus icon */}
                  <span
                    className={`relative inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300
                               transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <span className="absolute h-[1px] w-3.5 bg-neutral-700" />
                    <span className="absolute h-3.5 w-[1px] bg-neutral-700" />
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-panel-${i}`}
                  className={`px-4 sm:px-5 overflow-hidden transition-[max-height,opacity] duration-300
                              ${isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-neutral-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
