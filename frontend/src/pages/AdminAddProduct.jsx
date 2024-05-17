import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FirstLayer from "../components/FirstLayer";
import AddProduct from "../components/AddProduct";

const AdminAddProduct = () => {
  return (
    <>
      <Header />
      <FirstLayer />
      <AddProduct />
    </>
  );
};

export default AdminAddProduct;
