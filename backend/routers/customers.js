const express = require("express");
const { getCustomersRecords } = require("../controllers/customers");

const router = express.Router();

router.get("/get-customers-records", getCustomersRecords);

module.exports = router;
