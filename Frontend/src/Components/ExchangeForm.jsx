import React, { useState } from 'react';

const ExchangeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    exchangeBook: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exchange Form Data:', formData);
    // You can now send the data to your backend or handle it accordingly
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Exchange Book</h2>

      <label className="block mb-2">Name:</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2">Email:</label>
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2">Address:</label>
      <input 
        type="text" 
        name="address" 
        value={formData.address} 
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2">Book You Want to Exchange:</label>
      <input 
        type="text" 
        name="exchangeBook" 
        value={formData.exchangeBook} 
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

export default ExchangeForm;