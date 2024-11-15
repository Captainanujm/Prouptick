import "leaflet/dist/leaflet.css";
// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const location = {
  lat: 25.3431042,  // Replace with your desired latitude
  lng: 81.9086182, // Replace with your desired longitude
  zoom: 30  // Zoom level
};
const MapComponent = () => {

  return (
    <MapContainer
      center={[location.lat,location.lng]}  
      zoom={location.zoom}           
      style={{ height: "400px", width: "100%" }}  
    >
      {}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Marker at the defined position */}
      <Marker position={[location.lat,location.lng]}>
        <Popup>Your desired location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
