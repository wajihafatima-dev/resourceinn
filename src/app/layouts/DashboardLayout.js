"use client";
import { useState } from "react";
import { Box, useTheme, useMediaQuery, CssBaseline } from "@mui/material";
import SideMenu from "../components/global/sidebar/SideMenu";
import Navbar from "../components/global/Navbar";

export default function DashboardLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const theme = useTheme();

  return (
    <Box sx={{display:"flex", manHeight: "100vh", width: "100%" ,p:3}}>
      <CssBaseline />
      {/* <SideMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} /> */}
      <Box
        sx={{
          width: "100%",
          ml: !isSmallScreen && drawerOpen ? "250px" : "0px", 
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Navbar setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />

        <Box sx={{ mt: { xs: 7, sm: 8 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
