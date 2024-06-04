const mongoose = require("mongoose");

const addProductSchema = mongoose.Schema(
  {
    image: {
      type: "string",
      required: [true, "Plear Enter The Image"],
    },
    title: {
      type: "string",
      required: [true, "Plear Enter The Product Name"],
    },
    category: {
      type: "string",
      required: [true, "Plear Enter The Product Category"],
    },
    description: {
      type: "string",
      required: [true, "Plear Enter The Descripition"],
    },
    date: {
      type: "string",
      required: [true, "Plear Enter The Date"],
    },
    price: {
      type: "string",
      required: [true, "Plear Enter The Product Price"],
    },
    gender: {
      type: "string",
      required: [true, "Plear Enter The Gender"],
    },
    size: {
      type: "string",
      required: [true, "Plear Enter The Product Size"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("addProduct", addProductSchema);
