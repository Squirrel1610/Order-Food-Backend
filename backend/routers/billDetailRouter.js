const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth.js");
const billDetailController = require("../controllers/billDetailController.js");

module.exports = router;
