import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const FormAddProduct = ({
  handleAddProduct,
  formFields,
  setFormFields,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="p-3">
        <div>
          <Form.Control
            onChange={handleChange}
            value={formFields.title}
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="mt-3">
          <label>All Category</label>
          <Form.Select
            onChange={handleChange}
            value={formFields.category}
            name="category"
          >
            <option>All Category</option>
            <option>Electronic</option>
            <option>Mobile</option>
            <option>Clothes</option>
          </Form.Select>
        </div>
        <div className="mt-3">
          <label>Description</label>
          <Form.Control
            onChange={handleChange}
            value={formFields.description}
            name="description"
            placeholder="Description"
          />
        </div>
        <div className="d-flex mt-3">
          <div className="w-100">
            <label>Product Date</label>
            <Form.Control
              onChange={handleChange}
              value={formFields.date}
              name="date"
              placeholder="Product Date"
            />
          </div>
          <div className="w-100">
            <label>Price</label>
            <Form.Control
              onChange={handleChange}
              value={formFields.price}
              name="price"
              placeholder="Price"
            />
          </div>
        </div>
        <div className="mt-3">
          <label>Gender</label>
          <Form.Select
            onChange={handleChange}
            value={formFields.gender}
            name="gender"
          >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Children</option>
            <option>Other</option>
          </Form.Select>
        </div>
        <div className="mt-3">
          <label>Size</label>
          <Form.Select
            onChange={handleChange}
            value={formFields.size}
            name="size"
          >
            <option>Size</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
            <option>XXL</option>
          </Form.Select>
        </div>
        <div className="d-flex gap-3 mt-3">
          <Button onClick={handleAddProduct} variant="contained">
            Add Product
          </Button>
          <Button className="border">Save Product</Button>
        </div>
      </div>
    </>
  );
};
