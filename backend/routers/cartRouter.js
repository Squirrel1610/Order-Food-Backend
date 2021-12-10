const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/checkAuth.js");

//tạo giỏ hàng
router.post("/customer/createCart/:idUser", checkAuth.checkAuthCustomer);

module.exports = router;
