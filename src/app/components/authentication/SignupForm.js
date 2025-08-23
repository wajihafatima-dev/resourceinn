"use client";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { registerUser } from "@/apiServices";
import { baseUrl, signupApi } from "@/apiEndPoints";
import CustomButton from "../global/CustomButton";
import CustomInput from "../global/CustomInput";
import Image from "next/image";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
});

const SignUpForm = () => {
  const router = useRouter();
  const [signupText, setSignupText] = useState("");
  const fullText = "and join us";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 150;
    const handleTyping = () => {
      setSignupText((currentText) => {
        if (!isDeleting && currentText.length < fullText.length) {
          return fullText.slice(0, currentText.length + 1);
        } else if (isDeleting && currentText.length > 0) {
          return fullText.slice(0, currentText.length - 1);
        } else {
          return currentText;
        }
      });
      if (!isDeleting && signupText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true));
      } else if (isDeleting && signupText.length === 0) {
        setIsDeleting(false);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [signupText, isDeleting]);

  const createMutation = useMutation({
    mutationFn: (data) => registerUser(baseUrl, signupApi, data),
    onSuccess: () => {
      router.push("/login");
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
      <Box sx={{ px: { xs: 1, md: 6 } }}>
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
            sx={{
              fontWeight: "bold",
              color: "#333",
              minHeight: "50px",
              width: "100%",
               mt:1
            }}
          >
            Signup {signupText}
            {signupText.length < fullText.length && (
              <span style={{ color: "#925FE2" }}>|</span>
            )}
          </Typography>
        </Box>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => {
            const isFormValid =
              values.firstName &&
              values.lastName &&
              values.email &&
              values.password;
            return (
              <Form>
                <CustomInput
                  label="FirstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.firstName}
                  errors={errors.firstName}
                  sx={{ Padding: 0 }}
                />
                <CustomInput
                  label="LastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.lastName}
                  errors={errors.lastName}
                  sx={{ Padding: 0 }}
                />
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
                <CustomButton
                  type="submit"
                  disabled={!isFormValid}
                  fullWidth
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
                  Sign Up
                </CustomButton>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ mt: 2, color: "#000" }}
                >
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    underline="hover"
                    sx={{ color: "#925FE2", fontWeight: "bold" }}
                  >
                    Login
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

export default SignUpForm;
