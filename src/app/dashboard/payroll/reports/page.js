"use client";

import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CustomTable from "@/app/components/global/CustomTable";

export default function PayrollReports() {
  const [search, setSearch] = useState("");

  const columns = [
    { header: "Employee Name", accessor: "employeeName" },
    { header: "Department", accessor: "department" },
    { header: "Month", accessor: "month" },
    { header: "Salary", accessor: "salary" },
    { header: "Status", accessor: "status" },
  ];

  const data = [
    { employeeName: "Ali Khan", department: "Finance", month: "August", salary: "PKR 80,000", status: "Paid" },
    { employeeName: "Sara Ahmed", department: "HR", month: "july", salary: "PKR 65,000", status: "Pending" },
    { employeeName: "Ahmed Raza", department: "IT", month: "jan", salary: "PKR 90,000", status: "Paid" },
  ];

  const filteredReports = data.filter((row) =>
    row.month.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Payroll Reports
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        View and download monthly payroll reports.
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Search by Month"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: "250px" }}
        />
        <Button variant="contained" color="primary">
          Generate New Report
        </Button>
      </Box>

      {/* Table */}
      <CustomTable columns={columns} data={filteredReports} title="Payroll Reports" />
    </Box>
  );
}
