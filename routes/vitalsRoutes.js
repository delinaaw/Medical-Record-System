const express = require('express');
const router = express.Router();

const vitalsController = require('../controllers/vitalsController');

router.post('/api/vitals', vitalsController.submitVitals);
router.get('/api/vitals', vitalsController.getAllVitals);

module.exports = router;
