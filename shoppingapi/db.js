const mongoose = require("mongoose");

// mongoose.set('strictQuery', false)

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/shoppingapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = mongoose.connection;
