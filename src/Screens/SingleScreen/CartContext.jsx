// // // // // // // CartContext.js
// // // // // // import React, { createContext, useState } from 'react';

// // // // // // export const CartContext = createContext();

// // // // // // export const CartProvider = ({ children }) => {
// // // // // //     const [cart, setCart] = useState([]); // Initialize cart as an empty array

// // // // // //     const addToCart = (item, quantity) => {
// // // // // //       console.log("Adding to cart:", item, quantity); // Debugging line
// // // // // //       // Check if the item is already in the cart
// // // // // //       const existingItem = cart.find(cartItem => cartItem.item.id === item.id);
  
// // // // // //       if (existingItem) {
// // // // // //           // Update quantity
// // // // // //           setCart(prevCart =>
// // // // // //               prevCart.map(cartItem =>
// // // // // //                   cartItem.item.id === item.id
// // // // // //                       ? { ...cartItem, quantity: cartItem.quantity + quantity }
// // // // // //                       : cartItem
// // // // // //               )
// // // // // //           );
// // // // // //       } else {
// // // // // //           // Add new item
// // // // // //           setCart(prevCart => [...prevCart, { item, quantity }]);
// // // // // //       }
// // // // // //   };
  
// // // // // //     return (
// // // // // //         <CartContext.Provider value={{ cart, setCart, addToCart }}>
// // // // // //             {children}
// // // // // //         </CartContext.Provider>
// // // // // //     );
// // // // // // };






// // // // // CartContext.js
// // // // import React, { createContext, useState, useEffect } from 'react';

// // // // export const CartContext = createContext();

// // // // export const CartProvider = ({ children }) => {
// // // //     const [cart, setCart] = useState(() => {
// // // //         const savedCart = localStorage.getItem('cart');
// // // //         return savedCart ? JSON.parse(savedCart) : [];
// // // //     });

// // // //     const addToCart = (item, quantity) => {
// // // //         const updatedCart = [...cart, { item, quantity }];
// // // //         setCart(updatedCart);
// // // //         localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist to localStorage
// // // //     };

// // // //     const clearCart = () => {
// // // //         setCart([]);
// // // //         localStorage.removeItem('cart');
// // // //     };

// // // //     return (
// // // //         <CartContext.Provider value={{ cart, addToCart, clearCart }}>
// // // //             {children}
// // // //         </CartContext.Provider>
// // // //     );
// // // // };


// // // // CartContext.js
// // // import React, { createContext, useState, useEffect } from 'react';
// // // import { db } from '../../Config/firebaseConfig'; // Import your Firebase config
// // // import { doc, getDoc, setDoc } from 'firebase/firestore';

// // // export const CartContext = createContext();

// // // export const CartProvider = ({ children }) => {
// // //     const [cart, setCart] = useState([]);
    
// // //     // Function to fetch user's cart items from Firestore
// // //     const fetchCartItems = async (userId) => {
// // //         const cartRef = doc(db, 'carts', userId); // Adjust Firestore collection name as needed
// // //         const cartDoc = await getDoc(cartRef);
// // //         if (cartDoc.exists()) {
// // //             const cartData = cartDoc.data();
// // //             setCart(cartData.items || []);
// // //         } else {
// // //             setCart([]); // No cart items found
// // //         }
// // //     };

// // //     // Function to add items to the user's cart in Firestore
// // //     const addToCart = async (userId, item, quantity) => {
// // //         const updatedCart = [...cart, { item, quantity }];
// // //         setCart(updatedCart);
        
// // //         // Update Firestore
// // //         const cartRef = doc(db, 'carts', userId);
// // //         await setDoc(cartRef, { items: updatedCart }, { merge: true });
// // //     };

// // //     // Function to clear the user's cart in Firestore
// // //     const clearCart = async (userId) => {
// // //         setCart([]);
// // //         const cartRef = doc(db, 'carts', userId);
// // //         await setDoc(cartRef, { items: [] }); // Clear Firestore cart
// // //     };

// // //     return (
// // //         <CartContext.Provider value={{ cart, addToCart, clearCart, fetchCartItems }}>
// // //             {children}
// // //         </CartContext.Provider>
// // //     );
// // // };





// // // CartContext.js
// // import React, { createContext, useState, useEffect } from 'react';
// // import { db } from '../../Config/firebaseConfig'; // Adjust path to your Firebase config
// // import { doc, getDoc, setDoc } from 'firebase/firestore';

// // export const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //     const [cart, setCart] = useState([]);

