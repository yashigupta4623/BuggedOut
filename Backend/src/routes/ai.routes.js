const express = require('express');
const router = express.Router();
const aiController = require('../controller/ai.controller.js');

router.get('/get-response', aiController.getResponse); 

module.exports = router;

