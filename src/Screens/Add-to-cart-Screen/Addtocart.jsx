// // // import React, { useContext, useState, useEffect } from 'react';
// // // import { CartContext } from '../SingleScreen/CartContext';
// // // import { AuthContext } from '../SingleScreen/AuthContext';
// // // import { FaTrash } from 'react-icons/fa';
// // // import './AddToCart.css';
// // // import { db } from '../../Config/firebaseConfig';
// // // import { doc, setDoc } from 'firebase/firestore';

// // // const AddToCart = () => {
// // //     const { cart, clearCart, removeFromCart } = useContext(CartContext); // Include removeFromCart
// // //     const { user } = useContext(AuthContext); 
// // //     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
// // //     const [formData, setFormData] = useState({
// // //         name: '',
// // //         address: '',
// // //         phone: '',
// // //     });

// // //     const totalAmount = cart.reduce(
// // //         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
// // //         0
// // //     );

// // //     useEffect(() => {
// // //         if (user) {
// // //             setFormData((prevData) => ({
// // //                 ...prevData,
// // //                 name: user.displayName || user.name || '', 
// // //             }));
// // //         }
// // //     }, [user]);

// // //     const handleCheckoutClick = () => {
// // //         if (!user) {
// // //             alert('Please log in to proceed with checkout.');
// // //             return;
// // //         }
// // //         setShowCheckoutForm(true);
// // //     };

// // //     const handleInputChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleRemoveFromCart = (itemId) => {
// // //         removeFromCart(itemId); // Call removeFromCart function from context
// // //     };

// // //     const handleFormSubmit = async (e) => {
// // //         e.preventDefault();
// // //         if (!user) {
// // //             alert('Please log in to complete the checkout.');
// // //             return;
// // //         }

// // //         try {
// // //             const userDocName = user.displayName || user.name || 'Anonymous'; 
// // //             const checkoutRef = doc(db, 'checkout', userDocName);

// // //             await setDoc(checkoutRef, {
// // //                 name: formData.name,
// // //                 address: formData.address,
// // //                 phone: formData.phone,
// // //                 totalItems: cart.length,
// // //                 totalAmount: totalAmount,
// // //                 items: cart,
// // //                 timestamp: new Date().toISOString(),
// // //             });

// // //             alert('Checkout successful!');
// // //             clearCart();
// // //             setShowCheckoutForm(false);
// // //         } catch (error) {
// // //             console.error('Error saving checkout data:', error);
// // //             alert('Failed to save your checkout. Please try again.');
// // //         }
// // //     };

// // //     return (
// // //         <div className="add-to-cart">
// // //             <h1>Your Cart</h1>
// // //             {cart.length === 0 ? (
// // //                 <p>Your cart is empty.</p>
// // //             ) : (
// // //                 cart.map((cartItem) => (
// // //                     <div className="cart-item" key={cartItem.item.id}>
// // //                         <img
// // //                             src={cartItem.item.imageUrl}
// // //                             alt={cartItem.item.title}
// // //                             className="cart-item-image"
// // //                         />
// // //                         <div className="cart-item-info">
// // //                             <h2>{cartItem.item.title}</h2>
// // //                             <p>Price: ${cartItem.item.price}</p>
// // //                             <p>Quantity: {cartItem.quantity}</p>
// // //                         </div>
// // //                         <button
// // //                             className="delete-btn"
// // //                             onClick={() => handleRemoveFromCart(cartItem.item.id)}
// // //                         >
// // //                             <FaTrash />
// // //                         </button>
// // //                     </div>
// // //                 ))
// // //             )}

// // //             {cart.length > 0 && (
// // //                 <button className="checkout-btn" onClick={handleCheckoutClick}>
// // //                     Proceed to Checkout
// // //                 </button>
// // //             )}

