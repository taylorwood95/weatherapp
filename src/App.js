import { useState } from "react";


function App() {

  const [data, setData] =  useState({})
  const [location, setLocation] = useState('')



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7a258e3fc5e143422021f76bdcfac93c`

  const getLocation = (event) => {
    if(event.key === 'Enter'){
  
    fetch(url)
    .then(response => response.json())
    .then( data => setData(data))
    console.log(data.name)
    setLocation('')
    }

  }
  






  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter Location"
        type="text"
        onKeyDown={getLocation}
        />
      </div>

     <div className="location">
      <p>{data.name}
      </p>
     </div>
     <div className="temp">
      {data.main ? <h1>{ (data.main.temp - 273.15).toFixed(1) }</h1> : null}
     </div>
     <div className="description">
      {data.weather ? <p>{data.weather[0].main}</p> : null }
     </div>

  
       <div className="feels-like">
      { data.main ? <p>{(data.main.feels_like - 273.15).toFixed(1)}</p> : null }
     </div>
     <div className="humidity">
      { data.main ? <p>{data.main.humidity}%</p> : null }
      </div>
      <div className="wind">
       { data.wind ?  <p>{data.wind.speed} MPH </p> : null }
      </div>

     
     </div>

   
  );
}

export default App;
