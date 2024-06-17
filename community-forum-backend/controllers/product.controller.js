// product.controller.js
const Product = require("../models/Product.model");

class ProductController {
    // Create a new product
    async createProduct(req, res) {


        // check if there's an image

        if (!req.file) {
            next(new Error("No image uploaded!"));
            return;
        }

        console.log(req.body)
        console.log(req.file.path)


        try {
            const product = new Product({ image: req.file.path, ...req.body });
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

    // Update a product
    async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const updates = req.body;
            const options = { new: true }; // Return the updated product
            const updatedProduct = await Product.findByIdAndUpdate(productId, updates, options);
            if (!updatedProduct) {
                return res.status(404).send("Product not found");
            }
            res.send(updatedProduct);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    // Delete a product
    async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return res.status(404).send("Product not found");
            }
            res.send(deletedProduct);
        } catch (error) {
            res.status(400).send(error);
        }
    }


    // Get a single product
    
    async getSingleProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await
                Product.findById(productId);
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.send(product);

}
        catch (error) {
          res.status(500).send(error);
        }
    }

}
module.exports = new ProductController();
