const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/:patientId/:testName', (req, res) => {
  const { patientId, testName } = req.params;
  const fileName = `${patientId}-${testName}.pdf`;
  const filePath = path.join(__dirname, '..', 'assets', fileName);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ message: 'Report not found' });
  }
});

module.exports = router;
