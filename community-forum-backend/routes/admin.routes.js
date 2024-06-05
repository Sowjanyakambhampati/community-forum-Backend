// const express = require("express");
// const router = express.Router();
// const { isAuthenticated } = require("../middleware/jwt.middleware");
// const {roles} = require("../middleware/roles.middleware");
// const User = require("../models/User.model");

// // Admin may modify user's role
// router.patch("/assign-role", (req, res) => {
//     // Get user._id
//     const { _id, role } = req.body;

//     User.findByIdAndUpdate(_id, {role}, { new: true })
//         .then((updatedUser) => res.json(updatedUser.role))
//         .catch((error) => next(error));
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");
const { roles } = require("../middleware/roles.middleware");
const User = require("../models/User.model");

// Admin may modify user's role
router.patch("/assign-role", isAuthenticated, roles('admin'), async (req, res, next) => {
  try {
    // Get user._id and role from the request body
    const { _id, role } = req.body;

    if (!_id || !role) {
      return res.status(400).json({ message: 'User ID and role are required' });
    }

    const updatedUser = await User.findByIdAndUpdate(_id, { role }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(updatedUser.role);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
