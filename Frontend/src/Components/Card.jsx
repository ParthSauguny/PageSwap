import React from 'react';

function Card({ title, author, genre, owner, available, address }) {
  return (
    <div className="flex flex-col h-60 w-80 bg-white rounded-lg shadow-lg overflow-hidden mx-auto my-6 transform transition-transform hover:scale-105 duration-300">
      <div className="h-2/3 flex">
        <img 
          src="https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/master/w_1920,c_limit/Heller-Kirkus-Reviews.jpg" 
          alt={title}
          className="w-1/3 object-cover"
        />
        <div className="w-2/3 p-4 flex flex-col justify-center">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-sm text-gray-600">{author}</h2>
          <h3 className="text-sm text-gray-500 mt-2">Genre: {genre}</h3>
        </div>
      </div>
      <div className="p-4 bg-gray-100 flex flex-col gap-2">
        <div className="text-sm text-gray-700">
          <strong>Owner:</strong> {owner}
        </div>
        <div className={`text-sm font-semibold ${available ? 'text-green-600' : 'text-red-600'}`}>
          {available ? 'Available' : 'Not Available'}
        </div>
        <div className={`text-sm font-semibold text-sky-600`}>
          {address}
        </div>
      </div>
    </div>
  );
}

export default Card;
