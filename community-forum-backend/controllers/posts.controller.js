//userposts.controller.js
const Posts = require('../models/Posts.model');

class PostsController {

    // Create a new  post
    async createPost(req, res) {
        try {
            const post = new Posts(req.body);
            await post.save();
            res.status(201).send(post);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Get all  posts
    async getAllPosts(req, res) {
        try {
            const posts = await Posts.find({});
            res.send(posts);
        } catch (error) {
            res.status(500).send (error);
        }
    }

    // Get  post by id
    async getPostById(req, res) {
        try {
            const PostId = req.params.id;
            const post = await Posts.findById(PostId);
            if (!post) {
                return res.status(404).send("post not found");
            }
            res.send(post);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    


    // Update  post
    async updatePost(req, res) {
        try {
            const PostId = req.params.id;
            const updates = req.body;
            const options = { new: true }; // Return the updated user post
            const updatedPost = await Posts.findByIdAndUpdate(PostId, updates, options);
            if (!updatedPost) {
                return res.status(404).send(" post not found");
            }
            res.send(updatedPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Delete  post
    async deletePost(req, res) {
        try {
            const PostId = req.params.id;
            const deletedPost = await Posts.findByIdAndDelete(PostId);
            if (!deletedPost) {
                return res.status(404).send("post not found");
            }
            res.send(deletedPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = new PostsController();