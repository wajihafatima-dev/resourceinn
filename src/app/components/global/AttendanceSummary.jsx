"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import CardSlider from "./CardSlider";

const AttendanceSummary = ({ 
  data = {}, 
  children 
}) => {
  const {
    title,
    cardData = [],
    styles = {},
  } = data;

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.maincard}>
        {title && (
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={styles.title}
            >
              {title}
            </Typography>
        )}
        {cardData.length > 0 ? (
          <CardSlider styles={styles} cardData={cardData} />
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

export default AttendanceSummary;
