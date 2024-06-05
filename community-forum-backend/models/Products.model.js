const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  city : { type : String, required : true},  
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type : String, required : false }
 
});

module.exports = model("Product", productSchema);