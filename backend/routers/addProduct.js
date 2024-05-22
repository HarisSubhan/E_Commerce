const express = require("express");
const { adminAddProduct } = require("../controllers/adminAddProduct");
const router = express.Router();

router.post("/admin-add-product", adminAddProduct);

module.exports = router;
