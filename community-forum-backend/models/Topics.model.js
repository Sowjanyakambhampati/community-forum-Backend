// models/Topics.js

const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  city: { type: String, required: true },
  title: String,
  description: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Topic', topicSchema);
