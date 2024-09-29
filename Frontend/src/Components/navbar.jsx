import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../Assets/Logo.jpg'

function Navbar() {
  return (
    <div className=' bg-slate-300 flex justify-between align-middle h-16 text-3xl mx-4 mt-4 mb-1 rounded-3xl'>
      <div className='flex h-auto px-5'>
        <img src={Logo}/>
        <div className='px-3 text-5xl text-sky-900'>PageSwap</div>  
      </div>
        <Link className=' hover:text-red-400' to="/">Home</Link>
        <Link className=' hover:text-red-400' to="/about-us">About Us</Link>
        <Link to="/user/login">
            <button className='bg-black text-white border-4 p-2 rounded-3xl hover:bg-slate-700'>Login</button>
        </Link>
    </div>
  )
}

export default Navbar