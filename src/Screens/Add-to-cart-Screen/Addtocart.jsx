// // // // // // import React, { useContext, useState } from 'react';
// // // // // // import { CartContext } from '../SingleScreen/CartContext'; // Ensure the correct path
// // // // // // import { db } from '../../Config/firebaseConfig'; // Import your Firebase configuration
// // // // // // import { collection, doc, setDoc } from 'firebase/firestore'; // Import Firestore methods
// // // // // // import { AuthContext } from '../SingleScreen/AuthContext'; // Assuming you have an AuthContext for user data
// // // // // // import './AddToCart.css'; // CSS file for styling

// // // // // // const AddToCart = () => {
// // // // // //     const { cart } = useContext(CartContext); // Access cart from context
// // // // // //     const { user } = useContext(AuthContext); // Access user data from AuthContext
// // // // // //     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
// // // // // //     const [name, setName] = useState('');
// // // // // //     const [address, setAddress] = useState('');
// // // // // //     const [phone, setPhone] = useState('');

// // // // // //     const handleCheckout = async (e) => {
// // // // // //         e.preventDefault();

// // // // // //         // Prepare the data to save to Firestore
// // // // // //         const totalItems = cart.length;
// // // // // //         const totalAmount = cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
        
// // // // // //         // Use user's name as the document ID
// // // // // //         const userId = user.displayName; // Assuming user's name is stored in `displayName`

// // // // // //         // Save to Firestore
// // // // // //         try {
// // // // // //             // Reference the 'Checkout' collection and create a document with userId
// // // // // //             await setDoc(doc(collection(db, 'Checkout'), userId), {
// // // // // //                 name,
// // // // // //                 address,
// // // // // //                 phone,
// // // // // //                 totalItems,
// // // // // //                 totalAmount,
// // // // // //                 cartItems: cart // Optional: Save cart items if needed
// // // // // //             });
// // // // // //             alert('Checkout successful!'); // Notify user
// // // // // //         } catch (error) {
// // // // // //             console.error("Error saving checkout data: ", error);
// // // // // //             alert('Error during checkout, please try again.');
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="add-to-cart">
// // // // // //             <h1>Your Cart</h1>
// // // // // //             {cart.length === 0 ? (
// // // // // //                 <p>Your cart is empty.</p>
// // // // // //             ) : (
// // // // // //                 cart.map(cartItem => (
// // // // // //                     <div className="cart-item" key={cartItem.item.id}>
// // // // // //                         <div className="cart-item-details">
// // // // // //                             <img src={cartItem.item.image} alt={cartItem.item.title} className="cart-item-image" />
// // // // // //                             <div className="cart-item-info">
// // // // // //                                 <h2>{cartItem.item.title}</h2>
// // // // // //                                 <p>Price: ${cartItem.item.price.toFixed(2)}</p>
// // // // // //                                 <p>Category: {cartItem.item.category}</p>
// // // // // //                                 <p>Quantity: {cartItem.quantity}</p>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 ))
// // // // // //             )}
// // // // // //             {cart.length > 0 && (
// // // // // //                 <>
// // // // // //                     <button className="checkout-btn" onClick={() => setShowCheckoutForm(true)}>
// // // // // //                         Proceed to Checkout
// // // // // //                     </button>
// // // // // //                     {showCheckoutForm && (
// // // // // //                         <div className="checkout-form">
// // // // // //                             <h2>Checkout</h2>
// // // // // //                             <p>Total Items: {cart.length}</p>
// // // // // //                             <p>Total Amount: ${cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0).toFixed(2)}</p>
// // // // // //                             <form onSubmit={handleCheckout}>
// // // // // //                                 <input
// // // // // //                                     type="text"
// // // // // //                                     placeholder="Name"
// // // // // //                                     value={name}
// // // // // //                                     onChange={(e) => setName(e.target.value)}
// // // // // //                                     required
// // // // // //                                 />
// // // // // //                                 <input
// // // // // //                                     type="text"
// // // // // //                                     placeholder="Address"
// // // // // //                                     value={address}
// // // // // //                                     onChange={(e) => setAddress(e.target.value)}
// // // // // //                                     required
// // // // // //                                 />
// // // // // //                                 <input
// // // // // //                                     type="text"
// // // // // //                                     placeholder="Phone Number"
// // // // // //                                     value={phone}
// // // // // //                                     onChange={(e) => setPhone(e.target.value)}
// // // // // //                                     required
// // // // // //                                 />
// // // // // //                                 <button type="submit">Submit</button>
// // // // // //                             </form>
// // // // // //                         </div>
// // // // // //                     )}
// // // // // //                 </>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default AddToCart;




