const express = require("express");
const router = express.Router();
const Course = require("../models/courseModel");

// Create a new course
router.post("/", async (req, res) => {
    try {
        const { title, description, price } = req.body;

        const newCourse = new Course({
            title,
            description,
            price,
        });

        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
