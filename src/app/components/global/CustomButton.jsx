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
  sx = {},
}) => {
  const isBtnDisabled = disabled || isLoading;

  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      disabled={isBtnDisabled}
      onClick={onClick}
      sx={{
        borderRadius: "30px",
        padding: "10px 0",
        ...sx,
        ...(isBtnDisabled && {
          background: "#f0f0f0",
          color: "#aaa",
          cursor: "not-allowed",
          "&:hover": {
            background: "#f0f0f0",
          },
        }),
      }}
    >
      {isLoading ? "Loading..." : children}
    </Button>
  );
};

export default CustomButton;
