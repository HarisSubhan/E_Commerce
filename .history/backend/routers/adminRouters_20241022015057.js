const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
  res.json({ msg: "Welcome to Admin Dashboard" });
});

module.exports = router;
