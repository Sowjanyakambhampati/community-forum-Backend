const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const fileUploader = require("../config/cloudinary.config");

router.post("/", fileUploader.single("image"), productController.createProduct);

router.get("/", productController.getAllProducts);

router.put("/:id", fileUploader.single("image"), productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
