"use client";

import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
export default function SectionLayout({ title, description, children }) {
  return (
    <Box sx={{  maxHeight: "80vh",
       ml:"85px", p: 3, backgroundColor: "#f9fafa" , minHeight: "100vh",
        transition: "margin-left 0.3s ease", }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          borderLeft: "6px solid #134552",
          height: "calc(100% - 100px)", 
            display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#134552", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
          {description}
        </Typography>

        <Box>{children}</Box>
      </Paper>
    </Box>
  );
}
