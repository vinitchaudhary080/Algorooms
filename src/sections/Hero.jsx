// src/sections/Hero.jsx
import { ChevronRight } from "lucide-react";
import heroRight from "@/assets/hero-right.png";
import boltIcon from "@/assets/bolt-icon.png";

export default function Hero() {
  return (
    <section className="relative bg-transparent overflow-visible">
      {/* ===== Right image (DESKTOP ONLY) ===== */}
      <div
        className="
          pointer-events-none
          absolute -right-16 top-6 hidden lg:block
          w-[720px] max-w-none rotate-[6deg]
          z-[60]
        "
        aria-hidden="true"
      >
        <img
          src={heroRight}
          alt="Algorooms dashboard"
          className="
            rounded-2xl
            [mask-image:linear-gradient(to_left,rgba(0,0,0,0),rgba(0,0,0,.85) 18%,rgba(0,0,0,1))]
            opacity-95
          "
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ===== Main content ===== */}
      <div className="container-xxl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-10 items-start py-12 sm:py-16 lg:py-24">
          {/* LEFT */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-10">
            {/* top badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-2 py-1 text-xs font-semibold ring-2 ring-[#F6F6F9]">
                <span className="inline-flex items-center justify-center rounded-full bg-[#3B66F6] px-2 py-0.5 text-white">
                  Algorooms
                </span>
                <span className="text-neutral-600/90 font-medium">Smarter &amp; Faster</span>
              </span>
            </div>

            {/* heading */}
            <h1 className="text-[40px] leading-[1.05] sm:text-6xl sm:leading-[1.03] font-black font-semibold tracking-tight text-neutral-900">
              Power{" "}
              <img
                src={boltIcon}
                alt=""
                className="inline-block align-middle h-16 w-16 sm:h-24 sm:w-24 mx-1 translate-y-[-2px] drop-shadow-[0_10px_22px_rgba(59,102,246,.35)]"
                draggable="false"
              />{" "}
              up your
              <br />
              Trading and Profit.
            </h1>

            {/* subtext */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-neutral-500">
              Lorem ipsum dolor sit amet consectetur. Placerat quis mi sed volutpat.
              Dui porttitor non molestie adipiscing.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="
                  inline-flex items-center gap-2 rounded-2xl px-5 py-3
                  text-[15px] font-semibold text-white
                  bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
                  shadow-[0_10px_30px_rgba(40,100,223,0.35)]
                  border-3 border-[#6C88FF]
                  transition-all
                  hover:shadow-[0_14px_36px_rgba(40,100,223,0.45)]
                "
              >
                Get started <ChevronRight className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-neutral-800 hover:opacity-80"
              >
                Explore More <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* ===== Mobile/Tablet Image (NO BORDER) ===== */}
            <div className="mt-10 block lg:hidden">
              <img
                src={heroRight}
                alt="Algorooms dashboard"
                className="
                  mx-auto w-[94%] max-w-[600px]
                  rounded-2xl
                  opacity-95
                  object-contain
                  border-0 ring-0 outline-none shadow-none
                "
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* spacer for desktop */}
          <div className="lg:col-span-6 xl:col-span-7" />
        </div>
      </div>
    </section>
  );
}
