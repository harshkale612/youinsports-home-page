import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AthleteProfile = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Athlete Profile
      </Typography>
      <Typography variant="body1">
        This page is under development. Individual athlete profiles will be implemented here.
      </Typography>
    </Container>
  );
};

export default AthleteProfile;
