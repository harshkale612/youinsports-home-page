import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Plans = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Plans & Pricing
      </Typography>
      <Typography variant="body1">
        This page is under development. Pricing plans and subscription options will be implemented here.
      </Typography>
    </Container>
  );
};

export default Plans;
