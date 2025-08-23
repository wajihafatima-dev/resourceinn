"use client";
import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import HttpsTwoToneIcon from "@mui/icons-material/HttpsTwoTone";
import CustomButton from "../components/global/CustomButton";
import CustomInput from "../components/global/CustomInput";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    username: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset link sent!");
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          alignItems: "center",
          height: "100vh", 
          width: { xs: "75%", sm: "55%", md: "40%" },
          textAlign: "center",
        }}
      >
        <Box sx={{ color: "#0d4b25ff", mb: 2 }}>
          <HttpsTwoToneIcon sx={{ fontSize: 40 }} />
        </Box>

        <Typography component="h1" variant="h5" fontWeight="600">
          Forgot your password?
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, mb: 3 }}
        >
          Please enter the username to reset your password.
        </Typography>

        <Box
          component="form"
          onSubmit={handleReset}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <CustomInput
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.username}
            errors={errors.username}
          />

          <CustomButton
            type="submit"
            fullWidth
            sx={{
              mt: 2,
              background: "linear-gradient(90deg,rgb(40, 136, 160), #134552)",
              color: "#fff",
              borderRadius: "30px",
              padding: "10px 0",
              marginBottom: 2,
              "&:hover": {
                background:
                  "linear-gradient(90deg, #134552, rgb(40, 136, 160))",
              },
            }}
          >
            Reset Password
          </CustomButton>

          <Box textAlign="center">
            <Link
              href="/login"
              variant="body2"
              underline="hover"
              sx={{
                color: "#925FE2",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ← Return to login
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
