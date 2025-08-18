"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AttendanceSummary from "../components/global/AttendanceSummary";
import ClockWidget from "../components/global/ClockWidget";
import { ATTENDANCE_SUMMARY_DATA, CLOCK_WIDGET_DATA } from "../constants/dashboardConstant";
import Dropdown from "../components/global/Dropdown";

const Dashboard = () => {
  // const [cardsData, setCardsData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const fetchCardsData = await getApi(baseUrl, cardApi)(); 
  //       setCardsData(fetchCardsData);
  //     } catch (error) {
  //       console.error("Error fetching cards:");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCards();
  // }, []);

  // if (loading) {
  //   return <Typography>Loading...</Typography>;
  // }

  return (
    <Box
      sx={{
        ml:{xs: "0px",md:"240px"},
        display: "flex",
        flexDirection: "column",
        gap: { xs: 5, sm: 3, lg: 3 },
      }}
    >
      <AttendanceSummary data={ATTENDANCE_SUMMARY_DATA} />
      <Box sx={{ display:"flex",justifyContent:"center"}}>
      <ClockWidget data={CLOCK_WIDGET_DATA} />
      <Dropdown/>
      </Box>
    </Box>
  );
};

export default Dashboard;