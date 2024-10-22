const express = require("express");
const {
  authregister,
  authlogin,
  findMyProfile,
} = require("../controllers/registerUser");

const router = express.Router();

router.post("/auth-register", authregister);
router.post("/auth-login", authlogin);
router.post("/my-profile/:id", findMyProfile);

module.exports = router;
