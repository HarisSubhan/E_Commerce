import React, { useState, useEffect } from "react";
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
  Avatar,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, ShoppingCart } from "@mui/icons-material";
import { Button } from "react-bootstrap";
import Fade from "@mui/material/Fade";
import { useAuthContext } from "../../context/AuthContext"; // Assuming you have an AuthContext for user data

const Header = () => {
  const [category, setCategory] = useState("all");
  const [show, setShow] = useState(null);
  const open = Boolean(show);

  const { currentUser, logout } = useAuthContext(); // Access currentUser and logout from AuthContext

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setShow(null);
  };

  const handleClick = (event) => {
    setShow(event.currentTarget);
  };

  // useEffect hook to fetch user data if not provided as a prop
  useEffect(() => {
    // If currentUser is not available from the AuthContext, fetch it here
    // (e.g., using an API call or local storage)
  }, []);

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

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge color="primary">
            <ShoppingCart />
          </Badge>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
          >
            {currentUser ? (
              <div className="d-flex gap-3 align-items-center">
                <Avatar
                  src={currentUser.avatarUrl} // Assuming you have an avatarUrl field
                  alt={currentUser.name}
                  style={{ width: 40, height: 40 }}
                />
                <div className="flex-column text-white maria align-items-center">
                  <Typography variant="body2">{currentUser.name}</Typography>
                  <Typography variant="caption">{currentUser.role}</Typography>
                </div>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              </div>
            ) : (
              <div className="d-flex gap-4">
                <Button variant="dark" href="/login">
                  Log In
                </Button>
                <Button variant="dark" href="/register-user">
                  Sign Up
                </Button>
              </div>
            )}
            <Menu
              className="dropdownmenu"
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={show}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {currentUser && (
                <>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Invoice</MenuItem>
                  <MenuItem onClick={logout}>Sign Out</MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
