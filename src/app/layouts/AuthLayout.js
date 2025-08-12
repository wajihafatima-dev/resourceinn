"use client";
import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ImageSlider from "../components/global/ImageSlider";

const AuthLayout = ({ children }) => {
  const images = ["/images/bg-1.png", "/images/bg-3.png", "/images/bg-2.png"];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        overflow: "hidden",
        backgroundColor: "red",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          backgroundColor: "#134552",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { md: "flex", sm: "none", xs: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            color: "#fff",
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            The simplest way to manage your workforce
          </Typography>
          <Typography variant="body1">
            Enter your credentials to access your account
          </Typography>
          <Box sx={{ mt: 3 }}>
            <ImageSlider
              images={images}
              width={isSmallScreen ? 300 : 350}
              height={isSmallScreen ? 300 : 300}
              autoPlaySpeed={5000} 
            />
          </Box>
        </Box>
      </Box>

      {/* Right Side (Form) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          color: "#333",
          px: { md: 0, sm: 6, xs: 5 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
