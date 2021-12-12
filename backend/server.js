const express = require("express");
const app = express();
const port = 5000;

const adminRouter = require("./routers/adminRouter.js");
const customerRouter = require("./routers/customerRouter.js");
const categoryRouter = require("./routers/categoryRouter.js");
const productRouter = require("./routers/productRouter.js");
const upload = require("./routers/upload.js");
const cartRouter = require("./routers/cartRouter.js");
const addressRouter = require("./routers/addressRouter.js");
const appInfoRouter = require("./routers/appInfoRouter.js");

const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  return res.send(healthcheck);
});

//cổng admin
app.use("/admin/", adminRouter);

//cổng customer
app.use("/customer/", customerRouter);

//cổng category
app.use("/category/", categoryRouter);

//cổng product
app.use("/product/", productRouter);

//cổng cloudinary
app.use("/cloud/", upload);

//cổng cart
app.use("/cart/", cartRouter);

//cổng address
app.use("/address/", addressRouter);

//cổng appInfo
app.use("/appInfo/", appInfoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
