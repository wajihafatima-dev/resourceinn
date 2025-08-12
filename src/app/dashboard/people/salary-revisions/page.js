'use client';

import SectionLayout from "@/app/layouts/SectionLayout";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";

export default function SalaryRevisionsPage() {
  // Example mock data - you can replace with API data
  const salaryData = [
    { year: "2023", oldSalary: "₹ 50,000", newSalary: "₹ 55,000", effectiveDate: "01-Jan-2023" },
    { year: "2024", oldSalary: "₹ 55,000", newSalary: "₹ 60,000", effectiveDate: "01-Jan-2024" },
  ];

  return (
    <SectionLayout
      title="People - Salary Revisions"
      description="Track and manage all salary revision history for employees."
    >
      <Box display="flex" flexDirection="column" gap={2}>
        {salaryData.map((revision, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#f0f4f5",
              borderRadius: 2,
              overflow: "hidden",
              borderLeft: "5px solid #134552",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ color: "#134552" }}>
                {revision.year} Revision
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" sx={{ color: "#555" }}>
                Old Salary: <strong>{revision.oldSalary}</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                New Salary: <strong>{revision.newSalary}</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                Effective Date: {revision.effectiveDate}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </SectionLayout>
  );
}
