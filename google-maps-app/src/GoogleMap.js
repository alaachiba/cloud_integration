import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 36.80961225036649,
  lng: 10.130312724378129,
};

const GoogleMapsComponent = () => {
  return (
    <LoadScript googleMapsApiKey="////key">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} />
    </LoadScript>
  );
};

export default GoogleMapsComponent;
