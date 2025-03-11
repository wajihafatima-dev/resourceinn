"use client";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { loginUser } from "@/apiServices";
import { baseUrl, loginApi } from "@/apiEndPoints";
import CustomButton from "../global/CustomButton";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
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
          p: 8,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Login
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "gray", mb: 3 }}
        >
          Enter your credentials to access your account
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
                variant="standard"
                fullWidth
                margin="normal"
                InputProps={{ disableUnderline: true }}
                sx={{
                  borderBottom: "2px solid #e0e0e0",
                  "&:hover": {
                    borderBottom: "2px solid #925FE2",
                  },
                }}
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
                variant="standard"
                fullWidth
                margin="normal"
                InputProps={{ disableUnderline: true }}
                sx={{
                  borderBottom: "2px solid #e0e0e0",
                  "&:hover": {
                    borderBottom: "2px solid #925FE2",
                  },
                }}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <CustomButton
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  background: "linear-gradient(90deg, #925FE2, #7B3FE4)",
                  color: "#fff",
                  borderRadius: "30px",
                  padding: "10px 0",
                  "&:hover": {
                    background: "linear-gradient(90deg, #7B3FE4, #925FE2)",
                  },
                }}
                isLoading={createMutation.isLoading}
              >
                Login
              </CustomButton>
              <Typography variant="body2" textAlign="center" sx={{ mt: 2 ,color:"#000"}}>
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  underline="hover"
                  sx={{ cursor: "pointer", color: "#925FE2" }}
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
