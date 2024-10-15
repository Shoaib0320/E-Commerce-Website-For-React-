import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { auth, provider } from '../../../Config/firebaseConfig'; // Import your Firebase configuration
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase authentication methods
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Styled button using Material-UI's styled function
const StyledGoogleButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff', // White background
  color: '#4285F4', // Google Blue text
  border: '2px solid #4285F4', // Blue border
  borderRadius: '50px', // Rounded corners
  padding: '12px 24px', // Padding
  fontSize: '1.1rem', // Font size
  fontWeight: 'bold', // Bold text
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)', // Soft shadow
  transition: 'all 0.3s ease', // Smooth transition
  width: '300px', // Fixed width
  '&:hover': {
    backgroundColor: '#4285F4', // Background on hover
    color: '#ffffff', // Text color on hover
    border: '2px solid transparent', // Remove border on hover
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Increased shadow on hover
    transform: 'translateY(-2px)', // Slight upward movement on hover
  },
}));

const GoogleIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" 
    alt="Google Logo" 
    style={{ width: '24px', height: '24px', marginRight: '8px' }} 
  />
);

export const GoogleButton = () => {
  const navigate = useNavigate(); // Create the navigate function

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log('User Info:', user);
      
      // Redirect to home page after successful login
      navigate('/'); // Navigate to the home page
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
      // Handle Errors here.
      alert(error.message);
    }
  };

  return (
    <StyledGoogleButton onClick={handleGoogleSignIn}>
      <GoogleIcon />
      Sign in with Google
    </StyledGoogleButton>
  );
};
