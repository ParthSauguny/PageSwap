import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className=' bg-slate-300 flex justify-between h-16 text-3xl mx-4 my-4 rounded-3xl'>
        <div className=' px-3 text-5xl text-sky-900'>PageSwap</div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/user/login">
            <button className=' border-4 p-2 bg-black rounded-3xl hover:bg-slate-500'>Login</button>
        </Link>
    </div>
  )
}

export default Navbar