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
import { loginUser } from "@/apiServices";
import { baseUrl, loginApi } from "@/apiEndPoints";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6,"password must be 6 characters").required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: (data) => loginUser(baseUrl, loginApi, data),
    onSuccess: () => {
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
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
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
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
                {createMutation.isLoading ? "Logging in..." : "Login"}
              </Button>
              <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  underline="hover"
                  sx={{ cursor: "pointer", color: "blue" }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default LoginForm;