// //     // Function to fetch user's cart items from Firestore
// //     const fetchCartItems = async (userId) => {
// //         const cartRef = doc(db, 'carts', userId); // Assuming 'carts' is the collection name
// //         const cartDoc = await getDoc(cartRef);
// //         if (cartDoc.exists()) {
// //             const cartData = cartDoc.data();
// //             setCart(cartData.items || []); // Set cart items or empty if none
// //         } else {
// //             setCart([]); // No cart items found
// //         }
// //     };

// //     // Function to add items to the user's cart in Firestore
// //     const addToCart = async (userId, item, quantity) => {
// //         const updatedCart = [...cart, { item, quantity }];
// //         setCart(updatedCart); // Update local cart state
        
// //         // Update Firestore
// //         const cartRef = doc(db, 'carts', userId);
// //         await setDoc(cartRef, { items: updatedCart }, { merge: true }); // Merge to avoid overwriting other fields
// //     };

// //     return (
// //         <CartContext.Provider value={{ cart, addToCart, fetchCartItems }}>
// //             {children}
// //         </CartContext.Provider>
// //     );
// // };


// // CartContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { db } from '../../Config/firebaseConfig'; // Adjust path to your Firebase config
// import { doc, getDoc, setDoc } from 'firebase/firestore';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     // Function to fetch user's cart items from Firestore
//     const fetchCartItems = async (userId) => {
//         const cartRef = doc(db, 'carts', userId); // Assuming 'carts' is the collection name
//         const cartDoc = await getDoc(cartRef);
//         if (cartDoc.exists()) {
//             const cartData = cartDoc.data();
//             setCart(cartData.items || []); // Set cart items or empty if none
//         } else {
//             setCart([]); // No cart items found
//         }
//     };

//     // Function to add or update items in the user's cart in Firestore
//     const addToCart = async (userId, newItem, quantity) => {
//         const updatedCart = [...cart];
//         const existingItemIndex = updatedCart.findIndex(item => item.item.id === newItem.id);

//         if (existingItemIndex > -1) {
//             // Update quantity if item already exists in cart
//             updatedCart[existingItemIndex].quantity += quantity;
//         } else {
//             // Add new item to cart
//             updatedCart.push({ item: newItem, quantity });
//         }

//         setCart(updatedCart); // Update local cart state
        
//         // Update Firestore
//         const cartRef = doc(db, 'carts', userId);
//         await setDoc(cartRef, { items: updatedCart }, { merge: true }); // Merge to avoid overwriting other fields
//     };

//     return (
//         <CartContext.Provider value={{ cart, addToCart, fetchCartItems }}>
//             {children}
//         </CartContext.Provider>
//     );
// };


import React, { createContext, useState, useEffect } from 'react';
import { db } from '../../Config/firebaseConfig'; // Adjust path to your Firebase config
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to fetch user's cart items from Firestore
    const fetchCartItems = async (userId) => {
        const cartRef = doc(db, 'carts', userId); // Assuming 'carts' is the collection name
        const cartDoc = await getDoc(cartRef);
        if (cartDoc.exists()) {
            const cartData = cartDoc.data();
            setCart(cartData.items || []); // Set cart items or empty if none
        } else {
            setCart([]); // No cart items found
        }
    };

    // Function to add or update items in the user's cart in Firestore
    const addToCart = async (userId, newItem, quantity) => {
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex(item => item.item.id === newItem.id);

        if (existingItemIndex > -1) {
            // Update quantity if item already exists in cart
            updatedCart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to cart
            updatedCart.push({ item: newItem, quantity });
        }

        setCart(updatedCart); // Update local cart state
        
        // Update Firestore
        const cartRef = doc(db, 'carts', userId);
        await setDoc(cartRef, { items: updatedCart }, { merge: true }); // Merge to avoid overwriting other fields
    };

    const removeFromCart = async (userId, itemId) => {
        try {
            // Logic to remove item from Firestore
            const cartRef = doc(db, 'carts', userId); // Reference to user's cart
            const cartDoc = await getDoc(cartRef); // Fetch current cart data
    
            if (cartDoc.exists()) {
                const cartData = cartDoc.data();
                const updatedItems = cartData.items.filter(item => item.item.id !== itemId); // Filter out the item to remove
                
                // Update Firestore with the new items array
                await setDoc(cartRef, { items: updatedItems }, { merge: true });
                setCart(updatedItems); // Update local state
            }
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, fetchCartItems, removeFromCart }}> {/* Include removeFromCart */}
            {children}
        </CartContext.Provider>
    );
};
