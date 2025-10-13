// src/sections/LifeAtCryptomaty.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import img1 from "@/assets/life/team1.webp";
import img2 from "@/assets/life/team2.webp";
import img3 from "@/assets/life/team3.webp";
import img4 from "@/assets/life/team4.webp";

const IMGS = [img1, img2, img3, img4];

export default function LifeAtCryptomaty() {
  // Clone edges for seamless loop: [last, ...IMGS, first]
  const slides = useMemo(() => [IMGS[IMGS.length - 1], ...IMGS, IMGS[0]], []);
  const realCount = IMGS.length;

  const [idx, setIdx] = useState(1);     // start at first real slide
  const [anim, setAnim] = useState(true); // enable/disable transition for silent reset
  const wrapRef = useRef(null);
  const [wrapH, setWrapH] = useState(0);

  // autoplay
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => i + 1), 3500);
    return () => clearInterval(t);
  }, []);

  // on transition end: if we hit a clone, jump (no anim) to real index
  const onRest = () => {
    if (idx === slides.length - 1) {
      // moved to cloned last (== first)
      setAnim(false);
      setIdx(1);
      // next tick re-enable animation
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    } else if (idx === 0) {
      // moved to cloned first (== last)
      setAnim(false);
      setIdx(realCount);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
    }
  };

  // calc height from current slide aspect ratio (CounterSection style)
  const recalc = () => {
    const el = wrapRef.current;
    if (!el) return;
    const src = slides[idx];
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const ratio = img.naturalHeight / img.naturalWidth || 9 / 16;
      setWrapH(el.clientWidth * ratio);
    };
  };
  useEffect(() => {
    recalc();
    const onR = () => recalc();
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  // helper: jump to particular real slide from dots
  const goTo = (realIndex) => {
    setAnim(true);
    setIdx(realIndex + 1);
  };

  return (
    <section className="bg-white py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 ring-2 ring-[#F6F6F9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
          Life at Cryptomaty
        </span>

        {/* Title + copy */}
        <h2 className="mt-4 text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-tight tracking-tight text-neutral-900">
          Beyond Trading, Building Futures
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-[14.5px] sm:text-[15px] text-neutral-600">
          A culture that is innovative, collaborative, and growth-oriented in which every idea counts.
        </p>

        {/* Slider (same size; smooth looping slide) */}
        <div
          ref={wrapRef}
          className="relative mt-10 w-full max-w-5xl mx-auto overflow-hidden rounded-2xl ring-5 ring-[#F6F6F9] shadow-[0_10px_30px_rgba(0,0,0,0.04)] bg-white"
          style={{ height: wrapH || undefined }}
        >
          <motion.div
            className="flex h-full w-full"
            animate={{ x: `${-idx * 100}%` }}
            transition={anim ? { duration: 0.6, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
            onUpdate={() => {}} // keep framer happy
            onAnimationComplete={onRest}
            style={{ willChange: "transform" }}
          >
            {slides.map((src, i) => (
              <div key={`${src}-${i}`} className="min-w-full h-full relative px-0">
                <img
                  src={src}
                  alt={`Life at Cryptomaty ${i}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  onLoad={recalc}
                />
              </div>
            ))}
          </motion.div>

          {/* top-left micro badge */}
          <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-neutral-900 ring-1 ring-black/5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B66F6]" />
              Culture
            </span>
          </div>

          {/* Dots (blue active) */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
            {IMGS.map((_, realI) => {
              const active = (idx - 1 + realCount) % realCount === realI;
              return (
                <button
                  key={realI}
                  onClick={() => goTo(realI)}
                  aria-label={`Go to slide ${realI + 1}`}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300 ring-1 ring-black/5 bg-white/90 hover:bg-white",
                    active ? "w-6 bg-[#3B66F6]" : "w-2.5",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
