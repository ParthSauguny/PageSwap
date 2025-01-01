import React from 'react';
import {Link} from 'react-router-dom';

function AboutUs() {
  return (
    <div 
      className="relative min-h-screen bg-fixed bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')", // High-quality book-themed image
      }}
    >
      {/* Overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-gray-800/70"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto p-6 sm:p-12 lg:p-16 bg-black/70 rounded-2xl shadow-2xl backdrop-blur-md">
        {/* Title Section */}
        <h1 className="text-center text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-10 text-gray-300">
          Welcome to <span className="font-bold text-blue-300">PageSwap</span>, your go-to online community for exchanging books! At PageSwap, we believe in the power of sharing and the joy of discovering new books. Our mission is to create a vibrant and inclusive platform where book lovers can connect, share, and explore a world of literary treasures.
        </p>

        {/* Who We Are Section */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-green-400">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-300">
          PageSwap is a dedicated team of avid readers and tech enthusiasts who are passionate about making reading more accessible and enjoyable for everyone. We understand that books can be expensive and sometimes hard to find, which is why we've created a space where you can exchange books with fellow readers from around the globe.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-400">Why Choose Us</h2>
        <ul className="space-y-6 text-gray-300">
          <li className="flex items-center gap-4">
            <span className="bg-green-400 text-black font-bold px-3 py-1 rounded-full">✔</span>
            <span>Community Focused: We're more than just a book exchange site; we're a community of readers who support and inspire each other.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="bg-green-400 text-black font-bold px-3 py-1 rounded-full">✔</span>
            <span>User-Friendly: Our platform is designed to be intuitive and easy to navigate, so you can focus on what matters most – the books!</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="bg-green-400 text-black font-bold px-3 py-1 rounded-full">✔</span>
            <span>Secure & Trustworthy: We prioritize the security and privacy of our users, ensuring a safe and reliable experience for everyone.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="bg-green-400 text-black font-bold px-3 py-1 rounded-full">✔</span>
            <span>Diverse Selection: With a wide range of genres and titles available, there's something for every reader at PageSwap.</span>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-6 text-green-400">
            Join us today and become a part of the PageSwap community.
          </h2>
          <Link to={'/user/signup'}>
            <button className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
              Join Now
            </button>
          </Link>
        </div>

        {/* Footer */}
        <h1 className="text-center text-3xl mt-12 text-gray-300 font-light italic">
          Happy Reading!
        </h1>
      </div>
    </div>
  );
}

export default AboutUs;
