// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const bodyParser = require('body-parser');
const Event = require('./models/Event.model');
const Product = require('./models/Products.model')
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(bodyParser.json());


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);
// Routes
// Create event
app.post('/events', async (req, res) => {
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).send(event);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  // Use event routes
app.use('/events', Event);

  // Get all events
  app.get('/events', async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).send(events);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  // Create a new product
app.post('/products', async (req, res, next) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  });
  
  // Get all products
  app.get('/products', async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  });
  


module.exports = app;
