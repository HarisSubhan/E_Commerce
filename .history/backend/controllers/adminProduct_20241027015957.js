const AsyncHandler = require("express-async-handler");
const addProduct = require("../model/AddProductModel");
const addCategory = require("../model/AddCategoryModel");

const adminAddProduct = AsyncHandler(async (req, res) => {
  console.log("Received product data:", req.body);
  const {
    image,
    title,
    tagline,
    category,
    detail,
    description,
    date,
    price,
    gender,
    size,
    additionalinfo,
  } = req.body;

  if (
    !image ||
    !title ||
    !tagline ||
    !detail ||
    !category ||
    !description ||
    !date ||
    !price ||
    !gender ||
    !size ||
    !additionalinfo
  ) {
    res.status(400);
    throw new Error("Enter The Relevant Field");
  } else {
    try {
      // Find the category by ID
      const categoryDoc = await addCategory.findById(category);

      if (!categoryDoc) {
        res.status(400);
        throw new Error("Category does not exist");
      }

      const createAddProduct = await addProduct.create({
        image,
        title,
        tagline,
        detail,
        category: categoryDoc._id,
        description,
        date,
        price,
        gender,
        size,
        additionalinfo,
      });
      res.send(createAddProduct);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
});

const adminAddCategory = AsyncHandler(async (req, res) => {
  const { categoryname, categorydescription } = req.body;

  if (!categoryname) {
    res.status(400);
    throw new Error("Enter a Category Name");
  }

  try {
    // Check if category already exists
    const existingCategory = await addCategory.findOne({ categoryname });
    if (existingCategory) {
      res.status(400);
      throw new Error("Category already exists");
    }

    // Create new category
    const createAddCategory = await addCategory.create({
      categoryname,
      categorydescription,
    });

    // Respond with the created category and a 201 status code
    res.status(201).json(createAddCategory);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send("Server Error"); // Send a generic server error response
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
