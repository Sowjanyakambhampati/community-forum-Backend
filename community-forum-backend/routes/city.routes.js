const express = require("express");
const router = express.Router();
const Cities = require("../models/city.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
// const {roles} = require("../middleware/roles.middleware");


// //Get citites
// router.get("/", req,res) => {}

// Cities.create({ cityname})
// .then(newCity => res.status(201).json(newCity))
//         .catch(err => res.status(500).json({ 
//             message: "Internal Server Error", err 
// }));
// Get all cities
router.get("/", (req, res) => {
   Cities.find()
      .then(cities => res.json(cities))
      .catch(err => res.status(500).json({
          message: "Internal Server Error", err 
       }));
  });
  

  module.exports = router;

