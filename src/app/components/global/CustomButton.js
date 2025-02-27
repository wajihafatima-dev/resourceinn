import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  type = "button",
  variant = "contained",
  color = "primary",
  fullWidth = false,
  disabled = false,
  onClick,
  isLoading = false,
  children,
  sx,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      onClick={onClick}
      sx={sx}
    >
      {isLoading ? "Loading..." : children}
    </Button>
  );
};

export default CustomButton;
