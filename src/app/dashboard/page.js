import React from 'react';
import {
  Grid,
  Card,
  Typography,
  Box,
} from '@mui/material';
import CardSlider from '../components/global/CardSlider';

const cardData = [
  { id: 1, title: 'Card One', description: 'This is the first card.' },
  { id: 2, title: 'Card Two', description: 'This is the second card.' },
  { id: 3, title: 'Card Three', description: 'This is the third card.' },
  { id: 1, title: 'Card One', description: 'This is the first card.' },
  { id: 2, title: 'Card Two', description: 'This is the second card.' },
  { id: 3, title: 'Card Three', description: 'This is the third card.' }
];

const Dashboard = () => {
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: 4,
          boxShadow: "0px 3px 10px rgba(0,0,0,0.1)"
        }}
      >
        <Box sx={{ borderBottom: "2px dashed lightgray", pl: 3, pt:1}}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Dashboard
          </Typography>
        </Box>
        <CardSlider cards={cardData} />
      </Card>
      </Box>
  );
};

export default Dashboard;
