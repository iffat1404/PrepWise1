// frontend/src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get('http://localhost:5000/api/auth/me', config);
        setUser(response.data.user);
      } catch (error) {
        localStorage.removeItem('token');
        setUser(null);
        setError('Authentication failed. Please login again.');
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);

      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);

      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('http://localhost:5000/api/auth/forgotpassword', {
        email
      });

      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send reset email');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (resetToken, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.put(
        `http://localhost:5000/api/auth/resetpassword/${resetToken}`,
        { password }
      );

      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to reset password');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    isAuthenticated: !!user,
    user,
    loading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
