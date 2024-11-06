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
    paragraph: {
      type: String,
    },
    detail: {
      type: String,
      required: [true, "Please Enter The Product Detail"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddCategory",
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter The Description"],
    },
    additionalinfo: {
      type: String,
    },
    date: {
      type: String,
      required: [true, "Please Enter The Date"],
    },
    price: {
      type: Number, // Changed to Number
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
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AddProduct", addProductSchema);
