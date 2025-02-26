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
import { registerUser } from "@/apiServices"; 
import { baseUrl, signupApi } from "@/apiEndPoints";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    createMutation.mutate({ firstName, lastName, email, password });
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
          Sign Up
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;
