"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import TanstackProvider from "./provider/TanstackProvider";
import SideMenu from "./components/global/sidebar/SideMenu";
import Navbar from "./components/global/Navbar";
import { persistor, store } from "./store/store";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login", "/signup", "/forgot-password"];
  const isAuthPage = noLayoutRoutes.includes(pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <TanstackProvider>
              {isAuthPage ? (
                children
              ) : (
                <Box sx={{ flexDirection: "column", height: "100vh", width: "100%" }}>
                  <SideMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                  <Box
                    sx={{
                      flex: 1,
                      ml: drawerOpen ? "280px" : "0px",
                      transition: "margin-left 0.3s ease-in-out",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                    <Box
                      component="main"
                      sx={{
                        flex: 1,
                        p: 2,
                      }}
                    >
                      {children}
                    </Box>
                  </Box>
                </Box>
              )}
            </TanstackProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
