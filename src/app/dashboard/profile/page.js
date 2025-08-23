"use client";

import SectionLayout from "@/app/layouts/SectionLayout";
import {
  Box,
  Card,
  Typography,
  Avatar,
  Button,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useRef, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [firstLetter, setFirstLetter] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({ firstName: "", lastName: "" });
  const fileInputRef = useRef(null);

  // Load user from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
        setFormValues({
          firstName: parsedUser.firstName || "",
          lastName: parsedUser.lastName || "",
        });
        if (parsedUser?.firstName) {
          setFirstLetter(parsedUser.firstName.charAt(0).toUpperCase());
        }
      }
    } catch (err) {
      console.error("Error reading user from localStorage", err);
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Save profile changes
  const handleSave = () => {
    const updatedUser = { ...userData, ...formValues };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUserData(updatedUser);
    if (updatedUser.firstName) {
      setFirstLetter(updatedUser.firstName.charAt(0).toUpperCase());
    }
    setIsEditing(false);
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedUser = { ...userData, avatar: reader.result };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUserData(updatedUser);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <SectionLayout
      title="People - Profile"
      description="Manage and edit user profile details here."
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: { xs: 2, md: 3 },
          backgroundColor: "#f0f4f5",
          borderRadius: 2,
          maxWidth: 500,
        }}
      >
        {/* Avatar + Edit Icon */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar
              src={userData?.avatar || "/user-avatar.png"}
              sx={{
                width: 70,
                height: 70,
                bgcolor: "#134552",
                fontSize: "1.8rem",
              }}
            >
              {firstLetter}
            </Avatar>
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                background: "#fff",
                boxShadow: 1,
                zIndex: 2, 
                "&:hover": {
                  background: "#f5f5f5", 
                },
              }}
              onClick={() => fileInputRef.current.click()}
            >
              <EditIcon fontSize="small" sx={{ color: "#000" }} />
            </IconButton>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Box>

          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#134552",
                fontWeight: 600,
              }}
            >
              {userData?.firstName || "First Name"}{" "}
              {userData?.lastName || "Last Name"}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {userData?.email || "Email not set"}
            </Typography>
          </Box>
        </Box>

        {/* Edit Form */}
        {isEditing ? (
          <Stack spacing={2} mt={2}>
            <TextField
              label="First Name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              fullWidth
            />
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        ) : (
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-start", mt: 1 }}
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}
      </Card>
    </SectionLayout>
  );
}
