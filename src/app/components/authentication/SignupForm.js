"use client";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { registerUser } from "@/apiServices";
import { baseUrl, signupApi } from "@/apiEndPoints";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be 6 characters").required("Password is required"),
});

const SignupForm = () => {
  const router = useRouter();
  const createMutation = useMutation({
    mutationFn: (data) => registerUser(baseUrl, signupApi, data),
    onSuccess: () => {
      router.push("/login");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          p: 4,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          borderRadius: "16px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Join us and manage your resources effortlessly!
        </Typography>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            createMutation.mutate(values);
          }}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#007BFF",
                    },
                  },
                }}
              />
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#007BFF",
                    },
                  },
                }}
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#007BFF",
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#007BFF",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  background: "linear-gradient(45deg, #007BFF, #00C6FF)",
                  color: "#fff",
                  fontWeight: "bold",
                  boxShadow: "0 4px 8px rgba(0, 123, 255, 0.4)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    background: "linear-gradient(45deg, #00C6FF, #007BFF)",
                    transform: "scale(1.02)",
                  },
                }}
                disabled={createMutation.isLoading}
              >
                {createMutation.isLoading ? "Signing up..." : "Sign Up"}
              </Button>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link
                  href="/login"
                  underline="hover"
                  sx={{ cursor: "pointer", color: "#007BFF" }}
                >
                  Login
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default SignupForm;
