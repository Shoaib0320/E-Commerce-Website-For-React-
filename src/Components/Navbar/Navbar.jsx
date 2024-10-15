// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Logo from '../../assets/images/logo.jpg';
// import { LoginButton } from '../Button/LoginButton';
// import { SignupButton } from '../Button/SignupButton';
// import { LogoutButton } from '../Button/LogoutButton';
// import { auth } from '../../Config/firebaseConfig';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { styled } from '@mui/system';
// import { IconButton } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// // Styled component for user info container
// const UserInfoContainer = styled('div')(({ isVisible }) => ({
//   display: isVisible ? 'flex' : 'none',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginLeft: '10px',
//   marginRight: '10px',
//   backgroundColor: '#ffffff',
//   padding: '12px',
//   borderRadius: '8px',
//   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
//   position: 'absolute',
//   top: '70px',
//   right: '0',
//   zIndex: 1000,
//   transition: 'all 0.3s ease',
//   opacity: isVisible ? 1 : 0,
//   pointerEvents: isVisible ? 'auto' : 'none',
// }));

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(null); // Stores the logged-in user
//   const [showUserInfo, setShowUserInfo] = useState(false); // Toggle for user info

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     // Listen for authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser); // Store the current user if logged in
//     });
//     return () => unsubscribe(); // Cleanup on unmount
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setIsOpen(false);
//       setUser(null); // Clear user state on logout
//     } catch (error) {
//       console.error('Logout Error:', error.message);
//     }
//   };

//   const toggleUserInfo = () => {
//     setShowUserInfo(!showUserInfo); // Toggle user info visibility
//   };

//   // Sticky navbar on scroll
//   window.onscroll = function () {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 0) {
//       navbar.classList.add('sticky');
//     } else {
//       navbar.classList.remove('sticky');
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src={Logo} alt="Logo" />
//         </div>

//         <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         <div className={`menu-container ${isOpen ? 'active' : ''}`}>
//           <ul className="nav-links">
//             <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//             <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//             <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
//             <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//           </ul>

//           <div className="button-container">
//             {user ? ( // If user is logged in, show Logout and Account icon
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <LogoutButton onClick={handleLogout} />
//                 <IconButton onClick={toggleUserInfo} style={{ color: '#fff' }}>
//                   <AccountCircleIcon />
//                 </IconButton>

//                 <UserInfoContainer isVisible={showUserInfo}>
//                   {user.photoURL ? (
//                     <>
//                       <img
//                         src={user.photoURL}
//                         alt={user.displayName || 'User'}
//                         style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '5px' }}
//                       />
//                       <span style={{ fontWeight: 'bold', color: '#333' }}>{user.displayName}</span>
//                       <span style={{ fontWeight: 'bold', color: '#333' }}>{user.email}</span>
//                     </>
//                   ) : (
//                     <>
//                       <AccountCircleIcon style={{ fontSize: '40px', marginBottom: '5px' }} />
//                       <span style={{ fontWeight: 'bold', color: '#333' }}>{user.displayName || 'User'}</span>
//                       <span style={{ color: '#555' }}>{user.email}</span>
//                     </>
//                   )}
//                 </UserInfoContainer>
//               </div>
//             ) : ( // If no user is logged in, show Signup and Login buttons
//               <>
//                 <Link to="/signup" onClick={() => setIsOpen(false)} className="navbar-button">
//                   <SignupButton />
//                 </Link>
//                 <Link to="/login" onClick={() => setIsOpen(false)} className="navbar-button">
//                   <LoginButton />
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>

//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };








import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/logo.jpg';
import { LoginButton } from '../Button/LoginButton';
import { SignupButton } from '../Button/SignupButton';
import { auth } from '../../Config/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { styled } from '@mui/system';
import { IconButton, Menu, MenuItem, Typography, Avatar, Divider, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Custom styles for the Material-UI Menu with a gradient background
const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #ffffff, #f0f4f8)', // Gradient background
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    padding: '12px',
  },
  '& .MuiMenuItem-root': {
    padding: '12px 20px',
    '&:hover': {
      backgroundColor: '#e0e4e7',
    },
  },
  '& .MuiDivider-root': {
    margin: '8px 0',
  },
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsOpen(false);
      setUser(null);
    } catch (error) {
      console.error('Logout Error:', error.message);
    }
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`menu-container ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* User Button and Links */}
          <div className="button-container">
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handleMenuOpen} style={{ color: '#fff' }}>
                  {user.photoURL ? (
                    <Avatar src={user.photoURL} alt={user.displayName || 'User'} />
                  ) : (
                    <AccountCircleIcon style={{ fontSize: '32px' }} />
                  )}
                </IconButton>

                {/* User Info Menu */}
                <StyledMenu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem disabled>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ fontWeight: 'bold', color: '#333' }}
                    >
                      {user.displayName || 'User'}
                    </Typography>
                  </MenuItem>
                  <MenuItem disabled>
                    <Typography 
                      variant="body2" 
                      sx={{ color: '#555', fontStyle: 'italic' }}
                    >
                      {user.email}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem 
                    onClick={handleLogout} 
                    sx={{ 
                      '&:hover': { color: '#1976d2' },
                      fontWeight: 'bold',
                      color: '#444',
                    }}
                  >
                    Logout
                  </MenuItem>
                </StyledMenu>
              </div>
            ) : (
              <>
                <Link to="/signup" className="navbar-button">
                  <SignupButton />
                </Link>
                <Link to="/login" className="navbar-button">
                  <LoginButton />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
