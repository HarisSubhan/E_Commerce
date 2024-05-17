import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <Row className="p-4 m-0">
        <Col xl={3} lg={4}>
          <p>Upload Image</p>
          <Card
            style={{ background: "#EEF0FC", height: "30%", cursor: "pointer" }}
            className=""
          >
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
                onChange={handleChange}
              />
            </div>
            <img src={file} />
          </Card>
          <div className="d-flex fs-5  gap-2 mt-3">
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
          </div>
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
              <Button style={{ background: "#49309C", color: "white" }}>
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
                src="https://mannatthemes.com/robotech/default/assets/images/products/pro-3.png"
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
