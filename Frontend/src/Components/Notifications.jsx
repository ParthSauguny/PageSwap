import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Notifications() {
  const [notifications , setNotifications] = useState([]);
  const [butt ,setButt] = useState(false);
  
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
    <div className='mx-80 border-2 border-slate-200 text-lg text-black bg-gray-500'>
        {
          notifications.map((noti) => {
            <li onClick={prev => setButt(!prev)}>
              {noti}
              {
                butt && (
                  <div>
                    <button> Accept </button>
                    <button> Reject </button>
                  </div>
                )
              }
            </li>
          })
        }
    </div>
  )
}

export default Notifications