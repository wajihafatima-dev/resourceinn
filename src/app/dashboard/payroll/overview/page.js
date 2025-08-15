'use client';

import { Box, Card, CardContent, Typography } from "@mui/material";

export default function PayrollOverviewPage() {
  const stats = [
    { label: "Total Employees", value: "150" },
    { label: "Payroll Processed", value: "₹ 12,50,000" },
    { label: "Pending Payments", value: "₹ 1,80,000" },
  ];

  return (
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={2}>
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          sx={{
            backgroundColor: "#fff",
            borderLeft: "5px solid #134552",
            borderRadius: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ color: "#134552" }}>
              {stat.label}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {stat.value}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
