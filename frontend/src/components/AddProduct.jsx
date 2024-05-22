import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, reset } from "../features/addProduct/addProductSlice";
import toast from "react-hot-toast";

const AddProduct = () => {
  const dispatch = useDispatch();

  const { addProductError, message } = useSelector((state) => state.addProduct);

  useEffect(() => {
    if (addProductError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [addProductError, message, dispatch]);

  const [formFields, setFormFields] = useState({
    title: "",
    category: "",
    description: "",
    productDate: "",
    price: "",
    forThisProduct: "",
    size: "",
  });

  const {
    title,
    category,
    description,
    productDate,
    price,
    forThisProduct,
    size,
  } = formFields;

  const [productDetails, setProductDetails] = useState({
    productTitle: "",
    productCategory: "",
    productDescription: "",
    productDate: "",
    productPrice: "",
    forThisProduct: "",
    productSize: "",
  });

  const handleChange = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));

    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
    console.log(setProductDetails);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      title,
      category,
      description,
      productDate,
      price,
      forThisProduct,
      size,
    };
    dispatch(addProduct(data));
  };

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(false);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImagePreview(url);
    setImage(file);
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "la5xwjjh");
    try {
      setImageLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dl0wmamcy/image/upload",
        data
      );
      setImageLoading(false);
      return response.data.url;
    } catch (error) {
      console.log(error);
      setImageLoading(false);
    }
  };

  const addProductHandler = async () => {
    const imageUrl = await uploadImage();
    const data = {
      ...formFields,
      image: imageUrl,
    };
    dispatch(addProduct(data));
  };

  return (
    <Row className="p-4 m-0">
      <Col xl={3} lg={4}>
        <p>Upload Image</p>
        <Card
          style={{ background: "#EEF0FC", height: "50%", cursor: "pointer" }}
        >
          {imagePreview && (
            <div className="w-25 imagePreview position-absolute">
              {close && (
                <IoCloseCircleOutline size={20} onClick={handleClose} />
              )}
              <img
                className="rounded object-fit-fill"
                width={450}
                height={180}
                src={imagePreview}
                alt=""
              />
            </div>
          )}
          <div className="text-center mt-5 position-relative">
            <label style={{ cursor: "pointer" }} htmlFor="fileInput">
              Drag & Drop your files or <u>Browse</u>
            </label>
            <input
              id="fileInput"
              style={{ transform: "translate(-50%)", cursor: "pointer" }}
              className="drag position-absolute"
              type="file"
              onChange={handleImageChange}
            />
          </div>
        </Card>
      </Col>
      <Col xl={6} lg={4}>
        <p>Title</p>
        <Card style={{ background: "#EEF0FC" }} className="p-3 border-0">
          <Form.Control
            onChange={handleChange}
            name="title"
            value={title}
            style={{ background: "#EEF0FC" }}
            placeholder="Title"
          />
          <label className="mt-3">Category</label>
          <Form.Select
            onChange={handleChange}
            name="category"
            value={category}
            style={{ background: "#EEF0FC" }}
            placeholder="Category"
          >
            <option value="">All Category</option>
            <option value="option1">Electronic</option>
            <option value="option2">Clothes</option>
            <option value="option2">Footwear</option>
            <option value="option2">Other</option>
          </Form.Select>

          <label className="mt-3">Description</label>
          <Form.Control
            onChange={handleChange}
            name="description"
            value={description}
            style={{ background: "#EEF0FC" }}
            placeholder="Description"
          />
          <div className="d-flex gap-3">
            <div className="product-data">
              <label className="mt-3">Product Date</label>
              <Form.Control
                onChange={handleChange}
                name="productDate"
                value={productDate}
                style={{ background: "#EEF0FC" }}
              />
            </div>
            <div className="price">
              <label className="mt-3">Price</label>
              <Form.Control
                onChange={handleChange}
                name="price"
                value={price}
                style={{ background: "#EEF0FC" }}
                placeholder="Price"
              />
            </div>
          </div>
          <label className="mt-3">For this product</label>
          <Form.Select
            onChange={handleChange}
            name="forThisProduct"
            value={forThisProduct}
            style={{ background: "#EEF0FC" }}
          >
            <option value="">Select an option</option>
            <option value="option1">Male</option>
            <option value="option2">Female</option>
            <option value="option2">Children</option>
            <option value="option2">Other</option>
          </Form.Select>
          <label className="mt-3">Size</label>
          <Form.Select
            onChange={handleChange}
            name="size"
            value={size}
            style={{ background: "#EEF0FC" }}
          >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="large">X Large</option>
            <option value="large">XX Large</option>
          </Form.Select>
          <div className="button d-flex mt-4 gap-2">
            <Button
              onClick={handleClick}
              style={{ background: "#49309C", color: "white" }}
            >
              Add Product
            </Button>
            <Button style={{ background: "transparent", color: "#49309C" }}>
              Save Product
            </Button>
          </div>
        </Card>
      </Col>
      <Col xl={3} lg={4}>
        <div className="product-detail">
          <div className="product-image">
            <p className="p-0 m-0">Product Image</p>
            <img
              className="d-block mx-auto"
              width={300}
              src={imagePreview}
              alt=""
            />
          </div>
          <div className="product-title">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              Product Title
            </p>
            <h4 className="p-0 m-0">{productDetails.productTitle}</h4>
          </div>
          <div className="product-Category mt-3">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              Category
            </p>
            <p className="p-0 m-0">{productDetails.productCategory}</p>
          </div>
          <div className="product-description mt-3">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              Description
            </p>
            <p className="p-0 m-0">{productDetails.productDescription}</p>
          </div>
          <div className="product-date mt-3">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              Product Date
            </p>
            <p className="p-0 m-0">{productDetails.productDate}</p>
          </div>
          <div className="product-price mt-3">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              Product Price
            </p>
            <p className="p-0 m-0">{productDetails.productPrice}</p>
          </div>
          <div className="forThisProduct mt-3">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              For This Product
            </p>
            <p className="p-0 m-0">{productDetails.forThisProduct}</p>
          </div>
          <div className="product-Size mt-3">
            <p style={{ color: "#475569" }} className="p-0 m-0 fs-5">
              Product Size
            </p>
            <p className="p-0 m-0">{productDetails.productSize}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AddProduct;
