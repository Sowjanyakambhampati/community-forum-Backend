const express = require("express");
const { getUsers, getUserById } = require("../controllers/user.controller");
const { isAuth } = require("../middleware/auth.middleware");
const router = express.Router();
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

router.get("/", isAuth, getUsers);
router.get("/:id", isAuth, getUserById);

module.exports = router;
