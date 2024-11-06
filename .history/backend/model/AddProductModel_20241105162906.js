const mongoose = require("mongoose");

const addProductSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please Enter The Image"],
    },
    title: {
      type: String,
      required: [true, "Please Enter The Product Name"],
    },
    pra: {
      type: String,
      required: [true, "Please Enter The Product Price Range"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddCategory",
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: [true, "Please Enter The Product Detail"],
    },
    description: {
      type: String,
      required: [true, "Please Enter The Description"],
    },
    date: {
      type: String,
      required: [true, "Please Enter The Date"],
    },
    price: {
      type: String,
      required: [true, "Please Enter The Product Price"],
    },
    gender: {
      type: String,
      required: [true, "Please Enter The Gender"],
    },
    size: {
      type: String,
      required: [true, "Please Enter The Product Size"],
    },
    additionalinfo: {
      type: String,
      required: [true, "Please Enter The Additional Information"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AddProduct", addProductSchema);
