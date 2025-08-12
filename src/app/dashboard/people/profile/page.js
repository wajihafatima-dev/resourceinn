'use client';

import SectionLayout from "@/app/layouts/SectionLayout";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [firstLetter, setFirstLetter] = useState("");

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
        if (parsedUser?.firstName) {
          setFirstLetter(parsedUser.firstName.charAt(0).toUpperCase());
        }
      }
    } catch (err) {
      console.error("Error reading user from localStorage", err);
    }
  }, []);

  return (
    <SectionLayout
      title="People - Profile"
      description="Manage and view user profile details here."
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          backgroundColor: "#f0f4f5",
          borderRadius: 2,
        }}
      >
        <Avatar
          src="/user-avatar.png"
          sx={{
            width: 80,
            height: 80,
            mr: 3,
            bgcolor: "#134552",
            fontSize: "2rem",
          }}
        >
          {firstLetter}
        </Avatar>
        <CardContent>
          <Typography variant="h6" sx={{ color: "#134552" }}>
            {userData?.firstName || "First Name"}
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            {userData?.lastName || "Last Name"}
          </Typography>
        </CardContent>
      </Card>
    </SectionLayout>
  );
}
