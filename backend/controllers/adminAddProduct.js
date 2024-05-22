const AsyncHandler = require("express-async-handler");

const addProduct = require("../model/AddProductModel.js");

const adminAddProduct = AsyncHandler(async (req, res) => {
  const {
    title,
    category,
    description,
    productDate,
    price,
    forThisProduct,
    size,
    // image,
  } = req.body;

  if (
    !title ||
    !category ||
    !description ||
    !productDate ||
    !price
    // !forThisProduct ||
    // !size
  ) {
    res.status(400);
    throw new Error("Enter The Relevant Field");
  } else {
    try {
      const newAddProduct = await addProduct.create({
        title,
        category,
        description,
        productDate,
        price,
        forThisProduct,
        size,
        // image,
      });
      console.log(newAddProduct);
      res.send(newAddProduct);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = {
  adminAddProduct,
};
