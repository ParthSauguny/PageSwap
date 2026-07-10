import React from "react";
import {
  Wallet,
  Leaf,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Save Money",
    description:
      "Enjoy more books without buying every title you want to read.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Connect with readers who love sharing stories and discovering new books.",
  },
  {
    icon: Leaf,
    title: "Sustainable Reading",
    description:
      "Give books a second life instead of letting them collect dust on a shelf.",
  },
  {
    icon: BookOpen,
    title: "Simple Borrowing",
    description:
      "Request, borrow, read, and return books with an easy borrowing process.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Why Choose PageSwap
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Reading Should Be Shared,
            <br />
            Not Expensive.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            PageSwap helps readers borrow and lend books effortlessly while
            building a stronger reading community.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Large Card */}

          <div className="rounded-3xl bg-blue-600 p-10 text-white lg:col-span-2">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <Wallet size={34} />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Save More.
              <br />
              Read More.
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Why spend hundreds on books you'll read once?
              Borrow from fellow readers, save money, and keep
              stories moving through the community.
            </p>

            <button className="group mt-10 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:gap-3">
              Start Browsing

              <ArrowRight size={18} />

            </button>

          </div>

          {/* Small Cards */}

          <div className="grid gap-8">

            {features.slice(1).map((feature, index) => {

              const Icon = feature.icon;

              return (

                <div
                  key={index}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                    <Icon
                      size={28}
                      className="text-blue-600"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;