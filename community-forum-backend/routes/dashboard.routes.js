const express = require('express');

const router = express.Router();

// User dashboard route
router.get('/user', (req, res) => {
    // Handle user dashboard logic here
    res.send('User Dashboard');
});

// Admin dashboard route
router.get('/admin', (req, res) => {
    // Handle admin dashboard logic here
    res.send('Admin Dashboard');
});

module.exports = router;