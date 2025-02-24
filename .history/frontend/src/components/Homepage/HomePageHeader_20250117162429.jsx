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
  Button,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, ShoppingCart } from "@mui/icons-material";
// import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";

const Header = () => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("all");
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(null);
  const profileOpen = Boolean(show);
  const cartItems = useSelector((state) => state.cart?.items || []);

  const total = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  const handleProfileClick = (event) => {
    setShow(event.currentTarget);
  };
  // const handleProfileClose = () => {
  //   setShow(null);
  //   nav("/customers-checkout");
  // };

  const handleClickProfile = () => {
    nav("/customers-profile");
  };

  const handleLogOut = async () => {
    try {
      const result = await dispatch(logOut()).unwrap();
      if (result?.success) {
        localStorage.removeItem("user");
        nav("/");
      } else {
        console.error("Logout failed: No success response from server");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
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

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCart
              onClick={handleCartClick}
              style={{ cursor: "pointer" }}
            />
          </Badge>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCartClose}
            TransitionComponent={Fade}
            PaperProps={{
              style: {
                padding: "30px",
                width: "300px",
                marginTop: "20px",
              },
            }}
          >
            {cartItems.length === 0 ? (
              <Box sx={{ padding: "20px", textAlign: "center" }}>
                <Typography variant="body1" color="textSecondary">
                  Your cart is empty
                </Typography>
              </Box>
            ) : (
              <>
                {cartItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold">
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body1">
                      ${Number(item.price || 0).toFixed(2)}
                    </Typography>
                  </Box>
                ))}

                <hr />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    Total Payable
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleCartClose}
                >
                  Place Order
                </Button>
              </>
            )}
          </Menu>

          {user ? (
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
            >
              {user.role === "admin" && <Button href="/admin">Admin</Button>}
              <div className="d-flex gap-4">
                <div style={{ cursor: "pointer" }}>
                  <Button
                    variant="outlined"
                    className="d-flex gap-3 align-items-center"
                    id="fade-button"
                    aria-controls={profileOpen ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileOpen ? "true" : undefined}
                    onClick={handleProfileClick}
                  >
                    <img
                      width={40}
                      height={40}
                      className="rounded-circle"
                      src="https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"
                      alt="User Avatar"
                    />
                    <div className="flex-column text-white align-items-center">
                      <p
                        style={{ color: "black" }}
                        className="p-0 m-0 fs-4 text-capitalize"
                      >
                        {user.username}
                      </p>
                    </div>
                  </Button>
                  <Menu
                    id="fade-menu"
                    anchorEl={show}
                    open={profileOpen}
                    onClose={handleProfileClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClickProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleProfileClose}>Invoice</MenuItem>
                    <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
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
