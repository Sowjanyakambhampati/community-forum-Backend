const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  city : { type : String, required : true},  
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  image : { data : Buffer, contentType: String },
  description: { type : String, required : false },
  condition : {type : String},
  category : { type : String , required : false}
 
});


const Product = mongoose.model("Product", productSchema);

// EXPORT THE MODEL
module.exports = Product;