import React from "react";
import Header from "./HomePageHeader";
import NavBar from "./NavBar";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Input, Typography } from "@mui/material";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

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
              <div className="d-flex ">
                <MdOutlineError />
                <p>
                  A simple info alert with an example link. Give it a click if
                  you like.
                </p>
                <RxCross2 />
              </div>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="p-3">
              <div className="d-flex justify-content-between align-items-center ">
                <Typography variant="h6">Tracking Number</Typography>
                <Typography variant="h6">Pending</Typography>
              </div>
              <Typography variant="h6">GP23651456RR</Typography>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    width={50}
                    height={50}
                    className="rounded-circle"
                    src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"
                    alt="User Avatar"
                  />

                  <div className="flex-column ">
                    <p className="p-0 m-0">Victor Harrison</p>
                    <p className="p-0 m-0">Deliveryman</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex gap-4">
                    <IoCallOutline size={30} />
                    <FaMessage size={30} />
                  </div>
                </div>
              </div>
              <hr />
              <Typography variant="p">Order Time</Typography>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <Typography variant="p">02 Dec 2023</Typography>
                  <Typography variant="p">07:30pm</Typography>
                </div>
                <div>
                  <FaLocationDot />
                </div>
                <div className="d-flex gap-3">
                  <Typography variant="p">02 Dec 2023</Typography>
                  <Typography variant="p">07:30pm</Typography>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CustomersOrderTrack;
