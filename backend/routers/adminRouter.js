const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const checkAuth = require("../middleware/checkAuth.js");

//lấy tất cả thông tin user
router.get("/users", checkAuth.checkAuthAdmin, userController.getAllUser);

//lấy thông tin tài khoản đang đăng nhập
router.get("/profile", checkAuth.checkAuthAdmin, userController.getProfile);

//đăng ký tài khoản admin
router.post("/register", userController.registerAsAdmin);

//đăng nhập tài khoản admin
router.post("/login", userController.loginAsAdmin);

//refresh token
router.get("/refreshToken", userController.refreshToken);

//Logout
router.delete("/logout", userController.logout);

module.exports = router;
