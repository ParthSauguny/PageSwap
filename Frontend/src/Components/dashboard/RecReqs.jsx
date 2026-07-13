import React from 'react'
import { Link } from "react-router-dom";
import { Inbox, ArrowRight } from "lucide-react";

const recentRequests = [
  {
    id: 1,
    requester: "Rahul Sharma",
    book: "Atomic Habits",
    status: "Pending",
  },
  {
    id: 2,
    requester: "Aryan Gupta",
    book: "Deep Work",
    status: "Accepted",
  },
  {
    id: 3,
    requester: "Priya Verma",
    book: "Clean Code",
    status: "Rejected",
  },
];

const statusStyles = {
  Pending: "bg-amber-100 text-amber-700",
  Accepted: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
};


function RecReqs({lending , borrowing}) {
  return (
    <section className="mt-4 mb-16">
        <div className="mb-8 flex items-center justify-between">
            <div>

            <h2 className="text-3xl font-bold text-slate-900">
                Recent Requests
            </h2>

            <p className="mt-2 text-slate-500">
                Stay updated with the latest borrow requests.
            </p>

            </div>

            <Link
            to="/dashboard/requests"
            className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
            >
            View All
            </Link>

        </div>

        {recentRequests.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-16 text-center">

            <Inbox
                size={48}
                className="mx-auto text-slate-400"
            />

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                No Requests Yet
            </h3>

            <p className="mt-3 text-slate-500">
                Borrow requests will appear here once someone requests one of your books.
            </p>

            </div>

        ) : (

            <div className="space-y-5">

            {recentRequests.map((request) => (

                <div
                key={request.id}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
                >

                <div>

                    <h3 className="text-xl font-semibold text-slate-900">
                    {request.book}
                    </h3>

                    <p className="mt-2 text-slate-500">
                    Requested by{" "}
                    <span className="font-medium text-slate-700">
                        {request.requester}
                    </span>
                    </p>

                </div>

                <div className="flex items-center gap-4">

                    <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${statusStyles[request.status]}`}
                    >
                    {request.status}
                    </span>

                    <ArrowRight
                    size={20}
                    className="text-slate-400"
                    />

                </div>

                </div>

            ))}

            </div>

        )}

    </section>
  )
}

export default RecReqs