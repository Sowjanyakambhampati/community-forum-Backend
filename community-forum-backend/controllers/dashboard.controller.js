const User = require('../models/user');
const Admin = require('../models/admin');

// Import necessary modules and models

// Controller for user dashboard
exports.userDashboard = async (req, res) => {
    try {
        // Get user ID from request
        const userId = req.params.userId;

        // Fetch user data from database
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return user dashboard data
        return res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for admin dashboard
exports.adminDashboard = async (req, res) => {
    try {
        // Get admin ID from request
        const adminId = req.params.adminId;

        // Fetch admin data from database
        const admin = await Admin.findById(adminId);

        // Check if admin exists
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Return admin dashboard data
        return res.status(200).json({ admin });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};