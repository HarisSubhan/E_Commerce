import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const AddProduct = () => {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <Row className="p-4">
        <Col xl={3} lg={4}>
          <Card className="p-5">
            <p>Upload Image</p>
            <input type="file" onChange={handleChange} />,
            <img src={file} />
          </Card>
          <div className="d-flex">
            <Card className="p-5">
              <p>Upload Image</p>
              <input type="file" onChange={handleChange} />,
              <img src={file} />
            </Card>
            <Card className="p-5">
              <p>Upload Image</p>
              <input type="file" onChange={handleChange} />,
              <img src={file} />
            </Card>
          </div>
        </Col>
        <Col xl={6} lg={4}>
          <label htmlFor="">Title</label>
          <Form.Control placeholder="Title" />
          <label htmlFor="">Category</label>
          <Form.Control placeholder="Category" />
          <label htmlFor="">Description</label>
          <Form.Control placeholder="Description" />
          <div className="d-flex">
            <label htmlFor="">Product Date</label>
            <Form.Control placeholder="Product Date" />
            <label htmlFor="">Price</label>
            <Form.Control placeholder="Price" />
          </div>
        </Col>
        <Col xl={3} lg={4}></Col>
      </Row>
    </>
  );
};

export default AddProduct;
