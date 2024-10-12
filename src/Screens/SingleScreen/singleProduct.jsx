// SingleProduct.jsx
import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Adjust the path accordingly
import './SingleProduct.css';

function SingleProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext); // Get addToCart function from context
    const { item } = location.state || {}; // Ensure item is being passed correctly

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(item?.price || 0); // Handle item being undefined

    const handleIncrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setTotalPrice(newQuantity * item.price);
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => {
                const newQuantity = prevQuantity - 1;
                setTotalPrice(newQuantity * item.price);
                return newQuantity;
            });
        }
    };

    const handleAddToCart = () => {
        if (item) {
            addToCart(item, quantity); // Add item to cart with the selected quantity
            navigate('/cart', { state: { item, quantity } }); // Navigate to Cart Page with item details
        }
    };

    // Show loading state if item is not available
    if (!item) {
        return <p>Loading...</p>; 
    }

    return (
        <div className="single-product">
            <div className="single-product-content">
                <img src={item.image} alt={item.title} className="single-product-image" />
                <div className="single-product-details">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Category: {item.category}</p>
                    <p className="single-product-price">Price: ${totalPrice.toFixed(2)}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '20px 10px' }}>
                        <button className="single-product-btn" onClick={handleDecrement}>-</button>
                        <p>{quantity}</p>
                        <button className="single-product-btn" onClick={handleIncrement}>+</button>
                    </div>
                    <button className="single-product-btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
