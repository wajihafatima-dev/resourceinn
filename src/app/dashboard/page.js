import React from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import MainCard from '../components/global/MainCard';
import CardSlider from '../components/global/CardSlider';
import DashboardLayout from '../layouts/DashboardLayout';

const cardData = [
  { id: 1, title: 'Card One', description: 1235 },
  { id: 2, title: 'Card Two', description: 1235 },
  { id: 3, title: 'Card Three', description: 1235},
  { id: 4, title: 'Card Four', description: 1235 },
  { id: 5, title: 'Card Five', description: 1235 },
  { id: 6, title: 'Card Six', description: 1235},
];

const Dashboard = () => {
  return (
    <Container>
      <MainCard children={<CardSlider cards={cardData} />}/>
    </Container>
  );
};

export default Dashboard;
