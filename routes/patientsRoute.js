// routes/patientsRoutes.js
const express = require('express');
const router = express.Router();

const patientsController = require('../controllers/patientsController');

router.post('/api/patients', patientsController.registerPatient);
router.get('/api/patients', patientsController.getAllPatients);
router.get('/api/patients/:patientId', patientsController.getPatientDetails);

module.exports = router;
