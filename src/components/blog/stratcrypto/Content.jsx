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
            New to <span className="font-semibold text-neutral-900">crypto trading</span>? Here’s a simple, practical guide to get started—no jargon.
          </p>

          {/* Step 1 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Step 1: Learn the Basics</h2>
          <p className="mt-2">
            Crypto trading is just like buying and selling anything else—except you’re dealing with digital money.
            Buy when the price is low and sell when it’s higher.
          </p>
          <figure className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote className="text-neutral-800">
              <span className="font-semibold">NOTE:</span> The market never sleeps. Prices move anytime, day or night—exciting but risky.
            </blockquote>
          </figure>

          {/* Step 2 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Step 2: Pick a Good Exchange</h2>
          <p className="mt-2">
            An exchange is the app/site where you buy and sell coins. Choose one that’s simple, secure, and fair on fees.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li><span className="font-semibold">Worldwide:</span> Binance, Coinbase</li>
            <li><span className="font-semibold">India:</span> Delta Exchange, CoinDCX, etc.</li>
          </ul>
          <p className="mt-2 italic text-neutral-600">Tip: Check reviews, security features, and deposit/withdrawal options.</p>

          {/* Step 3 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Step 3: Sign Up & Add Money</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2">
            <li>Create an account.</li>
            <li>Complete KYC (like opening a bank account).</li>
            <li>Add money via UPI, bank transfer, or card.</li>
          </ol>
          <p className="mt-2">And boom—you’re ready to buy your first coin. 🚀</p>

          {/* Step 4 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Step 4: Buy Your First Coin</h2>
          <p className="mt-2">
            Start with the big names like <span className="font-semibold">Bitcoin (BTC)</span> or <span className="font-semibold">Ethereum (ETH)</span>—usually less risky than random new coins.
          </p>
          <figure className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote className="text-neutral-800">
              Example: Add ₹1,000 → buy Bitcoin worth ₹1,000 → if Bitcoin’s price rises, your balance grows. Simple as that.
            </blockquote>
          </figure>

          {/* Step 5 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Step 5: Keep Your Crypto Safe</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Hot wallet (exchange app):</span> Easy, but a bit riskier.</li>
            <li><span className="font-semibold">Cold wallet (hardware/offline):</span> Safer for long-term holding.</li>
          </ul>

          {/* Step 6 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Step 6: Take It Slow</h2>
          <p className="mt-2">
            There’s no “get rich overnight.” Start small, watch the market, and find your style—some trade daily, some hold for months, some just buy and forget for years.
          </p>

          {/* Mistakes to Avoid */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">🔹 Mistakes to Avoid</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Don’t invest money you can’t afford to lose.</li>
            <li>Don’t fall for hype coins or random “tips.”</li>
            <li>Don’t panic on dips—crypto is volatile.</li>
            <li>Don’t ignore security—use strong passwords and 2FA.</li>
          </ul>

          {/* Final Thoughts */}
          <h3 className="mt-8 text-[16px] font-semibold text-neutral-900">🔹 Final Thoughts</h3>
          <p className="mt-2">
            Starting crypto trading doesn’t have to be complicated. With a good app, a little research,
            and a cool head, you can step into digital money confidently. It’s less about luck and more
            about being smart, patient, and consistent. Who knows—today you buy your first ₹1,000 of Bitcoin,
            and in a few years you’re glad you started early. 🚀✨
          </p>
        </article>
      </div>
    </section>
  );
}
