"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Container,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { Google, LinkedIn, Apple } from "@mui/icons-material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { baseUrl, loginApi } from "@/apiEndPoints";
import CustomButton from "../global/CustomButton";
import CustomInput from "../global/CustomInput";
import { loginUser } from "@/apiServices";
import Image from "next/image";
import Cookies from "js-cookie";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const [loginText, setLoginText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "with your credentials";

  useEffect(() => {
    let typingSpeed = 150;
    const handleTyping = () => {
      setLoginText((currentText) => {
        if (!isDeleting && currentText.length < fullText.length) {
          return fullText.slice(0, currentText.length + 1);
        } else if (isDeleting && currentText.length > 0) {
          return fullText.slice(0, currentText.length - 1);
        } else {
          return currentText;
        }
      });
      if (!isDeleting && loginText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true));
      } else if (isDeleting && loginText.length === 0) {
        setIsDeleting(false);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [loginText, isDeleting]);

  const createMutation = useMutation({
    mutationFn: (data) => loginUser(baseUrl, loginApi, data),
    onSuccess: (response) => {
      if (response?.token) {
        Cookies.set("token", response.token, { expires: 7 });
      }
      localStorage.setItem("user", JSON.stringify(response.user));
      router.push("/dashboard");
    },

    onError: (err) => {
      console.error(err);
    },
  });

  const handleSubmit = (values) => {
    createMutation.mutate(values);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ px: { xs: 0, md: 6 } }}>
        <Box sx={{ mt: 0, mb: 3, display: "flex", justifyContent: "center" }}>
          <Image
            priority={false}
            src="/images/logo.png"
            alt="Logo"
            height={50}
            width={50}
          />
          <Typography
            variant="h5"
            textAlign="left"
            sx={{ fontWeight: "bold", color: "#333", width: "100%", mt:1 }}
          >
            Login {loginText}
            <span
              style={{
                color: "#925FE2",
                animation: "blink 1s step-start infinite",
              }}
            >
              |
            </span>
          </Typography>
        </Box>

        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => {
            const isFormValid = values.email && values.password;

            return (
              <Form>
                <CustomInput
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.email}
                  errors={errors.email}
                  sx={{ Padding: 0 }}
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.password}
                  errors={errors.password}
                />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 1 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                        color="default"
                      />
                    }
                    label="Remember Me"
                  />
                  <Link
                    href="/forgot-password"
                    sx={{ color: "#925FE2", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Link>
                </Box>

                <CustomButton
                  type="submit"
                  fullWidth
                  disabled={!isFormValid}
                  sx={{
                    mt: 3,
                    background:
                      "linear-gradient(90deg,rgb(40, 136, 160), #134552)",
                    color: "#fff",
                    borderRadius: "30px",
                    padding: "10px 0",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #134552, rgb(40, 136, 160))",
                    },
                  }}
                  isLoading={createMutation.isLoading}
                >
                  Login
                </CustomButton>

                <Box
                  display="flex"
                  justifyContent="center"
                  gap={2}
                  sx={{ mt: 3 }}
                >
                  {[
                    { icon: <Google sx={{ fontSize: 40 }} />, href: "#" },
                    { icon: <LinkedIn sx={{ fontSize: 40 }} />, href: "#" },
                    { icon: <Apple sx={{ fontSize: 40 }} />, href: "#" },
                  ].map((item, index) => (
                    <IconButton
                      LinkComponent={"a"}
                      key={index}
                      href={item.href}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.2)" },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ mt: 2, color: "#000" }}
                >Dont have an account?{" "}
                  <Link
                    href="/signup"
                    underline="hover"
                    sx={{ color: "#925FE2", fontWeight: "bold" }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginForm;
