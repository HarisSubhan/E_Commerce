import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FirstLayer from "./FirstLayer";
import { SecondLayer } from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";

const HomeAdmin = () => {
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
          <Header />
          <FirstLayer />
          <SecondLayer />
          <ThirdLayer />
        </Col>
      </Row>
    </>
  );
};

export default HomeAdmin;
