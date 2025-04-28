const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

// @route   GET /api/test
// @desc    Test protected route
// @access  Private
router.get('/test', protect, (req, res) => {
    res.json({
        success: true,
        message: 'You have accessed a protected route',
        user: req.user
    });
});

module.exports = router;