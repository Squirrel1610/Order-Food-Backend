const billModel = require("../models/billModel.js");

module.exports = {
  //xem toàn bộ hóa đơn của khách hàng đang đăng nhập
  history(req, res) {
    const idUser = req.userData.id;
    billModel
      .history(idUser)
      .then((bills) => {
        return res.status(200).json({
          status: 200,
          message: `Get all bills of idCustomer: ${idUser} successfully`,
          data: bills,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed get all bills",
          data: err,
        });
      });
  },

  //tạo hóa đơn (khách hàng)
  createBill(req, res, next) {
    const idUser = req.userData.id;
    const { id_diachi, id_thanhtoan, tinhtrangHD } = req.body;
    const bill = {
      id_nd: idUser,
      id_diachi: id_diachi,
      ngaydathang: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      tinhtrangHD: tinhtrangHD,
      id_thanhtoan: id_thanhtoan,
    };
    billModel
      .createBill(bill)
      .then((id_bill) => {
        req.idBill = id_bill[0];
        next();
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to create bill",
          data: err,
        });
      });
  },
};
