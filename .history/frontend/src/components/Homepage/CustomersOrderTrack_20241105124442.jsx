import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Row } from "react-bootstrap";

const CustomersOrderTrack = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <Row>
          <Card></Card>
          <Card></Card>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