// // //             {showCheckoutForm && (
// // //                 <div className="checkout-form">
// // //                     <h2>Checkout</h2>
// // //                     <p>Total Items: {cart.length}</p>
// // //                     <p>Total Amount: ${totalAmount.toFixed(2)}</p>
// // //                     <form onSubmit={handleFormSubmit}>
// // //                         <div className="form-group">
// // //                             <label style={{color:'#fff'}}>Name</label><br />
// // //                             <input
// // //                                 type="text"
// // //                                 name="name"
// // //                                 value={formData.name}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div className="form-group">
// // //                             <label style={{color:'#fff'}}>Address</label><br />
// // //                             <input
// // //                                 type="text"
// // //                                 name="address"
// // //                                 value={formData.address}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div className="form-group">
// // //                             <label style={{color:'#fff'}}>Phone</label><br />
// // //                             <input
// // //                                 type="text"
// // //                                 name="phone"
// // //                                 value={formData.phone}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <button type="submit" className="submit-btn">
// // //                             Complete Checkout
// // //                         </button>
// // //                     </form>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AddToCart;

// // // import React, { useContext, useState, useEffect } from 'react';
// // // import { CartContext } from '../SingleScreen/CartContext';
// // // import { AuthContext } from '../SingleScreen/AuthContext';
// // // import { FaTrash } from 'react-icons/fa';
// // // import './AddToCart.css';
// // // import { db } from '../../Config/firebaseConfig';
// // // import { doc, setDoc } from 'firebase/firestore';

// // // const AddToCart = () => {
// // //     const { cart, clearCart, removeFromCart, addToCart } = useContext(CartContext); // Include addToCart
// // //     const { user } = useContext(AuthContext); 
// // //     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
// // //     const [formData, setFormData] = useState({
// // //         name: '',
// // //         address: '',
// // //         phone: '',
// // //     });

// // //     const totalAmount = cart.reduce(
// // //         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
// // //         0
// // //     );

// // //     useEffect(() => {
// // //         if (user) {
// // //             setFormData((prevData) => ({
// // //                 ...prevData,
// // //                 name: user.displayName || user.name || '', 
// // //             }));
// // //         }
// // //     }, [user]);

// // //     const handleCheckoutClick = () => {
// // //         if (!user) {
// // //             alert('Please log in to proceed with checkout.');
// // //             return;
// // //         }
// // //         setShowCheckoutForm(true);
// // //     };

// // //     const handleInputChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleRemoveFromCart = (itemId) => {
// // //         removeFromCart(itemId);
// // //     };

// // //     const handleFormSubmit = async (e) => {
// // //         e.preventDefault();
// // //         if (!user) {
// // //             alert('Please log in to complete the checkout.');
// // //             return;
// // //         }

// // //         try {
// // //             const userDocName = user.displayName || user.name || 'Anonymous'; 
// // //             const checkoutRef = doc(db, 'checkout', userDocName);

// // //             await setDoc(checkoutRef, {
// // //                 name: formData.name,
// // //                 address: formData.address,
// // //                 phone: formData.phone,
// // //                 totalItems: cart.length,
// // //                 totalAmount: totalAmount,
// // //                 items: cart,
// // //                 timestamp: new Date().toISOString(),
// // //             });

// // //             alert('Checkout successful!');
// // //             clearCart();
// // //             setShowCheckoutForm(false);
// // //         } catch (error) {
// // //             console.error('Error saving checkout data:', error);
// // //             alert('Failed to save your checkout. Please try again.');
// // //         }
// // //     };

// // //     // Function to add item to cart
// // //     const handleAddToCart = (item) => {
// // //         const existingCartItem = cart.find(cartItem => cartItem.item.id === item.id);
        
// // //         if (existingCartItem) {
// // //             // If item exists, increase quantity
// // //             addToCart(item.id, existingCartItem.quantity + 1);
// // //         } else {
// // //             // If item doesn't exist, add new item
// // //             addToCart(item.id, 1); // Assuming addToCart accepts item ID and quantity
// // //         }
// // //     };

