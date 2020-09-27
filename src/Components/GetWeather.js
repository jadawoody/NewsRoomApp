import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import OurLogo from '../images/OURLOGO$.png';
function GetWeather(props) {
  let [weather, setWeather] = useState({});
  let [zip, setZip] = useState([]);

  // console.log("use")
  const weatherSearch = async (e) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=0371e4942a3c25413c7c7598193f0b57`
    );
    setWeather(res.data);
    console.log(res.data);
  };
  // weatherSearch()
   console.log(zip);

  const displayWeather = () => {};
  // function getZip(){
  //     const handleChange = (e) => {
  //     setZip(e.target.value)
  //     }
  // }
  
  return (
    <div>
    <header className="logoAllPage">
    <ul className="navheadbar">
          <li><Link to={`/NewsPage`}>News</Link></li>
          <li><Link to={`/WeatherPage`}>Weather</Link></li>
          <li><Link to={`/SportsPage`}>Sports</Link></li>
          <li><Link to={`/CalmPage`}>Calming Corner</Link></li>
          <li><Link to={`/TechPage`}>Tech</Link></li>
          <li><Link to={`/CreatorPage`}>Creators</Link></li>
          </ul>
    <Link to={`/`}><img src={OurLogo} alt="our news logo" className="ourlogo" ></img></Link>
    </header>

      <h3>Welcome To The Weather Page!</h3>
      <p>Search for Today's Weather by Zipcode!</p>
      
      <input
        onChange={(e) => setZip(e.target.value)}
        value={zip}
        type="text"
        placeholder="Search By Zip Code"
        name="searchBar"
      ></input>
      <button onClick={weatherSearch} type="submit">
        Search!
      </button>

      <p>You're In: {weather.name}</p>
      <p>Current Temperature: {weather.main?.temp}</p>
      <p>Humidity: {weather.main?.humidity}</p>
      <p>Today's High: {weather.main?.temp_max}</p>
      <p>Today's Low: {weather.main?.temp_min}</p>
      <footer className="lilFooter">
          <p>Created by Rebecca Sell and Jada Woody</p>
          <p>Ironhack Class of Aug 2020</p>
        </footer>
    </div>
  );
}

export default GetWeather;
