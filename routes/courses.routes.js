// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const courseController = require('../controllers/courses.controllers');

// define routes
router.get('/courses', courseController.getAllCourses); // get all courses
router.get('/courses/:id', courseController.getCourseById); // get course by id
router.get('/best_courses', courseController.getBestCourses); // get all courses

// export router
module.exports = router;