const productModel = require("./../models/Products");

// Use for get the data
exports.getProducts = async (req, res) => {
  const product = await productModel.find();
  res.json(product);
};

// Use for the insert the data
exports.saveProducts = (req, res) => {
  const newProduct = productModel(req.body);

  newProduct.save();

  res.send("Data inserted succesfully");
};

// Use for the Update the data

exports.updateProducts = (req, res) => {
  productModel.findOneAndUpdate(
    { _id: req.params.productid },
    req.body,
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
};

// Use for the delete the data
exports.deleteProduct = (req, res) => {
  productModel.findOneAndDelete({ _id: req.params.productid }, (err, data) => {
    res.send(data);
  });
};
