// src/sections/FeatureListing.jsx
import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";

// 🔁 Replace these with your real assets (1:1 with items array order)
import imgTradingView from "@/assets/features/templates.png";
import imgCncBtst from "@/assets/features/seamless.png";
import imgPotential from "@/assets/features/templates.png";
import imgEquityOptions from "@/assets/features/seamless.png";
import imgPriceAction from "@/assets/features/templates.png";

const items = [
  { id: "tradingview", title: "Trade execution with Tradingview", subtitle: "Execute trades directly from integrated charting tools with one-click precision and zero lag.", image: imgTradingView },
  { id: "cnc-btst", title: "CNC & BTST Trading", subtitle: "Manage typography and colors globally to keep every page consistent while trading confidently.", image: imgCncBtst },
  { id: "potential", title: "Easy Potential Trading", subtitle: "Identify high-potential opportunities and minimize manual errors through smart automation.", image: imgPotential },
  { id: "equity-options", title: "Equity, Options & Future Trading", subtitle: "Access all trading segments in one place — from equity delivery to complex futures and options.", image: imgEquityOptions },
  { id: "price-action", title: "Price Actions Trading", subtitle: "Analyze real-time movements using advanced charts, P&L tracking, and AI-generated trade signals.", image: imgPriceAction },
];

export default function FeatureListing() {
  const [active, setActive] = useState(items[0].id);
  const listRef = useRef(null);
  const cardRefs = useRef({});

  const activeItem = useMemo(() => items.find((i) => i.id === active) ?? items[0], [active]);

  const scrollIntoView = useCallback((id) => {
    const el = cardRefs.current[id];
    const container = listRef.current;
    if (!el || !container) return;
    const elTop = el.offsetTop;
    const elH = el.offsetHeight;
    const cH = container.clientHeight;
    container.scrollTo({ top: Math.max(0, elTop - cH / 2 + elH / 2), behavior: "smooth" });
  }, []);

  // Arrow key navigation
  useEffect(() => {
    const handler = (e) => {
      if (!listRef.current?.matches(":hover,:focus-within")) return;
      const idx = items.findIndex((i) => i.id === active);
      if (e.key === "ArrowDown") {
        const next = items[Math.min(items.length - 1, idx + 1)].id;
        setActive(next);
        scrollIntoView(next);
      }
      if (e.key === "ArrowUp") {
        const prev = items[Math.max(0, idx - 1)].id;
        setActive(prev);
        scrollIntoView(prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, scrollIntoView]);

  return (
    <section
      id="feature-listing"
      className="pt-12 pb-4 sm:pt-20 sm:pb-6 bg-transparent scroll-mt-nav" // ⬅️ tighter bottom spacing
    >
      <div className="container-xxl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* ---------- LEFT: Heading + List ---------- */}
          <div className="lg:col-span-1">
            <div className="max-w-lg">
              <h2 className="text-[34px] sm:text-5xl font-semibold  leading-tight tracking-tight text-neutral-900">
                All-in-one dashboard
                <br /> for your business.
              </h2>
              {/* Mobile-only blurb */}
              <p className="mt-4 text-neutral-600 md:hidden">
                Track performance, manage data, and integrate with your favorite tools — all
                from a single, streamlined interface.
              </p>
            </div>

            {/* Scrollable list */}
           <div className="relative mt-8">
  {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-10 z-10 [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[#F0F0F0]" /> */}

  <div
    ref={listRef}
    className="relative max-h-[420px] pr-1"
    style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
  >
    <ul className="space-y-3">
      {items.map((it) => {
        const isActive = active === it.id;
        return (
          <li key={it.id}>
            <button
              ref={(node) => (cardRefs.current[it.id] = node)}
              type="button"
              onClick={() => {
                setActive(it.id);
                scrollIntoView(it.id);
              }}
              className={[
                "w-full text-left rounded-[18px] px-5 py-6 transition-all duration-300 bg-white ring-5 ring-[#F6F6F9]",
                isActive
                  ? "shadow-[0_12px_30px_rgba(0,0,0,0.08)] scale-[1.02]"
                  : "hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                {isActive ? (
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#3B66F6] shadow-[0_0_0_3px_rgba(59,102,246,0.18)]" />
                ) : (
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-transparent" />
                )}
                <div className="flex-1">
                  <div
                    className={[
                      "text-[15px] sm:text-base font-semibold",
                      isActive ? "text-neutral-900" : "text-neutral-800",
                    ].join(" ")}
                  >
                    {it.title}
                  </div>
                  {isActive && it.subtitle && (
                    <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                      {it.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  </div>
</div>

          </div>

          {/* ---------- RIGHT: Desktop paragraph + Image ---------- */}
          <div className="lg:col-span-2 mt-10 md:mt-8 lg:mt-0">
            <p className="hidden md:block text-neutral-600 max-w-md ml-auto mb-6">
              Track performance, manage data, and integrate with your favorite tools — all
              from a single, streamlined interface.
            </p>

            <div className="relative rounded-[44px] overflow-hidden">
              <div className="p-2 sm:p-3">
                <div className="relative rounded-[32px] overflow-hidden">
                  {items.map((it) => (
                    <img
                      key={it.id}
                      src={it.image}
                      alt={it.title}
                      className={[
                        "absolute inset-0 w-full h-auto object-contain rounded-[32px] transition-opacity duration-500 ease-in-out",
                        active === it.id ? "opacity-100 relative z-10" : "opacity-0",
                      ].join(" ")}
                      loading={active === it.id ? "eager" : "lazy"}
                      decoding="async"
                    />
                  ))}
                  {/* ⬇️ removed invisible height placeholder to kill extra bottom space */}
                </div>
              </div>
            </div>
          </div>
          {/* ---------- /RIGHT ---------- */}
        </div>
      </div>
    </section>
  );
}
