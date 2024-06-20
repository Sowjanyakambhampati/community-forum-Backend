// models/userPosts.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: String,
  content: String,
  author: { type: String, required: true},
  createdAt: { type: Date, default: Date.now }
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;