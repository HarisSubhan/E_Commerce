import React, { useState } from "react";
import HeaderUser from "../HeaderUser";
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
} from "@mui/material";
import { Search as SearchIcon, ShoppingCart } from "@mui/icons-material";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  const [dropdownMenu, setdropdownMenu] = useState(false);
  const click = () => setdropdownMenu(!dropdownMenu);
  const [category, setCategory] = useState("all");

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
      <Toolbar
        className="toolbar"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box className="image" sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/logo-sm.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
          <img
            src="https://mannatthemes.com/robotech/default/assets/images/logo-dark.png  "
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </Box>

        <Box
          className="search-bar "
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
              "&   .MuiOutlinedInput-root": {
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
              startAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div className="cart">
            <Badge color="primary">
              <ShoppingCart />
            </Badge>
          </div>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
          >
            <div className="d-flex gap-4">
              <HeaderUser />
            </div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
