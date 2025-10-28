// src/components/privacy/PrivacyContent.jsx
import React from "react";

export default function PrivacyContent() {
  const sections = [
    {
      title: "1. Introduction",
      text: `Welcome to Cryptomaty, a crypto algorithmic trading platform and strategy marketplace. 
      We prioritize your privacy and are committed to handling your data with transparency and integrity. 
      This Privacy Policy outlines how we collect, use, disclose, and protect your information in accordance 
      with the Digital Personal Data Protection Act, 2023 (DPDP Act), the Information Technology Act, 2000, 
      and global regulations including the GDPR (where applicable).`,
    },
    {
      title: "2. Information We Collect",
      text: `Personal Information: Name, email, mobile number, Aadhaar/PAN, address, and profile photo.  
      Account Information: Wallet addresses, exchange API keys (read-only), transaction history.  
      Usage Data: Device data, IP address, browser information, and platform interactions.  
      Marketplace Activity: Strategy views, purchases, uploads, reviews, and ratings.  
      Financial Data: Bank account information (for withdrawals), crypto transaction logs, and billing details.  
      Cookies: Preferences, sessions, and behavior via cookies and local storage.`,
    },
    {
      title: "3. How We Use Your Information",
      text: `To verify your identity procedures.  
      To facilitate secure trades and manage your algorithmic strategies.  
      To provide access to the strategy marketplace and manage purchases or sales.  
      To enhance platform features and customize user experience.  
      To comply with legal obligations and protect against fraud and abuse.  
      To send transactional emails, updates, and platform alerts.`,
    },
    {
      title: "4. Data Sharing and Disclosure",
      text: `We share your data with:  
      • Trusted third-party vendors (e.g., analytics, payment gateways, KYC providers).  
      • Regulatory bodies such as RBI, SEBI, or income tax authorities as per compliance norms.  
      • Exchange partners with whom you integrate (Binance, Delta Exchange, etc.).  
      • Marketplace buyers (limited seller data such as name and reviews, not financials).  
      We never sell your personal data.`,
    },
    {
      title: "5. Strategy Ownership and Marketplace Transparency",
      text: `Uploaded strategies remain the intellectual property of the creator. Cryptomaty does not claim 
      ownership but requires limited rights to host and display them. Buyers may access logic summaries, 
      performance backtests, and descriptions. We do not share code unless the creator permits.`,
    },
    {
      title: "6. Data Security",
      text: `We follow industry-leading security protocols, including AES-256 encryption, two-factor authentication (2FA), 
      secure APIs, and periodic audits. However, no method is fully secure, and you agree to use the platform at your own risk.`,
    },
    {
      title: "7. Your Rights",
      text: `Access your data and account activity.  
      Edit or update your personal information.  
      Request data deletion (unless retention is legally required).  
      Revoke access to third-party integrations (e.g., disconnect exchange keys).  
      Download a copy of your data via our data export tool.`,
    },
    {
      title: "8. International Users",
      text: `For users outside India, especially those in the EU/EEA, we process data in accordance with the GDPR. 
      You have the right to lodge a complaint with your supervisory authority and can contact our DPO for further information.`,
    },
    {
      title: "9. Data Retention",
      text: `We retain user data for as long as necessary to fulfill trading, legal, and security purposes. 
      Inactive accounts are purged after 24 months of inactivity unless regulatory retention is required.`,
    },
    {
      title: "10. Children's Privacy",
      text: `Our platform is not intended for users under 18. We do not knowingly collect data from minors. 
      If you believe a minor has shared data, please contact us for immediate deletion.`,
    },
    {
      title: "11. Cookies and Tracking",
      text: `We use cookies to remember preferences, analyze traffic, and serve relevant content. 
      You may adjust cookie settings via your browser or use our consent manager.`,
    },
    {
      title: "12. Policy Updates",
      text: `We may revise this policy periodically. Changes will be reflected on this page with a revised date. 
      Significant changes will be notified via email or pop-up.`,
    },
    {
      title: "13. Contact Us",
      text: `For questions, concerns, or to exercise your rights, contact:  
      Email: support@cryptomaty.com  
      Data Protection Officer: support@cryptomaty.com`,
    },
  ];

  return (
    <section className=" pt-0 sm:pt-0 pb-16 sm:pb-24">
      <div className="container-xxl prose prose-neutral max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-8">
          Privacy Policy
        </h1>
        {sections.map((sec, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-900">
              {sec.title}
            </h2>
            <p className="mt-2 whitespace-pre-line text-neutral-600 leading-relaxed">
              {sec.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
