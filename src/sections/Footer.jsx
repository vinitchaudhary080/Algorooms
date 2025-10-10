// src/sections/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "../assets/logo.svg";           // left logo
import powerIcon from "../assets/power-icon.png"; // heading icon

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 scroll-mt-nav">
      {/* ===== Top CTA ===== */}
      <div className="container-xxl text-center py-16 sm:py-20">
        {/* Centered Heading with inline icon */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-black leading-[1.15] font-semibold tracking-tight text-neutral-900 flex flex-wrap items-center justify-center gap-2 text-center">
            <span>Unlock the</span>
            <span className="inline-flex items-center gap-2">
              <img
                src={powerIcon}
                alt="Power Icon"
                className="h-16 w-16 sm:h-24 sm:w-24 align-middle drop-shadow-[0_6px_16px_rgba(59,102,246,0.35)]"
                draggable="false"
              />
              <span className="text-[#3B66F6]">power</span>
            </span>
          </h2>

          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-black font-semibold leading-[1.15] tracking-tight text-neutral-900 text-center">
            for your Trading potential
          </h2>
        </div>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-[15px] text-neutral-600">
          Simplify your workflow, integrate faster, and
          <br className="hidden sm:block" />
          launch with confidence.
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="https://wa.me/917049850866"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-2xl
              px-5 py-3
              text-[15px] font-semibold text-white
              bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
              shadow-[0_10px_30px_rgba(40,100,223,0.35)]
              border-3 border-[#6C88FF]
              transition-all
              hover:shadow-[0_14px_36px_rgba(40,100,223,0.45)]
            "
          >
            Book a call now →
          </a>
        </div>
      </div>

      {/* ===== Bottom area ===== */}
      <footer className="bg-white text-neutral-900 border-t border-neutral-200">
        <div className="container-xxl py-10 sm:py-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* ===== Left side ===== */}
            <div>
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="Algorooms" className="h-6 w-auto" />
               
              </Link>

              <p className="mt-3 text-sm text-neutral-600 max-w-xs leading-relaxed">
                Lorem ipsum dolor sit amet consectetur.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="X"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-300 hover:bg-neutral-50 transition"
                >
                  <Twitter className="h-4 w-4 text-neutral-900" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-300 hover:bg-neutral-50 transition"
                >
                  <Linkedin className="h-4 w-4 text-neutral-900" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-300 hover:bg-neutral-50 transition"
                >
                  <Facebook className="h-4 w-4 text-neutral-900" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-neutral-300 hover:bg-neutral-50 transition"
                >
                  <Instagram className="h-4 w-4 text-neutral-900" />
                </a>
              </div>

              <p className="mt-6 text-xs text-neutral-500">
                ©2025 Algorooms. All rights reserved.
              </p>
            </div>

            {/* ===== Right side (Quick + Information) ===== */}
            {/* 👉 Mobile: left-aligned | Desktop: right-aligned */}
            <div className="flex justify-start md:justify-end gap-10 sm:gap-16 text-sm">
              {/* Quick */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Quick</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <Link to="/" className="hover:text-neutral-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="hover:text-neutral-900">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" className="hover:text-neutral-900">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-neutral-900">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Information */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">
                  Information
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <Link to="/contact" className="hover:text-neutral-900">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="hover:text-neutral-900">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="hover:text-neutral-900">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Right side */}
          </div>
        </div>
      </footer>
    </footer>
  );
}
