// src/components/blog/code/Content.jsx
import React from "react";

// (agar share icons chahiye hon to later add kar denge)
export default function CodeDetailContent() {
  return (
    <section className="bg-[#F6F6F8] pt-10 pb-16 sm:pt-12 sm:pb-24">
      <div className="container-xxl">
        <article className="mx-auto max-w-3xl text-[15.5px] leading-7 text-neutral-700">
          {/* Intro (top paragraph) */}
          <p className="text-neutral-600">
            Automation isn’t just a buzzword — it’s a proven way to help teams work
            smarter. By removing repetitive tasks from daily operations, teams gain more
            time to focus on strategy, creativity, and customer value. In this article,
            we’ll cover five practical automation workflows that can make an immediate
            impact on your productivity.
          </p>

          {/* H2: section title */}
          <h2 className="mt-10 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-neutral-900">
            Automate Task Assignments
          </h2>
          <p className="mt-3 text-neutral-600">
            Manually assigning tasks often leads to delays and confusion. Automation can
            instantly assign tasks based on predefined rules, such as team roles, project
            type, or workload. This ensures no task is left behind and the right person
            always gets notified without manual follow-ups.
          </p>

          <h2 className="mt-12 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-neutral-900">
            Streamline Reporting and Analytics
          </h2>
          <p className="mt-3 text-neutral-600">
            Creating weekly or monthly reports can be time-consuming. With automated
            reporting, data is collected and visualized in real time — keeping everyone
            aligned without extra effort. Teams can monitor KPIs, track progress, and
            make informed decisions faster.
          </p>

          <h2 className="mt-12 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-neutral-900">
            Simplify Customer Onboarding
          </h2>
          <p className="mt-3 text-neutral-600">
            A strong first impression is critical for customer retention. Automated
            onboarding sequences — welcome emails, product tours, and setup reminders —
            help new users get value quickly, without requiring constant manual input
            from your team.
          </p>

          {/* Example list block */}
          <h2 className="mt-12 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-neutral-900">
            Quick Wins You Can Set Up Today
          </h2>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-neutral-700">
            <li>Auto-assign tickets based on priority or topic.</li>
            <li>Weekly status summary sent to Slack at 5pm Friday.</li>
            <li>Auto-tag incoming leads and route to the right owner.</li>
            <li>Send NPS survey after support ticket is resolved.</li>
          </ul>

          {/* Soft note card */}
          <figure className="mt-8 rounded-2xl bg-white ring-1 ring-black/5 p-5">
            <blockquote className="text-neutral-800">
              <span className="font-semibold text-neutral-900">Tip:</span>{" "}
              start small. Pick one repetitive workflow, automate it end-to-end, then
              expand from there.
            </blockquote>
          </figure>

          <h2 className="mt-12 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-neutral-900">
            Reduce Manual Approvals
          </h2>
          <p className="mt-3 text-neutral-600">
            Replace ad-hoc approvals with conditional rules. For example, approvals under
            a threshold can auto-pass, while higher-value items escalate to a manager.
            This cuts wait time dramatically and keeps momentum high.
          </p>

          <h2 className="mt-12 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-neutral-900">
            Keep Your Team in Sync
          </h2>
          <p className="mt-3 text-neutral-600">
            Use automated notifications to keep everyone aligned — meeting reminders,
            handoff checklists, or “done” summaries after a sprint. Less chaos, more
            clarity.
          </p>

          {/* Closing */}
          <h3 className="mt-12 text-[20px] sm:text-[22px] font-semibold text-neutral-900">
            Final Thoughts
          </h3>
          <p className="mt-3 text-neutral-600">
            Automation frees up time for meaningful work. Start with one workflow,
            measure the impact, and iterate. Over time, these small improvements compound
            into a faster, clearer, and more resilient team.
          </p>
        </article>
      </div>
    </section>
  );
}
