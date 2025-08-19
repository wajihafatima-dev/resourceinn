"use client";

import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SectionLayout from "@/app/layouts/SectionLayout";

export default function SalaryRevisions() {
  const [search, setSearch] = useState("");

  const salaryData = [
    { id: 1, employee: "John Doe", oldSalary: 50000, newSalary: 55000, effectiveDate: "2025-01-01" },
    { id: 2, employee: "Jane Smith", oldSalary: 60000, newSalary: 65000, effectiveDate: "2025-02-15" },
    { id: 3, employee: "Michael Lee", oldSalary: 45000, newSalary: 50000, effectiveDate: "2025-03-10" },
  ];

  const filteredData = salaryData.filter((row) =>
    row.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <SectionLayout
        title="People - Salary Revisions"
        description="View and manage salary revision history."
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <TextField
            label="Search Employee"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="contained" startIcon={<AddIcon />} color="primary">
            Add Revision
          </Button>
        </Box>

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
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.employee}</TableCell>
                    <TableCell>{row.oldSalary.toLocaleString()}</TableCell>
                    <TableCell>{row.newSalary.toLocaleString()}</TableCell>
                    <TableCell>{row.effectiveDate}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No matching records found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </SectionLayout>
    </Box>
  );
}
