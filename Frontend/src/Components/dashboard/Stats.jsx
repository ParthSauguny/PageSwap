import React from 'react';
import { BookOpen, Bookmark, Clock3 } from "lucide-react";

function Stats({stats}) {
  const statCards = [
    {
      title: "Books Shared",
      value: stats.booksOwned,
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Currently Borrowing",
      value: stats.currentlyBorrowing,
      icon: Bookmark,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      title: "Pending Requests",
      value: stats.pendingIncoming,
      icon: Clock3,
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
  ];
  
  return (
    <section className="mt-10">

        <div className="grid gap-6 md:grid-cols-3">

            {statCards.map((stat) => {

            const Icon = stat.icon;

            return (

                <div
                key={stat.title}
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
                >

                <div className="flex items-center justify-between">

                    <div>

                    <p className="text-slate-500">
                        {stat.title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        {stat.value}
                    </h2>

                    </div>

                    <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg}`}
                    >

                    <Icon
                        size={28}
                        className={stat.color}
                    />

                    </div>

                </div>

                </div>

            );

            })}

        </div>

    </section>
  )
}

export default Stats