import React, { useEffect, useState } from "react";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Col, Row, Spinner } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import InputField from "../../components/Adminproduct/InputField";
import { FormAddProduct } from "../../components/Adminproduct/FormAddProduct";
import ProductField from "../../components/Adminproduct/ProductField";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  productReset,
  uploadAddProduct,
} from "../../features/addProduct/addProductSlice";
import toast from "react-hot-toast";

const AdminAddProduct = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for product addition

  const dispatch = useDispatch();

  const { productSuccess, productMessage, productError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (productSuccess) {
      toast.success(productMessage);
      resetForm(); // Reset form after successful submission
    }
    dispatch(productReset());
  }, [productSuccess, productMessage]);

  useEffect(() => {
    if (productError) {
      toast.error(message);
    }
    dispatch(productReset());
  }, [productError]);

  const [formFields, setFormFields] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    price: "",
    gender: "",
    size: "",
  });

  const { title, category, description, date, price, gender, size } =
    formFields;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("Selected file:", file); // Log file details for debugging

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => setPreviewUrl(e.target.result);
    setImage(file);
  };

  const handleClose = () => {
    setImage(null);
    setPreviewUrl(null);
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
      return response?.data.url;
    } catch (error) {
      setImageLoading(false);
      console.error(
        "Error uploading image:",
        error.response ? error.response.data : error.message
      );
      toast.error("Failed to upload image");
    }
  };

  const handleAddProduct = async () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const imageUrl = await uploadImage();
    if (!imageUrl) {
      return; // Exit if image upload failed
    }

    const productData = {
      title,
      category,
      description,
      date,
      price,
      gender,
      size,
      image: imageUrl,
    };

    try {
      setLoading(true); // Set loading state for product addition
      dispatch(uploadAddProduct(productData));
    } catch (error) {
      console.error("Error adding product:", error);
      setLoading(false);
      toast.error("Failed to add product");
    }
  };

  const resetForm = () => {
    setFormFields({
      title: "",
      category: "",
      description: "",
      date: "",
      price: "",
      gender: "",
      size: "",
    });
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <>
      <Row className="d-flex">
        <Col className="p-0 m-0" xl={2} lg={5}>
          <Sidenav />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={7}>
          <AppHeader />
          <FirstLayer />
          <Row className="p-4">
            <Col xl={3} lg={12}>
              <p>Upload Image</p>
              <InputField
                image={image}
                setImage={setImage}
                handleClose={handleClose}
                uploadImage={uploadImage}
                handleImageChange={handleImageChange}
                setPreviewUrl={setPreviewUrl}
                previewUrl={previewUrl}
              />
              {imageLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                ""
              )}
            </Col>
            <Col xl={6} lg={12}>
              <p>Title</p>
              <FormAddProduct
                formFields={formFields}
                setFormFields={setFormFields}
                handleAddProduct={handleAddProduct}
              />
            </Col>
            <Col xl={3} lg={12}>
              <p>Product Image</p>
              <ProductField
                previewUrl={previewUrl}
                formFields={formFields}
                setFormFields={setFormFields}
              />
            </Col>
          </Row>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </>
  );
};

export default AdminAddProduct;
