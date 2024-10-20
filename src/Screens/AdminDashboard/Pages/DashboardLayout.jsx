// import React, { useState, useEffect } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     IconButton,
//     Typography,
//     Grid,
//     Card,
//     CardContent,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Sidebar from './Sidebar'; // Import the updated Sidebar component
// import { db } from '../../../Config/firebaseConfig'; // Make sure to import your Firebase configuration
// import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions

// const MainComponent = ({ showMainContent = true }) => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [totals, setTotals] = useState({
//         users: 0,
//         products: 0,
//         orders: 0,
//         feedback: 0,
//     });

//     const toggleDrawer = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     useEffect(() => {
//         const fetchTotals = async () => {
//             const usersSnapshot = await getDocs(collection(db, 'Users'));
//             const productsSnapshot = await getDocs(collection(db, 'products'));
//             const ordersSnapshot = await getDocs(collection(db, 'Checkout'));
//             const feedbackSnapshot = await getDocs(collection(db, 'Feedback'));

//             setTotals({
//                 users: usersSnapshot.size,
//                 products: productsSnapshot.size,
//                 orders: ordersSnapshot.size,
//                 feedback: feedbackSnapshot.size,
//             });
//         };

//         fetchTotals();
//     }, []);

//     return (
//         <div>
//             <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2b5876, #4e4376)', boxShadow: 'none' }}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '0.1rem' }}>
//                         Admin Dashboard
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />

//             {/* Conditionally render the main content */}
//             {showMainContent && (
//             <Grid container spacing={3} sx={{ padding: 3 }}>
//                 <Grid item xs={12} sm={6} md={3}>
//                     <Card style={{
//                                 textAlign: 'center',
//                                 borderRadius: '12px',
//                                 boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                                 transition: '0.3s',
//                                 background: '#6DA5C0',
//                                 color: '#fff',
//                             }}      
//                         sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, borderRadius: '15px', backgroundColor: '#ffffff', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
//                         <CardContent>
//                             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', }}>
//                                 Total Users
//                             </Typography>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 {totals.users}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 <Grid item xs={12} sm={6} md={3}>
//                     <Card style={{
//                                 textAlign: 'center',
//                                 borderRadius: '12px',
//                                 boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                                 transition: '0.3s',
//                                 background: 'linear-gradient(180deg, #4caf50, #66bb6a)',
//                                 color: '#fff',
//                             }}      
//                     sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, borderRadius: '15px', backgroundColor: '#ffffff', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
//                         <CardContent>
//                             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', }}>
//                                 Total Products
//                             </Typography>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 {totals.products}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 <Grid item xs={12} sm={6} md={3}>
//                     <Card style={{
//                                 textAlign: 'center',
//                                 borderRadius: '12px',
//                                 boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                                 transition: '0.3s',
//                                 background: '#2b5876',
//                                 color: '#fff',
//                             }}      
//                     sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, borderRadius: '15px', backgroundColor: '#ffffff', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
//                         <CardContent>
//                             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', }}>
//                                 Total Orders
//                             </Typography>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 {totals.orders}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 <Grid item xs={12} sm={6} md={3}>
//                     <Card style={{
//                                 textAlign: 'center',
//                                 borderRadius: '12px',
//                                 boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                                 transition: '0.3s',
//                                 background: '#45DFB1',
//                                 color: '#fff',
//                             }}      
//                     sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 5, borderRadius: '15px', backgroundColor: '#ffffff', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
//                         <CardContent>
//                             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', }}>
//                                 Total Feedback
//                             </Typography>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 {totals.feedback}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//             )}
//         </div>
//     );
// };

// export default MainComponent;







import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'; // Import the updated Sidebar component
import { db } from '../../../Config/firebaseConfig'; // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore functions
import './MainComponent.css'; // Import your custom CSS

const MainComponent = ({ showMainContent = true }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [totals, setTotals] = useState({
        users: 0,
        products: 0,
        orders: 0,
        feedback: 0,
    });

    const toggleDrawer = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const fetchTotals = async () => {
            const usersSnapshot = await getDocs(collection(db, 'Users'));
            const productsSnapshot = await getDocs(collection(db, 'products'));
            const ordersSnapshot = await getDocs(collection(db, 'Checkout'));
            const feedbackSnapshot = await getDocs(collection(db, 'Feedback'));

            setTotals({
                users: usersSnapshot.size,
                products: productsSnapshot.size,
                orders: ordersSnapshot.size,
                feedback: feedbackSnapshot.size,
            });
        };

        fetchTotals();
    }, []);

    return (
        <div>
            <AppBar position="static" sx={{ background: '#6DA5C0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{  flexGrow: 1, fontFamily: 'Playfair Display, serif', fontWeight: 'bold', letterSpacing: '0.1rem', color: '#fffff'  }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
            
            <br />
            <br />
            <br />

            {showMainContent && (
                <Grid container spacing={3} sx={{ padding: 3, backgroundColor: '#F1F1F1' }}>
                    {Object.entries(totals).map(([key, value]) => (
                        <Grid item xs={12} sm={6} md={3} key={key}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '10px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                background: '#6DA5C0',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                '&:hover': { 
                                    transform: 'scale(1.03)', 
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' 
                                }
                            }}>
                                <CardContent sx={{ textAlign: 'center', padding: 2 }}>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                                        {value}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default MainComponent;
