// // // // // // // SingleProduct.jsx
// // // // // // import React, { useState, useContext } from 'react';
// // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // import { CartContext } from './CartContext'; // Adjust the path accordingly
// // // // // // import './SingleProduct.css';

// // // // // // function SingleProduct() {
// // // // // //     const location = useLocation();
// // // // // //     const navigate = useNavigate();
// // // // // //     const { addToCart } = useContext(CartContext); // Get addToCart function from context
// // // // // //     const { item } = location.state || {}; // Ensure item is being passed correctly

// // // // // //     const [quantity, setQuantity] = useState(1);
// // // // // //     const [totalPrice, setTotalPrice] = useState(item?.price || 0); // Handle item being undefined

// // // // // //     const handleIncrement = () => {
// // // // // //         setQuantity(prevQuantity => {
// // // // // //             const newQuantity = prevQuantity + 1;
// // // // // //             setTotalPrice(newQuantity * item.price);
// // // // // //             return newQuantity;
// // // // // //         });
// // // // // //     };

// // // // // //     const handleDecrement = () => {
// // // // // //         if (quantity > 1) {
// // // // // //             setQuantity(prevQuantity => {
// // // // // //                 const newQuantity = prevQuantity - 1;
// // // // // //                 setTotalPrice(newQuantity * item.price);
// // // // // //                 return newQuantity;
// // // // // //             });
// // // // // //         }
// // // // // //     };

// // // // // //     const handleAddToCart = () => {
// // // // // //         if (item) {
// // // // // //             addToCart(item, quantity); // Add item to cart with the selected quantity
// // // // // //             navigate('/cart', { state: { item, quantity } }); // Navigate to Cart Page with item details
// // // // // //         }
// // // // // //     };

// // // // // //     // Show loading state if item is not available
// // // // // //     if (!item) {
// // // // // //         return <p>Loading...</p>; 
// // // // // //     }

// // // // // //     return (
// // // // // //         <div className="single-product">
// // // // // //             <div className="single-product-content">
// // // // // //                 <img src={item.image} alt={item.title} className="single-product-image" />
// // // // // //                 <div className="single-product-details">
// // // // // //                     <h1>{item.title}</h1>
// // // // // //                     <p>{item.description}</p>
// // // // // //                     <p>Category: {item.category}</p>
// // // // // //                     <p className="single-product-price">Price: ${totalPrice.toFixed(2)}</p>
// // // // // //                     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '20px 10px' }}>
// // // // // //                         <button className="single-product-btn" onClick={handleDecrement}>-</button>
// // // // // //                         <p>{quantity}</p>
// // // // // //                         <button className="single-product-btn" onClick={handleIncrement}>+</button>
// // // // // //                     </div>
// // // // // //                     <button className="single-product-btn" onClick={handleAddToCart}>Add to Cart</button>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default SingleProduct;



// // // // // // import React, { useState, useContext } from 'react';
// // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // import { CartContext } from './CartContext'; // Adjust the path accordingly
// // // // // // import { AuthContext } from './AuthContext'; // Import AuthContext
// // // // // // import { db, storage } from '../../Config/firebaseConfig'; // Import Firestore and Storage instances
// // // // // // import { collection, doc, setDoc } from 'firebase/firestore'; // Firestore functions
// // // // // // import { ref, uploadString, getDownloadURL } from 'firebase/storage'; // Firebase Storage functions
// // // // // // import './SingleProduct.css';

// // // // // // // Function to convert URL to base64
// // // // // // const urlToBase64 = (url) => {
// // // // // //     return new Promise((resolve, reject) => {
// // // // // //         const xhr = new XMLHttpRequest();
// // // // // //         xhr.onload = () => {
// // // // // //             const reader = new FileReader();
// // // // // //             reader.onloadend = () => resolve(reader.result);
// // // // // //             reader.readAsDataURL(xhr.response);
// // // // // //         };
// // // // // //         xhr.onerror = reject;
// // // // // //         xhr.open('GET', url);
// // // // // //         xhr.responseType = 'blob';
// // // // // //         xhr.send();
// // // // // //     });
// // // // // // };

// // // // // // function SingleProduct() {
// // // // // //     const location = useLocation();
// // // // // //     const navigate = useNavigate();
// // // // // //     const { addToCart } = useContext(CartContext); // Get addToCart function from context
// // // // // //     const { user } = useContext(AuthContext); // Get the logged-in user
// // // // // //     const { item } = location.state || {}; // Ensure item is being passed correctly

