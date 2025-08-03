"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import AttendanceSummary from "../components/global/AttendanceSummary";
import ClockWidget from "../components/global/ClockWidget";
import { getApi } from "@/apiServices";
import { baseUrl, cardApi } from "@/apiEndPoints";
import { ATTENDANCE_SUMMARY_DATA, CLOCK_WIDGET_DATA } from "../constants/dashboardConstant";
import Dropdown from "../components/global/Dropdown";

const Dashboard = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchCardsData = await getApi(baseUrl, cardApi)(); // () at the end to call the async function
        setCardsData(fetchCardsData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        ml: "85px",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 3, lg: 5 },
      }}
    >
      <AttendanceSummary data={ATTENDANCE_SUMMARY_DATA} />
      <ClockWidget data={CLOCK_WIDGET_DATA} />
      {/* <AddCardForm/> */}
      <Dropdown/>
    </Box>
  );
};

export default Dashboard;
