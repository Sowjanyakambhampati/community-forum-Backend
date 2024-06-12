// product.controller.js
const Product = require("../models/Product.model");

class ProductController {
  // Create a new product
  async createProduct(req, res) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  // Get all products
  async getAllProducts(req, res) {
    try {
      const products = await Product.find({});
      res.send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // // controllers/product.controller.js
  // async getProductsByCity(req, res) {
  //   try {
  //     const city = req.params.city;
  //     const products = await Product.find({ city: city }).then((products) =>
  //       res.json(products)
  //     );
  //     res.send(products);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // }
}

module.exports = new ProductController();
