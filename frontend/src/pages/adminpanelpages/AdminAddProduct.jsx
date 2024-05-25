import React from "react";

import Header from "../../components/Header";
import FirstLayer from "../../components/FirstLayer";
import AddProduct from "../../components/AddProduct";
import Sidenav from "../../components/Sidenav";

const AdminAddProduct = () => {
  return (
    <>
      <Sidenav />
      <Header />
      <FirstLayer />
      <AddProduct />
    </>
  );
};

export default AdminAddProduct;
