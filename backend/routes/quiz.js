const express = require('express');
const Quiz = require('../models/Quiz');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a quiz
router.post('/', auth, async (req, res) => {
    try {
        const quiz = new Quiz({ ...req.body, createdBy: req.user });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all quizzes
router.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
