const express = require('express');
const router = express.Router();
const {
  createPatient,
  getAllPatients,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/register', createPatient);

// 🔒 Protected routes (require token)
router.post('/', authenticateToken, createPatient);
router.get('/', authenticateToken, getAllPatients);
router.put('/:id', authenticateToken, updatePatient);
router.delete('/:id', authenticateToken, deletePatient);

module.exports = router;
