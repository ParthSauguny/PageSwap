import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.jpg';
import { AiOutlineHeart } from 'react-icons/ai';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-sky-600 via-blue-900 to-sky-600 text-white flex justify-between items-center h-20 px-8 py-2 rounded-md shadow-lg">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={Logo} alt="PageSwap Logo" className="h-14 w-14 rounded-full shadow-md" />
        <div className="ml-4 text-5xl font-bold">PageSwap</div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-10 text-2xl font-semibold">
        <Link
          to="/"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="hover:text-yellow-300 transition-colors duration-300"
        >
          About Us
        </Link>
        <AiOutlineHeart className="hover:text-yellow-400 transition-transform duration-300 hover:scale-125 cursor-pointer text-3xl" />
      </div>

      {/* Login Button */}
      <div>
        <Link to="/user/login">
          <button className="bg-white text-sky-800 px-8 py-3 text-xl font-bold rounded-full border-4 border-transparent hover:bg-yellow-300 hover:text-sky-900 transition-all duration-300">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
