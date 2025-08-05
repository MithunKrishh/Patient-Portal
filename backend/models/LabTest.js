const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String
});

module.exports = mongoose.model('LabTest', labTestSchema);
