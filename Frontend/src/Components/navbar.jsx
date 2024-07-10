import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className=' bg-orange-600 flex justify-between h-16 text-3xl mx-4 my-4 rounded-3xl'>
        <div className=' px-3 text-5xl text-sky-800'>PageSwap</div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/user/login">
            <button className=' border-4 p-2 rounded-3xl bg-green-600'>Login</button>
        </Link>
    </div>
  )
}

export default Navbar