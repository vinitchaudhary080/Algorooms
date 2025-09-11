// src/components/features/FeaturesShowcase.jsx
import React from "react";

// 👉 apni images yaha import karo (replace with your actual files)
import imgAnalytics from "@/assets/features/listed/analytics.png";
import imgTasks     from "@/assets/features/listed/tasks.png";
import imgMeeting   from "@/assets/features/listed/meeting.png";
import imgDonut     from "@/assets/features/listed/donut.png";
import imgRevenue   from "@/assets/features/listed/revenue.png";



export default function FeaturesShowcase() {
  return (
    <section className="bg-[#F6F6F8] py-2 pb-10 sm:py-28">
      <div className="container-xxl">
        

        {/* Mosaic / listed cards */}
        <div className="mt-12 sm:mt-16">
       
          <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {/* big analytics card (left bottom) */}
            <Card className="lg:col-span-5 lg:row-span-2">
              <img src={imgAnalytics} alt="Analytics" className="w-full h-full object-cover" />
            </Card>

            {/* task/progress card (center left) */}
            <Card className="lg:col-span-4">
              <img src={imgTasks} alt="Tasks" className="w-full h-auto object-cover" />
            </Card>

            {/* meeting card (top right) */}
            <Card className="lg:col-span-3">
              <img src={imgMeeting} alt="Meeting" className="w-full h-auto object-cover" />
            </Card>

            {/* donut analytics (right middle) */}
            <Card className="lg:col-span-3">
              <img src={imgDonut} alt="Distribution" className="w-full h-auto object-cover" />
            </Card>

            {/* revenue small (bottom left) */}
            <Card className="lg:col-span-3">
              <img src={imgRevenue} alt="Revenue" className="w-full h-auto object-cover" />
            </Card>

          
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl ",
        "transition-transform duration-300 hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-xl">{children}</div>
    </div>
  );
}
