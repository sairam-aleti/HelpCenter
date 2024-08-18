import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CardDetail = () => {
  const { title } = useParams();
  const [card, setCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`https://helpcenter-zwmi.onrender.com/api/cards/${title}`);
        if (response.data) {
          setCard(response.data);
        } else {
          navigate('/not-found');
        }
      } catch (error) {
        console.error('Error fetching card:', error);
        navigate('/not-found');
      }
    };

    fetchCard();
  }, [title, navigate]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {card ? (
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default CardDetail;
