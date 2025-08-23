"use client";

import React, { useState } from "react";
import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import SectionLayout from "@/app/layouts/SectionLayout";
import DataTable from "@/app/components/global/AttendanceTable";

export default function DailyAttendancePage() {
  const [search, setSearch] = useState("");

  const columns = [
    { id: "name", label: "Employee Name" },
    { id: "date", label: "Date" },
    { id: "status", label: "Status" },
    { id: "checkIn", label: "Check In" },
    { id: "checkOut", label: "Check Out" },
  ];

  const data = [
    { name: "Ali Khan", date: "2025-08-12", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM" },
    { name: "Sara Ahmed", date: "2025-08-12", status: "Absent", checkIn: "-", checkOut: "-" },
    { name: "John Doe", date: "2025-08-12", status: "Late", checkIn: "09:45 AM", checkOut: "06:10 PM" },
  ];

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionLayout title="Daily Attendance">
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Attendance Filter
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
          <TextField
            label="Search Employee"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TextField
            type="date"
            label="Date"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" color="primary">
            Apply
          </Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Attendance Records
        </Typography>
        <DataTable columns={columns} rows={filteredData} />
      </Paper>
    </SectionLayout>
  );
}
