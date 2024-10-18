// CartManager.jsx
import React, { useState } from 'react';
import AddToCart from '../.././Add-to-cart-Screen/Addtocart';
import Orders from './Orders';
// import './CartManager.css'; // Optional: for styling

const CartManager = () => {
    const [recentOrder, setRecentOrder] = useState(null);

    const handleOrderComplete = (orderData) => {
        // Handle the completion of an order (e.g., save to state)
        setRecentOrder(orderData);
        alert(`Order completed successfully! Order ID: ${orderData.timestamp}`);
    };

    return (
        <div className="cart-manager">
            <h1>Your Shopping Cart</h1>
            <AddToCart onOrderComplete={handleOrderComplete} />
            <Orders recentOrder={recentOrder} /> {/* Pass recentOrder if needed */}
        </div>
    );
};

export default CartManager;
