const AsyncHandler = require("express-async-handler");
const addProduct = require("../model/AddProductModel");
const addCategory = require("../model/AddCategoryModel");

const adminAddProduct = AsyncHandler(async (req, res) => {
  const {
    image,
    title,
    paragraph,
    detail,
    category,
    description,
    additionalinfo,
    date,
    price,
    gender,
    size,
  } = req.body;

  // Validate required fields
  if (
    !image ||
    !title ||
    !detail ||
    !category ||
    !description ||
    !date ||
    !price ||
    !gender ||
    !size
  ) {
    res.status(400);
    throw new Error("Please fill in all required fields.");
  }

  try {
    // Create the product
    const createAddProduct = await addProduct.create({
      image,
      title,
      paragraph,
      detail,
      category,
      description,
      additionalinfo,
      date,
      price,
      gender,
      size,
    });
    res.status(201).json(createAddProduct); // Send back the created product with a 201 status
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error, please try again." }); // Send a server error response
  }
});
const adminAddCategory = AsyncHandler(async (req, res) => {
  const { categoryname, categorydescription } = req.body;

  if (!categoryname) {
    res.status(400);
    throw new Error("Enter a Category Name");
  } else {
    try {
      const createAddCategory = await addCategory.create({
        categoryname,
        categorydescription,
      });
      res.send(createAddCategory);
    } catch (error) {
      console.log(error);
    }
  }
});

const getAllCategorys = AsyncHandler(async (req, res) => {
  const allCategorys = await addCategory.find();
  res.send(allCategorys);
});
const getAllProducts = AsyncHandler(async (req, res) => {
  const allProducts = await addProduct.find();
  res.send(allProducts);
});

const deleteCategory = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const category = await addCategory.findByIdAndDelete(id);
    if (!category) {
      res.status(404);
      throw new Error("Category not found");
    }
    res.send({ message: "Category removed" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

const deleteProduct = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await addProduct.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.send({ message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = {
  adminAddProduct,
  adminAddCategory,
  getAllCategorys,
  getAllProducts,
  deleteCategory,
  deleteProduct,
};
