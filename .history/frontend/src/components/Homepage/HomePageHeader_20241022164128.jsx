import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Badge,
  Button,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(null);
  const open = Boolean(show);

  // Fetch user data from localStorage on load
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

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem("bicuserData");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="logo.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </Box>

        {/* Show user information if logged in */}
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
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
