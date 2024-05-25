import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";
import FirstLayer from "../../components/FirstLayer";
import { SecondLayer } from "../../components/SecondLayer";
import ThirdLayer from "../../components/ThirdLayer";
import Sidenav from "../../components/Sidenav";
import { Box } from "@mui/material";

const Admin = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
      </Box>

      {/* <Header /> */}
      {/* <Row>
        <Col className="" style={{}} xl={2} lg={3}>
          <Sidebar move={move} moveSidebar={moveSidebar} />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={9}>
          <Header />
          <FirstLayer />
          <SecondLayer />
          {/* <ThirdLayer /> */}
      {/* </Col> */}
      {/* // </Row> */}
    </>
  );
};

export default Admin;