// // // // // //     const [quantity, setQuantity] = useState(1);
// // // // // //     const [totalPrice, setTotalPrice] = useState(item?.price || 0); // Handle item being undefined

// // // // // //     const handleIncrement = () => {
// // // // // //         setQuantity(prevQuantity => {
// // // // // //             const newQuantity = prevQuantity + 1;
// // // // // //             setTotalPrice(newQuantity * item.price);
// // // // // //             return newQuantity;
// // // // // //         });
// // // // // //     };

// // // // // //     const handleDecrement = () => {
// // // // // //         if (quantity > 1) {
// // // // // //             setQuantity(prevQuantity => {
// // // // // //                 const newQuantity = prevQuantity - 1;
// // // // // //                 setTotalPrice(newQuantity * item.price);
// // // // // //                 return newQuantity;
// // // // // //             });
// // // // // //         }
// // // // // //     };

// // // // // //     const handleAddToCart = async () => {
// // // // // //         if (item && user) {
// // // // // //             // Add item to cart in the context
// // // // // //             addToCart(item, quantity); // Add item to cart with the selected quantity

// // // // // //             // Prepare data to save to Firestore
// // // // // //             const cartData = {
// // // // // //                 title: item.title,
// // // // // //                 description: item.description,
// // // // // //                 category: item.category,
// // // // // //                 price: item.price,
// // // // // //                 quantity,
// // // // // //             };

// // // // // //             // Firestore path based on user's displayName or UID
// // // // // //             const userFolder = user.displayName || user.uid; // Use displayName or UID
// // // // // //             const cartRef = doc(collection(db, 'AddToCart'), userFolder); // Document named after user

// // // // // //             try {
// // // // // //                 // Convert the image URL to a base64 string
// // // // // //                 const imageBase64 = await urlToBase64(item.image);

// // // // // //                 // Upload the image to Firebase Storage
// // // // // //                 const imageRef = ref(storage, `AddToCart/${userFolder}/${item.id}`); // Path to image
// // // // // //                 await uploadString(imageRef, imageBase64, 'data_url'); // Upload image as data URL

// // // // // //                 // Get the image URL after upload
// // // // // //                 const imageUrl = await getDownloadURL(imageRef); // Get the download URL

// // // // // //                 // Save cart data including image URL to Firestore
// // // // // //                 await setDoc(cartRef, {
// // // // // //                     ...cartData,
// // // // // //                     image: imageUrl // Store image URL instead of original
// // // // // //                 }, { merge: true }); // Merge to prevent overwriting existing data

// // // // // //                 // Navigate to Cart Page with item details
// // // // // //                 navigate('/cart', { state: { item, quantity } }); // Navigate to Cart Page with item details
// // // // // //             } catch (error) {
// // // // // //                 console.error("Error saving cart data to Firestore: ", error);
// // // // // //                 alert('Error adding to cart. Please try again.');
// // // // // //             }
// // // // // //         }
// // // // // //     };

// // // // // //     // Show loading state if item is not available
// // // // // //     if (!item) {
// // // // // //         return <p>Loading...</p>; 
// // // // // //     }

// // // // // //     return (
// // // // // //         <div className="single-product">
// // // // // //             <div className="single-product-content">
// // // // // //                 <img src={item.image} alt={item.title} className="single-product-image" />
// // // // // //                 <div className="single-product-details">
// // // // // //                     <h1>{item.title}</h1>
// // // // // //                     <p>{item.description}</p>
// // // // // //                     <p>Category: {item.category}</p>
// // // // // //                     <p className="single-product-price">Price: ${totalPrice.toFixed(2)}</p>
// // // // // //                     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '20px 10px' }}>
// // // // // //                         <button className="single-product-btn" onClick={handleDecrement}>-</button>
// // // // // //                         <p>{quantity}</p>
// // // // // //                         <button className="single-product-btn" onClick={handleIncrement}>+</button>
// // // // // //                     </div>
// // // // // //                     <button className="single-product-btn" onClick={handleAddToCart}>Add to Cart</button>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default SingleProduct;





// // // // // // singleProduct.jsx
// // // // // import React, { useState, useContext, useEffect } from 'react';
// // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // import { CartContext } from './CartContext';
// // // // // import { AuthContext } from './AuthContext';
// // // // // import { db, storage } from '../../Config/firebaseConfig';
// // // // // import { collection, doc, setDoc } from 'firebase/firestore';
// // // // // import { ref, uploadString, getDownloadURL } from 'firebase/storage';
// // // // // import './SingleProduct.css';

