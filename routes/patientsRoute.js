// routes/patientsRoutes.js
const express = require('express');
const router = express.Router();

// Import the patientsController
const patientsController = require('../controllers/patientsController');

// Define routes
router.post('/api/patients', patientsController.registerPatient);
router.get('/api/patients', patientsController.getAllPatients);

module.exports = router;
