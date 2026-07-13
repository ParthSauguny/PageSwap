import React from 'react';
import Hero from "./dashboard/Hero";
import Stats from "./dashboard/Stats";
import Actions from "./dashboard/Actions";
import Lib from './dashboard/Lib';
import RecReqs from './dashboard/RecReqs';
import { useEffect } from 'react';

const [dashboard, setDashboard] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
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

      setLoading(false);

  }
};

function Dashboard() {
  useEffect(() => {
    fetchDashboard();
  } , []);
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