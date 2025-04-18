"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import SideMenu from "../components/global/sidebar/SideMenu";
import Navbar from "../components/global/Navbar";

export default function DashboardLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <SideMenu  drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin-left 0.3s",
          marginLeft: drawerOpen ? "280px" : "0px", 
        }}
      >
        <Navbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
}
