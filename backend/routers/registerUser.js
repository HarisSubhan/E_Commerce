const express = require("express");
const { authregister, authlogin } = require("../controllers/registerUser");

const router = express.Router();

router.post("/auth-register", authregister);
router.post("/auth-login", authlogin);

module.exports = router;
