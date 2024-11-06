import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Input, Typography } from "@mui/material";

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
              
              <div className="d-flex gap-4">
                <div style={{ cursor: "pointer" }}>
                  <Button
                    variant="outlined"
                    className="d-flex gap-3 align-items-center"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <img
                      width={40}
                      height={40}
                      className="rounded-circle"
                      src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"
                      alt="User Avatar"
                    />
                    <div className="flex-column text-white align-items-center">
                      <p
                        style={{ color: "black" }}
                        className="p-0 m-0 fs-4 text-capitalize"
                      >
                        {user.username}
                      </p>
                    </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
