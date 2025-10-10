// src/components/Navbar.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", to: "/", type: "route" },
  { label: "About", to: "/about", type: "route" },
  { label: "What’s New", to: "/features", type: "route" },
  { label: "Pricing", to: "/pricing", type: "route" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const onKey = useCallback((e) => e.key === "Escape" && setOpen(false), []);
  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onKey]);

  // desktop link styles
  const linkDesktop =
    "px-3 py-2 text-[15px] font-medium text-neutral-500 hover:text-[#3B66F6]";
  const linkActive = "text-[#3B66F6] font-semibold";

  return (
    <header
  className="
    sticky top-0 z-50
    bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
    relative
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0
    after:h-[1px] after:bg-[#F6F6F9]
  "
>

      <div className="container-xxl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Algorooms Home">
            <img
              src={logo}
              alt="Algorooms logo"
              className="h-8 w-auto shrink-0 select-none"
              decoding="async"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((it) => (
              <li key={it.label}>
                {it.type === "route" ? (
                  <NavLink
                    to={it.to}
                    end={it.to === "/"}
                    className={({ isActive }) =>
                      `${linkDesktop} ${isActive ? linkActive : ""}`
                    }
                  >
                    {it.label}
                  </NavLink>
                ) : (
                  <a href={it.href} className={linkDesktop}>
                    {it.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-[15px] font-semibold text-neutral-900 ring-2 ring-[#F0F0F0]  hover:shadow transition-all hover:bg-white/70"
            >
              Contact <ChevronRight className="h-4 w-4" />
            </Link>

            <a
              href="#"
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
              Get Started <ChevronRight className="h-4 w-4" />
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

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-[opacity] ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

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
          {/* Top row: logo left + bordered close right */}
          <div className="flex items-center justify-between px-4 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              aria-label="Algorooms Home"
              className="flex items-center gap-2"
            >
              <img src={logo} alt="Algorooms" className="h-7 w-auto" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 ring-2 ring-[#212121]/10 hover:bg-neutral-50 transition"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-black" />
            </button>
          </div>

          {/* Centered content like reference */}
          <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-start pt-2">
            {/* Menu items */}
            <nav className="w-full">
              <ul className="flex flex-col items-center gap-4 mt-4">
                {navItems.map((it) => (
                  <li key={it.label} className="w-full">
                    {it.type === "route" ? (
                      <NavLink
                        to={it.to}
                        end={it.to === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          [
                            // reference-style big clean links
                            "block text-center py-3 text-[20px] sm:text-[22px] font-medium tracking-tight",
                            isActive ? "text-[#3B66F6]" : "text-neutral-900 hover:text-neutral-700",
                          ].join(" ")
                        }
                      >
                        {it.label}
                      </NavLink>
                    ) : (
                      <a
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="block text-center py-3 text-[20px] sm:text-[22px] font-medium tracking-tight text-neutral-900 hover:text-neutral-700"
                      >
                        {it.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Buttons — centered like reference */}
            <div className="mt-6 w-full max-w-[260px] flex flex-col items-center gap-3">
              {/* Contact pill (white with subtle ring/shadow) */}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-[15px] font-semibold text-neutral-900 border border-neutral-200 shadow-sm hover:shadow transition-all hover:bg-white/70"
              >
                Contact <ChevronRight className="h-4 w-4" />
              </Link>

              {/* Get Started gradient pill (blue glow) */}
              <a
                href="#"
                className="
                  w-full inline-flex items-center justify-center gap-2
                  rounded-2xl px-5 py-3 text-[15px] font-semibold text-white
                  bg-gradient-to-r from-[#3B66F6] to-[#1E4CEA]
                  shadow-[0_10px_30px_rgba(40,100,223,0.35)]
                  border-3 border-[#6C88FF]
                  transition-all
                  hover:shadow-[0_14px_36px_rgba(40,100,223,0.45)]
                "
                onClick={() => setOpen(false)}
              >
                Get Started <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
