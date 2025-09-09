import React, { useState } from "react";
import {
    CalendarCheck2,
    BarChart2,
    Link as LinkIcon,
    LayoutPanelTop,
} from "lucide-react";

// Right images
import shotMain from "../assets/why/shot-a.png";   // top main image
import shotBottom from "../assets/why/shot-b.png"; // bottom stacked image
import shotOverlay from "../assets/why/shot-c.png"; // floating overlay (19K+ traders card)

const TABS = [
    { id: "calendar", icon: CalendarCheck2, title: "Meaningful calendar", desc: "Create, modify, and share events with ease." },
    { id: "analytics", icon: BarChart2, title: "Insightful analytics", desc: "Get KPIs at a glance and generate reports instantly." },
    { id: "integrations", icon: LinkIcon, title: "Seamless integration", desc: "Connect favorite apps and platforms with zero friction." },
    { id: "boards", icon: LayoutPanelTop, title: "Effortless boards", desc: "Featuring a clean, user-friendly interface, it helps you stay organized, prioritize effectively, and collaborate seamlessly with your team." },
];

export default function WhyChoose() {
    const [active, setActive] = useState(TABS.length - 1);

    return (
        <section id="why-choose" className="bg-white py-20 sm:py-28">
            <div className="container-xxl">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Why choose cryptomaty
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
                        Lorem ipsum dolor sit amet <br className="hidden sm:block" /> consectetur.
                    </h2>
                    <p className="mt-4 text-neutral-500">
                        Each feature is crafted to provide seamless integration and performance,
                        ensuring a high level of functionality and efficiency.
                    </p>
                </div>

                {/* Content grid */}
                {/* Content grid */}
                <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
                    {/* Left: Tabs list */}
                    <div className="order-2 md:order-1">
                        <ul className="space-y-4">
                            {TABS.map((tab, i) => {
                                const Icon = tab.icon;
                                const isActive = i === active;
                                return (
                                    <li key={tab.id}>
                                        <button
                                            onClick={() => setActive(i)}
                                            className={`w-full text-left rounded-xl px-4 py-3 transition
                ${isActive ? "bg-white ring-1 ring-black/5" : "hover:bg-neutral-50"}
              `}
                                            aria-expanded={isActive}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border
                  ${isActive ? "border-neutral-300 bg-white" : "border-neutral-200 bg-white"}`}
                                                >
                                                    <Icon className="h-4 w-4 text-neutral-800" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className={`text-sm font-semibold ${isActive ? "text-neutral-900" : "text-neutral-800"}`}>
                                                        {tab.title}
                                                    </div>
                                                    <div className={`mt-1 text-sm leading-relaxed ${isActive ? "text-neutral-600" : "text-neutral-500"}`}>
                                                        {tab.desc}
                                                    </div>
                                                    <div className="mt-3 h-px w-28 bg-neutral-200" />
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Right: Layered image composition */}
                    <div
                        className="
      order-1 md:order-2 relative
      mx-auto md:ml-auto
      w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]
    "
                    >
                        {/* Main top image */}
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={shotMain}
                                alt="Main preview"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Bottom-left stacked image */}
                        <div
                            className="absolute -bottom-8 sm:-bottom-9 left-2 sm:left-0
                 w-[46%] sm:w-[50%] md:w-[52%] rounded-2xl overflow-hidden"
                        >
                            <img
                                src={shotBottom}
                                alt="Secondary preview"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Floating overlay card */}
                        <div
                            className="absolute -bottom-10 sm:-bottom-11 right-2 sm:right-4
                 w-[56%] sm:w-[52%] md:w-[50%] max-w-[220px] md:max-w-[260px]
                 rounded-2xl overflow-hidden"
                        >
                            <img
                                src={shotOverlay}
                                alt="Active traders card"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
