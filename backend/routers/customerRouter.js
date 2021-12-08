const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const checkAuth = require("../middleware/checkAuth.js");

//lấy thông tin tài khoản đang đăng nhập
router.get("/profile", checkAuth.checkAuthUser, userController.getProfile);

//đăng ký tài khoản customer
router.post("/register", userController.registerAsCustomer);

//đăng nhập tài khoản customer
router.post("/login", userController.loginAsCustomer);

//refresh token
router.get("/refreshToken", userController.refreshToken);

//Logout
router.delete("/logout", userController.logout);

//thay đổi mật khẩu tài khoản đang đăng nhập (customer)
router.patch(
  "/changePassword",
  checkAuth.checkAuthUser,
  userController.changePassword
);

//chỉnh sửa thông tin tài khoản đang đăng nhập
router.patch(
  "/updateProfile",
  checkAuth.checkAuthUser,
  userController.updateProfile
);

module.exports = router;
