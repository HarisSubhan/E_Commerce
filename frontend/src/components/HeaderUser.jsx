import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState } from "react";

export default function FadeMenu() {
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
        <div className="flex-column maria align-items-center">
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
        <MenuItem onClick={handleClose}>InVoice</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
