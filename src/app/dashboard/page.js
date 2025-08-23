"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import AttendanceSummary from "../components/global/AttendanceSummary";
import ClockWidget from "../components/global/ClockWidget";
import {
  ATTENDANCE_SUMMARY_DATA,
  CLOCK_WIDGET_DATA,
} from "../constants/dashboardConstant";
import Dropdown from "../components/global/Dropdown";

const Dashboard = () => {
  return (
    <Box
      sx={{
        ml: { xs: "0px", md: "240px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 5, sm: 3, lg: 3 },
      }}
    >
      <AttendanceSummary data={ATTENDANCE_SUMMARY_DATA} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: {xs:4,md:8},
        }}
      >
        <Box sx={{ flex: 1 }}>
          {" "}
          <Dropdown />
        </Box>
        <Box sx={{ flex: 1,justifyItems:"right" }}>
          {" "}
          <ClockWidget data={CLOCK_WIDGET_DATA} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
