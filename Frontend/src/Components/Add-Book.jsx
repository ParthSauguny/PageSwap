import React, { useState , useRef } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const [file , setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('genre', genre);
    formData.append('address', address);
    formData.append('price', price);
    formData.append('available', true); // default true as book is available
    if (file) formData.append('file', file); // Appending the cover image

    if (!title || !author || !genre || !address || !price) {
      setError('All fields are required');
      return;
    }    

    try {
      const res = await axios.post('http://localhost:5000/book/add-book', formData, {
        withCredentials: true,  // since using cookies for authentication
        headers: {'Content-Type': 'multipart/form-data'}
      });
      setSuccess('Book added successfully!');

      // Reset form fields
      setTitle('');
      setAuthor('');
      setGenre('');
      setAddress('');
      setFile(null);
      setPrice(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset file input using ref
      }
    } catch (err) {
      setError('Failed to add book. Please try again.');
      console.error(err);
    }
  };

  return (
    <>
    <h2 className="text-4xl font-bold mb-4 text-center">Add a Book for Exchange or Lending</h2>
    <div className="max-w-md bg-slate-400 mx-auto mt-5 p-6 border border-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price: if wanna lend or exchange with money                </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Math.max(0, e.target.value))}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Cover page:</label>
          <input
            type="file"
            id="file"
            ref={fileInputRef} 
            onChange={e => setFile(e.target.files[0])}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Book
        </button>
      </form>
      {error && <p className="mt-2 text-red-600">{error}</p>}
      {success && <p className="mt-2 text-green-600">{success}</p>}
    </div>
    </>
  );
};

export default AddBook;
