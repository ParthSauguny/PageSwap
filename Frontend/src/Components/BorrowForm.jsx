import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BorrowForm = ({ book, bookOwner }) => {
  const [formData, setFormData] = useState({
    bookTitle: book,  // The title of the book
    bookOwner,
    address: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/book/borrow-book", {
        ...formData,
        bookOwner,  // Passing the book owner id here
      }, {
        withCredentials: true,
      });

      if (res.status === 200) {
        toast.success("Request added. Please wait for confirmation by the owner.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Couldn't add request. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Borrow Book</h2>

      <label className="block mb-2">Your pickup Address:</label>
      <input 
        type="text" 
        name="address" 
        value={formData.address} 
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2">Additional Comments:</label>
      <textarea 
        name="comments" 
        value={formData.comments} 
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      ></textarea>

      <button 
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default BorrowForm;
