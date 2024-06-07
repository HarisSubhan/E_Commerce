const express = require("express");
const {
  adminAddProduct,
  adminAddCategory,
  getAllCategorys,
  getAllProducts,
} = require("../controllers/adminProduct");

const router = express.Router();

router.post("/admin-add-product", adminAddProduct);
router.get("/get-products", getAllProducts);
router.post("/admin-add-category", adminAddCategory);
router.get("/get-categorys", getAllCategorys);

module.exports = router;
