import React from 'react';
import { useLocation } from 'react-router-dom';
import './SingleProduct.css'; // Import your styles

function SingleProduct() {
  const location = useLocation();
  
  // Retrieve the item details from location.state
  const { title, description, image } = location.state || {};

  return (
    <div className="single-product">
      <div className="single-product-content">
        <h1>{title}</h1>
        <img src={image} alt={title} className="single-product-image" />
        <p>{description}</p>
        <button className="single-product-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
