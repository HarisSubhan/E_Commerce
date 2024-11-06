import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Col, Row } from "react-bootstrap";

const CustomersOrderTrack = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <Row>
          <Col xl={6}></Col>
          <Col xl={6}></Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
