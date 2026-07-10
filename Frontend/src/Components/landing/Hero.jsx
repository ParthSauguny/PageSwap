import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Users,
  Bookmark,
  CheckCircle2,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl"></div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row lg:px-10">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <BookOpen size={16} />
            Community Powered Book Sharing
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Every Book
            <br />
            Deserves
            <span className="text-blue-600"> Another Reader.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-600">
            Borrow books from fellow readers, lend the ones you've
            finished, and help stories continue their journey through
            a growing community of book lovers.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link to="/books">
              <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">
                Browse Books
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </Link>

            <Link to="/book/add-book">
              <button className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg">
                Lend a Book
              </button>
            </Link>

          </div>

          {/* Mini Stats */}

          <div className="mt-12 flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <BookOpen className="text-blue-600" size={18} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">500+</h3>
                <p className="text-sm text-slate-500">
                  Books Shared
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <Users className="text-green-600" size={18} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">120+</h3>
                <p className="text-sm text-slate-500">
                  Readers
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative hidden lg:flex">

          {/* Main Card */}

          <div className="w-96 rounded-3xl bg-white p-8 shadow-2xl">

            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900">
                Featured Book
              </h3>

              <Bookmark className="text-blue-600" />
            </div>

            <div className="mt-8">

              <div className="mx-auto flex h-56 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white">

                <BookOpen size={70} />

              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Atomic Habits
              </h2>

              <p className="mt-2 text-slate-500">
                by James Clear
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Available
                </span>

                <CheckCircle2 className="text-green-600" />

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <div className="absolute -left-20 top-12 rounded-2xl bg-white p-5 shadow-xl">

            <p className="text-sm text-slate-500">
              Community
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              500+
            </h2>

            <p className="text-sm text-slate-500">
              Books Shared
            </p>

          </div>

          {/* Floating Card */}

          <div className="absolute -right-10 bottom-10 rounded-2xl bg-white p-5 shadow-xl">

            <p className="text-sm text-slate-500">
              Borrow Requests
            </p>

            <h3 className="mt-2 font-bold text-slate-900">
              24 Active
            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;