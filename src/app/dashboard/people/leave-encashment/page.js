"use client";

import SectionLayout from "@/app/layouts/SectionLayout";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from "@mui/material";

export default function LeaveEncashmentPage() {
  // Example mock data - replace with API data later
  const leaveData = [
    {
      year: "2025",
      totalLeaves: 30,
      usedLeaves: 20,
      encashedLeaves: 5,
      encashmentAmount: "₹ 15,000",
    },
  ];

  return (
    <Box
      sx={{
        maxHeight: "80vh",
        overflowY: "auto",
        pr: 1,
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#134552",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <SectionLayout
        title="People - Leave Encashment"
        description="View and manage leave encashment history and balances."
      >
        <Box display="flex" flexDirection="column" gap={2}>
          {leaveData.map((record, index) => (
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
                  {record.year} Leave Encashment
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Total Leaves: <strong>{record.totalLeaves}</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Used Leaves: <strong>{record.usedLeaves}</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Encashed Leaves: <strong>{record.encashedLeaves}</strong>
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  Encashment Amount: <strong>{record.encashmentAmount}</strong>
                </Typography>

                <Box mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#134552",
                      "&:hover": { backgroundColor: "#0f3d45" },
                      textTransform: "none",
                    }}
                  >
                    Apply for Encashment
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionLayout>
     </Box>
  );
}
