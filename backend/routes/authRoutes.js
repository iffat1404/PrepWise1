// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', protect, authController.getMe);
router.post('/forgotpassword', authController.forgotPassword);
router.put('/resetpassword/:resetToken', authController.resetPassword);

module.exports = router;