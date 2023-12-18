// models/Vitals.js
const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
    encounterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Encounter', required: true },
    bloodPressure: { type: String, required: true },
    temperature: { type: String, required: true },
    pulse: { type: String, required: true },
    spO2: { type: String, required: true },
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
