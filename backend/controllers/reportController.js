const path = require('path');

const getDummyReport = (req, res) => {
  const filePath = path.join(__dirname, '..', 'assets', 'dummy_report.pdf');

  res.download(filePath, 'LabTestReport.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      return res.status(500).json({ message: 'Could not download report' });
    }
  });
};

module.exports = { getDummyReport };
