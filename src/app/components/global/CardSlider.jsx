"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const backgroundColors = [
  "#00AB551F",
  "#7A091614",
  "#FFAB0014",
  "#8224E314",
  "#919EAB14",
  "#00AB551F",
];

const defaultBreakpoints = {
  600: { slidesPerView: 2 },
  768: { slidesPerView: 2 },
  900: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 4 },
};

const CardSlider = ({
  cardData = [],
  breakpoints = defaultBreakpoints,
  styles = {},
}) => {
  return (
    <Box sx={{ py: 2, px: 3 }}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={breakpoints}
      >
        {cardData.map((item, index) => (
          <SwiperSlide key={index}>
            <Link style={{ textDecoration: "none" }} href={item?.link || ""}>
              <Box
                sx={{
                  backgroundColor:
                    backgroundColors[index % backgroundColors.length],
                  p: 2,
                  borderRadius: 2,
                  ...styles.cardStyle,
                }}
              >
                <Typography sx={styles.cardTitleStyle}>
                  {item.title}
                </Typography>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardSlider;
