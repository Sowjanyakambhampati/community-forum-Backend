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
const eventController = require('../controllers/eventController');

// Route for creating a new event
router.post('/', eventController.createEvent);

// Route for retrieving all events
router.get('/', eventController.getAllEvents);

// Route for retrieving a single event by ID
router.get('/:eventId', eventController.getEventById);

// Route for updating an existing event by ID
router.put('/:eventId', eventController.updateEvent);

// Route for deleting an event by ID
router.delete('/:eventId', eventController.deleteEvent);

// Route for registering an attendee to an event
router.post('/:eventId/register', eventController.registerForEvent);

module.exports = router;
