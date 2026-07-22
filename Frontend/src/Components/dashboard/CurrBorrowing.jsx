import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BookMarked, Undo2 } from 'lucide-react';

function CurrentlyBorrowing({ borrowing, onReturned }) {
  const [returningId, setReturningId] = useState(null);

  const handleReturn = async (requestId) => {
    setReturningId(requestId);
    try {
      const res = await axios.post(
        "/book/return-book",
        { request_id: requestId },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("Marked as returned!");
        onReturned?.(); // let the parent re-fetch the profile so this list updates
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Couldn't mark this as returned. Please try again.");
    } finally {
      setReturningId(null);
    }
  };

  if (!borrowing || borrowing.length === 0) {
    return null; // nothing to show if you're not currently borrowing anything
  }

  return (
    <section className="mt-10">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Currently Borrowing
        </h2>
        <p className="mt-2 text-slate-500">
          Books you've borrowed from other readers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {borrowing.map((item) => (
          <div
            key={item.requestId}
            className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <BookMarked size={22} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {item.book?.title || "Untitled book"}
                </h3>
                <p className="text-sm text-slate-500">
                  Borrowed from {item.owner?.username || "Unknown"}
                </p>
              </div>
            </div>

            <button
              disabled={returningId === item.requestId}
              onClick={() => handleReturn(item.requestId)}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
            >
              <Undo2 size={16} />
              {returningId === item.requestId ? "Marking..." : "Mark as Returned"}
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default CurrentlyBorrowing;