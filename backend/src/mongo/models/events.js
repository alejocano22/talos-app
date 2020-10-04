const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  imageLink: { type: String, required: true },
  accessLink: { type: String, required: true },
}, {
  timestamps: true,
});

const model = mongoose.model('Event', eventSchema);

module.exports = model;