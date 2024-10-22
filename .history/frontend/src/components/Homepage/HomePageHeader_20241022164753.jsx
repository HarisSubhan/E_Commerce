import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
  Box,
  Badge,
  Menu,
  Fade,
} from "@mui/material";
import { Search as SearchIcon, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  const [category, setCategory] = useState("all");
  const users = JSON.parse(localStorage.getItem("bicuserData"));
  const [show, setShow] = useState(null);
  const [user, setUser] = useState(null);
  const open = Boolean(show);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("bicuserData"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleClick = (event) => {
    setShow(event.currentTarget);
  };
  const handleClose = () => {
    setShow(null);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem("bicuserData");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <AppBar
      className="p-3 border"
      position="static"
      color="transparent"
      elevation={0}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge color="primary">
            <ShoppingCart />
          </Badge>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
          >
            <div className="d-flex gap-4">
              {user?.role == "admin" && (
                <div style={{ cursor: "pointer" }} className="cursor-pointer">
                  <Button
                    className="d-flex gap-3  align-items-center"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <img
                      sx={{ cursor: "pointer" }}
                      width={40}
                      height={40}
                      className="rounded-circle"
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      alt=""
                      onClick={handleClick}
                    />
                    <div className="flex-column text-white maria align-items-center">
                      <p className="p-0 m-0">Maria Gibson</p>
                      <p className="p-0 m-0">Admin</p>
                    </div>
                  </Button>
                  <Menu
                    className="dropdownmenu "
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={show}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Setting</MenuItem>
                    <MenuItem onClick={handleClose}>Earning</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
              <Button variant="dark" href="/login">
                Log In
              </Button>
              <Button variant="dark" href="/register-user  ">
                Sign Up
              </Button>

              {/* <Link className="text-decoration: none" to="/login">
                Login
              </Link>
              <Link to="/register-user">Sign Up</Link> */}
            </div>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {user ? (
              <div className="d-flex gap-4">
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img
                    src="user-profile.png"
                    alt="User"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="flex-column">
                    <p>{user.username}</p>
                    <p>{user.role}</p>
                  </div>
                </Button>
                <Menu
                  id="fade-menu"
                  anchorEl={show}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="d-flex gap-3">
                <Button variant="dark" href="/login">
                  Log In
                </Button>
                <Button variant="dark" href="/signup">
                  Sign Up
                </Button>
              </div>
            )}
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
