import React from "react";
import { Box } from "@mui/material";
import Sidenav from "../../components/Sidenav";

const AdminDashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
      </Box>
    </>
  );
};

export default AdminDashboard;