// // // // // import React, { useContext, useEffect, useState } from 'react';
// // // // // import { CartContext } from '../SingleScreen/CartContext'; // Ensure the correct path
// // // // // import { db } from '../../Config/firebaseConfig'; // Import Firebase configuration
// // // // // import { collection, doc, getDoc, setDoc } from 'firebase/firestore'; // Import Firestore methods
// // // // // import { AuthContext } from '../SingleScreen/AuthContext'; // Assuming you have an AuthContext
// // // // // import './AddToCart.css'; // CSS file for styling

// // // // // const AddToCart = () => {
// // // // //     const { user } = useContext(AuthContext); // Get logged-in user
// // // // //     const [cart, setCart] = useState([]); // Store cart items
// // // // //     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
// // // // //     const [name, setName] = useState('');
// // // // //     const [address, setAddress] = useState('');
// // // // //     const [phone, setPhone] = useState('');

// // // // //     // Fetch user's cart items from Firestore on component mount
// // // // //     useEffect(() => {
// // // // //         const fetchCartItems = async () => {
// // // // //             if (user) {
// // // // //                 const userId = user.uid; // Use user's unique ID
// // // // //                 const cartRef = doc(collection(db, 'UserCarts'), userId); // Reference user’s cart
// // // // //                 const cartDoc = await getDoc(cartRef); // Fetch data

// // // // //                 if (cartDoc.exists()) {
// // // // //                     setCart(cartDoc.data().cartItems || []); // Set cart items
// // // // //                 } else {
// // // // //                     setCart([]); // Initialize empty cart if no items found
// // // // //                 }
// // // // //             }
// // // // //         };

// // // // //         fetchCartItems(); // Call fetch function on component mount
// // // // //     }, [user]); // Run effect when user changes (login/logout)

// // // // //     // Save cart data to Firestore when user adds items or checks out
// // // // //     const saveCartToFirestore = async (updatedCart) => {
// // // // //         try {
// // // // //             const userId = user.uid; // Use user's unique ID
// // // // //             await setDoc(doc(collection(db, 'UserCarts'), userId), {
// // // // //                 cartItems: updatedCart, // Save cart items under the user
// // // // //             });
// // // // //         } catch (error) {
// // // // //             console.error("Error saving cart: ", error);
// // // // //         }
// // // // //     };

// // // // //     const handleCheckout = async (e) => {
// // // // //         e.preventDefault();
// // // // //         const totalAmount = cart.reduce(
// // // // //             (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
// // // // //             0
// // // // //         );

// // // // //         try {
// // // // //             await saveCartToFirestore([]); // Clear cart after checkout
// // // // //             alert(`Checkout successful! Total amount: $${totalAmount.toFixed(2)}`);
// // // // //             setCart([]); // Reset cart locally
// // // // //         } catch (error) {
// // // // //             console.error("Checkout error: ", error);
// // // // //             alert('Error during checkout, please try again.');
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="add-to-cart">
// // // // //             <h1>Your Cart</h1>
// // // // //             {cart.length === 0 ? (
// // // // //                 <p>Your cart is empty.</p>
// // // // //             ) : (
// // // // //                 cart.map((cartItem) => (
// // // // //                     <div className="cart-item" key={cartItem.item.id}>
// // // // //                         <div className="cart-item-details">
// // // // //                             <img
// // // // //                                 src={cartItem.item.image}
// // // // //                                 alt={cartItem.item.title}
// // // // //                                 className="cart-item-image"
// // // // //                             />
// // // // //                             <div className="cart-item-info">
// // // // //                                 <h2>{cartItem.item.title}</h2>
// // // // //                                 <p>Price: ${cartItem.item.price.toFixed(2)}</p>
// // // // //                                 <p>Category: {cartItem.item.category}</p>
// // // // //                                 <p>Quantity: {cartItem.quantity}</p>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 ))
// // // // //             )}
// // // // //             {cart.length > 0 && (
// // // // //                 <>
// // // // //                     <button
// // // // //                         className="checkout-btn"
// // // // //                         onClick={() => setShowCheckoutForm(true)}
// // // // //                     >
// // // // //                         Proceed to Checkout
// // // // //                     </button>
// // // // //                     {showCheckoutForm && (
// // // // //                         <div className="checkout-form">
// // // // //                             <h2>Checkout</h2>
// // // // //                             <form onSubmit={handleCheckout}>
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     placeholder="Name"
// // // // //                                     value={name}
// // // // //                                     onChange={(e) => setName(e.target.value)}
// // // // //                                     required
// // // // //                                 />
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     placeholder="Address"
// // // // //                                     value={address}
// // // // //                                     onChange={(e) => setAddress(e.target.value)}
// // // // //                                     required
// // // // //                                 />
// // // // //                                 <input
// // // // //                                     type="text"
// // // // //                                     placeholder="Phone Number"
// // // // //                                     value={phone}
// // // // //                                     onChange={(e) => setPhone(e.target.value)}
// // // // //                                     required
// // // // //                                 />
// // // // //                                 <button type="submit">Submit</button>
// // // // //                             </form>
// // // // //                         </div>
// // // // //                     )}
// // // // //                 </>
// // // // //             )}
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AddToCart;









