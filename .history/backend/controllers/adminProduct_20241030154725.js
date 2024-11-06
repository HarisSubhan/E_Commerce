const AsyncHandler = require("express-async-handler");
const addProduct = require("../model/AddProductModel");
const addCategory = require("../model/AddCategoryModel");

const adminAddProduct = AsyncHandler(async (req, res) => {
  console.log("Received product data:", req.body);
  const {
    image,
    title,
    pra,
    category,
    description,
    date,
    price,
    gender,
    size,
  } = req.body;

  if (
    !image ||
    !title ||
    !pra ||
    !category ||
    !description ||
    !date ||
    !price ||
    !gender ||
    !size
  ) {
    res.status(400);
    throw new Error("Enter The Relevant Field");
  } else {
    try {
      // Find the category by name
      let categoryDoc = await addCategory.findOne({ categoryname: category });

      if (!categoryDoc) {
        // If category doesn't exist, create it
        const newCategory = await addCategory.create({
          categoryname: category,
        });
        categoryDoc = newCategory; // Update categoryDoc with the newly created category
      }

      const createAddProduct = await addProduct.create({
        image,
        title,
        pra,
        category: categoryDoc._id, // Use the found category's _id
        description,
        date,
        price,
        gender,
        size,
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
    const existingCategory = await addCategory.findOne({ categoryname });
    if (existingCategory) {
      res.status(400);
      throw new Error("Category already exists");
    }

    const createAddCategory = await addCategory.create({
      categoryname,
      categorydescription,
    });

    res.status(201).json(createAddCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
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
