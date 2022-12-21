const express = require("express");

const router = express.Router();

router.get("/", require("./../Controllers/Products").getProducts);

// Use to insert your data

router.post("/", require("./../Controllers/Products").saveProducts);

// Use to update the data
router.put("/:productid", require("./../Controllers/Products").updateProducts);

// Use to delete the data

router.delete(
  "/:productid",
  require("./../Controllers/Products").deleteProduct
);

module.exports = router;
