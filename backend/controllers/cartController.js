const cartModel = require("../models/cartModel.js");
const productModel = require("../models/productModel");

module.exports = {
  //lấy ra giỏ hàng của khách hàng đang đăng nhập
  getCartOfUser(req, res) {
    const idUser = req.userData.id;
    cartModel
      .getCartOfUser(idUser)
      .then((cart) => {
        return res.status(200).json({
          status: 200,
          message: "Get cart successfully",
          data: cart,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get cart",
          data: err,
        });
      });
  },

  //thêm sản phẩm vào giỏ hàng
  addCartItem(req, res) {
    //lấy id khách hàng đang đăng nhập
    const idUser = req.userData.id;
    const id_sp = req.params.id_sp;

    productModel
      .getProductId(id_sp)
      .then((product) => {
        const don_gia = product[0].gia;
        const cartItem = {
          id_nd: idUser,
          id_sp: id_sp,
          don_gia: don_gia,
          soluong: 1,
          tong_gia: don_gia,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return cartModel.addCartItem(cartItem);
      })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          message: "Failed to add product into cart",
          data: err,
        });
      });
  },

  //chỉnh sửa số lượng sản phẩm
  updateProductQuantity(req, res) {
    //lấy id khách hàng đang đăng nhập
    const idUser = req.userData.id;
    const id = req.params.id;
    const { soluong } = req.body;
    const cartItem = {
      id_nd: idUser,
      id: id,
      soluong: soluong,
      updatedAt: new Date(),
    };
    cartModel
      .updateProductQuantity(cartItem)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Updated quantity's product successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to update quantity's product",
          data: err,
        });
      });
  },

  //xóa sản phẩm trong giỏ hàng
  async deleteCartItem(req, res) {
    const id = req.params.id;
    cartModel
      .deleteCartItem(id)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: `Deleted cart item with id: ${id} successfully`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete cart item",
          data: err,
        });
      });
  },

  //xóa toàn bộ trong giỏ hàng
  async deleteAllCartItems(req, res) {
    //lấy id khách hàng đang đăng nhập
    const idUser = req.userData.id;
    cartModel
      .deleteAllCartItems(idUser)
      .then((result) => {
        return res.status(200).json({
          status: 200,
          message: "Deleted all cart items successfully",
          data: result,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to delete all cart items",
          data: err,
        });
      });
  },
};
