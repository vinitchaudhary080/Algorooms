import React, { useEffect, useRef, useState } from "react";

/* ---------- Tiny CountUp (no library) ---------- */
function useCountUp({ from = 0, to = 100, duration = 1500, start = false }) {
  const [val, setVal] = useState(from);
  const raf = useRef(null);
  const startTs = useRef(0);

  useEffect(() => {
    if (!start) return;

    const step = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const p = Math.min(1, (ts - startTs.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(from + (to - from) * eased);
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [start, from, to, duration]);

  return val;
}

function Stat({ label, from, to, duration = 1500,  prefix = "", suffix = "", start = false }) {
  // 👆 ab yahan koi observer nahi — parent trigger se start aayega
  const value = useCountUp({ from, to, duration, start });

  return (
    <div className="text-center">
      <div className="text-2xl sm:text-[26px] font-semibold text-neutral-900 tabular-nums">
        {Math.round(value)}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-neutral-500">{label}</div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function Mission() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Section-level observer: at least ~40% visible, then fire once
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          io.disconnect(); // once-only
        }
      },
      {
        threshold: 0.4,
        // thoda late trigger ke liye bottom side margin reduce:
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left: Badge + Title */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Our mission
            </span>

            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
              Empowering Traders,  <br className="hidden sm:block" />
              Every Step of the Way
            </h2>
          </div>

          {/* Right: Copy */}
          <div className="text-neutral-600 leading-relaxed">
            <p>
              Cryptomaty was established in the year with the mission of streamlining and enhancing crypto trade. What began as a concept in 2024 has since become a worldwide platform that traders appreciate using smarter tools and will execute faster and be fully aware of each choice.
            </p>
            <p className="mt-4">
             There are a number of strategies that have been developed and tested by traders all over the world using Cryptomaty. From the amateur to the professional, our expanding community continues to be dependent on the same strategies to trade in a smarter way to gain a competitive advantage in the market daily. 
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-neutral-200" />

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <Stat
  label="Start now, no secret charges, no initiation fee."
  prefix="₹"
/>


          <Stat label="Representative traders expanding with us." from={0} to={19}   duration={1400} suffix="K+" start={startCount} />
          <Stat label="Quickened backtesting and reporting."  from={0} to={95}   duration={1400} suffix="%" start={startCount} />
          <Stat label="Specialized assistance to traders."     from={0} to={24}   duration={1400} suffix="/7" start={startCount} />
        </div>
      </div>
    </section>
  );
}
