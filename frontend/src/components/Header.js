import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center mt-4 mx-4 rounded-lg">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="mr-2 h-10 w-10 object-cover rounded-full" />
        <h1 className="text-xl font-semibold">Abstract | Help Center</h1>
      </div>
      <Link to="/add-card">
        <button className="bg-gray-800 py-2 px-4 rounded hover:bg-gray-700 focus:outline-none">
          Submit a request
        </button>
      </Link>
    </header>
  );
};

export default Header;
