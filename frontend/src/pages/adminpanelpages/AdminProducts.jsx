import React from "react";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Col, Row } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import List from "../../components/adminlistproduct/List";
import SelectOption from "../../components/adminlistproduct/SelectOption";
import ProductDetail from "../../components/adminlistproduct/ProductDetail";

const AdminProducts = () => {
  return (
    <Row className="d-flex">
      <Col className="p-0 m-0" xl={2} lg={5}>
        <Sidenav />
      </Col>
      <Col className="p-0 m-0" xl={10} lg={5}>
        <AppHeader />
        <FirstLayer />
        <List />
        <SelectOption />
        <ProductDetail />
      </Col>
    </Row>
  );
};

export default AdminProducts;
