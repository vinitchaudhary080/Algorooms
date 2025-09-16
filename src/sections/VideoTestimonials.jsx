import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

// 🎥 Individual testimonial videos
import manshiVideo from "../assets/review/manshi.webm";
import kanchanVideo from "../assets/review/kanchan.webm";
import pushpaVideo from "../assets/review/pushpa.webm";
import ashvinVideo from "../assets/review/ashvin.webm";

// 8 cards (repeat your 4 vids in a cycle, or swap to unique ones if you have them)
const PEOPLE = [
  { name: "Rohit Sharma",  title: "Lorem ipsum dolor sit amet.",               video: manshiVideo },
  { name: "Pushpa Raj",    title: "Lorem ipsum dolor sit amet consectetur.",   video: pushpaVideo },
  { name: "Manish Yadav",  title: "Lorem ipsum dolor sit amet.",               video: kanchanVideo },
  { name: "Aarav Mehta",   title: "Lorem ipsum dolor sit amet.",               video: ashvinVideo },
  { name: "Saanvi Verma",  title: "Lorem ipsum dolor sit amet.",               video: manshiVideo },
  { name: "Ishaan Patel",  title: "Lorem ipsum dolor sit amet.",               video: pushpaVideo },
  { name: "Aditi Singh",   title: "Lorem ipsum dolor sit amet.",               video: kanchanVideo },
  { name: "Kabir Khanna",  title: "Lorem ipsum dolor sit amet.",               video: ashvinVideo },
];

export default function VideoTestimonials() {
  // marquee scroll
  const SPEED_PX_PER_SEC = 70;
  const [isPlaying, setIsPlaying] = useState(true);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);
  const modalVideoRef = useRef(null);

  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const firstCardRef = useRef(null);

  const rafId = useRef(0);
  const lastTs = useRef(0);
  const x = useRef(0);
  const step = useRef(0);
  const loopWidth = useRef(0);

  // measure card width + gap so we can loop perfectly
  const measure = () => {
    if (!firstCardRef.current || !trackRef.current) return;
    const cardW = firstCardRef.current.getBoundingClientRect().width;
    const styles = getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    step.current = cardW + gap;
    loopWidth.current = step.current * PEOPLE.length; // one set width
  };

  // animation loop
  const tick = (ts) => {
    if (!lastTs.current) lastTs.current = ts;
    const dt = (ts - lastTs.current) / 1000; // seconds
    lastTs.current = ts;

    if (isPlaying && trackRef.current) {
      x.current -= SPEED_PX_PER_SEC * dt;
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

  // open modal
  const openModal = (src) => {
    setActiveVideoSrc(src);
    setIsModalOpen(true);
    setIsPlaying(false); // pause marquee while modal open
  };

  // close modal (backdrop/Esc) → also pause + reset
  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(true);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  // close only (X button) → no pause/reset
  const closeModalOnly = () => {
    setIsModalOpen(false);
    setIsPlaying(true);
  };

  // close on ESC + lock body scroll
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && isModalOpen && closeModal();
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prevOverflow || "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow || "";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white py-0 scroll-mt-nav">
      <div className="container-xxl">
        {/* Slider */}
        <div
          ref={wrapRef}
          className="mt-12 overflow-hidden relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => !isModalOpen && setIsPlaying(true)}
        >
          {/* subtle edge masks */}
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
                onOpen={() => openModal(p.video)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4 overflow-y-auto"
          onClick={closeModal} // backdrop click closes + pauses/resets
          aria-modal="true"
          role="dialog"
        >
          {/* Panel */}
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-black shadow-xl my-8"
            onClick={(e) => e.stopPropagation()} // prevent backdrop close
          >
            {/* Close (X) — closes only, no pause/reset */}
            <button
              type="button"
              onClick={closeModalOnly}
              aria-label="Close"
              className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video — scales to viewport */}
            <video
              ref={modalVideoRef}
              src={activeVideoSrc || ""}
              className="w-full h-auto max-h-[80vh] rounded-2xl"
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}

// Single card
const VideoCard = React.forwardRef(function VideoCard({ person, onOpen }, ref) {
  return (
    <article
      ref={ref}
      className="w-[78%] xs:w-[65%] sm:w-[48%] lg:w-[30%] xl:w-[23%] flex-shrink-0"
    >
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Play testimonial from ${person.name}`}
      >
        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
          {/* Card videos stay muted for smooth autoplay */}
          <video
            src={person.video}
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
      </button>
    </article>
  );
});
