const productModel = require("../models/productModel.js");

module.exports = {
  getAllProducts(req, res) {
    productModel
      .getAllProduct()
      .then((data) => {
        res.status(200).json({
          status: 200,
          msg: "Get all products successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to get all products",
          data: error,
        });
      });
  },

  insertProduct(req, res) {
    const { tensp, chitiet, size, gia, hinhanh, id_dm } = req.body;
    const product = {
      tensp: tensp,
      chitiet: chitiet,
      size: size,
      gia: gia,
      hinhanh: hinhanh,
      createdAt: new Date(),
      updatedAt: new Date(),
      id_dm: id_dm,
    };
    productModel
      .insertProduct(product)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Added product successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to add product",
          data: error,
        });
      });
  },

  updateProduct(req, res) {
    const id = req.params.id;
    const { tensp, chitiet, size, gia, hinhanh, id_dm } = req.body;
    const product = {
      tensp: tensp,
      chitiet: chitiet,
      size: size,
      gia: gia,
      hinhanh: hinhanh,
      updatedAt: new Date(),
      id_dm: id_dm,
    };

    productModel
      .updateProduct(product, id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          msg: "Updated product successfully",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to add product",
          data: error,
        });
      });
  },

  deleteProduct(req, res) {
    const id = req.params.id;
    const product = {
      updatedAt: new Date(),
      deleted_fg: 1,
    };
    productModel
      .deleteProduct(product, id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          msg: "Deleted product successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to delete category",
          data: err,
        });
      });
  },
};
