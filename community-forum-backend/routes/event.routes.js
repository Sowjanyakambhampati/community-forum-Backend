const express = require('express');
const router = express.Router();
const Events = require ("../model/Event.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const {roles} = require("../middleware/roles.middleware");

// Get all events
router.get("/", (req, res) => {
    Events.find()
      .then(events => res.json(events))
      .catch(err => res.status(500).json({
          message: "Internal Server Error", err 
       }));
  });
  // Create new event
  // Only admins can create new event
  router.post("/", (req, res) => {
    const { title,description,date,city,location,organiser, attendees = {
        firstName,
        lastName,
        age,
        contactNumber,
        email
      }} = req.body;
    
    

    Events.create({ title,description,date,city,location,organiser,attendees})
      .then(newEvent => res.status(201).json(newEvent))
              .catch(err => res.status(500).json({ 
                  message: "Internal Server Error", err 
      }));
  });



module.exports = router;
