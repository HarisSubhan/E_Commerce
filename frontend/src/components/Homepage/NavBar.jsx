import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Test from "../Homepage/Test";
import { FaStarOfDavid } from "react-icons/fa";
import { Box } from "@mui/material";
import { MdList } from "react-icons/md";

function NavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "white" }}
      className="d-flex justify-content-between p-3"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Test />
          <Nav className="menu2 fw-bolder fs-5 d-none d-md-flex gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Wishlist</Nav.Link>
            <Nav.Link href="#stores">Stores</Nav.Link>
            <Nav.Link href="#checkout">Checkout</Nav.Link>
          </Nav>
        </Box>
        <MdList size={50} className="d-md-none" />
        <Box className="d-flex align-items-center gap-2">
          <FaStarOfDavid size={30} />
          <p className="p-0 m-0 fs-5 fw-bolder">
            <span style={{ color: "#5C3DC3" }}>UP TO </span>
            <span style={{ color: "#FB3C77" }}>70%</span> OFF
          </p>
        </Box>
      </Box>
    </Navbar>
  );
}

export default NavBar;
