import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
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
                  <tr>
                    <td>Product 1</td>
                    <td>2</td>
                    <td>$20.00</td>
                  </tr>
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
            <Card className="p-4">
              <h5 className="mb-4">Delivery Address</h5>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="First name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Last name"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="deliveryAddress">
                      <Form.Label>Delivery Address*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group controlId="city">
                      <Form.Label>City*</Form.Label>
                      <Form.Select required>
                        <option>-- select --</option>
                        {/* Add more city options here */}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="state">
                      <Form.Label>State*</Form.Label>
                      <Form.Select required>
                        <option>-- select --</option>
                        {/* Add more state options here */}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="country">
                      <Form.Label>Country*</Form.Label>
                      <Form.Select required>
                        <option>-- select --</option>
                        {/* Add more country options here */}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="zipCode">
                      <Form.Label>Zip Code*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Zip code"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="emailAddress">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="mobileNo">
                      <Form.Label>Mobile No*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mobile no"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="confirmAddress">
                  <Form.Check
                    type="checkbox"
                    label="Confirm Shipping Address"
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Button variant="primary" className="me-2">
                    Save
                  </Button>
                  <Button variant="danger">Cancel</Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersCheckout;
