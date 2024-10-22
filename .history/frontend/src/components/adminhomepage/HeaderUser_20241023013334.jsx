import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function FadeMenu() {
  const { user } = useSelector((state) => state.auth); // Get user from Redux store
  const [show, setShow] = useState(null);
  const open = Boolean(show);

  const handleClick = (event) => {
    setShow(event.currentTarget);
  };

  const handleClose = () => {
    setShow(null);
  };

  return (
    <div style={{ cursor: "pointer" }} className="cursor-pointer">
      {user && ( // Check if user is logged in
        <Button
          className="d-flex gap-3 align-items-center"
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
            alt="User  Avatar"
          />
          <div className="flex-column text-white align-items-center">
            <p className="p-0 m-0">{user.username}</p>{" "}
            {/* Display user's name */}
            <p className="p-0 m-0">{user.role}</p> {/* Display user's role */}
          </div>
        </Button>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>Earning</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
