import React from "react";
import { Box } from "@mui/material";
import Sidenav from "../../components/Sidenav";
import Header from "../../components/Header";
import FirstLayer from "../../components/FirstLayer";
import { SecondLayer } from "../../components/SecondLayer";

const AdminDashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <FirstLayer />
          <SecondLayer />
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
