"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const ClockWidget = ({ data }) => {
  const { title, styles } = data || {};
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const day = time.toLocaleDateString("en-US", { weekday: "long" });
  const hours = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const seconds = time.toLocaleTimeString("en-US", {
    second: "2-digit",
  });
  const date = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={styles.mainBox}
    >
      <Box
        sx={styles.maincard}
      >
        {title && (
          <Box sx={{ borderBottom: "2px dashed lightgray", }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ ...styles?.title }}
            >
              {title}
            </Typography>
          </Box>
        )}

        <Box
          sx={styles.clockStyle}
        >
          <Typography variant="body2" color="text.secondary">
            {day}
          </Typography>

          <Box display="flex" alignItems="baseline">
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" } }}
            >
              {hours}
            </Typography>
            <Typography variant="caption" sx={{color:"darkgray", ml: 0.5 ,fontWeight:600,fontSize: { xs: "1.2rem", sm: "1.7rem" }  }}>
              :{seconds}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="caption" color="text.disabled">
            Asia/Karachi
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClockWidget;
