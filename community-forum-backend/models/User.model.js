//user model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  // city: {
  //   type: String,
  //   required: true
  // },
  role: {
    type: String,
    enum: ['admin', 'user','manager'],
    default: 'user',
    required: true
  },
 
name :{
  type : String,
  required : true
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;



