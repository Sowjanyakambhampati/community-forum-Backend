//userposts.controller.js
const UserPosts = require('../models/UserPosts.model');

class UserPostsController {

    // Create a new user post
    async createUserPost(req, res) {
        try {
            const userPost = new UserPosts(req.body);
            await userPost.save();
            res.status(201).send(userPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Get all user posts
    async getAllUserPosts(req, res) {
        try {
            const userPosts = await UserPosts.find({});
            res.send(userPosts);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    // Update user post
    async updateUserPost(req, res) {
        try {
            const userPostId = req.params.id;
            const updates = req.body;
            const options = { new: true }; // Return the updated user post
            const updatedUserPost = await UserPosts.findByIdAndUpdate(userPostId, updates, options);
            if (!updatedUserPost) {
                return res.status(404).send("User post not found");
            }
            res.send(updatedUserPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Delete user post
    async deleteUserPost(req, res) {
        try {
            const userPostId = req.params.id;
            const deletedUserPost = await UserPosts.findByIdAndDelete(userPostId);
            if (!deletedUserPost) {
                return res.status(404).send("User post not found");
            }
            res.send(deletedUserPost);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = new UserPostsController;