import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(false);
    setImagePreview(false);
    console.log(setClose);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL?.createObjectURL(file);
    setImagePreview(url);
    setImage(file);
    console.log(url);
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
      console.log(response);
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const addproduct = async () => {
    const imageData = await uploadImage(image);
  };

  return (
    <>
      <Row className="p-4 m-0">
        <Col xl={3} lg={4}>
          <p>Upload Image</p>
          <Card
            style={{ background: "#EEF0FC", height: "50%", cursor: "pointer" }}
            className=""
          >
            {imagePreview && (
              <div
                style={{ height: "" }}
                className="w-25  imagePreview position-absolute   "
              >
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
              <label style={{ cursor: "pointer" }} htmlFor="">
                Drag & Drop your files or{" "}
              </label>
              <span style={{ cursor: "pointer" }} className="">
                <u> Browse</u>
              </span>
              <input
                style={{ transform: "translate(-50%)", cursor: "pointer" }}
                className="drag position-absolute"
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </Card>
          {/* <div className="d-flex fs-5  gap-2 mt-3">
            <Card
              style={{ background: "#EEF0FC", cursor: "pointer" }}
              className=""
            >
              <div className="text-center position-relative">
                <label style={{ cursor: "pointer" }} htmlFor="">
                  Drag & Drop your files or{" "}
                </label>
                <span style={{ cursor: "pointer" }} className="">
                  <u> Browse</u>
                </span>
                <input
                  style={{ transform: "translate(-50%)" }}
                  className="drag position-absolute"
                  type="file"
                  onChange={handleChange}
                />
              </div>
              <img src={file} />
            </Card>
            <Card style={{ background: "#EEF0FC" }} className="">
              <div className="text-center  position-relative">
                <label style={{ cursor: "pointer" }} htmlFor="">
                  Drag & Drop your files or{" "}
                </label>
                <span style={{ cursor: "pointer" }} className="">
                  <u> Browse</u>
                </span>
                <input
                  style={{ transform: "translate(-50%)" }}
                  className="drag position-absolute"
                  type="file"
                  onChange={handleChange}
                />
              </div>
              <img src={file} />
            </Card>
          </div> */}
        </Col>
        <Col xl={6} lg={4}>
          <p>Title</p>
          <Card style={{ background: "#EEF0FC" }} className="p- border-0">
            {/* <label className="mt-3">Title</label> */}
            <Form.Control
              style={{ background: "#EEF0FC" }}
              placeholder="Title"
            />
            <label className="mt-3">Category</label>
            <Form.Control
              style={{ background: "#EEF0FC" }}
              placeholder="Category"
            />
            <label className="mt-3">Description</label>
            <Form.Control
              style={{ background: "#EEF0FC" }}
              placeholder="Description"
            />
            <div className="d-flex gap-3  ">
              <div className="product-data">
                <label className="mt-3">Product Date</label>
                <Form.Control
                  style={{ background: "#EEF0FC" }}
                  className=""
                  placeholder=""
                />
              </div>
              <div className="price">
                <label className="mt-3">Price</label>
                <Form.Control
                  style={{ background: "#EEF0FC" }}
                  placeholder="Price"
                />
              </div>
            </div>
            <label className="mt-3">For this product</label>
            <Form.Select
              style={{ background: "#EEF0FC" }}
              placeholder="Gender"
            />
            <label className="mt-3">Size</label>
            <Form.Select
              style={{ background: "#EEF0FC" }}
              placeholder="Gender"
            />
            <div className="button d-flex mt-4 gap-2">
              <Button
                onClick={addproduct}
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
          <div className="product-detail ">
            <div className="product-image">
              <p className="p-o m-0">Product Image</p>
              <img
                className="d-block mx-auto"
                width={300}
                src={imagePreview}
                alt=""
              />
            </div>
            <div className="product-title">
              <p style={{ color: "#475569" }} className="p-o m-0 fs-5">
                Product Title
              </p>
              <h4 className="p-o m-0">Mannat HD, Smart LED Fire TV</h4>
            </div>
            <div className="product-description mt-3">
              <p style={{ color: "#475569" }} className="p-o m-0 fs-5">
                Description
              </p>
              <p className="p-o m-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="product-pro-date mt-4">
              <p style={{ color: "#475569" }} className="p-o m-0 fs-5">
                Pro. Date
              </p>
              <h4 className="p-o m-0">02/05/2023</h4>
            </div>
            <div className="for-this-product mt-4">
              <p style={{ color: "#475569" }} className="p-o m-0 fs-5">
                For this product
              </p>
              <h4 className="p-o m-0">Other</h4>
            </div>
            <div className="product-size mt-4">
              <p style={{ color: "#475569" }} className="p-o m-0 fs-5">
                Size
              </p>
              <h4 className="p-o m-0">SM, MD, LG, XL</h4>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddProduct;
