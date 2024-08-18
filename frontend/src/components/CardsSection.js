import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const CardsSection = ({ searchQuery }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const url = searchQuery
          ? `http://localhost:5000/api/cards?title=${searchQuery.toLowerCase()}`
          : 'http://localhost:5000/api/cards';
        const response = await axios.get(url);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, [searchQuery]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))
        ) : (
          <p>No cards found.</p>
        )}
      </div>
    </section>
  );
};

export default CardsSection;
