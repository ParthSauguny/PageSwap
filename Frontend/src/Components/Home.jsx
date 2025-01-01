import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-green-500 via-orange-900 to-green-500 text-white flex flex-col justify-center items-center">
      {/* Main Content */}
      <div className="text-center px-6 py-12 sm:px-10 lg:px-20 transition-transform duration-500 ease-in-out">
        {/* Title */}
        <h1 className="text-6xl font-extrabold font-mono mb-6 hover:scale-105 hover:text-blue-400 transition-all duration-300 ease-in-out">
          PageSwap
        </h1>
        <p className="text-2xl font-semibold font-sans mb-8 text-gray-300 hover:text-gray-100 transition-colors duration-300">
          Where books find new adventures! <br />
          A community made by book enthusiasts, for book enthusiasts.
        </p>

        {/* Call to Action */}
        <div className="text-center my-6">
          <p className="text-2xl font-light text-gray-300 mb-4 hover:opacity-90 transition-opacity duration-300">
            Start sharing books and knowledge. Register today!
          </p>
          <Link to="/user/signup">
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold border-2 border-gray-400 hover:bg-gray-700 hover:border-gray-100 hover:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              Register Now
            </button>
          </Link>
        </div>

        {/* Book Options */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-6">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-300 mb-4 hover:text-gray-100 transition-colors duration-300">
              Add a Book
            </p>
            <Link to="/book/add-book">
              <button className="bg-black text-white px-5 py-2 rounded-full border-2 border-gray-400 hover:bg-gray-700 hover:border-gray-100 hover:scale-105 transition-transform duration-300">
                Click Here
              </button>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-gray-300 mb-4 hover:text-gray-100 transition-colors duration-300">
              View Books
            </p>
            <Link to="/books">
              <button className="bg-black text-white px-5 py-2 rounded-full border-2 border-gray-400 hover:bg-gray-700 hover:border-gray-100 hover:scale-105 transition-transform duration-300">
                Click Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
