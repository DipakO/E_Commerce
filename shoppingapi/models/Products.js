const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.model("Products", productSchema);
