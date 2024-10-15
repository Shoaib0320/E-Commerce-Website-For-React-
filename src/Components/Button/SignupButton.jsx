import React from 'react';

// CSS for VIP styling
const buttonStyle = {
  background: 'linear-gradient(90deg, #14919B, #6DA5C0)',
  color: 'white',
  margin: '0px 20px',
  padding: '15px 20px',
  fontSize: '18px',
  border: 'none',
  borderRadius: '28px',
  cursor: 'pointer',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
};


export const SignupButton = () => {
    return (
        <button style={buttonStyle}>
          Sign up
        </button>
    );
}
