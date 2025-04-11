// backend/models/Interview.js
const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  role: { type: String, required: true },
  type: { type: String, required: true }, // behavioural, technical, etc.
  level: { type: String, required: true }, // Beginner, Expert, etc.
  techstack: [{ type: String }],
  questions: [{ type: String }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
    index: true
  },
  finalized: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Interview', interviewSchema);
