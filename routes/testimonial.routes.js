// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const testimonialController = require('../controllers/testimonial.controllers');

// define routes
router.get('/testimonial', testimonialController.getAllTestimonial);    // get all testimonial
router.get('/two_testimonial', testimonialController.getTwoTestimonial); // get 2 testimonial

// export router
module.exports = router;