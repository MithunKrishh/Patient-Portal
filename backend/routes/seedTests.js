
// backend/seedTests.js
const mongoose = require('mongoose');
require('dotenv').config();

const LabTest = require('./models/LabTest');

const seedTests = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await LabTest.deleteMany(); // Clear existing
    await LabTest.insertMany([
      {
        name: 'Complete Blood Count',
        description: 'Checks for blood disorders.',
        price: 50
      },
      {
        name: 'Urine Analysis',
        description: 'Detects & manages disorders.',
        price: 30
      },
      {
        name: 'Chest X-Ray',
        description: 'Helps diagnose conditions.',
        price: 100
      }
    ]);

    console.log('✅ Lab tests seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding lab tests:', err);
    process.exit(1);
  }
};

seedTests();
