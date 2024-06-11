const express = require("express");
const {
  adminAddProduct,
  adminAddCategory,
  getAllCategorys,
  getAllProducts,
  deleteCategory,
  deleteProduct,
} = require("../controllers/adminProduct");

const router = express.Router();

router.post("/admin-add-product", adminAddProduct);
router.get("/get-products", getAllProducts);
router.delete("/delete-product/:id", deleteProduct);
router.post("/admin-add-category", adminAddCategory);
router.get("/get-categorys", getAllCategorys);
router.delete("/delete-category/:id", deleteCategory);

module.exports = router;
