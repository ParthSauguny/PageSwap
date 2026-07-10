import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Logo from "../Assets/Logo.jpg";
import { BookOpen, Library, Users } from "lucide-react";

function Login() {
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function changehandler(event) {
    setLogindata((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const res = await axios.post("/user/login", logindata, {
        withCredentials: true,
      });

      if (res.status === 200) {
        toast.success("Logged in successfully! 🎉");
        navigate("/");
      }
    } catch (error) {
      if (error.response?.status === 400) {
        toast.warning("Please fill all details.");
      } else if (error.response?.status === 401) {
        toast.warning("Invalid credentials.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

        {/* Left Branding Panel */}

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-12 text-white">

          <div>

            <img
              src={Logo}
              alt="PageSwap"
              className="h-16 w-16 rounded-full"
            />

            <h1 className="mt-8 text-5xl font-bold">
              PageSwap
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Share books.
              <br />
              Discover stories.
              <br />
              Build a community of readers.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <BookOpen size={24} />

                <span className="text-lg">
                  Borrow Books
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Library size={24} />

                <span className="text-lg">
                  Share Your Library
                </span>

              </div>

              <div className="flex items-center gap-4">

                <Users size={24} />

                <span className="text-lg">
                  Connect With Readers
                </span>

              </div>

            </div>

          </div>

          <div>

            <blockquote className="text-2xl font-semibold leading-10">
              “Every book deserves another reader.”
            </blockquote>

            <p className="mt-4 text-blue-200">
              — PageSwap
            </p>

          </div>

        </div>

        {/* Right Login Form */}

        <div className="flex items-center justify-center p-10 lg:p-16">

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold text-slate-900">
              Welcome Back 👋
            </h2>

            <p className="mt-3 text-slate-500">
              Sign in to continue your reading journey.
            </p>

            <form
              onSubmit={submitHandler}
              className="mt-10 space-y-6"
            >

              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={logindata.email}
                  onChange={changehandler}
                  required
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

              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={logindata.password}
                  onChange={changehandler}
                  required
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

              <button
                type="submit"
                className="
                w-full
                rounded-xl
                bg-blue-600
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                "
              >
                Sign In
              </button>

            </form>

            <p className="mt-8 text-center text-slate-600">

              New to PageSwap?

              <Link
                to="/user/signup"
                className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
              >
                Create an account
              </Link>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Login;