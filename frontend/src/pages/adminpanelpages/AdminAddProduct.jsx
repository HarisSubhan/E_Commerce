import React, { useState } from "react";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Col, Row } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import InputField from "../../components/Adminproduct/InputField";
import { FormField } from "../../components/Adminproduct/FormField";
import ProductField from "../../components/Adminproduct/ProductField";
import axios from "axios";

const AdminAddProduct = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return; // Handle empty file selection

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => setPreviewUrl(e.target.result);
    setImage(file);
  };

  const handleClose = () => {
    setImage(null);
    setPreviewUrl(null); // Clear preview and state
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "la5xwjjh");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dl0wmamcy/image/upload",
        data
      );
      console.log(response?.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = async () => {
    const imageData = await uploadImage(image);
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
            </Col>
            <Col xl={6} lg={12}>
              <p>Title</p>
              <FormField
                image={image}
                setImage={setImage}
                handleClose={handleClose}
                uploadImage={uploadImage}
                handleImageChange={handleImageChange}
                setPreviewUrl={setPreviewUrl}
                previewUrl={previewUrl}
                handleAddProduct={handleAddProduct}
              />
            </Col>
            <Col xl={3} lg={12}>
              <p>Product Image</p>
              <ProductField previewUrl={previewUrl} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AdminAddProduct;
