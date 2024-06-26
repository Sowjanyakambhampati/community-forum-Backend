
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organiser: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  participants: {
    type: Array,
    required: false,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    enum: ["Paid", "Free"],
    required: true,
  },
  category: {
    type: String,
    enum: ["Art and Culture", "Health and Wellness", "Entertainment", "Sports", "Technology", "Education", "Community & Environment","Career"],
    required: true,
  },
});

//eventSchema.index({ location: "2dsphere" });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;