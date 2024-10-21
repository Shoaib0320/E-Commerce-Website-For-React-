import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { AuthContext } from './AuthContext';
import './SingleProduct.css';

function SingleProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const { item } = location.state || {};

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(item ? item.price : 0);

    useEffect(() => {
        if (item) {
            setTotalPrice(quantity * item.price);
        }
    }, [quantity, item]);

    const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const handleDecrement = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    const handleAddToCart = () => {
        if (item && user) {
            addToCart(item, quantity);
            navigate('/cart');
        }
    };

    if (!item) return <p>Loading...</p>;

    return (
        <div className="single-product">
            <div className="single-product-content">
                <img src={item.imageUrl} alt={item.title} className="single-product-image" />
                <div className="single-product-details">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>Category: {item.category}</p>
                    <p className="single-product-price">Price: PKR {totalPrice.toFixed(2)}</p>
                    <div className="quantity-controls">
                        <button onClick={handleDecrement} className="single-product-btn">-</button>
                        <p>{quantity}</p>
                        <button onClick={handleIncrement} className="single-product-btn">+</button>
                    </div>
                    <br />
                    <button onClick={handleAddToCart} className="single-product-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;