const mongoose = require("mongoose");

const addCategorySchema = mongoose.Schema(
  {
    categoryname: {
      type: String,
      required: true,
    },
    categorydescription: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AddCategory", addCategorySchema);
