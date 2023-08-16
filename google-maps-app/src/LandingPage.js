import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import GoogleMapsComponent from './GoogleMap';

const LandingPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Google Maps App
        </Typography>
        <GoogleMapsComponent />
      </div>
    </Container>
  );
};

export default LandingPage;