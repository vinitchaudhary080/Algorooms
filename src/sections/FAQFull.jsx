import React, { useState } from "react";

const faqs = [
  {
    q: "Is Algo trading profitable?",
    a: "Yes, if your strategy is precise and disciplined. With the right plan, algorithms turn market moves into consistent profits.",
  },
  {
    q: "What is backtesting, and why is it important?",
    a: "Backtesting tests your strategy on historical data before real money is at stake. It’s the key to filtering losing ideas and sharpening winners.",
  },
  {
    q: "What kind of crypto strategies can I automate?",
    a: "Trend-following, arbitrage, grid, and mean-reversion strategies thrive when automated. Automation removes emotion and executes trades with precision.",
  },
  {
    q: "Do I need a broker to start algo trading?",
    a: "Absolutely, an API-enabled broker or exchange is essential. Without it, your algorithm can’t place trades or seize opportunities.",
  },
  {
    q: "Can beginners use algo trading, or is it only for experts?",
    a: "Yes, beginners can start with simple bots or basic scripts. Mastery grows with learning, testing, and gradual strategy upgrades.",
  },
  {
    q: "How does crypto volatility affect automated trading?",
    a: "Volatility amplifies both profits and risks. Smart algorithms exploit swings while strict risk controls protect your capital.",
  },
  {
    q: "How transparent are the trades and logs?",
    a: "Top platforms provide full trade logs and performance metrics. You can track every action, ensuring total clarity and control.",
  },
  {
    q: "How are fees and commissions handled?",
    a: "Fees depend on your broker or exchange and are usually per trade or per volume. Algorithms execute trades automatically, so costs are deducted in real-time.",
  },
  {
    q: "Can algorithms go wrong? What happens if there’s a bug?",
    a: "Yes, bugs or poor strategies can cause losses instantly. Always test thoroughly, monitor performance, and set safeguards to minimize risk.",
  },
  {
    q: "Can I use third-party bots or strategies?",
    a: "Yes, many pre-built bots and strategies are available. Ensure they are reputable, tested, and compatible with your exchange.",
  },
  {
    q: "What about taxes and reporting?",
    a: "Profits from automated trading are taxable like regular trades. Keep logs and reports handy for accurate filings.",
  },
  {
    q: "How do I choose a good automated trading platform?",
    a: "Look for reliability, speed, API access, security, and transparent fees. A strong platform ensures smooth execution and safety of funds.",
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
