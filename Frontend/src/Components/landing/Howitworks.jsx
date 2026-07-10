import React from "react";
import {
  Search,
  Handshake,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Books",
    description:
      "Explore books shared by readers in the community and find your next great read.",
  },
  {
    icon: Handshake,
    title: "Request to Borrow",
    description:
      "Send a borrow request to the owner and wait for approval before collecting the book.",
  },
  {
    icon: BookOpen,
    title: "Read & Return",
    description:
      "Enjoy your book and return it once you've finished so someone else can experience it too.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Borrowing Books Has Never Been Easier
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            PageSwap makes borrowing books simple, transparent, and
            community-driven. Just follow these three easy steps.
          </p>

        </div>

        {/* Steps */}

        <div className="relative mt-20 grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="group relative rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              >

                {/* Circle */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 transition duration-300 group-hover:bg-blue-600">

                  <Icon
                    size={36}
                    className="text-blue-600 transition duration-300 group-hover:text-white"
                  />

                </div>

                {/* Step Number */}

                <span className="absolute right-6 top-6 text-6xl font-black text-slate-100">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-center text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-center leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>

            );

          })}

          {/* Connecting Arrows */}

          <ArrowRight
            className="absolute left-[32%] top-24 hidden text-slate-300 xl:block"
            size={38}
          />

          <ArrowRight
            className="absolute right-[32%] top-24 hidden text-slate-300 xl:block"
            size={38}
          />

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;