import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const BorrowForm = () => {
  const {book} = useLocation().state;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    book_id: book._id,
    address: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await axios.post("/book/borrow-book", {
        ...formData,
      }, {
        withCredentials: true,
      });

      if (res.status === 200) {
        toast.success("Request added. Please wait for confirmation by the owner.");
        navigate("/books");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Couldn't add request. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-bold text-slate-900">
            Borrow Request
          </h1>

          <p className="mt-2 text-lg text-slate-600">
            Complete the details below to request this book.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-5">

          {/* LEFT */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl bg-gray-100 p-8 shadow-sm border border-slate-200">

              <img
                src={book.image_url}
                alt={book.title}
                className="mx-auto h-64 rounded-xl shadow-lg"
              />

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                {book.title}
              </h2>

              <p className="mt-2 text-slate-500">
                {book.author}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Owner
                  </span>

                  <span className="font-semibold">
                    {book.owner?.username}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Price
                  </span>

                  <span className="font-semibold">
                    ₹{book.price}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-500">
                    Status
                  </span>

                  <span className={`font-semibold ${book.available ? "text-green-600" : "text-red-500"}`}>
                    {book.available ? "Available" : "Currently Borrowed"}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-3">

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >

              <h2 className="text-2xl font-bold text-slate-900">
                Borrow Details
              </h2>

              {/* Address */}

              <div className="mt-6">

                <label className="mb-2 block font-medium text-slate-700">
                  Pickup Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder='falana falana'
                  className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  "
                />

              </div>

              {/* Info */}

              <div className="mt-4 rounded-2xl bg-blue-50 p-5">

                <h3 className="font-semibold text-blue-900">
                  Before you submit
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-700">
                  Your request will be sent to the owner. Once they review and
                  approve it, you'll be able to borrow the book.
                </p>

              </div>

              {/* Button */}

              <button
                type="submit"
                disabled={submitting}
                className={`
                mt-4
                w-full
                rounded-xl
                py-4
                text-lg
                font-semibold
                text-white
                transition
                ${submitting ? "cursor-not-allowed bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
                `}
              >
                {submitting ? "Sending Request..." : "Send Borrow Request"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BorrowForm;