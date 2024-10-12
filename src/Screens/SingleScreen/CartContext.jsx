// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Initialize cart as an empty array

    const addToCart = (item, quantity) => {
      console.log("Adding to cart:", item, quantity); // Debugging line
      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.item.id === item.id);
  
      if (existingItem) {
          // Update quantity
          setCart(prevCart =>
              prevCart.map(cartItem =>
                  cartItem.item.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity + quantity }
                      : cartItem
              )
          );
      } else {
          // Add new item
          setCart(prevCart => [...prevCart, { item, quantity }]);
      }
  };
  
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
