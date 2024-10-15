// Login.js
import React, { useState } from "react";
import { 
  Box, TextField, Button, Typography, Container, Avatar, Alert, CircularProgress
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginWithEmail } from "../../Config/firebaseConfig";
import { GoogleButton } from '../Button/GoogleButton/GoogleButton'; // Import the GoogleButton component

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      alert("Login successful!");
      // Redirect user to another page (e.g., dashboard)
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={1}>
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <Alert severity="error">{error}</Alert>}

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>

          {/* Google Button */}
          <Box mt={2}>
            <GoogleButton />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
