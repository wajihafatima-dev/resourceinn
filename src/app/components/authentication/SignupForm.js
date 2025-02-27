"use client";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
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
      setError(err.message || "Something went wrong");
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Sign Up
        </Typography>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            createMutation.mutate(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                label="First Name"
                name="firstName"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
                margin="normal"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={createMutation.isLoading}
              >
                {createMutation.isLoading ? "Signing up..." : "Sign Up"}
              </Button>
              <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link
                  href="/login"
                  underline="hover"
                  sx={{ cursor: "pointer", color: "blue" }}
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
