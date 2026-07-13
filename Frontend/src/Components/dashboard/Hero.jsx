import React from 'react'

function Hero({user}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            {/* Left */}

            <div className="flex items-center gap-6">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-slate-900 text-4xl font-bold text-white shadow-lg">

                    PS

                </div>

                <div>

                    <h1 className="text-4xl font-bold text-slate-900">

                        Welcome back, {user.username} 👋

                    </h1>

                    <p className="mt-3 text-lg text-slate-500">

                        Community Member

                    </p>

                    <p className="mt-2 text-slate-400">

                        Manage your books, requests and reading activity.

                    </p>

                </div>

            </div>

            {/* Right */}

            <div>

                <button
                    className="
                    rounded-xl
                    border
                    border-blue-600
                    px-6
                    py-3
                    font-semibold
                    text-blue-600
                    transition
                    hover:bg-blue-50
                    "
                >

                    Edit Profile

                </button>

            </div>

        </div>

    </section>
  )
}

export default Hero