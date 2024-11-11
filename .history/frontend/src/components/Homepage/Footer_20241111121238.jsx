import { Box } from "@mui/material";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex p-4 mt-5"
        style={{ backgroundColor: "#161C2D", color: "white" }}
      >
        <Col className="mt-5" lg={4}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              className="logo"
              src="https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png"
              alt="Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
            <img
              className="logo"
              src="https://e7.pngegg.com/pngimages/480/581/png-clipart-logo-e-commerce-digital-marketing-brand-trade-ecommerce-text-service.png"
              alt="Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
          </Box>
          <p className="mt-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Col>
        <Col className="mt-5" lg={4}>
          <h3>Customers</h3>
          <ul>Home</ul>
          <ul>ProductDetail</ul>
          <ul>Cart</ul>
          <ul>CheckOut</ul>
          <ul>Wishlist</ul>
          <ul>Invoice</ul>
        </Col>
        {/* <Col className="mt-5" lg={3}>
          <h3>Admin</h3>
          <ul>DashBoard</ul>
          <ul>Add Product</ul>
          <ul>Orders</ul>
          <ul>Customers</ul>
          <ul>Refund</ul>
          <ul>Invoice</ul>
        </Col> */}
        <Col className="mt-5" lg={4}>
          <h3>Customers</h3>
          <ul>1884 George Avenue Mobile, AL 36603</ul>
          <div className="d-flex justify-content-start gap-3 align-items-center">
            <IoLogoInstagram size={30} />
            <CiFacebook size={30} />
            <AiFillTwitterCircle size={30} />
          </div>
        </Col>
      </div>
    </>
  );
};

export default Footer;
