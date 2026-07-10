import React, { useState , useRef } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const [file , setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);  // Enable loading state

  if (!title || !author || !genre || !address || !file) {
    setError('All fields are required');
    setLoading(false);
    return;
  }
  console.log("stage 1 OK !!!!!");

  const formData = new FormData();
  formData.append('title', title);
  formData.append('author', author);
  formData.append('genre', genre);
  formData.append('address', address);
  formData.append('price', price);
  formData.append('available', true);
  if (file) formData.append('file', file);

  console.log("stage 2 crossed !!!!!");

  try {
    console.log(" entering try catch ");
    
    const res = await axios.post('http://localhost:5000/book/add-book', formData, {
      withCredentials: true,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    console.log("data sent");

    if(res.status === 200){
      setSuccess('Book added successfully!');
    }

    console.log("added book");
    
    setTitle(''); setAuthor(''); setGenre(''); setAddress(''); setPrice(0); setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';

    console.log("all done");
  } catch (err) {
    if(err.response && err.response.status === 401){
      navigate('/user/login');
    }
    setError('Failed to add book. Please try again.');
    console.log("error aagya pencho oye");
    
    console.error(err);
  } finally {
    setLoading(false);  // Disable loading state
  }
};


  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}

        <div className="mb-10">

          <Link
            to="/books"
            className="mb-4 inline-flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Books
          </Link>

          <h1 className="text-5xl font-bold text-slate-900 text-center">
            Share a Book
          </h1>

          <p className="mt-2 text-lg text-slate-600 text-center">
            Help another reader discover their next favorite story.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid gap-10 lg:grid-cols-5">

          {/* LEFT */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              {/* Preview */}

              <div className="flex flex-col items-center">

                <div className="flex h-72 w-52 items-center justify-center overflow-hidden rounded-xl bg-slate-100 shadow-lg">

                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Upload
                      size={40}
                      className="text-slate-400"
                    />
                  )}

                </div>

                <h2 className="mt-8 text-2xl font-bold text-slate-900 text-center">
                  {title || "Book Title"}
                </h2>

                <p className="mt-2 text-slate-500">
                  {author || "Author"}
                </p>

                <span className="mt-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  {genre || "Genre"}
                </span>

                <p className="mt-8 text-center text-sm text-slate-500">
                  This is how your book will appear to other readers.
                </p>

              </div>

              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="mt-8 w-full rounded-xl border border-blue-600 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Browse Files
              </button>

              <input
                hidden
                ref={fileInputRef}
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-3">

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >

              <h2 className="text-2xl font-bold text-slate-900">
                Book Details
              </h2>

              {/* Title */}

              <div className="mt-8">

                <label className="mb-2 block font-medium text-slate-700">
                  Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Atomic Habits"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </div>

              {/* Author */}

              <div className="mt-6">

                <label className="mb-2 block font-medium text-slate-700">
                  Author
                </label>

                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="James Clear"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </div>

              {/* Genre */}

              <div className="mt-6">

                <label className="mb-2 block font-medium text-slate-700">
                  Genre
                </label>

                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select Genre</option>
                  <option>Self Help</option>
                  <option>Programming</option>
                  <option>Fantasy</option>
                  <option>Science</option>
                  <option>Biography</option>
                  <option>Business</option>
                  <option>History</option>
                  <option>Romance</option>
                  <option>Other</option>
                </select>

              </div>

              {/* Price */}

              <div className="mt-6">

                <label className="mb-2 block font-medium text-slate-700">
                  Price
                </label>

                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Leave ₹0 if you're lending the book for free.
                </p>

              </div>

              {/* Address */}

              <div className="mt-6">

                <label className="mb-2 block font-medium text-slate-700">
                  Pickup Address
                </label>

                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House No., Street, Area, City"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </div>

              {/* Info */}

              <div className="mt-8 rounded-2xl bg-blue-50 p-5">

                <h3 className="font-semibold text-blue-900">
                  Before you publish
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-700">
                  Make sure your information is accurate. Other readers will use
                  these details when requesting your book.
                </p>

              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-8 w-full rounded-xl py-4 text-lg font-semibold text-white transition ${
                  loading
                    ? "cursor-not-allowed bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Adding to Library..." : "Add to Library 📚"}
              </button>

              {error && (
                <p className="mt-5 text-center text-red-600">
                  {error}
                </p>
              )}

              {success && (
                <p className="mt-5 text-center text-green-600">
                  {success}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AddBook;
