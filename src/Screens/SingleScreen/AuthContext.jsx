// // // AuthContext.js
// // import React, { createContext, useEffect, useState } from 'react';
// // import { auth } from '../../Config/firebaseConfig'; // Import your Firebase authentication instance
// // import { onAuthStateChanged } from 'firebase/auth';

// // export const AuthContext = createContext();

// // const AuthProvider = ({ children }) => {
// //     const [user, setUser] = useState(null);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //             setUser(currentUser);
// //             setLoading(false);
// //         });

// //         return () => unsubscribe();
// //     }, []);

// //     return (
// //         <AuthContext.Provider value={{ user, loading }}>
// //             {!loading && children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export default AuthProvider;


// // AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase auth functions
// import { db } from '../../Config/firebaseConfig'; // Firebase config import
// import { doc, getDoc } from 'firebase/firestore'; // Firestore functions

// export const AuthContext = createContext(); // Create AuthContext

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null); // User state
//     const auth = getAuth(); // Initialize Firebase Auth

//     useEffect(() => {
//         // Monitor authentication state changes
//         const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//             if (currentUser) {
//                 const userDocRef = doc(db, 'Users', currentUser.uid); // Firestore document
//                 const userDoc = await getDoc(userDocRef);

//                 if (userDoc.exists()) {
//                     // Use stored user info if available
//                     setUser({ ...currentUser, name: userDoc.data().name });
//                 } else {
//                     // Use Google profile name or displayName for other logins
//                     setUser(currentUser);
//                 }
//             } else {
//                 setUser(null); // Clear user state on logout
//             }
//         });

//         return () => unsubscribe(); // Cleanup on unmount
//     }, [auth]);

//     return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
// };




// AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../Config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext(); // Named export

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                if (currentUser.providerData[0].providerId !== 'google.com') {
                    const userDocRef = doc(db, 'Users', currentUser.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        setUser({ ...currentUser, name: userDoc.data().name });
                    } else {
                        setUser(currentUser);
                    }
                } else {
                    setUser(currentUser);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
