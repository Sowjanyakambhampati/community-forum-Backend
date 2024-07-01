
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
  locationUrl : {
    type: String,
    required: false,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
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
    required: false,
  },
  participants: [{
    type: String,
    required: false,
  }],
  time: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    enum: ["Paid", "Free"],
    required: false,
  },
  category: {
    type: String,
    enum: ["Art and Culture", "Health and Wellness", "Entertainment", "Sports", "Technology", "Education", "Community & Environment", "Career"],
    required: false,
  },
});

//eventSchema.index({ location: "2dsphere" });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;