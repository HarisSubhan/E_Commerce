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
      <Container className="mt-3">
        <Row>
          <Col xl={4}>
            <Card className="p-3">
              <Typography variant="h3">Filters</Typography>
              <hr />
              <Typography variant="h5">Categories</Typography>
              <div className="">
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="p">Fashion</Typography>
                </div>{" "}
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="p">Fashion</Typography>
                </div>{" "}
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="p">Fashion</Typography>
                </div>{" "}
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="p">Fashion</Typography>
                </div>{" "}
                <div className="d-flex gap-3 align-items-center">
                  <MdOutlineCheckBoxOutlineBlank size={30} />
                  <Typography variant="p">Fashion</Typography>
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
