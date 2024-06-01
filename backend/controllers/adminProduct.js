const AsyncHandler = require("express-async-handler");

const adminAddProduct = AsyncHandler(async (req, res) => {
  const { image, title, category, description, date, price, gender, size } =
    req.body;
});
