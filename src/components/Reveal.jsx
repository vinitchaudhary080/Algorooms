import React, { useEffect, useRef, useState } from "react";

/**
 * <Reveal> — on-scroll animation wrapper (no deps)
 * Props:
 *  - effect: "fade-up" | "fade-right" | "fade-left" | "zoom" | "fade"
 *  - delay: number (ms)
 *  - duration: number (ms)
 *  - once: boolean (default true) -> animate only first time
 *  - className: extra classes
 */
export default function Reveal({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 600,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.unobserve(el);
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  // base (hidden) styles by effect
  const base = {
    "fade-up": "opacity-0 translate-y-6",
    "fade-right": "opacity-0 -translate-x-6",
    "fade-left": "opacity-0 translate-x-6",
    fade: "opacity-0",
    zoom: "opacity-0 scale-[0.96]",
  }[effect];

  const visible = "opacity-100 translate-x-0 translate-y-0 scale-100";

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      className={`will-change-transform transition-all ease-out ${show ? visible : base} ${className}`}
    >
      {children}
    </div>
  );
}
