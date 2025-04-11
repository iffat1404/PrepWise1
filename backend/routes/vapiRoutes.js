const express = require('express');
const router = express.Router();
const { generateText } = require('ai');
const { google } = require('@ai-sdk/google');
const mongoose = require('mongoose');
const Interview = require('../models/Interview');

// POST /api/interview
router.post('/test', async (req, res) => {
  const { type, role, level, techstack, amount, userid } = req.body;

  try {
    const { text: questions } = await generateText({
      model: google('gemini-2.0-flash-001'),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
      `
    });

    if (!mongoose.Types.ObjectId.isValid(userid)) {
        return res.status(400).json({ success: false, error: 'Invalid userId format' });
      }
      
      const newInterview = new Interview({
        role,
        type,
        level,
        techstack: techstack.split(','),
        questions: JSON.parse(questions),
        userId: new mongoose.Types.ObjectId(userid),
        finalized: true,
        createdAt: new Date().toISOString()
      });
      

    await newInterview.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error generating interview:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/interview (basic test route)
router.get('/test', (req, res) => {
  res.status(200).json({ success: true, data: "Thank you!" });
});

module.exports = router;
