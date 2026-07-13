import { Link } from "react-router-dom";
import {
  PlusCircle,
  BookOpen,
  Inbox,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Share a Book",
    description: "Add another book to your library.",
    icon: PlusCircle,
    link: "/book/add-book",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Browse Books",
    description: "Explore books shared by the community.",
    icon: BookOpen,
    link: "/book/show-books",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "View Requests",
    description: "Manage your incoming borrow requests.",
    link: "/dashboard/requests", // Change later if needed
    icon: Inbox,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];


function Actions() {
  return (
    <section className="my-8 mx-2">

        <div className="mb-6">

            <h2 className="text-3xl font-bold text-slate-900">
            Quick Actions
            </h2>

            <p className="mt-2 text-slate-500">
            Jump straight to the things you do most often.
            </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

            {actions.map((action) => {

            const Icon = action.icon;

            return (

                <Link
                key={action.title}
                to={action.link}
                className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
                >

                <div className="flex h-full flex-col justify-between">

                    <div>

                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.bg}`}
                    >

                        <Icon
                        size={28}
                        className={`${action.color} transition group-hover:scale-110`}
                        />

                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-slate-900">

                        {action.title}

                    </h3>

                    <p className="mt-3 leading-7 text-slate-500">

                        {action.description}

                    </p>

                    </div>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

                    <span>
                        Open
                    </span>

                    <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                    />

                    </div>

                </div>

                </Link>

            );

            })}

        </div>

    </section>
  )
}

export default Actions