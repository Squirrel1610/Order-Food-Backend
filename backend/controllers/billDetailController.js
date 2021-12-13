const billDetailModel = require("../models/billDetailModel.js");
const cartModel = require("../models/cartModel.js");

module.exports = {
  //thêm chi tiết hóa đơn
  addBillDetail(req, res) {
    const idUser = req.userData.id;
    const id_hd = req.idBill;
    cartModel
      .getCartOfUser(idUser)
      .then((cartItems) => {
        //kiểm tra cart có gì hay không
        if (cartItems.length === 0) {
          return res.status(400).json({
            status: 400,
            message: "Nothing in your cart",
          });
        }

        var arrBillDetail = [];
        for (var i = 0; i < cartItems.length; i++) {
          var id_sp = cartItems[i].id_sp;
          var don_gia = cartItems[i].don_gia;
          var soluong = cartItems[i].soluong;
          var tong_gia = cartItems[i].tong_gia;
          var billDetail = {
            id_hd: id_hd,
            id_sp: id_sp,
            don_gia: don_gia,
            soluong: soluong,
            tong_gia: tong_gia,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          arrBillDetail.push(billDetail);
        }
        return billDetailModel.addBillDetail(arrBillDetail);
      })
      .then((billDetails) => {
        req.billDetails = billDetails;
        return cartModel.deleteAllCartItems(idUser);
      })
      .then((result) => {
        var data = req.billDetails;
        return res.status(200).json({
          status: 200,
          message: "Create bill successfully",
          data: data,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to create detail of bill",
          data: err,
        });
      });
  },
};
