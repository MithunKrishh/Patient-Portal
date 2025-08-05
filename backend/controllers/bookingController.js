const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const createBooking = async (req, res) => {
  const { patientId, testName } = req.body;

  if (!patientId || !testName) {
    return res.status(400).json({ message: 'patientId and testName are required' });
  }

  try {
    console.log('Booking received:', req.body);

    const doc = new PDFDocument();
    const fileName = `${patientId}-${testName.replace(/\s+/g, '-')}.pdf`;
    const filePath = path.join(__dirname, '..', 'assets', fileName);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);
    doc.fontSize(20).text(`Lab Report`, { align: 'center' });
    doc.moveDown();
    doc.text(`Patient ID: ${patientId}`);
    doc.text(`Test: ${testName}`);
    doc.text(`Status: Completed`);
    doc.text(`Result: Normal`);
    doc.end();

    stream.on('finish', () => {
      res.status(201).json({ message: 'Test booked and report generated', fileName });
    });

    stream.on('error', (err) => {
      console.error('PDF generation error:', err);
      res.status(500).json({ message: 'PDF generation failed' });
    });
  } catch (error) {
    console.error('Booking failed:', error);
    res.status(500).json({ message: 'Booking failed' });
  }
};

module.exports = { createBooking };
