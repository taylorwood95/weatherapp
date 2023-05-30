import { useState } from "react";


function App() {

  const [data, setData] =  useState({})
  const [location, setLocation] = useState('')



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7a258e3fc5e143422021f76bdcfac93c`

  const getLocation = (event) => {
    if (event.key === "Enter"){
    fetch(url)
    .then(response => response.json())
    .then( data => setData(data))
    console.log(setData)
    
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
        onKeyPress={getLocation}
        />
      </div>

     <div className="location">
      <p>Amsterdam</p>
     </div>
     <div className="temp">
      <h1>60 degrees</h1>
     </div>
     <div className="description">
      <p>Clouds</p>
     </div>
     <div className="feels-like">
      <p>65</p>
     </div>
     <div className="humidity">
      <p>20%</p>
      </div>
      <div className="wind">
        <p>15 MPH</p>
      </div>


     </div>
  );
}

export default App;
