const productController = require("../controllers/productController.js");
const checkAuth = require("../middleware/checkAuth.js");

const express = require("express");
const router = express.Router();

//GET ALL PRODUCT
router.get("/", productController.getAllProducts);

//POST
router.post("/", checkAuth.checkAuthAdmin, productController.insertProduct);

//PATCH
router.patch("/:id", checkAuth.checkAuthAdmin, productController.updateProduct);

//DELETE (xóa mềm)
router.patch(
  "/delete/:id",
  checkAuth.checkAuthAdmin,
  productController.deleteProduct
);

module.exports = router;
