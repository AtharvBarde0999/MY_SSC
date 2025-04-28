const express = require('express');
const router = express.Router();
const { createCourse, getAllCourses, deleteCourse } = require('../controllers/courseController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, createCourse);
router.get('/', getAllCourses);
router.delete('/:id', verifyToken, deleteCourse);

module.exports = router;
