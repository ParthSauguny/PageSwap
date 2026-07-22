import React from 'react';
import Hero from "./dashboard/Hero";
import Stats from "./dashboard/Stats";
import Actions from "./dashboard/Actions";
import Lib from './dashboard/Lib';
import RecReqs from './dashboard/RecReqs';
import CurrentlyBorrowing from './dashboard/CurrBorrowing';
import { useState , useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import {Loader2} from "lucide-react";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const fetchDashboard = useCallback(async () => {
    try {
        setLoading(true);
        const res = await axios.get(
            "/user/profile",
            {
                withCredentials: true,
            }
        );
        setDashboard(res.data);

    }
    catch(err){

        console.error(err);

        setError("Couldn't load dashboard.");

    }
    finally{
        setTimeout(()=>{} , 5);
        setLoading(false);

    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  } , [fetchDashboard]);

  // Fire a toast when arriving here with a message (e.g. from Add-Book after
  // a successful submission), then clear it from history so a refresh or
  // back-navigation doesn't re-trigger it.
  useEffect(() => {
    if (location.state?.toast) {
      toast.success(location.state.toast);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  if(loading) {
    return (
      <div className="flex justify-content-center align-items-center vh-100">
        <Loader2 height={96} width={96}/>
      </div>
    )
  }

  if(error) {
    return (
      <div className='py-20 text-center text-red-600'>
        Something went wrong...
      </div>
    )
  }

  const booksWithOwner = dashboard.booksOwned.map((book) => ({
    ...book,
    owner: { username: dashboard.user.username, _id: dashboard.user.id },
  }));

  return (
    <>
        <Hero user={dashboard.user}/>
        <Stats stats={dashboard.stats}/>
        <Actions/>
        <CurrentlyBorrowing borrowing={dashboard.borrowing.active} onReturned={fetchDashboard}/>
        <Lib books={booksWithOwner}/>
        <RecReqs recentRequests={dashboard.recentRequests}/>
    </>
  )
}

export default Dashboard;