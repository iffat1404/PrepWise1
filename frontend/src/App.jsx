import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import SocialAuthPage from './pages/SocialAuthPage';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import UserHomePage from './user/UserHomePage';  // updated path
import InterviewPage from './user/InterviewPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/social-auth" element={<SocialAuthPage />} />
          <Route 
            path="/user-homepage" 
            element={
              <ProtectedRoute>
                <UserHomePage />
              </ProtectedRoute>
            } 
          />
          <Route path="/interview" element={<InterviewPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
