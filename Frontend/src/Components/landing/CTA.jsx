import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-24">

      {/* Decorative Blur */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">

          <BookOpen
            size={38}
            className="text-white"
          />

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
          Ready to Give Your Books
          <br />
          a Second Life?
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Join a community where books keep moving, stories keep growing,
          and every reader gets the chance to discover something new.
        </p>

        {/* Button */}

        <Link to="/user/signup">

          <button className="
            group
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-white
            px-8
            py-4
            text-lg
            font-semibold
            text-blue-700
            shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.25)]
            ">

            Start Your Journey

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />

          </button>

        </Link>

      </div>

    </section>
  );
}

export default CTA;