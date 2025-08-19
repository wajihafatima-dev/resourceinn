"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { SIDEMENU_LINKS } from "@/app/constants/SideMenuConstant";

export default function SideMenu({ open, setOpen }) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (menuText) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuText]: !prev[menuText],
    }));
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          mt: isMobile ? 0 : 8,
        },
      }}
    >
      <List>
        {SIDEMENU_LINKS.map((item) => (
          <React.Fragment key={item.text}>
            {/* Parent Item */}
            <ListItemButton
              onClick={() => {
                if (item.children) {
                  handleToggle(item.text);
                } else if (item.path || item.href) {
                  router.push(item.path || item.href);
                  if (isMobile) setOpen(false);
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.children &&
                (openMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {/* Nested Links */}
            {item.children && (
              <Collapse
                in={openMenus[item.text]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItemButton
                      key={child.text}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        router.push(child.path || child.href);
                        if (isMobile) setOpen(false);
                      }}
                    >
                      <ListItemIcon>{child.icon}</ListItemIcon>
                      <ListItemText primary={child.text} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
