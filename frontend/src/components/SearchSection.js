import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    if (query.toLowerCase() === 'cards') {
      navigate('/cards');
    } else {
      navigate(`/card/${query}`);
    }
  };

  return (
    <section className="bg-purple-200 py-16 text-center">
      <h2 className="text-4xl font-semibold mb-6">How can we help?</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSearch} className="flex w-full mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full py-3 px-4 rounded-l-md text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="bg-purple-500 text-white p-2 rounded-r-md">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </form>
        <button
          onClick={() => navigate('/cards')}
          className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          All Cards
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
