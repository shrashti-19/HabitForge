const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    enum: ['Daily', 'Weekly', 'Monthly'],
    default: 'Daily',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Habit', habitSchema);
