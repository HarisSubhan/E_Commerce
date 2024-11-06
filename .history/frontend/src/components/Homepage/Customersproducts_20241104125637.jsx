import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

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
              <div className="">
                <div className="d-flex">
                  <MdOutlineCheckBoxOutlineBlank />
                  Fashion
                </div>
              </div>
            </Card>
          </Col>
          <Col xl={8}></Col>
        </Row>
      </Container>
    </>
  );
};
