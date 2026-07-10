import React from "react";
import {
  BookOpen,
  Users,
  Handshake,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    number: "500+",
    label: "Books Shared",
  },
  {
    icon: Users,
    number: "120+",
    label: "Active Readers",
  },
  {
    icon: Handshake,
    number: "350+",
    label: "Successful Borrows",
  },
  {
    icon: Star,
    number: "4.9",
    label: "Community Rating",
  },
];

function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            Our Community
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Growing One Book at a Time
          </h2>

          <p className="mt-4 text-slate-600 text-lg leading-8">
            Readers across the community are giving books a second life by
            borrowing, lending, and sharing stories that deserve to be read.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={30}
                    className="text-blue-600 transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
                  {stat.number}
                </h3>

                <p className="mt-2 text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Stats;