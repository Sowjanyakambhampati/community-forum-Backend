//event.controller.js

const Event = require("../models/Event.model");

class EventController {
    
        // Create a new event
        async createEvent(req, res) {
            try {
                const event = new Event(req.body);
                await event.save();
                res.status(201).send(event);
            } catch (error) {
                res.status(400).send(error);
            }
        }
    
        // Get all events
        async getAllEvents(req, res) {
            try {
                const events = await Event.find({});
                res.send(events);
            } catch (error) {
                res.status(500).send(error);
            }
        }
    
        // Update event
        async updateEvent(req, res) {
            try {
                const eventId = req.params.id;
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
    
        // Delete event
        async deleteEvent(req, res) {
            try {
                const eventId = req.params.id;
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