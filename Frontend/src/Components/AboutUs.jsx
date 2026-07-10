import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import {
  BookOpen,
  Handshake,
  Users,
  Leaf,
  ArrowRight,
} from "lucide-react";

function AboutUs() {
  return (
   <>
    <Navbar/>
    <section className="bg-slate-50">

      {/* Hero */}

      <div className="mx-auto max-w-6xl px-6 py-24 text-center">

        <h1 className="text-5xl font-bold text-slate-900">
          About PageSwap
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          PageSwap is a community-driven platform where readers can share,
          borrow, and discover books. Instead of letting books collect dust on
          shelves, we help them find their next reader.
        </p>

      </div>

      {/* Mission */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe that every book has more than one life. By encouraging
            borrowing and lending, PageSwap makes reading more affordable,
            sustainable, and community-focused.
          </p>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
          Why PageSwap?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <BookOpen className="text-blue-600" size={36} />
            <h3 className="mt-6 text-2xl font-semibold">
              Borrow Books
            </h3>
            <p className="mt-4 text-slate-600">
              Find books shared by other readers and enjoy them without buying
              new copies.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Handshake className="text-blue-600" size={36} />
            <h3 className="mt-6 text-2xl font-semibold">
              Share Your Library
            </h3>
            <p className="mt-4 text-slate-600">
              Give your books a second life by lending them to someone who wants
              to read them.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Users className="text-blue-600" size={36} />
            <h3 className="mt-6 text-2xl font-semibold">
              Build Community
            </h3>
            <p className="mt-4 text-slate-600">
              Connect with fellow readers and encourage a culture of sharing and
              learning.
            </p>
          </div>

        </div>

      </section>

      {/* Story */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-bold text-slate-900">
            Our Story
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            PageSwap started with a simple idea: many great books remain unused
            after being read once. Rather than leaving them on shelves, why not
            let them inspire someone else? The platform was created to make
            borrowing and lending books simple, trustworthy, and accessible for
            everyone.
          </p>

        </div>

      </section>

      {/* Values */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
          Our Values
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <Handshake className="text-blue-600" size={32} />
            <h3 className="mt-5 text-2xl font-semibold">
              Trust
            </h3>
            <p className="mt-3 text-slate-600">
              Every interaction is built on respect and responsibility between
              readers.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <Leaf className="text-green-600" size={32} />
            <h3 className="mt-5 text-2xl font-semibold">
              Sustainability
            </h3>
            <p className="mt-3 text-slate-600">
              Sharing books reduces waste and helps every book reach more
              readers.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-700 to-slate-900 p-14 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to discover your next read?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Explore books shared by the PageSwap community and become part of
            the journey.
          </p>

          <Link
            to="/books"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Browse Books
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </section>
   </>
  );
}

export default AboutUs;
