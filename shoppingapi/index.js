const express = require("express");
const mongoose = require("./db");
const cors = require("cors");

const app = express();

// midwares is always use for the top
app.use(cors());

app.use(express.json());

const PORT = 8000;

mongoose.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mongoDB Connected");
  }
});

// set to our apis port number
app.listen(PORT, () => {
  console.log("server is started");
});

app.get("/", (req, res) => {
  res.send("<h1> This is backend data </h1>");
});

// routes

app.use("/products", require("./routes/Products"));
