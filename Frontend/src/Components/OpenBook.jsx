import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  User,
  MapPin,
  Tag,
  CircleCheck,
  Wallet
} from "lucide-react";
import Navbar from "./navbar";
import {useAuth} from './AuthContext';

function OpenBook() {
  const location = useLocation();
  const {user} = useAuth();
  const { book } = location.state;
  const isOwnBook = user && book.owner?._id && user.id === book.owner._id;

  return (
    <>
      <Navbar/>
      <section className="min-h-screen bg-slate-50 pt-6 pb-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Back */}

          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />

            Back to Browse Books
          </Link>

          {/* Main */}

          <div className="mt-5 grid gap-14 lg:grid-cols-2">

            {/* Cover */}

            <div className="relative flex items-center justify-center">

              {/* Glow */}

              <div
                  className="
                      absolute
                      h-96
                      w-96
                      rounded-full
                      blur-3xl
                  "
              />

              {/* Book */}

                    <img
                        src={book.image_url}
                        alt={book.title}
                        className="
                            relative
                            h-[500px]
                            rounded-xl
                            shadow-2xl
                            transition-all
                            duration-500
                            hover:-translate-y-2
                            hover:scale-[1.02]
                        "
                    />

            </div>

            {/* Details */}

            <div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  book.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {book.available ? "Available" : "Borrowed"}
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900">
                {book.title}
              </h1>

              <p className="mt-3 text-xl text-slate-500">
                {book.author}
              </p>

              {/* Info */}

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-3">

                  <User
                    size={20}
                    className="text-blue-600"
                  />

                  <span>
                    {book.owner.username}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <MapPin
                    size={20}
                    className="text-blue-600"
                  />

                  <span>
                    {book.address}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Tag
                    size={20}
                    className="text-blue-600"
                  />

                  <span>
                    {book.genre}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                    <Wallet
                        size={20}
                        className="text-blue-600"
                    />

                    <span>

                        Borrow Fee

                        <span className="ml-2 font-semibold">
                            ₹{book.price || 0}
                        </span>

                    </span>

                </div>

                <div className="flex items-center gap-3">

                  <CircleCheck
                    size={20}
                    className="text-green-600"
                  />

                  <span>
                    Community Verified
                  </span>

                </div>

              </div>

              {/* CTA */}

              {isOwnBook ? (
                <button
                  disabled
                  className="
                    mt-12
                    cursor-not-allowed
                    rounded-xl
                    bg-slate-200
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-slate-500
                  ">
                  This Is Your Book
                </button>
              ) : (
                <Link to={`/${book.title}/borrow`} state={{book: book}}>
                  <button
                    className="
                      mt-12
                      rounded-xl
                      bg-blue-600
                      px-8
                      py-4
                      text-lg
                      font-semibold
                      text-white
                      transition
                      hover:bg-blue-700
                    ">
                    Borrow This Book
                  </button>
                </Link>
              )}

            </div>

          </div>

          {/* Description */}

          <div className="mt-20 rounded-3xl bg-white p-10 shadow-sm">

              <h2 className="text-3xl font-bold">

                  About this Book

              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                  {book.description ||
                  "No description has been added yet. This section will display the description once it becomes available."}

              </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default OpenBook;