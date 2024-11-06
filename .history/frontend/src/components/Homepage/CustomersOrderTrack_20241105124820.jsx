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
      <div className="p-3">
        <Row spacing={3}>
          <Col xl={6}>
            <Card>
              <Typography variant="h6">Track your order</Typography>
            </Card>
          </Col>
          <Col xl={6}>
            <Card>
              <div className="d-flex justify-content-between align-items-center ">
                <Typography variant="h6">Tracking Number</Typography>
                <Typography variant="h6">Panding</Typography>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
