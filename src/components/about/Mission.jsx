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

function Stat({ label, from, to, duration = 1500, suffix = "", start = false }) {
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
              Making software <br className="hidden sm:block" />
              better for everyone
            </h2>
          </div>

          {/* Right: Copy */}
          <div className="text-neutral-600 leading-relaxed">
            <p>
              What began as a vision to simplify business operations has grown
              into a platform trusted by teams worldwide. From our humble
              beginnings to becoming a leader in SaaS innovation, our journey
              has been fueled by passion, collaboration, and a relentless drive
              to make a difference.
            </p>
            <p className="mt-4">
              Our goal is to simplify complex processes, enabling businesses to
              focus on what matters most—their goals and customers. By
              delivering powerful yet user-friendly software solutions, we’re
              redefining productivity and innovation for teams of all sizes.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-neutral-200" />

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat label="Year founded" from={1000} to={2010} duration={1400} start={startCount} />
          <Stat label="Total funding" from={0} to={30}   duration={1400} suffix="M" start={startCount} />
          <Stat label="Team members"  from={0} to={15}   duration={1400} suffix="+" start={startCount} />
          <Stat label="Companies"     from={0} to={25}   duration={1400} suffix="K" start={startCount} />
        </div>
      </div>
    </section>
  );
}
