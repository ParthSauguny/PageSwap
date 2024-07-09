import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className=' bg-red-500 flex justify-between h-14 text-3xl mx-4 my-4'>
        <div className='text-5xl text-sky-800'>PageSwap</div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/user/login">
            <button className=' border-2 border-blue-400 p-2 rounded-3xl bg-green-600'>Login</button>
        </Link>
    </div>
  )
}

export default Navbar