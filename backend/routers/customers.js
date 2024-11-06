const express = require("express");
const {
  getCustomersRecords,
  getCustomersProfile,
} = require("../controllers/customers");

const router = express.Router();

router.get("/get-customers-records", getCustomersRecords);
router.get("/customers-profile/:id", getCustomersProfile);

module.exports = router;
