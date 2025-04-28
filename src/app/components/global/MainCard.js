"use client";
import { Box, Card, Container, Typography } from "@mui/material";

const MainCard = ({ children, title = "Dashboard" }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        px: { xs: 0, sm: 0, md: 0 }, 
        mx:{ xs: 4, sm: 0, md: 0 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          // maxWidth: {
          //   xs: "100%",
          //   sm: "90%",
          //   md: "90%",
          //   lg: "85%",
          //   xl: "75%",
          // },
          backgroundColor: "#fff",
          borderRadius: 4,
          boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            borderBottom: "2px dashed lightgray",
            px: 3,
            pt: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.25rem",
              },
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box sx={{ px: 3, py: { xs: 2, sm: 3 } }}>{children}</Box>
      </Card>
    </Container>
  );
};

export default MainCard;
