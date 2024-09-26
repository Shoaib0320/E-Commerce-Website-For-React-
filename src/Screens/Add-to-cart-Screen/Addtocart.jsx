// AddToCart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../SingleScreen/CartContext'; // Ensure the correct path
import './AddToCart.css'; // CSS file for styling

const AddToCart = () => {
    const { cart } = useContext(CartContext); // Access cart from context

    return (
        <div className="add-to-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(cartItem => (
                    <div className="cart-item" key={cartItem.item.id}>
                        <div className="cart-item-details">
                            <img src={cartItem.item.image} alt={cartItem.item.title} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h2>{cartItem.item.title}</h2>
                                <p>Price: ${cartItem.item.price.toFixed(2)}</p>
                                <p>Category: {cartItem.item.category}</p>
                                <p>Quantity: {cartItem.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <button className="checkout-btn">Proceed to Checkout</button>
            )}
        </div>
    );
};

export default AddToCart;
