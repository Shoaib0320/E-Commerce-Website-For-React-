// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Sidebar from './Sidebar'; // Import the updated Sidebar component

// const MainComponent = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleDrawer = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div>
//             <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2b5876, #4e4376)',}}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                         Admin Dashboard
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
//         </div>
//     );
// };

// export default MainComponent;










// // import React, { useState } from 'react';
// // import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
// // import Sidebar from './Sidebar'; // Import the updated Sidebar component
// // import Orders from './Orders'; // Import Orders component
// // import DeliveredOrders from './DeliveredOrders'; // Import DeliveredOrders component
// // // import PendingOrders from './PendingOrders'; // Import PendingOrders component
// // import Feedback from './Feedback'; // Import Feedback component

// // const MainComponent = () => {
// //     const [sidebarOpen, setSidebarOpen] = useState(false);

// //     const toggleDrawer = () => {
// //         setSidebarOpen(!sidebarOpen);
// //     };

// //     return (
// //         <div>
// //             <AppBar position="static" sx={{ backgroundColor: '#4A148C' }}>
// //                 <Toolbar>
// //                     <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
// //                         <MenuIcon />
// //                     </IconButton>
// //                     <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //                         Admin Dashboard
// //                     </Typography>
// //                 </Toolbar>
// //             </AppBar>
// //             <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />

// //             {/* Main Content Area */}
// //             <Box sx={{ display: 'flex', flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
// //                 <Routes>
// //                     <Route path="/admin/orders" element={<Orders />} />
// //                     <Route path="/admin/delivered-orders" element={<DeliveredOrders />} />
// //                     <Route path="/admin/pending-orders" element={<PendingOrders />} />
// //                     <Route path="/admin/feedback" element={<Feedback />} />
// //                 </Routes>
// //             </Box>
// //         </div>
// //     );
// // };

// // export default MainComponent;





import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'; // Import the updated Sidebar component

const MainComponent = ({ title }) => { // Destructure title from props
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleDrawer = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #2b5876, #4e4376)',}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {title} Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
        </div>
    );
};

export default MainComponent;
