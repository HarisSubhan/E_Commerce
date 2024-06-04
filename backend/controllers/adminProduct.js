const AsyncHandler = require("express-async-handler");
const addProduct = require("../model/AddProductModel");
const adminAddProduct = AsyncHandler(async (req, res) => {
  const { image, title, category, description, date, price, gender, size } =
    req.body;

  if (
    !image ||
    !title ||
    !category ||
    !description ||
    !date ||
    !price ||
    !gender ||
    !size
  ) {
    res.status(400);
    throw new Error("Enter The Relavant Field");
  } else {
    try {
      const createAddProduct = await addProduct.create({
        image,
        title,
        category,
        description,
        date,
        price,
        gender,
        size,
      });
      res.send(createAddProduct);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = { adminAddProduct };