// // //     return (
// // //         <div className="add-to-cart">
// // //             <h1>Your Cart</h1>
// // //             {cart.length === 0 ? (
// // //                 <p>Your cart is empty.</p>
// // //             ) : (
// // //                 cart.map((cartItem) => (
// // //                     <div className="cart-item" key={cartItem.item.id}>
// // //                         <img
// // //                             src={cartItem.item.imageUrl}
// // //                             alt={cartItem.item.title}
// // //                             className="cart-item-image"
// // //                         />
// // //                         <div className="cart-item-info">
// // //                             <h2>{cartItem.item.title}</h2>
// // //                             <p>Price: ${cartItem.item.price}</p>
// // //                             <p>Quantity: {cartItem.quantity}</p>
// // //                         </div>
// // //                         <button
// // //                             className="delete-btn"
// // //                             onClick={() => handleRemoveFromCart(cartItem.item.id)}
// // //                         >
// // //                             <FaTrash />
// // //                         </button>
// // //                     </div>
// // //                 ))
// // //             )}

// // //             {cart.length > 0 && (
// // //                 <button className="checkout-btn" onClick={handleCheckoutClick}>
// // //                     Proceed to Checkout
// // //                 </button>
// // //             )}

// // //             {showCheckoutForm && (
// // //                 <div className="checkout-form">
// // //                     <h2>Checkout</h2>
// // //                     <p>Total Items: {cart.length}</p>
// // //                     <p>Total Amount: ${totalAmount.toFixed(2)}</p>
// // //                     <form onSubmit={handleFormSubmit}>
// // //                         <div className="form-group">
// // //                             <label style={{color:'#fff'}}>Name</label><br />
// // //                             <input
// // //                                 type="text"
// // //                                 name="name"
// // //                                 value={formData.name}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div className="form-group">
// // //                             <label style={{color:'#fff'}}>Address</label><br />
// // //                             <input
// // //                                 type="text"
// // //                                 name="address"
// // //                                 value={formData.address}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div className="form-group">
// // //                             <label style={{color:'#fff'}}>Phone</label><br />
// // //                             <input
// // //                                 type="text"
// // //                                 name="phone"
// // //                                 value={formData.phone}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <button type="submit" className="submit-btn">
// // //                             Complete Checkout
// // //                         </button>
// // //                     </form>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default AddToCart;








// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from '../SingleScreen/CartContext';
// import { AuthContext } from '../SingleScreen/AuthContext';
// import { FaTrash } from 'react-icons/fa';
// import './AddToCart.css';
// import { db } from '../../Config/firebaseConfig';
// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

// const AddToCart = () => {
//     const { cart, clearCart, removeFromCart, addToCart } = useContext(CartContext);
//     const { user } = useContext(AuthContext);
//     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         phone: '',
//     });

//     const totalAmount = cart.reduce(
//         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
//         0
//     );

//     useEffect(() => {
//         if (user) {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 name: user.displayName || user.name || '',
//             }));
//         }
//     }, [user]);

