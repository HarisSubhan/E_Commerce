const AsyncHandler = require("express-async-handler");
const addProduct = require("../model/AddProductModel");
const addCategory = require("../model/AddCategoryModel");
const fs = require("fs");
const path = require("path");
const sanitize = require("sanitize-filename"); // Import sanitize-filename

const adminAddProduct = AsyncHandler(async (req, res) => {
  console.log("Received product data:", req.body);

  const {
    image,
    title,
    pra,
    category,
    detail,
    description,
    date,
    price,
    gender,
    size,
    additionalinfo,
  } = req.body;

  // Check for missing fields
  if (
    !image ||
    !title ||
    !pra ||
    !category ||
    !detail ||
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
      // Check if the category exists
      const categoryData = await addCategory.findById(category);
      if (!categoryData) {
        res.status(400);
        throw new Error("Category not found");
      }

      // Sanitize the category name for the folder
      let sanitizedFolderName = sanitize(categoryData.categoryname);
      sanitizedFolderName = sanitizedFolderName.replace(/\s+/g, "_"); // Replace spaces with underscores
      sanitizedFolderName = sanitizedFolderName.trim(); // Trim leading/trailing spaces

      // Construct the folder path
      const folderPath = path.join(
        __dirname,
        "../uploads",
        sanitizedFolderName
      );

      // Create the folder if it doesn't exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      // Save the product
      const createAddProduct = await addProduct.create({
        image,
        title,
        pra,
        category,
        folder: sanitizedFolderName, // Use the sanitized folder name
        detail,
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

// Get all categories
const getAllCategorys = AsyncHandler(async (req, res) => {
  const allCategorys = await addCategory.find();
  res.send(allCategorys);
});

// Get all products
const getAllProducts = AsyncHandler(async (req, res) => {
  const allProducts = await addProduct.find().populate("category"); // Populate category if needed
  res.send(allProducts);
});

// Delete a category
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

// Delete a product
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

// Get product by ID
const getProductsByID = AsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await addProduct.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  adminAddProduct,
  adminAddCategory,
  getAllCategorys,
  getAllProducts,
  deleteCategory,
  deleteProduct,
  getProductsByID,
};
