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

router.get("/registered/:registeredUsers", eventController.getRegisteredEventsByUser);
//  router.get("/user/:id", eventController.getEventsByUser);

// router.get("/registered/:id", eventController.getRegisteredEventsByUser);


router.put("/", fileUploader.single("image"), eventController.updateEvent);

router.put("/:id", eventController.updateEvent);

router.delete("/", eventController.deleteEvent);

router.delete("/:id", eventController.deleteEvent);

module.exports = router;