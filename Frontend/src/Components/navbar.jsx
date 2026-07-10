import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.jpg";
import { Heart, BookOpen } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src={Logo}
            alt="PageSwap"
            className="h-11 w-11 rounded-xl object-cover shadow-sm"
          />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              PageSwap
            </h1>

            <p className="text-xs text-slate-500">
              Every Book Deserves Another Reader
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-[17px] font-semibold text-slate-700 transition-all duration-200 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className="text-[17px] font-semibold text-slate-700 transition-all duration-200 hover:text-blue-600"
          >
            About Us
          </Link>

          <button
            className="rounded-full p-2 text-slate-600 transition hover:bg-red-50 hover:text-red-500"
          >
            <Heart size={20} />
          </button>

        </div>

        {/* Right Side */}
        <Link to="/user/login">
          <button
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-xl
            "
          >
            Login
          </button>
        </Link>

      </nav>
    </header>
  );
}

export default Navbar;