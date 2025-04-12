const express = require('express');
const router = express.Router();
const { addFoodEntry, getFoodEntriesByDate } = require('../controllers/foodController');

router.post('/add', addFoodEntry);

router.get('/:userId/:date', getFoodEntriesByDate);

module.exports = router;
