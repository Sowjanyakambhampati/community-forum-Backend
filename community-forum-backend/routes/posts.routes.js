const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/", fileUploader.single("image"), postsController.createPost);

//router.post("/", postsController.createPost);

router.get("/", postsController.getAllPosts);  

router.get("/city/:city", postsController.getPostsByCity);

router.get("/:id", postsController.getPostById);

router.get("/postauthor/:id", postsController.getPostsByPostAuthor);

router.put("/", fileUploader.single("image"), postsController.updatePost);

router.put("/:id", postsController.updatePost);

router.delete("/", postsController.deletePost);

router.delete("/:id", postsController.deletePost);

module.exports = router;