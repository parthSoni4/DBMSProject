import React, { useState } from 'react';
import axios from 'axios';

function GeolocationExample() {
  const [location, setLocation] = useState({});

  
  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude 
      });
      sendLocation(position.coords.latitude, position.coords.longitude);
    });
  }

  function sendLocation(latitude, longitude) {
    axios.post("http://localhost:3001/Geolocation", { latitude, longitude })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

 return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      <br />
      Latitude: {location.latitude}<br/>
      Longitude: {location.longitude}
    </div>
  );
}

export default GeolocationExample;


  

  
 