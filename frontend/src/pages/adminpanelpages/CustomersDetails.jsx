import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Sidenav from "../../components/adminhomepage/Sidenav";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import { Typography } from "@mui/material";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaSquareXTwitter } from "react-icons/fa6";
import OdersTable from "../../components/admin-customers/OdersTable";

const CustomersDetails = () => {
  return (
    <Row className="d-flex ">
      <Col className="p-0 m-0" xl={2} lg={5}>
        <Sidenav />
      </Col>
      <Col className="p-0 m-0" xl={10} lg={5}>
        <AppHeader />
        <FirstLayer />
        <Row className="p-0 m-0 p-3">
          <Col lg={3} className="text-center">
            <img
              className="rounded-circle"
              src="https://mannatthemes.com/robotech/default/assets/images/users/avatar-1.png"
              alt=""
            />
            <Typography>Merri Diamond</Typography>
            <Typography>New York, USA</Typography>
            <div className="">
              <div className="d-flex mt-3   ">
                <Typography>Email :</Typography>
                <Typography>example@gmail.com</Typography>
              </div>
              <div className="d-flex mt-3   ">
                <Typography>Phone :</Typography>
                <Typography>+1 234 567 89</Typography>
              </div>
              <div className="d-flex mt-3   ">
                <Typography>Date of birth :</Typography>
                <Typography>05 June 2001</Typography>
              </div>
              <div className="d-flex mt-3">
                <Typography className="">Address :</Typography>
                <Typography>
                  1277 Rollins Road Grand Island, NE 68801
                </Typography>
              </div>
            </div>
            <Typography className="mt-3 ">About</Typography>
            <Typography>
              Hi I'm Merri Diamond,has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </Typography>
            <div className="d-flex gap-3 justify-content-center mt-3">
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaSquareXTwitter size={30} />
            </div>
          </Col>
          <Col lg={9}>
            <div className="d-flex p-3 gap-3">
              <Card
                style={{ backgroundColor: "#E5EAFC" }}
                className="text-center p-3 "
              >
                <HiOutlineCurrencyDollar size={50} className="mx-auto" />
                <Typography className="mt-2">$56545</Typography>
                <Typography className="mt-2">Total Cost</Typography>
                <Typography className="mt-2">Last Payment $300.00</Typography>
              </Card>
              <Card
                style={{ backgroundColor: "#E5EAFC" }}
                className="text-center p-3 "
              >
                <HiOutlineCurrencyDollar size={50} className="mx-auto" />
                <Typography className="mt-2">$56545</Typography>
                <Typography className="mt-2">Total Cost</Typography>
                <Typography className="mt-2">Last Payment $300.00</Typography>
              </Card>
              <Card
                style={{ backgroundColor: "#E5EAFC" }}
                className="text-center p-3 "
              >
                <HiOutlineCurrencyDollar size={50} className="mx-auto" />
                <Typography className="mt-2">$56545</Typography>
                <Typography className="mt-2">Total Cost</Typography>
                <Typography className="mt-2">Last Payment $300.00</Typography>
              </Card>
            </div>
            <div className="d-flex justify-content-around mt-5">
              <Typography>Orders (451)</Typography>
              <Typography>Wishlist (155)</Typography>
              <Typography>Rating(25)</Typography>
            </div>
            <OdersTable />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CustomersDetails;
