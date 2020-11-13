const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true},
  endDate: { type: Date, required: true },
  days: { type: [String], enum: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
  author: { type: String, required: true },
  description: { type: String, required: true },
  imageLink: { type: String, required: true },
  accessLink: { type: String },
  registerLink: { type: String },
}, {
  timestamps: true,
});

const model = mongoose.model('Event', eventSchema);

module.exports = model;