// // // // import React, { useContext } from 'react';
// // // // import { CartContext } from '../SingleScreen/CartContext'; // Ensure path is correct
// // // // import './AddToCart.css';

// // // // const AddToCart = () => {
// // // //     const { cart, clearCart } = useContext(CartContext); // Access cart data

// // // //     const totalAmount = cart.reduce(
// // // //         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
// // // //         0
// // // //     );

// // // //     const handleCheckout = () => {
// // // //         alert(`Checkout successful! Total: $${totalAmount.toFixed(2)}`);
// // // //         clearCart(); // Clear the cart after checkout
// // // //     };

// // // //     return (
// // // //         <div className="add-to-cart">
// // // //             <h1>Your Cart</h1>
// // // //             {cart.length === 0 ? (
// // // //                 <p>Your cart is empty.</p>
// // // //             ) : (
// // // //                 cart.map((cartItem) => (
// // // //                     <div className="cart-item" key={cartItem.item.id}>
// // // //                         <img
// // // //                             src={cartItem.item.image}
// // // //                             alt={cartItem.item.title}
// // // //                             className="cart-item-image"
// // // //                         />
// // // //                         <div className="cart-item-info">
// // // //                             <h2>{cartItem.item.title}</h2>
// // // //                             <p>Price: ${cartItem.item.price}</p>
// // // //                             <p>Quantity: {cartItem.quantity}</p>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))
// // // //             )}
// // // //             {cart.length > 0 && (
// // // //                 <button className="checkout-btn" onClick={handleCheckout}>
// // // //                     Proceed to Checkout
// // // //                 </button>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AddToCart;


// // // // AddToCart.jsx
// // // import React, { useContext, useEffect } from 'react';
// // // import { CartContext } from '../SingleScreen/CartContext'; // Ensure path is correct
// // // import { AuthContext } from '../SingleScreen/AuthContext'; // Ensure path is correct
// // // import './AddToCart.css';

// // // const AddToCart = () => {
// // //     const { cart, clearCart, fetchCartItems } = useContext(CartContext);
// // //     const { user } = useContext(AuthContext);

// // //     useEffect(() => {
// // //         if (user) {
// // //             fetchCartItems(user.uid); // Fetch user's cart items when they log in
// // //         }
// // //     }, [user, fetchCartItems]);

// // //     const totalAmount = cart.reduce(
// // //         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
// // //         0
// // //     );

// // //     const handleCheckout = () => {
// // //         alert(`Checkout successful! Total: $${totalAmount.toFixed(2)}`);
// // //         clearCart(user.uid); // Clear the cart after checkout
// // //     };

// // //     return (
// // //         <div className="add-to-cart">
// // //             <h1>Your Cart</h1>
// // //             {cart.length === 0 ? (
// // //                 <p>Your cart is empty.</p>
// // //             ) : (
// // //                 cart.map((cartItem, index) => (
// // //                     <div className="cart-item" key={index}>
// // //                         <img
// // //                             src={cartItem.item.image}
// // //                             alt={cartItem.item.title}
// // //                             className="cart-item-image"
// // //                         />
// // //                         <div className="cart-item-info">
// // //                             <h2>{cartItem.item.title}</h2>
// // //                             <p>Price: ${cartItem.item.price}</p>
// // //                             <p>Quantity: {cartItem.quantity}</p>
// // //                         </div>
// // //                     </div>
// // //                 ))
// // //             )}
// // //             {cart.length > 0 && (
// // //                 <button className="checkout-btn" onClick={handleCheckout}>
// // //                     Proceed to Checkout
// // //                 </button>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AddToCart;



