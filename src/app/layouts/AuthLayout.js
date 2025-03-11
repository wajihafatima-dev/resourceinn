"use client"
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";


const AuthLayout = ({children}) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "97vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        color: "#fff",
        p: 4,
      }}
    >
    {children}
    </Box>
      <Box
        sx={{
          flex: 1,
          position: "relative",
          backgroundImage: "url('/images/Vector (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#925FE2",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "53%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            width: "60%",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Welcome to ResourceInn Portal
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Image
              src="/images/img (2).png" 
              alt="Welcome"
              width={430} 
              height={430} 
              style={{ borderRadius: "10px" }} 
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
