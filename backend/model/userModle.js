const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: "string",
      required: [true, "Plear Enter The User Name"],
    },
    useremail: {
      type: "string",
      required: [true, "Plear Enter The User Name"],
    },
    password: {
      type: "string",
      default: null,
    },
    mobilenumber: {
      type: "string",
      required: [true, "Plear Enter The User Name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
