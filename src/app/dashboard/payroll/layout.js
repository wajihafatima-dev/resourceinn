'use client';

import { Box, Typography, Paper } from "@mui/material";

export default function PayrollLayout({ children }) {
  return (
    <Box
      sx={{
        ml: "85px",
        backgroundColor: "#f4f3f8", // soft purple-tinted grey
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      {/* Header Banner */}
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 3,
          background: "linear-gradient(90deg, #134552, #6A1B9A)",
          color: "#fff",
          mb: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", letterSpacing: "0.5px" }}>
          Payroll Dashboard
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.85 }}>
          Manage payroll processing, reports, and settings in one place.
        </Typography>
      </Paper>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          pr: 1,
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#6A1B9A",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": { backgroundColor: "#e0d4ea" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
