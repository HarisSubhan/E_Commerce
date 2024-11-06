const AsyncHandler = require("express-async-handler");
const User = require("../model/userModle");

const getCustomersRecords = AsyncHandler(async (req, res) => {
  const allCustomers = await User.find();
  res.send(allCustomers);
});

const getCustomersProfile = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  const foundUser = await User.findById(id);
  if (!foundUser) {
    res.status(400);
    throw new Error("User Not Found");
  } else {
    res.send(foundUser);
  }
});

module.exports = {
  getCustomersRecords,
  getCustomersProfile,
};
