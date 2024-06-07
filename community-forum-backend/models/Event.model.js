// const { Schema, model} = require ("mongoose");
// const {mongoose} = require('mongoose');
//  const eventSchema= new Schema (
//     {
//         eventName : {
//             type : String,
//             unique : true,
//             trim : true
//         },
//         firstName : {
//             type : String,
//             required: true
//         },
//         lastName : {
//             type : String,
//             required : true
//         },
//         age : {
//             type : Number,
//             min : 0,
//             required: false
//         },
//         contactNumber : {
//             type: String,
//             required : true,
//             match: [/^[+]?[0-9]{1,4}?[0-9]{7,15}$/, 'Please enter a valid phone number']
//         },
//         email: {
//             type: String,
//             required: [true, 'Email is required.'],
//             match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
//             unique: true,
//             lowercase: true,
//             trim: true
//           },



//     }
//  );
//  module.exports = mongoose.model('Event', eventSchema);
// models/event.js

// models/event.js

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
