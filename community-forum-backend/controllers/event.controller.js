const Event = require("../models/Event.model");
const User = require("../models/User.model");

class EventController {
  // Create a new event
  async createEvent(req, res) {
    if (!req.file) {
      res.status(400).send("No image uploaded!");
      return;
    }

    try {
      const { coordinates } = req.body.location;
      const { latitude, longitude } = coordinates;
      const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      const event = new Event({ image: req.file.path, locationUrl, ...req.body });
      await event.save();
      res.status(201).send(event);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }

  // Register for an event
  async registerEvent(req, res) {
    const { userId, eventId } = req.body;

    try {
      // Find the event
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).send("Event not found");
      }

      // Add the user to the registeredUsers array
      event.registeredUsers.push(userId);
      await event.save();

      // Optionally, add the event to the user's list of registered events
      const user = await User.findById(userId);
      if (user) {
        user.registeredEvents.push(eventId);
        await user.save();
      }

      res.status(200).send("User registered for event");
    } catch (error) {
      console.error('Error registering for event:', error);
      res.status(500).send('Error registering for event');
    }
  }


  // Get all events  
  async getAllEvents(req, res) {
    try {
      const events = await Event.find();
      res.send(events);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Get all events by city
  async getEventsByCity(req, res) {
    try {
      const city = req.params.city;
      const events = await Event.find({ city });
      if (!events) {
        return res.status(404).send("Events not found");
      }
      res.send(events);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Get event by id
  async getEventById(req, res) {
    try {
      const eventId = req.params.id;
      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).send("Event not found");
      }
      res.send(event);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Fetch user registered events
  async getUserRegisteredEvents(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId).populate('registeredEvents');
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(user.registeredEvents);
    } catch (error) {
      console.error("Error fetching user registered events", error);
      res.status(500).send(error);
    }
  }

  // Get registered users for an event
  async getRegisteredUsers(req, res) {
    try {
      const eventId = req.params.id;
      const event = await Event.findById(eventId).populate('registeredUsers');
      if (!event) {
        return res.status(404).send("Event not found");
      }
      res.send(event.registeredUsers);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Update an event by id
  async updateEvent(req, res) {
    try {
      const eventId = req.params.id || req.body.id;
      const updates = req.body;
      const options = { new: true }; // Return the updated event
      const updatedEvent = await Event.findByIdAndUpdate(eventId, updates, options);
      if (!updatedEvent) {
        return res.status(404).send("Event not found");
      }
      res.send(updatedEvent);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // Delete event by id
  async deleteEvent(req, res) {
    try {
      const eventId = req.params.id || req.body.id;
      const deletedEvent = await Event.findByIdAndDelete(eventId);
      if (!deletedEvent) {
        return res.status(404).send("Event not found");
      }
      res.send(deletedEvent);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = new EventController();
