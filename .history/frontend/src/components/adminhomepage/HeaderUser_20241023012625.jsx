import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function FadeMenu() {
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(null);
  const open = Boolean(show);
  const handleClick = (event) => {
    setShow(event.currentTarget);
  };
  const handleClose = () => {
    setShow(null);
  };

  return (
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
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Invoice</MenuItem>
                    <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
                  </Menu>
                </div>
              </div>
            </Box>
          )}
  );
}
