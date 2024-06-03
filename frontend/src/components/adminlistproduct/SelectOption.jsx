import { Button, TextField } from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const SelectOption = () => {
  return (
    <>
      <Row className="d-flex p-3 ">
        <Col md={6} className="d-flex gap-3 ">
          <Form.Select className=" p-2 w-120">
            <option>All Category</option>
            <option>Electronic</option>
            <option>Mobile</option>
            <option>Clothes</option>
          </Form.Select>
          <Form.Select className=" p-2 w-120">
            <option>Vendor</option>
            <option>Vendor-2</option>
            <option>Vendor-3</option>
          </Form.Select>
        </Col>
        <Col md={6} className="d-flex gap-3 justify-content-center">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
          <Button className="p-3" variant="contained">
            Add Product
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SelectOption;
