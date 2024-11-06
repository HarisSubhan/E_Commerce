import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

export const Customersproducts = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Row>
          <Col xl={4}>
            <Card>
              <Typography variant="h3">Filters</Typography>
              <hr />
              <Typography variant="h5">Categories</Typography>
            </Card>
          </Col>
          <Col xl={8}></Col>
        </Row>
      </Container>
    </>
  );
};
