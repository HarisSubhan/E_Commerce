const AsyncHandler = require("express-async-handler");
const User = require("../model/userModle");

const getCustomersRecords = AsyncHandler(async (req, res) => {
  const allCustomers = await User.find();
  res.send(allCustomers);
});

module.exports = {
  getCustomersRecords,
};
