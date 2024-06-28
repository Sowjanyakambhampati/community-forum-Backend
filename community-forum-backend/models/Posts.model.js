// models/userPosts.js

const mongoose = require('mongoose');
const { create } = require('./Event.model');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  city: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true},
  image : { type : String, contentType: String },
  contactInfo: { type: String, required: false },
 createdAt: { type: Date, default: Date.now, required: true },
});

const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;