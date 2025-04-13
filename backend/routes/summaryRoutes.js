const express = require('express');
const router = express.Router();
const { getDailySummary } = require('../controllers/summaryController');
const { getAISuggestions } = require('../controllers/aiController'); 

router.get('/:userId/:date', getDailySummary);

router.post('/ai-suggestions', getAISuggestions); 

module.exports = router;
