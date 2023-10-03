// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const subscriptionController = require('../controllers/subscription.controllers');

// define routes
router.post('/subcription', subscriptionController.postSubscription);    // post subscription

// export router
module.exports = router;