
const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  contactNumber: String,
  email: String
});

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  city: String,
  location: String,
  organiser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendees: [attendeeSchema] 
});

module.exports = mongoose.model('Event', eventSchema);
