const express = require("express");
const router = express.Router();
const PostsController = require("../controllers/posts.controller");


router.post("/", PostsController.createPost);

router.get("/", PostsController.getAllPosts);

router.put("/:id", PostsController.updatePost);

router.delete("/:id", PostsController.deletePost);

module.exports = router;