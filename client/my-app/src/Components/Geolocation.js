import React, { useState } from 'react';
import axios from "axios";

function Geolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState({});

  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
      });
      sendLocation(position.coords.latitude, position.coords.longitude);
    });
  }


  function sendLocation(latitude, longitude) {
    axios.post("http://localhost:3001/Geolocation", { latitude, longitude })
      .then(response => {
        console.log(response);
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  }

  return (
    <div>
      <button onClick={getLocation}>Sent Location</button>
      <br />
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>Location Set</div>}
      {isError && <div>Error!</div>}
    </div>
  );
}

export default Geolocation;
