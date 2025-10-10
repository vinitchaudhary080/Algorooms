// src/sections/VideoTestimonials.jsx
import React, { useEffect, useRef, useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

import manshiVideo from "../assets/review/manshi.webm";
import pushpaVideo from "../assets/review/pushpa.webm";
import ashvinVideo from "../assets/review/ashvin.webm";

// ✅ Slider items (same videos; quotes + names added)
const SLIDES = [
  {
    name: "Manisha",
    title: "Swing Trader",
    video: manshiVideo,
    quote:
      "With Algorooms, I finally stopped stressing about my cash flow. I know where my money is going — and I’m actually saving.",
  },
  {
    name: "Pushpa Raj",
    title: "New Trader",
    video: pushpaVideo,
    quote:
      "The setup was so simple. Templates + automation gave me the confidence to start small and scale step by step.",
  },
  {
    name: "Rohit Sharma",
    title: "Investor & Part-Time Trader",
    video: ashvinVideo,
    quote:
      "Backtests + real P&L in one place. I make decisions faster and track performance without switching tools.",
  },
];

export default function VideoTestimonials() {
  const INTERVAL = 6500; // ms
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);
  const modalVideoRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (paused || isModalOpen) return;
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(t);
  }, [paused, isModalOpen]);

  // close modal helper
  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  // esc + body scroll lock
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && isModalOpen && closeModal();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = isModalOpen ? "hidden" : prev || "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev || "";
    };
  }, [isModalOpen]);

  const slide = SLIDES[idx];

  return (
    <section
      id="video-testimonials"
      className="bg-transparent py-16 sm:py-24 scroll-mt-nav"
    >
      <div
        className="container-xxl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: video card */}
          <div className="relative">
            <div
              className="
                relative overflow-hidden rounded-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
            >
              {/* looping muted preview like a thumbnail */}
              <video
                key={slide.video} // forces re-render on slide change
                src={slide.video}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover aspect-video"
              />
              {/* bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                <div className="text-sm font-semibold">{slide.name}</div>
                <div className="text-xs opacity-90">{slide.title}</div>
              </div>

              {/* Play button overlay */}
              <button
                type="button"
                onClick={() => {
                  setActiveVideoSrc(slide.video);
                  setIsModalOpen(true);
                }}
                aria-label="Play testimonial"
                className="absolute inset-0 m-auto h-16 w-16 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/80 transition"
                style={{ width: "64px", height: "64px" }}
              >
                <Play className="h-7 w-7" />
              </button>
            </div>
          </div>

          {/* RIGHT: text content */}
          <div className="relative">
            <span className="inline-flex items-center rounded-full bg-[#3B66F6] text-[#ffffff] px-3 py-1 text-xs font-semibold">
              Hear from our users
            </span>

            <h3
              key={`quote-${idx}`}
              className="
                mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900
                leading-[1.15] transition-opacity duration-500
              "
            >
              “{slide.quote}”
            </h3>

            <button
              type="button"
              onClick={() => {
                setActiveVideoSrc(slide.video);
                setIsModalOpen(true);
              }}
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-neutral-900 hover:opacity-80"
            >
              Read the full story
              <span className="inline-block translate-y-[1px]">→</span>
            </button>

            {/* Prev/Next (desktop) */}
            {/* Prev / Next buttons */}
<div className="hidden sm:flex gap-2 absolute -bottom-2 right-0">
  <button
    onClick={() => setIdx((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-300 bg-white hover:bg-neutral-50"
    aria-label="Previous"
  >
    <ChevronLeft className="h-5 w-5" style={{ color: "#212121" }} />
  </button>

  <button
    onClick={() => setIdx((p) => (p + 1) % SLIDES.length)}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-neutral-300 bg-white hover:bg-neutral-50"
    aria-label="Next"
  >
    <ChevronRight className="h-5 w-5" style={{ color: "#3B66F6" }} />
  </button>
</div>


            {/* Dots */}
            <div className="mt-6 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    i === idx ? "w-6 bg-[#3B66F6]" : "w-2.5 bg-neutral-300",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full p-2 text-white/85 hover:text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 z-[1000]"
            >
              <X className="h-6 w-6" />
            </button>

            <video
              ref={modalVideoRef}
              src={activeVideoSrc || ""}
              className="max-h-[90vh] w-auto rounded-xl shadow-2xl"
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
