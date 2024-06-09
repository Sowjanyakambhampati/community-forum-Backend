const express = require("express");
const router = express.Router();
const Products = require("../models/Product.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const {roles} = require("../middleware/roles.middleware");

// Get all products
router.get("/", (req, res) => {
    Products.find()
      .then(products => res.json(products))
      .catch(err => res.status(500).json({
          message: "Internal Server Error", err 
       }));
  });

  // Create new product
  // Only admins can create new products
  router.post("/", (req, res) => {
    const { neighbourhood,productName, price,image, description,condition,productowner } = req.body;
    

    Products.create({ neighbourhood,productName, price, image,description,condition ,productowner})
      .then(newProduct => res.status(201).json(newProduct))
              .catch(err => res.status(500).json({ 
                  message: "Internal Server Error", err 
      }));
  });

  module.exports = router;