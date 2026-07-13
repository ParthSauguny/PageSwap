import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../Card";

const myBooks = [
  {
    _id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    available: true,
    address: "Delhi",
    image_url:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    owner: {
      username: "Parth",
      _id: "123",
    },
  },
  {
    _id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    available: false,
    address: "Mumbai",
    image_url:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    owner: {
      username: "Parth",
      _id: "123",
    },
  },
  {
    _id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    available: true,
    address: "Chandigarh",
    image_url:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    owner: {
      username: "Parth",
      _id: "123",
    },
  },
];


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

        {myBooks.length === 0 ? (

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

            {myBooks.map((book) => (

                <Card
                    key={book._id}
                    book = {book}
                />

            ))}

        </div>
          )}

    </section>
  )
}

export default Lib