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

export default function Navbar() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:899px)");
  const [anchorUserMenu, setAnchorUserMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const [avatarLetter, setAvatarLetter] = useState("");

  useEffect(() => {
    // localStorage se user data read karna
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

  const handleLogout = () => {
    setLogoutModal(false);
    console.log("User logged out");
    router.push("/login");
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
                router.push("/dashboard/people/profile");
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

      <Toolbar /> {/* spacing below fixed AppBar */}

      {/* Drawer Menu */}
      <SideMenu open={drawerOpen} setOpen={setDrawerOpen} isMobile={isMobile} />

      {/* Logout Confirmation Modal */}
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
