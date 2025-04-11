// frontend/src/pages/SocialAuthPage.js
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, CircularProgress, Typography } from '@mui/material';

const SocialAuthPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (token) {
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Refresh the page to trigger auth context update
      window.location.href = '/user-homepage';
    } else {
      // If there's no token, redirect to login
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Completing authentication...
      </Typography>
    </Box>
  );
};

export default SocialAuthPage;