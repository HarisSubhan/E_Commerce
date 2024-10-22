const express = require("express");
const {
  authregister,
  authlogin,
  findMyProfile,
  authlogout,
} = require("../controllers/registerUser");

const router = express.Router();

router.post("/auth-register", authregister);
router.post("/auth-login", authlogin);
router.post("/auth-logout", authlogout);

router.post("/my-profile/:id", findMyProfile);

module.exports = router;
