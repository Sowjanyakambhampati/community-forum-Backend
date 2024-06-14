const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/", fileUploader.single("image"), productController.createProduct);

router.get("/", productController.getAllProducts);
module.exports = router;
