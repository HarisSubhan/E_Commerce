import React from "react";
import Sidenav from "../../components/adminhomepage/Sidenav";
import { Col, Row } from "react-bootstrap";
import AppHeader from "../../components/adminhomepage/AppHeader";
import FirstLayer from "../../components/adminhomepage/FirstLayer";
import InputField from "../../components/Adminproduct/InputField";
import { FormField } from "../../components/Adminproduct/FormField";
import ProductField from "../../components/Adminproduct/ProductField";

const AdminAddProduct = () => {
  return (
    <>
      <Row className="d-flex">
        <Col className="p-0 m-0" xl={2} lg={5}>
          <Sidenav />
        </Col>
        <Col className="p-0 m-0" xl={10} lg={5}>
          <AppHeader />
          <FirstLayer />
          <Row className="p-4">
            <Col xl={3} lg={4}>
              <p>Upload Image</p>
              <InputField />
            </Col>
            <Col xl={6} lg={4}>
              <p>Title</p>
              <FormField />
            </Col>
            <Col xl={3} lg={4}>
              <p>Product Image</p>
              <ProductField />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AdminAddProduct;
