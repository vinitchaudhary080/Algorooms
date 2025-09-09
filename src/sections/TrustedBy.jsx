// src/sections/TrustedBy.jsx
import React from "react";
import orbitc from "../assets/brands/orbitc.svg";
import cloud from "../assets/brands/cloud.svg";
import proline from "../assets/brands/proline.svg";
import amsterdam from "../assets/brands/amsterdam.svg";
import luminous from "../assets/brands/luminous.svg";
import springfield from "../assets/brands/springfield.svg";

const logos = [springfield, orbitc, cloud, proline, amsterdam, luminous];

export default function TrustedBy() {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      <div className="container-xxl text-center">
        <p className="text-sm text-neutral-500 mb-8">
          Trusted by the world leaders
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Track: content duplicated twice */}
        <div className="flex gap-16 whitespace-nowrap animate-marquee will-change-transform">
          {[...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`brand-${i}`}
              className="h-8 sm:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
