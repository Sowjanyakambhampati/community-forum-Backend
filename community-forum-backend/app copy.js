const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Product = require("./models/Product.model");
const Event = require("./models/Event.model");
const City = require("./models/City.model");
const cityRoutes = require("./routes/city.routes");
mongoose
  .connect(
    "mongodb+srv://community-forum:0v44NdQ3C3RFLBye@community-forum-cluster.c0vfqhs.mongodb.net/?retryWrites=true&w=majority&appName=community-forum-cluster"
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/cities", async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//POST City - creates city
app.post("/city", async (req, res) => {
  const { cityname } = req.body;
  try {
    const city = new City({ cityname });
    await city.save();
    res.status(201).json(city);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
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


//POST product
app.post("/product", async (req, res, next) => {
  Product.create({
    neighbourhood: req.body.city,
    productName: req.body.productName,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    condition: req.body.condition,
    productowner : req.body.productowner,
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


app.listen(5005, () => console.log("App listening on port 5005"));

module.exports = app;
