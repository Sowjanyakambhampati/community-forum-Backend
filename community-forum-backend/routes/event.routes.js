const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");
const GeoAPIController = require("../controllers/GeoAPI.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/geoData", GeoAPIController.getGeoData);

router.post("/", fileUploader.single("image"), eventController.createEvent);

router.put("/register", eventController.registerForEvent);


router.get("/", eventController.getAllEvents);

router.get("/city/:city", eventController.getEventsByCity);

router.get("/registeredevents/:registeredId", eventController.getEventsByRegisteredId);

router.get("/:id", eventController.getEventById);


router.put("/", fileUploader.single("image"), eventController.updateEvent);

router.put("/:id", eventController.updateEvent);

router.delete("/", eventController.deleteEvent);

router.delete("/:id", eventController.deleteEvent);

module.exports = router;
