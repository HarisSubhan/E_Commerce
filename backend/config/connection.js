const mongoose = require("mongoose");

const connectedDB = async () => {
  await mongoose.connect(process.env.Mongo_URL);
  console.log(`DataBase Connected :: ${mongoose.connection.host.bgCyan}`);
};

module.exports = connectedDB;
