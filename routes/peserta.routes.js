// import expressjs
const express = require('express');

// define router
const router = express.Router();

// import controller
const pesertaController = require('../controllers/peserta.controllers');

// define routes
router.post('/peserta', pesertaController.postPeserta); // post peserta
router.get('/peserta/:id', pesertaController.getPesertaById); // get peserta by id

// export router
module.exports = router;