import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  User,
  BadgeCheck,
} from "lucide-react";

// Temporary Placeholder Covers
import Book1 from "../../Assets/Logo.jpg";
import Book2 from "../../Assets/Logo.jpg";
import Book3 from "../../Assets/Logo.jpg";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    owner: "Rahul Sharma",
    image: Book1,
    available: true,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    owner: "Priya Verma",
    image: Book2,
    available: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    owner: "Aditya Singh",
    image: Book3,
    available: false,
  },
];

function FeaturedBooks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Featured Books
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Discover Your Next Read
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Browse books shared by our community and discover stories
              waiting for their next reader.
            </p>
          </div>

          <Link
            to="/books"
            className="group flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View All Books

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {books.map((book, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Cover */}

              <div className="overflow-hidden">

                <img
                  src={book.image}
                  alt={book.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      book.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {book.available ? "Available" : "Borrowed"}
                  </span>

                  <BookOpen
                    size={20}
                    className="text-slate-400"
                  />

                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {book.title}
                </h3>

                <p className="mt-1 text-slate-500">
                  {book.author}
                </p>

                <div className="mt-6 flex items-center gap-2 text-slate-600">

                  <User size={18} />

                  <span>{book.owner}</span>

                </div>

                <Link
                  to="/books"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedBooks;