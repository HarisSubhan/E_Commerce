import React from "react";
import { Box, Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import HeaderUser from "../../components/adminhomepage/HeaderUser";
import { useSelector } from "react-redux";

const AppHeader = () => {
   const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div style={{ backgroundColor: "#5E3DC3" }} className="p-2  border">
        <Box
          sx={{
            backgroundColor: "#5E3DC3",
            textAlign: "center",
            justifyContent: "space-between",
          }}
          className="d-flex"
        >
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <Button
              sx={{ background: "#EFF0FC", color: "#2E51E6" }}
              variant="contained"
            >
              New Task
            </Button>
          </div>
          <div className="d-flex">
            <div className="gap-2 d-flex align-items-center">
              <IoIosSearch size={35} />
              <IoMoonOutline size={35} />
              <CiBellOn size={35} />
            </div>
            {user ? (
<HeaderUser />
            )}
            
          </div>
        </Box>
      </div>
    </>
  );
};

export default AppHeader;
