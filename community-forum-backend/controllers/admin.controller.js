const Admin = require("../models/admin.model");

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.send(admins);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get admin by ID
const getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }
    res.send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAdmins, getAdminById };
