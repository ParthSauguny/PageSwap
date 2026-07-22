import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Logo from "../Assets/Logo.jpg";
import { Heart, BookOpen, CircleUserRound } from "lucide-react";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!user) {
      setUnreadCount(0);
      return;
    }

    const fetchUnreadCount = async () => {
      try {
        const { data } = await axios.get("/notification/unread-count", { withCredentials: true });
        setUnreadCount(data.count);
      } catch (err) {
        // Non-critical — a failed badge fetch shouldn't disrupt navigation.
        console.error(err);
      }
    };

    fetchUnreadCount();
    // Re-check whenever the route changes — this is what clears the badge
    // after visiting /notifications (which marks everything read) without
    // needing a full page reload.
  }, [user, location.pathname]);

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

          {user && (
            <Link
              to="/notifications"
              className="relative rounded-full p-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Heart size={20} />
              {unreadCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
            </Link>
          )}

        </div>

        {/* Right Side */}
        {loading ? (
          <div className="h-11 w-11 animate-pulse rounded-full bg-slate-100" />
        ) : user ? (
          <Link
            to="/dashboard"
            title={user.username}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-100"
          >
            <CircleUserRound size={26} />
          </Link>
        ) : (
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
        )}

      </nav>
    </header>
  );
}

export default Navbar;