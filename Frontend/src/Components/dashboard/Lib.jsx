import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Card from "../Card";

function Lib({books}) {
  return (
    <section className="mt-4">

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
              My Library
          </h2>

          <p className="mt-2 text-slate-500">
              Books you've shared with the community.
          </p>

          </div>

          <Link
            to="/dashboard/library"
            className="
            rounded-xl
            border
            border-slate-200
            px-5
            py-2.5
            font-medium
            text-slate-700
            transition
            hover:bg-slate-100
            "
          >
            View All
          </Link>
        </div>

        {books.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">

              <BookOpen
                  size={48}
                  className="mx-auto text-slate-400"
              />

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  Your library is empty
              </h3>

              <p className="mt-3 text-slate-500">
                  Share your first book and start building your library.
              </p>

              <Link
                  to="/book/add-book"
                  className="
                  mt-8
                  inline-flex
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  hover:bg-blue-700
                  "
              >
                  Share a Book
              </Link>

          </div>

          ) : (

        <div className="grid gap-8 lg:grid-cols-3">

            {books.map((book) => (

                <Card
                    key={book.id}
                    book = {book}
                />

            ))}

        </div>
          )}

    </section>
  )
}

export default Lib