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
                    <td>Product 2</td>
                    <td>2</td>
                    <td>$20.00</td>
                  </tr>
                  <tr>
                    <td>Product 3</td>
                    <td>2</td>
                    <td>$20.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>2</td>
                    <td>$20.00</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            <Card
              className="p-4 mt-3"
              style={{ backgroundColor: "#1c1c3c", color: "#fff" }}
            >
              <Row className="mb-3">
                <Col>Subtotal</Col>
                <Col className="text-end">$207.00</Col>
              </Row>
              <Row className="mb-3">
                <Col>Shipping Charge</Col>
                <Col className="text-end">$5.00</Col>
              </Row>
              <Row className="mb-3">
                <Col>Promo Code</Col>
                <Col className="text-end">-$10.00</Col>
              </Row>
              <hr style={{ borderColor: "#444" }} />
              <Row className="mb-3">
                <Col style={{ fontWeight: "bold" }}>Total</Col>
                <Col className="text-end" style={{ fontWeight: "bold" }}>
                  $202.00
                </Col>
              </Row>
              <div className="d-flex justify-content-between mt-4">
                <Button variant="primary" className="me-2">
                  Continue shopping
                </Button>
                <Button variant="secondary">Back to cart</Button>
              </div>
              <p className="mt-3" style={{ fontSize: "0.9rem", color: "#bbb" }}>
                <strong>Note:</strong> It is a long established fact that a
                reader will be distracted by the readable content of a page when
                looking at its layout.
              </p>
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
            <Row>
              <Col xl={6}>
                <Card
                  className="p-4 mb-3 mt-3"
                  style={{ backgroundColor: "#f8f9fa", border: "none" }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://mannatthemes.com/robotech/default/assets/images/logos/card-2.png"
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <div>
                      <h6 className="mb-0">cardType</h6>
                      <small className="text-muted">
                        Last time used: lastUsed
                      </small>
                    </div>
                  </div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name of card:</Form.Label>
                      <Form.Control placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Card No:</Form.Label>
                      <Form.Control placeholder="---- ---- ---- ----" />
                    </Form.Group>
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Expiry Month</Form.Label>
                        <Form.Select>
                          <option>-- select --</option>
                          {/* Add month options */}
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Label>Expiry Year</Form.Label>
                        <Form.Select>
                          <option>-- select --</option>
                          {/* Add year options */}
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control placeholder="CVV" />
                      </Col>
                    </Row>
                    <Button variant="primary" className="w-100">
                      Confirm payment $202.00
                    </Button>
                  </Form>
                </Card>
              </Col>
              <Col xl={6}>
                <Card
                  className="p-4 mb-3 mt-3"
                  style={{ backgroundColor: "#f8f9fa", border: "none" }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://mannatthemes.com/robotech/default/assets/images/logos/card-1.png"
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <div>
                      <h6 className="mb-0">cardType</h6>
                      <small className="text-muted">
                        Last time used: lastUsed
                      </small>
                    </div>
                  </div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name of card:</Form.Label>
                      <Form.Control placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Card No:</Form.Label>
                      <Form.Control placeholder="---- ---- ---- ----" />
                    </Form.Group>
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Expiry Month</Form.Label>
                        <Form.Select>
                          <option>-- select --</option>
                          {/* Add month options */}
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Label>Expiry Year</Form.Label>
                        <Form.Select>
                          <option>-- select --</option>
                          {/* Add year options */}
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control placeholder="CVV" />
                      </Col>
                    </Row>
                    <Button variant="primary" className="w-100">
                      Confirm payment $202.00
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersCheckout;
