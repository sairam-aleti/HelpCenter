import React, { useState } from 'react';
import axios from 'axios';

const AddCardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://helpcenter-zwmi.onrender.com/api/cards', { title, description });
      setTitle('');
      setDescription('');
      setSuccessMessage('Card added successfully!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error adding card. Please try again.');
      setSuccessMessage('');
      console.error('Error adding card:', error);
    }
  };

  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-4xl font-semibold mb-6">Add a New Card</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Card Title"
            className="w-full py-3 px-4 rounded-md text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Card Description"
            className="w-full py-3 px-4 rounded-md text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button type="submit" className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Add Card
          </button>
        </form>
        {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
      </div>
    </section>
  );
};

export default AddCardForm;
