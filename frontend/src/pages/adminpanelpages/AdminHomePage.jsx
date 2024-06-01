import React from "react";
import Sidenav from "../../components/adminhomepage/Sidenav";
import AppHeader from "../../components/adminhomepage/AppHeader";
import { Col, Row } from "react-bootstrap";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import SecondLayer from "../../components/adminhomepage/SecondLayer";
import ThirdLayer from "../../components/adminhomepage/ThirdLayer";

const AdminHomePage = () => {
  return (
    <>
      <Row className="d-flex">
        <Col className="p-0 m-0" xl={2} lg={5}>
          <Sidenav />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={5}>
          <AppHeader />
          <FirstLayer />
          <SecondLayer />
          <ThirdLayer />
        </Col>
      </Row>
    </>
  );
};

export default AdminHomePage;
