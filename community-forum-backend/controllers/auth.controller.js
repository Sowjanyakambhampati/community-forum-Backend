const User = require("../models/User.model");
const Admin = require("../models/Admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function to create JWT
const createToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Register Admin
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ name, email, password: hashedPassword });
    await admin.save();
    res.status(201).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Login User or Admin
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }) || await Admin.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }
    const token = createToken(user);
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { registerUser, registerAdmin, login };
