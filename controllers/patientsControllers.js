// controllers/patientsController.js
const Patient = require('../models/Patient');

const registerPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json({ patientId: savedPatient._id, message: 'Patient registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({}, { _id: 1, surname: 1, otherNames: 1, gender: 1, phoneNumber: 1 });
    res.json({ patients });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPatientDetails = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.json({ patient });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  registerPatient,
  getAllPatients,
  getPatientDetails,
};
