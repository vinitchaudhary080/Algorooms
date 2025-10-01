// src/components/contact/ContactHero.jsx
import React from "react";
import Founderimg from "../../assets/founder.png";

export default function ContactHero() {
  return (
    <section className="bg-[#F6F6F8] py-16 sm:py-24">
      <div className="container-xxl grid lg:grid-cols-2 gap-12 items-start">
        {/* Left content */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Contact us
          </span>

          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Let’s get in touch
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">
            We're here to help. Contact our team in case of any doubts, helping, or comments, and we are going to respond to you as soon as possible.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Reach our team anytime - questions, support, or feedback.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Contact us by email, phone, or live chat, and we'll get right back to you.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Your insight helps us to get better and serve you better.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Our mission is to make your journey of trading smarter and easier.
            </li>
          </ul>

          <div className="mt-10">
            <blockquote className="text-lg font-medium text-neutral-900">
              “We empower traders to focus on profits, not complexity.”
            </blockquote>
            <div className="mt-3 flex items-center gap-3">
              {/* ✅ Founder image */}
              <div className="h-9 w-9 overflow-hidden rounded-full">
                <img
                  src={Founderimg}
                  alt="Founder"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Reyansh Upadhyay
                </div>
                <div className="text-xs text-neutral-500">Founder</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        {/* <div>
          <div className="max-w-lg mx-auto">
            <form className="bg-white rounded-2xl shadow p-6 sm:p-8 space-y-5">
              <div>
                <label className="text-sm font-medium text-neutral-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-neutral-800 transition"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
}
