// routes/encountersRoutes.js
const express = require('express');
const router = express.Router();

const encountersController = require('../controllers/encountersController');

router.post('/api/encounters', encountersController.startEncounter);
router.get('/api/encounters', encountersController.getAllEncounters);

module.exports = router;
