import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper, 
  InputAdornment,
  IconButton,
  Divider,
  AppBar,
  Toolbar
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a594f9',
    },
    background: {
      paper: '#1e1e24',
      default: '#121212'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#2c4870',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 0',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#a594f9',
          '&:hover': {
            backgroundColor: '#8a7cd8',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    
    if (!formData.email || !formData.password) {
      setFormError('Please provide both email and password');
      return;
    }

    try {
      await login(formData.email, formData.password);
      navigate('/user-homepage');
    } catch (err) {
      // Error is already handled in the auth context
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#000000', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component={Link} 
              to="/" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <Box 
                sx={{ 
                  width: 36, 
                  height: 36, 
                  borderRadius: '50%', 
                  bgcolor: '#9333EA', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>P</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                PrepBuddy
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            
     
            
      
            
            <Typography 
              component={Link} 
              to="/login" 
              sx={{ 
                textDecoration: 'none', 
                color: 'white',
                fontWeight: 500,
                '&:hover': { color: '#a594f9' }
              }}
            >
              Login
            </Typography>
            
            <Button 
              component={Link}
              to="/signup"
              variant="contained" 
              sx={{ 
                bgcolor: '#9333EA', 
                '&:hover': { color: '#FAF9F6' },
                fontWeight: 'bold',
                borderRadius: 2,
                px: 3,
                py: 1
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Login Form */}
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)', // Adjust height to account for navbar
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212',
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '450px',
            px: 3,
          }}
        >
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              width: '100%',
              background: '#191920',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: 1,
                  fontWeight: 700,
                  color: '#a594f9',
                  mb: 1,
                }}
              >
                <span style={{ fontSize: '24px' }}>💬</span> PrepBuddy
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Practice job interviews with AI
              </Typography>
            </Box>
            
            <form onSubmit={handleSubmit}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Email
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="your.email@example.com"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                size="small"
                sx={{ 
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#2c4870',
                  }
                }}
              />
              
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                Password
              </Typography>
              <TextField
                fullWidth
                name="password"
                placeholder="••••••••"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                size="small"
                sx={{ 
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#2c4870',
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePassword}
                        edge="end"
                        size="small"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                disableElevation
                sx={{
                  mt: 1,
                  mb: 3,
                  py: 1.5,
                  fontSize: '0.95rem',
                  bgcolor: '#a594f9',
                  '&:hover': {
                    bgcolor: '#8a7cd8',
                  }
                }}
              >
                {loading ? 'Logging in...' : 'Sign In'}
              </Button>
            </form>
            
            <Box sx={{ display: 'flex', alignItems: 'center', my: 3 }}>
              <Divider sx={{ flexGrow: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
              <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
                OR
              </Typography>
              <Divider sx={{ flexGrow: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            </Box>
            
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              href="http://localhost:5000/api/auth/google"
              sx={{ 
                mb: 3, 
                py: 1.5,
                borderColor: 'rgba(255, 255, 255, 0.12)',
                color: 'text.primary',
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                }
              }}
            >
              Continue with Google
            </Button>
            
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: '#a594f9' }}>Create an Account</Link>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;