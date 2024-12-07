import React, { useEffect, useState , useNavigate } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function Notifications() {
  const [notifications , setNotifications] = useState([]);
  const [butt ,setButt] = useState(false);

  const navigate = useNavigate();
  const bookId = notifications.book_id;

  const handleClick =(noti_id , message) => {
    const resp = {
      noti_id,
      bookId,
      message
    }
    try {
      const response = axios.post("/api/notireply" , resp , {
        withCredentials: true
      });
      if(response.status && response.statuscode===200){
        navigate('/');
        toast.success("Request completed successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("The request can't be completed. Please try later")
    }
  }
  
  useEffect( () => {
    axios.get("/api/notifications")
    .then(res => {
        setNotifications(res.data);
      }
    )
    .catch(error => {
        console.log(error);
    })
  } , []);

  return (
  <div className="mx-80 border-2 border-slate-200 text-lg text-black bg-gray-500">
    <ul>
      {notifications.map((noti) => (
        <li key={noti._id} onClick={() => setButt((prev) => !prev)}>
          {noti.message}
          <div>
            {butt && (
              <div>
                <button
                  onClick={() => handleClick(noti._id, "accept")}
                  className="bg-green-400 text-white p-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleClick(noti._id, "reject")}
                  className="bg-red-400 text-white p-2"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

}

export default Notifications