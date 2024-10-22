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
  const { user } = useSelector((state) => state.auth);
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
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
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
                      "& .MuiOutlinedInput-notchedOutline": { border: 0 },
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

        <Box sx={{ display: "flex ", alignItems: "center" }}>
          <Badge color="primary">
            <ShoppingCart />
          </Badge>
          {user ? (
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
            >
              <div className="d-flex gap-4">
                <div style={{ cursor: "pointer" }}>
                  <Button
                    variant="outlined"
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
                      src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"
                      alt="User Avatar"
                    />
                    <div className="flex-column text-white align-items-center">
                      <p style={{ color: "black" }} className="p-0 m-0 fs-4">
                        {user.username}
                      </p>
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
