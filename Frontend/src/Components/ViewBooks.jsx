import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import Card from "./Card";
import Navbar from "../Components/navbar";

function ViewBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("/book/show-books");
        setBooks(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return (
      book.title?.toLowerCase().includes(query) ||
      book.author?.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Navbar/>
      <section className="min-h-screen bg-slate-50 py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Header */}

          <div className="text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-600">
              Browse
            </p>

            <h1 className="mt-3 text-5xl font-bold text-slate-900">
              Discover Your Next Read
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Browse books shared by readers in the PageSwap community and
              discover stories waiting for their next reader.
            </p>

          </div>

          {/* Search */}

          <div className="mx-auto mt-12 max-w-2xl">

            <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

              <Search
                className="text-slate-400"
                size={20}
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books or authors..."
                className="ml-3 w-full bg-transparent outline-none"
              />

            </div>

          </div>

          {/* Book Count */}

          {!loading && !error && (
            <div className="mt-10 flex items-center justify-between">

              <h2 className="text-lg font-semibold text-slate-700">
                {filteredBooks.length} Books Available
              </h2>

            </div>
          )}

          {/* Loading */}

          {loading && (
            <div className="py-24 text-center text-xl text-slate-500">
              Loading books...
            </div>
          )}

          {/* Error */}

          {!loading && error && (
            <div className="py-24 text-center">

              <h2 className="text-3xl font-bold text-red-500">
                Something went wrong
              </h2>

              <p className="mt-3 text-slate-500">
                Please try again later.
              </p>

            </div>
          )}

          {/* Empty */}

          {!loading && !error && books.length === 0 && (
            <div className="py-24 text-center">

              <h2 className="text-3xl font-bold text-slate-900">
                No Books Yet 📚
              </h2>

              <p className="mt-3 text-slate-500">
                Be the first one to share a book.
              </p>

            </div>
          )}

          {/* No search results */}

          {!loading && !error && books.length > 0 && filteredBooks.length === 0 && (
            <div className="py-24 text-center">

              <h2 className="text-3xl font-bold text-slate-900">
                No matches found
              </h2>

              <p className="mt-3 text-slate-500">
                Try a different title or author.
              </p>

            </div>
          )}

          {/* Books */}

          {!loading && !error && filteredBooks.length > 0 && (

            <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

              {filteredBooks.map((book) => (
                <Card
                    key={book._id}
                    book={book}
                />
              ))}
            </div>

          )}

        </div>

      </section>
    </>
  );
}

export default ViewBooks;