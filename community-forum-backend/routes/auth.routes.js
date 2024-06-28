const express = require("express");
const { registerUser, registerAdmin, login } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register/user", registerUser);
router.post("/register/admin", registerAdmin);
router.post("/login", login);

module.exports = router;
