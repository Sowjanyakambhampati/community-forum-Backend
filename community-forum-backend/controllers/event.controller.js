//event.controller.js

const Event = require("../models/Event.model.js");
const geocodeAddress = require('../utils/geocode');




class EventController {

    // Create a new event

    async createEvent(req, res) {
        // check if there's an image
        if (!req.file) {
            res.status(400).send("No image uploaded!");
            return;
        }

        try {
            console.log(1)

            const { coordinates } = req.body.location
            const { latitude, longitude } = coordinates

            // const location = await fetchAddress(`${latitude}`,`${longitude}`);
            const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

           // const location = await geocodeAddress(`${latitude}`,`${longitude}`);
            const event = new Event({ image: req.file.path, locationUrl, ...req.body });
            await event.save();
            res.status(201).send(event);
        } catch (error) {
            console.log(error)
            res.status(400).send(error.message);
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
            const events = await Event.find({ city: city });
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
        }
        catch (error) {
            res.status(500).send(error);
        }
    }


    // Get all registered users for an event
    async getRegisteredUsers(req, res) {
        try {
            const eventId = req.params.id;
            const event = await Event.findById(eventId);
            if (!event) {
                return res.status(404).send("Event not found");
            }
            res.send(event.registeredUsers);
        } catch (error) {
            res.status(500).send(error);
        }
    }



    //update an event by id
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



    // Delete event by id
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
