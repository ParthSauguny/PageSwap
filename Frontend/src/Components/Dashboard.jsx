import React from 'react';
import Hero from "./dashboard/Hero";
import Stats from "./dashboard/Stats";
import Actions from "./dashboard/Actions";
import Lib from './dashboard/Lib';
import RecReqs from './dashboard/RecReqs';
import { useState , useEffect } from 'react';
import axios from "axios";
import {Loader2} from "lucide-react";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
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
    };
    fetchDashboard();
  } , []);

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
        <Lib books={dashboard.booksOwned}/>
        <RecReqs lending={dashboard.lending} borrowing={dashboard.borrowing}/>
    </>
  )
}

export default Dashboard;