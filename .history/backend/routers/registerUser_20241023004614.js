const express = require("express");
const {
  authregister,
  authlogin,
  findMyProfile,
  authlogout,
} = require("../controllers/registerUser");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/auth-register", authMiddleware, authregister);
router.post("/auth-login", authMiddleware, authlogin);
router.get("/auth-logout", authMiddleware, authlogout);

router.post("/my-profile/:id", findMyProfile);

module.exports = router;
