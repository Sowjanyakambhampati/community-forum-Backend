const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topics.controller");


router.post("/", topicController.createTopic);

router.get("/", topicController.getAllTopics);

router.get("/:id", topicController.getTopicById);

router.put("/:id", topicController.updateTopic);

router.delete("/", topicController.deleteTopic);

router.delete("/:id", topicController.deleteTopic);



module.exports = router;