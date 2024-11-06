const mongoose = require("mongoose");

const addProductSchema = mongoose.Schema(
  {
    image: {
      type: "string",
      required: [true, "Please Enter The Image"],
    },
    title: {
      type: "string",
      required: [true, "Please Enter The Product Name"],
    },
    paragraph: {
      type: "string",
    },
    detail: {
      type: "string",
      required: [true, "Please Enter The Product Detail"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddCategory",
      required: true,
    },
    description: {
      type: "string",
      required: [true, "Please Enter The Descripition"],
    },
    additionalinfo: {
      type: "string",
    },
    date: {
      type: "string",
      required: [true, "Please Enter The Date"],
    },
    price: {
      type: "string",
      required: [true, "Please Enter The Product Price"],
    },
    gender: {
      type: "string",
      required: [true, "Please Enter The Gender"],
    },
    size: {
      type: "string",
      required: [true, "Please Enter The Product Size"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AddProduct", addProductSchema);
