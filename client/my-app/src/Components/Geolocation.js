import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import image from "./HomeImages/location.png";
// import React from 'react'

export default function Geolocation() {
  var a=24.58;
  var b=73.71;
  const position = [a, b];
  function CustomPopup() {
    return (
      <div>
        <h3>Farmer</h3>
        {/* <p>Custom Popup Text Goes Here...</p> */}
      </div>
    );
  }
  const icon = L.icon({
      iconUrl: image,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    
  
  return (
    <MapContainer center={position} zoom={13} style={{ height: '200px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          {/* You are here <br /> Easily customizable. */}
          <CustomPopup />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
