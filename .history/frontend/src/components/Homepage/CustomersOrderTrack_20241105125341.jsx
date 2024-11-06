import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Box, Input, Typography } from "@mui/material";

const CustomersOrderTrack = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="p-3">
        <Row spacing={3}>
          <Col xl={6}>
            <Card className="p-3">
              <Typography variant="h6">Track your order</Typography>
              <div className="d-flex gap-3 align-items-center ">
                <Typography variant="p">Last track order</Typography>
                <Button variant="">02 Dec 2023</Button>
              </div>
              <hr />
              <Typography variant="h6">Your Tracking Number</Typography>
              <Input
                className="border"
                type="search"
                placeholder="Tracking number"
              ></Input>
            </Card>
          </Col>
          <Col xl={6}>
            <Card>
              <div className="d-flex justify-content-between align-items-center ">
                <Typography variant="h6">Tracking Number</Typography>
                <Typography variant="h6">Panding</Typography>
              </div>
              <Typography variant="h6">GP23651456RR</Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  className="logo"
                  src="https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png"
                  alt="Logo"
                  style={{ height: "40px", marginRight: "16px" }}
                />
                <img
                  className="logo"
                  src="https://e7.pngegg.com/pngimages/480/581/png-clipart-logo-e-commerce-digital-marketing-brand-trade-ecommerce-text-service.png"
                  alt="Logo"
                  style={{ height: "40px", marginRight: "16px" }}
                />
              </Box>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
