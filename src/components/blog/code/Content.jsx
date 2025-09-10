// src/components/blog/code/Content.jsx
import React from "react";
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

// swap with your real avatar if you have one
import authorAvatar from "@/assets/avatars/john.png";

export default function CodeDetailContent() {
  return (
    <section className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div className="container-xxl">
        <article className="mx-auto max-w-3xl text-[15px] leading-7 text-neutral-700">
          {/* Intro */}
          <p className="text-neutral-700">
            In the realm of digital design, simplicity has emerged as a cornerstone of
            effective user experience (UX). As our lives grow increasingly saturated with
            technology, users crave interfaces that are intuitive, efficient, and
            aesthetically pleasing. Design simplicity is not just a stylistic choice; it is a
            strategic approach to creating experiences that resonate with users and achieve{" "}
            <span className="font-semibold text-neutral-900">business goals</span>.
          </p>

          {/* H2 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            Faster Performance
          </h2>
          <p className="mt-2">
            Complex designs with heavy graphics, animations, or excessive features can slow
            down performance, particularly on mobile devices or areas with limited bandwidth.
            Simplicity optimizes performance by reducing the number of elements a system
            needs to load, ensuring a smoother and more responsive user experience.
          </p>

          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            Improved Accessibility
          </h2>
          <p className="mt-2">
            Simple designs are often more accessible to users with diverse needs. For
            individuals with visual impairments, cognitive challenges, or motor
            difficulties, a clutter-free interface with clear labels, large buttons, and
            sufficient contrast can make all the difference. Simplicity ensures inclusivity,
            enabling a broader audience to benefit from the product.
          </p>

          {/* List */}
          <h3 className="mt-8 text-[16px] font-semibold text-neutral-900">
            List of Benefits
          </h3>
          <ul className="mt-3 space-y-2">
            {[
              {
                t: "Increased Clarity:",
                d: "A simple design helps users quickly understand what the product or service does, reducing confusion and enhancing their ability to navigate.",
              },
              {
                t: "Improved Usability:",
                d: "By minimizing unnecessary features, users can easily find what they need without distraction, leading to more efficient interaction.",
              },
              {
                t: "Faster Learning Curve:",
                d: "Simplicity makes it easier for new users to get up to speed, as they don’t have to spend time deciphering complex elements.",
              },
            ].map((item, i) => (
              <li key={i} className="relative pl-5">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span className="font-semibold text-neutral-900">{item.t}</span>{" "}
                <span>{item.d}</span>
              </li>
            ))}
          </ul>

          {/* Paragraph */}
          <p className="mt-3">
            For new users, a complex design can feel like an insurmountable challenge.
            Simplicity reduces the learning curve by making interfaces predictable and
            familiar. By adhering to established design conventions—such as standard
            button placements and intuitive gestures—designers help users quickly understand
            how to navigate and use a product.
          </p>

          {/* Quote card */}
          <figure className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote className="italic text-neutral-800">
              “Accessibility is not a feature, it’s a social trend.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-neutral-500">
              – Antonio Santos
            </figcaption>
          </figure>

          {/* Dev perspective */}
          <p className="mt-8">
            From a development perspective, simple designs are easier to maintain and scale.
            Minimalistic interfaces often require fewer resources to update, debug, or expand.
            This efficiency translates to faster development cycles and reduced costs,
            benefiting both users and stakeholders.
          </p>

          {/* Conclusion */}
          <h3 className="mt-8 text-[16px] font-semibold text-neutral-900">
            Conclusion
          </h3>
          <p className="mt-2">
            Simplicity in design is not about stripping away features or oversimplifying
            functionality; it’s about creating clarity and removing unnecessary complexity.
            By prioritizing cognitive ease, usability, accessibility, and aesthetic appeal,
            simple designs foster positive user experiences that drive engagement and
            satisfaction. In an increasingly competitive digital landscape, embracing
            simplicity is not just a design trend—it’s a necessity for creating products
            that truly resonate with users.
          </p>

          {/* Footer: author + share */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-neutral-200">
                <img
                  src={authorAvatar}
                  alt="John Parker"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">John Parker</div>
                <div className="text-xs text-neutral-500">Customer Success</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-neutral-500">
              <span className="text-xs">Share</span>
              <a href="#" aria-label="Share on X" className="hover:text-neutral-800">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Share on Facebook" className="hover:text-neutral-800">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Share on LinkedIn" className="hover:text-neutral-800">
                <Linkedin className="h-4 w-4" />
              </a>
              <button aria-label="Copy link" className="hover:text-neutral-800">
                <LinkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
