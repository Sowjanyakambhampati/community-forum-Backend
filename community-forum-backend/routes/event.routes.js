const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");
const GeoAPIController = require("../controllers/GeoAPI.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/geoData", GeoAPIController.getGeoData);

router.post("/", fileUploader.single("image"), eventController.createEvent);

router.get("/", eventController.getAllEvents);

router.get("/city/:city", eventController.getEventsByCity);

router.get("/:id", eventController.getEventById);

router.get('/user/:userId/registered-events', eventController.getUserRegisteredEvents);

router.get("/registeredUsers/:id", eventController.getRegisteredUsers);

router.put("/", fileUploader.single("image"), eventController.updateEvent);

router.put("/:id", eventController.updateEvent);

router.delete("/", eventController.deleteEvent);

router.delete("/:id", eventController.deleteEvent);

// Register event route
router.post("/register", eventController.registerEvent);

module.exports = router;
