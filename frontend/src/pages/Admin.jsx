import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FirstLayer from "../components/FirstLayer";
import { SecondLayer } from "../components/SecondLayer";
import ThirdLayer from "../components/ThirdLayer";

const Admin = () => {
  const move = useRef();
  const moveSidebar = () => {
    move.current.classList.toggle("show");
  };

  return (
    <>
      <Row>
        <Col className="" style={{}} xl={2} lg={3}>
          <Sidebar move={move} moveSidebar={moveSidebar} />
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

export default Admin;
