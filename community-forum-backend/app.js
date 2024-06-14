const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cityRoutes = require("./routes/city.routes");
const productRoutes = require("./routes/product.routes");
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

app.use('/city', cityRoutes);
app.use('/product', productRoutes);

app.listen(5005, () => console.log("App listening on port 5005"));

module.exports.handler = app;
