const express = require('express');
const router = express.Router();
const { getDailySummary } = require('../controllers/summaryController');
//const { getAISuggestions } = require('../controllers/aiController'); // ⬅️ New controller

// @route   GET /api/summary/:userId/:date
router.get('/:userId/:date', getDailySummary);

module.exports = router;
