const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topic.controller");


router.post("/", topicController.createTopic);

router.get("/", topicController.getAllTopics);

router.put("/:id", topicController.updateTopic);

router.delete("/:id", topicController.deleteTopic);



module.exports = router;