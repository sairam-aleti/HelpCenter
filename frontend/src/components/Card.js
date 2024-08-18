import React from 'react';

const Card = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-300 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <hr className="border-t-2 border-gray-300 mb-4" />
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
