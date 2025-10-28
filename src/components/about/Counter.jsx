// src/sections/CounterSection.jsx
import React, { useEffect, useRef, useState } from "react";
import teamImg from "@/assets/about/team.png"; // 👈 yahan apni image ka path daalna

/* ---------- CountUp Hook ---------- */
function useCountUp({ from = 0, to = 100, duration = 1500, start = false }) {
  const [val, setVal] = useState(from);
  const raf = useRef(null);
  const startTs = useRef(0);

  useEffect(() => {
    if (!start) return;

    const step = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const progress = Math.min(1, (ts - startTs.current) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setVal(from + (to - from) * eased);
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [start, from, to, duration]);

  return val;
}

/* ---------- Single Stat ---------- */
function Stat({ from, to, suffix = "", label, start, duration = 2000 }) {
  const val = useCountUp({ from, to, duration, start });
  return (
    <div className="text-center">
      <div className="text-[32px] sm:text-[40px] font-bold text-neutral-900 tabular-nums">
        {Math.round(val)}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-neutral-500">{label}</div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function CounterSection() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F6F6F8] py-8 sm:py-16 scroll-mt-nav">
      <div className="container-xxl">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={teamImg}
            alt="Team working"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat from={0} to={2010} label="Integrated Brokers" start={start} duration={1600} />
          <Stat from={0} to={15} suffix="K+" label="Algo Strategies Created" start={start} duration={1600} />
          <Stat from={0} to={25} suffix="K+" label="Trades Automated" start={start} duration={1600} />
          <Stat from={0} to={99} suffix="%" label="Execution Accuracy" start={start} duration={1600} />
        </div>
      </div>
    </section>
  );
}
