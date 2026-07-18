import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  User,
  Bookmark,
} from "lucide-react";
import {useAuth} from "./AuthContext";

function Card({book}) {
  const {} = useAuth();
  const owner_name = book.owner?.username || "Unknown";
  const owner_id = book.owner?._id;
  const isOwnBook = user && owner_id && user.id===owner_id;

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-sm
      border
      border-slate-200
      transition-all
      duration-300
      hover:shadow-2xl
    "
    >
      {/* Book Cover */}

<div className="flex justify-center bg-slate-50 p-6">

    <img
        src={book.image_url}
        alt={book.title}
        className="
            h-52
            w-48
            rounded-xl
            object-cover
            shadow-xl
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:rotate-2
            group-hover:shadow-2xl
        "
    />

    {/* Bookmark */}

    <button
        className="
            absolute
            right-5
            top-5
            rounded-full
            bg-white
            p-2
            shadow-md
            transition
            hover:bg-blue-600
            hover:text-white
        "
    >
        <Bookmark size={18} />
    </button>

</div>

      {/* Content */}

      <div className="p-4">

        {/* Status + Genre */}

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

          {isOwnBook && (
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              Your Book
            </span>
          )}

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            {book.genre}
          </span>

        </div>

        {/* Title */}

        <h2 className="mt-2 line-clamp-2 text-2xl font-bold text-slate-900">
          {book.title}
        </h2>

        {/* Author */}

        <p className="text-slate-500">
          {book.author}
        </p>

        {/* Divider */}

        <div className="my-3 border-t border-slate-200"></div>

        {/* Owner */}

        <div className="flex items-center gap-2 text-slate-700">

          <User size={18} />

          <span>{owner_name}</span>

        </div>

        {/* Address */}

        <div className="mt-2 flex items-center gap-2 text-slate-500">

          <MapPin size={18} />

          <span>{book.address}</span>

        </div>

        {/* Button */}

        <Link
          to={`/book/${book.title}`}
          state={{
            book
          }}
        >

          <button
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
            "
          >
            View Details

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>

        </Link>

      </div>

    </div>
  );
}

export default Card;