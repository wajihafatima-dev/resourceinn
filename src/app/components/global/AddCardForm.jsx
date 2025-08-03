"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "..//..//features/cards/cardsThunks";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddCardForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.title || !form.description) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(
      addCard({
        title: form.title,
        description: parseInt(form.description),
      })
    );

    setForm({ title: "", description: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
    >
      <Typography variant="h6">Add New Card</Typography>

      <TextField
        name="title"
        label="Title"
        value={form.title}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        name="description"
        label="Description (Number)"
        value={form.description}
        onChange={handleChange}
        type="number"
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit">
        Add Card
      </Button>
    </Box>
  );
};

export default AddCardForm;
