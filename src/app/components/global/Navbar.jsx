"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import ConfirmModal from "../ConfirmModal";
import SideMenu from "./sidebar/SideMenu";
import Cookies from "js-cookie";
import { baseUrl, logoutApi } from "@/apiEndPoints";
import { logoutUser } from "@/apiServices";

export default function Navbar() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:899px)");
  const [anchorUserMenu, setAnchorUserMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const [avatarLetter, setAvatarLetter] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user?.firstName) {
          setAvatarLetter(user.firstName.charAt(0).toUpperCase());
        }
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
      }
    }
  }, []);

  const handleUserMenuOpen = (e) => setAnchorUserMenu(e.currentTarget);
  const handleUserMenuClose = () => setAnchorUserMenu(null);

  const handleLogout = async () => {
    setLogoutModal(false);
    localStorage.removeItem("user");
    try {
      await logoutUser(baseUrl, logoutApi);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#673ab7" }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Dashboard
          </Typography>

          <IconButton onClick={handleUserMenuOpen}>
            <Avatar alt="Profile">{avatarLetter}</Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorUserMenu}
            open={Boolean(anchorUserMenu)}
            onClose={handleUserMenuClose}
          >
            <MenuItem
              onClick={() => {
                handleUserMenuClose();
                router.push("/dashboard/profile");
              }}
            >
              Profile
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                handleUserMenuClose();
                setLogoutModal(true);
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <SideMenu open={drawerOpen} setOpen={setDrawerOpen} isMobile={isMobile} />
      <ConfirmModal
        open={logoutModal}
        onClose={() => setLogoutModal(false)}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        onConfirm={handleLogout}
      />
    </>
  );
}
