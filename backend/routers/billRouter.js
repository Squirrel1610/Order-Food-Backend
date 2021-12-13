const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const billController = require("../controllers/billController.js");
const billDetailController = require("../controllers/billDetailController.js");

//xem toàn bộ hóa đơn của khách hàng đang đăng nhập
router.get("/history", checkAuth.checkAuthCustomer, billController.history);

//tạo hóa đơn (khách hàng)
router.post(
  "/create",
  checkAuth.checkAuthCustomer,
  billController.createBill,
  billDetailController.addBillDetail
);

module.exports = router;
