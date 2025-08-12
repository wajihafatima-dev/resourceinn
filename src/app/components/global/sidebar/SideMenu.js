"use client";
import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { Tabs, Nasted_Tabs } from "../../../constants/SideMenuConstant";

const SideMenu = ({ drawerOpen, setDrawerOpen }) => {
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedNestedTab, setSelectedNestedTab] = useState("");
  const router = useRouter();
  const handleMainButtonClick = (text, path) => {
    setSelectedTab(text);
    router.push(path);
    setSelectedNestedTab("");
    if (text !== "Dashboard") {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedNestedTab("");
  };
  const handleNestedClick = (text, path) => {
    setSelectedNestedTab(text);
    router.push(path);
  };

  const renderContent = () => {
    const currentTabs = Nasted_Tabs[selectedTab] || [];
    return (
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {selectedTab}
        </Typography>
        <List>
          {currentTabs.map((btn) => (
            <ListItem
              
              key={btn.text}
              onClick={() => handleNestedClick(btn.text, btn.href)}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                px: 2,
                py: 1,
                bgcolor:
                  selectedNestedTab === btn.text ? "#f0f0f0" : "transparent",
              }}
            >
              <ListItemIcon sx={{ minWidth: "auto", mr: 2 }}>
                {btn.icon}
              </ListItemIcon>
              <ListItemText
                primary={btn.text}
                primaryTypographyProps={{
                  fontSize: "14px",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Left Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 80,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 80,
            boxSizing: "border-box",
            boxShadow:0,
            zIndex: 1300,
            borderRight:"1.8px dashed lightgray"
          },
        }}
      >
        <List>
          {Tabs.map((btn) => (
            <ListItem
             
              key={btn.text}
              onClick={() => {handleMainButtonClick(btn.text, btn.href)}}
              sx={{
                flexDirection: "column",
                py: 2,
                color: selectedTab === btn.text ? "blue" : "#000",
              }}
            >
              <ListItemIcon sx={{ minWidth: "auto", mb: 1 }}>
                {btn.icon}
              </ListItemIcon>
              <ListItemText
                primary={btn.text}
                primaryTypographyProps={{
                  fontSize: "12px",
                  textAlign: "center",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Right Drawer for Nested Tabs */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        ModalProps={{ hideBackdrop: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            padding: 2,
            backgroundColor: "#fff",
            position: "fixed",
            left: 80,
            top: 0,
            height: "100%",
            boxShadow: 0,
            borderRight:"1.8px dashed lightgray"
          },
        }}
      >
        <IconButton
          onClick={handleCloseDrawer}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Dynamic Nested Content */}
        <Box sx={{ mt: 5 }}>{renderContent()}</Box>
      </Drawer>
    </Box>
  );
};

export default SideMenu;