// // // // // const urlToBase64 = (url) => {
// // // // //     return new Promise((resolve, reject) => {
// // // // //         const xhr = new XMLHttpRequest();
// // // // //         xhr.onload = () => {
// // // // //             const reader = new FileReader();
// // // // //             reader.onloadend = () => resolve(reader.result);
// // // // //             reader.readAsDataURL(xhr.response);
// // // // //         };
// // // // //         xhr.onerror = reject;
// // // // //         xhr.open('GET', url);
// // // // //         xhr.responseType = 'blob';
// // // // //         xhr.send();
// // // // //     });
// // // // // };

// // // // // function SingleProduct() {
// // // // //     const location = useLocation();
// // // // //     const navigate = useNavigate();
// // // // //     const { addToCart } = useContext(CartContext);
// // // // //     const { user } = useContext(AuthContext);
// // // // //     const { item } = location.state || {}; // Get item from route state

// // // // //     const [quantity, setQuantity] = useState(1);
// // // // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0); // Ensure item is defined

// // // // //     // Update total price when quantity changes
// // // // //     useEffect(() => {
// // // // //         if (item) {
// // // // //             setTotalPrice(quantity * item.price);
// // // // //         }
// // // // //     }, [quantity, item]);

// // // // //     const handleIncrement = () => {
// // // // //         setQuantity((prevQuantity) => prevQuantity + 1);
// // // // //     };

// // // // //     const handleDecrement = () => {
// // // // //         setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
// // // // //     };

// // // // //     const handleAddToCart = async () => {
// // // // //         if (item && user) {
// // // // //             addToCart(item, quantity);

// // // // //             const cartData = {
// // // // //                 title: item.title,
// // // // //                 description: item.description,
// // // // //                 category: item.category,
// // // // //                 price: item.price,
// // // // //                 quantity,
// // // // //             };

// // // // //             const userFolder = user.displayName || user.uid;
// // // // //             const cartRef = doc(collection(db, 'AddToCart'), userFolder);

// // // // //             try {
// // // // //                 const imageBase64 = await urlToBase64(item.image);
// // // // //                 const imageRef = ref(storage, `AddToCart/${userFolder}/${item.id}`);
// // // // //                 await uploadString(imageRef, imageBase64, 'data_url');
// // // // //                 const imageUrl = await getDownloadURL(imageRef);

// // // // //                 await setDoc(cartRef, { ...cartData, image: imageUrl }, { merge: true });

// // // // //                 navigate('/cart', { state: { item, quantity } });
// // // // //             } catch (error) {
// // // // //                 console.error('Error saving cart data:', error);
// // // // //                 alert('Error adding to cart. Please try again.');
// // // // //             }
// // // // //         }
// // // // //     };

// // // // //     if (!item) return <p>Loading...</p>;

// // // // //     return (
// // // // //         <div className="single-product">
// // // // //             <div className="single-product-content">
// // // // //                 <img src={item.image} alt={item.title} className="single-product-image" />
// // // // //                 <div className="single-product-details">
// // // // //                     <h1>{item.title}</h1>
// // // // //                     <p>{item.description}</p>
// // // // //                     <p>Category: {item.category}</p>
// // // // //                     <p className="single-product-price">
// // // // //                         Price: ${totalPrice.toFixed(2)}
// // // // //                     </p>
// // // // //                     <div className="quantity-controls">
// // // // //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// // // // //                         <p>{quantity}</p>
// // // // //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// // // // //                     </div>
// // // // //                     <br />
// // // // //                     <button onClick={handleAddToCart} className="single-product-btn">
// // // // //                         Add to Cart
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default SingleProduct;

// // // // // SingleProduct.jsx
// // // // import React, { useState, useContext, useEffect } from 'react';
// // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // import { CartContext } from './CartContext';
// // // // import { AuthContext } from './AuthContext'; // Assuming AuthContext is set up to provide user details
// // // // import './SingleProduct.css';

// // // // function SingleProduct() {
// // // //     const location = useLocation();
// // // //     const navigate = useNavigate();
// // // //     const { addToCart } = useContext(CartContext);
// // // //     const { user } = useContext(AuthContext);
// // // //     const { item } = location.state || {}; // Get item from route state

