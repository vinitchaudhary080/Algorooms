import React, { useEffect, useRef, useState } from "react";
import reviewVideo from "../assets/review/review.mp4";

// 8 cards as you said
const PEOPLE = [
  { name: "Rohit Sharma",  title: "Lorem ipsum dolor sit amet." },
  { name: "Pushpa Raj",    title: "Lorem ipsum dolor sit amet consectetur." },
  { name: "Manish Yadav",  title: "Lorem ipsum dolor sit amet." },
  { name: "Aarav Mehta",   title: "Lorem ipsum dolor sit amet." },
  { name: "Saanvi Verma",  title: "Lorem ipsum dolor sit amet." },
  { name: "Ishaan Patel",  title: "Lorem ipsum dolor sit amet." },
  { name: "Aditi Singh",   title: "Lorem ipsum dolor sit amet." },
  { name: "Kabir Khanna",  title: "Lorem ipsum dolor sit amet." },
];

export default function VideoTestimonials() {
  // continuous marquee settings
  const SPEED_PX_PER_SEC = 70; // 👈 speed adjust (60–90 is nice)
  const [isPlaying, setIsPlaying] = useState(true);

  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const firstCardRef = useRef(null);

  // refs for animation loop
  const rafId = useRef(0);
  const lastTs = useRef(0);
  const x = useRef(0);                 // current translateX
  const step = useRef(0);              // card width + gap
  const loopWidth = useRef(0);         // width of original set

  // measure card width + gap so we can loop perfectly
  const measure = () => {
    if (!firstCardRef.current || !trackRef.current) return;
    const cardW = firstCardRef.current.getBoundingClientRect().width;
    const styles = getComputedStyle(trackRef.current);
    const gap =
      parseFloat(styles.columnGap || styles.gap || "0") || 0;
    step.current = cardW + gap;
    loopWidth.current = step.current * PEOPLE.length; // one set width
  };

  // animation loop
  const tick = (ts) => {
    if (!lastTs.current) lastTs.current = ts;
    const dt = (ts - lastTs.current) / 1000; // seconds delta
    lastTs.current = ts;

    if (isPlaying && trackRef.current) {
      x.current -= SPEED_PX_PER_SEC * dt;
      // when we've scrolled a full set width, snap forward
      if (Math.abs(x.current) >= loopWidth.current) {
        x.current += loopWidth.current;
      }
      trackRef.current.style.transform = `translateX(${x.current}px)`;
    }
    rafId.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (firstCardRef.current) ro.observe(firstCardRef.current);
    window.addEventListener("resize", measure);

    rafId.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white py-0 scroll-mt-nav">
      <div className="container-xxl">
        {/* Heading (optional, you can keep or remove) */}
        {/* <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Video testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            What traders say in their own words
          </h2>
          <p className="mt-4 text-neutral-500">
            Continuous reel of short reviews — smooth and distraction free.
          </p>
        </div> */}

        {/* Slider */}
        <div
          ref={wrapRef}
          className="mt-12 overflow-hidden relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* subtle edge mask for nicer look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

          {/* track with duplicated content for seamless loop */}
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            {[...PEOPLE, ...PEOPLE].map((p, i) => (
              <VideoCard
                key={`${p.name}-${i}`}
                person={p}
                ref={i === 0 ? firstCardRef : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Single card
const VideoCard = React.forwardRef(function VideoCard({ person }, ref) {
  return (
    <article
      ref={ref}
      className="
        w-[78%] xs:w-[65%] sm:w-[48%] lg:w-[30%] xl:w-[23%]
        flex-shrink-0"
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
        <video
          src={reviewVideo}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-neutral-900">{person.name}</h3>
        <p className="text-xs text-neutral-500">{person.title}</p>
      </div>
    </article>
  );
});
