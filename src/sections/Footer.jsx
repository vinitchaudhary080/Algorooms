import React from "react";
import { Youtube, Send } from "lucide-react";
import logo from "../assets/logod.svg";
import gradientImg from "../assets/footer-gradient.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D17] text-neutral-300 relative py-14 sm:py-20 scroll-mt-nav">
      {/* Top CTA */}
      <div className="relative container-xxl">
        <div className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-12 sm:py-24 text-center text-white">
          {/* gradient image */}
          <img
            src={gradientImg}
            alt="gradient background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Start your trial today.
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-neutral-200">
              Unlock the potential of your business with our next-level SaaS platform.
              Transform your workflows and achieve new heights today.
            </p>
            <div className="mt-6">
              <a
                href="https://web.cryptomaty.com/login"
                className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow hover:bg-neutral-100 transition"
              >
                Get started →
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="container-xxl mt-16 pb-12 border-t border-white/10 py-6 sm:py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + text */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Cryptomaty logo" className="h-8 w-auto" />

            </a>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ac eu massa nunc sem.
              Sed vestibulum platea adipiscing ornare malesuada augue.
            </p>
            <p className="mt-6 text-xs text-neutral-500">
              © 2025 Cryptomaty.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>

          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li> <Link
                to="/terms"
                className="hover:text-white"
              >
                Terms of service
              </Link></li>
              <li>  <Link
                to="/privacy"
                className="hover:text-white"
              >
                Privacy policy
              </Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-white">Social Media</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@cryptomatyofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Youtube className="h-4 w-4" /> Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+ssZ-eIkmjZ84ZDM1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Send className="h-4 w-4" /> Telegram
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
