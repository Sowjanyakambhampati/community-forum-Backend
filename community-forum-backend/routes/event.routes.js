// // events.routes.js
// const express = require('express');
// const router = express.Router();
// const Event = require('./models/Event.model'); 

// // Create event
// router.post('/', async (req, res) => {
//   try {
//     const event = new Event(req.body);
//     await event.save();
//     res.status(201).send(event);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all events
// router.get('/', async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).send(events);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // Get a specific event by ID
// router.get('/:id', async (req, res, next) => {
//     try {
//       const event = await Event.findById(req.params.id);
//       if (!event) {
//         return res.status(404).json({ message: 'Event not found' });
//       }
//       res.status(200).json(event);
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   // Update an event by ID
//   router.put('/:id', async (req, res, next) => {
//     try {
//       const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       if (!updatedEvent) {
//         return res.status(404).json({ message: 'Event not found' });
//       }
//       res.status(200).json(updatedEvent);
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   // Delete an event by ID
//   router.delete('/:id', async (req, res, next) => {
//     try {
//       const deletedEvent = await Event.findByIdAndDelete(req.params.id);
//       if (!deletedEvent) {
//         return res.status(404).json({ message: 'Event not found' });
//       }
//       res.status(200).json({ message: 'Event deleted' });
//     } catch (error) {
//       next(error);
//     }
//   });

// module.exports = router;
// routes/eventRoutes.js

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
