import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images, width = 600, height = 400, autoPlay = true, autoPlaySpeed = 3000 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    arrows: false,
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [autoPlaySpeed, images.length]);

  const imageVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { scale: 1, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: width, mx: "auto", overflow: "hidden" }}>
      <Slider {...settings} beforeChange={(oldIndex, newIndex) => setCurrentIndex(newIndex)}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={currentIndex === index ? "visible" : "hidden"}
            exit="exit"
            variants={imageVariants}
          >
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              width={width} 
              height={height} 
              style={{ objectFit: "cover", borderRadius: "10px" }} 
            />
          </motion.div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
