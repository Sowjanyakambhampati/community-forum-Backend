const express = require("express");
const router = express.Router();
const emailController = require("../controllers/sendemail.controller");

router.post("/sendemail", emailController.sendEmail);

module.exports = router;