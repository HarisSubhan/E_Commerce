import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

const CustomersOrderTrack = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <Row>
          <Col xl={6}>
            <Card>
              <Typography variant="h6">Track your order</Typography>
            </Card>
          </Col>
          <Col xl={6}></Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
