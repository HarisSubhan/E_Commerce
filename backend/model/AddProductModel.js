const mongoose = require("mongoose");

const addProductSchema = mongoose.Schema(
  {
    title: {
      type: "string",
      required: [true, "Plear Enter The Title"],
    },
    category: {
      type: "string",
      required: [true, "Plese Select The Category"],
    },
    description: {
      type: "string",
      required: [true, "Plear Enter The description"],
    },
    productDate: {
      type: "string",
      required: [true, "Plear Enter The Date"],
    },
    price: {
      type: "string",
      required: [true, "Plear Enter The Price"],
    },
    forThisProduct: {
      type: "string",
      // required: [true, "Select The Gender"],
    },
    size: {
      type: "string",
      // required: [true, "Plear Enter The Size"],
    },
    // image: {
    //   type: "string",
    //   required: [true, "Selet The Image"],
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("addProduct", addProductSchema);
