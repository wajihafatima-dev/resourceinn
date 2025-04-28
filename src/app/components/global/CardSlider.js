"use client";
import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Sample background colors
const backgroundColors = [
  "#ff7b6b", "#6bc1ff", "#6bff95", "#ffe36b", "#d36bff", "#6b9eff"
];

const CardSlider = ({ cards }) => {
  return (
    <Box sx={{ px: 0 }}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={13}
        pagination={{ clickable: true }}
        style={{ paddingBottom: 3 }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
            }}
          >
            <Card
              elevation={4}
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: backgroundColors[index % backgroundColors.length],
                py: 2,
                px: 2,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  color: "#fff",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  color: "#f5f5f5",
                }}
              >
                {card.description}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardSlider;
