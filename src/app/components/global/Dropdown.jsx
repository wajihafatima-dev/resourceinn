"use client";
import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const generateMonthYearRanges = (startYear = 2020, count = 10) => {
  const ranges = [];
  for (let i = 0; i < count; i++) {
    const start = new Date(startYear + i, 7); // August
    const end = new Date(startYear + i + 1, 6); // July
    const label = `${start.toLocaleString("default", {
      month: "long",
    })}, ${start.getFullYear()} - ${end.toLocaleString("default", {
      month: "long",
    })}, ${end.getFullYear()}`;
    ranges.push({ label, startYear: start.getFullYear() });
  }
  return ranges;
};

const Dropdown = () => {
  const ranges = generateMonthYearRanges(2020, 10);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = useState(ranges[4]); // Default selection

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (range) => {
    if (range) setSelected(range);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        variant="outlined"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          px: 2,
          py: 1,
          fontWeight: 500,
          color: "#333",
        }}
      >
        {selected.label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose(null)}>
        {ranges.map((range, index) => (
          <MenuItem key={index} onClick={() => handleClose(range)}>
            {range.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Dropdown;
