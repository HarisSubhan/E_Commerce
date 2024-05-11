import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

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
        <Col xl={10} lg={9}>
          New Task
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboard;
