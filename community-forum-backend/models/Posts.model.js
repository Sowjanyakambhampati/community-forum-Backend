// models/userPosts.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: String,
  content: String,
  author: { type: String, required: true},
  image: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;