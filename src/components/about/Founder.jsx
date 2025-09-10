import React from "react";
import founderImg from "@/assets/about/founder.png"; // <- your image

export default function Founder() {
  return (
    <section className="bg-white py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
              Note from the founder
            </h2>

            <div className="mt-5 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                When I started this journey, my vision was simple. I wanted to
                create something that brings value, fosters connection, and
                makes a meaningful impact. Every step we’ve taken has been
                guided by a passion for innovation and a commitment to putting
                people first.
              </p>
              <p>
                This is not just a brand. It is a community, a space where ideas
                grow, challenges are met with creativity, and every voice
                matters. None of this would be possible without your support,
                trust, and belief in what we stand for. Thank you for being a
                part of this story.
              </p>
              <p>
                Together, we are building something truly special, and I can’t
                wait to see what the future holds.
              </p>
            </div>

            {/* Signature row */}
            <div className="mt-8 flex items-center justify-between max-w-sm">
              <div>
                <div className="text-sm font-semibold text-neutral-900">Ray Mort</div>
                <div className="text-xs text-neutral-500">Founder</div>
              </div>
              {/* Signature (optional image can be swapped later) */}
              <div className="text-2xl font-[600] italic text-neutral-900 select-none">
                Ray&nbsp;Mort.
              </div>
            </div>
          </div>

          {/* Right: founder photo */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={founderImg}
                alt="Founder at workspace"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
