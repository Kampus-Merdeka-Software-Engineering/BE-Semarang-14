// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const pesanController = require('../controllers/pesan.controllers');

// define routes
router.post('/pesan', pesanController.postPesan);    // post pesan

// export router
module.exports = router;