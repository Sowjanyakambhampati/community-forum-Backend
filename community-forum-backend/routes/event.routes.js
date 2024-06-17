//event.routes.js
const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/", fileUploader.single("image"), eventController.createEvent);

router.get("/", eventController.getAllEvents);

router.put("/:id", fileUploader.single("image"), eventController.updateEvent);

router.delete("/:id", eventController.deleteEvent);

module.exports = router;
