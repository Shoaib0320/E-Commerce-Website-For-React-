import React from 'react';
import './Card.css'; // Import the CSS for the card
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
  const navigator = useNavigate();

  const goToPage = () => {
    console.log('Navigating to single product page...');
    
    // Pass item data (like title, description, and image) to singleProduct page
    navigator('/singleProduct', {
      state: {
        title: item.title,
        description: item.description,
        image: item.image
      }
    });
  };

  return (
    <div className="vip-card">
      <div className="vip-card-cover">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="vip-card-body">
        <div className="vip-card-avatar">
          <img
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            alt="Avatar"
          />
        </div>
        <h2 className="vip-card-title">{item.title}</h2>
        <p className="vip-card-description">{item.description}</p>
        <button className="vip-card-btn" onClick={goToPage}>View Product</button>
      </div>
    </div>
  );
}

export default Cards;