// // // //     const [quantity, setQuantity] = useState(1);
// // // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0); // Ensure item is defined

// // // //     // Update total price when quantity changes
// // // //     useEffect(() => {
// // // //         if (item) {
// // // //             setTotalPrice(quantity * item.price);
// // // //         }
// // // //     }, [quantity, item]);

// // // //     const handleIncrement = () => {
// // // //         setQuantity((prevQuantity) => prevQuantity + 1);
// // // //     };

// // // //     const handleDecrement = () => {
// // // //         setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
// // // //     };

// // // //     const handleAddToCart = async () => {
// // // //         if (item && user) {
// // // //             await addToCart(user.uid, item, quantity); // Pass user ID
// // // //             navigate('/cart'); // Redirect to Add to Cart page
// // // //         }
// // // //     };

// // // //     if (!item) return <p>Loading...</p>;

// // // //     return (
// // // //         <div className="single-product">
// // // //             <div className="single-product-content">
// // // //                 <img src={item.image} alt={item.title} className="single-product-image" />
// // // //                 <div className="single-product-details">
// // // //                     <h1>{item.title}</h1>
// // // //                     <p>{item.description}</p>
// // // //                     <p>Category: {item.category}</p>
// // // //                     <p className="single-product-price">
// // // //                         Price: ${totalPrice.toFixed(2)}
// // // //                     </p>
// // // //                     <div className="quantity-controls">
// // // //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// // // //                         <p>{quantity}</p>
// // // //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// // // //                     </div>
// // // //                     <br />
// // // //                     <button onClick={handleAddToCart} className="single-product-btn">
// // // //                         Add to Cart
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default SingleProduct;


// // // // SingleProduct.jsx
// // // import React, { useState, useContext, useEffect } from 'react';
// // // import { useLocation, useNavigate } from 'react-router-dom';
// // // import { CartContext } from './CartContext';
// // // import { AuthContext } from './AuthContext'; // Assuming you have AuthContext set up
// // // import './SingleProduct.css';

// // // function SingleProduct() {
// // //     const location = useLocation();
// // //     const navigate = useNavigate();
// // //     const { addToCart, fetchCartItems } = useContext(CartContext);
// // //     const { user } = useContext(AuthContext);
// // //     const { item } = location.state || {}; // Get item data from the location state

// // //     const [quantity, setQuantity] = useState(1);
// // //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0); // Initialize total price

// // //     // Update total price when quantity changes
// // //     useEffect(() => {
// // //         if (item) {
// // //             setTotalPrice(quantity * item.price);
// // //         }
// // //     }, [quantity, item]);

// // //     const handleIncrement = () => {
// // //         setQuantity((prevQuantity) => prevQuantity + 1);
// // //     };

// // //     const handleDecrement = () => {
// // //         setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
// // //     };

// // //     const handleAddToCart = async () => {
// // //         if (item && user) {
// // //             await addToCart(user.uid, item, quantity); // Pass user ID when adding to cart
// // //             navigate('/cart'); // Redirect to Add to Cart page
// // //         }
// // //     };

// // //     if (!item) return <p>Loading...</p>; // Display loading if item is not yet available

// // //     return (
// // //         <div className="single-product">
// // //             <div className="single-product-content">
// // //                 <img src={item.image} alt={item.title} className="single-product-image" />
// // //                 <div className="single-product-details">
// // //                     <h1>{item.title}</h1>
// // //                     <p>{item.description}</p>
// // //                     <p>Category: {item.category}</p>
// // //                     <p className="single-product-price">
// // //                         Price: ${totalPrice.toFixed(2)}
// // //                     </p>
// // //                     <div className="quantity-controls">
// // //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// // //                         <p>{quantity}</p>
// // //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// // //                     </div>
// // //                     <br />
// // //                     <button onClick={handleAddToCart} className="single-product-btn">
// // //                         Add to Cart
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default SingleProduct;


// // // SingleProduct.jsx
// // import React, { useState, useContext, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { CartContext } from './CartContext';
// // import { AuthContext } from './AuthContext'; // Assuming you have AuthContext set up
// // import './SingleProduct.css';

// // function SingleProduct() {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const { addToCart, fetchCartItems } = useContext(CartContext);
// //     const { user } = useContext(AuthContext);
// //     const { item } = location.state || {}; // Get item data from the location state

// //     const [quantity, setQuantity] = useState(1);
// //     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0); // Initialize total price

