// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const courseController = require('../controllers/course.controllers');

// define routes
router.get('/home/best_courses', courseController.getBestCourses); // get all courses

// export router
module.exports = router;