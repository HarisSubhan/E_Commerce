import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Test from "../Homepage/Test";
import { FaStarOfDavid } from "react-icons/fa";
import { Box } from "@mui/material";
import { MdList } from "react-icons/md";
import { useState } from "react";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "white" }}
        className="d-flex justify-content-between p-3"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15rem",
          }}
        >
          <Test />
          <Nav className="me-auto menu2 d-flex fw-bolder fs-5 gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Wishlist</Nav.Link>
            <Nav.Link href="#pricing">Stores</Nav.Link>
            <Nav.Link href="#pricing">Checkout</Nav.Link>
          </Nav>
        </Box>
        <MdList size={50} className="mdlist d-flex d-none" />

        <Box className="d-flex upto d-block gap-2 p-2 align-items-center">
          <FaStarOfDavid size={30} />
          <p style={{ color: "#5C3DC3" }} className="p-0 m-0 fs-5 fw-bolder">
            UP TO <span style={{ color: "#FB3C77" }}>70%</span> OFF
          </p>
        </Box>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
