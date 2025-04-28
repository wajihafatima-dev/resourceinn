"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import TanstackProvider from "./provider/TanstackProvider";
import SideMenu from "./components/global/sidebar/SideMenu";
import Navbar from "./components/global/Navbar";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Pages that don't need the layout
  const noLayoutRoutes = ["/login", "/signup", "/forgot-password"];
  const isAuthPage = noLayoutRoutes.includes(pathname);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <TanstackProvider>
          {isAuthPage ? (
            children
          ) : (
            <Box sx={{ flexDirection: "column", height: "100vh", width: "100%" }}>
              <SideMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

              <Box
                sx={{
                  flex: 1,
                  ml: !isSmallScreen && drawerOpen ? "280px" : "0px",
                  transition: "margin-left 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Navbar
                  drawerOpen={drawerOpen}
                  setDrawerOpen={setDrawerOpen}
                />

                <Box
                  component="main"
                  sx={{
                    flex: 1,
                    mt: { xs: 7, sm: 8 }, // adjust top space based on Navbar height
                    p: 2,
                    overflowY: "auto",
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          )}
        </TanstackProvider>
      </body>
    </html>
  );
}