//     const handleCheckoutClick = () => {
//         if (!user) {
//             alert('Please log in to proceed with checkout.');
//             return;
//         }
//         setShowCheckoutForm(true);
//     };

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleRemoveFromCart = (itemId) => {
//         removeFromCart(itemId);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         if (!user) {
//             alert('Please log in to complete the checkout.');
//             return;
//         }

//         try {
//             const userDocName = user.displayName || user.name || 'Anonymous';
//             const checkoutRef = doc(db, 'checkout', userDocName);

//             const newCheckoutData = {
//                 name: formData.name,
//                 address: formData.address,
//                 phone: formData.phone,
//                 totalItems: cart.length,
//                 totalAmount: totalAmount,
//                 items: cart,
//                 timestamp: new Date().toISOString(),
//             };

//             // Use updateDoc and arrayUnion to add the new data to the existing 'checkouts' array
//             await updateDoc(checkoutRef, {
//                 checkouts: arrayUnion(newCheckoutData),
//             });

//             alert('Checkout successful!');
//             clearCart();
//             setShowCheckoutForm(false);
//         } catch (error) {
//             console.error('Error saving checkout data:', error);
//             alert('Failed to save your checkout. Please try again.');
//         }
//     };

//     // Function to add item to cart
//     const handleAddToCart = (item) => {
//         const existingCartItem = cart.find(cartItem => cartItem.item.id === item.id);

//         if (existingCartItem) {
//             addToCart(item.id, existingCartItem.quantity + 1);
//         } else {
//             addToCart(item.id, 1);
//         }
//     };

//     return (
//         <div className="add-to-cart">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 cart.map((cartItem) => (
//                     <div className="cart-item" key={cartItem.item.id}>
//                         <img
//                             src={cartItem.item.imageUrl}
//                             alt={cartItem.item.title}
//                             className="cart-item-image"
//                         />
//                         <div className="cart-item-info">
//                             <h2>{cartItem.item.title}</h2>
//                             <p>Price: ${cartItem.item.price}</p>
//                             <p>Quantity: {cartItem.quantity}</p>
//                         </div>
//                         <button
//                             className="delete-btn"
//                             onClick={() => handleRemoveFromCart(cartItem.item.id)}
//                         >
//                             <FaTrash />
//                         </button>
//                     </div>
//                 ))
//             )}

//             {cart.length > 0 && (
//                 <button className="checkout-btn" onClick={handleCheckoutClick}>
//                     Proceed to Checkout
//                 </button>
//             )}

//             {showCheckoutForm && (
//                 <div className="checkout-form">
//                     <h2>Checkout</h2>
//                     <p>Total Items: {cart.length}</p>
//                     <p>Total Amount: ${totalAmount.toFixed(2)}</p>
//                     <form onSubmit={handleFormSubmit}>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Name</label><br />
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Address</label><br />
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Phone</label><br />
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="submit-btn">
//                             Complete Checkout
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;





// // AddToCart.jsx
// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from '../SingleScreen/CartContext';
// import { AuthContext } from '../SingleScreen/AuthContext';
// import { FaTrash } from 'react-icons/fa';
// import './AddToCart.css';
// import { db } from '../../Config/firebaseConfig';
// import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';

// const AddToCart = () => {
//     const { cart, clearCart, removeFromCart, addToCart } = useContext(CartContext);
//     const { user } = useContext(AuthContext);
//     const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         phone: '',
//     });

//     const totalAmount = cart.reduce(
//         (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
//         0
//     );

//     useEffect(() => {
//         if (user) {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 name: user.name, // Use the name from AuthContext.
//             }));
//         }
//     }, [user]);

//     const handleCheckoutClick = () => {
//         if (!user) {
//             alert('Please log in to proceed with checkout.');
//             return;
//         }
//         setShowCheckoutForm(true);
//     };

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleRemoveFromCart = (itemId) => {
//         removeFromCart(itemId);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();

//         if (!user) {
//             alert('Please log in to complete the checkout.');
//             return;
//         }

//         try {
//             const userName = user.name; // Get user name from AuthContext.
//             const checkoutRef = doc(db, 'Checkout', userName); // Use name as document ID.
//             const docSnapshot = await getDoc(checkoutRef);

//             const newCheckoutData = {
//                 name: formData.name,
//                 address: formData.address,
//                 phone: formData.phone,
//                 totalItems: cart.length,
//                 totalAmount: totalAmount,
//                 items: cart,
//                 timestamp: new Date().toISOString(),
//             };

//             if (docSnapshot.exists()) {
//                 await updateDoc(checkoutRef, {
//                     checkouts: arrayUnion(newCheckoutData),
//                 });
//             } else {
//                 await setDoc(checkoutRef, {
//                     checkouts: [newCheckoutData],
//                 });
//             }

//             alert('Checkout successful!');
//             clearCart();
//             setShowCheckoutForm(false);
//         } catch (error) {
//             console.error('Error saving checkout data:', error);
//             alert('Failed to save your checkout. Please try again.');
//         }
//     };

//     const handleAddToCart = (item) => {
//         const existingCartItem = cart.find((cartItem) => cartItem.item.id === item.id);

//         if (existingCartItem) {
//             addToCart(item.id, existingCartItem.quantity + 1);
//         } else {
//             addToCart(item.id, 1);
//         }
//     };

//     return (
//         <div className="add-to-cart">
//             <h1>Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty.</p>
//             ) : (
//                 cart.map((cartItem) => (
//                     <div className="cart-item" key={cartItem.item.id}>
//                         <img
//                             src={cartItem.item.imageUrl}
//                             alt={cartItem.item.title}
//                             className="cart-item-image"
//                         />
//                         <div className="cart-item-info">
//                             <h2>{cartItem.item.title}</h2>
//                             <p>Price: ${cartItem.item.price}</p>
//                             <p>Quantity: {cartItem.quantity}</p>
//                         </div>
//                         <button
//                             className="delete-btn"
//                             onClick={() => handleRemoveFromCart(cartItem.item.id)}
//                         >
//                             <FaTrash />
//                         </button>
//                     </div>
//                 ))
//             )}

//             {cart.length > 0 && (
//                 <button className="checkout-btn" onClick={handleCheckoutClick}>
//                     Proceed to Checkout
//                 </button>
//             )}

//             {showCheckoutForm && (
//                 <div className="checkout-form">
//                     <h2>Checkout</h2>
//                     <p>Total Items: {cart.length}</p>
//                     <p>Total Amount: ${totalAmount.toFixed(2)}</p>
//                     <form onSubmit={handleFormSubmit}>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Name</label><br />
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Address</label><br />
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label style={{ color: '#fff' }}>Phone</label><br />
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="submit-btn">
//                             Complete Checkout
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddToCart;








// AddToCart.jsx
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../SingleScreen/CartContext';
import { AuthContext } from '../SingleScreen/AuthContext';
import { FaTrash } from 'react-icons/fa';
import './AddToCart.css';
import { db } from '../../Config/firebaseConfig';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddToCart = () => {
    const { cart, clearCart, removeFromCart, addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
    });

    const totalAmount = cart.reduce(
        (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
        0
    );

    const navigate = useNavigate(); // Initialize navigate for redirection

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                name: user.name, // Use the name from AuthContext.
            }));
        }
    }, [user]);

    const handleCheckoutClick = () => {
        if (!user) {
            alert('Please log in to proceed with checkout.');
            return;
        }
        setShowCheckoutForm(true);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            alert('Please log in to complete the checkout.');
            return;
        }

        try {
            const userName = user.name; // Get user name from AuthContext.
            const checkoutRef = doc(db, 'Checkout', userName); // Use name as document ID.
            const docSnapshot = await getDoc(checkoutRef);

            const newCheckoutData = {
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                totalItems: cart.length,
                totalAmount: totalAmount,
                items: cart,
                timestamp: new Date().toISOString(),
            };

            if (docSnapshot.exists()) {
                await updateDoc(checkoutRef, {
                    checkouts: arrayUnion(newCheckoutData),
                });
            } else {
                await setDoc(checkoutRef, {
                    checkouts: [newCheckoutData],
                });
            }

            alert('Checkout successful!');
            clearCart();
            setShowCheckoutForm(false);

            // Navigate to the Orders page
            navigate('/customersorder'); // Use navigate() instead of history.push()
        } catch (error) {
            console.error('Error saving checkout data:', error);
            alert('Failed to save your checkout. Please try again.');
        }
    };

    const handleAddToCart = (item) => {
        const existingCartItem = cart.find((cartItem) => cartItem.item.id === item.id);

        if (existingCartItem) {
            addToCart(item.id, existingCartItem.quantity + 1);
        } else {
            addToCart(item.id, 1);
        }
    };

    return (
        <div className="add-to-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((cartItem) => (
                    <div className="cart-item" key={cartItem.item.id}>
                        <img
                            src={cartItem.item.imageUrl}
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
                            onClick={() => handleRemoveFromCart(cartItem.item.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))
            )}

            {cart.length > 0 && (
                <button className="checkout-btn" onClick={handleCheckoutClick}>
                    Proceed to Checkout
                </button>
            )}

            {showCheckoutForm && (
                <div className="checkout-form">
                    <h2>Checkout</h2>
                    <p>Total Items: {cart.length}</p>
                    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label style={{ color: '#fff' }}>Name</label><br />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#fff' }}>Address</label><br />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#fff' }}>Phone</label><br />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">
                            Complete Checkout
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddToCart;
