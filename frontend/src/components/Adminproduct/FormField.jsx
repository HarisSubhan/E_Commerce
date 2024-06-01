import { Button, Select } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const FormField = () => {
  return (
    <>
      <div className="FormField p-3  ">
        <div>
          <Form.Control className="" placeholder="Title" />
        </div>
        <div className="mt-3">
          <label>All Category</label>
          <Form.Select>
            <option>All Category</option>
            <option>Electronic</option>
            <option>Mobile</option>
            <option>Clothes</option>
          </Form.Select>
        </div>
        <div className="mt-3">
          <label>Description</label>
          <Form.Control placeholder="Description" />
        </div>
        <div className="d-flex mt-3">
          <div className="w-100">
            <label>Product Date</label>
            <Form.Control placeholder="Product Date" />
          </div>
          <div className="w-100">
            <label>Price</label>
            <Form.Control placeholder="Price" />
          </div>
        </div>
        <div className="mt-3">
          <label>Gender</label>
          <Form.Select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Children</option>
            <option>Other</option>
          </Form.Select>
        </div>
        <div className="mt-3">
          <label>Size</label>
          <Form.Select>
            <option>Size</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
            <option>XXL</option>
          </Form.Select>
        </div>
        <div className="d-flex gap-3 mt-3">
          <Button variant="contained">Add Product</Button>
          <Button className="border">Save Product</Button>
        </div>
      </div>
    </>
  );
};
