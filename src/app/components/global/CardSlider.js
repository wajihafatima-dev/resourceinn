// "use client";
// import React from "react";
// import Slider from "react-slick";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const CardSlider = ({ cards, slidesToShow = 3 }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <Box sx={{ px: 2 }}>
//       <Slider {...settings}>
//         {cards.map((card, index) => (
//           <motion.div key={index} whileHover={{ scale: 1.03 }}>
//             <Card sx={{ m: 0, height: "10%" }} elevation={3}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   {card.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {card.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default CardSlider;
