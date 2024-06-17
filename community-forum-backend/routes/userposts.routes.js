const express = require("express");
const router = express.Router();
const userPostsController = require("../controllers/userposts.controller");


router.post("/", userPostsController.createUserPost);

router.get("/", userPostsController.getAllUserPosts);

router.put("/:id", userPostsController.updateUserPost);

router.delete("/:id", userPostsController.deleteUserPost);

module.exports = router;