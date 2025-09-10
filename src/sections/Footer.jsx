import React from "react";
import { Youtube, Send } from "lucide-react"; // send = telegram icon
import logo from "../assets/logod.svg";        // 👈 apna logo path
import gradientImg from "../assets/footer-gradient.png"; // 👈 jo tum provide karoge

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
                href="#get-started"
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
              © 2025 Cryptomaty. Powerful template
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#blogs" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#terms" className="hover:text-white">Terms of service</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-white">Social Media</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                  <Youtube className="h-4 w-4" /> Youtube
                </a>
              </li>
              <li>
                <a href="https://t.me" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
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
