// const router = require("express").Router();

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the BuurtHub API');
});

module.exports = router;

