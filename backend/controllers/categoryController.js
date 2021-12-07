const categoryModel = require("../models/categoryModel.js");

module.exports = {
  //GET
  getAll(req, res) {
    categoryModel
      .getAllCategories()
      .then((categories) => {
        return res.status(200).json({
          status: 200,
          msg: "Get list categories successfully",
          data: categories,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          status: 400,
          msg: "Get categories failed",
          data: err,
        });
      });
  },

  //POST
  addCategory(req, res) {
    const { tendm } = req.body;
    const category = {
      tendm: tendm,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    categoryModel
      .insertCategory(category)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          msg: "Category added successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to add category",
          data: err,
        });
      });
  },

  //PATCH
  updateCategory(req, res) {
    const { tendm } = req.body;
    const category = {
      tendm: tendm,
      updatedAt: new Date(),
    };
    categoryModel
      .updateCategory(category, req.params.id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          msg: "Category updated successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          msg: "Failed to update category",
          data: err,
        });
      });
  },

  //DELETE
  deleteCategory(req, res) {
    const id = req.params.id;
    const category = {
      updatedAt: new Date(),
      deleted_fg: 1,
    };
    categoryModel
      .deleteCategory(category, id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          msg: "Deleted category successfully",
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
