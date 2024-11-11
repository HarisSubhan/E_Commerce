import { Box } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex p-4 mt-5 justify-content-between"
        style={{ backgroundColor: "#161C2D", color: "white" }}
      >
        <div className="d-flex flex-column align-items-center">
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="d-flex flex-column">
          <h3>Customers</h3>
          <ul>
            <li>Home</li>
            <li>ProductDetail</li>
            <li>Cart</li>
            <li>CheckOut</li>
            <li>Wishlist</li>
            <li>Invoice</li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3>Contact</h3>
          <ul>
            <li>1884 George Avenue Mobile, AL 36603</li>
          </ul>
          <div className="d-flex justify-content-center gap-3 align-items-center">
            <IoLogoInstagram size={30} />
            <CiFacebook size={30} />
            <AiFillTwitterCircle size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
