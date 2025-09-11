// src/components/Navbar.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", to: "/", type: "route" },
  { label: "About", to: "/about", type: "route" },
  // ⬇️ Features को route बना दिया
  { label: "Features", to: "/features", type: "route" },
  { label: "Blogs", to: "/blog", type: "route" },
  // { label: "Contact", to: "/contact", type: "route" }
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

  const linkDesktop =
    "px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary";
  const linkActive = "text-primary";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-xxl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo -> Home */}
          <Link to="/" className="flex items-center gap-2" aria-label="Cryptomaty Home">
            <img src={logo} alt="Cryptomaty logo" className="h-8 w-auto shrink-0 select-none" decoding="async" />
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
              className="inline-flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact us <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="https://web.cryptomaty.com/login"
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

      {/* ===== Mobile Drawer ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-[opacity] ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

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
          <div className="flex flex-col h-screen bg-white">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
              <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <img src={logo} alt="Cryptomaty logo" className="h-7 w-auto" />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-neutral-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* “Menu” list */}
            <nav className="flex-1 overflow-y-auto px-2 py-2">
              <ul className="mt-1">
                {navItems.map((it) => (
                  <li key={it.label}>
                    {it.type === "route" ? (
                      <NavLink
                        to={it.to}
                        end={it.to === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          [
                            "block rounded-lg px-4 py-4 text-[17px] font-medium tracking-tight",
                            isActive
                              ? "text-primary bg-neutral-50"
                              : "text-neutral-800 hover:bg-neutral-50 hover:text-neutral-900",
                          ].join(" ")
                        }
                      >
                        {it.label}
                      </NavLink>
                    ) : (
                      <a
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-4 py-4 text-[17px] font-medium tracking-tight text-neutral-800 hover:bg-neutral-50 hover:text-neutral-900"
                      >
                        {it.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-6 grid gap-3 px-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-semibold text-neutral-800 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contact us <ChevronRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://web.cryptomaty.com/login"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[15px] font-semibold text-white bg-neutral-900 hover:bg-neutral-800 shadow-lg"
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
