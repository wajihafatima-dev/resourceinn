"use client";
import React from "react";
import { Modal, Paper, Typography, Box, Button } from "@mui/material";

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "error",
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          maxWidth: 400,
          mx: "auto",
          p: 3,
          mt:25,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          {message}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center",gap:2 }}>
          <Button
            variant="contained"
            color={confirmColor}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
          <Button variant="outlined" onClick={onClose}>
            {cancelText}
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
