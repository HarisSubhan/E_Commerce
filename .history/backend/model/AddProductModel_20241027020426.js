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
    tagline: {
      type: "string",
    },
    detail: {
      type: "string",
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
    date: {
      type: "string",
      required: [true, "Please Enter The Date"],
    },
    price: {
      type: "number",
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
    additionalinfo: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AddProduct", addProductSchema);