// // // AddToCart.jsx
// // import React, { useContext, useEffect } from 'react';
// // import { CartContext } from '../SingleScreen/CartContext'; // Ensure path is correct
// // import { AuthContext } from '../SingleScreen/AuthContext'; // Ensure path is correct
// // import './AddToCart.css';

// // const AddToCart = () => {
// //     const { cart, fetchCartItems } = useContext(CartContext);
// //     const { user } = useContext(AuthContext);

// //     // Fetch cart items for the logged-in user
// //     useEffect(() => {
// //         if (user) {
// //             fetchCartItems(user.uid); // Fetch user's cart items based on user ID
// //         }
// //     }, [user, fetchCartItems]);

// //     const totalAmount = cart.reduce(
// //         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
// //         0
// //     );

// //     return (
// //         <div className="add-to-cart">
// //             <h1>Your Cart</h1>
// //             {cart.length === 0 ? (
// //                 <p>Your cart is empty.</p>
// //             ) : (
// //                 cart.map((cartItem, index) => (
// //                     <div className="cart-item" key={index}>
// //                         <img
// //                             src={cartItem.item.image}
// //                             alt={cartItem.item.title}
// //                             className="cart-item-image"
// //                         />
// //                         <div className="cart-item-info">
// //                             <h2>{cartItem.item.title}</h2>
// //                             <p>Price: ${cartItem.item.price}</p>
// //                             <p>Quantity: {cartItem.quantity}</p>
// //                         </div>
// //                     </div>
// //                 ))
// //             )}
// //             {cart.length > 0 && (
// //                 <div>
// //                     <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
// //                     <button className="checkout-btn">Proceed to Checkout</button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default AddToCart;






// // AddToCart.jsx
// import React, { useContext, useEffect } from 'react';
// import { CartContext } from '../SingleScreen/CartContext';
// import { AuthContext } from '../SingleScreen/AuthContext'; // Assuming you have AuthContext set up
// import './AddToCart.css';

// const AddToCart = () => {
//     const { cart, fetchCartItems } = useContext(CartContext);
//     const { user } = useContext(AuthContext);

//     // Fetch cart items for the logged-in user
//     useEffect(() => {
//         if (user) {
//             fetchCartItems(user.uid); // Fetch user's cart items based on user ID
//         }
//     }, [user, fetchCartItems]);

//     const totalAmount = cart.reduce(
//         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
//         0
//     );

//     return (
//         <div className="add-to-cart">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 cart.map((cartItem, index) => (
//                     <div className="cart-item" key={index}>
//                         <img
//                             src={cartItem.item.image}
//                             alt={cartItem.item.title}
//                             className="cart-item-image"
//                         />
//                         <div className="cart-item-info">
//                             <h2>{cartItem.item.title}</h2>
//                             <p>Price: ${cartItem.item.price}</p>
//                             <p>Quantity: {cartItem.quantity}</p>
//                         </div>
//                     </div>
//                 ))
//             )}
//             {cart.length > 0 && (
//                 <div>
//                     <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
//                     <button className="checkout-btn">Proceed to Checkout</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;






// AddToCart.jsx
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../SingleScreen/CartContext';
import { AuthContext } from '../SingleScreen/AuthContext'; // Assuming you have AuthContext set up
import { FaTrash } from 'react-icons/fa'; // Importing trash icon
import './AddToCart.css';

const AddToCart = () => {
    const { cart, fetchCartItems, removeFromCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    // Fetch cart items for the logged-in user
    useEffect(() => {
        if (user) {
            fetchCartItems(user.uid); // Fetch user's cart items based on user ID
        }
    }, [user, fetchCartItems]);

    const handleRemoveFromCart = async (itemId) => {
        if (user) {
            await removeFromCart(user.uid, itemId); // Call removeFromCart with user ID and item ID
        }
    };

    const totalAmount = cart.reduce(
        (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
        0
    );

    return (
        <div className="add-to-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((cartItem, index) => (
                    <div className="cart-item" key={index}>
                        <img
                            src={cartItem.item.image}
                            alt={cartItem.item.title}
                            className="cart-item-image"
                        />
                        <div className="cart-item-info">
                            <h2>{cartItem.item.title}</h2>
                            <p>Price: ${cartItem.item.price}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                        </div>
                        <button
                            className="delete-btn"
                            onClick={() => handleRemoveFromCart(cartItem.item.id)} // Assuming each item has an id
                        >
                            <FaTrash /> {/* Trash icon */}
                        </button>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <div>
                    <h2 className='cart-item-total-price'>Total Amount: ${totalAmount.toFixed(2)}</h2>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
