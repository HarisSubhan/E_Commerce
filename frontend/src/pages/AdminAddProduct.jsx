import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FirstLayer from "../components/FirstLayer";
import AddProduct from "../components/AddProduct";

const AdminAddProduct = () => {
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
          <AddProduct />
        </Col>
      </Row>
    </>
  );
};

export default AdminAddProduct;
