const mongoose = require('mongoose');

const foodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number, 
    required: true,
  },
  date: {
    type: Date, 
    required: true,
  }
}, {
  timestamps: true, 
});

module.exports = mongoose.model('FoodEntry', foodEntrySchema);
