import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Notifications() {
  const [notifications , setNotifications] = useState([]);
  
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
            <ul>{noti}</ul>
          })
        }
    </div>
  )
}

export default Notifications