// //     // Update total price when quantity changes
// //     useEffect(() => {
// //         if (item) {
// //             setTotalPrice(quantity * item.price);
// //         }
// //     }, [quantity, item]);

// //     const handleIncrement = () => {
// //         setQuantity((prevQuantity) => prevQuantity + 1);
// //     };

// //     const handleDecrement = () => {
// //         setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
// //     };

// //     const handleAddToCart = async () => {
// //         if (item && user) {
// //             await addToCart(user.uid, item, quantity); // Pass user ID when adding to cart
// //             navigate('/cart'); // Redirect to Add to Cart page
// //         }
// //     };

// //     if (!item) return <p>Loading...</p>; // Display loading if item is not yet available

// //     return (
// //         <div className="single-product">
// //             <div className="single-product-content">
// //                 <img src={item.image} alt={item.title} className="single-product-image" />
// //                 <div className="single-product-details">
// //                     <h1>{item.title}</h1>
// //                     <p>{item.description}</p>
// //                     <p>Category: {item.category}</p>
// //                     <p className="single-product-price">
// //                         Price: ${totalPrice.toFixed(2)}
// //                     </p>
// //                     <div className="quantity-controls">
// //                         <button onClick={handleDecrement} className="single-product-btn">-</button>
// //                         <p>{quantity}</p>
// //                         <button onClick={handleIncrement} className="single-product-btn">+</button>
// //                     </div>
// //                     <br />
// //                     <button onClick={handleAddToCart} className="single-product-btn">
// //                         Add to Cart
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default SingleProduct;


// // SingleProduct.jsx
// import React, { useState, useContext, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';
// import { AuthContext } from './AuthContext'; // Assuming you have AuthContext set up
// import './SingleProduct.css';
// import Loader from '../Loader/Loader'; // Import your loader component

// function SingleProduct() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { addToCart, fetchCartItems } = useContext(CartContext);
//     const { user } = useContext(AuthContext);
//     const { item } = location.state || {}; // Get item data from the location state

//     const [quantity, setQuantity] = useState(1);
//     const [totalPrice, setTotalPrice] = useState(item ? item.price : 0); // Initialize total price
//     const [loading, setLoading] = useState(false); // Loading state

//     // Update total price when quantity changes
//     useEffect(() => {
//         if (item) {
//             setTotalPrice(quantity * item.price);
//         }
//     }, [quantity, item]);

//     const handleIncrement = () => {
//         setQuantity((prevQuantity) => prevQuantity + 1);
//     };

//     const handleDecrement = () => {
//         setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//     };

//     // const handleAddToCart = async () => {
//     //     if (item && user) {
//     //         setLoading(true); // Set loading to true when starting to add to cart
//     //         await addToCart(user.uid, item, quantity); // Pass user ID when adding to cart
//     //         setLoading(false); // Set loading to false once done
//     //         navigate('/cart'); // Redirect to Add to Cart page
//     //     }
//     // };

//     const handleAddToCart = async () => {
//         if (item && user) {
//             setLoading(true); // Set loading to true when starting to add to cart
//             const userName = user.displayName || 'Anonymous'; // Get the user's name or set a default
//             await addToCart(userName, item, quantity); // Pass user name when adding to cart
//             setLoading(false); // Set loading to false once done
//             navigate('/cart'); // Redirect to Add to Cart page
//         }
//     };
    


//     if (!item) return <p>Loading...</p>; // Display loading if item is not yet available

//     return (
//         <div className="single-product">
//             {loading && <Loader />} {/* Display loader if loading is true */}
//             <div className="single-product-content">
//                 <img src={item.image} alt={item.title} className="single-product-image" />
//                 <div className="single-product-details">
//                     <h1>{item.title}</h1>
//                     <p>{item.description}</p>
//                     <p>Category: {item.category}</p>
//                     <p className="single-product-price">
//                         Price: ${totalPrice.toFixed(2)}
//                     </p>
//                     <div className="quantity-controls">
//                         <button onClick={handleDecrement} className="single-product-btn">-</button>
//                         <p>{quantity}</p>
//                         <button onClick={handleIncrement} className="single-product-btn">+</button>
//                     </div>
//                     <br />
//                     <button onClick={handleAddToCart} className="single-product-btn">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SingleProduct;





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
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>Category: {item.category}</p>
                    <p className="single-product-price">Price: ${totalPrice.toFixed(2)}</p>
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
