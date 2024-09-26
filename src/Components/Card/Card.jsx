import React from 'react';
import './Card.css'; // Import the CSS for the card
import { useNavigate } from 'react-router-dom';



function Cards({ item }) {
  const navigator = useNavigate();

  const goToPage = () => {
    console.log('Navigating to single product page...');
    
    // Pass item data (like title, description, and image) to singleProduct page
    navigator(`/singleProduct/${item.id}`, {
      state: {item}
    });
  };

  return (
    <div className="vip-card">
      <div className="vip-card-cover">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="vip-card-body">
        <h2 className="vip-card-title">{item.title}</h2>
        <p className="vip-card-description">{item.description.slice(0,50)}</p>
        <button className="vip-card-btn" onClick={goToPage}>View Product</button>
      </div>
    </div>
  );
}

export default Cards;
