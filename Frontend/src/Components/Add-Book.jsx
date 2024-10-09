import React, { useState , useRef } from 'react';
import {useNavigate} from 'react-router-dom'
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

  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);  // Enable loading state

  if (!title || !author || !genre || !address || (!file && !price)) {
    setError('All fields are required');
    setLoading(false);
    return;
  }
  console.log("stage 1 OK !!!!!");

  const formData = new FormData();
  formData.append('title', title);
  formData.append('author', author);
  formData.append('genre', genre);
  formData.append('address', address);
  formData.append('price', price);
  formData.append('available', true);
  if (file) formData.append('file', file);

  console.log("stage 2 crossed !!!!!");

  try {
    console.log(" entering try catch ");
    
    const res = await axios.post('http://localhost:5000/book/add-book', formData, {
      withCredentials: true,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    console.log("data sent");

    if(res.status === 200){
      setSuccess('Book added successfully!');
    }

    console.log("added book");
    
    setTitle(''); setAuthor(''); setGenre(''); setAddress(''); setPrice(0); setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';

    console.log("all done");
  } catch (err) {
    if(err.response && err.response.status === 401){
      navigate('/user/login');
    }
    setError('Failed to add book. Please try again.');
    console.log("error aagya pencho oye");
    
    console.error(err);
  } finally {
    setLoading(false);  // Disable loading state
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
  className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
  disabled={loading}  // Disable button during loading
>
  {loading ? 'Adding...' : 'Add Book'}
</button>

      </form>
      {error && <p className="mt-2 text-red-600">{error}</p>}
      {success && <p className="mt-2 text-green-600">{success}</p>}
    </div>
    </>
  );
};

export default AddBook;
