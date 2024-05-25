import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import FirstLayer from "../../components/FirstLayer";
import { SecondLayer } from "../../components/SecondLayer";
import Sidenav from "../../components/Sidenav";
// import ThirdLayer from "../components/ThirdLayer";

const AdminDashboard = () => {
  return (
    <>
      <Row>
        <Col
          className="p-2"
          style={{ background: "", height: "100vh" }}
          xl={2}
          lg={3}
        >
          <Sidenav />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={9}>
          <Header />
          <FirstLayer />
          <SecondLayer />
          {/* <ThirdLayer /> */}
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboard;
