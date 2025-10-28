import React, { useState } from "react";

const faqs = [
  {
    q: "Is Algo trading profitable?",
    a: "Yes, if your strategy is precise and risk-managed. Algorithms only amplify discipline, not luck.",
  },
  {
    q: "What is backtesting and why is it important?",
    a: "It verifies your strategy on historical market data, including costs. If it fails in testing, it will fail twice as hard in live markets.",
  },
  {
    q: "What kind of crypto strategies can I automate?",
    a: "Trend-following, arbitrage, grid, and mean-reversion strategies perform well when automated with proper execution controls.",
  },
  {
    q: "Do I need a broker to start algo trading?",
    a: "Yes. You must connect an API-supported broker or exchange so algorithms can execute trades in real-time.",
  },
  {
    q: "Can beginners use algo trading?",
    a: "Beginners can start with simple automated strategies. With consistent testing and iteration, complexity can increase safely.",
  },
  {
    q: "How does crypto volatility affect automated trading?",
    a: "Volatility creates opportunity, but also risk. Algorithms must include stop-loss and capital protection rules.",
  },
  {
    q: "How transparent are trades and logs?",
    a: "You get detailed logs, performance metrics, and real-time monitoring so you always understand what your system is doing.",
  },
  {
    q: "How are fees and commissions handled?",
    a: "Fees depend on your broker or exchange. They are applied on every executed order, and algorithms calculate net results accordingly.",
  },
  {
    q: "Can algorithms go wrong?",
    a: "Yes. Bugs or poor strategy logic cause instant losses. Always validate, simulate, and monitor your systems.",
  },
  {
    q: "Can I use third-party bots or strategies?",
    a: "Yes, as long as they are trusted, well-tested, and compatible with your platform and broker.",
  },
  {
    q: "How do taxes work in automated trading?",
    a: "Profits are taxed just like manual trading. Keep accurate logs for reporting and compliance.",
  },
  {
    q: "How do I choose the right platform?",
    a: "Prioritize execution speed, risk controls, transparency, and strong broker connectivity. Anything less is a liability.",
  },
  {
    q: "Best automated trading software for beginners?",
    a: "Choose tools that simplify execution and offer proven starter strategies. Avoid platforms that require coding from day one.",
  },
  {
    q: "How to use algo trading platforms in India?",
    a: "Create an account, connect a SEBI-registered API broker, build or import strategies, backtest, then deploy with active monitoring.",
  },
  {
    q: "Affordable algorithmic trading software?",
    a: "Low cost only matters if execution quality is high. Cheap platforms that freeze during volatility cost more in losses.",
  },
  {
    q: "Top trading bots for the stock market?",
    a: "Bots that combine strong signal logic with strict exit rules and fast order routing perform best in real markets.",
  },
  {
    q: "What is a no-code trading strategy builder?",
    a: "A visual rule builder that converts your logic into automated execution. Useful for beginners if the logic blocks support real-world trading conditions.",
  },
  {
    q: "How fast is real-time order execution?",
    a: "Execution happens instantly based on live price triggers. Slippage tolerance and routing logic protect order quality.",
  },
  {
    q: "What is broker integration in automated trading?",
    a: "It connects your platform to your broker’s API, enabling direct trade execution and accurate portfolio syncing.",
  },
  {
    q: "How does backtesting help traders?",
    a: "It reveals if strategies survive past volatility while including slippage and fees. Unrealistic backtests equal real losses.",
  },
  {
    q: "What is an AI-powered trading bot?",
    a: "Systems that adapt to market regimes based on data patterns. Most tools claim AI, very few demonstrate real adaptation.",
  },
  {
    q: "What matters in visual strategy software?",
    a: "Data quality, execution rules, supported exit logic, and honest performance tracking. Interface alone means nothing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((v) => (v === i ? null : i));

  return (
    <section id="faqfull" className="bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Everything you want to know
          </h2>
          <p className="mt-3 text-neutral-500">
            Fast and clear answers to the most common algo trading questions.
          </p>

          <div className="mt-5">
            <a
              href="https://wa.me/917049850866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
            >
              Contact support →
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="p-0">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-4 sm:px-5 py-4 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-[15px] font-medium text-neutral-900">
                    {item.q}
                  </span>
                  <span
                    className={`relative inline-flex h-6 w-6 items-center justify-center rounded-md border border-neutral-300 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <span className="absolute h-[1px] w-3.5 bg-neutral-700" />
                    <span className="absolute h-3.5 w-[1px] bg-neutral-700" />
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
                  }`}
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
