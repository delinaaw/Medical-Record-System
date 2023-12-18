const Encounter = require('../models/Encounter');

const startEncounter = async (req, res) => {
};

const getAllEncounters = async (req, res) => {
};

const getEncounterDetails = async (req, res) => {
    try {
        const encounter = await Encounter.findById(req.params.encounterId);
        if (!encounter) {
            return res.status(404).json({ error: 'Encounter not found' });
        }
        res.json({ encounter });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    startEncounter,
    getAllEncounters,
    getEncounterDetails,
};
