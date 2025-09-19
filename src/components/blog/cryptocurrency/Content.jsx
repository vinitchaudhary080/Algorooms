// src/components/blog/cryptocurrency/Content.jsx
import React from "react";
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";

// (optional) author avatar agar baad me dikhana ho
// import authorAvatar from "@/assets/avatars/john.png";

export default function CodeDetailContent() {
  return (
    <section className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20">
      <div className="container-xxl">
        <article className="mx-auto max-w-3xl text-[15px] leading-7 text-neutral-700">
          {/* Intro */}
          <p className="text-neutral-700">
            Not long ago, money meant coins, notes, and bank accounts. But today, the definition of money is expanding. From Bitcoin to Ethereum, cryptocurrency is no longer just a buzzword – it’s a global movement redefining how we think about value, transactions, and investments. For stock market investors, understanding crypto is no longer optional; it’s essential to stay ahead in a world where finance and technology are merging.
          </p>

          {/* What is Crypto */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            What Exactly is Cryptocurrency?
          </h2>
          <p className="mt-2">
            At its core, cryptocurrency is a form of digital money built on blockchain technology. Unlike traditional currencies issued by governments, cryptocurrencies are decentralized – meaning no central bank or authority controls them.
          </p>
          <p className="mt-2">
            Each transaction is recorded on a blockchain, making it transparent, secure, and nearly impossible to manipulate. Think of it as money that exists purely in digital form, powered by mathematics and trust in technology rather than trust in a government.
          </p>

          {/* Why should investors care */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            Why Should Investors Pay Attention?
          </h2>
          <p className="mt-2">
            Cryptocurrency is not just a passing trend; it is a new asset class. Much like stocks, bonds, or real estate, crypto provides investors with another opportunity to grow wealth – but with its own unique dynamics. Here’s why it matters:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-semibold">Global Accessibility –</span> Anyone with internet access can own and trade crypto, no matter where they are.
            </li>
            <li>
              <span className="font-semibold">High Growth Potential –</span> Early adopters of Bitcoin saw it grow from a few cents to thousands of dollars per coin.
            </li>
            <li>
              <span className="font-semibold">Diversification –</span> Cryptocurrencies provide a way to spread investments beyond traditional markets.
            </li>
          </ul>
          <p className="mt-2">
            Of course, with high rewards come high risks – crypto is famously volatile. But that’s exactly why investors are curious: the potential upside is too big to ignore.
          </p>

          {/* Connection to stock market folks */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            How Cryptocurrency Connects with Stock Market Enthusiasts
          </h2>
          <p className="mt-2">
            If you enjoy following equities, crypto might feel like the next chapter in your investing journey. Many of the instincts you’ve built around analyzing markets, spotting trends, and managing risk can carry over here too.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-semibold">Always Active –</span> Crypto markets run all the time, offering investors flexibility to engage when they choose.
            </li>
            <li>
              <span className="font-semibold">Quick Turnarounds –</span> Transactions settle within minutes, giving a sense of immediacy that many traders appreciate.
            </li>
            <li>
              <span className="font-semibold">Truly Global –</span> A single crypto asset is traded across borders, creating a unified market of participants.
            </li>
            <li>
              <span className="font-semibold">Expanding Horizons –</span> From corporations to financial institutions, more established players are exploring crypto, signaling its growing relevance.
            </li>
          </ul>

          {/* Use cases */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            Real-World Use Cases
          </h2>
          <p className="mt-2">Cryptocurrency is more than just an investment tool. Around the world, it’s being used for:</p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li>Cross-border payments – Faster and cheaper than traditional banking.</li>
            <li>Smart contracts – Automated agreements on platforms like Ethereum.</li>
            <li>Digital ownership – Through NFTs, individuals can own unique digital assets.</li>
          </ul>
          <p className="mt-2">
            India too has seen rising interest, with exchanges and apps enabling millions of young investors to participate in crypto trading.
          </p>

          {/* What it means for you */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            What Does This Mean for You as an Investor?
          </h2>
          <p className="mt-2">
            If you’re in the stock market, you already understand risk and reward. Cryptocurrency amplifies both. For retail investors, the key benefits are:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1.5">
            <li>
              <span className="font-semibold">Accessibility –</span> Start small; you don’t need lakhs to invest.
            </li>
            <li>
              <span className="font-semibold">Innovation exposure –</span> Be part of a technology-driven future.
            </li>
            <li>
              <span className="font-semibold">Portfolio growth –</span> A chance to diversify into digital assets.
            </li>
          </ul>
          <figure className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote className="text-neutral-800">
              <span className="font-semibold">Note:</span> Risks include market volatility, regulatory uncertainty, and security concerns. The golden rule is simple — invest only what you can afford to lose.
            </blockquote>
          </figure>

          {/* Bigger picture */}
          <h2 className="mt-8 text-[18px] font-semibold text-neutral-900">
            The Bigger Picture
          </h2>
          <p className="mt-2">
            Cryptocurrency is not here to replace stocks or traditional assets; it’s here to co-exist and expand financial possibilities. For investors, it represents freedom, speed, and global participation.
          </p>
          <figure className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <blockquote className="text-neutral-800">
              As Warren Buffet rightly said, “Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.” Cryptocurrency could be one of those opportunities – but only for those willing to understand it, respect its risks, and embrace its potential.
            </blockquote>
          </figure>
        </article>
      </div>
    </section>
  );
}
