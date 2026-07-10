import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowUpRight,
  Inbox,
  Mail,
  Heart,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-600 p-3">
              <BookOpen className="text-white" size={24} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                PageSwap
              </h2>

              <p className="text-sm text-slate-400">
                Every Book Deserves Another Reader.
              </p>

            </div>

          </div>

          <p className="mt-6 leading-7 text-slate-400">
            Borrow books, lend stories, and become part of a
            community that believes every book deserves another
            chapter.
          </p>

        </div>

        {/* Navigation */}

        <div>

          <h3 className="text-lg font-semibold text-white">
            Navigation
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <Link
              to="/"
              className="transition hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/books"
              className="transition hover:text-blue-400"
            >
              Browse Books
            </Link>

            <Link
              to="/about-us"
              className="transition hover:text-blue-400"
            >
              About Us
            </Link>

          </div>

        </div>

        {/* Account */}

        <div>

          <h3 className="text-lg font-semibold text-white">
            Account
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <Link
              to="/user/login"
              className="transition hover:text-blue-400"
            >
              Login
            </Link>

            <Link
              to="/user/signup"
              className="transition hover:text-blue-400"
            >
              Register
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-lg font-semibold text-white">
            Connect
          </h3>

          <div className="mt-6 space-y-4">

            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Inbox size={18} />

              GitHub

              <ArrowUpRight size={15} />
            </a>

            <a
              href="mailto:support@pageswap.com"
              className="flex items-center gap-2 transition hover:text-blue-400"
            >
              <Mail size={18} />

              support@pageswap.com
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">

          <p>
            © 2026 PageSwap. All rights reserved.
          </p>

          <p className="flex items-center gap-2">

            Built with

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            for readers.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;