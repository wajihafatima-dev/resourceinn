"use client";
import { useState } from "react";
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
import { loginUser } from "@/apiServices";
import { baseUrl, loginApi } from "@/apiEndPoints";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: (data) => loginUser(baseUrl, loginApi, data),
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (err) => {
      setError(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    createMutation.mutate({ email, password });
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
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
