const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');

// For now, no auth middleware
router.post('/', createBooking);

module.exports = router;
