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
        <button type="submit" onSubmit={getLocation}> Search</button>
      </div>

     <div className="location">
      <p>{data.name}
      </p>
     </div>
     <div className="temp">
      <h1>{data.main.temp}</h1>
     </div>
     <div className="description">
      <p>{data.weather[0].main}</p>
     </div>
     <div className="feels-like">
      <p>{data.main.feels_like}</p>
     </div>
     <div className="humidity">
      <p>{data.main.humidity}%</p>
      </div>
      <div className="wind">
        <p>{data.wind.speed}</p>
      </div>


     </div>
  );
}

export default App;
