const express = require("express");
const logger = require("morgan");
const Product = require("./models/Product.model");
const Event = require("./models/Event.model");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://community-forum:0v44NdQ3C3RFLBye@community-forum-cluster.c0vfqhs.mongodb.net/?retryWrites=true&w=majority&appName=community-forum-cluster"
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

//POST product
app.post("/product", async (req, res, next) => {
  Product.create({
    neighbourhood: req.body.city,
    productName: req.body.productName,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    condition: req.body.condition,
    category: req.body.category,
  })
    .then((createdProduct) => {
      console.log("Product created ->", createdProduct);
      res.status(201).send(createdProduct);
    })
    .catch((error) => {
      console.error("Error while creating the product ->", error);
      res.status(500).send({ error: "Failed to create the product" });
    });
});
//POST Event
app.post("/event", async (req, res, next) => {
    Event.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      city: req.body.city,
      location: req.body.location,
      organiser: req.body.organiser, 
      attendees: req.body.attendees 
    })
      .then((createdEvent) => {
        console.log("Event created ->", createdEvent);
        res.status(201).send(createdEvent);
      })
      .catch((error) => {
        console.error("Error while creating the event ->", error);
        res.status(500).send({ error: "Failed to create the event" });
      });
  });

app.listen(5005, () => console.log("App listening on port 5005"));

module.exports = app;
