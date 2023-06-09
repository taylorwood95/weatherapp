import { useState, useEffect } from "react";
import './App.css';


function App() {

  const [data, setData] =  useState({})
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log(`Latitude is: ${lat}`)
    console.log(`Longitude is: ${long}`)
  }, [lat, long]);



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7a258e3fc5e143422021f76bdcfac93c`

  const getLocation = (event) => {
    if(event.key === 'Enter'){
   
    fetch(url)
    .then(response => response.json())
    .then( data => setData(data))
    setLocation('')
    }

  }
  






  return (
      <div className="app">
      <div className="container">
      <div className="search">
        <input className="input"
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        type="text"
        onKeyDown={getLocation}
        />
      </div>

      <div className="top">

     <div className="location">
      <p>{data.name}
      </p>
     </div>
     <div className="temp"> 
      {data.main ? <h1>{ (data.main.temp - 273.15).toFixed(0) }°C</h1> : null}
     </div>

     
     </div>
     <div className="description">
      {data.weather ? <p>{data.weather[0].main}</p> : null }
     </div>

  
       <div className="feels-like">
      { data.main ? <p>{(data.main.feels_like - 273.15).toFixed()}</p> : null }
     </div>
     <div className="humidity">
      { data.main ? <p>{data.main.humidity}%</p> : null }
      </div>
      <div className="wind">
       { data.wind ?  <p>{data.wind.speed} MPH </p> : null }
      </div>
      </div>

     
     </div>

   
  );
}

export default App;
