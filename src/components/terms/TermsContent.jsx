import React from "react";

const SECTIONS = [
  {
    id: "introduction",
    n: 1,
    title: "Introduction",
    body: `These Terms and Conditions ("Terms") govern your access and use of Cryptomaty,
an algorithmic crypto trading platform and marketplace. By using our services,
you agree to these Terms. If you do not agree, please refrain from using our platform.`,
  },
  {
    id: "eligibility",
    n: 2,
    title: "Eligibility",
    body: `You must be at least 18 years of age and capable of entering into a legally
binding agreement under Indian law. You may be required to complete KYC verification
in compliance with regulatory norms.`,
  },
  {
    id: "account-responsibilities",
    n: 3,
    title: "Account Responsibilities",
    body: `You are responsible for maintaining the confidentiality of your account credentials
and activities conducted under your account. Promptly notify us of any unauthorized
access or use of your account.`,
  },
  {
    id: "use-of-platform",
    n: 4,
    title: "Use of Platform and Marketplace",
    body: `Our platform offers algorithmic trading tools and a marketplace for strategies.
You acknowledge that:`,
    bullets: [
      "All trading involves significant financial risk.",
      "You are solely responsible for evaluating and using any third-party strategies listed.",
      "We do not guarantee any profits or results.",
    ],
  },
  {
    id: "financial-obligations",
    n: 5,
    title: "Financial Obligations",
    body: `Usage of paid features or strategy subscriptions may incur fees as specified on our
pricing page. Users are responsible for any applicable taxes (including 30% income tax
and 1% TDS on crypto profits in India).`,
  },
  {
    id: "intellectual-property",
    n: 6,
    title: "Intellectual Property",
    body: `All content, trademarks, logos, and proprietary algorithms are protected by
intellectual property laws. You may not reproduce, distribute, or create derivative
works without explicit permission.`,
  },
  {
    id: "user-conduct",
    n: 7,
    title: "User Conduct",
    body: "Users must not:",
    bullets: [
      "Engage in illegal activities such as money laundering or fraud.",
      "Reverse-engineer or exploit platform vulnerabilities.",
      "Misuse the strategy marketplace or engage in manipulation or plagiarism.",
    ],
  },
  {
    id: "third-party-services",
    n: 8,
    title: "Third-Party Services",
    body: `Our platform may integrate with third-party exchanges and APIs. We are not
responsible for the availability, accuracy, or security of third-party services.`,
  },
  {
    id: "disclaimer",
    n: 9,
    title: "Disclaimer of Warranties",
    body: `All services are provided on an "as is" and "as available" basis. We disclaim all
warranties, express or implied, including merchantability, fitness for a particular
purpose, and non-infringement.`,
  },
  {
    id: "limitation-liability",
    n: 10,
    title: "Limitation of Liability",
    body: `Cryptomaty shall not be liable for any direct, indirect, incidental, or consequential
damages arising from your use of our platform, including loss of profits, data, or trading capital.`,
  },
  {
    id: "indemnification",
    n: 11,
    title: "Indemnification",
    body: `You agree to indemnify and hold Cryptomaty, its officers, employees, and partners
harmless from any claims, damages, or liabilities resulting from your use of our platform
or violation of these Terms.`,
  },
  {
    id: "modifications",
    n: 12,
    title: "Modifications",
    body: `We reserve the right to modify these Terms at any time. Users will be notified via
email or on-platform notices. Continued use after changes constitutes acceptance of updated Terms.`,
  },
  {
    id: "termination",
    n: 13,
    title: "Termination",
    body: `We may terminate or suspend your account for violations of these Terms, suspicious
activity, or legal obligations. You may also close your account at any time.`,
  },
  {
    id: "governing-law",
    n: 14,
    title: "Governing Law and Jurisdiction",
    body: `These Terms are governed by the laws of India. Any disputes will be subject to the
exclusive jurisdiction of the courts in Mumbai, Maharashtra.`,
  },
  {
    id: "contact",
    n: 15,
    title: "Contact Us",
    body: `For any queries regarding these Terms, contact us at:
Email: support@cryptomaty.com`,
  },
];

export default function TermsContent() {
  return (
    <section className="bg-[#F6F6F8] pt-0 sm:pt-0 pb-16 sm:pb-24">
      <div className="container-xxl">
        <div className="mx-auto max-w-3xl text-[15px] leading-7 text-neutral-700">
          <ol className="space-y-10">
            {SECTIONS.map((s) => (
              <li key={s.id} id={s.id} className="scroll-mt-24">
                <div className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-xs font-semibold tracking-wide text-neutral-500">
                    {s.n}.
                  </div>
                  <h3 className="mt-1 text-[17px] sm:text-lg font-semibold text-neutral-900">
                    {s.title}
                  </h3>
                </div>

                {/* body */}
                <p className="mt-3 text-neutral-700 whitespace-pre-line">{s.body}</p>

                {/* optional bullets */}
                {s.bullets?.length ? (
                  <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 border-t border-neutral-200" />
              </li>
            ))}
          </ol>

          {/* meta (optional) */}
          <div className="mt-8 flex items-center gap-3 text-xs text-neutral-500">
            <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 font-semibold text-green-700 ring-1 ring-inset ring-green-200">
              New
            </span>
            <span>Last updated: January 4, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
