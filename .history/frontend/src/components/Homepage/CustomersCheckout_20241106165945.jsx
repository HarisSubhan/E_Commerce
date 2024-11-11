import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Col, Form, Row, Table } from "react-bootstrap";
import { Typography } from "@mui/material";

const CustomersCheckout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="p-3">
        <Row>
          <Col xl={5} lg={6} md={12} className="mb-4">
            <Card className="p-3">
              <Typography variant="h4" gutterBottom>
                Order Summary
              </Typography>
              <hr />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>2</td>
                    <td>$20.00</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col xl={7} lg={6} md={12} className="mb-4">
            <Card className="p-3">
              <Typography variant="h4" gutterBottom>
                Delivery Address
              </Typography>
              <hr />
              <Form>
                <div className="d-flex">
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last Name" />
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Address" />
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersCheckout;
