const Test = require('../models/testModel');

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    console.error('Fetch Tests Error:', err);
    res.status(500).json({ message: 'Server error fetching tests' });
  }
};

exports.addTest = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newTest = await Test.create({ name, price });
    res.status(201).json(newTest);
  } catch (err) {
    console.error('Add Test Error:', err);
    res.status(500).json({ message: 'Server error adding test' });
  }
};
