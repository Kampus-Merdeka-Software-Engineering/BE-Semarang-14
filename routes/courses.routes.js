// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const courseController = require('../controllers/courses.controllers');
const pesertaController = require('../controllers/peserta.controllers');

// define routes
router.get('/courses', courseController.getAllCourses); // get all courses
router.get('/courses/:id', courseController.getCourseById); // get course by id
router.post('/courses', pesertaController.postPeserta); // post peserta

// export router
module.exports = router;