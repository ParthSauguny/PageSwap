import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Navbar from "./navbar";
import { Bell, Check, X } from "lucide-react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [respondingId, setRespondingId] = useState(null); // notification currently being accepted/rejected

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/notification", { withCredentials: true });
      if (Array.isArray(res.data)) {
        setNotifications(res.data);
      } else {
        console.error("Expected an array from /notification, got:", res.data);
        setNotifications([]);
        toast.error("Notifications came back in an unexpected format.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Couldn't load notifications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleReply = async (notificationId, action) => {
    setRespondingId(notificationId);
    try {
      const res = await axios.post(
        "/notification/reply",
        { notificationId, action },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success(action === "accept" ? "Request accepted!" : "Request rejected.");
        // Re-fetch so we also see the new "accepted"/"rejected" notifications
        // this action generates for the other party, plus the updated status here.
        fetchNotifications();
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Couldn't complete that action. Please try again.");
    } finally {
      setRespondingId(null);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6">

          <h1 className="text-4xl font-bold text-slate-900">Notifications</h1>

          {loading && (
            <div className="py-24 text-center text-slate-500">Loading notifications...</div>
          )}

          {!loading && notifications.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <Bell size={40} className="mx-auto text-slate-400" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">No notifications yet</h3>
              <p className="mt-2 text-slate-500">You'll see borrow requests and updates here.</p>
            </div>
          )}

          {!loading && notifications.length > 0 && (
            <ul className="mt-10 space-y-4">
              {notifications.map((noti) => {
                // Only requests still "pending" are actionable — everything else
                // (accepted/rejected/completed) is purely informational.
                const isActionable = noti.request?.status === "pending";

                return (
                  <li
                    key={noti._id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-slate-800">{noti.message}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {new Date(noti.createdAt).toLocaleString()}
                    </p>

                    {isActionable && (
                      <div className="mt-4 flex gap-3">
                        <button
                          disabled={respondingId === noti._id}
                          onClick={() => handleReply(noti._id, "accept")}
                          className="flex items-center gap-1 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
                        >
                          <Check size={16} /> Accept
                        </button>
                        <button
                          disabled={respondingId === noti._id}
                          onClick={() => handleReply(noti._id, "reject")}
                          className="flex items-center gap-1 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
                        >
                          <X size={16} /> Reject
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

        </div>
      </section>
    </>
  );
}

export default Notifications