"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SectionLayout from "@/app/layouts/SectionLayout";

export default function SalaryRevisions() {
  const salaryData = [
    { id: 1, employee: "John Doe", oldSalary: 50000, newSalary: 55000, effectiveDate: "2025-01-01" },
    { id: 2, employee: "Jane Smith", oldSalary: 60000, newSalary: 65000, effectiveDate: "2025-02-15" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
        <SectionLayout
              title="People - Salary Revisions"
              description="View and manage leave encashment history and balances."
            >
        <Button variant="contained" startIcon={<AddIcon />} color="primary">
          Add Revision
        </Button>

      {/* Table */}
      <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><b>Employee</b></TableCell>
              <TableCell><b>Old Salary</b></TableCell>
              <TableCell><b>New Salary</b></TableCell>
              <TableCell><b>Effective Date</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.employee}</TableCell>
                <TableCell>{row.oldSalary.toLocaleString()}</TableCell>
                <TableCell>{row.newSalary.toLocaleString()}</TableCell>
                <TableCell>{row.effectiveDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </SectionLayout>
    </Box>
  );
}
