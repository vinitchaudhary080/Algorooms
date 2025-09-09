// src/components/Navbar.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ESC to close + body scroll lock when drawer open
  const onKey = useCallback((e) => e.key === "Escape" && setOpen(false), []);
  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onKey]);

  const linkDesktop =
    "px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary";
  const linkMobile =
    "block w-full text-left px-1.5 py-3 text-[15px] font-medium text-neutral-800 hover:text-neutral-900";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-xxl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Cryptomaty Home">
  <img src={logo} alt="Cryptomaty logo" className="h-8 w-auto shrink-0 select-none" decoding="async" />
</a>


          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((it, i) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  className={`${linkDesktop} ${i === 0 ? "text-primary" : ""}`}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[15px] font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-300 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
            >
              Contact us <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[15px] font-semibold text-white bg-neutral-900 hover:bg-neutral-800 shadow-lg"
            >
              Get started <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 hover:bg-neutral-100"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <Menu className="h-full w-6" />
          </button>
        </nav>
      </div>

      {/* ===== Mobile Drawer (right slide, full white) ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-[opacity] ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
<div
  className="absolute inset-0 bg-black/40"
  onClick={() => setOpen(false)}   // 👈 backdrop click closes drawer
/>

{/* Close Button */}
<button
  onClick={() => setOpen(false)}
  className="rounded-lg p-2 hover:bg-neutral-100"
  aria-label="Close menu"
>
  <X className="h-6 w-6 text-black" />   {/* 👈 force black color */}
</button>


        {/* Panel */}
       <aside
  id="mobile-drawer"
  className={`absolute right-0 top-0 h-screen w-[86%] max-w-[360px]
              translate-x-full bg-white z-[61] shadow-2xl ring-1 ring-black/5
              transition-transform duration-300 ease-out
              ${open ? "!translate-x-0" : ""}`}
  role="dialog"
  aria-modal="true"
>
  {/* Full white flex wrapper */}
  <div className="flex flex-col h-screen bg-white">
    {/* Header */}
   <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
  <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
    <img src={logo} alt="Cryptomaty logo" className="h-7 w-auto" />
  </a>
  <button
    onClick={() => setOpen(false)}
    className="rounded-lg p-2 hover:bg-neutral-100"
    aria-label="Close menu"
  >
    <X className="h-6 w-6 text-black" />  {/* now always black */}
  </button>
</div>

    {/* Links + Buttons (scrollable) */}
    <nav className="flex-1 overflow-y-auto px-4 py-3">
      <ul className="divide-y divide-neutral-200">
        {navItems.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="block w-full text-left px-1.5 py-3 text-[15px] font-medium text-neutral-800 hover:text-neutral-900"
              onClick={() => setOpen(false)}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-3">
        <a
          href="#contact"
          className="inline-flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-300 bg-white"
          onClick={() => setOpen(false)}
        >
          Contact us <ChevronRight className="h-4 w-4" />
        </a>
        <a
          href="#get-started"
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-[15px] font-semibold text-white
                     bg-gradient-to-r from-[#0096FF] to-[#7B2FF7] hover:opacity-90 transition-opacity shadow"
          onClick={() => setOpen(false)}
        >
          Get started <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </nav>
  </div>
</aside>

      </div>
    </header>
  );
}
