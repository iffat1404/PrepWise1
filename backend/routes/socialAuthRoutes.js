// backend/routes/socialAuthRoutes.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('../config/passport'); // <-- Make sure passport is registered

// Helper function to generate token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// Google OAuth route - Start the authentication process
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/login'
  }),
  (req, res) => {
    console.log('req.user:', req.user); // Debugging

    if (!req.user) {
      return res.redirect(`${process.env.FRONTEND_URL}/login?error=GoogleLoginFailed`);
    }

    // Generate JWT token
    const token = generateToken(req.user._id);

    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/social-auth?token=${token}`);
  }
);

module.exports = router;
