import React from "react";
import brokerLogo from "../assets/broker-logo.png"; // 👈 apna broker logo yahan rakho

export default function Broker() {
  return (
    <section id="broker" className="bg-white py-20 sm:py-28 scroll-mt-nav">
      <div className="container-xxl grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Integrations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight">
            Seamlessly Integrates with <br className="hidden sm:block" /> Your Delta-Exchange  <span className="text-black">Broker</span>
          </h2>
          <p className="mt-4 text-neutral-500">
            Make trading easier, business more efficient, and without any failure or additional effort.
          </p>

          <div className="mt-6">
            <a
              href="https://web.cryptomaty.com/login"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold
             text-neutral-800 border border-neutral-200 shadow-sm
             bg-transparent hover:bg-primary hover:text-white
             transition-colors duration-300 ease-in-out"
            >
              Connect Now →
            </a>


          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-center">
          <div className="flex items-center justify-center">
            <img
              src={brokerLogo}
              alt="Broker Logo"
              className="w-64 h-64 sm:w-100 sm:h-100 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
