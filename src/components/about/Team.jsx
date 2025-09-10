import React from "react";

// import your images
import diana     from "@/assets/about/team/diana.png";
import tim       from "@/assets/about/team/tim.png";
import benjamin  from "@/assets/about/team/benjamin.png";
import david     from "@/assets/about/team/david.png";
import matthew   from "@/assets/about/team/matthew.png";
import william   from "@/assets/about/team/william.png";
import john      from "@/assets/about/team/john.png";
import paul      from "@/assets/about/team/paul.png";

const TEAM = [
  { name: "Diana Mounter", role: "Co-Founder",           img: diana },
  { name: "Tim Williams",   role: "Co-Founder",           img: tim },
  { name: "Benjamin Miller",role: "Engineering",          img: benjamin },
  { name: "David Mitchell", role: "Engineering",          img: david },
  { name: "Matthew Brooks", role: "Product Management",   img: matthew },
  { name: "William Scott",  role: "Sales",                img: william },
  { name: "John Parker",    role: "Customer Success",     img: john },
  { name: "Paul Smith",     role: "Human Resources",      img: paul },
];

export default function Team() {
  return (
    <section className="bg-white py-16 sm:py-24 scroll-mt-nav">
      <div className="container-xxl">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Our team
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Meet the team
          </h2>
          <p className="mt-4 text-neutral-500">
            Behind every great solution is a team of passionate innovators,
            problem-solvers, and visionaries.
          </p>
        </div>

        {/* Members */}
        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
          {TEAM.map((m) => (
            <li key={m.name} className="text-center">
              <div className="mx-auto h-14 w-14 rounded-full overflow-hidden ring-2 ring-neutral-200 shadow-sm">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 text-sm font-semibold text-neutral-900">
                {m.name}
              </div>
              <div className="text-xs text-neutral-500">{m.role}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
