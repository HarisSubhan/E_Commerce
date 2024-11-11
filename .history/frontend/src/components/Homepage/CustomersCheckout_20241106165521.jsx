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
      <div className="p-3 d-flex">
        <Row>
          <Col xl={5}>
            <Card className="p-3">
              <Typography variant="h4">Order Summary</Typography>
              <hr />
              <Table>
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
              </Table>
            </Card>
            <Card></Card>
          </Col>
          <Col xl={8}>
            <Card>
              <Typography variant="h4">Delivery Address</Typography>
              <hr />
              <div className="d-flex">
                <Form.Control placeholder="First Name"></Form.Control>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersCheckout;
