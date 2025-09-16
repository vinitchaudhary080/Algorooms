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
            But what exactly is <span className="font-semibold text-neutral-900">crypto trading</span>, and why is everyone so hyped about it?
            Let’s keep it simple.
          </p>

          {/* H2 */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            What Does Crypto Trading Mean?
          </h2>
          <p className="mt-2">
            Crypto trading is basically buying and selling digital money (cryptocurrency) to make a profit.
            Think of it like buying gold or stocks—you buy when the price is low and sell when it goes up. The big difference is:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>The crypto market never sleeps. It runs 24/7.</li>
            <li>Prices can move up or down very quickly (sometimes within minutes).</li>
          </ul>
          <p className="mt-3">
            That’s why people say crypto trading is exciting but also risky.
          </p>

          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
             How Do You Actually Trade Crypto?
          </h2>
          <ol className="mt-3 space-y-2 list-decimal pl-5">
            <li>Sign up on a crypto exchange (like DeltaExchange, CoinDCX, Binance etc.).</li>
            <li>Add money (can be INR, USD, or another crypto).</li>
            <li>Pick a coin (Bitcoin, Ethereum, or any other).</li>
            <li>Buy it and wait for the price to move.</li>
            <li>Sell it when you’re happy with the profit (or need to cut losses).</li>
          </ol>
          <p className="mt-3">
            It’s really that simple at the start—but learning the right timing is the tricky part.
          </p>

          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            Why Do People Love Crypto Trading?
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>It can give big profits (but also big losses).</li>
            <li>The market is open 24/7.</li>
            <li>You can start small—even ₹100 is enough.</li>
            <li>Anyone with internet can trade, no matter where they are.</li>
          </ul>

          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
          The Flip Side: Risks You Should Know
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li><span className="font-semibold text-neutral-900">Volatility:</span> Coins can crash in minutes.</li>
            <li><span className="font-semibold text-neutral-900">Scams &amp; hacks:</span> Fake coins and phishing links are common.</li>
            <li><span className="font-semibold text-neutral-900">No safety net:</span> Unlike banks, there’s no one to “rescue” you.</li>
            <li><span className="font-semibold text-neutral-900">Emotions:</span> Fear and greed can mess up decisions.</li>
          </ul>

          {/* Note card */}
          <figure className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote className="italic text-neutral-800">
              👉 <span className="font-semibold">NOTE:</span> Only invest money you’re okay with losing.
            </blockquote>
          </figure>

          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            Quick Tips for Beginners
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>Start small, don’t go all-in.</li>
            <li>Stick to trusted exchanges and wallets.</li>
            <li>Don’t fall for “get rich quick” hype.</li>
            <li>Follow news and learn daily.</li>
            <li>Spread your money—don’t bet everything on one coin.</li>
          </ul>

          {/* Conclusion */}
          <h3 className="mt-8 text-[16px] font-semibold text-neutral-900">
            Final Thoughts
          </h3>
          <p className="mt-2">
            Crypto trading isn’t magic, and it’s definitely not a shortcut to instant riches.
            But if you take time to learn, stay patient, and don’t gamble with money you can’t afford to lose,
            it can be a really exciting journey. At the end of the day, trading is less about luck and more about
            discipline and smart choices.
          </p>

          
          
        </article>
      </div>
    </section>
  );
}
