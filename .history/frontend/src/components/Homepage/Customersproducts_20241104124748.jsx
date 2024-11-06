import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Col, Container, Row } from "react-bootstrap";

export const Customersproducts = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Row>
          <Col xl={4}></Col>
          <Col xl={8}></Col>
        </Row>
      </Container>
    </>
  );
};
