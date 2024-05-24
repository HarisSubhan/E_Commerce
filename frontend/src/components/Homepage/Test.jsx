import { CiCircleList } from "react-icons/ci";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="d-flex gap-3 fw-bolder fs-4"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <CiCircleList size={30} style={{ background: "" }} />
        All category
      </Button>
      <Menu
        className="meun"
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Fashion</MenuItem>
        <MenuItem onClick={handleClose}>Phone & SmartWacth</MenuItem>
        <MenuItem onClick={handleClose}>Laptops</MenuItem>
        <MenuItem onClick={handleClose}>Jewwelry</MenuItem>
      </Menu>
    </div>
  );
}
