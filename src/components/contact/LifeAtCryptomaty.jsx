import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 👇 apne images import ya array bana lo
import img1 from "@/assets/life/life1.jpg";
import img2 from "@/assets/life/life2.jpg";
import img3 from "@/assets/life/life3.jpg";

const images = [img1, img2, img3];

export default function LifeAtCryptomaty() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-xxl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Life at Cryptomaty
        </span>

        {/* Title */}
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
          Meet the team behind the vision
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-600">
          A glimpse into our daily culture — where creativity meets collaboration,
          innovation thrives, and people love what they do.
        </p>

        {/* Image slider */}
        <div className="relative mt-10 h-[400px] sm:h-[500px] w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              alt={`Life at Cryptomaty ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>

          {/* Overlay text */}
          <div className="absolute inset-0 bg-black/30 flex items-end p-8 text-left">
            <div className="text-white max-w-md">
              <h3 className="text-xl sm:text-2xl font-semibold">
                “Building the future, together.”
              </h3>
              <p className="mt-2 text-sm text-neutral-200">
                Every day at Cryptomaty is about pushing boundaries, learning, and
                celebrating teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
