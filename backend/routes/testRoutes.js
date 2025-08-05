const express = require('express');
const router = express.Router();
const LabTest = require('../models/LabTest');

router.get('/', async (req, res) => {
  try {
    const tests = await LabTest.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tests.' });
  }
});

module.exports = router;
