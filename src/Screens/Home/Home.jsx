// import React from 'react'

// export const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }



import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Slider from 'react-slick'; // Importing react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import slick CSS
import { Link } from 'react-router-dom';

import { Facebook, Twitter, Instagram } from '@mui/icons-material'; // Social Icons

export const Home = () => {

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const cards = [
    {
      title: 'VIP Card 1',
      image: 'https://via.placeholder.com/300x200?text=VIP+Image+1',
    },
    {
      title: 'VIP Card 2',
      image: 'https://via.placeholder.com/300x200?text=VIP+Image+2',
    },
    {
      title: 'VIP Card 3',
      image: 'https://via.placeholder.com/300x200?text=VIP+Image+3',
    },
    {
      title: 'VIP Card 4',
      image: 'https://via.placeholder.com/300x200?text=VIP+Image+4',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #1f1c2c, #928dab)',
          color: 'white',
          py: 7,
          borderRadius: 3,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome to Our VIP Website
        </Typography>
        <Typography variant="h5" gutterBottom>
          Unlock exclusive content and premium features.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: '#ff9800',
            color: '#fff',
            borderRadius: '30px',
            px: 5,
            '&:hover': { backgroundColor: '#e65100' },
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* Slick Slider Section */}
      <Box sx={{ mt: 5 }}>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} style={{ padding: '0 15px' }}> {/* Added horizontal padding */}
              <Box
                sx={{
                  backgroundColor: '#1f1c2c',
                  color: 'white',
                  padding: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.4s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                  },
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: '100%', height: '200px', borderRadius: '8px' }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="grey.300">
                  Discover exclusive benefits and premium features with {card.title}.
                </Typography>
                <Button
  sx={{
    mt: 2,
    borderColor: '#6DA5C0', // Soft blue border color
    color: '#6DA5C0', // Button text color
    borderRadius: '50px', // Smooth rounded corners
    textTransform: 'none', // No uppercase text transformation
    padding: '10px 25px', // Refined padding for a balanced look
    fontSize: '1.1rem', // Elegant font size
    fontWeight: '600', // Bold text
    letterSpacing: '1px', // Slight letter spacing for style
    backgroundColor: 'white', // White background to contrast blue border
    transition: 'all 0.4s ease', // Smooth transition effect
    boxShadow: '0 4px 15px rgba(109, 165, 192, 0.4)', // Blue shadow effect
    '&:hover': {
      backgroundColor: '#6DA5C0', // Set hover background to #6DA5C0
      color: 'white', // Change text color to white for contrast
      boxShadow: '0 8px 30px rgba(109, 165, 192, 0.7)', // Stronger shadow on hover
    },
 
  }}
>
  <Link to="products">See More Products</Link>
</Button>

              </Box>
            </div>
          ))}
        </Slider>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #2b5876, #4e4376)',
          color: 'white',
          py: 4,
          mt: 5,
          borderRadius: 2,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Stay Connected
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Facebook sx={{ fontSize: 30, cursor: 'pointer', '&:hover': { color: '#1877F2' } }} />
          <Twitter sx={{ fontSize: 30, cursor: 'pointer', '&:hover': { color: '#1DA1F2' } }} />
          <Instagram sx={{ fontSize: 30, cursor: 'pointer', '&:hover': { color: '#E1306C' } }} />
        </Box>
        <Typography variant="body2">
          &copy; 2024 VIP Website. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
};
