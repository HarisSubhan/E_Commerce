import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import DashBoard from "../components/DashBoard";

const AdminDashboard = () => {
  return (
    <>
      <Row>
        <Col
          className="p-4"
          style={{ background: "#5C3DC3", height: "100vh" }}
          xl={2}
          lg={3}
        >
          <Sidebar />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={9}>
          <DashBoard />
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboard;
