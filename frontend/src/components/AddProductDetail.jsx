import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import AddProduct from "./AddProduct";

const AddProductDetail = () => {
  const addproductS = async () => {
    const imageData = await uploadImage(image);
  };
  return (
    <>
      <p>Title</p>
      <Card style={{ background: "#EEF0FC" }} className="p- border-0">
        {/* <label className="mt-3">Title</label> */}
        <Form.Control style={{ background: "#EEF0FC" }} placeholder="Title" />
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
        <Form.Select style={{ background: "#EEF0FC" }} placeholder="Gender" />
        <label className="mt-3">Size</label>
        <Form.Select style={{ background: "#EEF0FC" }} placeholder="Gender" />
        <div className="button d-flex mt-4 gap-2">
          <Button
            onClick={addproductS}
            style={{ background: "#49309C", color: "white" }}
          >
            Add Product
          </Button>
          <Button style={{ background: "transparent", color: "#49309C" }}>
            Save Product
          </Button>
        </div>
      </Card>
    </>
  );
};

export default AddProductDetail;
