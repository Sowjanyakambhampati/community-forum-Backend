const express = require("express");
const { getAdmins, getAdminById } = require("../controllers/admin.controller");
const { isAuth, isAdmin } = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/", isAuth, isAdmin, getAdmins);
router.get("/:id", isAuth, isAdmin, getAdminById);

module.exports = router;
