// controllers/patientController.js

const Patient = require('../models/Patient');

const createPatient = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    const newPatient = new Patient({ name, email, phone });
    await newPatient.save();

    res.status(201).json({ message: 'Patient created successfully' });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Other functions remain the same...
const getAllPatients = async (req, res) => {
  res.status(200).json({ patients: [] });
};

const updatePatient = async (req, res) => {
  res.status(200).json({ message: 'Patient updated' });
};

const deletePatient = async (req, res) => {
  res.status(200).json({ message: 'Patient deleted' });
};

module.exports = {
  createPatient,
  getAllPatients,
  updatePatient,
  deletePatient
};
