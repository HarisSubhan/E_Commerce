import React, { useState } from "react";
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
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const [category, setCategory] = useState("all");
  const { user } = useSelector((state) => state.auth); // Get user from Redux store
  const [show, setShow] = useState(null);
  const open = Boolean(show);

  const handleClick = (event) => {
    setShow(event.currentTarget);
  };

  const handleClose = () => {
    setShow(null);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
            src="logo.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </Box>

        <Box
          className="search-bar"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            padding: "4px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="I'm shopping for..."
            fullWidth
            sx={{ "& .MuiOutlinedInput-root": { border: "none" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    displayEmpty
                    sx={{
                      marginRight: "8px",
                      minWidth: "120px",
                      border: "none",
                    }}
                  >
                    <MenuItem value="all">All categories</MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="fashion">Fashion</MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                  </Select>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge color="primary">
            <ShoppingCart />
          </Badge>

          {/* Show different content based on whether user is logged in */}
          {user ? (
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
            >
              <div className="d-flex gap-4">
                <div style={{ cursor: "pointer" }}>
                  <Button
                    className="d-flex gap-3 align-items-center"
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <img
                      width={40}
                      height={40}
                      className="rounded-circle"
                      src="user-avatar.jpg"
                      alt="User Avatar"
                    />
                    <div className="flex-column text-white align-items-center">
                      <p className="p-0 m-0">{user.username}</p>
                      <p className="p-0 m-0">{user.role}</p>
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
                    <MenuItem onClick={handleClose}>Invoice</MenuItem>
                    <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                  </Menu>
                </div>
              </div>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button variant="dark" href="/login">
                Log In
              </Button>
              <Button variant="dark" href="/register-user">
                Sign Up
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
