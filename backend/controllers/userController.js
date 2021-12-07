const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
module.exports = {
  //đăng ký tài khoản với role admin
  registerAsAdmin(req, res) {
    const { email, username, hoten, password, ngaysinh, gioitinh, dienthoai } =
      req.body;
    if (password.length < 6)
      return res.status(400).json({
        status: 400,
        message: "Password is at least 6 characters long.",
      });
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = {
      email: email,
      username: username,
      hoten: hoten,
      password: hashPassword,
      ngaysinh: new Date(ngaysinh),
      gioitinh: gioitinh,
      dienthoai: dienthoai,
      admin: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    userModel
      .register(email, user)
      .then((msg) => {
        return res.status(200).json(msg);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to register",
          data: err,
        });
      });
  },

  //đăng ký tài khoản với role customer
  registerAsCustomer(req, res) {
    const { email, username, hoten, password, ngaysinh, gioitinh, dienthoai } =
      req.body;
    if (password.length < 6)
      return res.status(400).json({
        status: 400,
        message: "Password is at least 6 characters long.",
      });
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = {
      email: email,
      username: username,
      hoten: hoten,
      password: hashPassword,
      ngaysinh: new Date(ngaysinh),
      gioitinh: gioitinh,
      dienthoai: dienthoai,
      admin: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    userModel
      .register(email, user)
      .then((msg) => {
        return res.status(200).json(msg);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to register",
          data: err,
        });
      });
  },

  //đăng nhập tài khoản admin
  loginAsAdmin(req, res) {
    const { email, password } = req.body;
    userModel
      .loginAdmin(email, password)
      .then((data) => {
        res.cookie("refreshToken", data.refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to login",
          data: err,
        });
      });
  },

  //đăng nhập tài khoản customer
  loginAsCustomer(req, res) {
    const { email, password } = req.body;
    userModel
      .loginCustomer(email, password)
      .then((data) => {
        res.cookie("refreshToken", data.refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json(data);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to login",
          data: err,
        });
      });
  },

  //refresh token
  refreshToken(req, res) {
    //res.json(req.cookies.refreshToken)
    const token = req.cookies.refreshToken;
    userModel
      .refreshToken(token)
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to refresh token",
        });
      });
  },

  //logout
  logout(req, res) {
    //res.json(req.cookies.refreshToken)
    const token = req.cookies.refreshToken;
    userModel
      .logout(token)
      .then((result) => {
        res.clearCookie("refreshToken");
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Logout failed",
        });
      });
  },

  //Lấy thông tin tài khoản đang đăng nhập
  getProfile(req, res) {
    const userId = req.userData.id;
    userModel
      .getProfile(userId)
      .then((profile) => {
        return res.status(200).json({
          status: 200,
          message: "Get profile successfully",
          data: profile,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get profile",
          data: error,
        });
      });
  },

  //lấy toàn bộ người dùng với role admin
  getAllUser(req, res) {
    userModel
      .getAllUsers()
      .then((users) => {
        return res.status(200).json({
          status: 200,
          message: "Get all users successfully",
          data: users,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          message: "Failed to get all users",
          data: err,
        });
      });
  },
};
