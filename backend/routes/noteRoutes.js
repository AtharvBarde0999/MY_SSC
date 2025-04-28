// backend/routes/noteRoutes.js

const express = require('express');
const router = express.Router();
const { getNotes, createNote } = require('../controllers/noteController');
const verifyToken = require('../middlewares/verifyToken');  // Import the middleware

// Use the middleware for routes that need token verification
router.get('/notes', verifyToken, getNotes);
router.post('/notes', verifyToken, createNote);

module.exports = router;
