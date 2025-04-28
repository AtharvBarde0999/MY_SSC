// backend/controllers/noteController.js

const Note = require('../models/Note');

// Example function to get all notes
exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json({ success: true, notes });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Example function to create a new note
exports.createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNote = new Note({
            title,
            content,
            user: req.user.id,  // Assuming user is authenticated
        });
        await newNote.save();
        res.status(201).json({ success: true, newNote });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};


// backend/routes/noteRoutes.js

const express = require('express');
const router = express.Router();
const { getNotes, createNote } = require('./noteController');

// Define routes
router.get('/notes', getNotes);
router.post('/notes', createNote);

module.exports = router;
