const express = require('express');
const router = express.Router();

const encountersController = require('../controllers/encountersController');

router.post('/api/encounters', encountersController.startEncounter);
router.get('/api/encounters', encountersController.getAllEncounters);
router.get('/api/encounters/:encounterId', encountersController.getEncounterDetails);

module.exports = router;
