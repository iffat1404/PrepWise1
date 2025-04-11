const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// Register new user
exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      const user = await User.create({
        name,
        email,
        password
      });

       // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Check if password matches
      const isMatch = await user.isPasswordMatch(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate token
      const token = generateToken(user._id);
  
      res.status(200).json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Get current user profile
  exports.getMe = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({
        success: true,
        user
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Forgot password
  exports.forgotPassword = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate reset token
      const resetToken = crypto.randomBytes(20).toString('hex');
      
      // Set token and expiry on user document
      user.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
      
      user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
      
      await user.save({ validateBeforeSave: false });
  
      // In a real application, you would send this token via email
      // For now, we'll just return it in the response for testing
      res.status(200).json({
        success: true,
        message: 'Password reset token generated',
        resetToken // In production, remove this and send via email instead
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Reset password
  exports.resetPassword = async (req, res) => {
    try {
      // Get hashed token
      const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resetToken)
        .digest('hex');
  
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpires: { $gt: Date.now() }
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // Set new password
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      
      await user.save();
  
      // Generate new token
      const token = generateToken(user._id);
  
      res.status(200).json({
        success: true,
        message: 'Password reset successful',
        token
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };